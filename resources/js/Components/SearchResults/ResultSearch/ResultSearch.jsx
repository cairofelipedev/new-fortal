
import style from './ResultSearch.module.scss'

export default function ResultSearch() {
    return (
        <section className={style.container}>
            {/* Tilte Area */}
            <div className={style.titleArea}>
                <div className={style.textArea}>
                    <h2>Resultados da sua <b>busca.</b></h2>
                    <p>Espaço: 500 Tipo de espaço: Resort</p>
                </div>

                <span className={style.numberResults}>
                    25
                </span>
            </div>

            {/* Area Results */}
            <div className={style.AreaResults}>

                <CardResult 
                    img={'./images/hotel.png'}
                    name={'Adagio SP Barra Funda'}
                    region={'Destino Centro & Zona Norte'}
                    nearestAirport={'Aeroporto de Guarulhos - 29 km'}
                    capacity={'300 - 500 pessoas'}
                    services={'Acessibilidade, Aceita animais'}
                    furthestAirport={'Aeroporto de Guarulhos - 29 km'}
                    tel={'(85) 9 9400-0000'}
                />
                <CardResult 
                    img={'./images/hotel.png'}
                    name={'Adagio SP Barra Funda'}
                    region={'Destino Centro & Zona Norte'}
                    nearestAirport={'Aeroporto de Guarulhos - 29 km'}
                    capacity={'300 - 500 pessoas'}
                    services={'Acessibilidade, Aceita animais'}
                    furthestAirport={'Aeroporto de Guarulhos - 29 km'}
                    tel={'(85) 9 9400-0000'}
                />
                <CardResult 
                    img={'./images/hotel.png'}
                    name={'Adagio SP Barra Funda'}
                    region={'Destino Centro & Zona Norte'}
                    nearestAirport={'Aeroporto de Guarulhos - 29 km'}
                    capacity={'300 - 500 pessoas'}
                    services={'Acessibilidade, Aceita animais'}
                    furthestAirport={'Aeroporto de Guarulhos - 29 km'}
                    tel={'(85) 9 9400-0000'}
                />
            </div>
        </section>
    )
}

export function CardResult({img, name, region, nearestAirport, capacity, furthestAirport, services, tel}) {
    return (
        <article className={style.card}>
            {/* Area Image */}
            <div className={style.areaImage}>
                <div className={style.iconArea}>

                </div>

                <img src={img} alt="imagem espa;o" />
            </div>

            {/* Information Area */}
            <div className={style.infoArea}>

                {/* Name Area */}
                <div className={style.nameArea}>
                    <h1>{name}</h1>

                    <a href="">Mais detalhes</a>
                </div>

                {/* General Info Area */}
                <ul className={style.generalInfoArea}>

                    {/* Region */}
                    <li className={style.listItem}>
                        <h2>Região</h2>
                        <p>{region}</p>
                    </li>
                    {/* nearest airport */}
                    <li className={style.listItem}>
                        <h2>Aeroporto mais próximo</h2>
                        <p>{nearestAirport}</p>
                    </li>
                    {/* capacity */}
                    <li className={style.listItem}>
                        <h2>Capacidade</h2>
                        <p>{capacity}</p>
                    </li>
                    {/* Services */}
                    <li className={style.listItem}>
                        <h2>Aeroporto mais distante</h2>
                        <p>{furthestAirport}</p>
                    </li>
                    {/* Services */}
                    <li className={style.listItem}>
                        <h2>Serviços</h2>
                        <p>{services}</p>
                    </li>
                    {/* Services */}
                    <li className={style.listItem}>
                        <h2>Telefone</h2>
                        <p>{tel}</p>
                    </li>
                </ul>
            </div>
        </article>
    )
}