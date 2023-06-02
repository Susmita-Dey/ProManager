import React, { useState } from 'react'
import TailwindToaster from './TailwindToaster';
import { toast } from 'react-hot-toast';
import Loader from './Loader';

export default function Newsletter() {
    const [emailInput, setEmailInput] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // TODO: handle submission logic
        console.log(emailInput);
        // alert(emailInput);
        if (!emailInput) {
            return toast.error('Email is required');
        }

        setButtonLoading(true);
        try {
            const res = await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email: emailInput }) });
            const data = await res.json();
            console.log(res);
            console.log(data);
            console.log(data.success);
            console.log(data.error);

            if (data.success) {
                console.log("Subscribed")
                toast.success("Thank you for joining the waitlist!");
            } else {
                console.log("Error", data.error)
                throw new Error(data?.error || 'Something went wrong, please try again later');
            }

        } catch (e) {
            console.log(e.message)
            toast.error(e.message);
        }

        e.target.reset()
        setEmailInput('');
        setButtonLoading(false);
    };

    if (buttonLoading) {
        return (
            <Loader />
        );
    }

    return (
        <section className='container mx-auto my-12 md:my-4 py-10 px-5' id='newsletter'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <h2 className='md:text-4xl text-2xl'>Subscribe to our <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Newsletter</span></h2>
                <form className='flex flex-col md:flex-row md:gap-2 gap-4 justify-center items-center p-5' onSubmit={handleFormSubmit}>
                    <input type="email" name="email" id="email" className='bg-gray-300 text-pink-900 rounded-md shadow-lg px-4 py-3 text-lg w-full md:w-80 placeholder-slate-500 focus:ring-2 focus:ring-rose-700' placeholder='youremail@gmail.com' onChange={(e) => {
                        setEmailInput(e.target.value)
                    }} />
                    <button className='px-6 py-3 rounded-md font-semibold text-white bg-pink-600/90 hover:bg-pink-800/90' type='submit'>Subscribe</button>
                </form>
                <TailwindToaster />
            </div>
        </section>
    )
} 