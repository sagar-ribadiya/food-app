import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from './Navbar'; // Import the Navbar component
import ProductDetails from './ProductDetails'; // Import the ProductDetails component
import Footer from './Footer'; // Import the Footer component

const images = [
   'images/pizza.jpg',
   'images/burger.jpeg',
   'images/pasta.avif'
 ];
 
 
const foodItems = [
  { id: 1, name: 'Pizza', price: 900, image: 'images/pizza.jpg' },
  { id: 2, name: 'Burger', price: 130, image: 'images/burger.jpeg' },
  { id: 3, name: 'Pasta', price: 230, image: 'images/pasta.avif' },
  { id: 4, name: 'Dosa', price: 450, image: 'images/dosa.jpg' },
  { id: 5, name: 'Khaman', price: 100, image: 'images/khaman.jpeg' },
  { id: 6, name: 'puff', price: 45, image: 'images/puff.jpeg' },
  { id: 7, name: 'Manchorian', price: 140, image: 'images/manchoorian.jpg' },
  { id: 8, name: 'Samosa', price: 25, image: 'images/samosa.webp' },
  { id: 9, name: 'Sweets', price: 950, image: 'images/sweet.jpeg' },
  { id: 10, name: 'Salad', price: 200, image: 'images/salad.jpeg' },
  { id: 11, name: 'Dal Bati', price: 80, image: 'images/dalbati.jpeg' },
  { id: 12, name: 'Margherita Pizza', price: 250, image: 'images/margherita.jpeg' }
  
];


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  };

  const decreaseQuantity = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem && existingItem.quantity === 1) {
      removeFromCart(item);
    } else {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      ));
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const getQuantity = (item) => {
    const cartItem = cart.find(cartItem => cartItem.id === item.id);
    return cartItem ? cartItem.quantity : 1;
  };

  const handleOrderNow = () => {
    const foodItemsSection = document.querySelector('.food-items');
    if (foodItemsSection) {
      foodItemsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <Navbar cartCount={cart.reduce((count, item) => count + item.quantity, 0)} toggleCart={toggleCart} />  {/* Pass cart count and toggle function */}
      <div className="slider">
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
            <button className="buy-now-button" onClick={handleOrderNow}>Order Now</button>
          </div>
        ))}
      </div>

      <div className="food-items">
        {foodItems.map((item) => (
          <div className="food-card" key={item.id} onClick={() => setSelectedProduct(item)}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <div className="quantity-buttons">
              <button onClick={(e) => { e.stopPropagation(); decreaseQuantity(item); }}>-</button>
              <span>{getQuantity(item)}</span>
              <button onClick={(e) => { e.stopPropagation(); addToCart(item); }}>+</button>
            </div>
            <button onClick={(e) => { e.stopPropagation(); setSelectedProduct(item); }} className="add-to-cart">Order Now</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {isCartOpen && (
        <div className="cart-modal">
          <div className="cart-content">
            <button className="close-cart" onClick={toggleCart}>X</button>
            <h3>Cart Details</h3>
            <ul className="cart-items">
              {cart.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Price: ₹{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h4>Total Amount: ₹{totalAmount}</h4>
            </div>
          </div>
        </div>
      )}

      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default Home;
