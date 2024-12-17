import ResultSearch from '@/Components/SearchResults/ResultSearch/ResultSearch';
import { Head } from '@inertiajs/react';

export default function SearchResults() {
    return (
        <>
            <Head title="Search Results" />
            
            <ResultSearch />
        </>
    );
}