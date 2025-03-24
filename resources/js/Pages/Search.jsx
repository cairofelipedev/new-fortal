
import EventSearch from '@/Components/Search/EventSearch/EventSearch';
import FormRd from '@/Components/Form/FormRd';
import { Head } from '@inertiajs/react';
import BannerDestak from '@/Components/Search/bannerDestak/bannerDestak';
import NavBar from '@/Components/Home/NavBar/Navbar';
import Testemonial from '@/Components/Search/testemonial/testemonial';
import Footer from '@/Components/Footer';
import EnjoyFortaleza from '@/Components/Search/enjoyFortaleza/enjoyFortaleza';
import VideoArea from '@/Components/Search/videoArea/videoArea';
import Baixar from '@/Components/Search/baixar/baixar';

export default function Welcome() {
    return (
        <>
            <Head title="Planejador de Eventos" />

            <NavBar />

            <VideoArea />

            <EventSearch />

            <EnjoyFortaleza />

            {/* <BannerDestak /> */}

            <Testemonial /> 

            {/* <Baixar /> */}

            <Footer />
            {/* <FormRd /> */}
        </>
    );
}
