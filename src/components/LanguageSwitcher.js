// src/components/LanguageSwitcher.js

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, switchLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      {currentLanguage === 'fr' ? (
        <button onClick={() => switchLanguage('en')} aria-label="Switch to English">
          {/* Drapeau de l'Angleterre */}
          <svg
            width="30"
            height="20"
            viewBox="0 0 3 2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="3" height="2" fill="#FFF" />
            <rect x="1.2" width="0.6" height="2" fill="#C8102E" />
            <rect y="0.7" width="3" height="0.6" fill="#C8102E" />
          </svg>
        </button>
      ) : (
        <button onClick={() => switchLanguage('fr')} aria-label="Passer en français">
          {/* Drapeau français */}
          <svg
            width="30"
            height="20"
            viewBox="0 0 3 2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1" height="2" fill="#0055A4" />
            <rect x="1" width="1" height="2" fill="#FFF" />
            <rect x="2" width="1" height="2" fill="#EF4135" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
