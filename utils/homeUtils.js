import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Initialize all sliders
export const initializeSliders = () => {
  // Hero section slider
  new Swiper('.campaignSwiper', {
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

  // Industries slider
  new Swiper('.industrySwiper', {
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
};

// Initialize counters
export const initializeCounters = () => {
  const formatShortNumber = (number) => {
    if (number >= 1_000_000_000) return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + "B";
    if (number >= 1_000_000) return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + "M";
    return number.toLocaleString();
  };

  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const format = counter.getAttribute("data-format"); // "short" or undefined
    const suffix = counter.getAttribute("data-suffix") || ""; // e.g. "+"
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);

      if (format === "short" && target >= 1_000_000) {
        counter.textContent = formatShortNumber(current) + suffix;
      } else {
        counter.textContent = current.toLocaleString() + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (format === "short" && target >= 1_000_000) {
          counter.textContent = formatShortNumber(target) + suffix;
        } else {
          counter.textContent = target.toLocaleString() + suffix;
        }
      }
    }

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => observer.observe(counter));
};

// Initialize FAQs
export const initializeFAQs = () => {
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
      // Close all other accordions
      accordionButtons.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          otherButton.classList.add('collapsed');
          const content = document.querySelector(otherButton.getAttribute('data-bs-target'));
          if (content) {
            content.classList.remove('show');
          }
        }
      });

      // Toggle current accordion
      button.setAttribute('aria-expanded', !isExpanded);
      button.classList.toggle('collapsed', isExpanded);
      const content = document.querySelector(button.getAttribute('data-bs-target'));
      if (content) {
        content.classList.toggle('show', !isExpanded);
      }
    });
  });
}; 