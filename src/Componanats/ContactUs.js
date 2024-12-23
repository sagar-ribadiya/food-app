import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import './ContactUs.css'


function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const navigate = useNavigate();
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', form); // Log form data
        try {
            const response = await axios.post('http://localhost:5000/api/signup', form);
            console.log('Response:', response); // Log response
            if (response && response.data && response.data.msg) {
                setResponseMessage(response.data.msg);
                alert(response.data.msg); // Show alert with response message
                console.log('Navigating to login page'); // Log navigation
                navigate('/login'); // Redirect to login page
            } else {
                console.error('No response message from backend');
                alert('Failed to sign up'); 
            }
        } catch (error) {
            console.error('Contact Us error:', error); 
            setResponseMessage('Failed to Contact Us');
            alert('Failed to Contact Us'); 
        }
    };

    return (
        <>
            <Navbar />
            <div className="contact-container">
                <h1 className="contact-header">Contact Us</h1>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-form-group">
                        <label htmlFor="name" className="contact-label">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="contact-input"
                            required
                        />
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="email" className="contact-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="contact-input"
                            required
                        />
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="message" className="contact-label">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="contact-textarea"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="contact-button">Contact Us</button>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
            
        </>
    );
}

export default ContactUs;
