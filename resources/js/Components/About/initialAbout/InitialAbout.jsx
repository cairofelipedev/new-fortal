import style from './InitialAbout.module.scss'

export default function InitialExplain() {
    return (
        <>
            <section className={style.container}>
                <div className={`lg:grid lg:grid-cols-2 gap-10 space-y-5`}>
                    <div className="lg:pt-20">
                        <h1 className="font-neulis text-7xl font-regular">
                            Por que <b className="font-black text-[#0C9C95]">Fortaleza?</b>
                        </h1>
                        <p className="text-xl pb-5">
                            Escolher Fortaleza como destino para realizar <b className="text-black font-black">eventos de MICE (Meetings, Incentives, Conferences, and Exhibitions) </b>é uma decisão estratégica que traz uma série de vantagens. Aqui estão alguns motivos que destacam a cidade como um local ideal para eventos e negócios:
                        </p>
                    </div>
                    <div>
                        <img src="./images/porqueFortaleza.jpg" className="rounded-xl" alt="Imagem Inicial" />
                    </div>

                </div>
            </section>
        </>
    )
}