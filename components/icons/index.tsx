import { Command, Moon, SunMedium, X } from 'lucide-react';

export type IconKeys = keyof typeof icons;

export type IconsType = {
  [key in IconKeys]: React.ElementType;
};

const icons = {
  logo: Command,
  sun: SunMedium,
  moon: Moon,
  close: X,
};

export const Icons: IconsType = icons;
