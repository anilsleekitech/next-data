// src/components/FAQ/faqData.js

const faqData = {
  home: [
    {
      question: "How do you maintain the accuracy of AI-generated translations?",
      answer: "We combine neural machine translation with quality technology. Our in-house patent AI is highly secure and learns from industry-specific glossaries...",
    },
    {
      question: "Can you handle industrial terms?",
      answer: "Yes, we train our translation engine on datasets that are specific to multiple niches...",
    },
    {
      question: "Do you integrate with third-party platforms?",
      answer: "Of course. Devnagri has APIs and SDKs that work perfectly with CMS platforms, mobile apps...",
    },
    {
      question: "How do you keep client information private and safe?",
      answer: "We are VAPT certified and encrypt all customer data while it is being sent...",
    },
    {
      question: "Do you provide support post-deployment?",
      answer: "We provide dedicated customer success managers, ongoing language updates...",
    },
  ],

  documentTranslation: [
    {
      question: "How are duplicate words handled?",
      answer: "We use translation memory to avoid rework and ensure consistency."
    },
    {
      question: "Will I receive real-time updates?",
      answer: "Yes, you get live status tracking and notifications."
    },
    {
      question: "I have marketing brochures. Will your system also retain the formatting of regional versions?",
      answer: "Yes, we provide format-preserved regional outputs (DTP-ready)."
    },
    {
      question: "How can I share my feedback in case of wrong translations?",
      answer: "You can flag content directly or comment via the review dashboard."
    },
    {
      question: "Do you maintain the Glossary?",
      answer: "Yes, we build and manage glossaries per project or domain."
    }
  ],

  dotaWeb: [
    {
      question: "What if we want to make changes in the content?",
      answer: "You can update anytime, translations adjust automatically."
    },
    {
      question: "What is the cost and pricing model associated with this?",
      answer: "Based on volume, language pairs, and features."
    },
    {
      question: "Will my Documents/PDF/Banners, etc., also be translated along with my website?",
      answer: "Yes, all digital assets can be localized."
    },
    {
      question: "How does your solution help in SEO?",
      answer: "We deliver SEO-optimized translations, support hreflang tags, and enable indexed multilingual URLs."
    },
    {
      question: "Do you maintain a Glossary for my brand?",
      answer: "Absolutely. We create and maintain a custom glossary to ensure brand consistency across all translations."
    },
    {
      question: "What happens to translated content post expiry of my plan?",
      answer: "Your content will remain live, but updates and new translations will be paused until the plan is renewed."
    }
  ],

  dotaApp: [
    {
      question: "Do I need developers to use this?",
      answer: "No. You only need to integrate the SDK. The rest is fully automated."
    },
    {
      question: "What types of apps does it support?",
      answer: "DOTA works with Android, iOS, and hybrid apps. If your app runs on a mobile platform, DOTA fits in."
    },
    {
      question: "Which languages are supported?",
      answer: "We support all major Indian languages including Hindi, Marathi, Gujarati, Bengali, Tamil, Telugu, and many more, along with global languages like French, Arabic, Russian, and Spanish."
    },
    {
      question: "Will it take care of any banners within my app?",
      answer: "Yes, DOTA App supports translation of in-app banners and visuals, provided the text is extractable."
    },
    {
      question: "How will new content be taken care of?",
      answer: "New content is automatically detected and translated via our integrated workflow or CMS connection."
    },
    {
      question: "Suppose I add new content to my mobile app, then I have to re-release my app on the App Store?",
      answer: "No, with DOTA App, text updates are managed externally, so there's no need to re-release the app for content changes."
    }
  ],

  machineTranslationApi: [
    {
      question: "What process do you follow?",
      answer: "Content is securely submitted via API. Our system understands context, applies domain-trained translation, and delivers accurate, real-time output, ready to use at scale."
    },
    {
      question: "Is this solution safe for official or regulated content?",
      answer: "Yes. It's purpose-built for government, financial, and legal use cases, with complete data security protocols."
    },
    {
      question: "How do you handle data safety?",
      answer: "All data is encrypted during transfer and at rest. We follow industry-grade standards for data security and compliance."
    },
    {
      question: "Can the API manage large-scale content?",
      answer: "Absolutely. Our infrastructure handles millions of words in a single cycle without compromising performance or quality."
    },
    {
      question: "How accurate are the translations for all regional languages?",
      answer: "95% translation accuracy across all supported Indian and International languages, maintaining context, tone, and domain-specific terminology."
    }
  ],

  machineTransliterationApi: [
      {
      question: "What languages and scripts do you support?",
      answer: "We support more than 20 Indian languages such as Hindi, Tamil, Telugu, Marathi, and others. We also support more than 20 international characters such as Latin, Cyrillic, Arabic, and Chinese."
    },
    {
      question: "How secure is the API?",
      answer: "We use the best encryption and compliance standards in the business. All data is safe both when it is being sent and when it is not being used. This makes it safe for use in banking, law, and government."
    },
    {
      question: "Can the API handle complex terminology like legal and financial content?",
      answer: "Yes, the API has been trained on domain-specific datasets so that it can accurately handle complicated, high-context information."
    },
    {
      question: "How easy is integration?",
      answer: "The API is easy for developers to use and comes with a lot of information. A consistent RESTful method makes it easy to connect to most platforms."
    },
    {
      question: "What is the processing capacity?",
      answer: "Our infrastructure supports high-volume workloads. The API can process millions of words daily with low latency."
    }
  ], 

  chatbots: [
    {
      question: "Can we have API integration and CTA in this bot?",
      answer: "Yes, our chatbot supports API integration and custom CTAs for seamless user actions."
    },
    {
      question: "What is the lag/latency?",
      answer: "Average response time is under 1 second, ensuring real-time interaction."
    },
    {
      question: "Will it support a mix of two languages?",
      answer: "Yes, the bot can understand and respond to mixed-language inputs (Hinglish, etc.)."
    },
    {
      question: "What do you need from me to train your bot for my organization?",
      answer: "We’ll need your FAQs, workflows, intents, and any brand-specific terminology."
    },
    {
      question: "Can we have a multilingual keyboard?",
      answer: "Yes, multilingual keyboard support is available for typing in various Indian languages."
    },
    {
      question: "How much time does it take to get Bot ready?",
      answer: "Typically, the bot is ready in 7–10 working days, including training and testing."
    }
  ],

  voicebot: [
    {
      question: "Can it understand when a user changes language mid-sentence?",
      answer: "Yes. The AI Agent detects and adapts to language shifts instantly, without needing a restart."
    },
    {
      question: "How do I train it for my business vocabulary?",
      answer: "You can upload sample phrases or industry terminology. Our system learns and fine-tunes quickly."
    },
    {
      question: "How many journeys can it handle?",
      answer: "The Voice Agent can handle multiple conversation journeys, customized per use case (e.g., KYC, feedback, reminders)."
    },
    {
      question: "Do we have a barge-in feature?",
      answer: "Yes, the Voice Agent supports barge-in, allowing users to interrupt and guide the conversation naturally."
    },
    {
      question: "Can we change the tone of the bot to make it sound more real?",
      answer: "Yes, you can customize the tone, pitch, and delivery to match your brand personality."
    }
  ],

  ocr: [
    {
      question: "What file formats do we support?",
      answer: "Supported file formats: PNG, JPG, JPEG, Scanned PDF, TIF, TIFF, BMP"
    },
    {
      question: "How accurate is the extraction of content?",
      answer: "Up to 98% accuracy for printed and clean documents."
    },
    {
      question: "Do we have a human layer involved at any step?",
      answer: "Yes, on-demand human review is applied during QA for critical content and compliance."
    },
    {
      question: "How long will it take for the complete process, i.e., Extraction + Translation?",
      answer: "Usually within 10–30 minutes, depending on document size and language complexity."
    },
    {
      question: "How does the pricing model work?",
      answer: "Pricing is based on page count, language pair, and required turnaround time, and custom plans are available."
    },
    {
      question: "Do you retain the original look and feel of the source document?",
      answer: "Yes, we provide layout-preserved outputs with translated content in the same format."
    }
  ]
};

export default faqData;