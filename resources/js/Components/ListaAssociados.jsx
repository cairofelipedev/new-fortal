import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "@inertiajs/react";

const categoriasTraduzidas = {
  "agencia-de-viagem": "Agência de Viagem",
  "assessoria-de-imprensa": "Assessoria de Imprensa",
  "agencia-de-marketing-digital": "Agência de Marketing Digital",
  "buffet": "Buffet",
  "mestre-de-cerimonia": "Mestre de Cerimônia",
  "montagem": "Montagem",
  "traducao-simultanea": "Tradução Simultânea",
  "seguranca-para-eventos": "Segurança para Eventos",
  "restaurantes": "Restaurantes",
  "organizadora-de-eventos": "Organizadora de Eventos",
  "receptivo-e-transporte": "Receptivo e Transporte",
  "limpeza-geral": "Limpeza Geral",
};

const ListaAssociados = () => {
  const [associados, setAssociados] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");
  const [termoBusca, setTermoBusca] = useState("");

  // Buscar dados da API
  useEffect(() => {
    axios.get("/api/associados")
      .then((response) => setAssociados(response.data))
      .catch((error) => console.error("Erro ao buscar associados:", error));
  }, []);

  // Filtragem dos associados
  const associadosFiltrados = associados.filter((associado) => {
    const correspondeCategoria = categoriaSelecionada === "todos" || associado.categoria === categoriaSelecionada;
    const correspondeNome = associado.nome.toLowerCase().includes(termoBusca.toLowerCase());
    return correspondeCategoria && correspondeNome;
  });

  return (
    <div className="p-5 bg-gray-50 min-h-screen lg:px-20">
      <p className="lg:text-4xl text-4xl text-center mb-6">
        Conheça nossas empresas <b>associadas</b>
      </p>

      {/* Filtros */}
      <div className="grid grid-cols-2 justify-center items-center gap-4 mb-8 p-4 bg-[#0C9C95] lg:rounded-full shadow-lg rounded-lg">
        <select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          className="px-5 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        >
          <option value="todos">Todos</option>
          {Array.from(new Set(associados.map((a) => a.categoria))).map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoriasTraduzidas[categoria] || categoria.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Buscar por nome..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          className="px-5 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>

      {/* Grid Masonry */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {associadosFiltrados.length > 0 ? (
          associadosFiltrados.map((associado, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow break-inside-avoid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index < 6 ? 0 : index * 0.08 }}
            >
              <Link
                href={`/associados/${associado.slug}`}
              >
                <img
                  src={`./uploads/${associado.imagem}`} // Agora pegando do backend
                  alt={associado.nome}
                  className="w-full rounded-t-lg object-cover min-h-[200px]"
                  loading={index < 6 ? "eager" : "lazy"}
                  fetchpriority={index < 6 ? "high" : "low"}
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{associado.nome}</h3>
                  <p className="text-gray-600 text-sm">
                    {categoriasTraduzidas[associado.categoria] || associado.categoria}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600 col-span-3 text-center">
            Nenhum associado encontrado.
          </p>
        )}
      </div>
    </div>
  );
};

export default ListaAssociados;
