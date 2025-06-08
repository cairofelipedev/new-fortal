import Footer from '@/Components/Footer';
import NavBar from '@/Components/Home/NavBar/Navbar';
import NextEvents from '@/Components/CalendarEvents/nextEvents/nextEvents';
import { Head } from '@inertiajs/react';

export default function Welcome() {

  return (
    <>
      <Head title="Página Inicial" />

      <NavBar />


      <NextEvents />


      <Footer />
    </>
  );
}
