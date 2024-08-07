import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const validateEmail = (email) => {
        const re = /^(([^<>()[\],;:\s@"]+(\.[^<>()[\],;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email.');
            return;
        }
    
        const serviceID = 'service_jp7dxqq';
        const templateID = 'template_ff16l5q';
        const publicKey = 'znBnelgXBS_pfMYfw';
    
        const templateParams = {
            from_name: name,
            email_from: email,
            message,
        };
    
        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(response => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Form submitted successfully!');
            }, err => {
                console.log('FAILED...', err);
                alert('Failed to send the message, please try again.');
            });
    };

    return (
        <div className="contact-container">
            <div className='title-contact'>
                <h1>CONTACT ME</h1>
                <div className='line'></div>
                <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
            </div>
            <form className='contact-content' onSubmit={handleSubmit}>
                <div className="input-group">
                    <input className='name' name='name_from' type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className='email' name='email_from' type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <textarea placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
