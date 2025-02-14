export default function BannerHero() {
  return (
    <section className="relative lg:h-[600px]">
      <video
        className="absolute object-cover w-full h-full"
        src="https://acainograu.blob.core.windows.net/posts/PRONTO.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="https://acainograu.blob.core.windows.net/posts/PRONTO.mp4"
      >
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Conteúdo */}
      <div className="relative flex flex-col justify-center h-full px-20">
        <p className="text-9xl text-white font-bold">Fortaleza</p>
        <p className="text-7xl text-white font-bold">Onde o trabalho</p>
        <p className="text-7xl text-white font-bold">e o bem estar se encontram!</p>
        <a href="#" className="mt-10">
          <button className="text-3xl font-bold text-gray-700 bg-white px-10 py-4 rounded-full">
            Planeje seu evento
          </button>
        </a>
      </div>
    </section>
  );
}
