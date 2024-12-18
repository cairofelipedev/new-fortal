import style from './VideosArea.module.scss'

export default function VideoArea({ onePage }) {

    let onePageComponentStyle = ''
    if (onePage) {
        onePageComponentStyle = style.onepage
    }

    return (
        <section className={`${style.container} ${onePageComponentStyle}`}>
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
                        <span>Os principais eventos de 2024</span>
                        <h2>Eventos destaque de 2024</h2>
                    </div>
                </div>
            </div>

            <section className={style.videoContainer}>
                {/* Video Pareceiro 1 */}
                <div className={style.internalArea}>
                    <div className={style.videoArea}>

                        {/* <div className={style.buttonPlay}>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 6.76795C16.3333 7.53775 16.3333 9.46225 15 10.2321L3.75 16.7272C2.41667 17.497 0.750001 16.5348 0.750001 14.9952L0.750002 2.00481C0.750002 0.465209 2.41667 -0.497042 3.75 0.272758L15 6.76795Z" fill="#2B4CC5"/>
                            </svg>
                        </div> */}
                        <img src="https://expofavela.com.br/wp-content/uploads/2023/01/ExpoFavela_Sobre_00.jpeg" alt="" />
                        {/* <video autoPlay muted loop src="./video/novovideo.mp4"></video> */}
                    </div>
                    <div className={style.areaInfo}>
                        <h2>Expo Favela 2024</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                        <a href="">
                            Baixar fotos
                            <div className={style.areaIcon}>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 6.76795C16.3333 7.53775 16.3333 9.46225 15 10.2321L3.75 16.7272C2.41667 17.497 0.750001 16.5348 0.750001 14.9952L0.750002 2.00481C0.750002 0.465209 2.41667 -0.497042 3.75 0.272758L15 6.76795Z" fill="#2B4CC5"/>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
                
                {/* Video Pareceiro 1 */}
                <div className={style.internalArea}>
                    <div className={style.videoArea}>

                        {/* <div className={style.buttonPlay}>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 6.76795C16.3333 7.53775 16.3333 9.46225 15 10.2321L3.75 16.7272C2.41667 17.497 0.750001 16.5348 0.750001 14.9952L0.750002 2.00481C0.750002 0.465209 2.41667 -0.497042 3.75 0.272758L15 6.76795Z" fill="#2B4CC5"/>
                            </svg>
                        </div> */}
                        <img src="./images/videoArea1.jpg" alt="" />
                        {/* <video autoPlay muted loop src="./video/novovideo.mp4"></video> */}
                    </div>
                    <div className={style.areaInfo}>
                        <h2>EXPOLOG 2024</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                        <a href="">
                            Baixar fotos
                            <div className={style.areaIcon}>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 6.76795C16.3333 7.53775 16.3333 9.46225 15 10.2321L3.75 16.7272C2.41667 17.497 0.750001 16.5348 0.750001 14.9952L0.750002 2.00481C0.750002 0.465209 2.41667 -0.497042 3.75 0.272758L15 6.76795Z" fill="#2B4CC5"/>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Video Pareceiro 1 */}
                <div className={style.internalArea}>
                    <div className={style.videoArea}>

                        {/* <div className={style.buttonPlay}>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 6.76795C16.3333 7.53775 16.3333 9.46225 15 10.2321L3.75 16.7272C2.41667 17.497 0.750001 16.5348 0.750001 14.9952L0.750002 2.00481C0.750002 0.465209 2.41667 -0.497042 3.75 0.272758L15 6.76795Z" fill="#2B4CC5"/>
                            </svg>
                        </div> */}
                        <img src="https://congressodoalgodao.com.br/wp-content/uploads/2023/08/header_blog_destaque.jpg" alt="" />
                        {/* <video autoPlay muted loop src="./video/novovideo.mp4"></video> */}
                    </div>
                    <div className={style.areaInfo}>
                        <h2>Congresso brasileiro de algodão</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                        <a href="">
                            Baixar fotos
                            <div className={style.areaIcon}>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 6.76795C16.3333 7.53775 16.3333 9.46225 15 10.2321L3.75 16.7272C2.41667 17.497 0.750001 16.5348 0.750001 14.9952L0.750002 2.00481C0.750002 0.465209 2.41667 -0.497042 3.75 0.272758L15 6.76795Z" fill="#2B4CC5"/>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </section>
    )
}