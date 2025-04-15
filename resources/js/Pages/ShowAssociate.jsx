import NavBar from '@/Components/Home/NavBar/Navbar';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import Associete from '@/Components/Associete';

export default function Associetes() {
    return (
        <>
            <Head title="Associado Fortaleza Meetings" />
            <NavBar />
            <Associete />
            <Footer />
        </>
    );
}
