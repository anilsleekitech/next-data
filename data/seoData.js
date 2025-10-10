// SEO Data for all pages
export const seoData = {
  home: {
    title: "Devnagri - India's 1st AI-Powered Translation Engine For Indian Languages",
    description: "Devnagri, India's #1 AI-powered translation engine, helps brands to localize their content 5x faster and more accurately.",
    keywords: "Devnagri, AI translation, Indian languages, localization, multilingual, translation engine",
  },
  
  about: {
    title: "About - Devnagri",
    description: "Learn about Devnagri, India's leading AI-powered translation platform, and our mission to break language barriers for businesses.",
    keywords: "About Devnagri, company mission, AI translation platform, language barriers",
  },
  
  contact: {
    title: "Contact | Devnagri",
    description: "Get in touch with Devnagri for AI-powered translation solutions. Contact our experts for multilingual localization services.",
    keywords: "Contact Devnagri, translation services, multilingual support, AI translation contact",
  },
  
  documentTranslation: {
    title: "Document Translation - Devnagri",
    description: "Document translation is very necessary for doing business globally. Translate your documents word to word according to your requirements.",
    keywords: "Document Translation, business documents, multilingual documents, AI document translation",
  },
  
  dotaWeb: {
    title: "Website Translation - DOTA Web | Devnagri",
    description: "Transform your website into a multilingual platform with DOTA Web. Real-time translation for better user experience.",
    keywords: "website translation, DOTA Web, multilingual website, real-time translation",
  },
  
  dotaApp: {
    title: "App Localization - DOTA App | Devnagri",
    description: "Localize your mobile applications with DOTA App SDK. Easy integration for multilingual mobile experiences.",
    keywords: "app localization, DOTA App, mobile app translation, SDK integration",
  },
  
  machineTranslationApi: {
    title: "Translation API - Devnagri",
    description: "Powerful Translation API for developers. Integrate AI-powered translation into your applications with ease.",
    keywords: "Translation API, developer API, machine translation, AI API integration",
  },
  
  machineTransliterationApi: {
    title: "Transliteration API - Devnagri",
    description: "Convert text between scripts with our Transliteration API. Support for multiple Indian language scripts.",
    keywords: "Transliteration API, script conversion, Indian languages, text conversion API",
  },
  
  chatbots: {
    title: "Multilingual Chatbots - Devnagri",
    description: "Build intelligent multilingual chatbots with Devnagri's AI. Enhance customer support across languages.",
    keywords: "multilingual chatbots, AI chatbots, customer support, conversational AI",
  },
  
  voicebot: {
    title: "Voice Bot - Devnagri",
    description: "AI-powered voice bots for multilingual customer interactions. Scale your voice support globally.",
    keywords: "voice bot, AI voice assistant, multilingual voice support, conversational AI",
  },
  
  ocr: {
    title: "OCR Solutions - Devnagri",
    description: "Extract and translate text from images with our advanced OCR technology. Support for multiple document formats.",
    keywords: "OCR, optical character recognition, text extraction, document digitization",
  },
  
  industry: {
    title: "Industries - Devnagri",
    description: "Discover how Devnagri serves various industries with AI-powered translation and localization solutions.",
    keywords: "industries, sector solutions, enterprise translation, business localization",
  },
  
  bankingFinance: {
    title: "Banking & Finance Translation - Devnagri",
    description: "Specialized translation solutions for banking and finance sector. Ensure compliance and accuracy.",
    keywords: "banking translation, finance translation, financial documents, compliance translation",
  },
  
  ecommerce: {
    title: "E-commerce Translation - Devnagri",
    description: "Expand your e-commerce business globally with multilingual product catalogs and customer support.",
    keywords: "ecommerce translation, online retail, product localization, multilingual ecommerce",
  },
  
  government: {
    title: "Government Translation - Devnagri",
    description: "Secure and accurate translation solutions for government agencies and public sector organizations.",
    keywords: "government translation, public sector, official documents, secure translation",
  },
  
  d2c: {
    title: "D2C Translation - Devnagri",
    description: "Direct-to-consumer brands can expand globally with our specialized translation and localization services.",
    keywords: "D2C translation, direct to consumer, brand localization, global expansion",
  },
  
  careers: {
    title: "Careers - Devnagri",
    description: "Join the Devnagri team and help build the future of AI-powered translation technology.",
    keywords: "careers, jobs, devnagri jobs, AI translation careers, tech jobs",
  },
  
  resources: {
    title: "Resources - Devnagri",
    description: "Explore our collection of resources, case studies, and insights on AI translation and localization.",
    keywords: "resources, case studies, translation insights, localization guides",
  },
  
  bookDemo: {
    title: "Book a Demo - Devnagri",
    description: "Schedule a personalized demo of Devnagri's AI translation platform. See how we can help your business.",
    keywords: "book demo, schedule demo, product demo, translation demo",
  },
  
  privacyPolicy: {
    title: "Privacy Policy - Devnagri",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
    keywords: "privacy policy, data protection, personal information, GDPR compliance",
  },
  
  termsConditions: {
    title: "Terms and Conditions - Devnagri",
    description: "Terms and conditions for using Devnagri's AI translation platform and services.",
    keywords: "terms and conditions, terms of service, legal terms, service agreement",
  },
  
  refundPolicy: {
    title: "Refund Policy - Devnagri",
    description: "Our refund and cancellation policy for Devnagri translation services and subscriptions.",
    keywords: "refund policy, cancellation policy, money back guarantee, service refund",
  }
};

// Function to get SEO data by page key
export const getSEOData = (pageKey) => {
  return seoData[pageKey] || seoData.home;
};

// Function to get SEO data for translation pages
export const getTranslationPageSEO = (fromLang, toLang, type = 'translation') => {
  const fromLanguage = fromLang.charAt(0).toUpperCase() + fromLang.slice(1);
  const toLanguage = toLang.charAt(0).toUpperCase() + toLang.slice(1);
  const actionType = type === 'translation' ? 'Translation' : 'Transliteration';
  
  return {
    title: `${fromLanguage} to ${toLanguage} ${actionType} - Devnagri`,
    description: `Accurate ${fromLanguage} to ${toLanguage} ${type.toLowerCase()} powered by AI. Fast, reliable, and contextually aware language conversion.`,
    keywords: `${fromLang} to ${toLang}, ${fromLanguage} ${toLanguage} ${type.toLowerCase()}, AI ${type.toLowerCase()}, language conversion`,
  };
};
