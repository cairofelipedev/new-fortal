import style from './enjoyFortaleza.module.scss'

export default function EnjoyFortaleza() {
    return (
        <div className="bg-gray-100 pt-5">
            <section className={`${style.container} z-10`}>
                {/* Title Area */}
                <div className={style.titleArea}>
                    <div className={style.textArea}>
                        <div className={style.areaIcon}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_319_741)">
                                    <path d="M14.1211 0.0468564C14.3164 0.128888 14.457 0.304669 14.4961 0.5117L15.2734 4.72654L19.4883 5.49998C19.6953 5.53904 19.8711 5.67967 19.9531 5.87498C20.0351 6.07029 20.0117 6.29295 19.8906 6.46873L17.457 9.99998L19.8906 13.5273C20.0117 13.7031 20.0351 13.9258 19.9531 14.1211C19.8711 14.3164 19.6953 14.457 19.4883 14.4961L15.2734 15.2734L14.4961 19.4883C14.457 19.6953 14.3164 19.8711 14.1211 19.9531C13.9258 20.0351 13.7031 20.0117 13.5273 19.8906L9.99998 17.457L6.47264 19.8906C6.29686 20.0117 6.0742 20.0351 5.87889 19.9531C5.68357 19.8711 5.54295 19.6953 5.50389 19.4883L4.72654 15.2734L0.5117 14.4961C0.304669 14.457 0.128888 14.3164 0.0468564 14.1211C-0.0351748 13.9258 -0.0117373 13.7031 0.109356 13.5273L2.54295 9.99998L0.109356 6.47264C-0.0117373 6.29686 -0.0351748 6.0742 0.0468564 5.87889C0.128888 5.68357 0.304669 5.54295 0.5117 5.50389L4.72654 4.72654L5.50389 0.5117C5.54295 0.304669 5.68357 0.128888 5.87889 0.0468564C6.0742 -0.0351748 6.29686 -0.0117373 6.47264 0.109356L9.99998 2.54295L13.5273 0.109356C13.7031 -0.0117373 13.9258 -0.0351748 14.1211 0.0468564ZM6.24998 9.99998C6.24998 9.00542 6.64507 8.05159 7.34833 7.34833C8.05159 6.64507 9.00542 6.24998 9.99998 6.24998C10.9945 6.24998 11.9484 6.64507 12.6516 7.34833C13.3549 8.05159 13.75 9.00542 13.75 9.99998C13.75 10.9945 13.3549 11.9484 12.6516 12.6516C11.9484 13.3549 10.9945 13.75 9.99998 13.75C9.00542 13.75 8.05159 13.3549 7.34833 12.6516C6.64507 11.9484 6.24998 10.9945 6.24998 9.99998ZM15 9.99998C15 8.6739 14.4732 7.40213 13.5355 6.46445C12.5978 5.52677 11.3261 4.99998 9.99998 4.99998C8.6739 4.99998 7.40213 5.52677 6.46445 6.46445C5.52677 7.40213 4.99998 8.6739 4.99998 9.99998C4.99998 11.3261 5.52677 12.5978 6.46445 13.5355C7.40213 14.4732 8.6739 15 9.99998 15C11.3261 15 12.5978 14.4732 13.5355 13.5355C14.4732 12.5978 15 11.3261 15 9.99998Z" fill="#F57C29" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_319_741">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={style.text} id="aproveite-fortaleza">
                            <span className="text-2xl text-gray-700">Lazer e Cultura</span>
                            <h2 className="font-raleway uppercase text-4xl font-black text-[#0C9C95]">Aproveite Fortaleza</h2>
                        </div>
                    </div>

                    <a className={style.moreButton} href="">
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.79018 6.52949C10.0692 6.23652 10.0692 5.76074 9.79018 5.46777L6.21875 1.71777C5.93973 1.4248 5.48661 1.4248 5.20759 1.71777C4.92857 2.01074 4.92857 2.48652 5.20759 2.77949L7.5625 5.2498H0.714286C0.319196 5.2498 0 5.58496 0 5.9998C0 6.41465 0.319196 6.7498 0.714286 6.7498H7.56027L5.20982 9.22012C4.9308 9.51309 4.9308 9.98887 5.20982 10.2818C5.48884 10.5748 5.94196 10.5748 6.22098 10.2818L9.79241 6.53184L9.79018 6.52949Z" fill="white" />
                        </svg>
                    </a>
                </div>

                {/* Area Cards */}
                <div className={style.areaCards}>
                    <Card
                        img={'./images/a-photo-of-a-lively-event-in-fortaleza-brazil.jpeg'}
                        alt={'Diversão'}
                        name={'Diversão'}
                    // description={'Escolha entre centro de convenções, salões em hotéis ou lugares singulares incríveis como cenários!'}
                    />
                    <Card
                        img={'./images/news/9_Easy-Resize.com.jpg'}
                        alt={'Alimentação'}
                        name={'Alimentação'}
                    // description={'De pousadas a hotéis temáticos ou luxuosos temos as melhores opções para seu evento.'}
                    />
                    <Card
                        img={'./images/news/4_Easy-Resize.com.jpg'}
                        alt={'Lugares para trabalhar'}
                        name={'Lugares para trabalhar'}
                    // description={'encontre parceiros  com grande experiência na gestão e realização de eventos para auxiliar o seu planejamento ou  execução e criar experiências memoráveis.'}
                    />
                    <Card
                        img={'./images/news/27_Easy-Resize.com.jpg'}
                        alt={'Conheça nosso Ceará'}
                        name={'Conheça nosso Ceará'}
                    // description={'Para transporte e passeios complementares, temos especialistas de destinos para tornar a  logística perfeita!'}
                    />
                </div>
            </section>
        </div>
    )
}

export function Card({ img, alt, name, description }) {
    return (
        <article className={style.card}>
            <img loading="lazy" className={style.bgImage} src={img} alt={alt} />

            <div className={style.areaText}>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </article>
    )
}