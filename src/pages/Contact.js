import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  // On récupère les traductions depuis le contexte
  const { translations } = useLanguage();

  // Déclaration de l'état pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    message: ''
  });

  // Gestion de l'état pour afficher ou non les messages d'erreur et de succès
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  
  // Gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Valider le formulaire avant de soumettre
  const validateForm = () => {
    const newErrors = [];
    
    // Vérifier chaque champ et ajouter un message d'erreur si vide
    for (let key in formData) {
      if (!formData[key]) {
        newErrors.push(translations[key + "Error"]);
      }
    }

    setErrors(newErrors);
    return newErrors.length === 0; // Retourne vrai si aucune erreur
  };

  // Gérer l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false); // Réinitialise le message de succès

    // Si la validation échoue, on n'envoie pas le formulaire
    if (!validateForm()) return;

    // Logique pour envoyer le formulaire (peut inclure une API ou une autre action)
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">{translations.contactTitle}</h2>

      {/* Message d'erreur */}
      {errors.length > 0 && (
        <div className="bg-red-200 text-red-800 text-center p-4 mb-6 rounded-lg">
          {translations.errorMessage}
          <ul className="mt-2">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Message de succès après soumission */}
      {isSubmitted && (
        <div className="bg-green-200 text-green-800 text-center p-4 mb-6 rounded-lg">
          {translations.messageSent}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{translations.lastNameLabel}</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={translations.lastNamePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{translations.firstNameLabel}</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={translations.firstNamePlaceholder}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">{translations.emailLabel}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder={translations.emailPlaceholder}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">{translations.messageLabel}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder={translations.messagePlaceholder}
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full md:w-auto bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-200"
          >
            {translations.submitButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
