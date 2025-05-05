import Footer from '@/Components/Footer';
import NavBar from '@/Components/Home/NavBar/Navbar';
import { Head } from '@inertiajs/react';
import ListaAssociados from '@/Components/ListaAssociados';
import BannerHero from '@/Components/Associates/bannerHero';
import SimpleSlider from '@/Components/Banners/BannersHome';

export default function Welcome() {
    return (
        <>
            <Head title="Associados" />
            <NavBar />
            <BannerHero />
            <SimpleSlider page="ORGANIZADORAS" />
            <ListaAssociados />
            <Footer />
        </>
    );
}
