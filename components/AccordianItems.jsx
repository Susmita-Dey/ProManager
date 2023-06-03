import React from "react";

import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { Collapse } from "react-collapse";
import { FaQuestion, FaQuestionCircle } from "react-icons/fa";


const AccordionItems = ({ open, toggle, title, desc }) => {
    return (
        <div className={` pt-10`}>
            <div
                onClick={toggle}
                className="px-2 flex justify-between cursor-pointer border-t-2 border-gray-400 pt-4"
            >
                <div className="flex flex-row gap-2">
                    {open ? <FaQuestion className="text-pink-900 font-bold text-lg mt-1" /> : <FaQuestionCircle className="text-pink-600 font-bold text-lg mt-1" />}
                    <p className="text-lg md:text-xl max-w-[39ch] md:max-w-full text-start dont-semibold change-bold">{title}</p>
                </div>
                <div className="text-sm md:text-xl">
                    {open ? <SlArrowDown className="text-pink-900 font-bold mt-2" /> : <SlArrowRight className="text-pink-600 font-bold mt-2" />}
                </div>
            </div>
            <Collapse isOpened={open}>
                <p className="text-base md:text-lg px-2 md:px-3 mt-4">{desc}</p>
            </Collapse>
        </div>
    );
};

export default AccordionItems;