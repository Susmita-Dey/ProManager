import Image from "next/image";

function Error({ statusCode }) {
    return (
        <div className="text-white flex flex-col mx-auto my-8 justify-center items-center">
            {/* <Image
        className="mb-4"
        src="/404 error.gif"
        alt="error"
        width="250rem"
        height="250rem"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "/error3.svg";
        }}
      /> */}
            <h2>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : "An error occurred on client"}
            </h2>
            <p className="text-center py-2">
                If you're trying to head over to some other page from the blog page,
                kindly go back home first and then choose that path.
                <br /> Happy Routing! 🎃
            </p>
            <a href="/">
                <button className="bg-blue-900 text-white p-2 rounded-lg">
                    Go back Home
                </button>
            </a>
        </div>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;