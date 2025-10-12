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

// Placeholder for compatibility
export const initializeSliders = () => {
  // No-op for now
};
