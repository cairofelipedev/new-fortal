import style from './howToGet.module.scss'

export default function HowToGet() {
    return (
        <section className={style.container}>


            <img className={style.mapaBg} src="./images/mapBg.png" alt="" />

            <div className={style.cardCentral}>
                <h2>Como chegar?</h2>
                <div className="lg:grid lg:grid-cols-2 gap-20 space-y-10 lg:space-y-0 p-5">
                    <div>
                        <h3 className="text-2xl text-center">Avião</h3>
                        <p>O principal ponto de entrada é o Aeroporto Internacional Pinto Martins. A partir do aeroporto, você pode optar por táxis, aplicativos de transporte ou ônibus que conectam a cidade. </p>
                    </div>
                    <div>
                        <h3 className="text-2xl text-center">Estrada</h3>
                        <p>Se você prefere viajar de carro, Fortaleza está situada na BR-116 e na BR-222, que ligam a cidade a outras capitais nordestinas e ao interior do Brasil. Para quem vem de ônibus, diversas empresas oferecem rotas regulares para a Rodoviária Engenheiro João Thomé.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}