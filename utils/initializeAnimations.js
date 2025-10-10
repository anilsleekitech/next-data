import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CountUp as CountUpJs } from 'countup.js';

// Initialize WOW.js animations
export const initializeWow = () => {
  if (typeof window !== 'undefined') {
    import('wow.js').then(({ default: WOW }) => {
      const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        live: true
      });
      wow.init();
    });
  }
};

// Initialize all sliders
export const initializeSliders = () => {
  if (typeof window === 'undefined') return;

  // Hero section slider
  const campaignSwiperElement = document.querySelector('.campaignSwiper');
  if (campaignSwiperElement) {
    new Swiper(campaignSwiperElement, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  // How we help slider
  const howWeHelpSwiper = document.querySelector('#howwe-help-swiper');
  if (howWeHelpSwiper) {
    new Swiper(howWeHelpSwiper, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }

  // Industries slider
  const industrySwiperElement = document.querySelector('.industrySwiper');
  if (industrySwiperElement) {
    new Swiper(industrySwiperElement, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }
};

// Initialize counters initializeCounters
export const initializeCounters = () => {
  if (typeof window === 'undefined') return;

  const counterElements = document.querySelectorAll('.counter');
  
  counterElements.forEach(counter => {
    if (!counter) return;

    try {
      const value = parseInt(counter.getAttribute('data-target'), 10);
      if (isNaN(value)) return;

      const suffix = counter.getAttribute('data-suffix') || '';
      
      // Custom formatting function
      const formattingFn = (num) => {
        if (suffix === 'M+') {
          // For millions, just show the number + M+
          return `${num}M+`;
        } else {
          // For other numbers, show the number with + suffix
          return `${num.toLocaleString('en-US')}${suffix}`;
        }
      };

      const countUp = new CountUpJs(counter, value, {
        duration: 2.5,
        separator: ',',
        suffix: '', // We handle suffix in our formattingFn
        enableScrollSpy: true,
        scrollSpyOnce: true,
        formattingFn: formattingFn
      });
      
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error('CountUp error:', countUp.error);
      }
    } catch (error) {
      console.error('Error initializing counter:', error);
    }
  });
};


// Initialize FAQs
export const initializeFAQs = () => {
  if (typeof window === 'undefined') return;

  const accordionButtons = document.querySelectorAll('.accordion-button');
  
  accordionButtons.forEach(button => {
    if (!button) return;

    const handleClick = () => {
      try {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const targetId = button.getAttribute('data-bs-target');
        if (!targetId) return;

        const content = document.querySelector(targetId);
        
        // Close all other accordions
        accordionButtons.forEach(otherButton => {
          if (otherButton && otherButton !== button) {
            otherButton.setAttribute('aria-expanded', 'false');
            otherButton.classList.add('collapsed');
            const otherId = otherButton.getAttribute('data-bs-target');
            if (otherId) {
              const otherContent = document.querySelector(otherId);
              if (otherContent) {
                otherContent.classList.remove('show');
              }
            }
          }
        });
        
        // Toggle current accordion
        button.setAttribute('aria-expanded', !isExpanded);
        button.classList.toggle('collapsed', isExpanded);
        if (content) {
          content.classList.toggle('show', !isExpanded);
        }
      } catch (error) {
        console.error('Error handling accordion click:', error);
      }
    };

    button.addEventListener('click', handleClick);
    
    // Store the handler for cleanup
    button._handleClick = handleClick;
  });
};