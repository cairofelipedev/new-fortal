import style from './bannerDestak.module.scss'

export default function BannerDestak() {
    return (
        <section className="px-10 pt-10">
            <div className={`${style.infoArea} gap-10 space-y-5 text-center`}>
                <div>
                    <h1 className="font-neulis text-7xl font-regular">
                        Calendário de <b className="font-black text-[#0C9C95]">Eventos</b>
                    </h1>
                    <p className="text-3xl pb-5">
                        Aqui, você encontrará os <b className="text-black font-black">melhores eventos</b>
                    </p>
                </div>
            </div>
        </section>
    )
}