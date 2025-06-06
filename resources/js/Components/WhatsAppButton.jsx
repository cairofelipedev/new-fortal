import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="http://wa.me/8532585888"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                zIndex: 1000,
                textDecoration: 'none',
            }}
        >
            <FaWhatsapp size={30} />
        </a>
    );
};

export default WhatsAppButton;
