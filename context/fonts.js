import { Montserrat, Nunito, Open_Sans, Roboto } from "next/font/google";

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
    weight: ['300', '400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const nunito = Nunito({
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});
