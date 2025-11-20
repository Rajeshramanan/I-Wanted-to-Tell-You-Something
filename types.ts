import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: 'light' | 'dark' | 'gradient';
}

export interface RevealTextProps {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
}
