"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const formules = [
  { nom: "Formule Duo", description: "Soin capillaire, pédicure/manucure, massage" },
  { nom: "Formule Lafia", description: "Pédicure/manucure, soin du visage, massage" },
  { nom: "Formule Sewa", description: "Pédicure/manucure, soin de visage et corps, massage" },
  { nom: "Formule Evasion", description: "Pédicure/manucure, Head spa, soin de visage et corps, massage" },
];

export default function Formules() {
  return (
    <>
      <Head>
        <title>Nos Formules - Beauté & Bien-être</title>
        <meta name="description" content="Découvrez nos formules bien-être adaptées à vos besoins." />
      </Head>

      <main className="min-h-screen text-gray-800 pt-20">
        {/* Section avec Background Image */}
        <section 
          className="py-20 text-center relative bg-cover bg-center min-h-[50vh] flex items-center justify-center"
          style={{ backgroundImage: "url('/images/formules-bg.jpg')" }} // Assure-toi que l’image est bien dans /public/images/
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Contenu */}
          <div className="relative z-10 max-w-4xl mx-auto text-white px-6">
            <h1 className="text-4xl font-bold mb-6 text-pink-400">Nos Formules</h1>
            <p className="text-lg mb-10">Des soins complets pour une relaxation absolue.</p>
          </div>
        </section>

        {/* Liste des Formules */}
        <section className="py-16 bg-gray-100 text-center">
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
            {formules.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition text-center"
              >
                <h3 className="text-2xl font-semibold text-gray-900">{item.nom}</h3>
                <p className="text-gray-700">{item.description}</p>
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
