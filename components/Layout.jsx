import { roboto } from "@/context/fonts";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Layout({ children }) {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className={`${roboto.className} flex flex-col min-h-screen justify-between`}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
}