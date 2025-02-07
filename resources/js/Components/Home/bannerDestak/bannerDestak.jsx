import style from './bannerDestak.module.scss'

export default function BannerDestak() {
    return (

        <div className={`${style.container} lg:grid lg:grid-cols-2 gap-10 space-y-5 items-center`}>
            <div>
                <h1 className="font-neulis py-3 lg:text-6xl text-4xl">Planeje seu <b>enveto</b> <br></br> em Fortaleza</h1>
                <p className='text-justify lg:text-3xl text-2xl pb-5'>Os melhores eventos, festivais e atividades estão aqui</p>
                <div className="lg:justify-start flex justify-center">
                    <a className="bg-[#0C9C95] rounded-full py-2 px-4 text-white" href="/planejador-de-eventos">
                        Planejador de Eventos
                    </a>
                </div>
            </div>
            <img className="rounded-lg" src="./images/news/5_Easy-Resize.com.jpg" alt="Images FLutuantes" />
        </div>
    )
}