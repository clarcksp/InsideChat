import { ComponentType } from 'react';

// Common types used across the application
export interface Feature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}