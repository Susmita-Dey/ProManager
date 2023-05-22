import Navbar from "./Navbar";
import Footer from "./Footer";
// import TestNavbarComponent from "./TestNavbarComponent";

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col min-h-screen justify-between">
                <Navbar />
                {/* <TestNavbarComponent /> */}
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
}