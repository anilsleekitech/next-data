import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { reinitializeSliders as reinitializePageSliders } from '../../utils/initScripts';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // List of routes that need a full page reload
    const routesNeedingReload = [
      '/english-to-hindi-translation',
      '/english-to-marathi-translation',
      '/english-to-tamil-translation',
      '/english-to-telugu-translation',
      '/english-to-kannada-translation',
      '/english-to-malayalam-translation',
      '/english-to-punjabi-translation',
      '/english-to-gujarati-translation',
      '/english-to-bengali-translation',
      '/english-to-odia-translation',
      '/english-to-assamese-translation',
      '/english-to-urdu-translation',
      '/banking-finance-translation',
      '/ecommerce-translation',
      '/government-translation',
      '/direct-to-consumer-translation',
      '/chatbot',
      '/voice-bot',
      '/ocr',
      '/book-a-demo',
      '/website-translation',
      '/app-localization',
      '/translation-api',
      '/transliteration-api',
      '/document-translation',
      '/english-to-hindi-transliteration',
      '/english-to-marathi-transliteration',
      '/english-to-tamil-transliteration',
      '/english-to-telugu-transliteration',
      '/english-to-kannada-transliteration',
      '/english-to-malayalam-transliteration',  
      '/english-to-punjabi-transliteration',
      '/english-to-gujarati-transliteration',
      '/english-to-bengali-transliteration',
      '/english-to-odia-transliteration',
      '/english-to-assamese-transliteration',
      '/english-to-urdu-transliteration',
    ];

    // Check if current pathname starts with any of the routes needing reload
    const needsReload = routesNeedingReload.some(route => pathname.startsWith(route));

    // Get the last visited path from sessionStorage
    const lastPath = sessionStorage.getItem('lastPath');

    if (needsReload && lastPath !== pathname) {
      // Store current path before reload
      sessionStorage.setItem('lastPath', pathname);
      // Reload the page
      window.location.reload();
    } else {
      // Scroll to top
      window.scrollTo(0, 0);
      
      // Reinitialize sliders
      reinitializePageSliders();

      // Update last path
      sessionStorage.setItem('lastPath', pathname);
    }
  }, [pathname]);

  return null;
}; 