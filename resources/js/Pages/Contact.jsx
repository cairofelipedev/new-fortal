import React from "react";
import NavBar from "@/Components/Home/NavBar/Navbar";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";
import ContactFields from "@/Components/Form/ContactFields";


const Contact = () => {

    const optionalFields = ["mobile_phone", "bio"];
    const company_id = ""
    return (
        <>
            <Head title="Contato" />
            <NavBar />
            <ContactFields
                optionalFields={optionalFields}
                companyId={company_id} />
            <Footer />
        </>
    );
};

export default Contact;
