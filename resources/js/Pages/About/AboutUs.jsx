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
import InitialAboutFortaleza from '@/Components/About/initialAbout/InitialAboutFortaleza';
import Differencials from '@/Components/About/differencials/differencials';
import HowToGet from '@/Components/About/howToGet/howToGet';
import SimpleSlider from '@/Components/Banners/BannersHome';

export default function Welcome() {
    return (
        <>
            <Head title="Porquê Fortaleza?" />

            <NavBar />
            <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] py-3 lg:text-6xl text-4xl">
                Quem Somos
            </h1>


            <p className="text-gray-600 text-justify lg:text-3xl text-2xl pb-5">
                O Fortaleza Convention & Visitors Bureau / Visite Ceará foi fundado em 1996 e é uma entidade privada sem fins lucrativos, congregando diversos associados, que representam todos os segmentos ligados à atividade turística. Manter relacionamento com todos os segmentos econômicos que, direta ou indiretamente, se beneficiam do turismo.

                A Instituição tem como objetivo ampliar o número de visitantes no destino e, consequentemente, aumentar o volume de negócios e o mercado de consumo, por meio da cadeia produtiva do turismo. As atividades são realizadas por meio de ações de promoção, capacitação profissional, captação, geração e incremento de eventos e negócios.

            </p>

            <Footer />
        </>
    );
}
