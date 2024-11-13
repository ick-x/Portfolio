import React from "react";
import { useLanguage } from "../context/LanguageContext";

const AboutMe = () => {
  const { translations } = useLanguage();

  return (
    <main className="p-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        {translations.aboutMe}
      </h2>
      <h3 className="text-3xl font-bold mb-5">
        {translations.greeting} {translations.firstname}{" "}
        {translations.lastname}
      </h3>
      <p className="text-md max-w-screen-lg mx-auto mb-10">
        {translations.intro}
      </p>
      <p className="text-md max-w-screen-lg mx-auto mb-10">
        {translations.objectif}
      </p>
      <p className="text-md max-w-screen-lg mx-auto mb-10">
        {translations.workMethod}
      </p>
      <p className="text-md max-w-screen-lg mx-auto mb-10">
        {translations.conclusion}
      </p>
    </main>
  );
};

export default AboutMe;
