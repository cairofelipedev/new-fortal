import NavBar from '@/Components/Home/NavBar/Navbar';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import Post from '@/Components/Post';

export default function Welcome() {
    return (
        <>
            <Head title="Blog Fortaleza Meetings" />
            <NavBar />
            <Post />
            <Footer />
        </>
    );
}
