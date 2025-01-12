import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SpaceList from './List';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-[24px] text-[#0C9C95] leading-tight">Meus Espaços</h2>}
        >
            <Head title="Leads" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden  sm:rounded-lg p-10">
                        <SpaceList />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
