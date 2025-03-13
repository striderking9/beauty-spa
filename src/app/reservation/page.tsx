"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Votre réservation a été envoyée avec succès pour ${formData.service} le ${formData.date}`);
    setFormData({ name: "", phone: "", email: "", service: "", date: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Réservation - Beauté & Bien-être</title>
        <meta name="description" content="Réservez votre moment de bien-être avec nous." />
      </Head>

      <main className="min-h-screen text-gray-800 pt-20">
        {/* Section Hero */}
        <section 
          className="py-20 text-center relative bg-cover bg-center min-h-[50vh] flex items-center justify-center"
          style={{ backgroundImage: "url('/images/reservation-bg.jpg')" }} 
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-white px-6">
            <h1 className="text-4xl font-bold mb-6 text-pink-400">Réservez Votre Séance</h1>
            <p className="text-lg mb-10">Planifiez un moment de détente en toute simplicité.</p>
          </div>
        </section>

        {/* Formulaire de Réservation */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Réservez dès maintenant</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nom */}
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

              {/* Téléphone */}
              <div>
                <label className="block text-gray-700 font-medium">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{11}" // Accepte uniquement un numéro à 11 chiffres
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Ex: 22378000000</p>
              </div>

              {/* Email */}
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

              {/* Sélection du Service */}
              <div>
                <label className="block text-gray-700 font-medium">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="Massage Relaxant">Massage Relaxant</option>
                  <option value="Soin du Visage">Soin du Visage</option>
                  <option value="Manucure & Pédicure">Manucure & Pédicure</option>
                  <option value="Épilation">Épilation</option>
                  <option value="Spa & Hammam">Spa & Hammam</option>
                </select>
              </div>

              {/* Sélection de la Date */}
              <div>
                <label className="block text-gray-700 font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium">Message (optionnel)</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>

              {/* Bouton de Soumission */}
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-lg shadow-md hover:bg-pink-600 transition"
              >
                Confirmer la Réservation
              </button>
            </form>
          </div>
        </section>

        {/* Section Contact */}
        <section className="py-16 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Besoin d&apos;aide ? Contactez-nous !</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4">
            Vous pouvez nous joindre par téléphone :
          </p>
          <p className="text-xl font-bold text-pink-500">📞 +223 90 90 90 90</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-2">
            Ou par WhatsApp :
          </p>
          <p className="text-xl font-bold text-pink-500">📞 +33 6 12 34 56 78</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-2">
            Ou prenez rendez-vous en ligne en toute simplicité.
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition">
              Nous contacter
            </button>
          </Link>
        </section>

        {/* Retour à l'accueil */}
        <div className="text-center py-16">
          <Link href="/">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-900 transition">
              Retour à l&apos;accueil
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
