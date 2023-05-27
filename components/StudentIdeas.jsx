import ideas from '@/data/ideas'
import React from 'react'
import IdeaCard from './IdeaCard'

function StudentIdeas() {
    return (
        <div>
            {ideas.map((category) => (
                <div key={category.category}>
                    <h2 className='text-3xl font-semibold text-center my-10'>{category.category}</h2>
                    <div className="flex md:flex-row flex-col flex-wrap justify-center items-center gap-5">
                        {category.ideas.map((idea) => (
                            <IdeaCard key={idea} idea={idea} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StudentIdeas