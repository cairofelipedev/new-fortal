import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import style from './Banners.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SimpleSlider({ page = 'sobrefortaleza' }) {
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
                const response = await axios.get(`/api/banners?page=${page}`);
                setBanners(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar banners:', error);
                setLoading(false);
            }
        };

        fetchBanners();
    }, [page]);

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
            <IoIosArrowBack color="#fff" size={16} />
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
            <IoIosArrowForward color="#fff" size={16} />
        </div>
    );

    const arrowStyle = {
        background: "#F57C29",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: "1"
    };

    const settings = {
        dots: false,
        infinite: banners.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: banners.length > 1 ? <CustomPrevArrow /> : null,
        nextArrow: banners.length > 1 ? <CustomNextArrow /> : null
    };

    return (
        <section className={style.container}>
            {loading ? (
                <div>
                    <article>
                        <Skeleton height={isMobile ? 350 : 400} />
                    </article>
                </div>
            ) : (
                <Slider {...settings}>
                    {banners.map((banner) => {
                        const content = (
                            <section className="relative lg:h-[600px] h-[300px] overflow-hidden">
                                <img
                                    className="absolute object-cover w-full h-full rounded-lg"
                                    src={`/uploads/${isMobile ? banner.image_mobile : banner.image_desktop}`}
                                    alt={banner.name}
                                />

                                {/* Overlay escuro */}
                                <div className="absolute inset-0 bg-black opacity-10"></div>

                                {banner.titulo_visivel && (
                                    <div className="lg:pt-0 pt-10 lg:pb-0 pb-10 relative flex flex-col justify-center h-full">

                                        <div className="lg:px-20 px-5">

                                            <p className="lg:text-7xl text-5xl text-white font-bold">
                                                {banner.name}
                                            </p>

                                        </div>

                                    </div>
                                )}
                            </section>
                        );

                        return (
                            <div key={banner.id}>
                                {banner.link ? (
                                    <a href={banner.link} target="_blank" rel="noopener noreferrer">
                                        {content}
                                    </a>
                                ) : (
                                    content
                                )}
                            </div>
                        );
                    })}
                </Slider>
            )}
        </section>
    );
}
