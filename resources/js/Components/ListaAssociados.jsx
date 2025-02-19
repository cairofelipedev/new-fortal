import React, { useState } from "react";

// Dados dos associados
const associados = [
  // Agência de Viagem
  { nome: "CHANGE TURISMO", categoria: "agencia-de-viagem", imagem: "CHANGE TURISMO.jpg" },
  { nome: "NAJA TURISMO", categoria: "agencia-de-viagem", imagem: "NAJA TURISMO.png" },

  // Assessoria de Imprensa
  { nome: "CAPUCHINO PRESS", categoria: "assessoria-de-imprensa", imagem: "CAPUCHINO.png" },

  // Agência de Marketing Digital
  { nome: "CS7 MKT DIGITAL", categoria: "agencia-de-marketing-digital", imagem: "CS7MKT.png" },
  { nome: "AGÊNCIA ZEAL", categoria: "agencia-de-marketing-digital", imagem: "AGENCIA ZEAL.png" },

  // Buffet
  { nome: "LA MAISON", categoria: "buffet", imagem: "LA MAISON.png" },
  { nome: "ILMAR GOURMET", categoria: "buffet", imagem: "ILMAR GOURMET.png" },

  // Mestre de Cerimônia
  { nome: "NORMA ZELIA", categoria: "mestre-de-cerimonia", imagem: "LOGO FIRMA - Administrativo Firma.png" },
  { nome: "MILENA GADELHA", categoria: "mestre-de-cerimonia", imagem: "logo_milena_preta - Milena Gadelha Voz.png" },

  // Montagem
  { nome: "A&M PRODUÇÕES ARTÍSTICAS", categoria: "montagem", imagem: "A&M.jpg" },
  { nome: "ARTE PRODUÇÕES", categoria: "montagem", imagem: "ARTE PRODUÇÕES.jpeg" },
  { nome: "BRILHANTE EVENTOS", categoria: "montagem", imagem: "BRILHANTE EVENTOS.jpg" },
  { nome: "MONTADORA EXPO PRODUÇÕES", categoria: "montagem", imagem: "MONTADORAEXPO.png" },
  { nome: "LUMINART", categoria: "montagem", imagem: "LUMINART.png" },
  { nome: "PHOENIX SOLUÇÕES", categoria: "montagem", imagem: "PHOENIX.png" },
  { nome: "FIRMA PRODUÇÕES", categoria: "montagem", imagem: "FIRMA.png" },

  // Tradução Simultânea
  { nome: "ITI - INSTITUTO DE TRADUÇÃO E INTERPRETAÇÃO", categoria: "traducao-simultanea", imagem: "I.T.I..jpeg" },

  // Segurança para Eventos
  { nome: "GRUPO PERES", categoria: "seguranca-para-eventos", imagem: "PEREZ.jpg" },

  // Restaurantes
  { nome: "COLOSSO FORTALEZA", categoria: "restaurantes", imagem: "logo-colosso FORTALEZA.png" },
  { nome: "CERVEJARIA TURATTI", categoria: "restaurantes", imagem: "TURATTI.png" },
  { nome: "ILLA MARE", categoria: "restaurantes", imagem: "ILLA MARE.png" },
  { nome: "BOTECO DO ILLA", categoria: "restaurantes", imagem: "BOTECO DO ILLA.png" },
  { nome: "BOTECO DONA MARIA", categoria: "restaurantes", imagem: "BOTECO DONA MARIA.png" },
  { nome: "COMPLEXO CROCOBEACH", categoria: "restaurantes", imagem: "CROCOBEACH.png" },
  { nome: "GUARDERIA BRASIL", categoria: "restaurantes", imagem: "GUARDERIA BRASIL.jpeg" },
  { nome: "CHICO DO CARANGUEJO PRAIA DO FUTURO", categoria: "restaurantes", imagem: "chico.png" },

  // Organizadora de Eventos
  { nome: "ARX EVENTOS", categoria: "organizadora-de-eventos", imagem: "Arx.png" },
  { nome: "E + EVENTOS", categoria: "organizadora-de-eventos", imagem: "E.png" },
  { nome: "ALAS EVENTOS", categoria: "organizadora-de-eventos", imagem: "ALAS.png" },
  { nome: "KANGURU PROMOÇÕES", categoria: "organizadora-de-eventos", imagem: "KANGURU PRODUÇÕES.png" },
  { nome: "KAKTUS EVENTOS", categoria: "organizadora-de-eventos", imagem: "KAKTUS.png" },
  { nome: "MAESTRIA COMUNICAÇÃO E EVENTOS", categoria: "organizadora-de-eventos", imagem: "MAESTRIA.png" },
  { nome: "PRÁTICA EVENTOS", categoria: "organizadora-de-eventos", imagem: "PRATICA.png" },
  { nome: "THAIS SOMBRA EVENTOS CORPORATIVOS", categoria: "organizadora-de-eventos", imagem: "THAIS SOMBRA.png" },

  // Receptivo e Transporte
  { nome: "VM TURISMO", categoria: "receptivo-e-transporte", imagem: "VM TURISMO.png" },
  { nome: "VITORINO TURISMO", categoria: "receptivo-e-transporte", imagem: "VITORINO TURISMO.png" },

  // Limpeza Geral
  { nome: "GRUPO INOVAR", categoria: "limpeza-geral", imagem: "INOVAR.jpg" },
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
  "restaurantes": "Restaurantes",
  "organizadora-de-eventos": "Organizadora de Eventos",
  "receptivo-e-transporte": "Receptivo e Transporte",
  "limpeza-geral": "Limpeza Geral",
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
    <div className="p-5 font-sans bg-gray-50 min-h-screen lg:px-20">
      <p className="lg:text-4xl text-xl font-bold text-center mb-6">
        Conheça nossos Associados
      </p>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 p-4 bg-gray-800 lg:rounded-full shadow-lg lg:mx-auto lg:max-w-xl rounded-lg">
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
                src={`./images/associados/${associado.imagem}`}
                alt="Associado"
                className="w-full h-72 mb-4"
                loading="lazy"
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
