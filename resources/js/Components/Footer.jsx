import { FaRegSun } from "react-icons/fa6";
import { MdPhone, MdWork } from "react-icons/md";

export default function Footer() {
    return (
        <>
            <div
                className="h-10 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/retangle-footer.png')" }}
            >
            </div>
            <footer class="" aria-labelledby="footer-heading">
                <h2 id="footer-heading" class="sr-only">Footer</h2>
                <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                    <div class="">
                        <div class="xl:grid xl:grid-cols-5 xl:gap-8 mt-16  gap-8 xl:mt-0">
                            <div class="space-y-8">
                                <img class="h-18" src="https://fortalezameetings.com.br/images/logoFooter.png" alt="Company name" />
                                <p class="text-sm leading-6 text-[#fff] max-w-[250px] text-black">O destino perfeito para o evento perfeito!</p>
                                <div class="flex space-x-6">
                                    <a href="#" class="flex justify-center items-center text-[#f97316] w-[30px] h-[30px] bg-[#fff] rounded-full hover:text-gray-500">
                                        <span class="sr-only">Facebook</span>
                                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/conventionfortaleza/" class="flex justify-center items-center text-[#f97316] w-[30px] h-[30px] bg-[#fff] rounded-full hover:text-gray-500">
                                        <span class="sr-only">Instagram</span>
                                        <svg class="h-6 w-6 fill-[#f97316]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                    </a>
                                    <a href="https://www.youtube.com/c/VisiteCear%C3%A1" class="flex justify-center items-center text-[#f97316] w-[30px] h-[30px] bg-[#fff] rounded-full hover:text-gray-500">
                                        <span class="sr-only">YouTube</span>
                                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 class="flex gap-[8px] fill-[#ff5b00] text-sm font-semibold leading-6 text-[#83400e]">
                                    <FaRegSun className="text-xl" />
                                    Fortaleza Meetings
                                </h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    <li>
                                        <a href="/porque-fortaleza" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Porque Fortaleza?</a>
                                    </li>
                                    <li>
                                        <a href="/calendario-eventos" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Calendário de eventos</a>
                                    </li>
                                    <li>
                                        <a href="/imprensa" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Imprensa</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-10 md:mt-0">
                                <h3 class="flex gap-[8px] fill-[#ff5b00]  text-sm font-semibold leading-6 text-[#83400e]">
                                    <MdWork className="text-xl" />
                                    Serviços
                                </h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    <li>
                                        <a href="/planejador-de-eventos" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Planeje seu evento</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Associados</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Suporte</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-10 md:mt-0">
                                <h3 class="flex gap-[8px] fill-[#ff5b00]  text-sm font-semibold leading-6 text-[#83400e]">
                                    <MdPhone className="text-xl" />
                                    Contato
                                </h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    {/* <li>
                                            <a href="/login" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Área dos associados</a>
                                        </li> */}
                                    <li>
                                        <a href="#" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">WhatsApp</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Linkedin</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-10 md:mt-0">
                                <h3 class="flex gap-[8px] fill-[#ff5b00]  text-sm font-semibold leading-6 text-[#83400e]">
                                    <FaRegSun className="text-xl" />
                                    Visite Ceará
                                </h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    {/* <li>
                                            <a href="/login" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Área dos associados</a>
                                        </li> */}
                                    <li>
                                        <a href="#" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Site</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Youtube</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-sm leading-6 text-[#905d36] hover:text-gray-900">Email</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-10 border-t border-gray-900/10 pt-8 sm:mt-10 lg:mt-10">
                        <p class="text-xs leading-5 text-[#6b3610]">&copy; 2024 Fortaleza Meetings, Todos os Direitos Reservados.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}