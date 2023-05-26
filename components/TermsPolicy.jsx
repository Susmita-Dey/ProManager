import React from 'react'

export default function TermsPolicy() {
    return (
        <section className='container mx-auto my-4 py-10 px-5'>
            <div className='flex flex-col justify-center items-center space-x-6 space-y-6'>
                <div className='space-y-6'>
                    <h2 className='text-3xl font-semibold'>Terms of Service</h2>
                    <p>Welcome to ProManager!</p>
                    <p> These Terms of Service (&apos;Terms&apos;) govern your use of the ProManager application (&apos;the Service&apos;) provided by ProManager, Inc. <br /> By accessing or using the Service, you agree to be bound by these Terms. <br /> If you do not agree with any of these terms, please do not use the Service.</p>
                    <div>
                        <ul className='list-outside list-decimal'>
                            <li>User Responsibilities</li>
                            <ol type='I' className='list-inside list-decimal'>
                                <li>You are solely responsible for your use of the Service and any consequences thereof.</li>
                                <li>You agree to use the Service in compliance with all applicable laws and regulations.</li>
                                <li>You will not use the Service to engage in any unlawful, harmful, or unethical activities.</li>
                            </ol>
                            <li>Privacy</li>
                            <ol className='list-inside list-decimal'>
                                <li>ProManager respects your privacy and takes the protection of your personal information seriously. <br /> Our Privacy Policy outlines how we collect, use, and disclose your information when you use the Service.</li>
                                <li>By using the Service, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.</li>
                            </ol>
                            <li>Intellectual Property</li>
                            <ol className='list-inside list-decimal'>
                                <li>ProManager retains all intellectual property rights related to the Service, including but not limited to trademarks, logos, and copyrighted materials.</li>
                                <li>You may not copy, modify, distribute, or sell any part of the Service without prior written permission from ProManager.</li>
                            </ol>
                            <li>Limitation of Liability</li>
                            <ol className='list-inside list-decimal'>
                                <li>ProManager will not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising out of or in connection with your use of the Service.</li>
                                <li>ProManager does not guarantee the accuracy, reliability, or availability of the Service or its content.</li>
                                <li>ProManager is not responsible for any loss or damage to your data or devices as a result of using the Service.</li>
                            </ol>
                            <li>Termination</li>
                            <ol className='list-inside list-decimal'>
                                <li>ProManager reserves the right to suspend or terminate your access to the Service at any time without notice or liability, for any reason.</li>
                                <li> Upon termination, all licenses and rights granted to you by these Terms will cease.</li>
                            </ol>
                            <li>Changes to the Terms</li>
                            <ol className='list-inside list-decimal'>
                                <li>ProManager may update or modify these Terms at any time. It is your responsibility to review the most current version of the Terms.</li>
                                <li>By continuing to use the Service after any modifications to the Terms, you agree to be bound by the updated Terms.</li>
                            </ol>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
