// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translations } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Titre du portfolio avec traduction */}
        <h1 className="text-xl md:text-2xl font-bold">{translations.portfolioTitle}</h1>

        {/* Bouton du Burger Menu (visible uniquement sur mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation visible sur les écrans moyens et plus larges */}
        <nav className="hidden md:flex flex-grow justify-center space-x-6 items-center">
          <Link
            to="/"
            className="text-sm md:text-base hover:text-indigo-400 transition duration-300"
          >
            {translations.home}
          </Link>
          <Link
            to="/about"
            className="text-sm md:text-base hover:text-indigo-400 transition duration-300"
          >
            {translations.about}
          </Link>
          <Link
            to="/contact"
            className="text-sm md:text-base hover:text-indigo-400 transition duration-300"
          >
            {translations.contact}
          </Link>
        </nav>

        {/* Alignement à droite pour le bouton de changement de langue (uniquement pour desktop) */}
        <div className="ml-auto hidden md:block">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Menu déroulant pour mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              to="/"
              className="text-sm hover:text-indigo-400 transition duration-300 px-4"
              onClick={toggleMenu} // Ferme le menu au clic
            >
              {translations.home}
            </Link>
            <Link
              to="/about"
              className="text-sm hover:text-indigo-400 transition duration-300 px-4"
              onClick={toggleMenu}
            >
              {translations.about}
            </Link>
            <Link
              to="/contact"
              className="text-sm hover:text-indigo-400 transition duration-300 px-4"
              onClick={toggleMenu}
            >
              {translations.contact}
            </Link>

            {/* Changement de langue dans le menu burger */}
            <div className="px-4">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
