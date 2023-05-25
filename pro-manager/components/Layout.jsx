import Navbar from "./Navbar";
import Footer from "./Footer";
import PinkNavbar from "./PinkNavbar";

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col min-h-screen justify-between">
                <Navbar />
                {/* <PinkNavbar /> */}
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
}