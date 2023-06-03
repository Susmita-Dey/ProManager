import OpenSource from '@/components/OpenSource';
import Head from 'next/head';
import React from 'react'

export default function Contribute() {
    return (
        <div>
            <Head>
                <title>ProManager | Open Source</title>
                <meta name="description" content="ProManager - The only Productivity Tool You Need to boost your productivity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <OpenSource />
        </div>
    );
};

