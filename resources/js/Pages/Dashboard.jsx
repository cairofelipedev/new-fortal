import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import style from '../../css/dashboard.module.scss'
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-[24px] text-[#0C9C95] leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            
            <div class={`${style.gridInfos}`}>

                <div class={`${style.article} bg-white rounded-[20px] shadow-lg text-gray-700`}>
                    <div className={style.areaTitle}>
                        <h2 class="text-lg font-bold text-teal-500">ESPAÇOS</h2>
                    
                        <div className={style.buttonArea}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                        </div>
                    </div>
                    <div className={style.areaInfo}>
                        <p className={style.infoLabel}>
                            <span class="font-semibold">Leads Totais</span> 
                            <b>110 leads</b>
                        </p>
                        <p className={style.infoLabel}>
                            <span class="font-semibold">Visualizações</span> 
                            <b>10.000 views</b>
                        </p>
                        <p className={style.infoLabel}>
                            <span class="font-semibold">Espaços cadastrados</span> 
                            <b>45 espaços</b>
                        </p>
                        <p className={style.infoLabel}>
                            <span class="font-semibold">Espaços impulsionados</span> 
                            <b>2 espaços</b>
                        </p>
                    </div>
                    <button class={`${style.button} bg-teal-500 text-white w-full py-2 hover:bg-teal-600 transition`}>
                        Acessar
                    </button>
                </div>

                <div class={`${style.article} bg-white rounded-[20px] shadow-lg text-gray-700`}>
                    <div className={style.areaTitle}>
                        <h2 class="text-lg font-bold text-teal-500">LEADS</h2>
                    
                        <div className={style.buttonArea}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                        </div>
                    </div>
                    <div className={style.areaInfo}>
                        <p className={style.infoLabel}>
                            <span class="font-semibold">Leads Totais</span> 
                            <b>110 leads</b>
                        </p>
                        <p className={style.infoLabel}>
                            <span class="font-semibold">Visualizações</span> 
                            <b>10.000 views</b>
                        </p>
                        <p className={style.infoLabel}>
                            <span class="font-semibold">Espaços cadastrados</span> 
                            <b>45 espaços</b>
                        </p>
                        <p className={style.infoLabel}>
                            <span class="font-semibold">Espaços impulsionados</span> 
                            <b>2 espaços</b>
                        </p>
                    </div>
                    <button class={`${style.button} bg-teal-500 text-white w-full py-2 hover:bg-teal-600 transition`}>
                        Acessar
                    </button>
                </div>

                <div class={`${style.article} bg-white rounded-[20px] shadow-lg text-gray-700`}>
                    <div className={style.areaTitle}>
                        <h2 class="text-lg font-bold text-teal-500">EVENTOS</h2>
                    
                        <div className={style.buttonArea}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                        </div>
                    </div>
                    <div className={style.areaInfo}>
                        <p className={style.infoLabel}>
                            <span class="font-semibold">Leads Totais</span> 
                            <b>110 leads</b>
                        </p>
                        <p className={style.infoLabel}>
                            <span class="font-semibold">Visualizações</span> 
                            <b>10.000 views</b>
                        </p>
                        <p className={style.infoLabel}>
                            <span class="font-semibold">Espaços cadastrados</span> 
                            <b>45 espaços</b>
                        </p>
                        <p className={style.infoLabel}>
                            <span class="font-semibold">Espaços impulsionados</span> 
                            <b>2 espaços</b>
                        </p>
                    </div>
                    <button class={`${style.button} bg-teal-500 text-white w-full py-2 hover:bg-teal-600 transition`}>
                        Acessar
                    </button>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
