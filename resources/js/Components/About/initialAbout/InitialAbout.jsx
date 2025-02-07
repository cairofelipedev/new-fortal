import style from './InitialAbout.module.scss'

export default function InitialExplain(){
    return (
        <section className={style.container}>

            <svg className={style.lineDeco} width="258" height="580" viewBox="0 0 258 580" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-13.3588 579C52.73 564.728 183.976 522.692 180.25 468.719C175.593 401.254 146.318 419.417 230.814 343.519C315.31 267.62 174.262 196.91 105.068 187.828C35.8748 178.746 60.492 108.037 65.8145 69.7632C71.1371 31.4893 -10.6976 1 -26 1" stroke="#F7A624" stroke-opacity="0.46" stroke-width="2" stroke-dasharray="10 10"/>
                <circle cx="57" cy="130" r="8" fill="#F57C29"/>
            </svg>

            {/* Info Area */}
            <div className={style.infoArea}>
                <h1>Por que<br /><b>Fortaleza?</b></h1>
                <p>Escolher Fortaleza como destino para realizar eventos de MICE (Meetings, Incentives, Conferences, and Exhibitions) é uma decisão estratégica que traz uma série de vantagens. Aqui estão alguns motivos que destacam a cidade como um local ideal para eventos e negócios:
                </p>
            </div>

            {/* Image Area */}
            <div className={style.imageArea}>
                <img src="./images/porqueFortaleza.jpg" alt="Imagem Inicial" />

                <svg className={style.decorador} width="134" height="93" viewBox="0 0 134 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.32955" cy="5.32955" r="5.32955" fill="#F2E9D7"/>
                    <circle cx="5.32955" cy="46.4432" r="5.32955" fill="#F2E9D7"/>
                    <circle cx="5.32955" cy="87.5568" r="5.32955" fill="#F2E9D7"/>
                    <circle cx="46.4433" cy="5.32955" r="5.32955" fill="#F2E9D7"/>
                    <circle cx="46.4433" cy="46.4432" r="5.32955" fill="#F2E9D7"/>
                    <circle cx="46.4433" cy="87.5568" r="5.32955" fill="#F2E9D7"/>
                    <circle cx="87.5571" cy="5.32955" r="5.32955" fill="#F2E9D7"/>
                    <circle cx="87.5571" cy="46.4432" r="5.32955" fill="#F2E9D7"/>
                    <circle cx="87.5571" cy="87.5568" r="5.32955" fill="#F2E9D7"/>
                    <circle cx="128.67" cy="5.32955" r="5.32955" fill="#F2E9D7"/>
                    <circle cx="128.67" cy="46.4432" r="5.32955" fill="#F2E9D7"/>
                    <circle cx="128.67" cy="87.5568" r="5.32955" fill="#F2E9D7"/>
                </svg>

            </div>
        </section>
    )
}