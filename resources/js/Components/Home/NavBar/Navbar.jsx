import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { FiMenu } from 'react-icons/fi';
import { FaTimesCircle } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";

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
            <nav className={`w-full transition-colors duration-300 ${isMenuOpen ? 'bg-white' : scrollEffect ? (isScrolled ? 'bg-white' : 'bg-transparent') : 'bg-white'} z-20`}>
                <div className="h-4 bg-gradient-to-r from-[#F57C29] to-[#FFCC00]"></div>

                <div className={style.internalNav}>
                    <a href="/">
                        <img src="/images/logo.jpg" alt="Logo" className={`${style.logo} ${scrollEffect ? (isScrolled ? 'bg-transparent' : 'bg-white') : 'bg-white'}`} />
                    </a>

                    {/* Desktop Menu */}
                    <div className={`${style.listLink}`}>
                        <Link href="#aproveite-fortaleza">
                            <FaRegSun className="text-xl" />
                            Aproveite Fortaleza
                        </Link>
                        <div className={`${style.linkNav} ${style.linkNavDropDown}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 0c-23.7 0-44.4 12.9-55.4 32L48 32C21.5 32 0 53.5 0 80L0 400c0 26.5 21.5 48 48 48l144 0 0-272c0-44.2 35.8-80 80-80l48 0 0-16c0-26.5-21.5-48-48-48l-56.6 0C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48l0 272 0 16c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-220.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L320 128l-48 0zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
                            <p className={style.link}>Planejadores de eventos</p>

                            <div className={`${style.capulseDrop}`}>
                                <div className={style.dropDown}>
                                    <a href='/porque-fortaleza' className={style.columnDrop}>
                                        <div className={style.iconArea}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                                        </div>
                                        <div className={style.textArea}>
                                            <h2>Porque Fortaleza</h2>
                                            <p>Entenda nosso diferencial</p>
                                        </div>
                                    </a>

                                    <a href={`/planejador-de-eventos`} className={style.columnDrop}>
                                        <div className={style.iconArea}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48l-96 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-96 0c-26.5 0-48-21.5-48-48L0 48zM80 224c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm80 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm112-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L80 96c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm80 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm384 80l0 16c0 44.2-35.8 80-80 80l-16 0 0-16c0-44.2 35.8-80 80-80l16 0zm0 128c0 44.2-35.8 80-80 80l-16 0 0-16c0-44.2 35.8-80 80-80l16 0 0 16zm0 112c0 44.2-35.8 80-80 80l-16 0 0-16c0-44.2 35.8-80 80-80l16 0 0 16zM512 496l0 16-16 0c-44.2 0-80-35.8-80-80l0-16 16 0c44.2 0 80 35.8 80 80zm0-96l-16 0c-44.2 0-80-35.8-80-80l0-16 16 0c44.2 0 80 35.8 80 80l0 16zm0-128l0 16-16 0c-44.2 0-80-35.8-80-80l0-16 16 0c44.2 0 80 35.8 80 80zM528 32c13.3 0 24 10.7 24 24l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-13.3 10.7-24 24-24zm96 64l0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24s24 10.7 24 24zM456 72c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24z" /></svg>
                                        </div>
                                        <div className={style.textArea}>
                                            <h2>Epaços para eventos</h2>
                                            <p>O ideal pro seu evento</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Link href="/calendario-eventos">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" /></svg>
                            Calendário de eventos
                        </Link>
                        <Link href="/imprensa">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L80 480c-44.2 0-80-35.8-80-80L0 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 272c0 8.8 7.2 16 16 16s16-7.2 16-16L96 96zm64 24l0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L184 96c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16z" /></svg>
                            Imprensa
                        </Link>
                        {/* <Link href="">
                            Institucional
                        </Link> */}

                    </div>



                    {/* Call To Action */}
                    <div className="flex items-center space-x-[8px]">
                        {/* <Link href="/login" className="lg:flex flex font-criteria hidden lg:block text-[13px] text-white h-max box-border py-[10px] px-[20px] rounded-full bg-[#ea580c]  hover:bg-[#f86e23] hover:text-white duration-[.3s]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <g clip-path="url(#clip0_207_678)">
                                    <path d="M8.50002 7.79167C10.0648 7.79167 11.3334 6.52314 11.3334 4.95833C11.3334 3.39353 10.0648 2.125 8.50002 2.125C6.93521 2.125 5.66669 3.39353 5.66669 4.95833C5.66669 6.52314 6.93521 7.79167 8.50002 7.79167Z" stroke="white" stroke-width="1.0303" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.25 14.875V13.4583C4.25 12.7069 4.54851 11.9862 5.07986 11.4549C5.61122 10.9235 6.33189 10.625 7.08333 10.625H9.91667C10.6681 10.625 11.3888 10.9235 11.9201 11.4549C12.4515 11.9862 12.75 12.7069 12.75 13.4583V14.875" stroke="white" stroke-width="1.0303" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_207_678">
                                        <rect width="17" height="17" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Associados
                        </Link> */}
                        <Link href="https://visiteceara.com">
                            <div className="flex space-x-2">
                                <div className={`${style.buttonVisite} text-white items-center lg:flex flex font-criteria hidden lg:block text-[13px] h-max box-border  bg-[#0C9C95] rounded-full border border-transparent hover:bg-orange-600 hover:border-orange-800 hover:text-white duration-[.3s]`}>
                                    Visite Ceará
                                    <div className={`${style.iconArea}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                            <path d="M9.79018 6.52949C10.0692 6.23652 10.0692 5.76074 9.79018 5.46777L6.21875 1.71777C5.93973 1.4248 5.48661 1.4248 5.20759 1.71777C4.92857 2.01074 4.92857 2.48652 5.20759 2.77949L7.5625 5.2498H0.714286C0.319196 5.2498 0 5.58496 0 5.9998C0 6.41465 0.319196 6.7498 0.714286 6.7498H7.56027L5.20982 9.22012C4.9308 9.51309 4.9308 9.98887 5.20982 10.2818C5.48884 10.5748 5.94196 10.5748 6.22098 10.2818L9.79241 6.53184L9.79018 6.52949Z" fill="#0C9C95" />
                                        </svg>
                                    </div>
                                </div>
                                <button className={style.menuButton} onClick={toggleMenu}>
                                    {isMenuOpen ? <FaTimesCircle className=" text-2xl" /> : <FiMenu className=" text-2xl" />}
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={` font-versus-medium ${isMenuOpen ? 'block' : 'hidden'} bg-white`}>
                    <div className={style.areaLinksMobile}>
                        <Link className={style.linkMobile} href="/">
                            <div className={style.areaIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                            </div>
                            <h1>Home</h1>
                        </Link>
                        <Link className={style.linkMobile} href="/porque-fortaleza?">
                            <div className={style.areaIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                            </div>
                            <h1>Porque Fortaleza?</h1>

                        </Link>
                        <Link className={style.linkMobile} href="/planejador-de-eventos">
                            <div className={style.areaIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 0c-23.7 0-44.4 12.9-55.4 32L48 32C21.5 32 0 53.5 0 80L0 400c0 26.5 21.5 48 48 48l144 0 0-272c0-44.2 35.8-80 80-80l48 0 0-16c0-26.5-21.5-48-48-48l-56.6 0C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48l0 272 0 16c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-220.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L320 128l-48 0zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
                            </div>
                            <h1>Planejador de Eventos</h1>

                        </Link>
                        <Link className={style.linkMobile} href="/calendario-eventos">
                            <div className={style.areaIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" /></svg>
                            </div>
                            <h1>Calendário de Eventos</h1>
                        </Link>
                        {/* <Link class="flex items-center space-x-2" href="/login">
                            <h1 className="text-xl">Área do Associado</h1>
                            <FiExternalLink className="lg:ml-2" />
                        </Link> */}
                    </div>
                </div>
            </nav>
        </>
    );
}
