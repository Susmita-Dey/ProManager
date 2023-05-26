import React from 'react'

export default function ServicesPolicy() {
    return (
        <section className='container mx-auto my-4 py-10 px-5'>
            <div className='flex flex-col justify-center items-center space-x-6 space-y-6'>
                <div className='space-y-6'>
                    <h2 className='text-3xl font-semibold'>Services Policy</h2>
                    <div>
                        <ul className='list-outside list-decimal'>
                            <li>Service Description</li>
                            <ol className='list-inside'>
                                <li>ProManager is a productivity tool designed to help developers, students, and individuals improve their productivity levels.<br /> It provides features for task and todo management, as well as tips and ideas to enhance productivity.</li>
                            </ol>
                            <li>Availability</li>
                            <ol className='list-inside list-decimal'>
                                <li>ProManager will make reasonable efforts to ensure the availability and reliability of the Service.<br /> However, occasional disruptions, maintenance, or technical issues may occur.</li>
                                <li>ProManager does not guarantee uninterrupted access to the Service and reserves the right to suspend, modify, or terminate the Service at any time.</li>
                            </ol>
                            <li>User Support</li>
                            <ol className='list-inside list-decimal'>
                                <li>ProManager aims to provide user support to address any technical issues or inquiries related to the Service.</li>
                                <li>Users can contact ProManager's support team through the designated channels provided on the ProManager website or within the application.</li>
                            </ol>
                            <li>Feature Updates</li>
                            <ol className='list-inside list-decimal'>
                                <li>ProManager may release periodic updates or new features to enhance the functionality of the Service.</li>
                                <li>Users are encouraged to keep their ProManager application updated to access the latest features and improvements.</li>
                            </ol>
                            <li>Data Security</li>
                            <ol className='list-inside list-decimal'>
                                <li>ProManager takes reasonable measures to protect user data and maintain its confidentiality.</li>
                                <li>However, users are responsible for taking appropriate precautions to secure their personal information and ensure the confidentiality of their ProManager account<br /> credentials.</li>
                            </ol>
                            <li>Third-Party Integration</li>
                            <ol className='list-inside list-decimal'>
                                <li>ProManager may integrate with third-party services or platforms to enhance its functionality.<br /> These third-party services may have their own terms and policies, which users should review separately.</li>
                                <li>ProManager is not responsible for the availability, functionality, or security of any third-party services or integrations.</li>
                            </ol>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
