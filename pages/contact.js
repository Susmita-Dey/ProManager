import ContactFooter from '@/components/ContactFooter'
import ContactPage from '@/components/ContactPage'
import Head from 'next/head'
import React from 'react'

export default function Contact() {
    return (
        <>
            <Head>
                <title>ProManager | Contact Us</title>
                <meta name="description" content="ProManager - Contact Us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContactPage />
            <ContactFooter />
        </>
    )
}
