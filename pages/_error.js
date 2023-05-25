import Image from "next/image";
import Link from "next/link";

function Error({ statusCode }) {
    return (
        <div className="text-white flex flex-col mx-auto my-8 justify-center items-center">
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
            <h2>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : "An error occurred on client"}
            </h2>
            <p className="text-center py-2">
                Oops!! You're in the wrong path. Kindly go back home safely.
                <br /> Happy Routing! 🎃
            </p>
            <Link href="/">
                <button className="bg-pink-900 text-white p-2 rounded-lg">
                    Go back Home
                </button>
            </Link>
        </div>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;