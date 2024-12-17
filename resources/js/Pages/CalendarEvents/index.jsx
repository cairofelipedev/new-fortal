import BannerDestak from '@/Components/CalendarEvents/bannerDestak/bannerDestak';
import NextEvents from '@/Components/CalendarEvents/nextEvents/nextEvents';
import Footer from '@/Components/Footer';
import NavBar from '@/Components/Home/NavBar/Navbar';
import { Head } from '@inertiajs/react';

export default function CalendarEvents() {
    return (
        <>
            <Head title="Welcome" />

            <NavBar />

            <BannerDestak />

            <NextEvents 
                month={'Próximos eventos'}
            />

            {/* <NextEvents 
                month={'Janeiro'}
            /> */}

            <Footer/>
        </>
    );
}
