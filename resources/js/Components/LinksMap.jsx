import { FaRegSun } from "react-icons/fa6"
import { MdPhone, MdWork } from "react-icons/md"
import { TitleItem } from "./TitleItem"

export const LinkMap = () => {


    return (
        <div className="lg:flex md:gap-12 gap-4">
            <div className="">
                <TitleItem title="Serviços" icon={<MdWork className="text-xl" />}/>
                <ul role="list" className="mt-6 space-y-4">
                    <li>
                        <a href="/planejador-de-eventos" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Planeje seu evento</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Associados</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Suporte</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <TitleItem title="Contato" icon={<MdPhone className="text-xl" />}/>
                <ul role="list" className="mt-6 space-y-4">
                    {/* <li>
                                                        <a href="/login" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Área dos associados</a>
                                                    </li> */}
                    <li>
                        <a href="#" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Instagram</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">WhatsApp</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Linkedin</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <TitleItem title="Visite Ceará" icon={<FaRegSun className="text-xl" />}/>
                <ul role="list" className="mt-6 space-y-4">
                    {/* <li>
                                                        <a href="/login" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Área dos associados</a>
                                                    </li> */}
                    <li>
                        <a href="#" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Site</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Youtube</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm leading-6 text-[#905d36] hover:text-teal-900 transition-colors ease-in-out">Email</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}