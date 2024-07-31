import React from 'react';
import './WhatsAppButton.css';
import { assets } from '../../assets/assets';

const WhatsAppButton = ({ phoneNumber, message }) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <div className="whatsapp">
            <div className="contact">
                <h1>Contact Us</h1>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                <img src={assets.whatsapp_icon} alt="" />Chat with us on WhatsApp
            </a>
        </div>

    );
};

export default WhatsAppButton;

