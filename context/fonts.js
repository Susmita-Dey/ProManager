import { Montserrat, Open_Sans, Roboto } from "next/font/google";

export const montserrat = Montserrat({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const opensans = Open_Sans({
    // weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});
