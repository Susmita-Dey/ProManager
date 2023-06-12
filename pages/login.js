import LoginComponent from '@/components/LoginComponent'
import Head from 'next/head'
import React from 'react'

export default function Login() {
    return (
        <>
            <Head>
                <title>ProManager | Sign In to your account</title>
                <meta name="description" content="ProManager - The only Productivity Tool You Need to boost your productivity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LoginComponent />
        </>
    )
}