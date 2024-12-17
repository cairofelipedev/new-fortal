import style from './bannerHero.module.scss'

export default function BannerHero() {
  return (
    <section className={`${style.container} lg:h-[550px]`}>
      {/* Substituindo a imagem pelo vídeo */}
      <video
        className={style.bannerImage} // Usando o mesmo estilo da imagem para manter consistência
        src="https://res.cloudinary.com/dzutjxuvt/video/upload/v1734376957/nosaxp08pf1d92yokhhv.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          objectFit: 'cover', // Faz o vídeo preencher o espaço de forma proporcional
          width: '100%',
          height: '100%',
        }}
        poster="https://res.cloudinary.com/dzutjxuvt/video/upload/v1734374612/yeoicuyl8mjdqialfcui.jpg" // Opcional
      >
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* Decorações na parte inferior */}
      <div className={`${style.bottomDecorations}`}></div>

      {/* Linha decorativa em SVG */}
      <svg
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
      </svg>
    </section>
  );
}
