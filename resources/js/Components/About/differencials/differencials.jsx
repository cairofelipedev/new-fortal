import style from './differencials.module.scss'

export default function Differencials() {
    return (
        <section className={style.container}>

            <svg className={style.verticalLine} width="2" height="2263" viewBox="0 0 2 2263" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0L0.999901 2263" stroke="#E8DCC6" stroke-width="2" stroke-dasharray="8 8" />
            </svg>
            {/* 1 */}
            <div className={style.areaText}>
                <h1 className="font-neulis text-5xl font-regular">
                    Infraestrutura<b className="font-black text-[#0C9C95]"> Moderna</b>
                </h1>
                <p className="text-xl pb-5">
                    Fortaleza possui uma infraestrutura de eventos bem desenvolvida, com centros de convenções de <b className="text-black font-black">classe mundial</b>, como o Centro de Eventos do Ceará, que é um dos maiores do Brasil. Além de outros espaços em hotéis, restaurantes e centros culturais
                </p>
            </div>
            <div>
                <img className="rounded-xl m-10" src="./images/differencials/2.jpg" alt="Imagem Diferencial" />
            </div>
            <div>
                <img className="rounded-xl object-cover" src="./images/differencials/5.jpg" alt="Imagem Diferencial" />
            </div>

            <div className={`${style.cardInfo} ${style.another}`}>
                <div className={style.areaText}>
                    <h2>Conectividade</h2>
                    <p>A cidade conta com o Aeroporto Internacional Pinto Martins que facilita o acesso de participantes de diversas partes do Brasil e do mundo. O Aeroporto conta com a ligação direta para cerca de XX destinos nacionais e se conecta com seis internacionais, são eles: Lisboa, Paris, Miami, Orlando, Buenos Aires e Santiago. Além de contar com o HUB Gol Airfrance.</p>
                </div>
            </div>

            {/* 3 */}
            <div className={`${style.cardInfo}`}>
                <div className={style.areaText}>
                    <h2>Variedade de Acomodações</h2>
                    <p>Fortaleza oferece uma ampla gama de opções de hospedagem, desde hotéis de luxo até pousadas aconchegantes. Isso garante que os participantes do evento tenham acesso a acomodações que atendem a diferentes orçamentos e preferências</p>
                </div>
            </div>

            <div className={`${style.areaImage}`}>
                <img src="./images/differencials/1.jpg" alt="Imagem Diferencial" />
            </div>

            {/* 4 */}
            <div className={`${style.areaImage} ${style.another}`}>
                <img src="./images/differencials/4.jpg" alt="Imagem Diferencial" />
            </div>

            <div className={`${style.cardInfo} ${style.another}`}>
                <div className={style.areaText}>
                    <h2>Vantagens Competitivas</h2>
                    <p>Os participantes podem aproveitar momentos de lazer antes e após os eventos, explorando as belezas naturais da região, como a Beira Mar, uma das mais bonitas e estruturadas do Brasil, com mais de 100 atividades esportivas e de entretenimento, além da Praia do Futuro e o Parque do Cocó.</p>
                </div>
            </div>

            {/* 5 */}
            <div className={`${style.cardInfo}`}>
                <div className={style.areaText}>
                    <h2>Hospitalidade Cearense</h2>
                    <p>O povo cearense é famoso por sua hospitalidade e acolhimento. Essa característica torna a experiência dos participantes ainda mais agradável, criando um ambiente propício para networking e troca de experiências.</p>
                </div>
            </div>

            <div className={`${style.areaImage}`}>
                <img src="./images/differencials/3.jpg" alt="Imagem Diferencial" />
            </div>

            {/* 6 */}
            <div className={`${style.areaImage} ${style.another}`}>
                <img src="https://images.unsplash.com/photo-1596247851352-5b908d61c6fc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Diferencial" />
            </div>

            <div className={`${style.cardInfo} ${style.another}`}>
                <div className={style.areaText}>
                    <h2>Atividades de Lazer e Teambuilding</h2>
                    <p>Fortaleza oferece uma variedade de atividades de lazer que podem ser integradas aos eventos, como passeio pela orla, esportes aquáticos, bikes, grupos de corrida e experiências gastronômicas. Essas atividades são ótimas para promover o teambuilding, que tem por objetivo fortalecer relacionamentos entre os participantes de uma mesma equipe.</p>
                </div>
            </div>
        </section>
    )
}