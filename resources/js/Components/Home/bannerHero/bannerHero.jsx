import { IoMdSend } from "react-icons/io";

export default function BannerHero() {
  return (
    <section className="relative h-[600px] lg:h-[600px] lg:pt-0">
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

      {/* Overlay escuro cobrindo toda altura */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Conteúdo */}
      <div className="relative flex flex-col justify-center h-full lg:px-40 px-5 pt-10 lg:pt-0 pb-10 lg:pb-0">
        <p className="lg:text-7xl text-6xl text-white font-black uppercase">Fortaleza</p>
        <p className="lg:text-6xl text-5xl text-white font-black uppercase">Um evento pra se viver</p>

        <a href="/planejador-de-eventos" className="lg:mt-10 mt-5">
          <button className="lg:text-3xl text-2xl font-bold text-white bg-fortalorange px-10 py-4 rounded-full flex gap-3 items-center hover:bg-white hover:text-fortalorange hover:border-fortalorange transition-colors duration-300">
            Planeje seu evento
            <span className="text-white bg-orange-500 hover:bg-gray-300 duration-300 w-12 h-12 flex items-center justify-center rounded-full">
              <IoMdSend className="text-2xl" />
            </span>
          </button>
        </a>
      </div>
    </section>
  );
}
