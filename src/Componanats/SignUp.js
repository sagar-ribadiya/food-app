/* eslint-disable no-undef */
import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import Navbar from './Navbar';
const API_URL = 'https://your-netlify-api-url/api/signup'; // Replace with your actual API URL




function Signup() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });
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
        try {
            const response = await axios.post((API_URL, form), form);
            setResponseMessage(response.data.msg);
        } catch (error) {
            setResponseMessage('Failed to sign up');
        }
    };

    return (
        <>
        <Navbar/>
        <div className="container">
            <h1 className="header">Sign Up</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="name" className="label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <button type="submit" className="button">Sign Up</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
        
        </>
    );
}

export default Signup;
