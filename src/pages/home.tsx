import { Group } from "@/components/_ui/Group";
import { Decks } from "@/components/_ui/Decks";
import { SearchDecks } from "@/components/_ui/SearchDecks";
import logo from "/img/Ricardinho.png";


import React from 'react';
import Header from '@/components/_ui/HomePage/Header';
import Footer from '@/components/_ui/HomePage/Footer';
import CarouselDecks from "@/components/_ui/HomePage/Caroussel/CarousselDecks";

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <main className="p-4">
      <CarouselDecks />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;