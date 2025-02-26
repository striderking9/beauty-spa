import "./globals.css";
import { ReactNode } from "react";
import NavBar from "./components/NavBar";
import Head from "next/head";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="fr">
      <Head>
        <title>Centre de Beauté & Bien-être</title>
        <meta name="description" content="Découvrez nos prestations bien-être et réservez votre séance." />
      </Head>
      <body className="bg-gray-100 text-gray-800">
        <NavBar />
        <main className="min-h-screen pt-20">{children}</main>
        <footer className="bg-gray-900 text-white py-10 text-center">
          <p>&copy; 2025 Centre de Beauté & Bien-être - Tous droits réservés</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
