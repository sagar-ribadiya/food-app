import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componanats/Home';
import Login from './Componanats/Login';
import SignUp from './Componanats/SignUp';
import ContactUs from './Componanats/ContactUs';
import About from './Componanats/About';


const App = () => {
  return (
    <>
    
    
    
    <Router>
    
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<ContactUs/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
 
    </Routes> 
      
    </Router>
    </>
  );
};

export default App;
