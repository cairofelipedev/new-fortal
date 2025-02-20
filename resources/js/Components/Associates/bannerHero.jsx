import { motion } from "framer-motion";

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
          <p className="lg:text-9xl text-6xl text-white font-bold">Associados</p>
          <p className="lg:text-7xl text-5xl text-white font-bold">Os principais segmentos estão aqui</p>
        </div>
        {/* Carrossel infinito */}
        <div className="relative w-full overflow-hidden mt-10">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          >
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="text-3xl font-bold text-white px-10 py-4 rounded-full flex gap-3 items-center bg-opacity-50 bg-black"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
