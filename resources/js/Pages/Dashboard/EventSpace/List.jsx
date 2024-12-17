import React, { useEffect, useState } from 'react';
import style from '../../../../css/eventSpace.module.scss'
import axios from 'axios';

const LeadsList = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const response = await axios.get('/api/spaces');
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
            {/* {leads.length === 0 ? (
                <div className="text-gray-500 text-lg">Nenhum cadastro encontrado</div>
            ) : (
                <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {leads.map((lead) => (
                        <div key={lead.id} className="bg-white shadow-sm rounded-lg p-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold mb-2">{lead.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            )} */}

            <div className={style.spaceContainer}>
                {/* Card Space */}
                <article className={style.cardSpace}>
                    <div className={style.imageArea}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsMylv8v2NKWxlP_19H-hRTftPgYfpDbxnA&s" alt="" />
                    </div>

                    <div className={style.infoArea}>
                        <div className={style.titleArea}>
                            <h1>Adagio SP Barra Funda</h1>
                            <div className={style.buttonArea}>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_319_606)">
                                    <path d="M7.9901 4.51695C8.05484 4.2494 7.89298 3.96906 7.62891 3.89135L4.24879 2.89671C3.98472 2.819 3.71773 2.97315 3.65299 3.2407C3.58825 3.50825 3.7501 3.78859 4.01417 3.8663L6.24214 4.52076L2.20696 6.85047C1.97417 6.98487 1.9001 7.29095 2.04123 7.53539C2.18236 7.77982 2.48445 7.86872 2.71725 7.73431L6.75111 5.40536L6.20654 7.66055C6.1418 7.9281 6.30366 8.20844 6.56773 8.28615C6.8318 8.36385 7.0988 8.2097 7.16354 7.94216L7.99221 4.51757L7.9901 4.51695Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_319_606">
                                    <rect width="6.80385" height="8.16462" fill="white" transform="translate(0 4) rotate(-30)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div className={style.areaInfo}>
                            <div className={style.label}>
                                <h2>Região</h2>
                                <p>Destino Centro & Zona Norte</p>
                            </div>
                            <div className={style.label}>
                                <h2>Aeroporto mais próximo</h2>
                                <p>Aeroporto de Guarulhos - 29 km</p>
                            </div>
                            <div className={style.label}>
                                <h2>Serviços</h2>
                                <p>Acessibilidade, Aceita animais</p>
                            </div>
                            <div className={style.label}>
                                <h2>Aeroporto mais próximo</h2>
                                <p>Aeroporto de Guarulhos - 29 km</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Stats Space */}
                <div className={style.spaceStats}>
                    <div className={style.buttonsArea}>
                        <button className={style.primary}>Impulsionar</button>
                        <button className={style.second}>Editar</button>
                    </div>

                    <div className={style.labelStat}>
                        <h3>Pessoas interessadas</h3>
                        <p>4 pessoas</p>
                    </div>
                    <div className={style.labelStat}>
                        <h3>Anuncio Visualizado</h3>
                        <p>1.200 vezes</p>
                    </div>
                </div>
            </div>

            
            <div className={style.spaceContainer}>
                {/* Card Space */}
                <article className={style.cardSpace}>
                    <div className={style.imageArea}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsMylv8v2NKWxlP_19H-hRTftPgYfpDbxnA&s" alt="" />
                    </div>

                    <div className={style.infoArea}>
                        <div className={style.titleArea}>
                            <h1>Adagio SP Barra Funda</h1>
                            <div className={style.buttonArea}>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_319_606)">
                                    <path d="M7.9901 4.51695C8.05484 4.2494 7.89298 3.96906 7.62891 3.89135L4.24879 2.89671C3.98472 2.819 3.71773 2.97315 3.65299 3.2407C3.58825 3.50825 3.7501 3.78859 4.01417 3.8663L6.24214 4.52076L2.20696 6.85047C1.97417 6.98487 1.9001 7.29095 2.04123 7.53539C2.18236 7.77982 2.48445 7.86872 2.71725 7.73431L6.75111 5.40536L6.20654 7.66055C6.1418 7.9281 6.30366 8.20844 6.56773 8.28615C6.8318 8.36385 7.0988 8.2097 7.16354 7.94216L7.99221 4.51757L7.9901 4.51695Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_319_606">
                                    <rect width="6.80385" height="8.16462" fill="white" transform="translate(0 4) rotate(-30)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div className={style.areaInfo}>
                            <div className={style.label}>
                                <h2>Região</h2>
                                <p>Destino Centro & Zona Norte</p>
                            </div>
                            <div className={style.label}>
                                <h2>Aeroporto mais próximo</h2>
                                <p>Aeroporto de Guarulhos - 29 km</p>
                            </div>
                            <div className={style.label}>
                                <h2>Serviços</h2>
                                <p>Acessibilidade, Aceita animais</p>
                            </div>
                            <div className={style.label}>
                                <h2>Aeroporto mais próximo</h2>
                                <p>Aeroporto de Guarulhos - 29 km</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Stats Space */}
                <div className={style.spaceStats}>
                    <div className={style.buttonsArea}>
                        <button className={style.primary}>Impulsionar</button>
                        <button className={style.second}>Editar</button>
                    </div>

                    <div className={style.labelStat}>
                        <h3>Pessoas interessadas</h3>
                        <p>4 pessoas</p>
                    </div>
                    <div className={style.labelStat}>
                        <h3>Anuncio Visualizado</h3>
                        <p>1.200 vezes</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeadsList;
