import { useEffect } from 'react';
import type { PortfolioConfig } from '../config/portfolio';

export const useTheme = (config: PortfolioConfig) => {
  useEffect(() => {
    const root = document.documentElement;
    const { primary, secondary, accent } = config.theme;

    root.style.setProperty('--color-primary', `var(--tw-colors-${primary}-600)`);
    root.style.setProperty('--color-primary-light', `var(--tw-colors-${primary}-500)`);
    root.style.setProperty('--color-primary-dark', `var(--tw-colors-${primary}-700)`);
    
    root.style.setProperty('--color-secondary', `var(--tw-colors-${secondary}-600)`);
    root.style.setProperty('--color-accent', `var(--tw-colors-${accent}-500)`);
  }, [config.theme]);
};