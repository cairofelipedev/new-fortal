import Footer from "@/Components/Footer";
import NavBar from "@/Components/Home/NavBar/Navbar";
import SearchSpace from "@/Components/Space/searchSpace/searchSpace";
import SpaceInformation from "@/Components/Space/SpaceInformation/SpaceInformation";
import { Head } from "@inertiajs/react";

export default function Product() {

    return (
        <main className="white">
            <Head title={'Produtos'} />

            <NavBar />

            <SearchSpace />
            
            <SpaceInformation />

            <Footer />
        </main>
    );
}
