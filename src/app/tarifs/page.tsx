"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const tarifs = [
  { service: "Massage Relaxant", prix: "50€", description: "Détente absolue avec huiles essentielles." },
  { service: "Soin du Visage", prix: "60€", description: "Hydratation et éclat du teint." },
  { service: "Manucure & Pédicure", prix: "40€", description: "Soin complet des mains et pieds." },
  { service: "Épilation", prix: "30€", description: "Épilation douce et longue durée." },
  { service: "Spa & Hammam", prix: "70€", description: "Expérience relaxante avec soins complets." },
  { service: "Coiffure", prix: "20€", description: "Expérience relaxante avec soins complets." },
];

export default function Tarifs() {
  return (
    <>
      <Head>
        <title>Nos Tarifs - Beauté & Bien-être</title>
        <meta name="description" content="Découvrez nos tarifs pour nos soins et prestations bien-être." />
      </Head>

      <main className="min-h-screen text-gray-800 pt-20">
        {/* Section avec Background Image */}
        <section 
          className="py-20 text-center relative bg-cover bg-center min-h-[50vh] flex items-center justify-center"
          style={{ backgroundImage: "url('/images/prestation-bg.jpg')" }} // Assure-toi d’avoir l’image dans /public/images/
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Contenu */}
          <div className="relative z-10 max-w-4xl mx-auto text-white px-6">
            <h1 className="text-4xl font-bold mb-6 text-pink-400">Nos Tarifs</h1>
            <p className="text-lg mb-10">Découvrez nos prestations et leurs prix.</p>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-16 bg-gray-100 text-center">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {tarifs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }} // Correction ici !
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition text-center"
              >
                <h3 className="text-2xl font-semibold text-gray-900">{item.service}</h3>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-2xl font-bold text-pink-500 mt-2">{item.prix}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bouton de réservation */}
        <div className="text-center py-16">
          <Link href="/reservation">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition">
              Prendre un rendez-vous
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
