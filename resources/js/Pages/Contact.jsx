import React from "react";
import NavBar from "@/Components/Home/NavBar/Navbar";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";
import ContactFields from "@/Components/Form/ContactFields";
import BannerDestak from "@/Components/Home/bannerDestak/bannerDestak";


const Contact = () => {

    const optionalFields = ["mobile_phone", "bio"];
    const company_id = ""
    return (
        <>
            <Head title="Contato" />
            <NavBar />
            <div className="lg:pt-20 pt-5">
                <BannerDestak pagina="CONTATO" posicao={1} />
            </div>
            <ContactFields
                optionalFields={optionalFields}
                companyId={company_id}
                title="Contato"
                tag="contato"
            />
            <Footer />
        </>
    );
};

export default Contact;
