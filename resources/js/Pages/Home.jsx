import Footer from '@/Components/Footer';
import BannerDestak from '@/Components/Home/bannerDestak/bannerDestak';
import BannerHero from '@/Components/Home/bannerHero/bannerHero';
import EnjoyFortaleza from '@/Components/Home/enjoyFortaleza/enjoyFortaleza';
import InitialExplain from '@/Components/Home/initialExplain/initialExplain';
import NavBar from '@/Components/Home/NavBar/Navbar';
import { Head } from '@inertiajs/react';
import Apoiadores from "@/Components/Apoiadores";
import SimpleSlider from "@/Components/Banners/BannersHome";

export default function Welcome() {

  return (
    <>
      <Head title="Página Inicial" />

      <NavBar />
      <BannerHero />
      <InitialExplain />
      <BannerDestak pagina="HOME" posicao={2} grid={true} />
      <EnjoyFortaleza />
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <SimpleSlider page="HOME" />
        </div>
      </div>
      <Apoiadores />
      <Footer />
    </>
  );
}
