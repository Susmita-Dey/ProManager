import { montserrat } from "@/context/fonts";
import React, { useState } from "react";
import AccordionItems from "./AccordianItems";

export default function FaqComponent() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    } else {
      setOpen(index);
    }
  };

  const accordiondata = [
    {
      title: "Can I access ProManager on multiple devices?",
      desc: "Yes, ProManager supports cross-platform synchronization, allowing you to access your tasks and data across multiple devices.",
    },
    {
      title: "Is ProManager suitable for team collaboration?",
      desc: "Currently this feature is unavailable in beta. But our team is working on it and will be launched soon.",
    },
    {
      title: "Is my data secure with ProManager?",
      desc: "We take data security seriously. ProManager employs industry-standard measures to protect your data and ensures your privacy.",
    },
    {
      title: "Does ProManager provide productivity tips and strategies?",
      desc: "Absolutely! ProManager provides a wealth of productivity tips, ideas, and strategies to help you maximize your efficiency and achieve your goals.",
    },
    // {
    //     title: "Can I customize ProManager to fit my specific needs?",
    //     desc: "ProManager offers customization options, allowing you to tailor the tool to your preferences and adapt it to your unique workflow.",
    // },
    {
      title: "How often is ProManager updated with new features?",
      desc: "We are committed to continuously improving ProManager. You can expect regular updates with new features, enhancements, and performance improvements.",
    },
    {
      title: "Is ProManager free to use?",
      desc: "Yes, ProManager is completely free and open source for the users to explore and experience the full functionality of the tools.",
    },
    {
      title: "How can I contact ProManager's support team for assistance?",
      desc: "You can reach out to our dedicated support team through the contact channels provided on the ProManager website or within the application. We're here to help!",
    },
  ];
  return (
    <section
      className={` min-h-full flex flex-col py-12 px-5 lg:px-8`}
      data-aos="fade-up"
    >
      <div className="flex flex-col justify-center items-center text-center lg:text-start lg:px-24">
        <h2
          className={`${montserrat.className} lg: text-3xl lg:text-4xl text-2xl mt-20 font-semibold text-center`}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-lg mt-4 mb-6 font-normal text-center">
          Find answers to common inquiries about ProManager and its features to
          get the most out of your productivity tool.
        </p>
      </div>
      <div className="px-4 md:px-20 text-justify justify-center items-center list-disc">
        {accordiondata.map((data, index) => {
          return (
            <AccordionItems
              key={index}
              open={index === open}
              title={data.title}
              desc={data.desc}
              toggle={() => toggle(index)}
            />
          );
        })}
        <div className="border-t-2 border-gray-400 mt-6"></div>
      </div>
    </section>
  );
}
