import style from './nextEvents.module.scss'
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function NextEvents() {

    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const swiperInstance = useRef(null);

    useEffect(() => {
        if (swiperInstance.current) {
            // Atualize os botões de navegação após a montagem
            swiperInstance.current.params.navigation.prevEl = prevRef.current;
            swiperInstance.current.params.navigation.nextEl = nextRef.current;
            swiperInstance.current.navigation.init();
            swiperInstance.current.navigation.update();
        }
    }, [])

    return (
        <section className={style.container}>

            {/* Title Area */}
            <div className={style.titleArea}>
                <div className={style.textArea}>
                    <div className={style.areaIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_319_741)">
                            <path d="M14.1211 0.0468564C14.3164 0.128888 14.457 0.304669 14.4961 0.5117L15.2734 4.72654L19.4883 5.49998C19.6953 5.53904 19.8711 5.67967 19.9531 5.87498C20.0351 6.07029 20.0117 6.29295 19.8906 6.46873L17.457 9.99998L19.8906 13.5273C20.0117 13.7031 20.0351 13.9258 19.9531 14.1211C19.8711 14.3164 19.6953 14.457 19.4883 14.4961L15.2734 15.2734L14.4961 19.4883C14.457 19.6953 14.3164 19.8711 14.1211 19.9531C13.9258 20.0351 13.7031 20.0117 13.5273 19.8906L9.99998 17.457L6.47264 19.8906C6.29686 20.0117 6.0742 20.0351 5.87889 19.9531C5.68357 19.8711 5.54295 19.6953 5.50389 19.4883L4.72654 15.2734L0.5117 14.4961C0.304669 14.457 0.128888 14.3164 0.0468564 14.1211C-0.0351748 13.9258 -0.0117373 13.7031 0.109356 13.5273L2.54295 9.99998L0.109356 6.47264C-0.0117373 6.29686 -0.0351748 6.0742 0.0468564 5.87889C0.128888 5.68357 0.304669 5.54295 0.5117 5.50389L4.72654 4.72654L5.50389 0.5117C5.54295 0.304669 5.68357 0.128888 5.87889 0.0468564C6.0742 -0.0351748 6.29686 -0.0117373 6.47264 0.109356L9.99998 2.54295L13.5273 0.109356C13.7031 -0.0117373 13.9258 -0.0351748 14.1211 0.0468564ZM6.24998 9.99998C6.24998 9.00542 6.64507 8.05159 7.34833 7.34833C8.05159 6.64507 9.00542 6.24998 9.99998 6.24998C10.9945 6.24998 11.9484 6.64507 12.6516 7.34833C13.3549 8.05159 13.75 9.00542 13.75 9.99998C13.75 10.9945 13.3549 11.9484 12.6516 12.6516C11.9484 13.3549 10.9945 13.75 9.99998 13.75C9.00542 13.75 8.05159 13.3549 7.34833 12.6516C6.64507 11.9484 6.24998 10.9945 6.24998 9.99998ZM15 9.99998C15 8.6739 14.4732 7.40213 13.5355 6.46445C12.5978 5.52677 11.3261 4.99998 9.99998 4.99998C8.6739 4.99998 7.40213 5.52677 6.46445 6.46445C5.52677 7.40213 4.99998 8.6739 4.99998 9.99998C4.99998 11.3261 5.52677 12.5978 6.46445 13.5355C7.40213 14.4732 8.6739 15 9.99998 15C11.3261 15 12.5978 14.4732 13.5355 13.5355C14.4732 12.5978 15 11.3261 15 9.99998Z" fill="#F57C29"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_319_741">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className={style.text}>
                        <span>Os maiores e melhores eventos você encontra aqui</span>
                        {/* <h2>Próximos eventos</h2> */}
                    </div>
                </div>

                <a className={style.moreButton} href="">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_319_628)">
                        <path d="M7.37188 13.125H3.125C2.79348 13.125 2.47554 12.9933 2.24112 12.7589C2.0067 12.5245 1.875 12.2065 1.875 11.875V4.375C1.875 4.04348 2.0067 3.72554 2.24112 3.49112C2.47554 3.2567 2.79348 3.125 3.125 3.125H10.625C10.9565 3.125 11.2745 3.2567 11.5089 3.49112C11.7433 3.72554 11.875 4.04348 11.875 4.375V6.875" stroke="#0C9C95" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.25 8.75V11.25H13.75" stroke="#0C9C95" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.25 13.75C12.6307 13.75 13.75 12.6307 13.75 11.25C13.75 9.86929 12.6307 8.75 11.25 8.75C9.86929 8.75 8.75 9.86929 8.75 11.25C8.75 12.6307 9.86929 13.75 11.25 13.75Z" stroke="#0C9C95" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.375 1.875V4.375" stroke="#0C9C95" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.375 1.875V4.375" stroke="#0C9C95" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.875 6.875H11.875" stroke="#0C9C95" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_319_628">
                        <rect width="15" height="15" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    Calendário completo
                </a>
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3.5}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                breakpoints={{
                    100: {
                        slidesPerView: 1.3, // 2 slides a partir de 640px
                        spaceBetween: 20, // Espaçamento menor
                    },
                    600: {
                        slidesPerView: 1.5, // 2 slides a partir de 640px
                        spaceBetween: 20, // Espaçamento menor
                    },
                    768: {
                        slidesPerView: 2.5, // 3 slides a partir de 768px
                        spaceBetween: 20,
                    },
                    1100: {
                        slidesPerView: 3.5, // 4 slides a partir de 1024px
                        spaceBetween: 20,
                    },
                    1500: {
                        slidesPerView: 4.5, // 4 slides a partir de 1024px
                        spaceBetween: 20,
                    },

                }}
                onSwiper={(swiper) => {
                    swiperInstance.current = swiper; // Salva a instância do Swiper
                }}
            >
                <SwiperSlide>
                    <Card 
                        img={'./images/highlights/1.png'}
                        alt={'imagem clima quente'}
                        name={'Banho de mar cheio'}
                        description={'17 a 19 de setembro'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        img={'./images/highlights/2.png'}
                        alt={'imagem clima quente'}
                        name={'Banho de mar cheio'}
                        description={'17 a 19 de setembro'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        img={'./images/highlights/3.png'}
                        alt={'imagem clima quente'}
                        name={'Banho de mar cheio'}
                        description={'17 a 19 de setembro'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        img={'./images/highlights/2.png'}
                        alt={'imagem clima quente'}
                        name={'Banho de mar cheio'}
                        description={'17 a 19 de setembro'}
                    />
                </SwiperSlide>
            </Swiper>

            <button ref={prevRef} className={style.prevtButton}>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_528_767)">
                    <path d="M5.75684 0.75708L1.51484 5.00008L5.75684 9.24308" stroke="black" stroke-width="1.5"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_528_767">
                    <rect width="7" height="10" fill="white" transform="matrix(-1 0 0 1 7 0)"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>

            <button ref={nextRef} className={style.nextButton}>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_528_765)">
                    <path d="M1.24316 0.75708L5.48516 5.00008L1.24316 9.24308" stroke="black" stroke-width="1.5"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_528_765">
                    <rect width="7" height="10" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>
        </section>
    )
}

export function Card({img, alt, name, description}) {
    return (
        <article className={style.card}>
            {/* Top Decotation */}
            <div className={style.topDecoration}></div>

            {/* Area Image */}
            <div className={style.areaImage}>
                <img src={img} alt={alt} />

                <div className={style.iconArea}></div>
            </div>

            {/* Infos */}
            <div className={style.nameArea}>
                <h1>{name}</h1>
            </div>
            <p>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_319_628)">
                    <path d="M7.37188 13.125H3.125C2.79348 13.125 2.47554 12.9933 2.24112 12.7589C2.0067 12.5245 1.875 12.2065 1.875 11.875V4.375C1.875 4.04348 2.0067 3.72554 2.24112 3.49112C2.47554 3.2567 2.79348 3.125 3.125 3.125H10.625C10.9565 3.125 11.2745 3.2567 11.5089 3.49112C11.7433 3.72554 11.875 4.04348 11.875 4.375V6.875" stroke="#0C9C95" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.25 8.75V11.25H13.75" stroke="#0C9C95" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.25 13.75C12.6307 13.75 13.75 12.6307 13.75 11.25C13.75 9.86929 12.6307 8.75 11.25 8.75C9.86929 8.75 8.75 9.86929 8.75 11.25C8.75 12.6307 9.86929 13.75 11.25 13.75Z" stroke="#0C9C95" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.375 1.875V4.375" stroke="#0C9C95" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.375 1.875V4.375" stroke="#0C9C95" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.875 6.875H11.875" stroke="#0C9C95" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_319_628">
                    <rect width="15" height="15" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                {description}
            </p>

            <a className={style.callToAction} href="">
                Destalhes
                <div className={style.iconArea}>
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.79018 6.52949C10.0692 6.23652 10.0692 5.76074 9.79018 5.46777L6.21875 1.71777C5.93973 1.4248 5.48661 1.4248 5.20759 1.71777C4.92857 2.01074 4.92857 2.48652 5.20759 2.77949L7.5625 5.2498H0.714286C0.319196 5.2498 0 5.58496 0 5.9998C0 6.41465 0.319196 6.7498 0.714286 6.7498H7.56027L5.20982 9.22012C4.9308 9.51309 4.9308 9.98887 5.20982 10.2818C5.48884 10.5748 5.94196 10.5748 6.22098 10.2818L9.79241 6.53184L9.79018 6.52949Z" fill="white"/>
                    </svg>
                </div>
            </a>
        </article>
    )
}