import style from './howToGet.module.scss'

export default function HowToGet() {
    return (
        <section className={style.container}>
            <svg className={style.lineDIvisor} width="1201" height="3" viewBox="0 0 1201 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1.5H1200.5" stroke="#E8DCC6" stroke-width="2" stroke-dasharray="8 8"/>
            </svg>

            <img className={style.mapaBg} src="./images/mapBg.png" alt="" />

            <div className={style.cardCentral}>
                <div className={style.areaIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                </div>
                <h2>Como chegar?</h2>
                <p>O principal ponto de entrada é o Aeroporto Internacional Pinto Martins. A partir do aeroporto, você pode optar por táxis, aplicativos de transporte ou ônibus que conectam a cidade. Se você prefere viajar de carro, Fortaleza está situada na BR-116 e na BR-222, que ligam a cidade a outras capitais nordestinas e ao interior do Brasil. Para quem vem de ônibus, diversas empresas oferecem rotas regulares para a Rodoviária Engenheiro João Thomé.</p>
            </div>
        </section>
    )
}