import { useEffect, useState } from "react";
import axios from "axios";
import { usePage } from "@inertiajs/react";
import { FaGlobe, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Show() {
  const { props } = usePage();
  const { slug } = props;
  const [associete, setAssociete] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/associados/${slug}`)
      .then((response) => setAssociete(response.data))
      .catch((error) => console.error("Erro ao carregar associado:", error));
  }, [slug]);

  if (!associete) {
    return (
      <div className="text-center py-10 text-gray-500">Carregando...</div>
    );
  }

  const { nome, imagem, content, link, whatsapp, instagram } = associete;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg lg:pt-40 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna da imagem */}
        <div className="col-span-1">
          <img
            src={`/uploads/${imagem}`}
            alt={nome}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Coluna dos botões e conteúdo */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Botões (condicionais) */}
          <div className="flex flex-wrap gap-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
              >
                <FaGlobe /> Site
              </a>
            )}
            {whatsapp && (
              <a
                href={`${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            )}
            {instagram && (
              <a
                href={`${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
              >
                <FaInstagram /> Instagram
              </a>
            )}
          </div>

          {/* Nome */}
          <h1 className="text-2xl font-bold text-gray-900">{nome}</h1>

          {/* Conteúdo descritivo */}
          <div
            className="text-gray-700 leading-relaxed prose prose-img:rounded-lg prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}
