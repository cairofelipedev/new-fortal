import { Head, usePage } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import style from '@/Components/SearchResults/ResultSpaceForEvent.module.scss';
import NavBar from "@/Components/Home/NavBar/Navbar";
import Footer from "@/Components/Footer";
import EventSearchForSpace from "@/Components/Search/EventSearch/EventSearchForSpace";
import SimpleSlider from "@/Components/Banners/BannersHome";

export default function ResultSearch() {
    const { props } = usePage();
    const results = props.results || [];

    return (
        <>
            <Head title="Resultado da Busca" />
            <NavBar />
            <SimpleSlider page="EVENTOS" />
            <EventSearchForSpace />

            <section className={`px-4 ${style.container}`}>
                <div className={style.titleArea}>
                    <div className={style.textArea}>
                        <h2>Resultados da sua <b>busca.</b></h2>
                        <p>{`Espaços encontrados: ${results.length}`}</p>
                    </div>

                    <span className={style.numberResults}>
                        {results.length}
                    </span>
                </div>

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
                                services={space.services}
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

/* 🔥 COMPONENTE DE SERVIÇOS COM "VER MAIS" */
function ServicesText({ services }) {
    const [expanded, setExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const el = textRef.current;
        if (el) {
            if (el.scrollHeight > el.clientHeight) {
                setShowButton(true);
            }
        }
    }, [services]);

    if (!services || services.trim() === '') return null;

    return (
        <li className={style.listItem}>
            <h2>Serviços</h2>

            <div style={{ position: 'relative' }}>
                <p
                    ref={textRef}
                    className={`${style.servicesText} ${expanded ? style.expanded : ''}`}
                >
                    {services}
                </p>

                {showButton && (
                    <span
                        className={style.moreButton}
                        onClick={(e) => {
                            e.preventDefault(); // não navegar
                            setExpanded(!expanded);
                        }}
                    >
                        {expanded ? '−' : '+'}
                    </span>
                )}
            </div>
        </li>
    );
}

/* CARD */
export function CardResult({ img, name, location, cep, capacity, services, tel, slug }) {
    return (
        <a href={`/espaco-para-seu-evento/${slug}`}>
            <article className={style.card}>
                <div className={style.areaImage}>
                    <img src={img} alt={`Imagem de ${name}`} />
                </div>

                <div className={`${style.infoArea} lg:h-[220px]`}>
                    <div className={style.nameArea}>
                        <h1>{name}</h1>
                        <a href={`/espaco-para-seu-evento/${slug}`}>Mais detalhes</a>
                    </div>

                    <ul className={`${style.generalInfoArea} grid grid-cols-2 gap-10`}>
                        <li className={style.listItem}>
                            <h2>Localização</h2>
                            <p>{location}</p>
                        </li>

                        <div>
                            <ServicesText services={services} />

                            <li className={style.listItem}>
                                <h2>Capacidade</h2>
                                <p>{capacity}</p>
                            </li>
                        </div>
                    </ul>
                </div>
            </article>
        </a>
    );
}