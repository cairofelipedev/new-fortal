import { FaRegSun } from "react-icons/fa6"
import { MdPhone, MdWork } from "react-icons/md"
import { TitleItem } from "./TitleItem"
import { MdEmail, MdLocationOn, MdLanguage, MdAccessTime } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

export const LinkMap = () => {


    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="">
                <TitleItem href="https://fortalezameetings.com.br/servicos" title="Quem somos" icon={<FaUsers className="text-xl" />} />
                <ul role="list" className="mt-6 space-y-4">
                    <p className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">
                        Somos uma fundação independente, sem fins lucrativos, mantida pela iniciativa privada.

                        Nossa missão é promover e divulgar o Estado do Ceará, trazendo congressos, convenções e eventos em geral, nacionais e internacionais, gerando um aumento de divisas para o país.
                    </p>
                </ul>
            </div>
            <div className="">
                <TitleItem href="https://fortalezameetings.com.br/servicos" title="Serviços" icon={<MdWork className="text-xl" />} />
                <ul role="list" className="mt-6 space-y-4">
                    <li>
                        <a href="/planejador-de-eventos" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Planeje seu evento</a>
                    </li>
                    <li>
                        <a href="/espaco-para-eventos" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Espaços para eventos</a>
                    </li>
                    <li>
                        <a href="/servicos" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Nossos Associados</a>
                    </li>
                    <li>
                        <a href="/organizadoras" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Organizadoras</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <TitleItem href="https://fortalezameetings.com.br/contato" title="Contato" icon={<MdPhone className="text-xl" />} />
                <ul role="list" className="mt-6 space-y-4 text-[#905d36] text-sm leading-6">
                    <li className="flex items-center gap-2">
                        <span>Av. Washington Soares 999. Pavilhão Leste - Portão E - 2º andar - Sala do Visite Ceará - Edson Queiroz</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <MdPhone className="text-lg" />
                        <span>+55 85 3258-5888</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <MdEmail className="text-lg" />
                        <span>captacao@visiteceara.com</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <MdLanguage className="text-lg" />
                        <span>visiteceara.com.br</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <MdAccessTime className="text-lg" />
                        <span>Seg. - Sex. 8h30 às - 17h30</span>
                    </li>
                </ul>
            </div>
            <div className="">
                <TitleItem href="https://visiteceara.com" title="Visite Ceará" icon={<FaRegSun className="text-xl" />} />
                <ul role="list" className="mt-6 space-y-4">
                    <li>
                        <a href="www.visiteceara.com" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Site</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/c/VisiteCear%C3%A1" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Youtube</a>
                    </li>
                    <li>
                        <a href="mailto: eventos@visiteceara.com" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Email</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}