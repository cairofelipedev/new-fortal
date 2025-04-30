import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import style from './bannerDestak.module.scss';
import { FaArrowRightLong } from "react-icons/fa6";

export default function BannerDestak({ pagina, posicao }) {
    const [sessoes, setSessoes] = useState([]);
    const [loadedVideos, setLoadedVideos] = useState({});
    const videoRefs = useRef({});

    useEffect(() => {
        axios.get(`/api/sessoes?pagina=${pagina}&posicao=${posicao}`)
            .then(response => {
                setSessoes(response.data || []);
            })
            .catch(error => console.error("Erro ao buscar sessões:", error));
    }, [pagina, posicao]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setLoadedVideos(prev => ({
                        ...prev,
                        [entry.target.dataset.index]: true
                    }));
                }
            });
        }, { threshold: 0.3 });

        Object.values(videoRefs.current).forEach(video => {
            if (video) observer.observe(video);
        });

        return () => {
            Object.values(videoRefs.current).forEach(video => {
                if (video) observer.unobserve(video);
            });
        };
    }, [sessoes]);

    useEffect(() => {
        Object.values(videoRefs.current).forEach(video => {
            if (video) {
                video.playbackRate = 0.7;
            }
        });
    }, [loadedVideos]);

    if (sessoes.length === 0) return null;

    return (
        <div className="bg-gray-100 pt-5 pb-20 space-y-20">
            {sessoes.map((sessao, sessaoIndex) => {
                const hasItens = sessao.itens && sessao.itens.length > 0;

                return (
                    <div key={sessao.id} className={`${style.container} ${hasItens ? 'lg:grid lg:grid-cols-2 gap-10' : ''} items-center pt-5`}>
                        {/* Mídia (se existir) */}
                        {hasItens && (
                            <div className="relative rounded-lg overflow-hidden shadow-lg">
                                {sessao.itens.map((item, itemIndex) => {
                                    const refKey = `${sessaoIndex}-${itemIndex}`;
                                    return (
                                        <div key={itemIndex} className="w-full">
                                            {item.tipo === 'video' && item.arquivo_video ? (
                                                <video
                                                    ref={el => videoRefs.current[refKey] = el}
                                                    data-index={refKey}
                                                    className="rounded-lg w-full object-cover"
                                                    src={loadedVideos[refKey] ? item.arquivo_video : ""}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                />
                                            ) : item.tipo === 'imagem' && item.arquivo_imagem ? (
                                                <img
                                                    className="rounded-lg w-full object-cover"
                                                    src={`./uploads/${item.arquivo_imagem}`}
                                                    alt={item.titulo}
                                                />
                                            ) : null}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Conteúdo textual */}
                        <div className={hasItens ? '' : 'w-full'}>
                            {sessao.titulo && (
                                <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] py-3 lg:text-6xl text-4xl">
                                    {sessao.titulo}
                                </h1>
                            )}
                            {sessao.subtitulo && (
                                <p className="text-gray-600 text-justify lg:text-3xl text-2xl pb-5">
                                    {sessao.subtitulo}
                                </p>
                            )}
                            {sessao.conteudo && (
                                <div
                                    className="w-full mt-6 text-gray-700 leading-relaxed prose prose-img:rounded-lg prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4"
                                    dangerouslySetInnerHTML={{ __html: sessao.conteudo }}
                                />
                            )}
                            {sessao.botao_texto && sessao.botao_url && (
                                <a href={sessao.botao_url} className="mt-10 inline-block">
                                    <button className="border text-xl bg-fortalorange font-semibold text-white px-5 rounded-lg flex gap-3 items-center hover:bg-white hover:text-fortalorange hover:border-fortalorange transition-colors duration-300">
                                        {sessao.botao_texto}
                                        <span className="hover:bg-gray-300 duration-300 w-12 h-12 flex items-center justify-center rounded-lg">
                                            <FaArrowRightLong className="text-2xl" />
                                        </span>
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
