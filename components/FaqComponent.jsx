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
            title: "What are 5NS domains?",
            desc1: "The 5ire Name Service (5NS) is a distributed, open, and extensible naming system based on the 5irechain.",
            desc2: "5NS enables global 5irechain users to have the ability to map their long and complicated 5ire chain wallet addresses to short and readable on-chain profiles.",
        },
        {
            title: "How much does a .5ire domain cost?",
            desc1: "The pricing of domains depends on the length. Five-letter domains and longer cost $10 per year. Four-letter domains cost $100 per year. Three-letter domains cost $640 per year.",
            desc2: "Auctions may drive the prices of popular domains higher. You will only pay the higher price for the first year, and renewals for the following years will have standard pricing.",
        },
    ];
    return (
        <section className="min-h-full flex flex-col py-12 sm:px-6 lg:px-8">
            <div className="flex justify-start items-start text-start px-24">
                <h1 className="text-4xl mt-20 dont-semibold change-bold">Frequently Asked Questions</h1>
            </div>
            <div className="px-4 md:px-20 text-justify justify-center items-center list-disc">
                {accordiondata.map((data, index) => {
                    return (
                        <AccordionItems
                            key={index}
                            open={index === open}
                            title={data.title}
                            desc1={data.desc1}
                            desc2={data.desc2}
                            toggle={() => toggle(index)}
                        />
                    );
                })}
            </div>
        </section>
    )
}