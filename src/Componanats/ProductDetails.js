import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="product-details">
      <button className="close-button" onClick={onClose}>X</button>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>{/* Description or additional details here */}</p>
    </div>
  );
};

export default ProductDetails;
