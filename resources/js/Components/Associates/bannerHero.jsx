export default function BannerHero() {
  const items = ["Restaurantes", "Eventos", "Marketing", "Segurança", "Imprensa", "Transporte", "Buffet"];
  
  return (
    <section className="relative lg:h-[600px] overflow-hidden">
      <img
        className="absolute object-cover w-full h-full"
        src="./images/news/27_Easy-Resize.com.jpg"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Conteúdo */}
      <div className="lg:pt-0 pt-10 lg:pb-0 pb-10 relative flex flex-col justify-center h-full">
        <div className="lg:px-20 px-5">
          <p className="lg:text-9xl text-6xl text-white font-bold">Serviços</p>
          <p className="lg:text-7xl text-5xl text-white font-bold">Os principais segmentos estão aqui</p>
        </div>
      </div>
    </section>
  );
}
