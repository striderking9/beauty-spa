"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Votre message a été envoyé !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Contact - Beauté & Bien-être</title>
        <meta name="description" content="Contactez-nous pour toute information ou réservation." />
      </Head>

      <main className="min-h-screen text-gray-800 pt-20">
        {/* Section avec Background Image */}
        <section
          className="py-20 text-center relative bg-cover bg-center min-h-[50vh] flex items-center justify-center"
          style={{ backgroundImage: "url('/images/contact-bg.jpg')" }} // Assure-toi que l’image est bien dans /public/images/
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Contenu */}
          <div className="relative z-10 max-w-4xl mx-auto text-white px-6">
            <h1 className="text-4xl font-bold mb-6 text-pink-400">Nous Contacter</h1>
            <p className="text-lg mb-10">Besoin d’un renseignement ? Envoyez-nous un message.</p>
          </div>
        </section>

        {/* Formulaire de Contact */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Nom</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-lg shadow-md hover:bg-pink-600 transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </section>

        {/* Carte Google Maps ou Image de localisation */}
        <section className="py-16 bg-white text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Notre Localisation</h2>
          <div className="max-w-4xl mx-auto">
            {/* Utilise une vraie carte Google Maps en intégrant un iframe */}
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.935881281286!2d-122.08424968469282!3d37.421999879825814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b5b5b5b5b5%3A0x5e9a5b5b5b5b5b5b!2sGoogleplex!5e0!3m2!1sfr!2sfr!4v1611753952824!5m2!1sfr!2sfr"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
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
