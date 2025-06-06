import { FaRegSun } from "react-icons/fa6"
import { MdPhone, MdWork } from "react-icons/md"
import { TitleItem } from "./TitleItem"

export const LinkMap = () => {


    return (
        <div className="flex gap-12">
            <div className="">
                <TitleItem href="https://fortalezameetings.com.br/servicos" title="Serviços" icon={<MdWork className="text-xl" />} />
                <ul role="list" className="mt-6 space-y-4">
                    <li>
                        <a href="/planejador-de-eventos" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Planeje seu evento</a>
                    </li>
                    <li>
                        <a href="/associados" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Associados</a>
                    </li>
                    {/* <li>
                        <a href="#" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Suporte</a>
                    </li> */}
                </ul>
            </div>
            <div className="">
                <TitleItem href="https://fortalezameetings.com.br/contato" title="Contato" icon={<MdPhone className="text-xl" />} />
                <ul role="list" className="mt-6 space-y-4">
                    <li>
                        <a href="https://www.instagram.com/conventionfortaleza/" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/fortalezaconvention" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Facebook</a>
                    </li>
                    <li>
                        <a href="https://br.linkedin.com/company/fortaleza-convention-&-visitors-bureau" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Linkedin</a>
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