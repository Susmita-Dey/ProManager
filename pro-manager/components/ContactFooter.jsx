import React from "react";
import Link from "next/link";
import { MdPhone } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

export default function ContactFooter() {
    return (
        <>
            <section className="text-white bg-gray-950 body-font relative">
                <div className="container px-20 pt-8 pb-2 mx-auto">
                    <div className="flex justify-between my-4 md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="flex flex-col my-4">
                            <p className="flex">
                                <MdPhone className="text-red-500 text-xl" />
                                <span className="mx-2 -mt-1">Talk to us on call or mail</span>
                            </p>
                            <span className="ml-8 mt-2">
                                Mail:{" "}
                                <span className="font-medium">
                                    deysusmita883@gmail.com
                                </span> <br />{" "}
                                <span>
                                    We believe having a 1:1 session over calling on phone.<br /> You can schedule a call{" "}
                                    <Link
                                        href="https://calendly.com/susmitadeyofficial/30min"
                                        target="_blank"
                                        className="text-cyan-300"
                                    >
                                        here.
                                    </Link>
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-col my-4 gap-6">
                            <p className="flex">
                                <FaRegClock className="text-red-500 text-xl" />
                                <span className="mx-2 -mt-1">
                                    Hour of operation <br /> Monday - Saturday: 8:00am - 6:00pm{" "}
                                    <br /> Sunday: Closed
                                </span>
                            </p>
                            <p className="flex">
                                <SlLocationPin className="text-red-500 text-xl" />
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