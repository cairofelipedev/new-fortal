import Footer from '@/Components/Footer';
import BannerDestak from '@/Components/Home/bannerDestak/bannerDestak';
import BannerHero from '@/Components/Home/bannerHero/bannerHero';
import EnjoyFortaleza from '@/Components/Home/enjoyFortaleza/enjoyFortaleza';
import Highlights from '@/Components/Home/highlights/highlights';
import NavBar from '@/Components/Home/NavBar/Navbar';
import NextEvents from '@/Components/CalendarEvents/nextEvents/nextEvents';
import OtherFortal from '@/Components/Home/OtherFortal';
import VideoArea from '@/Components/Home/videoArea/videoArea';
import { Head } from '@inertiajs/react';
import InitialExplain from '@/Components/About/initialAbout/InitialAbout';
import Differencials from '@/Components/About/differencials/differencials';
import HowToGet from '@/Components/About/howToGet/howToGet';

export default function Welcome() {
    return (
        <>
            <Head title="Porquê Fortaleza?" />

            <NavBar />

            <InitialExplain />

            <Differencials />

            <HowToGet />

            <Highlights />

            <EnjoyFortaleza />

            <VideoArea />

            {/* <OtherFortal /> */}
            <Footer />
        </>
    );
}
