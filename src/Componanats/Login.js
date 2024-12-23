import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import Navbar from './Navbar';


function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
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
        try {
            const response = await axios.post('http://localhost:5000/api/login', form);
            setResponseMessage(response.data.msg);
            alert(response.data.msg); // Show alert with response message
            navigate('/');
        } catch (error) {
            setResponseMessage('Failed to login');
            alert('Failed to login'); // Show alert with error message
        }
    };

    const handleSignupNavigate = () => {
        navigate('/signup'); // Navigate to signup page
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="header">Login</h1>
                <form onSubmit={handleSubmit} className="form">
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
                    <div className="button-group">
                        <button type="submit" className="button">Login</button>
                        <button type="button" onClick={handleSignupNavigate} className="button">SignUp</button>
                    </div>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </>
    );
}

export default Login;
