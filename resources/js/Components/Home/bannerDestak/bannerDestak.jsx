import { useEffect, useRef, useState } from 'react';
import style from './bannerDestak.module.scss';
import { FaArrowRightLong } from "react-icons/fa6";

export default function BannerDestak() {
    const videoSrc = "https://acainograu.blob.core.windows.net/posts/PRONTO.mp4";
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVideoLoaded(true);
                }
            });
        }, { threshold: 0.3 });

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className={`${style.container} lg:grid lg:grid-cols-2 gap-10 space-y-5 items-center pt-20`}>
            {/* Vídeo com Lazy Loading */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
                <video
                    ref={videoRef}
                    className="rounded-lg w-full h-full object-cover"
                    src={videoLoaded ? videoSrc : ""}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Texto e botão */}
            <div>
                <h1 className="font-neulis py-3 lg:text-6xl text-4xl">
                    Planeje seu <b>evento</b> <br /> em Fortaleza
                </h1>
                <p className='text-justify lg:text-3xl text-2xl pb-5'>
                    Os melhores eventos, festivais e atividades estão aqui
                </p>
                <a href="/planejador-de-evento" className="mt-10">
                    <button className="border text-xl font-semibold text-white bg-[#0C9C95] px-5 rounded-lg flex gap-3 items-center">
                        Planeje seu evento
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                            className="hover:bg-gray-300 duration-300 w-12 h-12 flex items-center justify-center rounded-lg">
                            <FaArrowRightLong className="text-2xl" />
                        </a>
                    </button>
                </a>
            </div>
        </div>
    );
}
