import React from "react";

const IdeaCard = ({ idea }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="bg-gray-950 px-5 w-full lg:w-96 h-24 py-4 flex gap-5">
                <p className="text-lg">{idea}</p>
            </div>
        </div>
    );
};

export default IdeaCard