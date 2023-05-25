import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
    return (
        <div className="text-white flex flex-col mx-auto my-10 justify-center items-center">
            <Image
                className="mb-6"
                src="/error-404-1.gif"
                alt="error"
                width={250}
                height={250}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "/next.svg";
                }}
            />
            <h2 className="text-center font-medium text-lg">404 - Page Not Found</h2>
            <p className="text-center py-4">
                Oops!! You're in the wrong path. Kindly go back home safely.
                <br /> Happy Routing! 🎃
            </p>
            <Link href="/">
                <button className="bg-pink-900 text-white p-4 rounded-lg">
                    Go back Home
                </button>
            </Link>
        </div>
    );
}