import proideas from '@/data/proideas'
import React from 'react'
import IdeaCard from './IdeaCard'

function CategoryDataMap() {
    return (
        <div>
            {proideas.map((category) => (
                <div key={category.category}>
                    <h2 className='text-3xl font-semibold text-center my-10'>{category.category}</h2>
                    <div className="flex md:flex-row flex-col flex-wrap justify-center items-center gap-5">
                        {category.proideas.map((idea) => (
                            <IdeaCard key={idea} idea={idea} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryDataMap