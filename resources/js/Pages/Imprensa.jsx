import Footer from '@/Components/Footer';
import NavBar from '@/Components/Home/NavBar/Navbar';
import NextEvents from '@/Components/CalendarEvents/nextEvents/nextEvents';
import { Head } from '@inertiajs/react';
import Baixar from '@/Components/Search/baixar/baixar';
import VideoArea from '@/Components/Imprensa/VideosArea/VideosArea';

export default function Imprensa() {
    return (
        <>
            <Head title="Página Inicial" />

            <NavBar />

            <VideoArea />

            <NextEvents 
                month={'Eventos em fortaleza'}
            />

            <Baixar />

            <Footer />
        </>
    );
}
