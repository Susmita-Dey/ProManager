import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { GoRocket } from 'react-icons/go'

function HeroSection() {
    return (
        <section className="min-h-full flex flex-col py-12 sm:px-6 lg:px-8">
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:px-16 px-5'>
                <div className='flex flex-col md:w-1/2 space-y-5'>
                    <h2 className='text-3xl md:text-6xl font-bold tracking-wide leading-relaxed'><span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Supercharge</span> your productivity with ProManager</h2>
                    <p className='text-lg font-normal leading-relaxed'>Take control of your tasks, organize your life, and conquer your goals with <span className='text-indigo-500 font-medium'>ProManager</span> - the ultimate productivity tool for developers, students, and individuals. Maximize your efficiency, stay focused, and achieve more than ever before.</p>
                    <div className='flex md:w-1/2 md:flex-row flex-col gap-4'>
                        <Link href='/signup'>
                            <button className='flex flex-row gap-1 rounded-md shadow-md font-semibold px-4 py-2 bg-pink-600 hover:bg-pink-800 text-white'>
                                Get Started <GoRocket className="text-lg mt-1" />
                            </button>
                        </Link>
                        <Link href='#about'>
                            <button className='flex flex-row gap-1 rounded-md shadow-md font-medium px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700'>
                                Learn More <AiOutlineArrowDown className="text-lg animate-bounce mt-1" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 '>
                    <Image src="/team.gif" width={0} height={0} className='rounded-md w-[35rem] h-full' alt="team-work" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection