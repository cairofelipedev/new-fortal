import Footer from '@/Components/Footer';
import BannerDestak from '@/Components/Home/bannerDestak/bannerDestak';
import NavBar from '@/Components/Home/NavBar/Navbar';
import { Head } from '@inertiajs/react';
import SimpleSlider from '@/Components/Banners/BannersHome';
import ListaAssociados from '@/Components/ListaAssociados';

export default function Welcome() {
    return (
        <>
            <Head title="Escolas Náuticas" />

            <NavBar />
            <SimpleSlider page="ESCOLAS" />
            <BannerDestak pagina="ESCOLAS" posicao={1} />
            <ListaAssociados type="escolas" />
            <Footer />
        </>
    );
}
