import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import style from './SpaceInformation.module.scss';
import ContactForm from "../Form/FormRd";

export default function EventSpaceDetails() {
    const { props } = usePage();
    const { slug } = props;
    const [eventSpace, setEventSpace] = useState(null);
    const [loading, setLoading] = useState(true);
    const optionalFields = ["mobile_phone", "bio"]; 

    useEffect(() => {
        const fetchEventSpace = async () => {
            try {
                const response = await axios.get(`/api/event-spaces/${slug}`);
                setEventSpace(response.data.data);

                // Atualiza optionalFields com company_id se disponível
                const companyId = response.data.data.company_id;
                // if (companyId) {
                //     setOptionalFields([{ key: "id_company", value: companyId }]);
                // }
            } catch (error) {
                console.error("Erro ao buscar os dados do espaço:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEventSpace();
    }, [slug]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    if (loading) return <p>Carregando...</p>;
    if (!eventSpace) return <p>Espaço não encontrado.</p>;

    return (
        <>
            <section className={style.container}>
                {/* Área Superior */}
                <div className={style.superiorArea}>
                    <div className={style.nameArea}>
                        <h1>{eventSpace.name}</h1>
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_207_682)">
                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#21272A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.99999 16.6668C13.6819 16.6668 16.6667 13.6821 16.6667 10.0002C16.6667 6.31826 13.6819 3.3335 9.99999 3.3335C6.3181 3.3335 3.33333 6.31826 3.33333 10.0002C3.33333 13.6821 6.3181 16.6668 9.99999 16.6668Z" stroke="#21272A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 1.6665V3.33317" stroke="#21272A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 16.6665V18.3332" stroke="#21272A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.6667 10H18.3333" stroke="#21272A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.66667 10H3.33334" stroke="#21272A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_207_682">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            {eventSpace.city}, {eventSpace.state} - {eventSpace.zip_code}
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className={style.areaButtons}>
                        {/* Book Buttton*/}
                        <button className={style.bookButton} onClick={handleOpenModal}>
                            Reservar
                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.79018 6.52949C10.0692 6.23652 10.0692 5.76074 9.79018 5.46777L6.21875 1.71777C5.93973 1.4248 5.48661 1.4248 5.20759 1.71777C4.92857 2.01074 4.92857 2.48652 5.20759 2.77949L7.5625 5.2498H0.714286C0.319196 5.2498 0 5.58496 0 5.9998C0 6.41465 0.319196 6.7498 0.714286 6.7498H7.56027L5.20982 9.22012C4.9308 9.51309 4.9308 9.98887 5.20982 10.2818C5.48884 10.5748 5.94196 10.5748 6.22098 10.2818L9.79241 6.53184L9.79018 6.52949Z" fill="white"/>
                            </svg>
                        </button>

                        {/* Favorite Buttton */}
                        <button className={style.favoriteButton}>
                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_207_607)">
                                <path d="M0 1.5V15.2406C0 15.6594 0.340625 16 0.759375 16C0.915625 16 1.06875 15.9531 1.19687 15.8625L6 12.5L10.8031 15.8625C10.9313 15.9531 11.0844 16 11.2406 16C11.6594 16 12 15.6594 12 15.2406V1.5C12 0.671875 11.3281 0 10.5 0H1.5C0.671875 0 0 0.671875 0 1.5Z" fill="#0C9C95"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_207_607">
                                <rect width="12" height="16" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Contêiner de Imagens */}
                <div className={style.imagesContainer}>

                    {/* List Images */}
                    {/* <div className={style.listImages}>
                        <img src="https://beachpark.com.br/app/uploads/2024/05/Home-OP.jpg" alt="" />
                        <img src="https://viajocomfilhos.com.br/wp-content/uploads/2020/02/acquacirco-1024x768.jpg" alt="" />
                        <img src="https://beachpark.com.br/app/uploads/2024/05/Parque-Aquatico-OP.jpg" alt="" />

                    </div> */}

                    {/* Principal Image */}
                    <div className={style.principalImage}>
                        <img src={`/uploads/${eventSpace.image}`} alt={`Imagem de ${eventSpace.name}`} />
                        {/* <img src={`/images/principalImage.png`} alt={`Imagem de ${eventSpace.name}`} /> */}
                    </div>
                </div>

                {/* Informações */}
                <div className={style.informationContainer}>
                    <div className={style.informationArea}>
                        <h2>Informações gerais</h2>

                        <div className={style.infoSpots}>
                            <div className={style.spotInfo}>
                                <h3>Localização</h3>
                                <p>{eventSpace.address}</p>
                            </div>

                            <div className={style.spotInfo}>
                                <h3>Capacidade</h3>
                                <p>{eventSpace.capacity}</p>
                            </div>

                            <div className={style.spotInfo}>
                                <h3>Serviços</h3>
                                <p>Acessibilidade, Aceita animais</p> {/* Estático */}
                            </div>

                            <div className={`${style.spotInfo} ${style.spotDescription}`}>
                                <h3>Descrição</h3>
                                <p>{eventSpace.description}</p>
                            </div>

                            <div className={style.spotInfo}>
                                <h3>Telefone</h3>
                                <p>{eventSpace.phone}</p>
                            </div>
                        </div>
                    </div>

                    {/* Área do Mapa (opcional) */}
                    <div className={style.mapArea}>
                        <img src="/images/map.png" alt="Mapa de localização" />
                    </div>
                </div>
            </section>
            <ContactForm 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                optionalFields={optionalFields}
                companyId={eventSpace.company_id} 
            />
        </>
    );
}