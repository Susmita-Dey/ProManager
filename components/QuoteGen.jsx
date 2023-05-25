import quotes from '@/data/quotes'
import React from 'react'
// import BlurryBg from './BlurryBg';

export default function QuoteGen() {
    const getRandomItem = (quotes) => {

        // get random index value
        const randomIndex = Math.floor(Math.random() * quotes.length);

        // get random item
        const item = quotes[randomIndex];

        return item;
    }
    const result = getRandomItem(quotes)
    // alert(result.quoteTitle)
    return (
        <div className='flex flex-col text-center text-xl md:px-20 text-white justify-center items-center my-4'>
            {/* <BlurryBg /> */}
            <div className='flex flex-col border-b break-words w-full md:w-1/4 border-gray-300 bg-gradient-to-b from-zinc-200 px-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:border-pink-600 hover:border-2'>
                <p className='italic font-mono'>"{result.quoteTitle}"</p>
                <p className='italic font-mono font-bold'>- {result.author}</p>
            </div>
        </div>
    )
}
