import style from './FormArea.module.scss'

export default function FormArea() {
    return (
        <section className={style.container}>
            {/* info Area */}
            <div className={style.areaInfo}>
                <h2>Preencha o <b>formulário</b> <br />e faça parte de uma inspeção</h2>
                <p>Criamos identidades visuais, produtos e marcas com personalidade, impactando clientes, pessoas e negócios.</p>
                <div className={style.buttonArea}>
                    Preencha o formalário ao lado
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </div>
            </div>
            {/* form Area */}
            <div className={style.formArea}>
                <form action="">
                    <input type="text" placeholder='Nome'/>
                    <input type="text" placeholder='E-mail'/>
                    <input type="text" placeholder='Telefone'/>
                </form>
            </div>
        </section>
    )
}