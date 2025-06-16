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
            <BannerDestak pagina="SOBREFORTALEZA" posicao={1} grid="true" />
            <BannerDestak pagina="SOBREFORTALEZA" posicao={2} />
            <div className="max-w-7xl mx-auto py-10">
                <iframe src="https://www.google.com/maps/d/embed?mid=1Na3SrnTk8RMwtFILvilnvSkoMhqp-E0&hl=pt-BR&ehbc=2E312F" width="100%" height="480"></iframe>
            </div>
            <Footer />
        </>
    );
}
