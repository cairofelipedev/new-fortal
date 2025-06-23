import { useState, useEffect } from "react";
import style from "./EventSearchForSpace.module.scss";
import { FaSearch } from "react-icons/fa";

const EventSearchForSpace = () => {
    const [type, setType] = useState("");
    const [capacity, setCapacity] = useState("");
    const [total_event_area, setTotalArea] = useState("");
    const [total_rentable_event_rooms, setNumberOfRooms] = useState("");
    const [eventTypes, setEventTypes] = useState([]);
    const [spaceStructures, setSpaceStructures] = useState([]);
    const [selectedStructures, setSelectedStructures] = useState([]);
    const [showStructureOptions, setShowStructureOptions] = useState(false);
    useEffect(() => {
        fetch("/api/event-types")
            .then((res) => res.json())
            .then(setEventTypes);

        fetch("/api/space-structures")
            .then((res) => res.json())
            .then(setSpaceStructures);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const structureParams = selectedStructures.map(id => `structures[]=${id}`).join('&');

        const url = `/espaco-para-eventos?type=${type || ""}&capacity=${capacity || ""}&total_rentable_event_rooms=${total_rentable_event_rooms || ""}&${structureParams}`;

        window.location.href = url;
    };

    const handleStructureChange = (e) => {
        const options = Array.from(e.target.selectedOptions);
        const values = options.map(option => option.value);
        setSelectedStructures(values);
    };

    const toggleStructureOptions = () => {
        setShowStructureOptions(prev => !prev);
    };

    const handleCheckboxChange = (id) => {
        setSelectedStructures((prev) =>
            prev.includes(id)
                ? prev.filter((val) => val !== id)
                : [...prev, id]
        );
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
                        <div className={`relative w-full`}>
                            <button
                                type="button"
                                onClick={toggleStructureOptions}
                                className={`${style.dropdownToggle} ${style.inputLike}`} 
                            >
                                {selectedStructures.length > 0
                                    ? `Estruturas: ${selectedStructures.length}`
                                    : 'Estruturas'}
                            </button>
                            {showStructureOptions && (
                                <div className="absolute z-10 mt-2 w-full max-h-48 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg p-3">
                                    {spaceStructures.length > 0 ? (
                                        spaceStructures.map((structure) => (
                                            <label key={structure.id} className="flex items-center gap-2 py-1">
                                                <input
                                                    type="checkbox"
                                                    value={structure.id}
                                                    checked={selectedStructures.includes(String(structure.id))}
                                                    onChange={() => handleCheckboxChange(String(structure.id))}
                                                    className="form-checkbox text-fortalorange"
                                                />
                                                <span>{structure.name}</span>
                                            </label>
                                        ))
                                    ) : (
                                        <p className="text-sm text-gray-500">Carregando estruturas...</p>
                                    )}
                                </div>
                            )}
                        </div>

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
                            className="border text-xl bg-fortalorange font-semibold text-white px-5 py-2 rounded-full flex gap-3 items-center hover:bg-white hover:text-fortalorange hover:border-fortalorange transition-colors duration-300 justify-between"
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
