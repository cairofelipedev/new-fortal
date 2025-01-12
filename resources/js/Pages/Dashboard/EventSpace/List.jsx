import React, { useEffect, useState } from 'react';
import style from '../../../../css/eventSpace.module.scss';
import axios from 'axios';

const SpaceList = () => {
    const [spaces, setSpaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSpaces = async () => {
            try {
                const response = await axios.get('/api/spaces');
                setSpaces(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar espaços:', error);
                setLoading(false);
            }
        };

        fetchSpaces();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            {spaces.length === 0 ? (
                <div className="text-gray-500 text-lg">Nenhum cadastro encontrado</div>
            ) : (
                spaces.map((space) => (
                    <div key={space.id} className={style.spaceContainer}>
                        {/* Card Space */}
                        <article className={style.cardSpace}>
                            <div className={style.imageArea}>
                                <img
                                    src={space.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYa88AyMbjn63yCvQ5qPB1GJrLP8H4u1caA&s'}
                                    alt={space.name || 'Espaço sem nome'}
                                />
                            </div>

                            <div className={style.infoArea}>
                                <div className={style.titleArea}>
                                    <h1>{space.name}</h1>
                                    <div className={style.buttonArea}>
                                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_319_606)">
                                                <path
                                                    d="M7.9901 4.51695C8.05484 4.2494 7.89298 3.96906 7.62891 3.89135L4.24879 2.89671C3.98472 2.819 3.71773 2.97315 3.65299 3.2407C3.58825 3.50825 3.7501 3.78859 4.01417 3.8663L6.24214 4.52076L2.20696 6.85047C1.97417 6.98487 1.9001 7.29095 2.04123 7.53539C2.18236 7.77982 2.48445 7.86872 2.71725 7.73431L6.75111 5.40536L6.20654 7.66055C6.1418 7.9281 6.30366 8.20844 6.56773 8.28615C6.8318 8.36385 7.0988 8.2097 7.16354 7.94216L7.99221 4.51757L7.9901 4.51695Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_319_606">
                                                    <rect
                                                        width="6.80385"
                                                        height="8.16462"
                                                        fill="white"
                                                        transform="translate(0 4) rotate(-30)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>

                                <div className={style.areaInfo}>
                                    <div className={style.label}>
                                        <h2>Região</h2>
                                        <p>{space.city || 'Informação não disponível'}</p>
                                    </div>
                                    <div className={style.label}>
                                        <h2>Endereço</h2>
                                        <p>{space.address || 'Informação não disponível'}</p>
                                    </div>
                                    <div className={style.label}>
                                        <h2>Serviços</h2>
                                        <p>{space.services || 'Informação não disponível'}</p>
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
                                <p>{space.interestedPeople || '0'} pessoas</p>
                            </div>
                            <div className={style.labelStat}>
                                <h3>Anúncio Visualizado</h3>
                                <p>{space.views || '0'} vezes</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default SpaceList;
