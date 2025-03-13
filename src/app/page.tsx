"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Centre de Beauté &amp; Bien-être</title>
        <meta name="description" content="Offrez-vous un moment de détente et de bien-être." />
      </Head>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-cover bg-center relative">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/spa-bg.jpg"
            alt="Centre de Beauté &amp; Bien-être"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="relative z-10 text-center bg-white bg-opacity-70 p-10 rounded-lg shadow-lg"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenue au Centre de Beauté &amp; Bien-être
          </h1>
          <p className="text-lg md:text-xl">
            Offrez-vous un moment de détente et de bien-être.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link href="/reservation">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition">
                Prendre un rendez-vous
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Prestations */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Nos Prestations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Massage Relaxant", image: "/images/massage.jpg" },
            { title: "Soin du Visage", image: "/images/soin-visage.jpg" },
            { title: "Manucure &amp; Pédicure", image: "/images/manicure-pedicure.jpg" }
          ].map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: index * 0.2 }} 
              viewport={{ once: true }} 
              className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                width={400} 
                height={250} 
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/tarifs">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition">
              Voir nos tarifs
            </button>
          </Link>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Ce que disent nos clients</h2>
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
    </>
  );
}
