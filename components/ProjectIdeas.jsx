import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import DesignerIdeas from "./DesignerIdeas";
import GeneralIdeas from "./GeneralIdeas";
import MarketerIdeas from "./MarketerIdeas";
import StudentIdeas from "./StudentIdeas";
import TeacherIdeas from "./TeacherIdeas";
import DeveloperIdeas from "./DeveloperIdeas";
import { montserrat } from "@/context/fonts";

const ProjectIdeas = ({ userId }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  const handleBackButtonClick = () => {
    setSelectedComponent(null);
  };

  let componentToRender = null;
  if (selectedComponent === "Student") {
    componentToRender = <StudentIdeas userId={userId} />;
  } else if (selectedComponent === "Teacher") {
    componentToRender = <TeacherIdeas userId={userId} />;
  } else if (selectedComponent === "Marketers") {
    componentToRender = <MarketerIdeas userId={userId} />;
  } else if (selectedComponent === "Developers") {
    componentToRender = <DeveloperIdeas userId={userId} />;
  } else if (selectedComponent === "Designers") {
    componentToRender = <DesignerIdeas userId={userId} />;
  } else if (selectedComponent === "General") {
    componentToRender = <GeneralIdeas userId={userId} />;
  }

  return (
    <section className="min-h-full max-w-[85rem] container mx-auto py-12 px-5 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 my-5 justify-center items-center lg:text-justify md:text-justify text-center">
          <h2
            className={`${montserrat.className}  text-3xl lg:text-4xl font-bold`}
          >
            Idea list
          </h2>
          <p className="md:text-xl font-medium">
            Turn Dreams into Reality with Promanger&apos;s Revolutionary
            Idealist Feature
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:p-[8.5rem] p-5 rounded-lg max-h-full bg-gray-950">
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Hey, before moving ahead we wanna know you.
          </h2>
          <h3 className="text-xl lg:text-2xl font-medium">
            Choose any of the following roles that you currently pursue in your
            life.
          </h3>
          <p className="text-base lg:text-lg font-normal">
            *You may choose any one of the following and we&apos;ll provide you
            the data based on your preferences.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <button
              className="bg-rose-900 px-4 py-2 rounded-md shadow-sm"
              onClick={() => handleButtonClick("Student")}
            >
              Student
            </button>
            <button
              className="bg-rose-900 px-4 py-2 rounded-md shadow-sm"
              onClick={() => handleButtonClick("Teacher")}
            >
              Teacher
            </button>
            <button
              className="bg-rose-900 px-4 py-2 rounded-md shadow-sm"
              onClick={() => handleButtonClick("Marketers")}
            >
              Marketers
            </button>
            <button
              className="bg-rose-900 px-4 py-2 rounded-md shadow-sm"
              onClick={() => handleButtonClick("Developers")}
            >
              Developers
            </button>
            <button
              className="bg-rose-900 px-4 py-2 rounded-md shadow-sm"
              onClick={() => handleButtonClick("Designers")}
            >
              Designers
            </button>
            <button
              className="bg-rose-900 px-4 py-2 rounded-md shadow-sm"
              onClick={() => handleButtonClick("General")}
            >
              I&apos;m just a normal human being.
            </button>
          </div>
        </div>
        {selectedComponent && (
          <div className="flex mt-10 flex-col gap-5 lg:p-8 p-5 rounded-lg max-w-7xl max-h-full bg-gray-950">
            <>
              <button onClick={handleBackButtonClick}>
                <RxCross2 className="text-xl font-bold relative flex top-0 right-0 hover:text-pink-600 hover:scale-150 w-6 h-6" />
              </button>
              {componentToRender}
            </>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectIdeas;
