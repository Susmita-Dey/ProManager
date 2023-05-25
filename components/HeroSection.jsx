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
                    <h2 className='text-3xl md:text-6xl font-bold tracking-wide leading-relaxed'>Supercharge Your Productivity with ProManager</h2>
                    <p className='text-lg font-normal leading-relaxed'>Take control of your tasks, organize your life, and conquer your goals with ProManager - the ultimate productivity tool for developers, students, and individuals. Maximize your efficiency, stay focused, and achieve more than ever before.</p>
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
                    <Image src="/teamwork.gif" width={0} height={0} className='rounded-md md:rounded-full w-[35rem] h-full hover:ring-4 hover:ring-offset-4 hover:ring-pink-700 hover:opacity-95' alt="team-work" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection