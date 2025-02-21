import { IoMdSend } from "react-icons/io";

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
      <div className="lg:pt-0 pt-10 lg:pb-0 pb-10 relative flex flex-col justify-center h-full lg:px-20 px-5">
        <p className="lg:text-9xl text-6xl text-white font-bold">Fortaleza</p>
        <p className="lg:text-7xl text-5xl text-white font-bold">Onde o trabalho</p>
        <p className="lg:text-7xl text-5xl text-white font-bold">e o bem estar se encontram!</p>
        <a href="planejador-de-eventos" className="lg:mt-10 mt-5">
          <button className="lg:text-3xl text-2xl font-bold text-gray-700 bg-white px-10 py-4 rounded-full flex gap-3 items-center">
            Planeje seu evento
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="text-white bg-orange-500 hover:bg-gray-300 duration-300 w-12 h-12 flex items-center justify-center rounded-full">
              <IoMdSend className="text-2xl" />
            </a>
          </button>
        </a>
      </div>
    </section>
  );
}
