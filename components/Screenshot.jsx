import React, { createRef, useState } from 'react'
import { useScreenshot } from 'use-react-screenshot'

export default function Screenshot() {
    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot()
    const getImage = () => takeScreenshot(ref.current)
    return (
        <div>
            <div>
                <button style={{ marginBottom: '10px' }} onClick={getImage}>
                    Take screenshot
                </button>
            </div>
            <img width={width} src={image} alt={'Screenshot'} />
            <div ref={ref}>
                <h1>use-react-screenshot</h1>
                <p>
                    <strong>hook by @vre2h which allows to create screenshots</strong>
                </p>
            </div>
        </div>
    )
}