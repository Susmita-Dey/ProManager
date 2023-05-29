import React from 'react'
import { AiFillBulb } from 'react-icons/ai'
import { FaCloud, FaCreativeCommonsSamplingPlus, FaFingerprint, FaLock, FaProjectDiagram, FaStopwatch, FaTasks } from 'react-icons/fa'
import { MdArrowUpward, MdPriorityHigh } from 'react-icons/md'

const features = [
    {
        name: 'Productivity tips and ideas',
        description:
            'Access a wealth of tips, ideas, and strategies to improve your productivity and work smarter.',
        icon: AiFillBulb,
    },
    {
        name: 'Progress tracking',
        description:
            "Monitor your progress and see how far you've come with our visual tracking tools.",
        icon: FaProjectDiagram,
    },
    {
        name: 'Cross-platform synchronization',
        description:
            'Seamlessly access your tasks and data across multiple devices.',
        icon: FaCreativeCommonsSamplingPlus,
    },
    {
        name: 'Prioritization and deadlines',
        description:
            ' Set priorities, assign deadlines, and stay focused on what matters most.',
        icon: MdPriorityHigh,
    },
    {
        name: 'Task and to-do management',
        description:
            'Stay organized and on top of your responsibilities with our intuitive task management features.',
        icon: FaTasks,
    },
    {
        name: 'Speed Up Productivity with Stopwatch',
        description:
            'Discover how our Stopwatch feature in ProManager helps you track time, improve focus, and supercharge your productivity.',
        icon: FaStopwatch,
    },
]

export default function About() {
    return (
        <section className="min-h-full flex flex-col py-12 sm:px-6 lg:px-8" id='about'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-cyan-400">Achieve your goals faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        Everything you need to <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>increase</span> your level of <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>productivity</span>
                    </p>
                    <p className="mt-6 text-lg leading-8">
                        Streamline tasks, boost efficiency, and unlock your full potential. Organize, prioritize, and track tasks while accessing productivity tips for peak performance. Join us today!
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-4xl">
                    <dl className="grid max-w-xl md:grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16 pr-5 py-5 rounded-lg bg-gray-300">
                                <div className="absolute ml-2 mr-2 my-5 left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600">
                                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className=" text-base font-semibold leading-7 text-pink-900">
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-pink-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
