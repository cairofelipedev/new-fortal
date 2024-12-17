import style from './bannerDestak.module.scss'

export default function BannerDestak() {
    return (
        <section className={style.container}>
            <img className={`${style.bannerDesk}`} src="./images/bannerDestakCalendar.png" alt="Banner destaque" />
            <img className={style.bannerMobile} src="./images/bannerDestakMobile.png" alt="Banner destaque" />
        </section>
    )
}