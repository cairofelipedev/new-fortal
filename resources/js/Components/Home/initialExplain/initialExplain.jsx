import style from './initialExplain.module.scss'

export default function InitialExplain() {
    const videos = [
        { src: "https://res.cloudinary.com/dzutjxuvt/video/upload/v1739480053/Conectividade_e_receptividade_xomspw.mp4", title: "Conectividade e Receptividade" },
        { src: "https://res.cloudinary.com/dzutjxuvt/video/upload/v1739480048/Atividades_Esportivas_e_de_Relaxamento_eeqqdi.mp4", title: "Atividades Esportivas e Relaxamento" },
        { src: "https://res.cloudinary.com/dzutjxuvt/video/upload/v1739480045/Beira_mar_de_Fortaleza_otgtqt.mp4", title: "Beira Mar de Fortaleza" },
        { src: "https://res.cloudinary.com/dzutjxuvt/video/upload/v1739480044/Clima_tropical_x5thl5.mp4", title: "Clima Tropical" },
        { src: "https://res.cloudinary.com/dzutjxuvt/video/upload/v1739480053/Conectividade_e_receptividade_xomspw.mp4", title: "Conectividade e Receptividade" },
        { src: "https://res.cloudinary.com/dzutjxuvt/video/upload/v1739480048/Atividades_Esportivas_e_de_Relaxamento_eeqqdi.mp4", title: "Atividades Esportivas e Relaxamento" },
        { src: "https://res.cloudinary.com/dzutjxuvt/video/upload/v1739480045/Beira_mar_de_Fortaleza_otgtqt.mp4", title: "Beira Mar de Fortaleza" },
        { src: "https://res.cloudinary.com/dzutjxuvt/video/upload/v1739480044/Clima_tropical_x5thl5.mp4", title: "Clima Tropical" },
    ];

    return (
        <section className={style.container}>
            <div className={`${style.infoArea} lg:grid lg:grid-cols-3 gap-10 space-y-5`}>
                
                {/* Texto fixo */}
                <div className="col-span-1 sticky top-5 self-start">
                    <h1 className="font-neulis text-7xl">Conheça <b>Fortaleza</b></h1>
                    <p className="text-justify text-xl">
                        Terra onde o sol brilha o ano todo e as oportunidades de networking florescem em um ambiente acolhedor, dinâmico e diversificado.
                        Aqui, você encontrará um destino completo para o turismo de negócios e eventos, unindo uma infraestrutura robusta, conectividade e uma
                        boa oferta de lazer em horários diferenciados. Essa combinação torna Fortaleza um destino onde o trabalho e o bem-estar se encontram.
                    </p>
                </div>

                {/* Grid de vídeos roláveis */}
                <div className="col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {videos.map((item, index) => (
                            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                                <video
                                    src={item.src}
                                    className="rounded-lg w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                                <div className="absolute bottom-2 left-2 right-2 bg-gray-500 bg-opacity-50 backdrop-blur-md text-white text-center p-2 rounded-lg">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
