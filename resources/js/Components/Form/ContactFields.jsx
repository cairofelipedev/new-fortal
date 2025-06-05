import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import style from "@/Components/Search/videoArea/videoArea.module.scss";

const ContactFields = ({ optionalFields = [], companyId }) => {
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

            window.location.href = "/";

            setFormData({
                name: "",
                email: "",
                company_id: companyId || "",
                ...optionalFields.reduce(
                    (acc, field) => ({ ...acc, [field]: "" }),
                    {}
                ),
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
        <div className="bg-gray-100 px-4 sm:px-6 lg:px-8 pt-28 pb-20">
            <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl py-4 px-8">
                <h2 className="uppercase tracking-widest font-raleway font-black text-[#0c9c95] py-5 lg:text-3xl text-xl text-center">
                   Quero me associar!
                </h2>
                <div className={style.infoArea3}>
                    <p className={`${style.description} text-md`}>
                        Preencha o formulário abaixo e a equipe responsável pelo
                        local entrará em contato com você.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Seu Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <input
                        type="hidden"
                        name="company_id"
                        value={formData.company_id}
                    />

                    {optionalFields.map((field) => (
                        <div key={field}>
                            <label
                                htmlFor={field}
                                className="block text-sm font-medium text-gray-700"
                            >
                                {fieldLabels[field] ||
                                    field
                                        .replace(/_/g, " ")
                                        .replace(/^./, (str) =>
                                            str.toUpperCase()
                                        )}
                            </label>
                            <input
                                type={field === "birthdate" ? "date" : "text"}
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors[field] && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors[field]}
                                </p>
                            )}
                        </div>
                    ))}

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="lg:text-2xl text-lg font-bold text-white bg-fortalorange px-10 py-4 rounded-full flex items-center justify-center hover:bg-white hover:text-fortalorange hover:border-fortalorange transition-colors duration-300"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactFields;
