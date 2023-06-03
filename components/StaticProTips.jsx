import { montserrat } from '@/context/fonts';
import tips from '@/data/tips';
import React from 'react'

function StaticProTips() {
    function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    }

    // const arr = ['b', 'c', 'a', 'd'];
    // console.log(getMultipleRandom(tips, 2)); // 👉️ ['a', 'c'];
    // console.log(getMultipleRandom(arr, 3)); // 👉️ ['c', 'b', 'c']

    const result = getMultipleRandom(tips, 8)

    return (
        <div className='container max-w-[84rem] mx-auto lg:px-8 px-5 mt-10 mb-4'>
            <h2 className={`${montserrat.className} text-xl font-bold my-10`}>Few productivity tips for you</h2>
            <div className='flex flex-col flex-wrap text-center lg:flex-row text-lg gap-6 justify-center items-center'>
                {result.map((item, index) => (
                    <div key={index} className='flex flex-col border-2 gap-4 w-full lg:h-44 h-full bg-gradient-to-b px-4 pb-6 pt-8 mb-5 lg:backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-96 lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 hover:border-pink-600 hover:border-2'>
                        <p className='font-medium'>{item.tipsTitle}</p>
                        <p className='italic font-mono font-normal text-base text-gray-500 pb-2'>{item.category}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StaticProTips