import axios from 'axios';

const API_KEY = 'devnagri_8c5d67a41e9a11f0bf4942010aa00fc7';
const API_URL = 'https://api.devnagri.com/machine-translation/v2/translate';

// Language codes mapping for API
export const languageCodes = {
    'hindi': 'hi',
    'punjabi': 'pa',
    'tamil': 'ta',
    'telugu': 'te',
    'kannada': 'kn',
    'bengali': 'bn',
    'gujarati': 'gu',
    'marathi': 'mr',
    'malayalam': 'ml',
    'assamese': 'as',
    'odia': 'or',
    'english': 'en'
};

export const translateText = async (text, fromLang = 'english', toLang = 'hindi') => {
    try {
        // Get language codes for source and target languages
        const sourceLangCode = languageCodes[fromLang] || 'en';
        const targetLangCode = languageCodes[toLang];

        // Create form data
        const formData = new FormData();
        formData.append('key', API_KEY);
        formData.append('sentence', text);
        formData.append('src_lang', sourceLangCode);
        formData.append('dest_lang', targetLangCode);

        // Make API call to Devnagri Translation API
        const response = await axios.post(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.data && response.data.translated_text) {
            return response.data.translated_text;
        }
        throw new Error('Translation failed');
    } catch (error) {
        console.error('Translation error:', error);
        throw error;
    }
};

export const languageOptions = [
    { value: 'hindi', display: 'Hindi (हिन्दी)' },
    { value: 'punjabi', display: 'Punjabi (ਪੰਜਾਬੀ)' },
    { value: 'tamil', display: 'Tamil (தமிழ்)' },
    { value: 'telugu', display: 'Telugu (తెలుగు)' },
    { value: 'kannada', display: 'Kannada (ಕನ್ನಡ)' },
    { value: 'bengali', display: 'Bengali (বাংলা)' },
    { value: 'gujarati', display: 'Gujarati (ગુજરાતી)' },
    { value: 'marathi', display: 'Marathi (मराठी)' },
    { value: 'malayalam', display: 'Malayalam (മലയാളം)' },
    { value: 'assamese', display: 'Assamese (অসমীয়া)' },
    { value: 'odia', display: 'Odia (ଓଡ଼ିଆ)' }
]; 