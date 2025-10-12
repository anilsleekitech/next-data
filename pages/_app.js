import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pages/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { initializeWow } from '../utils/initializeAnimations';
import { initializeCounters, initializeFAQs, initializeSliders, reinitializeSliders } from '../utils/homeUtils';
import { updateBackgroundImages } from '../utils/cssUtils';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Import Bootstrap JS on client side
    const loadLibraries = async () => {
      try {
        const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        window.bootstrap = bootstrap;

        // Initialize all features when app mounts
        initializeWow();
        initializeSliders();
        initializeFAQs();
        // Initialize background images
        updateBackgroundImages();

        // Initialize Bootstrap carousels after libraries load
        const initCarousels = () => {
          const carouselElement = document.getElementById('carouselExampleAutoplaying');
          if (carouselElement && window.bootstrap?.Carousel) {
            new window.bootstrap.Carousel(carouselElement, {
              interval: 2000,
              wrap: true,
              ride: 'carousel'
            });
          }

          const fadeCarouselElement = document.getElementById('fadeCarousel');
          if (fadeCarouselElement && window.bootstrap?.Carousel) {
            new window.bootstrap.Carousel(fadeCarouselElement, {
              interval: 2000,
              wrap: true,
              ride: 'carousel'
            });
          }
        };

        initCarousels();
      } catch (error) {
        console.error('Error loading libraries:', error);
      }
    };

    loadLibraries();
  }, []);

  useEffect(() => {
    // Re-run relevant initializers on route change so scripts work on all pages
    const onRouteChangeComplete = () => {
      try {
        // Update background images depending on classes/data attributes present
        updateBackgroundImages();
        // Re-initialize slick-based sliders lazily
        reinitializeSliders();
        // Re-bind FAQs toggle behavior
        initializeFAQs();
        // Re-attach counters intersection observers
        initializeCounters();
      } catch (err) {
        console.error('Error during route change initialization:', err);
      }
    };

    router.events.on('routeChangeComplete', onRouteChangeComplete);
    // Run once on first render after hydration as well
    onRouteChangeComplete();

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events]);




  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const initCarousel = () => {
      const carouselElement = document.getElementById('fadeCarousel');
      if (carouselElement && window.bootstrap?.Carousel) {
        // Initialize Bootstrap carousel
        const carousel = new window.bootstrap.Carousel(carouselElement, {
          interval: 2000,
          wrap: true,
          ride: 'carousel'
        });
      }
    };

    // Check if Bootstrap is available
    if (window.bootstrap) {
      initCarousel();
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (window.location.hostname === "ta.devnagri.com" || window.location.pathname.startsWith("ta.devnagri.com")) {
      document.body.classList.add("tamil-site");
    } else {
      document.body.classList.remove("tamil-site");
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (window.location.pathname === "kn.devnagri.com" || window.location.pathname.startsWith("kn.devnagri.com")) {
      document.body.classList.add("kanada-site");
    } else {
      document.body.classList.remove("kanada-site");
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
