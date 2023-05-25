import React from 'react'

function SectionTitleSub({ title = "Hello World", subtitle = "" }) {
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='font-bold text-3xl md:text-6xl text-white'>{title}</h2>
            <p className='font-normal text-lg'>{subtitle}</p>
        </div>
    )
}

export default SectionTitleSub