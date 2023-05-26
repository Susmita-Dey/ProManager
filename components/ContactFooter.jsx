import React from "react";
import Link from "next/link";
import { MdPhone } from "react-icons/md";
import { FaDiscord, FaLinkedin, FaRegClock, FaTwitter, FaUserFriends, FaYoutube } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

export default function ContactFooter() {
    return (
        <>
            <section className="text-white bg-gray-950 body-font relative">
                <div className="container px-20 pt-8 pb-2 mx-auto">
                    <div className="flex justify-between my-4 md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="flex flex-col my-4">
                            <p className="flex">
                                <MdPhone className="text-rose-500 text-xl" />
                                <span className="mx-2 -mt-1 font-medium">Talk to us on call or mail</span>
                            </p>
                            <span className="ml-8 mt-2">
                                Mail:{" "}
                                <Link href={'mailto:deysusmita883@gmail.com'} className="font-medium hover:underline hover:underline-offset-2 hover:text-cyan-300">
                                    deysusmita883@gmail.com
                                </Link> <br />{" "}
                                <span>
                                    We believe having a 1:1 session over calling on phone.<br /> You can schedule a call{" "}
                                    <Link
                                        href="https://calendly.com/susmitadeyofficial/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-300"
                                    >
                                        here.
                                    </Link>
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-col my-4 gap-6">
                            <p className="flex">
                                <FaUserFriends className="text-rose-500 font-medium text-xl" />
                                <span className="mx-2 -mt-1 font-medium">
                                    SOCIALS
                                </span>
                            </p>
                            <p className="flex flex-col space-y-3">
                                <span className="mx-2 -mt-1">
                                    Connect With Us
                                </span>
                                <span className="flex flex-row space-x-3 mx-2">
                                    <Link href={'https://twitter.com/its_SusmitaDey'} target="_blank"
                                        rel="noopener noreferrer">
                                        <FaTwitter className="text-rose-500 text-xl" />
                                    </Link>
                                    <Link href={'https://www.linkedin.com/in/susmita-dey-15a15a210/'} target="_blank"
                                        rel="noopener noreferrer">
                                        <FaLinkedin className="text-rose-500 text-xl" />
                                    </Link>
                                    <Link href={'https://www.youtube.com/@TechWithSusmita'} target="_blank"
                                        rel="noopener noreferrer">
                                        <FaYoutube className="text-rose-500 text-xl" />
                                    </Link>
                                    <Link href={'https://discord.gg/g7FmxB9uZp'} target="_blank"
                                        rel="noopener noreferrer">
                                        <FaDiscord className="text-rose-500 text-xl" />
                                    </Link>
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col my-4 gap-6">
                            <p className="flex flex-col">
                                <span className="flex flex-row">
                                    <FaRegClock className="text-rose-500 text-xl" />
                                    <span className="mx-2 -mt-1 font-medium">
                                        Hour of operation
                                    </span>
                                </span>
                                <span className="mx-7"> Monday - Saturday: 8:00am - 6:00pm{" "}
                                    <br /> Sunday: Closed
                                </span>
                            </p>
                            <p className="flex">
                                <SlLocationPin className="text-rose-500 text-xl" />
                                <span className="mx-2 -mt-1">
                                    FULLY REMOTE
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}