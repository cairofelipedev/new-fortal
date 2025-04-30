import Footer from '@/Components/Footer';
import BannerDestak from '@/Components/Home/bannerDestak/bannerDestak';
import NavBar from '@/Components/Home/NavBar/Navbar';
import { Head } from '@inertiajs/react';
import SimpleSlider from '@/Components/Banners/BannersHome';

export default function Welcome() {
    return (
        <>
            <Head title="Porquê Fortaleza?" />

            <NavBar />
            <SimpleSlider page="ORGANIZADORAS"/>
            <BannerDestak pagina="ORGANIZADORAS" posicao={1} />

            <Footer />
        </>
    );
}
