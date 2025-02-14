import { FaRegSun } from "react-icons/fa6";
import { MdPhone, MdWork } from "react-icons/md";
import { SocialMedia } from "./SocialMedia";
import { LinkMap } from "./LinksMap";

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
                        {/* <div class="xl:grid xl:grid-cols-5 xl:gap-8 mt-16  gap-8 xl:mt-0"> */}
                        <div class="flex justify-center md:justify-between items-center flex-col md:flex-row w-full gap-8">
                            <div class="flex flex-row md:flex-col items-center  gap-8">
                                <img class="h-18" src="https://fortalezameetings.com.br/images/logoFooter.png" alt="Company name" />
                                <p class="text-sm leading-6 text-[#fff] max-w-[250px] min-w-36 text-black">O <span className="font-bold text-[#ea580c]">destino</span> perfeito para o evento <span className="font-bold text-[#0C9C95]">perfeito</span>!</p>
                                <SocialMedia/>
                            </div>
                            <LinkMap/>
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