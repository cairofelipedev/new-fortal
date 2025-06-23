import { Head, usePage } from "@inertiajs/react";
import style from '@/Components/SearchResults/ResultSpaceForEvent.module.scss';
import NavBar from "@/Components/Home/NavBar/Navbar";
import Footer from "@/Components/Footer";
import EventSearchForSpace from "@/Components/Search/EventSearch/EventSearchForSpace";
import SimpleSlider from "@/Components/Banners/BannersHome";

export default function ResultSearch() {
    const { props } = usePage();
    const results = props.results || []; // Obter resultados da API

    return (
        <>
            <Head title="Resultado da Busca" />
            <NavBar />
            <SimpleSlider page="EVENTOS" />
            <EventSearchForSpace />
            <section className={`px-4 ${style.container}`}>
                {/* Título e resumo */}
                <div className={style.titleArea}>
                    <div className={style.textArea}>
                        <h2>Resultados da sua <b>busca.</b></h2>
                        <p>{`Espaços encontrados: ${results.length}`}</p>
                    </div>
                    <span className={style.numberResults}>
                        {results.length}
                    </span>
                </div>

                {/* Área dos resultados */}
                <div className={style.AreaResults}>
                    {results.length > 0 ? (
                        results.map((space) => (
                            <CardResult
                                key={space.id}
                                img={`/uploads/${space.image || 'default.png'}`}
                                name={space.name}
                                location={`${space.city}, ${space.state}, ${space.address}`}
                                cep={`${space.zip_code}`}
                                capacity={space.capacity || 'N/A'}
                                services="Acessibilidade, Aceita animais" // Valor estático
                                tel={space.phone || 'Não disponível'}
                                slug={space.slug}
                            />
                        ))
                    ) : (
                        <p>Nenhum espaço encontrado.</p>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}

// Componente CardResult para cada espaço
export function CardResult({ img, name, location, cep, capacity, services, tel, slug }) {
    return (
        <>
            <a href={`/espaco-para-seu-evento/${slug}`}>
                <article className={style.card}>
                    {/* Área da imagem */}

                    <div className={style.areaImage}>
                        <img src={img} alt={`Imagem de ${name}`} />
                    </div>

                    {/* Área de informações */}

                    <div className={`${style.infoArea} lg:h-[200px]`}>
                        {/* Nome e link */}
                        <div className={style.nameArea}>
                            <h1>{name}</h1>
                            <a href={`/espaco-para-seu-evento/${slug}`}>Mais detalhes</a>
                        </div>

                        {/* Informações gerais */}
                        <ul className={`${style.generalInfoArea} grid grid-cols-2 gap-10`}>
                            <li className={style.listItem}>
                                <h2>Localização</h2>
                                <p>{location}</p>
                            </li>
                            <div>
                                <li className={style.listItem}>
                                    <h2>Serviços</h2>
                                    <p>{services}</p>
                                </li>
                                <li className={style.listItem}>
                                    <h2>Capacidade</h2>
                                    <p>{capacity}</p>
                                </li>
                            </div>
                        </ul>
                    </div>
                </article>
            </a>
        </>
    );
}
