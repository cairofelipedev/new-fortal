import React, { useState } from 'react';
import EventSpace from "@/Components/EventSpace/EventSpace";
import { Head } from "@inertiajs/react";
import NavBar from '@/Components/Home/NavBar/Navbar';
import SearchSpace from '@/Components/Space/searchSpace/searchSpace';
import Footer from '@/Components/Footer';

export default function Product() {
    const [eventName, setEventName] = useState('');
    return (
        <main className="white">
            <Head title={eventName ? eventName : 'Espaço para evento'} />
            <NavBar />

            {/* <SearchSpace /> */}

            <EventSpace  setEventName={setEventName}/>
            
            <Footer />
        </main>
    );
}
