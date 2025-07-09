import Footer from "@/Components/Footer";
import NavBar from "@/Components/Home/NavBar/Navbar";
import { Head } from "@inertiajs/react";
import BannerDestak from '@/Components/Home/bannerDestak/bannerDestak';
import ContactFields from "@/Components/Form/ContactFields";

export default function IndexAssociete() {
    const optionalFields = ["mobile_phone", "bio"];
    const company_id = ""
    return (
        <>
            <Head title="Associe-se" />
            <NavBar />
            <div className="pt-20">
                <BannerDestak pagina="ASSOCIESE" posicao={1} />
            </div>
            <ContactFields
                optionalFields={optionalFields}
                companyId={company_id}
                title="Quero me associar!"
                tag="associese"
            />
            <Footer />
        </>
    );
}
