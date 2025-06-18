import { useState, useEffect } from "react";
import style from "./EventSearchForSpace.module.scss";
import { FaSearch } from "react-icons/fa";

const EventSearchForSpace = () => {
    const [type, setType] = useState("");
    const [capacity, setCapacity] = useState("");
    const [total_event_area, setTotalArea] = useState("");
    const [total_rentable_event_rooms, setNumberOfRooms] = useState("");
    const [eventTypes, setEventTypes] = useState([]);

    useEffect(() => {
        fetch("/api/event-types")
            .then((response) => response.json())
            .then((data) => setEventTypes(data))
            .catch((error) =>
                console.error("Erro ao buscar tipos de eventos:", error)
            );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Monta a URL com todos os parâmetros, mesmo que estejam vazios
        const url = `/espaco-para-eventos?type=${type || ""}&capacity=${capacity || ""
            }&total_event_area=${total_event_area || ""
            }&total_rentable_event_rooms=${total_rentable_event_rooms || ""}`;
        window.location.href = url;
    };

    return (
        <section className={` ${style.container} lg:pt-10`}>
            <div className={style.interContainer}>
                <div className={style.leftArea}>
                    <div className={style.titleArea}>
                        <div className={style.textArea}>
                            <span className="text-lg font-raleway pb-4">
                                Encontre o local ideal em hotéis, centros de
                                convenções e espaços
                            </span>
                            <h2 className="text-4xl">
                                <b>Organize seu evento no Ceará</b>
                            </h2>
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
                                <option
                                    key={eventType.id}
                                    value={eventType.name}
                                >
                                    {eventType.name}
                                </option>
                            ))}
                        </select>

                        {/* <input
                            type="number"
                            id="total_event_area"
                            value={total_event_area}
                            onChange={(e) => setTotalArea(e.target.value)}
                            placeholder="Metragem Total"
                        /> */}

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

                        <button
                            type="submit"
                            className="border text-xl bg-fortalorange font-semibold text-white px-5 py-2 rounded-full flex gap-3 items-center hover:bg-white hover:text-fortalorange hover:border-fortalorange transition-colors duration-300"
                        >
                            Buscar
                            <span className="duration-300 w-12 h-12 flex items-center justify-center rounded-lg">
                                <FaSearch className="text-2xl" />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EventSearchForSpace;
