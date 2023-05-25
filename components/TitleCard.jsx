import React from 'react'

export default function TitleCard() {
    return (
        <div class="m-8 relative space-y-4">
            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                    <div class="h-4 w-48 bg-gray-300 rounded"></div>
                </div>
                <div>
                    <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
                </div>
            </div>
            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                    <div class="h-4 w-56 bg-gray-300 rounded"></div>
                </div>
                <div>
                    <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
                </div>
            </div>
            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                    <div class="h-4 w-44 bg-gray-300 rounded"></div>
                </div>
                <div>
                    <div class="w-28 h-6 rounded-lg bg-pink-300"></div>
                </div>
            </div>
        </div>
    )
}
