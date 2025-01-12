import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import style from '../../../../css/show.module.scss'
import { React } from "react";
import { Head, usePage } from "@inertiajs/react";

const Show = ({ auth }) => {
    const { space } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-[24px] text-[#0C9C95] leading-tight">Espaço</h2>}
        >
            <Head title={`Espaço`} />
            {space ? (
                <div className={style.container}>
                    <div className={style.areaInfos}>
                        <h1>{space.name}</h1>
                        <p>{space.description}</p>

                        <img
                            src={`/uploads/${space.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYa88AyMbjn63yCvQ5qPB1GJrLP8H4u1caA&s'}`}
                            alt={space.name || 'Espaço sem nome'}
                        />

                        <h2>Informações gerais</h2>

                        <div className={style.gridArea}>
                            <div className={style.labelArea}>
                                <h3>Região</h3>
                                <p>Destino Centro & Zona Norte</p>
                            </div>
                            <div className={style.labelArea}>
                                <h3>Aeroporto mais próximo</h3>
                                <p>Destino Centro & Zona Norte</p>
                            </div>
                            <div className={style.labelArea}>
                                <h3>Serviços</h3>
                                <p>Destino Centro & Zona Norte</p>
                            </div>
                            <div className={style.labelArea}>
                                <h3>Aeroporto mais próximo</h3>
                                <p>Destino Centro & Zona Norte</p>
                            </div>
                            <div className={`${style.labelArea} ${style.labelDescription}`}>
                                <h3>Descrição</h3>
                                <p>O aparthotel Adagio São Paulo Barra Funda está localizado a 400 m do Memorial da América Latina, a 800 m do Parque da Água Branca, a 1 km do Allianz Park e 700 m do Espaço das Américas. O hotel oferece apartamentos modernos equipados com cozinha, geladeira, micro-ondas e forno de indução e é ideal para estadias de médio a longo prazo, seja sozinho ou com a família. Há também uma lavanderia, academia, restaurante para café da manhã e WIFI. Aceitamos animais de estimação de porte pequeno.</p>
                            </div>
                        </div>
                    </div>

                    <article className={style.areaLeads}>
                        <div className={style.titleArea}>
                            <h1>1.200 views</h1>
                            <p>150 leads</p>
                        </div>
                        <ul className={style.leadsList}>
                            <li>
                                <div className={style.areaImage}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
                                </div>
                                <div className={style.areaList}>
                                    <h2>Jeronimo Candido da Silva</h2>
                                    <p>Jeronimo@gmail.com</p>
                                </div>
                            </li>
                            <li>
                                <div className={style.areaImage}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
                                </div>
                                <div className={style.areaList}>
                                    <h2>Jeronimo Candido da Silva</h2>
                                    <p>Jeronimo@gmail.com</p>
                                </div>
                            </li>
                            <li>
                                <div className={style.areaImage}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
                                </div>
                                <div className={style.areaList}>
                                    <h2>Jeronimo Candido da Silva</h2>
                                    <p>Jeronimo@gmail.com</p>
                                </div>
                            </li>
                            <li>
                                <div className={style.areaImage}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
                                </div>
                                <div className={style.areaList}>
                                    <h2>Jeronimo Candido da Silva</h2>
                                    <p>Jeronimo@gmail.com</p>
                                </div>
                            </li>
                            <li>
                                <div className={style.areaImage}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
                                </div>
                                <div className={style.areaList}>
                                    <h2>Jeronimo Candido da Silva</h2>
                                    <p>Jeronimo@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                    </article>
                </div>
            ) : (
                <div>Espaço não encontrado</div>
            )}
        </AuthenticatedLayout>
    );
}

export default Show;
