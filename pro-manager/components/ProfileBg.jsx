import React from 'react'

export default function ProfileBg() {
    return (
        <section className="relative block" style={{ height: "450px" }}>
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://cdn.pixabay.com/photo/2022/05/27/21/06/abstract-7226066_960_720.png')"
                }}
            >
                <span
                    id="blackOverlay"
                    className="w-full h-full absolute opacity-50 bg-black"
                ></span>
            </div>
        </section>
    )
}
