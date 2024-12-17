import style from './searchSpace.module.scss';
import { router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchSpace({searchPage}) {

    let onSearchpage = ''
    if(searchPage) {
        onSearchpage = `${style.onSearchPage}`
    }

    const [type, setType] = useState("");
    const [capacityMin, setCapacityMin] = useState("");
    const [capacityMax, setCapacityMax] = useState("");
    const [eventTypes, setEventTypes] = useState([]);

    useEffect(() => {
        // Busca os tipos de eventos do endpoint
        const fetchEventTypes = async () => {
            try {
                const response = await axios.get("/api/event-types");
                setEventTypes(response.data); // Supondo que o endpoint retorna um array de objetos { id, name }
            } catch (error) {
                console.error("Erro ao buscar os tipos de eventos:", error);
            }
        };

        fetchEventTypes();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Monta os parâmetros de busca
        const query = {
            type,
            capacity_min: capacityMin,
            capacity_max: capacityMax,
        };

        // Redireciona para a página de resultados com os parâmetros
        router.get("/event-spaces/search", query);
    };

    return (
        <section className={style.container}>
            <div className={style.filterArea}>
                <button className={style.filterActive}>Descobrir</button>
                <button>Estabelecimentos</button>
            </div>

            <form className={`${style.form} ${onSearchpage}`} onSubmit={handleSubmit}>
                {/* Tipo de Espaço */}
                <select
                    id="type"
                    // value={type}
                    // onChange={(e) => setType(e.target.value)}
                >
                    <option value="">Tipo de Espaço</option>
                    {eventTypes.map((eventType) => (
                        <option key={eventType.id} value={eventType.id}>
                            {eventType.name}
                        </option>
                    ))}
                </select>

                {/* Capacidade Mínima */}
                <input
                    type="number"
                    id="capacity_min"
                    value={capacityMin}
                    onChange={(e) => setCapacityMin(e.target.value)}
                    placeholder="Capacidade Mínima"
                />

                {/* Capacidade Máxima */}
                <input
                    type="number"
                    id="capacity_max"
                    value={capacityMax}
                    onChange={(e) => setCapacityMax(e.target.value)}
                    placeholder="Capacidade Máxima"
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
        </section>
    );
}
