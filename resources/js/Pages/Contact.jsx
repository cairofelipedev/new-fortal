import React from "react";
import NavBar from "@/Components/Home/NavBar/Navbar";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";
import ContactFields from "@/Components/Form/ContactFields";

const Contact = ({ optionalFields = [], companyId }) => {
    return (
        <>
            <Head title="Contato" />
            <NavBar />
            <ContactFields optionalFields={optionalFields} companyId={companyId} />
            <Footer />
        </>
    );
};

export default Contact;
