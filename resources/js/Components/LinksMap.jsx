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
                        <a href="https://www.google.com/maps/place/Fortaleza+Convention+%26+Visitors+Bureau%2F+Visite+Cear%C3%A1/@-3.7646075,-38.4837558,17z/data=!4m7!3m6!1s0x7c748827f4d9519:0xc0c9ef2b97430388!8m2!3d-3.7646386!4d-38.4811741!15sCmpBdi4gV2FzaGluZ3RvbiBTb2FyZXMgOTk5LiBQYXZpbGjDo28gTGVzdGUgLSBQb3J0w6NvIEUgLSAywrogYW5kYXIgLSBTYWxhIGRvIFZpc2l0ZSBDZWFyw6EgLSBFZHNvbiBRdWVpcm96kgENcGFydHlfcGxhbm5lcqoB9gEKCC9tLzAzYzc5CgkvbS8wMWhkbGYKCS9tLzA0d2pxdxABKksiR3BhdmlsaMOjbyBsZXN0ZSBwb3J0w6NvIGUgMsK6IGFuZGFyIHNhbGEgZG8gdmlzaXRlIGNlYXLDoSBlZHNvbiBxdWVpcm96KAwyHxABIhsP2AeNmJjsPLCp8beGL1T-fRYdRUrsnp_piJYyZBACImBhdiB3YXNoaW5ndG9uIHNvYXJlcyA5OTkgcGF2aWxow6NvIGxlc3RlIHBvcnTDo28gZSAywrogYW5kYXIgc2FsYSBkbyB2aXNpdGUgY2VhcsOhIGVkc29uIHF1ZWlyb3rgAQA!16s%2Fg%2F11c1s3h5qq?entry=tts&g_ep=EgoyMDI1MDYyMi4wIPu8ASoASAFQAw%3D%3D&skid=ba116bfc-b420-4892-ad3d-f1d0c840f246" target="_blank"
                        >
                            <span>Av. Washington Soares 999. Pavilhão Leste - Portão E - 2º andar - Sala do Visite Ceará - Edson Queiroz</span>
                        </a>
                    </li>
                    <li className="flex items-center gap-2">
                        <MdPhone className="text-lg" />
                        <span><a href="tel:+55 85 3258-5888"> +55 85 3258-5888</a></span>
                    </li>
                    <li className="flex items-center gap-2">
                        <MdEmail className="text-lg" />
                        <span><a href="mailto:captacao@visiteceara.com">captacao@visiteceara.com</a></span>
                    </li>
                    <li className="flex items-center gap-2">
                        <MdLanguage className="text-lg" />
                        <span><a href="https://visiteceara.com" target="_blank">visiteceara.com.br</a></span>
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