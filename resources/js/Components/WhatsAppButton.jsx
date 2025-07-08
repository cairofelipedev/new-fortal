import React, { useEffect, useState } from "react";
import axios from "axios";

const WhatsAppButton = () => {
    const [whatsappData, setWhatsappData] = useState(null);

    useEffect(() => {
        axios.get("/api/whatsapp-button")
            .then(response => setWhatsappData(response.data))
            .catch(error => console.error("Erro ao carregar botão WhatsApp:", error));
    }, []);

    if (!whatsappData) return null;

    return (
        <a
            href={whatsappData.whatsapp_link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                // backgroundColor: '#25D366',
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
                overflow: 'hidden',
                padding: 0,
            }}
        >
            <img
                src={`/uploads/uploads/whatsapp/${whatsappData.image_url}`}
                alt="WhatsApp"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                }}
            />
        </a>
    );
};

export default WhatsAppButton;
