import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { FaUserFriends } from 'react-icons/fa'
import Image from 'next/image'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function UseCaseComponent() {
    let [categories] = useState({
        "For Students": [
            {
                id: 1,
                title: 'Boosting Student Success',
                subtitle: 'ProManager empowers students to excel academically and stay organized amidst their busy schedules.',
                desc: 'ProManager is the ultimate productivity tool for students, helping them streamline their tasks, manage assignments, and achieve academic excellence. Stay on top of deadlines, prioritize tasks, and access helpful tips and strategies to enhance study efficiency. With ProManager, students can conquer their coursework, maintain a healthy work-life balance, and unlock their full potential.',
                icon: '/students-1-1.png',
            },
        ],
        "For Teachers": [
            {
                id: 1,
                title: 'Empowering Educators for Effective Classroom Management',
                subtitle: 'ProManager supports teachers in organizing tasks, managing resources, and facilitating student engagement.',
                desc: 'ProManager is a game-changer for teachers, providing a comprehensive platform to streamline lesson planning, track assignments, and enhance classroom management. With ProManager, educators can efficiently manage their schedules, collaborate with colleagues, and access a wealth of educational resources. Stay organized, save time, and create an engaging learning environment with ProManager as your trusted companion.',
                icon: '/teachers.png',
            },
        ],
        "For Developers": [
            {
                id: 1,
                title: 'Maximizing Developer Productivity',
                subtitle: 'ProManager empowers developers to streamline workflows, track tasks, and achieve coding excellence',
                desc: 'ProManager is the ultimate productivity tool for developers, offering a feature-rich platform to optimize coding workflows, manage projects, and stay organized. Track tasks, set priorities, and collaborate seamlessly with team members. ProManager provides valuable insights, productivity tips, and code snippets to enhance efficiency and boost coding productivity. Take control of your development process and unleash your full potential with ProManager by your side.',
                icon: '/developer.png',
            },
        ],
        "For Individuals": [
            {
                id: 1,
                title: 'Supercharging Personal Productivity',
                subtitle: 'ProManager helps individuals stay organized, achieve goals, and maximize their productivity potential.',
                desc: 'ProManager is the ultimate productivity tool for individuals seeking to optimize their personal and professional lives. From managing daily tasks to setting long-term goals, ProManager provides a centralized platform for organizing schedules, tracking progress, and staying focused. Access valuable productivity tips, receive reminders, and unlock your full potential with ProManager as your personal productivity companion. Take control of your life and accomplish more with ProManager by your side.',
                icon: '/individuals.png',
            },
        ],
    })

    return (
        <section className='container mx-auto md:px-16 py-12 sm:px-6 lg:px-8'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h2 className='text-3xl font-semibold'>Real-Life
                    <span className='ml-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Applications</span>
                </h2>
                <p className='text-lg text-center'>Explore how ProManager benefits developers, students, and individuals<br /> in various scenarios to achieve their goals efficiently.</p>
                <div className="w-full max-w-[84rem] px-2 py-16 sm:px-0 justify-center items-center">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-pink-700',
                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-pink-400 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white shadow'
                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                        )
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            {Object.values(categories).map((posts, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={classNames(
                                        'rounded-xl bg-gray-950 p-3',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                    )}
                                >
                                    <div>
                                        {posts.map((post) => (
                                            <div
                                                key={post.id}
                                                className="relative rounded-md p-3 flex flex-col md:flex-row justify-around items-center space-y-5"
                                            >
                                                <div className='flex flex-col space-y-5 max-w-5xl'>
                                                    <h3 className="text-2xl font-semibold leading-relaxed">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-lg font-medium leading-relaxed">{post.subtitle}</p>
                                                    <p className="text-base font-normal leading-relaxed">{post.desc}</p>
                                                </div>
                                                <div className='text-3xl'>
                                                    <Image src={post.icon} width="100" height="100" className='w-full h-full' />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </section>
    )
}
