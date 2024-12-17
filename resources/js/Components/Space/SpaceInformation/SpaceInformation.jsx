import style from './SpaceInformation.module.scss'

export default function SpaceInformation() {
    return (
        <section className={style.container}>

            {/* Superior Area */}
            <div className={style.superiorArea}>
                {/* Name - Location */}
                <div className={style.nameArea}>
                    <h1>Adagio SP Barra Funda</h1>
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_207_682)">
                            <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#21272A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.99999 16.6668C13.6819 16.6668 16.6667 13.6821 16.6667 10.0002C16.6667 6.31826 13.6819 3.3335 9.99999 3.3335C6.3181 3.3335 3.33333 6.31826 3.33333 10.0002C3.33333 13.6821 6.3181 16.6668 9.99999 16.6668Z" stroke="#21272A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 1.6665V3.33317" stroke="#21272A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 16.6665V18.3332" stroke="#21272A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.6667 10H18.3333" stroke="#21272A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.66667 10H3.33334" stroke="#21272A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_207_682">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        Itararé, Teresina - PI, 64083-260
                    </span>
                </div>

                {/* Buttons */}
                <div className={style.areaButtons}>
                    {/* Book Buttton*/}
                    <button className={style.bookButton}>
                        Reservar
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.79018 6.52949C10.0692 6.23652 10.0692 5.76074 9.79018 5.46777L6.21875 1.71777C5.93973 1.4248 5.48661 1.4248 5.20759 1.71777C4.92857 2.01074 4.92857 2.48652 5.20759 2.77949L7.5625 5.2498H0.714286C0.319196 5.2498 0 5.58496 0 5.9998C0 6.41465 0.319196 6.7498 0.714286 6.7498H7.56027L5.20982 9.22012C4.9308 9.51309 4.9308 9.98887 5.20982 10.2818C5.48884 10.5748 5.94196 10.5748 6.22098 10.2818L9.79241 6.53184L9.79018 6.52949Z" fill="white"/>
                        </svg>
                    </button>

                    {/* Favorite Buttton */}
                    <button className={style.favoriteButton}>
                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_207_607)">
                            <path d="M0 1.5V15.2406C0 15.6594 0.340625 16 0.759375 16C0.915625 16 1.06875 15.9531 1.19687 15.8625L6 12.5L10.8031 15.8625C10.9313 15.9531 11.0844 16 11.2406 16C11.6594 16 12 15.6594 12 15.2406V1.5C12 0.671875 11.3281 0 10.5 0H1.5C0.671875 0 0 0.671875 0 1.5Z" fill="#0C9C95"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_207_607">
                            <rect width="12" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Images Conmtainer */}
            <div className={style.imagesContainer}>

                {/* List Images */}
                <div className={style.listImages}>
                    <img src="./images/hotel.png" alt="" />
                    <img src="./images/hotel.png" alt="" />
                    <img src="./images/hotel.png" alt="" />

                    <button className={style.plusButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                    </button>
                </div>

                {/* Principal Image */}
                <div className={style.principalImage}>
                    <img src="./images/principalImage.png" alt="Imagem Principal" />
                </div>
            </div>


            {/* Information Area*/}
            <div className={style.informationContainer}>
                {/* Information Area */}
                <div className={style.informationArea}>
                    <h2>Informações gerais</h2>
                    
                    <div className={style.infoSpots}>
                        {/* Region */}
                        <div className={style.spotInfo}>
                            <h3>Região</h3>
                            <p>Destino Centro & Zona Norte</p>
                        </div>

                        {/* nearestAirport */}
                        <div className={style.spotInfo}>
                            <h3>Aeroporto mais próximo</h3>
                            <p>Aeroporto de Guarulhos - 29 km</p>
                        </div>

                        {/* Services */}
                        <div className={style.spotInfo}>
                            <h3>Serviços</h3>
                            <p>Destino Centro & Zona Nortes</p>
                        </div>

                        {/* furthestAirport */}
                        <div className={style.spotInfo}>
                            <h3>Aeroporto mais distante</h3>
                            <p>Destino Centro & Zona Norte</p>
                        </div>

                        {/* description */}
                        <div className={`${style.spotInfo} ${style.spotDescription}`}>
                            <h3>Descrição</h3>
                            <p>O aparthotel Adagio São Paulo Barra Funda está localizado a 400 m do Memorial da América Latina, a 800 m do Parque da Água Branca, a 1 km do Allianz Park e 700 m do Espaço das Américas. O hotel oferece apartamentos modernos equipados com cozinha, geladeira, micro-ondas e forno de indução e é ideal para estadias de médio a longo prazo, seja sozinho ou com a família. Há também uma lavanderia, academia, restaurante para café da manhã e WIFI. Aceitamos animais de estimação de porte pequeno.</p>
                        </div>
                    </div> 

                </div>

                {/* Map Area */}
                <div className={style.mapArea}>
                    <img src="./images/map.png" alt="" />
                </div>
            </div>
        </section>
    )
}