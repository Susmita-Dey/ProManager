import Image from "next/image";

export default function Custom404() {
    return (
        <div className="text-white flex flex-col mx-auto my-10 justify-center items-center">
            {/* <Image
        className="mb-6"
        src="/404 error.gif"
        alt="error"
        width="250rem"
        height="250rem"
        // layout="fill"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "/error2.svg";
        }}
      /> */}
            <h1>404 - Page Not Found</h1>
            <p className="text-center py-4">
                If you're trying to head over to some other page from the blog page,
                kindly go back home first and then choose that path.
                <br /> Happy Routing! 🎃
            </p>
            <a href="/">
                <button className="bg-blue-900 text-white p-4 rounded-lg">
                    Go back Home
                </button>
            </a>
        </div>
    );
}