import React, { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";
import style from './SpaceInformation.module.scss';
import ContactForm from "../Form/FormRd";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaMapMarkerAlt, FaCheck, FaArrowLeft, FaUmbrellaBeach } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdEventSeat } from "react-icons/md";

export default function EventSpaceDetails({ setEventName }) {
    const { props } = usePage();
    const { slug } = props;
    const [eventSpace, setEventSpace] = useState({ images: [] }); // <-- Inicialização segura
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const optionalFields = ["mobile_phone", "bio"];
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => setShowFullDescription(prev => !prev);

    const maxChars = 250; // limite antes de cortar

    const description = eventSpace.description || "";

    const shouldTruncate = description.length > maxChars;
    const displayedText = showFullDescription || !shouldTruncate
        ? description
        : description.substring(0, maxChars) + "...";


    useEffect(() => {
        const fetchEventSpace = async () => {
            try {
                const response = await axios.get(`/api/event-spaces/${slug}`);
                const data = response.data.data;
                setEventSpace({
                    ...data,
                    images: data.images || [], // <-- garante que seja array
                });
                setEventName(data.name);
            } catch (error) {
                console.error("Erro ao buscar os dados do espaço:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEventSpace();
    }, [slug]);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    if (loading) return <p>Carregando...</p>;
    if (!eventSpace) return <p>Espaço não encontrado.</p>;

    const arrowStyle = {
        background: "#f57c29",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: "1",
    };

    const CustomPrevArrow = ({ onClick }) => (
        <div className={style.arrow} onClick={onClick} style={{ ...arrowStyle, left: "10px" }}>
            <IoIosArrowBack color="white" size={16} />
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div className={style.arrow} onClick={onClick} style={{ ...arrowStyle, right: "10px" }}>
            <IoIosArrowForward color="white" size={16} />
        </div>
    );

    const hasImages = Array.isArray(eventSpace.images) && eventSpace.images.length > 0;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: hasImages && eventSpace.images.length > 1 ? 3 : 1,
        slidesToScroll: 1,
        arrows: hasImages && eventSpace.images.length > 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    const openImageModal = (image) => {
        setFullscreenImage(image);
        setZoomLevel(1);
    };

    const closeImageModal = () => {
        setFullscreenImage(null);
    };

    const zoomInImage = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3));
    const zoomOutImage = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));

    return (
        <>
            <section className="w-full px-4 md:px-16 py-8 lg:pt-32 pt-28">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <div className="lg:flex lg:justify-between justify-center">
                            <h1 className="lg:text-start text-center uppercase tracking-widest font-raleway font-black text-[#0C9C95] lg:text-3xl text-xl">{eventSpace.name}</h1>
                            <div className="flex justify-between">
                                <Link
                                    href="/espaco-para-eventos"
                                    className="block md:hidden bg-orange-500 text-white px-4 py-2 rounded-full shadow hover:bg-orange-600 transition flex items-center gap-2"
                                >
                                    <FaArrowLeft />
                                    Voltar
                                </Link>

                                <button
                                    onClick={handleOpenModal}
                                    className="bg-orange-500 text-white px-4 py-2 rounded-full shadow hover:bg-orange-600 transition flex items-center gap-2"
                                >
                                    Reservar
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                                        <path
                                            d="M9.79018 6.52949C10.0692 6.23652 10.0692 5.76074 9.79018 5.46777L6.21875 1.71777C5.93973 1.4248 5.48661 1.4248 5.20759 1.71777C4.92857 2.01074 4.92857 2.48652 5.20759 2.77949L7.5625 5.2498H0.714286C0.319196 5.2498 0 5.58496 0 5.9998C0 6.41465 0.319196 6.7498 0.714286 6.7498H7.56027L5.20982 9.22012C4.9308 9.51309 4.9308 9.98887 5.20982 10.2818C5.48884 10.5748 5.94196 10.5748 6.22098 10.2818L9.79241 6.53184L9.79018 6.52949Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-2 text-gray-700 text-center md:text-left">
                            {/* Localização */}
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <FaMapMarkerAlt className="text-orange-500" />
                                <span className="text-base">
                                    {eventSpace.city}, {eventSpace.address}
                                </span>
                            </div>

                            {/* Distância até o mar */}
                            {eventSpace.distance_to_sea && (
                                <div className="flex items-center justify-center md:ml-4 gap-2">
                                    <FaUmbrellaBeach className="text-orange-500" />
                                    <span className="text-base">{eventSpace.distance_to_sea}</span>
                                </div>
                            )}
                        </div>
                        <div className="w-full rounded-xl overflow-hidden shadow">
                            <img
                                src={`/uploads/${eventSpace.image}`}
                                alt={`Imagem de ${eventSpace.name}`}
                                className="w-full h-[300px] object-cover"
                            />
                        </div>
                        {hasImages && (
                            <div className="w-full">
                                <Slider {...settings}>
                                    {eventSpace.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={`/uploads/${image}`}
                                            alt={`Imagem ${index + 1}`}
                                            onClick={() => openImageModal(image)}
                                            className="h-40 object-cover mx-1 rounded px-1 rounded-xl cursor-zoom-in"
                                        />
                                    ))}
                                </Slider>
                            </div>
                        )}

                        {eventSpace.description && (
                            <div className="bg-white rounded-lg shadow p-4">
                                <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] text-xl mb-2">Descrição</h1>

                                <p className="text-gray-700 whitespace-pre-line">
                                    {showFullDescription || eventSpace.description.length <= maxChars
                                        ? eventSpace.description
                                        : eventSpace.description.substring(0, maxChars) + "..."}
                                </p>

                                {eventSpace.description.length > maxChars && (
                                    <button
                                        onClick={() => setShowFullDescription(prev => !prev)}
                                        className="lg:text-lg text-sm mt-2 text-orange-600 hover:underline"
                                    >
                                        {showFullDescription ? "Ver menos" : "Ver mais"}
                                    </button>
                                )}
                            </div>
                        )}

                        {eventSpace.floor_plan && (
                            <div className="flex justify-center mt-4">
                                <a
                                    href={`/uploads/${eventSpace.floor_plan}`}
                                    download
                                    className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full shadow hover:bg-orange-600 transition lg:text-lg text-sm max-w-max"
                                >
                                    <MdEventSeat className="mr-2" size={18} />
                                    Quadro de Salas
                                    <FiDownload className="ml-2" size={16} />
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        {(eventSpace.dining_facilities || eventSpace.other_facilities || eventSpace.services) && (
                            <div className="bg-white rounded-lg shadow p-4">
                                <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] text-xl mb-4">Serviços</h1>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    {[eventSpace.dining_facilities, eventSpace.other_facilities, eventSpace.services]
                                        .filter(Boolean)
                                        .join(",") // junta tudo
                                        .split(",") // separa cada item
                                        .map((item, index) => (
                                            <div key={index} className="flex items-start gap-2 text-gray-700 lg:text-lg text-sm">
                                                  <FaCheck className="text-green-600 mt-1 min-w-[16px]" size={16}  />
                                                <span>{item.trim()}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )}

                        {eventSpace.top_5_events && (
                            <div className="bg-white rounded-lg shadow p-4">
                                <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] text-xl mb-4">Top Eventos</h1>

                                <div className="">
                                    {eventSpace.top_5_events
                                        .split(",")
                                        .map((item, index) => (
                                            <div key={index} className="flex items-start gap-2 text-gray-700 lg:text-lg text-sm">
                                                  <FaCheck className="text-green-600 mt-1 min-w-[16px]" size={16}  />
                                                <span>{item.trim()}</span>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                        {eventSpace.direct_event_services && (
                            <div className="bg-white rounded-lg shadow p-4">
                                <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] text-xl mb-2">Serviços Diretos para Eventos</h1>
                                <p className="mb-4 lg:text-lg text-sm italic">Disponíveis para contratação diretamente com espaço.</p>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    {eventSpace.direct_event_services
                                        .split(",")
                                        .map((item, index) => (
                                            <div key={index} className="flex items-start gap-2 text-gray-700 lg:text-lg text-sm">
                                                  <FaCheck className="text-green-600 mt-1 min-w-[16px]" size={16}  />
                                                <span>{item.trim()}</span>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                        {eventSpace.other_rentable_spaces && (
                            <div className="bg-white rounded-lg shadow p-4">
                                <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] text-xl mb-4">Outros Espaços Disponíveis para Locação</h1>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    {eventSpace.other_rentable_spaces
                                        .split(",")
                                        .map((item, index) => (
                                            <div key={index} className="flex items-start gap-2 text-gray-700 lg:text-lg text-sm">
                                                  <FaCheck className="text-green-600 mt-1 min-w-[16px]" size={16}  />
                                                <span>{item.trim()}</span>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                        {eventSpace.accessible_type && (
                            <div className="bg-white rounded-lg shadow p-4">
                                <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] text-xl mb-4">Acessibilidade</h1>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    {eventSpace.accessible_type
                                        .split(",")
                                        .map((item, index) => (
                                            <div key={index} className="flex items-start gap-2 text-gray-700 lg:text-lg text-sm">
                                                  <FaCheck className="text-green-600 mt-1 min-w-[16px]" size={16}  />
                                                <span>{item.trim()}</span>
                                            </div>
                                        ))}
                                </div>

                                {eventSpace.accessibility_comments && (
                                    <p className="text-gray-700 lg:text-lg text-sm whitespace-pre-line">
                                        {eventSpace.accessibility_comments}
                                    </p>
                                )}
                            </div>
                        )}

                        {eventSpace.sustainable_practices && (
                            <div className="bg-white rounded-lg shadow p-4">
                                <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] text-xl mb-4">Práticas Sustentáveis</h1>

                                <div>
                                    {eventSpace.sustainable_practices
                                        .split(",")
                                        .map((item, index) => (
                                            <div key={index} className="flex items-start gap-2 text-gray-700 lg:text-lg text-sm">
                                                  <FaCheck className="text-green-600 mt-1 min-w-[16px]" size={16}  />
                                                <span>{item.trim()}</span>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                        {eventSpace.pet_friendly !== null && (
                            <div className="bg-white rounded-lg shadow p-4">
                                <h1 className="uppercase tracking-widest font-raleway font-black text-[#0C9C95] text-xl mb-4">Pet Friendly</h1>

                                <div className="text-gray-700 lg:text-lg text-sm flex items-start gap-2 mb-2">
                                      <FaCheck className="text-green-600 mt-1 min-w-[16px]" size={16}  />
                                    <span>
                                        {eventSpace.pet_friendly ? "Este espaço aceita animais de estimação." : "Este espaço não permite animais de estimação."}
                                    </span>
                                </div>

                                {eventSpace.pet_friendly && eventSpace.pet_friendly_policy && (
                                    <div className="text-gray-700 lg:text-lg text-sm flex items-start gap-2">
                                        <FaCheck className="text-green-600 mt-1 min-w-[16px]" size={16}  />
                                        <span><strong>Política:</strong> {eventSpace.pet_friendly_policy}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

            </section>

            <ContactForm
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                optionalFields={optionalFields}
                companyId={eventSpace.company_id}
            />

            {fullscreenImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={closeImageModal}
                >
                    <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={`/uploads/${fullscreenImage}`}
                            alt="Imagem ampliada"
                            className="transition-transform duration-300"
                            style={{
                                transform: `scale(${zoomLevel})`,
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                            }}
                        />

                        {/* Botão fechar */}
                        <button
                            onClick={closeImageModal}
                            className="absolute top-2 right-1 bg-white h-8 w-8 rounded-full"
                        >
                            ✕
                        </button>

                        {/* Controles de zoom */}
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white rounded-full shadow px-4 py-2 items-center">
                            <button onClick={zoomOutImage} className="text-xl font-bold px-2">−</button>
                            <span className="lg:text-lg text-sm text-gray-700">{Math.round(zoomLevel * 100)}%</span>
                            <button onClick={zoomInImage} className="text-xl font-bold px-2">+</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
