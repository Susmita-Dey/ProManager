import ServicesPolicy from '@/components/ServicesPolicy'
import TermsPolicy from '@/components/TermsPolicy'
import React from 'react'

export default function Policy() {
    return (
        <>
            <TermsPolicy />
            <div className='border-2 border-white md:mx-24'></div>
            <ServicesPolicy />
        </>
    )
}
