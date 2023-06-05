import React from "react";
import Image from "next/image";
import { nunito } from "@/context/fonts";
import { useForm, ValidationError } from '@formspree/react';

// import Link from "next/link";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xeqwbkgb");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <section className={` container mx-auto px-6 py-12`} id="contact">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-col md:flex-row"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex mx-12">
              <div className=" block group mt-8">
                <Image
                  src="https://cdn.pixabay.com/photo/2015/11/03/08/53/meeting-1019744_960_720.jpg"
                  // src="/vercel.svg"
                  alt="sci-fi"
                  width={580}
                  height={580}
                  // layout="responsive"
                  priority
                  className=" inset-0 object-cover group-hover:opacity-50 rounded-md"
                />
              </div>
            </div>
            <div>
              <div className="container flex flex-col">
                <div className="flex flex-col mx-auto my-4 ">
                  <h2 className="text-center text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300">
                    Contact Us
                  </h2>
                  <p>Feel free to connect with our developers by filling this form.</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="my-3 flex flex-col">
                    <label
                      htmlFor="name"
                      className=" mb-3 font-semibold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="name bg-blue-100 text-pink-600 p-3 rounded-xl"
                      placeholder="Name"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>

                  <div className="my-3 flex flex-col">
                    <label
                      htmlFor="email"
                      className=" mb-3 font-semibold"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="email p-3 rounded-xl bg-blue-100 text-pink-600"
                      placeholder="Your Email Address"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div className="my-3 flex flex-col">
                    <label
                      htmlFor="subject"
                      className=" mb-3 font-semibold"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="subject p-4 rounded-xl bg-blue-100 text-pink-600"
                      placeholder="Subject"
                      required
                    />
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                    />
                  </div>

                  <div className="my-3 flex flex-col">
                    <label
                      htmlFor="message"
                      className=" mb-3 font-semibold"
                    >
                      Message
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      className="message p-3 rounded-xl bg-blue-100 text-pink-600"
                      placeholder="Your Message"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <div className="text-center my-4">
                    <button type="submit" disabled={state.submitting} className={`${nunito.className} bg-pink-600 font-bold hover:bg-pink-800 px-4 py-2 rounded-lg`} role="button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}