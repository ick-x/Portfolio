// src/context/LanguageContext.js

import React, { createContext, useContext, useState } from 'react';
import translations from '../i18n/translations.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const switchLanguage = (lang) => {
    if (lang === 'fr' || lang === 'en') {
      setCurrentLanguage(lang);
    }
  };

  const contextValue = {
    currentLanguage,
    switchLanguage,
    translations: translations[currentLanguage],
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
