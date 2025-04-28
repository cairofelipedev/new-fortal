import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import style from './Banners.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SimpleSlider() {
    const [isMobile, setIsMobile] = useState(false);
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await axios.get('/api/banners?page=sobrefortaleza');
                setBanners(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar banners:', error);
                setLoading(false);
            }
        };

        fetchBanners();
    }, []);

    const CustomPrevArrow = ({ onClick }) => (
        <div
            onClick={onClick}
            style={{
                ...arrowStyle,
                left: "40px",
                top: isMobile ? "70%" : "50%",
                width: isMobile ? "30px" : "50px",
                height: isMobile ? "30px" : "50px"
            }}
        >
            <IoIosArrowBack color="#602380" size={16} />
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div
            onClick={onClick}
            style={{
                ...arrowStyle,
                right: "40px",
                top: isMobile ? "70%" : "50%",
                width: isMobile ? "30px" : "50px",
                height: isMobile ? "30px" : "50px"
            }}
        >
            <IoIosArrowForward color="#602380" size={16} />
        </div>
    );

    const arrowStyle = {
        background: "#fff",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: "1"
    };

    // Configuração do slider com ajuste para quando houver apenas um banner
    const settings = {
        dots: false,
        infinite: banners.length > 1,  // Ajuste para infinito apenas se houver mais de um banner
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: banners.length > 1 ? <CustomPrevArrow /> : null,  // Exibe seta esquerda somente se houver mais de um banner
        nextArrow: banners.length > 1 ? <CustomNextArrow /> : null   // Exibe seta direita somente se houver mais de um banner
    };

    return (
        <section className={style.container}>
            {loading ? (
                <div>
                    <article>
                        <Skeleton
                            height={isMobile ? 350 : 400}
                        // baseColor="#7F5CE6"
                        // highlightColor="#9b79ec"
                        />
                    </article>
                </div>
            ) : (
                <Slider {...settings} className="lg:mb-20 mb-5">
                    {banners.map((banner) => (
                        <div key={banner.id}>
                            {isMobile ? (
                                <img src={`/uploads/${banner.image_mobile}`} className="w-full" alt={banner.name} />
                            ) : (
                                <img src={`/uploads/${banner.image_desktop}`} className="w-full" alt={banner.name} />
                            )}
                        </div>
                    ))}
                </Slider>
            )}
        </section>
    );
}