import React from 'react';

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

export interface PricingTier {
  id: number;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  delay: number;
}

// Augment window to allow AOS usage without npm types
declare global {
  interface Window {
    AOS: {
      init: (options?: any) => void;
      refresh: () => void;
    };
  }
}