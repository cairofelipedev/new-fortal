import Footer from "@/Components/Footer";
import NavBar from "@/Components/Home/NavBar/Navbar";
import { Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="Porquê Fortaleza?" />

            <NavBar />

            <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] py-3 lg:text-4xl text-4xl pt-32 px-10">
                Quem Somos
            </h1>

            <p className="text-gray-600 text-justify lg:text-lg text-lg pb-5 px-12">
                O Fortaleza Convention & Visitors Bureau / Visite Ceará foi
                fundado em 1996 e é uma entidade privada sem fins lucrativos,
                congregando diversos associados, que representam todos os
                segmentos ligados à atividade turística. Manter relacionamento
                com todos os segmentos econômicos que, direta ou indiretamente,
                se beneficiam do turismo. A Instituição tem como objetivo
                ampliar o número de visitantes no destino e, consequentemente,
                aumentar o volume de negócios e o mercado de consumo, por meio
                da cadeia produtiva do turismo. As atividades são realizadas por
                meio de ações de promoção, capacitação profissional, captação,
                geração e incremento de eventos e negócios.
            </p>
            <section className="grid grid-cols-2 px-3">
                <div>
                    <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] py-3 lg:text-2xl text-4xl pt-32 px-10">
                        Conselho
                    </h1>

                    <p className="text-gray-600 text-justify lg:text-lg text-lg pb-5 px-12">
                        Lista
                    </p>
                </div>
                <div>
                    <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] py-3 lg:text-2xl text-4xl pt-32 px-10">
                        Equipe
                    </h1>

                    <p className="text-gray-600 text-justify lg:text-lg text-lg pb-5 px-12">
                        Lista
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
