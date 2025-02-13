import style from './bannerHero.module.scss'

export default function BannerHero() {
  return (
    <section className={`${style.container} lg:h-[550px]`}>
      {/* Substituindo a imagem pelo vídeo */}
      <video
        className={style.bannerImage} // Usando o mesmo estilo da imagem para manter consistência
        src="https://acainograu.blob.core.windows.net/posts/PRONTO.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="https://acainograu.blob.core.windows.net/posts/PRONTO.mp4" // Opcional
      >
        Seu navegador não suporta vídeos HTML5.
      </video>

      <div className={style.contentContainer}>
        <p className="text-2xl">Bem vindo a Fortaleza, onde o trabalho e o bem estar se encontram!</p>
        <a className={style.download} href="/calendario-eventos">
          Agenda de eventos
          <div className={style.iconArea}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"/></svg>
          </div>
        </a>
      </div>

      {/* Decorações na parte inferior */}
      {/* <div className={`${style.bottomDecorations}`}></div> */}

      {/* Linha decorativa em SVG */}
      {/* <svg
        className={`${style.lineDeco} lg:block hidden`}
        width="207"
        height="454"
        viewBox="0 0 207 454"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M208 449.5C158.333 438.5 59.6999 406.1 62.4999 364.5C65.9999 312.5 88.0001 326.5 24.5001 268C-38.9999 209.5 67.0001 155 119 148C171 141 152.5 86.5 148.5 57C144.5 27.5 206 4 217.5 4"
          stroke="#0C9C95"
          strokeWidth="8"
        />
      </svg> */}
    </section>
  );
}
