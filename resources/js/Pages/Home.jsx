import Footer from '@/Components/Footer';
import BannerDestak from '@/Components/Home/bannerDestak/bannerDestak';
import BannerHero from '@/Components/Home/bannerHero/bannerHero';
import EnjoyFortaleza from '@/Components/Home/enjoyFortaleza/enjoyFortaleza';
import Highlights from '@/Components/Home/highlights/highlights';
import InitialExplain from '@/Components/Home/initialExplain/initialExplain';
import NavBar from '@/Components/Home/NavBar/Navbar';
import NextEvents from '@/Components/CalendarEvents/nextEvents/nextEvents';
import { Head } from '@inertiajs/react';
import HowToGet from '@/Components/About/howToGet/howToGet';

export default function Welcome() {
    return (
        <>
            <Head title="Página Inicial" />

            <NavBar />

            <BannerHero />

            <InitialExplain />

            {/* <Highlights /> */}

            <BannerDestak pagina="HOME" posicao={2} grid={true} />

            <EnjoyFortaleza />

            {/* <HowToGet /> */}
            {/* 
            <NextEvents 
                month={'Eventos em fortaleza'}
            /> */}

            {/* <OtherFortal /> */}

            <BannerDestak pagina="HOME" posicao={3} centerText={true} />
            <div className="max-w-7xl mx-auto py-10">
                <h1 className="text-center uppercase tracking-widest font-raleway font-black text-[#0C9C95] py-5 lg:text-4xl text-xl">
                    Nossos Apoiadores
                </h1>
                <div className="flex justify-center">
                    <img src="/images/logobrasil-removebg-preview.png" className="w-60" />
                </div>
            </div>
            <Footer />
        </>
    );
}
