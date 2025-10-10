import { getImagePath } from './imageUtils';

export const updateBackgroundImages = () => {
    const root = document.documentElement;
    
    // Set background image variables
    root.style.setProperty('--hero-bg-image', `url('${getImagePath('hero-bg.png')}')`);
    root.style.setProperty('--success-panel-bg', `url('${getImagePath('success-panel-bg.png')}')`);
    root.style.setProperty('--getstrated-bg', `url('${getImagePath('getstrated-bg.png')}')`);
    root.style.setProperty('--newsletter-bg', `url('${getImagePath('newsletter-bg.png')}')`);
    root.style.setProperty('--awards-bg', `url('${getImagePath('awards-bg.png')}')`);
    root.style.setProperty('--case-study-bg', `url('${getImagePath('case-study-bg.png')}')`);
    root.style.setProperty('--testimonil-bg', `url('${getImagePath('testimonil-bg.png')}')`);
    root.style.setProperty('--simple-banner-background', `url('${getImagePath('simple-banner-background.png')}')`);
    root.style.setProperty('--tab-card-bg', `url('${getImagePath('tab-card-bg.png')}')`);
}; 