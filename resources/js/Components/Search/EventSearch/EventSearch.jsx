import { useState, useEffect } from "react";
import style from "./EventSearch.module.scss";
import ContactForm from "@/Components/Form/FormRd";

const EventSearch = () => {
    const [type, setType] = useState("");
    const [capacity, setCapacity] = useState("");
    const [total_event_area, setTotalArea] = useState(""); // Estado para Metragem Total
    const [total_rentable_event_rooms, setNumberOfRooms] = useState(""); // Estado para Número de Salas
    const [eventTypes, setEventTypes] = useState([]); // Novo estado para os tipos de eventos
    const optionalFields = ["mobile_phone", "website"];
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Busca os tipos de eventos ao carregar o componente
        fetch("/api/event-types")  // Substitua pela rota correta do seu backend
            .then((response) => response.json())
            .then((data) => setEventTypes(data))
            .catch((error) => console.error("Erro ao buscar tipos de eventos:", error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Abre o modal de contato ao invés de ir diretamente para a página de resultados
        setIsModalOpen(true);
    };

    const handleContactFormSubmit = (query) => {
        // Fecha o modal de contato
        setIsModalOpen(false);

        // Redireciona para a página de resultados após o envio do formulário
        window.location.href = `/resultado-buscar-evento/search?type=${query.type}&capacity=${query.capacity}&total_event_area=${query.total_event_area}&total_rentable_event_rooms=${query.total_rentable_event_rooms}`;
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className={style.container}>
            {/* Renderiza o modal ContactForm se isModalOpen for true */}
            {isModalOpen && (
                <ContactForm
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    optionalFields={optionalFields}
                    onSubmit={handleContactFormSubmit}
                    query={{
                        type,
                        capacity,
                        total_event_area,
                        total_rentable_event_rooms,
                    }} // Passando o estado da consulta
                />
            )}
            <svg className={style.divisorLine} width="1201" height="3" viewBox="0 0 1201 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1.5H1200.5" stroke="#E8DCC6" strokeWidth="2" strokeDasharray="8 8" />
            </svg>

            <div className={style.interContainer}>
                <div className={style.leftArea}>
                    <div className={style.titleArea}>
                        <div className={style.areaIcon}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_319_741)">
                                    <path d="..." fill="#F57C29" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_319_741">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={style.textArea}>
                            <span>Encontre o local ideal em hotéis, centros de convenções e espaços</span>
                            <h2>Organize seu evento no Ceará</h2>
                        </div>
                    </div>

                    <div className={style.filterArea}>
                        <button className={style.filterActive}>Descobrir</button>
                        <button>Todos os espaços</button>
                    </div>

                    <form className={style.form} onSubmit={handleSubmit}>
                        {/* Tipo de Espaço */}
                        <select
                            id="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="">Tipo de Espaço</option>
                            {eventTypes.map((eventType) => (
                                <option key={eventType.id} value={eventType.name}>
                                    {eventType.name}
                                </option>
                            ))}
                        </select>

                        {/* Metragem Total */}
                        <input
                            type="number"
                            id="total_event_area"
                            value={total_event_area}
                            onChange={(e) => setTotalArea(e.target.value)}
                            placeholder="Metragem Total"
                        />

                        {/* Capacidade Máxima */}
                        <input
                            type="number"
                            id="capacity"
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            placeholder="Capacidade Máxima"
                        />

                        {/* Número de Salas */}
                        <input
                            type="number"
                            id="numberOfRooms"
                            value={total_rentable_event_rooms}
                            onChange={(e) => setNumberOfRooms(e.target.value)}
                            placeholder="Número de Salas"
                        />

                        <button type="submit">
                            Buscar
                            <div className={style.areaIcon}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_185_4047)">
                                        <path d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z" stroke="#21272A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.5 17.5L12.5 12.5" stroke="#21272A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_185_4047">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </button>
                    </form>
                </div>

                <div className={style.rightArea}>
                    <img className={style.map} src="./images/map.png" alt="Mapa" />
                </div>
            </div>
        </section>
    );
};

export default EventSearch;
