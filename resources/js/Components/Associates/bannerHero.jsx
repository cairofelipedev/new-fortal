import { IoMdSend } from "react-icons/io";

export default function BannerHero() {
  return (
    <section className="relative lg:h-[600px]">
      <img
        className="absolute object-cover w-full h-full"
        src="./images/news/27_Easy-Resize.com.jpg"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Conteúdo */}
      <div className="lg:pt-0 pt-10 lg:pb-0 pb-10 relative flex flex-col justify-center h-full px-20">
        <p className="lg:text-9xl text-6xl text-white font-bold">Associados</p>
        <p className="lg:text-7xl text-5xl text-white font-bold">Conheça nossas empresas associadas</p>
        <p className="lg:text-7xl text-5xl text-white font-bold">Serviços de excelência</p>
        <div className="lg:mt-10 mt-5 flex gap-3 hidden lg:block">
          <div className="text-3xl font-bold text-white px-10 py-4 rounded-full flex gap-3 items-center">
            Atrações
            {/* <a href="#" target="_blank" rel="noopener noreferrer"
              className="text-white bg-orange-500 hover:bg-gray-300 duration-300 w-12 h-12 flex items-center justify-center rounded-full">
              <IoMdSend className="text-2xl" />
            </a> */}
          </div>
          <div className="text-3xl font-bold text-white px-10 py-4 rounded-full flex gap-3 items-center">
            Hotéis e Rersorts
            {/* <a href="#" target="_blank" rel="noopener noreferrer"
              className="text-white bg-orange-500 hover:bg-gray-300 duration-300 w-12 h-12 flex items-center justify-center rounded-full">
              <IoMdSend className="text-2xl" />
            </a> */}
          </div>
          <div className="text-3xl font-bold text-white px-10 py-4 rounded-full flex gap-3 items-center">
            Gastronomia
            {/* <a href="#" target="_blank" rel="noopener noreferrer"
              className="text-white bg-orange-500 hover:bg-gray-300 duration-300 w-12 h-12 flex items-center justify-center rounded-full">
              <IoMdSend className="text-2xl" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
