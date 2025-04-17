import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import style from './initialExplain.module.scss';
import { FaArrowRightLong } from "react-icons/fa6";

export default function InitialExplain() {
    const [sessao, setSessao] = useState(null);
    const [itens, setItens] = useState([]);
    const videoRefs = useRef([]);
    const [loadedVideos, setLoadedVideos] = useState({});

    useEffect(() => {
        axios.get('/api/sessoes?pagina=HOME&posicao=1')
            .then(response => {
                if (response.data.length > 0) {
                    setSessao(response.data[0]); // Pegamos apenas a primeira sessão
                    setItens(response.data[0].itens);
                }
            })
            .catch(error => console.error("Erro ao buscar sessões:", error));
    }, []);

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

        videoRefs.current.forEach(video => {
            if (video) observer.observe(video);
        });

        return () => {
            videoRefs.current.forEach(video => {
                if (video) observer.unobserve(video);
            });
        };
    }, [itens]);

    useEffect(() => {
        // Ajusta a velocidade dos vídeos
        videoRefs.current.forEach(video => {
            if (video) {
                video.playbackRate = 0.7; // Ajuste a velocidade para 75% da velocidade normal
            }
        });
    }, [loadedVideos]);

    const isGrid = itens.length > 1;

    return (
        <section className={style.container}>
            <div className={`${style.infoArea} lg:grid lg:grid-cols-3 gap-10 space-y-5`}>
                {/* Texto fixo dinâmico */}
                {sessao && (
                    <div className="col-span-1 lg:sticky top-5 lg:self-start lg:pt-20">
                        {sessao.titulo && (
                            <h1 className="text-6xl font-regular uppercase tracking-widest">
                                <b className="font-raleway font-black text-[#0C9C95]">{sessao.titulo}</b>
                            </h1>
                        )}
                        {sessao.subtitulo && (
                            <p className="text-3xl pb-5 text-gray-600">{sessao.subtitulo}</p>
                        )}
                        {sessao.botao_texto && sessao.botao_url && (
                            <a href={sessao.botao_url} className="mt-10">
                                <button className="border text-xl bg-fortalorange font-semibold text-white px-5 rounded-lg flex gap-3 items-center">
                                    {sessao.botao_texto}
                                    <span className="hover:bg-gray-300 duration-300 w-12 h-12 flex items-center justify-center rounded-lg">
                                        <FaArrowRightLong className="text-2xl" />
                                    </span>
                                </button>
                            </a>
                        )}
                    </div>
                )}

                <div className="col-span-2">
                    <div className={`${itens.length > 1 ? 'grid grid-cols-1 sm:grid-cols-2 gap-5' : ''}`}>
                        {itens.map((item, index) => (
                            <div key={index} className="relative rounded-lg h-[250px] overflow-hidden shadow-lg">
                                {item.tipo === 'video' && item.arquivo_video ? (
                                    <video
                                        ref={el => videoRefs.current[index] = el}
                                        data-index={index}
                                        className="rounded-lg w-full h-full object-cover"
                                        src={loadedVideos[index] ? item.arquivo_video : ""}
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
                                <div className="absolute bottom-2 left-2 right-2 text-white bg-gray-500 bg-opacity-50 backdrop-blur-md p-2 rounded-lg">
                                    <p className="text-white text-center">{item.titulo}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
