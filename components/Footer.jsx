import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-950 container mx-auto">
            <div className="px-20 flex flex-col md:flex-row justify-between items-center py-5 gap-5">
                <Link href={'/policy'} className='font-medium hover:underline hover:underline-offset-4'>Terms {'&'} Services</Link>
                <p className="text-sm text-slate-100 flex flex-col justify-center items-center">
                    <span className="flex flex-row">
                        <span>Built with 💖 using</span>
                        <Link href={'https://nextjs.org/'} target="_blank" rel="noopener noreferrer" className="text-blue-500 mx-1 font-medium">NextJS</Link>
                        <span>and</span>
                        <Link href={'https://appwrite.io/'} target="_blank" rel="noopener noreferrer" className="font-medium text-rose-500 mx-1">Appwrite</Link>
                    </span>
                    <span className="flex flex-row space-x-2">
                        &copy; 2023{" "}
                        <Link
                            href="https://susmita-dey.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 font-medium"
                        >
                            Susmita Dey
                        </Link>
                        . All rights reserved.
                    </span>
                </p>
                <Link href={'/contribute'} className='font-medium hover:underline hover:underline-offset-4'>Contribute</Link>
            </div>
        </footer>
    );
}