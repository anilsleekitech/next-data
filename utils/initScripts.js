// Bootstrap JS will be imported in _app.js

export const initializeSliders = () => {
  const schedule = (fn) => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(fn, { timeout: 1000 });
    } else {
      setTimeout(fn, 0);
    }
  };

  // Delay to ensure DOM and libraries are fully loaded without blocking paint
  schedule(() => {
    if (!(window.$ && typeof window.$.fn.slick === 'function')) return;

    // Helper to safely init a slick element
    const safeInit = (selector, options) => {
      const $el = $(selector);
      if (!$el.length) return;
      if ($el.hasClass('slick-initialized')) return;
      $el.slick(options);
    };

    // Lazy-init brand slider only when visible (improves TTI)
    const initBrand = () => safeInit('.brand-slider-wrapper', {
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      buttons: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      swipe: false,
      draggable: false,
      variableWidth: true
    });

    const brandContainer = document.querySelector('.brand-slider-wrapper');
    if (brandContainer) {
      const brandObs = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            initBrand();
            obs.disconnect();
          }
        });
      }, { rootMargin: '100px' });
      brandObs.observe(brandContainer);
    }

    // Testimonial slider (initialize on demand)
    safeInit('.testimonial-slider1', {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 768.99, settings: { slidesToShow: 1 } }
      ]
    });
  });
};

export const reinitializeSliders = () => {
  // Destroy existing sliders if they exist; they'll re-init lazily
  if (window.$ && typeof window.$.fn.slick === 'function') {
    try {
      if ($('.brand-slider-wrapper').hasClass('slick-initialized')) {
        $('.brand-slider-wrapper').slick('unslick');
      }
      if ($('.testimonial-slider1').hasClass('slick-initialized')) {
        $('.testimonial-slider1').slick('unslick');
      }
    } catch (e) {
      // no-op
    }
  }

  // Reinitialize after a short delay
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(initializeSliders, { timeout: 1000 });
  } else {
    setTimeout(initializeSliders, 0);
  }
}; 
