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
  { nome: "ITI - INSTITUDO DE TRADUÇÃO E INTERPRETAÇÃO", categoria: "traducao-simultanea" },
  { nome: "GRUPO PERES", categoria: "seguranca-para-eventos" },
  { nome: "COLOSSO FORTALEZA", categoria: "restaurantes" },
  { nome: "CERVEJARIA TURATTI", categoria: "restaurantes" },
  { nome: "ILLA MARE", categoria: "restaurantes" },
  { nome: "BOTECO DO ILLA", categoria: "restaurantes" },
  { nome: "BOTECO DONA MARIA", categoria: "restaurantes" },
  { nome: "COMPLEXO CROCOBEACH", categoria: "restaurantes" },
  { nome: "GUARDERIA BRAISL", categoria: "restaurantes" },
  { nome: "CHICO DO CARANGUEIJO PRAIA DO FUTURO", categoria: "restaurantes" },
  { nome: "ARX EVENTOS", categoria: "organizadora-de-eventos" },
  { nome: "E + EVENTOS", categoria: "organizadora-de-eventos" },
  { nome: "ALAS EVENTOS", categoria: "organizadora-de-eventos" },
  { nome: "KANGURU PROMOÇÕES", categoria: "organizadora-de-eventos" },
  { nome: "KAKTUS EVENTOS", categoria: "organizadora-de-eventos" },
  { nome: "MAESTRIA COMUNICAÇÃO E EVENTOS", categoria: "organizadora-de-eventos" },
  { nome: "OFICINA DE EVENTOS", categoria: "organizadora-de-eventos" },
  { nome: "PRÁTICA EVENTOS", categoria: "organizadora-de-eventos" },
  { nome: "THAIS SOMBRA EVENTOS CORPORATIVOS", categoria: "organizadora-de-eventos" },
  { nome: "VM TURISMO", categoria: "receptivo-e-transporte" },
  { nome: "VITORINO TURISMO", categoria: "receptivo-e-transporte" },
  { nome: "GRUPO INOVAR", categoria: "limpeza-geral" },
  { nome: "CSI LOCAÇÕES DE EQUIPAMENTOS LTDA", categoria: "equipamentos-para-eventos" },
  { nome: "NEW LIGTH", categoria: "equipamentos-para-eventos" },
  { nome: "STUDIO F3", categoria: "equipamentos-para-eventos" },
  { nome: "STAND SHOW", categoria: "equipamentos-para-eventos" },
  { nome: "TERRA VISTA", categoria: "equipamentos-para-eventos" },
  { nome: "CITLOC", categoria: "equipamentos-para-eventos" },
];

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

  // Agrupa os associados por categoria
  const associadosAgrupados = associadosFiltrados.reduce((acc, associado) => {
    if (!acc[associado.categoria]) {
      acc[associado.categoria] = [];
    }
    acc[associado.categoria].push(associado);
    return acc;
  }, {});

  return (
    <div className="p-5 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Associados</h1>

      {/* Filtros: Select de Categoria e Campo de Busca */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        <select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="todos">Todos</option>
          <option value="agencia-de-viagem">Agência de Viagem</option>
          <option value="assessoria-de-imprensa">Assessoria de Imprensa</option>
          <option value="agencia-de-marketing-digital">Agência de Marketing Digital</option>
          <option value="buffet">Buffet</option>
          <option value="mestre-de-cerimonia">Mestre de Cerimônia</option>
          <option value="montagem">Montagem</option>
          <option value="traducao-simultanea">Tradução Simultânea</option>
          <option value="seguranca-para-eventos">Segurança para Eventos</option>
          <option value="restaurantes">Restaurantes</option>
          <option value="organizadora-de-eventos">Organizadora de Eventos</option>
          <option value="receptivo-e-transporte">Receptivo e Transporte</option>
          <option value="limpeza-geral">Limpeza Geral</option>
          <option value="equipamentos-para-eventos">Equipamentos para Eventos</option>
        </select>

        <input
          type="text"
          placeholder="Buscar por nome..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Lista de Associados Agrupados por Categoria */}
      <div className="space-y-8">
        {Object.entries(associadosAgrupados).map(([categoria, associados]) => (
          <div key={categoria}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {categoria.replace(/-/g, " ")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {associados.map((associado, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{associado.nome}</h3>
                  <p className="text-gray-600">
                    <strong>Categoria:</strong> {associado.categoria.replace(/-/g, " ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaAssociados;