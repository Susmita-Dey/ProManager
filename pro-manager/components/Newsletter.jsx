import React from 'react'

export default function Newsletter() {
    return (
        <section className='container mx-auto my-12 md:my-4 py-10 px-5 '>
            <div className='flex flex-col justify-center items-center gap-6'>
                <h2 className='md:text-4xl text-2xl'>Subscribe to our <span className='dont-semibold change-bold hover:underline hover:underline-offset-8'>Newsletter</span></h2>
                <div className='flex flex-row gap-2 justify-center items-center p-5'>
                    <input type="email" name="email" id="email" className='bg-white rounded-md shadow-lg px-4 py-3 text-lg w-full md:w-80' placeholder='youremail@gmail.com' />
                    <button className='px-6 py-3 rounded-md shadow-inner shadow-sky-500 text-white bg-pink-600/90 hover:bg-pink-800/90'>Subscribe</button>
                </div>
            </div>
        </section>
    )
}