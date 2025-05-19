import React, { useEffect, useState } from "react";
import axios from "axios";

const EquipeConselho = () => {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios
            .get("/api/equipe-conselho")
            .then((response) => setDados(response.data))
            .catch((error) => console.error("Erro ao buscar equipe e conselho:", error));
    }, []);

    const equipe = dados.filter((item) => item.tipo === "equipe");
    const conselho = dados.filter((item) => item.tipo === "conselho");

    return (
        <div className="space-y-16">
            {/* Seção da Equipe */}
            <section className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-black mb-5 text-center text-[#0C9C95]">CONHEÇA NOSSA EQUIPE</h2>
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {equipe.map((pessoa) => (
                        <div
                            key={pessoa.id}
                            className="bg-white p-4 flex flex-col"
                        >
                            {pessoa.imagem && (
                                <img
                                    src={`/uploads/${pessoa.imagem}`}
                                    alt={pessoa.nome}
                                    className="object-cover rounded-lg w-full h-72 mb-2"
                                />
                            )}
                            <h3 className="text-lg font-semibold">{pessoa.nome}</h3>
                            <p className="text-gray-600 text-sm">{pessoa.cargo}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Seção dos Conselhos */}
            <section className="bg-gray-50 py-5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black mb-5 text-center text-[#0C9C95]">CONSELHOS</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {conselho.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                {item.imagem && (
                                    <img
                                        src={`/storage/${item.imagem}`}
                                        alt={item.nome}
                                        className="w-32 h-32 object-cover rounded-l-lg"
                                    />
                                )}
                                <div className="px-4 py-2">
                                    <h3 className="text-lg font-semibold">{item.nome}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default EquipeConselho;
