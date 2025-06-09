import NavBar from '@/Components/Home/NavBar/Navbar';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import NextEventShow from '@/Components/NextEventShow';

export default function Welcome() {
    return (
        <>
            <Head title="Blog Fortaleza Meetings" />
            <NavBar />
            <NextEventShow />
            <Footer />
        </>
    );
}
