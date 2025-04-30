import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { FiMenu } from 'react-icons/fi';
import { FaTimesCircle, FaRegSun, FaBuilding, FaCalendarAlt, FaUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";


import style from './Navbar.module.scss'

export default function NavBar({ scrollEffect = false }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (scrollEffect) {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 0);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [scrollEffect]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={`fixed w-full transition-colors duration-300 ${isMenuOpen ? 'bg-white' : scrollEffect ? (isScrolled ? 'bg-white' : 'bg-transparent') : 'bg-white'} z-20`}>
                {/* <div className="h-4 bg-gradient-to-r from-[#F57C29] to-[#FFCC00]"></div> */}

                <div className={`${style.internalNav} max-w-7xl`}>
                    <a href="/">
                        <img src="/images/logo.jpg" alt="Logo" className={`${style.logo} ${scrollEffect ? (isScrolled ? 'bg-transparent' : 'bg-white') : 'bg-white'}`} />
                    </a>

                    {/* Desktop Menu */}
                    <div className="flex gap-10 uppercase text-gray-500">
                        <div className={`${style.listLink}`}>
                            <Link href="/" className={`tracking-widest ${style.linkHoverUnderline}`}>Home</Link>
                            <div className={`${style.linkNav} ${style.linkNavDropDown}`}>
                                <p className={style.link}>Eventos</p>
                                <div className={`${style.capulseDrop}`}>
                                    <div className={style.dropDown}>
                                        <a href='/planejador-de-eventos' className={style.columnDrop}>
                                            <div className={style.iconArea}>
                                                <FaBuilding className="text-xl" />
                                            </div>
                                            <div className={style.textArea}>
                                                <h2>Planejador de Eventos</h2>
                                            </div>
                                        </a>
                                        <a href={`/espaco-para-eventos`} className={style.columnDrop}>
                                            <div className={style.iconArea}>
                                                <FaBuilding className="text-xl" />
                                            </div>
                                            <div className={style.textArea}>
                                                <h2>Espaços para eventos</h2>
                                            </div>
                                        </a>
                                        <a href='/servicos' className={style.columnDrop}>
                                            <div className={style.iconArea}>
                                                <FaRegSun className="text-xl" />
                                            </div>
                                            <div className={style.textArea}>
                                                <h2>Serviços</h2>
                                                {/* <p>Entenda nosso diferencial</p> */}
                                            </div>
                                        </a>
                                        <a href='/organizadoras' className={style.columnDrop}>
                                            <div className={style.iconArea}>
                                                <FaRegSun className="text-xl" />
                                            </div>
                                            <div className={style.textArea}>
                                                <h2>Organizadoras</h2>
                                                {/* <p>Entenda nosso diferencial</p> */}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Link href="/imprensa" className={`tracking-widest ${style.linkHoverUnderline}`}>Imprensa</Link>
                            <div className={`${style.linkNav} ${style.linkNavDropDown}`}>
                                <p className={style.link}>Sobre Fortaleza</p>
                                <div className={`${style.capulseDrop}`}>
                                    <div className={style.dropDown}>
                                        <a href='/quem-somos' className={style.columnDrop}>
                                            <div className={style.iconArea}>
                                                <FaRegSun className="text-xl" />
                                            </div>
                                            <div className={style.textArea}>
                                                <h2>Quem Somos</h2>
                                            </div>
                                        </a>
                                        <a href={`/associe-se`} className={style.columnDrop}>
                                            <div className={style.iconArea}>
                                                <FaBuilding className="text-xl" />
                                            </div>
                                            <div className={style.textArea}>
                                                <h2>Associa-se</h2>
                                            </div>
                                        </a>
                                        <a href={`/porque-fortaleza`} className={style.columnDrop}>
                                            <div className={style.iconArea}>
                                                <FaBuilding className="text-xl" />
                                            </div>
                                            <div className={style.textArea}>
                                                <h2>Porque Fortaleza</h2>
                                            </div>
                                        </a>
                                        <a href={`/contato`} className={style.columnDrop}>
                                            <div className={style.iconArea}>
                                                <FaBuilding className="text-xl" />
                                            </div>
                                            <div className={style.textArea}>
                                                <h2>Fale Conosco</h2>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call To Action */}
                        <div className="flex items-center space-x-[8px]">
                            <div className="lg:flex hidden space-x-4">
                                <a href="https://www.facebook.com/fortalezaconvention" target="_blank" rel="noopener noreferrer"
                                    className="text-gray-500 bg-[#F9F9F9] hover:bg-gray-300 duration-300 w-10 h-10 flex items-center justify-center rounded-full">
                                    <FaFacebookF className="text-lg" />
                                </a>
                                <a href="https://www.instagram.com/conventionfortaleza/" target="_blank" rel="noopener noreferrer"
                                    className="text-gray-500 bg-[#F9F9F9] hover:bg-gray-300 duration-300 w-10 h-10 flex items-center justify-center rounded-full">
                                    <FaInstagram className="text-lg" />
                                </a>
                                <a href="https://br.linkedin.com/company/fortaleza-convention-&-visitors-bureau" target="_blank" rel="noopener noreferrer"
                                    className="text-gray-500 bg-[#F9F9F9] hover:bg-gray-300 duration-300 w-10 h-10 flex items-center justify-center rounded-full">
                                    <FaLinkedinIn className="text-lg" />
                                </a>
                            </div>
                            <Link href="https://visiteceara.com">
                                <div className="flex space-x-2">
                                    <div className={`${style.buttonVisite} text-white items-center lg:flex flex font-criteria hidden lg:block text-[13px] h-max box-border bg-[#0C9C95] rounded-full border border-transparent hover:bg-orange-600 hover:border-orange-800 hover:text-white duration-[.3s]`}>
                                        Visite Ceará
                                        <div className={`${style.iconArea}`}>
                                            <FaArrowRightLong className="text-lg text-[#0C9C95]" />
                                        </div>
                                    </div>
                                    <button className={style.menuButton} onClick={toggleMenu}>
                                        {isMenuOpen ? <FaTimesCircle className="text-2xl" /> : <FiMenu className="text-2xl" />}
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`font-versus-medium ${isMenuOpen ? 'block' : 'hidden'} bg-white`}>
                    <div className={style.areaLinksMobile}>
                        <Link className={style.linkMobile} href="/">
                            <div className={style.areaIcon}>
                                <RiHome2Fill className="text-xl" />
                            </div>
                            <h1>Home</h1>
                        </Link>
                        <Link className={style.linkMobile} href="/planejador-de-eventos">
                            <div className={style.areaIcon}>
                                <FaCalendarAlt className="text-xl" />
                            </div>
                            <h1>Planeje seu Evento</h1>
                        </Link>
                        <Link className={style.linkMobile} href="/associados">
                            <div className={style.areaIcon}>
                                <FaHandsHelping className="text-xl" />
                            </div>
                            <h1>Associados</h1>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
