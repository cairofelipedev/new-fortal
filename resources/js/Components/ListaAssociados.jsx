import React, { useState } from "react";

// Dados dos associados
const associados = [
  { nome: "CHANGE TURISMO", categoria: "agencia-de-viagem" },
  { nome: "NAJA TURISMO", categoria: "agencia-de-viagem" },
  { nome: "CAPUCHINO PRESS", categoria: "assessoria-de-imprensa" },
  { nome: "CS7 MKT DIGITAL", categoria: "agencia-de-marketing-digital" },
  { nome: "AGÊNCIA ZEAL", categoria: "agencia-de-marketing-digital" },
  { nome: "LA MAISON", categoria: "buffet" },
  { nome: "ILMAR GOURMET", categoria: "buffet" },
  { nome: "NORMA ZELIA", categoria: "mestre-de-cerimonia" },
  { nome: "MILENA GADELHA", categoria: "mestre-de-cerimonia" },
  { nome: "A&M PRODUÇÕES ARTÍSTICAS", categoria: "montagem" },
  { nome: "ARTE PRODUÇÕES", categoria: "montagem" },
  { nome: "BRILHANTE EVENTOS", categoria: "montagem" },
  { nome: "MONTADORA EXPO PRODUÇÕES", categoria: "montagem" },
  { nome: "LUMINART", categoria: "montagem" },
  { nome: "PHOENIX SOLUÇÕES", categoria: "montagem" },
  { nome: "FIRMA PRODUÇÕES", categoria: "montagem" },
  { nome: "ITI - INSTITUTO DE TRADUÇÃO E INTERPRETAÇÃO", categoria: "traducao-simultanea" },
  { nome: "GRUPO PERES", categoria: "seguranca-para-eventos" },
];

const categoriasTraduzidas = {
  "agencia-de-viagem": "Agência de Viagem",
  "assessoria-de-imprensa": "Assessoria de Imprensa",
  "agencia-de-marketing-digital": "Agência de Marketing Digital",
  "buffet": "Buffet",
  "mestre-de-cerimonia": "Mestre de Cerimônia",
  "montagem": "Montagem",
  "traducao-simultanea": "Tradução Simultânea",
  "seguranca-para-eventos": "Segurança para Eventos",
};

const ListaAssociados = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");
  const [termoBusca, setTermoBusca] = useState("");

  // Filtra os associados com base na categoria selecionada e no termo de busca
  const associadosFiltrados = associados.filter((associado) => {
    const correspondeCategoria =
      categoriaSelecionada === "todos" || associado.categoria === categoriaSelecionada;
    const correspondeNome = associado.nome.toLowerCase().includes(termoBusca.toLowerCase());
    return correspondeCategoria && correspondeNome;
  });

  return (
    <div className="p-5 font-sans bg-gray-50 min-h-screen px-20">
      <p className="lg:text-4xl text-xl font-bold text-center mb-6">
        Conheça nossos Associados
      </p>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 p-4 bg-gray-600 rounded-full shadow-lg mx-auto max-w-xl">
        <select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          className="px-5 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
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
          className="px-5 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-80"
        />
      </div>

      {/* Grid de Associados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {associadosFiltrados.length > 0 ? (
          associadosFiltrados.map((associado, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Associado"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{associado.nome}</h3>
              <p className="text-gray-600 text-sm">
                {categoriasTraduzidas[associado.categoria] || associado.categoria}
              </p>
            </div>
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
