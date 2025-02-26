"use client"; // Ajoute ceci tout en haut

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icônes pour le menu burger

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold text-pink-500 cursor-pointer">
              Beauté & Bien-être
            </span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-pink-500">
              Accueil
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-500">
              À propos
            </Link>
            <Link href="/tarifs" className="text-gray-700 hover:text-pink-500">
              Prestations
            </Link>
            <Link href="/formules" className="text-gray-700 hover:text-pink-500">
              Formules
            </Link>
            <Link href="/reservation" className="text-gray-700 hover:text-pink-500">
              Réservation
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-500">
              Contact
            </Link>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full z-50">
          <div className="flex flex-col items-center space-y-4 py-6">
            <Link href="/" className="text-gray-700 hover:text-pink-500" onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-500" onClick={() => setIsOpen(false)}>
              À propos
            </Link>
            <Link href="/tarifs" className="text-gray-700 hover:text-pink-500" onClick={() => setIsOpen(false)}>
              Prestations
            </Link>
            <Link href="/formules" className="text-gray-700 hover:text-pink-500" onClick={() => setIsOpen(false)}>
              Formules
            </Link>
            <Link href="/reservation" className="text-gray-700 hover:text-pink-500" onClick={() => setIsOpen(false)}>
              Réservation
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-500" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
