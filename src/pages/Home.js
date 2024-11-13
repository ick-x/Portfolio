import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { translations } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2>Coucou</h2>
    </div>
  );
};

export default Home;
