import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavBar from "@/Components/Home/NavBar/Navbar";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";

const ContactForm = ({ optionalFields = [], companyId, query }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company_id: companyId || "",
        ...optionalFields.reduce((acc, field) => ({ ...acc, [field]: "" }), {}),
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            tags: ["site"],
        };

        try {
            await axios.post("/api/rd/contacts", dataToSend);

            Swal.fire({
                icon: "success",
                title: "Sucesso!",
                text: "Contato enviado com sucesso.",
            });

            if (
                query?.type &&
                query?.capacity &&
                query?.total_event_area &&
                query?.total_rentable_event_rooms
            ) {
                window.location.href = `/resultado-buscar-evento/search?type=${query.type}&capacity=${query.capacity}&total_event_area=${query.total_event_area}&total_rentable_event_rooms=${query.total_rentable_event_rooms}`;
            } else {
                window.location.reload();
            }

            setFormData({
                name: "",
                email: "",
                company_id: companyId || "",
                ...optionalFields.reduce((acc, field) => ({ ...acc, [field]: "" }), {}),
            });
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors || {});
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Erro!",
                    text: "Ocorreu um erro ao enviar o contato. Tente novamente.",
                });
            }
        }
    };

    const fieldLabels = {
        mobile_phone: "WhatsApp Business",
        bio: "Nome da Empresa",
    };

    return (
        <>
            <Head title="Contato" />
            <NavBar />

            <main className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                        Quero <span className="text-blue-600">Reservar!</span>
                    </h1>
                    <p className="text-gray-600 mb-8 text-center">
                        Preencha o formulário abaixo e a equipe responsável pelo local entrará em contato com você.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Seu Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <input type="hidden" name="company_id" value={formData.company_id} />

                        {optionalFields.map((field) => (
                            <div key={field}>
                                <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                                    {fieldLabels[field] || field.replace(/_/g, " ").replace(/^./, str => str.toUpperCase())}
                                </label>
                                <input
                                    type={field === "birthdate" ? "date" : "text"}
                                    id={field}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                            </div>
                        ))}

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default ContactForm;
