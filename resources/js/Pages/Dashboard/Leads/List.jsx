import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../../../../css/leads.module.scss'

const LeadsList = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const response = await axios.get('/api/leads');
                setLeads(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar banners:', error);
                setLoading(false);
            }
        };

        fetchLeads();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <div className={style.areaList}>

                {leads.length === 0 ? (
                    <div className="text-gray-500 text-lg">Nenhum cadastro encontrado</div>
                ) : (
                    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6">
                        {leads.map((lead) => (
                            <article key={lead.id} className={style.leadArea}>
                                <div className={style.imageArea}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
                                </div>

                                <div className={style.informationArea}>
                                    <h1>{lead.name}</h1>
                                    <p>{lead.email}</p>
                                </div>
                            </article>
                        ))
                        }
                    </div>
                )}
            </div>
        </>
    );
};

export default LeadsList;
