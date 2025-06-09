import style from './nextEvents.module.scss'
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from '@inertiajs/react';
export default function NextEvents({ month }) {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const swiperInstance = useRef(null);

    const [events, setEvents] = useState([]);

    // Requisição para a API
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`/api/events-calendar`);
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Erro ao buscar eventos:', error);
            }
        };

        fetchEvents();
    }, [month]);

    // Inicialização da navegação personalizada
    useEffect(() => {
        if (swiperInstance.current) {
            swiperInstance.current.params.navigation.prevEl = prevRef.current;
            swiperInstance.current.params.navigation.nextEl = nextRef.current;
            swiperInstance.current.navigation.init();
            swiperInstance.current.navigation.update();
        }
    }, [events]);

    return (
        <section className={style.container}>
            <div className={style.titleArea}>
                <div className={style.textArea}>
                    <div className={style.text}>
                        <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] py-5 lg:text-4xl text-xl pt-20">
                            Próximos Eventos
                        </h1>
                        <span className="text-2xl">Os melhores eventos, acontecem aqui:</span>
                        <h2 className="font-neulis text-4xl">{month}</h2>
                    </div>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3.5}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                breakpoints={{
                    100: { slidesPerView: 1.3, spaceBetween: 20 },
                    600: { slidesPerView: 1.5, spaceBetween: 20 },
                    768: { slidesPerView: 2.5, spaceBetween: 20 },
                    1100: { slidesPerView: 3.5, spaceBetween: 20 },
                }}
                onSwiper={(swiper) => { swiperInstance.current = swiper }}
            >
                {events.map((event, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            image={event.image}
                            alt={event.name}
                            name={event.name}
                            description={event.date}
                            slug={event.slug}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <button ref={prevRef} className={style.prevtButton}>
                <FiChevronLeft size={20} color="white" />
            </button>

            <button ref={nextRef} className={style.nextButton}>
                <FiChevronRight size={20} color="white" />
            </button>
        </section>
    );
}

export function Card({ image, alt, name, description, slug }) {
    return (
        <article className={style.card}>
            <div className={style.topDecoration}></div>
            <div className={style.areaImage}>
                <img loading="lazy" src={`/uploads/${image}`} alt={alt} />
            </div>
            <div className={style.nameArea}>
                <h1>{name}</h1>
            </div>
            <p>
                {description}
            </p>
            <Link
                href={`/proximos-eventos/${slug}`}
                className="text-center mt-3 inline-block px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-blue-700"
            >
                Ver mais
            </Link>
        </article>
    );
}
