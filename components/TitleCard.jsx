import React from 'react'

export default function TitleCard() {
    return (
        <div className="m-8 relative space-y-4">
            <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1">
                    <div className="h-4 w-48 bg-gray-300 rounded"></div>
                </div>
                <div>
                    <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
                </div>
            </div>
            <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1">
                    <div className="h-4 w-56 bg-gray-300 rounded"></div>
                </div>
                <div>
                    <div className="w-20 h-6 rounded-lg bg-yellow-300"></div>
                </div>
            </div>
            <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1">
                    <div className="h-4 w-44 bg-gray-300 rounded"></div>
                </div>
                <div>
                    <div className="w-28 h-6 rounded-lg bg-pink-300"></div>
                </div>
            </div>
        </div>
    )
}
