import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import style from './FormRd.module.scss';

const ContactForm = ({ optionalFields = [], companyId, isOpen, onClose, query }) => {
    // Adiciona company_id ao estado do formulário, mas preserva os campos em optionalFields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        id_company: companyId || "", // Mantém o company_id no estado
        ...optionalFields.reduce((acc, field) => ({ ...acc, [field]: "" }), {}),
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/api/rd/contacts", formData);

            Swal.fire({
                icon: "success",
                title: "Sucesso!",
                text: "Contato enviado com sucesso.",
            });

            // Utilizando os parâmetros de consulta para redirecionamento
            if (query && query.type && query.capacity && query.total_event_area && query.total_rentable_event_rooms) {
                window.location.href = `/resultado-buscar-evento/search?type=${query.type}&capacity=${query.capacity}&total_event_area=${query.total_event_area}&total_rentable_event_rooms=${query.total_rentable_event_rooms}`;
            } else {
                window.location.reload(); // Atualiza a página
            }

            // Limpa os campos após o envio
            setFormData({
                name: "",
                email: "",
                company_id: companyId || "", // Preserva o valor de company_id
                ...optionalFields.reduce((acc, field) => ({ ...acc, [field]: "" }), {}),
            });
        } catch (error) {
            if (error.response && error.response.status === 422) {
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

    if (!isOpen) return null;

    const fieldLabels = {
        mobile_phone: "WhatsApp Business",
        bio: "Nome da Empresa",
        // Adicione mais campos personalizados aqui, conforme necessário
    };

    return (
        <section className={style.containerContent}>
            <div className={style.areaModal}>
                <button className={style.closeButton} onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </button>

                <h1 className={style.title}>Quero <b>Reservar!</b></h1>
                <p className={style.description}>Preencha o formulário abaixo, e a equipe responsável pelo local entrará em contato com você a respeito da sua solicitação!</p>
                <form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.areaInput}>
                        <label htmlFor="name">Seu Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                    </div>

                    <div className={style.areaInput}>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                    </div>

                    {/* Campo oculto para company_id */}
                    <input type="hidden" name="company_id" value={formData.company_id} />

                    {optionalFields.map((field) => (
                        <div className={style.areaInput} key={field}>
                            <label htmlFor={field}>
                                {fieldLabels[field] || field.replace(/_/g, " ").charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            <input
                                type={field === "birthdate" ? "date" : "text"}
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                            />
                            {errors[field] && <p style={{ color: "red" }}>{errors[field]}</p>}
                        </div>
                    ))}

                    <button className={style.buttonSubmit} type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
