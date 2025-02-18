import Footer from '@/Components/Footer';
import NavBar from '@/Components/Home/NavBar/Navbar';
import { Head } from '@inertiajs/react';
import ListaAssociados from '@/Components/ListaAssociados';

export default function Welcome() {
    return (
        <>
            <Head title="Associados" />
            <NavBar />
            <ListaAssociados />
            <Footer />
        </>
    );
}
