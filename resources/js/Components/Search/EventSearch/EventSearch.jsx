import { useState, useEffect } from "react";
import style from "./EventSearch.module.scss";

const EventSearch = () => {
    const [type, setType] = useState("");
    const [capacity, setCapacity] = useState("");
    const [total_event_area, setTotalArea] = useState("");
    const [total_rentable_event_rooms, setNumberOfRooms] = useState("");
    const [eventTypes, setEventTypes] = useState([]);

    useEffect(() => {
        fetch("/api/event-types")
            .then((response) => response.json())
            .then((data) => setEventTypes(data))
            .catch((error) => console.error("Erro ao buscar tipos de eventos:", error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Monta a URL com todos os parâmetros, mesmo que estejam vazios
        const url = `/resultado-buscar-evento/search?type=${type || ""}&capacity=${capacity || ""}&total_event_area=${total_event_area || ""}&total_rentable_event_rooms=${total_rentable_event_rooms || ""}`;
        window.location.href = url;
    };

    return (
        <section className={style.container}>
            <svg className={style.divisorLine} width="1201" height="3" viewBox="0 0 1201 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1.5H1200.5" stroke="#E8DCC6" strokeWidth="2" strokeDasharray="8 8" />
            </svg>

            <div className={style.interContainer}>
                <div className={style.leftArea}>
                    <div className={style.titleArea}>
                        <div className={style.textArea}>
                            <span className="text-2xl"><b>Encontre</b> o local ideal em hotéis, centros de convenções e espaços</span>
                            <h2 className="text-4xl">Organize seu evento no Ceará</h2>
                        </div>
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

                        <input
                            type="number"
                            id="total_event_area"
                            value={total_event_area}
                            onChange={(e) => setTotalArea(e.target.value)}
                            placeholder="Metragem Total"
                        />

                        <input
                            type="number"
                            id="capacity"
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            placeholder="Capacidade Máxima"
                        />

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