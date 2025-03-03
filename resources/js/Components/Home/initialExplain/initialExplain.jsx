import { useEffect, useRef, useState } from 'react';
import style from './initialExplain.module.scss';
import { FaWifi, FaRunning, FaUmbrellaBeach, FaSun } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function InitialExplain() {
    const mediaItems = [
        { src: "https://res.cloudinary.com/dzutjxuvt/video/upload/v1739480053/Conectividade_e_receptividade_xomspw.mp4", title: "Conectividade e Receptividade" },
        { src: "https://res.cloudinary.com/dzutjxuvt/video/upload/v1739480048/Atividades_Esportivas_e_de_Relaxamento_eeqqdi.mp4", title: "Atividades Esportivas e Relaxamento" },
        { src: "https://res.cloudinary.com/dzutjxuvt/video/upload/v1739480045/Beira_mar_de_Fortaleza_otgtqt.mp4", title: "Beira Mar de Fortaleza" },
        { src: "https://res.cloudinary.com/dzutjxuvt/video/upload/v1739480044/Clima_tropical_x5thl5.mp4", title: "Clima Tropical" }
    ];

    const mediaIcons = {
        "Conectividade e Receptividade": <FaWifi className='h-6 w-6 text-teal-700' />,
        "Atividades Esportivas e Relaxamento": <FaRunning className='h-6 w-6 text-teal-700' />,
        "Beira Mar de Fortaleza": <FaUmbrellaBeach className='h-6 w-6 text-teal-700' />,
        "Clima Tropical": <FaSun className='h-6 w-6 text-teal-700' />
    };

    // Criar nova lista no padrão 1 vídeo → 2 imagens
    const formattedMedia = mediaItems.flatMap(item => [
        { ...item, type: "video" },
        { src: `https://via.placeholder.com/800x450?text=${encodeURIComponent(item.title)}+Imagem+1`, title: item.title, type: "image" },
        { src: `https://via.placeholder.com/800x450?text=${encodeURIComponent(item.title)}+Imagem+2`, title: item.title, type: "image" }
    ]);

    const mediaRefs = useRef([]);
    const [loadedMedia, setLoadedMedia] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setLoadedMedia(prev => ({
                        ...prev,
                        [entry.target.dataset.index]: true
                    }));
                }
            });
        }, { threshold: 0.3 });

        mediaRefs.current.forEach(media => {
            if (media) observer.observe(media);
        });

        return () => {
            mediaRefs.current.forEach(media => {
                if (media) observer.unobserve(media);
            });
        };
    }, []);

    return (
        <section className={style.container}>
            <div className={`${style.infoArea} lg:grid lg:grid-cols-3 gap-10 space-y-5`}>

                {/* Texto fixo */}
                <div className="col-span-1 lg:sticky top-5 lg:self-start lg:pt-20">
                    <h1 className="font-neulis text-7xl font-regular">
                        Conheça <b className="font-black text-[#0C9C95]">Fortaleza</b>
                    </h1>
                    <p className="text-3xl pb-5">
                        Aqui, você encontrará um <b className="text-black font-black">destino completo</b> para o turismo de negócios e eventos.
                    </p>
                    <a href="/planejador-de-eventos" className="mt-10">
                        <button className="border text-xl font-semibold text-gray-700 bg-white px-5 rounded-lg flex gap-3 items-center">
                            Planeje seu evento
                            <div
                                className="hover:bg-gray-300 duration-300 w-12 h-12 flex items-center justify-center rounded-lg">
                                <FaArrowRightLong className="text-2xl" />
                            </div>
                        </button>
                    </a>
                </div>

                {/* Grid alternando vídeos e imagens */}
                <div className="col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {formattedMedia.map((item, index) => (
                            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                                {item.type === "video" ? (
                                    <video
                                        ref={el => mediaRefs.current[index] = el}
                                        data-index={index}
                                        className="rounded-lg w-full h-full object-cover"
                                        src={loadedMedia[index] ? item.src : ""}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        ref={el => mediaRefs.current[index] = el}
                                        data-index={index}
                                        className="rounded-lg w-full h-full object-cover"
                                        src={loadedMedia[index] ? item.src : ""}
                                        alt={item.title}
                                    />
                                )}
                                <div className="absolute bottom-2 left-2 right-2 flex items-center text-[#fff] bg-gray-500 bg-opacity-50 backdrop-blur-md gap-2 p-2 rounded-lg">
                                    <button className='border-0 bg-white p-1 rounded-md'>
                                        {mediaIcons[item.title]}
                                    </button>
                                    <p className='text-[#fff]'>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
