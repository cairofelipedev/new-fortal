import { Head } from '@inertiajs/react';
import NavBar from '@/Components/Home/NavBar/Navbar';
import Footer from '@/Components/Footer';
import FormArea from '@/Components/Inspecao/FormArea/FormArea';
import BannerDestak from '@/Components/Search/bannerDestak/bannerDestak';

export default function Welcome() {
    return (
        <>
            <Head title="Planejador de Eventos" />

            <NavBar />

            <FormArea />

            <Footer />
        </>
    );
}
