import React, { useEffect, useState } from "react";
import axios from "axios";

const Apoiadores = () => {
    const [apoiadores, setApoiadores] = useState([]);

    useEffect(() => {
        axios.get("/api/apoiadores")
            .then(response => setApoiadores(response.data))
            .catch(error => console.error("Erro ao carregar apoiadores:", error));
    }, []);

    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className="text-center uppercase tracking-widest font-raleway font-black text-[#0C9C95] py-5 lg:text-4xl text-xl">
                Nossos Apoiadores
            </h1>

            {apoiadores.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-8 px-4">
                    {apoiadores.map((apoiador) => (
                        <div key={apoiador.id} className="flex justify-center">
                            <img
                                src={`/uploads/${apoiador.img}`}
                                alt={apoiador.name}
                                className="w-72 h-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">Nenhum apoiador encontrado.</p>
            )}
        </div>
    );
};

export default Apoiadores;
