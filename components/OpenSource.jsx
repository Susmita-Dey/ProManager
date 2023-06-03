import Link from 'next/link'
import React from 'react'

function OpenSource() {
    return (
        <section className='container mx-auto my-12 md:my-4 py-10 px-5 lg:px-8 max-w-[85rem]'>
            <div className='flex flex-col'>
                <div className='my-2' data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4">Open Source</h2>
                    <p className="text-lg mb-6">
                        ProManager is an open-source project aimed at helping individuals effectively manage their projects.
                    </p>
                </div>
                <div className='my-2' data-aos="fade-up">
                    <h2 className="text-2xl font-bold mb-2">Overview</h2>
                    <p className="text-lg mb-4">
                        ProManager is an open-source project aimed at helping individuals effectively manage their projects. It provides a comprehensive set of tools and features to streamline project planning, task management, notes keeping, and tracking progress. With ProManager, users can easily organize their tasks, visualize productivity, set goals, and track project milestones. Whether you&apos;re a student, professional, or freelancer, ProManager is designed to enhance your productivity and ensure project success. Join our vibrant community of contributors and users and take control of your projects with ProManager.
                    </p>
                </div>
                <div className='my-2' data-aos="fade-up">
                    <h2 className="text-2xl font-bold mb-2">Project Goal</h2>
                    <p className="text-lg mb-4">
                        ProManager aims to provide individuals with a comprehensive project management solution
                        that helps them effectively organize, track, and collaborate on their projects. Our goal
                        is to empower users to increase productivity, streamline workflows, and achieve project success
                        through a user-friendly and feature-rich platform.
                    </p>
                </div>

                <div className='my-2' data-aos="fade-up">
                    <h2 className="text-2xl font-bold mb-2">Contributing Overview</h2>
                    <p className="text-lg mb-4">
                        Thank you for your interest in contributing to ProManager! From commenting on and triaging issues,
                        to reviewing and sending Pull Requests, all contributions are welcome. We aim to build a vibrant
                        and inclusive ecosystem of partners, core contributors, and community that goes beyond the main {" "}
                        <Link href="https://github.com/Susmita-Dey/ProManager" target="_blank" rel="noopener noreferrer" className='font-semibold text-cyan-500'>ProManager GitHub repository.</Link>
                    </p>

                    <h3 className="text-lg font-medium mb-2">If you&apos;re new to open source or contributing, the following guides can be particularly helpful:</h3>
                    <ul className="list-disc ml-6 mb-4">
                        <li>
                            <Link href="https://opensource.guide/how-to-contribute/" className="text-pink-500 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                                How to Contribute to Open Source
                            </Link>
                            : This guide provides an overview of the contribution process and offers tips for getting started.
                        </li>
                        <li>
                            <Link href="https://susmitadey.hashnode.dev/the-ultimate-git-and-github-developer-guide" className="text-pink-500 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                                The Ultimate Git and GitHub Developer Guide
                            </Link>
                            : Learn about Git and GitHub to use the git commands and contribute to the repository.
                        </li>
                        <li>
                            <Link href="https://susmitadey.hashnode.dev/a-complete-guide-for-markdown-files" className="text-pink-500 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                                A complete guide for Markdown files
                            </Link>
                            : Learn about how to use Markdown and get familiar with it&apos;s syntax and start doing No-Code contrubiton i.e., contributing to documentation.
                        </li>
                        <li>
                            <Link href="https://github.com/Susmita-Dey/ProManager/blob/main/CODE_OF_CONDUCT.md" className="text-pink-500 underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                                Code of Conduct
                            </Link>
                            : All contributors are expected to adhere to the project&apos;s code of conduct.
                        </li>
                    </ul>
                </div>

                {/* ... Rest of the content ... */}
                <div className='my-2' data-aos="zoom-in">
                    <h2 className="text-2xl font-bold mb-2">License</h2>
                    <div className="text-lg mb-4">
                        ProManager is open source software released under the MIT License.

                        <pre className="bg-gray-950 mt-2 p-4 rounded-md overflow-auto">
                            {`MIT License

    Copyright Susmita Dey, 2023.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.`}
                        </pre>
                    </div>
                </div>

                <div className='my-2' data-aos="fade-up">
                    <h2 className="text-2xl font-bold mb-2">GitHub Issues</h2>
                    <p className="text-lg mb-4">
                        GitHub issues are used to track bugs in ProManager. You can contribute by:

                        <ul className="list-disc px-6 text-lg">
                            <li><span className='font-medium my-1 underline underline-offset-2'>Triaging issues:</span> Help organize and prioritize issues by reviewing and categorizing them. You can guide users through the issue template and ask for additional information if needed.</li>
                            <li><span className='font-medium my-1 underline underline-offset-2'>Providing assistance:</span> Offer support by providing guidance and solutions to users who have raised issues. Help troubleshoot problems, reproduce bugs, and suggest possible fixes.</li>
                        </ul>
                    </p>
                </div>
                <div className='my-2' data-aos="fade-up">
                    <h2 className="text-2xl font-bold mb-2">Helping with Documentation</h2>
                    <p className="text-lg mb-4">
                        ProManager&apos;s documentation is hosted in the project&apos;s website repository. If you want to contribute to the documentation, you can suggest changes by following the guidelines like fork, clone, etc.

                        Your contributions can include fixing typos, improving explanations, adding examples, or updating outdated information. By helping with documentation, you ensure that ProManager users have access to accurate and up-to-date resources.
                    </p>

                </div>
                <div className='my-2' data-aos="fade-up">
                    <h2 className="text-2xl font-bold mb-2">Contributing Code</h2>
                    <p className="text-lg mb-4">
                        If you&apos;re interested in contributing code to ProManager, we welcome your contributions! Follow the steps below to get started:
                    </p>
                    <ol className="list-decimal text-lg mb-4 px-6">
                        <li>
                            Fork the ProManager repository on <Link href="https://github.com/Susmita-Dey/ProManager" target="_blank" rel="noopener noreferrer" className='underline underline-offset-2'>GitHub</Link>.
                        </li>
                        <li>
                            Create a new branch from the main branch to work on your changes.
                        </li>
                        <li>
                            Make the desired changes to the codebase.
                        </li>
                        <li>
                            Write tests to ensure that your changes work as expected.
                        </li>
                        <li>
                            Update the documentation if necessary.
                        </li>
                        <li>
                            Commit your changes and push them to your forked repository.
                        </li>
                        <li>
                            Open a pull request on the main ProManager repository.
                        </li>
                        <li>
                            Provide a clear description of your changes and any relevant details.
                        </li>
                        <li>
                            Collaborate with the project maintainers to review and refine your code.
                        </li>
                        <li>
                            Once your pull request is approved, it will be merged into the main codebase.
                        </li>
                    </ol>
                    <p className="text-lg mb-4">Please make sure to follow our coding guidelines and best practices when contributing code. We appreciate your efforts in making ProManager better for everyone!
                    </p>
                </div>
                <div className='my-2' data-aos="fade-up">
                    <h2 className="text-2xl font-bold mb-2">Contributing Best Practices</h2>
                    <p className="text-lg mb-4">
                        To ensure a smooth and effective contribution process, we recommend following these best practices:
                    </p>
                    <ul className="text-lg list-disc px-6 mb-4">
                        <li>
                            <span className='font-medium my-1 underline underline-offset-2'>Read the contributing guidelines:</span> Familiarize yourself with the project&apos;s specific contributing guidelines. They provide essential information on code style, commit conventions, and other important guidelines.</li>
                        <li>
                            <span className='font-medium my-1 underline underline-offset-2'>Create descriptive pull requests:</span> When submitting a pull request, provide a clear and concise description of the changes you&apos;ve made. Include relevant context, reference related issues, and explain the impact of your changes.</li>
                        <li>
                            <span className='font-medium my-1 underline underline-offset-2'>Test your changes:</span> Before submitting a pull request, make sure to thoroughly test your changes to ensure they work as intended. Include any necessary tests or documentation updates related to your changes.</li>
                        <li>
                            <span className='font-medium my-1 underline underline-offset-2'>Collaborate and communicate:</span> Engage in respectful and constructive discussions with other contributors. Seek feedback, ask questions, and offer assistance when possible. Collaboration helps improve the quality of contributions and fosters a positive community environment.</li>
                        <li>
                            <span className='font-medium my-1 underline underline-offset-2'>Be responsive and open to feedback:</span> Respond to comments and feedback on your pull requests in a timely manner. Address any requested changes or concerns promptly. Openness to feedback and willingness to iterate on your work is key to successful collaboration.</li>
                    </ul>
                </div>

                <div className='my-2' data-aos="fade-up">
                    <h2 className="text-2xl font-bold mb-2">Community Contributions</h2>
                    <p className="text-lg mb-4">
                        Contributions to ProManager go beyond GitHub. You can make a difference by:
                    </p>
                    <ul className="list-disc text-lg px-6">
                        <li><span className='font-medium my-1 underline underline-offset-2'>Sharing your experiences:</span> Help others by sharing your experiences and insights with ProManager. Write blog posts, articles, or tutorials about your usage of ProManager and its impact on your productivity.</li>
                        <li><span className='font-medium my-1 underline underline-offset-2'>Giving talks at conferences:</span> If you have expertise in project management or productivity, consider giving talks or presentations at conferences or meetups. Share your knowledge and promote ProManager to a wider audience.</li>
                        <li><span className='font-medium my-1 underline underline-offset-2'>Engaging on social media:</span> Connect with the ProManager community on social media platforms like Twitter. Share your thoughts, ideas, and experiences with ProManager, and tag ProManager&apos;s official account to get involved in conversations and spread the word.</li>
                    </ul>
                    <p className="text-lg my-2">
                        Remember to check out the project&apos;s specific contributing guidelines or documentation for more detailed information on how to contribute to ProManager. Happy contributing! 😃
                    </p>
                </div>
                {/* ... Rest of the content ... */}
                <div data-aos="zoom-in" className='flex flex-col lg:flex-row justify-center items-center text-lg font-semibold text-pink-600 gap-4'>
                    <Link className='underline underline-offset-4' href={'https://github.com/Susmita-Dey/ProManager'} target="_blank" rel="noopener noreferrer">GitHub Repository</Link>
                    <Link className='underline underline-offset-4' href={'https://github.com/Susmita-Dey/ProManager/discussions'} target="_blank" rel="noopener noreferrer">GitHub Discussions</Link>
                    <Link className='underline underline-offset-4' href={'/policy'} target="_blank" rel="noopener noreferrer">Terms and Policy</Link>
                    <Link className='underline underline-offset-4' href={'/contact'} target="_blank" rel="noopener noreferrer">Contact</Link>
                </div>
            </div>
        </section >
    )
}

export default OpenSource