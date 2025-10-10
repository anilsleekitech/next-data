// Initialize WOW.js animations
export const initializeAnimations = () => {
  if (typeof window !== 'undefined') {
    // Check if WOW is available
    if (typeof window.WOW === 'function') {
      const wow = new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
      });
      wow.init();
    } else {
      console.warn('WOW.js is not loaded. Animations may not work.');
    }
  }
}; 