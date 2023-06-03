import { roboto } from "@/context/fonts";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
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