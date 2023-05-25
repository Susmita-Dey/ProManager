import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-950 container mx-auto flex flex-col justify-center items-center py-5 gap-5">
            <p className="text-sm text-slate-100">
                <span>Built with 💖 using NextJS and Appwrite</span>
                <br />
                &copy; 2023{" "}
                <b>
                    <Link
                        href="https://bio.link/susmitadey"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Susmita Dey
                    </Link>
                </b>
                . All rights reserved.
            </p>
        </footer>
    );
}