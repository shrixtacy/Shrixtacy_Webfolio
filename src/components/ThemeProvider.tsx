import React from 'react';
import { useTheme } from '../hooks/useTheme';
import type { PortfolioConfig } from '../config/portfolio';

type ThemeProviderProps = {
  config: PortfolioConfig;
  children: React.ReactNode;
};

export default function ThemeProvider({ config, children }: ThemeProviderProps) {
  useTheme(config);
  return <>{children}</>;
}