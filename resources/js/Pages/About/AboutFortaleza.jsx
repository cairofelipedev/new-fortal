import Footer from '@/Components/Footer';
import BannerDestak from '@/Components/Home/bannerDestak/bannerDestak';
import NavBar from '@/Components/Home/NavBar/Navbar';
import { Head } from '@inertiajs/react';
import SimpleSlider from '@/Components/Banners/BannersHome';

export default function AboutFortal() {
    return (
        <>
            <Head title="Sobre Fortaleza" />
            <NavBar />
            <SimpleSlider page="SOBREFORTALEZA" />
            <BannerDestak pagina="SOBREFORTALEZA" posicao={1} />
            <Footer />
        </>
    );
}
