import SignupComponent from '@/components/SignupComponent'
import Head from 'next/head'
import React from 'react'

export default function Signup() {
    return (
        <>
            <Head>
                <title>ProManager | Create an account</title>
                <meta name="description" content="ProManager - The only Productivity Tool You Need to boost your productivity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SignupComponent />
        </>
    )
}
