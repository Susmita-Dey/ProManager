import proideas from '@/data/proideas';
import React, { useState } from 'react';
import DesignerIdeas from './DesignerIdeas';
import GeneralIdeas from './GeneralIdeas';
import MarketerIdeas from './MarketerIdeas';
import StudentIdeas from './StudentIdeas';
import TeacherIdeas from './TeacherIdeas';
import TechProfessionalIdeas from './TechProfessionalIdeas';

// Note: If student, show student idea Component, if teacher show teacher idea component 
//create different table for different category

const ProjectIdeas = (userId) => {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [showDiv, setShowDiv] = useState(true);

    const handleButtonClick = (component) => {
        setSelectedComponent(component);
        setShowDiv(false);
    };

    const handleBackButtonClick = () => {
        setShowDiv(true);
        setSelectedComponent(null);
    };

    const showStudent = () => {
        return (
            <StudentIdeas />
        )
    }
    const showTeacher = () => {
        return (
            <StudentIdeas />
        )
    }
    const showMarketer = () => {
        return (
            <StudentIdeas />
        )
    }
    const showTechProf = () => {
        return (
            <StudentIdeas />
        )
    }
    const showDesigner = () => {
        return (
            <StudentIdeas />
        )
    }
    const showOther = () => {
        return (
            <StudentIdeas />
        )
    }

    return (
        <section className="min-h-full container mx-auto py-12 px-5 sm:px-6 lg:px-8">
            <div className='flex flex-col justify-center items-center'>
                <div>
                    {showDiv ? (
                        <div className='flex flex-col gap-5 lg:p-[8.5rem] p-5 rounded-lg max-w-7xl max-h-full bg-gray-950'>
                            <h2 className='text-4xl font-semibold'>Hey, before moving ahead we wanna know you.</h2>
                            <h3 className='text-2xl font-medium'>Choose any of the following roles that you currently pursue in your life.</h3>
                            <p className='text-lg font-normal'>*You may choose any one of the following and we&apos;ll provide you the data based on your preferences.</p>
                            <div className='flex flex-col lg:flex-row gap-4'>
                                <button className='bg-rose-900 px-4 py-2 rounded-md shadow-sm' onClick={() => handleButtonClick('Component1')}>Student</button>
                                <button className='bg-rose-900 px-4 py-2 rounded-md shadow-sm' onClick={() => handleButtonClick('Component2')}>Teacher</button>
                                <button className='bg-rose-900 px-4 py-2 rounded-md shadow-sm' onClick={() => handleButtonClick('Component3')}>Marketers</button>
                                <button className='bg-rose-900 px-4 py-2 rounded-md shadow-sm' onClick={() => handleButtonClick('Component4')}>Tech Professionals</button>
                                <button className='bg-rose-900 px-4 py-2 rounded-md shadow-sm' onClick={() => handleButtonClick('Component5')}>Designers</button>
                                <button className='bg-rose-900 px-4 py-2 rounded-md shadow-sm' onClick={() => handleButtonClick('Component6')}>I&apos;m just a normal human being.</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <button onClick={handleBackButtonClick}>Go Back</button>
                            {selectedComponent === 'Component1' && <StudentIdeas userId={userId} />}
                            {selectedComponent === 'Component2' && <TeacherIdeas userId={userId} />}
                            {selectedComponent === 'Component3' && <MarketerIdeas userId={userId} />}
                            {selectedComponent === 'Component3' && <TechProfessionalIdeas userId={userId} />}
                            {selectedComponent === 'Component3' && <DesignerIdeas userId={userId} />}
                            {selectedComponent === 'Component3' && <GeneralIdeas userId={userId} />}
                        </div>
                    )
                    }
                </div>
            </div>
        </section>
    );
};

export default ProjectIdeas;