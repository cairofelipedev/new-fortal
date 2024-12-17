import style from './bannerDestak.module.scss'

export default function BannerDestak() {
    return (
        <section className={style.container}>
            <a href="/planejador-de-eventos">
                <img className={style.bannerDesk} src="./images/bannerDestak.png" alt="Banner destaque" />
                <img className={style.bannerMobile} src="./images/bannerDestakMobile.png" alt="Banner destaque" />
            </a>
        </section>
    )
}