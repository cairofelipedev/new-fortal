import Footer from "@/Components/Footer";
import NavBar from "@/Components/Home/NavBar/Navbar";
import { Head } from "@inertiajs/react";
import style from "./Imprensa.module.scss";

export default function Welcome() {
    return (
        <>
            <Head title="Imprensa" />
            <NavBar />
            <section className={`${stylec.container2}`}>
                {/* Info Area */}
                <div className={style.infoArea}>
                    <h2 className={`text-4xl text-[#807f7f] ${style.title}`}>
                        <b>
                            Fique por dentro das atualizações mais recentes
                            sobre o mercado de turismo de negócios e eventos em
                            Fortaleza.
                        </b>
                    </h2>
                    {/* <span className="text-3xl lg:text-4xl">
                    Fique por dentro das atualizações mais recentes sobre o mercado de turismo de negócios e eventos em Fortaleza.
                    </span> */}
                    <p className={`${style.description}  text-lg`}>
                        Espaço para artigos exclusivos escritos pela
                        Assessoria e imprensa: Capuccino, com análises de
                        mercado e novidades.
                        <br />
                        <br />
                        Cobertura detalhada de eventos e iniciativas
                        promovidas pelo Visite Ceará.
                    </p>
                </div>

                <div className={style.videoArea}>
                    <iframe
                        width="1522"
                        height="598"
                        src="https://www.youtube.com/embed/3pqHYTK9Gqg?si=XROim3gqeqLwmBVL"
                        title="Fortaleza 04"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </section>
            <section className={style.container}>
                <svg
                    className={style.verticalLine}
                    width="2"
                    height="2263"
                    viewBox="0 0 2 2263"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 0L0.999901 2263"
                        stroke="#E8DCC6"
                        stroke-width="2"
                        stroke-dasharray="8 8"
                    />
                </svg>
                {/* 1 */}

                <div>
                    <img
                        className="rounded-xl object-cover"
                        src="./images/differencials/5.jpg"
                        alt="Imagem Diferencial"
                    />
                </div>

                <div className={`${style.cardInfo} ${style.another}`}>
                    <div className={style.areaText}>
                        <h2>Próximos Eventos (calendário).</h2>
                        <p>
                            Acompanhe uma lista sempre atualizada dos eventos
                            futuros em Fortaleza, com detalhes sobre datas,
                            locais e programação.
                        </p>
                    </div>
                </div>

                {/* 2 */}
                <div className={`${style.cardInfo}`}>
                    <div className={style.areaText}>
                        <h2>Cases de Sucesso</h2>
                        <p>
                            Aqui você pode encontrar informações sobre eventos
                            que foram Cases de sucesso em nosso destino.
                        </p>
                    </div>
                </div>

                <div className={`${style.areaImage}`}>
                    <img
                        src="./images/differencials/1.jpg"
                        alt="Imagem Diferencial"
                    />
                </div>
            </section>{" "}
            <Footer />
        </>
    );
}
