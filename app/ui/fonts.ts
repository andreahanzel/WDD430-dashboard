// Created this file to import the Inter font from Google Fonts and export it as a variable to be used in the app.
import { Inter, Lusitana } from 'next/font/google';

// Primary font
export const inter = Inter({ subsets: ['latin'] });

// Secondary font
export const lusitana = Lusitana({
  weight: ['400', '700'], // Specify the font weights
  subsets: ['latin'],
});
