import ServicesPolicy from '@/components/ServicesPolicy'
import TermsPolicy from '@/components/TermsPolicy'
import Head from 'next/head'
import React from 'react'

export default function Policy() {
    return (
        <>
            <Head>
                <title>ProManager | Terms and Services</title>
                <meta name="description" content="ProManager - The only Productivity Tool You Need to boost your productivity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TermsPolicy />
            <div className='border-2 border-white md:mx-24'></div>
            <ServicesPolicy />
        </>
    )
}
