"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Head>
        <title>À Propos - Beauté & Bien-être</title>
        <meta name="description" content="Découvrez notre centre de beauté et bien-être." />
      </Head>

      <main className="min-h-screen text-gray-800 pt-20">
        {/* Section Hero avec Background Image */}
        <section className="py-20 text-center relative bg-cover bg-center min-h-[50vh] flex items-center justify-center"
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-white px-6">
            <h1 className="text-4xl font-bold mb-6 text-pink-400">À Propos de Nous</h1>
            <p className="text-lg mb-10">Offrez-vous un moment de détente et de bien-être dans un cadre chaleureux.</p>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16 bg-white text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Notre Histoire</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
                Depuis plusieurs années, notre centre de beauté et bien-être s&apos;engage à offrir des prestations de qualité 
                pour le bien-être de nos clients. Notre équipe passionnée met tout en œuvre pour vous offrir une expérience 
                unique de relaxation et de soin.
            </p>
          </motion.div>
        </section>



        {/* Section Vidéo */}
        <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Découvrez notre Spa en vidéo</h2>
        <div className="max-w-4xl mx-auto">
            <iframe
            className="w-full h-64 md:h-96 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/VIDÉO_ID" // Remplace VIDÉO_ID par l'ID de la vidéo YouTube
            title="Vidéo de Présentation"
            allowFullScreen
            ></iframe>
        </div>
        </section>

        {/* Notre Équipe */}
        <section className="py-16 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Notre Équipe</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Fatou D.", role: "Experte en soins du visage", image: "/images/team-2.jpg" },
              { name: "Awa K.", role: "Spécialiste massage bien-être", image: "/images/team-2.jpg" },
              { name: "Iness B.", role: "Prothésiste ongulaire", image: "/images/team-2.jpg" }
            ].map((member, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={300} 
                  height={300} 
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-16 bg-white text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Nos Valeurs</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Qualité", description: "Nous mettons un point d'honneur à vous offrir des prestations haut de gamme." },
              { title: "Bienveillance", description: "Un accueil chaleureux et un suivi personnalisé pour chaque client." },
              { title: "Innovation", description: "Nous utilisons les meilleures techniques et produits pour vos soins." }
            ].map((value, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-pink-500">&quot;{value.title}&quot;</h3>
                <p className="text-gray-600">&quot;{value.description}&quot;</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Témoignages Clients */}
        <section className="py-16 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Ce que disent nos clients</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Oumou L.", review: "Un moment magique ! Le massage était divin." },
              { name: "Bintou M.", review: "Excellente expérience, détente assurée." },
              { name: "Nadia B.", review: "J'ai adoré la manucure, je reviendrai." },
              { name: "Hawa S.", review: "J'ai adoré la journée avec le salon." }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <p className="italic text-gray-700">&quot;{testimonial.review}&quot;</p>
                <h4 className="font-bold mt-4">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Contact */}
        <section className="py-16 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Envie de nous rendre visite ?</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
            Venez nous rencontrer et profiter de nos soins dans un cadre apaisant.
          </p>
          <Link href="/contact">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition">
              Nous contacter
            </button>
          </Link>
        </section>

        {/* Footer */}
        <div className="text-center py-16">
          <Link href="/">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-900 transition">
              Retour à l'accueil
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
