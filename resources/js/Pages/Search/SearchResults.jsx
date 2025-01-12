import { Head, usePage } from "@inertiajs/react";
import style from './ResultSearch.module.scss';
import NavBar from "@/Components/Home/NavBar/Navbar";
import Footer from "@/Components/Footer";
import SearchSpace from "@/Components/Space/searchSpace/searchSpace";

export default function ResultSearch() {
    const { props } = usePage();
    const results = props.results || []; // Obter resultados da API

    return (
        <>
        <Head title="Resultado da Busca"/>
            <NavBar />
            <SearchSpace 
                searchPage={true}
            />
            <section className={style.container}>
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
export function CardResult({ img, name, location,cep, capacity, services, tel, slug }) {
    return (
        <article className={style.card}>
            {/* Área da imagem */}
            <div className={style.areaImage}>
                <div className={style.iconArea}>
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_207_607)">
                        <path d="M0 1.5V15.2406C0 15.6594 0.340625 16 0.759375 16C0.915625 16 1.06875 15.9531 1.19687 15.8625L6 12.5L10.8031 15.8625C10.9313 15.9531 11.0844 16 11.2406 16C11.6594 16 12 15.6594 12 15.2406V1.5C12 0.671875 11.3281 0 10.5 0H1.5C0.671875 0 0 0.671875 0 1.5Z" fill="#0C9C95"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_207_607">
                        <rect width="12" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <img src={img} alt={`Imagem de ${name}`} />
            </div>

            {/* Área de informações */}
            <div className={style.infoArea}>
                {/* Nome e link */}
                <div className={style.nameArea}>
                    <h1>{name}</h1>
                    <a href={`/espaco-para-seu-evento/${slug}`}>Mais detalhes</a>
                </div>

                {/* Informações gerais */}
                <ul className={style.generalInfoArea}>
                    <li className={style.listItem}>
                        <h2>Localização</h2>
                        <p>{location}</p>
                    </li>
                    <li className={style.listItem}>
                        <h2>CEP</h2>
                        <p>{cep}</p>
                    </li>
                    <li className={style.listItem}>
                        <h2>Serviços</h2>
                        <p>{services}</p>
                    </li>
                    <li className={style.listItem}>
                        <h2>Capacidade</h2>
                        <p>{capacity}</p>
                    </li>
                    <li className={style.listItem}>
                        <h2>Distância do centro</h2>
                        <p>4 Km</p>
                    </li>
                    <li className={style.listItem}>
                        <h2>Distância do aeroporto</h2>
                        <p>8 Km</p>
                    </li>
                </ul>
            </div>
        </article>
    );
}
