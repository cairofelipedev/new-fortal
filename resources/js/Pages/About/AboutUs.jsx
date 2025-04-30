import Footer from "@/Components/Footer";
import NavBar from "@/Components/Home/NavBar/Navbar";
import { Head } from "@inertiajs/react";
import BannerDestak from '@/Components/Home/bannerDestak/bannerDestak';

export default function Welcome() {
    return (
        <>
            <Head title="Quem Somos" />

            <NavBar />
            <div className="pt-20">
                <BannerDestak pagina="QUEMSOMOS" posicao={1} />
            </div>
            <Footer />
        </>
    );
}
