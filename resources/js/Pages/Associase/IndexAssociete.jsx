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
                O Fortaleza CVB conta atualmente com XX associados dos mais
                variados segmentos que compõem a cadeia do turismo na região. A
                instituição é uma hub que conecta empresas da cadeia produtiva.
                Hotéis, centros e fornecedores de eventos e viagens,
                organizadores e promotores de congressos, convenções, feiras e
                shows, operadores de turismo receptivo, bares e restaurantes,
                comércio e empresas de transportes reunidas, trabalham de forma
                cooperativada para o aumento do fluxo turístico de lazer, de
                eventos e de negócios. Os associados desempenham um papel
                fundamental e estratégico na qualidade de atendimento aos
                turistas. Junte-se a nós e participe de treinamentos, rodadas de
                negócios e eventos que fortalecem o turismo e os negócios da
                região. Preencha o formulário e identifique o plano de anuidade
                que corresponde ao seu tipo de estabelecimento, envie para que
                nossa equipe entre em contato.
                <span className="text-md text-red-600">
                    Precisa de ajuda ou quer mais informações? Chame no
                    XXXXXXXXX
                </span>
            </p>
            <section className="">formulário</section>

            <Footer />
        </>
    );
}
