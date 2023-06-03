import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>ProManager | 404 Error Page</title>
                <meta name="description" content="ProManager - The only Productivity Tool You Need to boost your productivity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
                    Oops!! You&apos;re in the wrong path. Kindly go back home safely.
                    <br /> Happy Routing! 🎃
                </p>
                <Link href="/">
                    <button className="bg-pink-900 text-white p-4 rounded-lg">
                        Go back Home
                    </button>
                </Link>
            </div>
        </>
    );
}