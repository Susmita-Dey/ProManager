import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Services() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-950 px-3 py-2 text-base font-semibold shadow-sm hover:bg-gray-900">
                    Services
                    <FaChevronDown className="-mr-1 mt-1 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="z-50 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-950 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/tasklist"
                                    className={classNames(
                                        active ? 'bg-pink-700' : 'text-white',
                                        'block px-4 py-2 text-base font-medium'
                                    )}
                                >
                                    Tasklist 📃
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/idealist"
                                    className={classNames(
                                        active ? 'bg-pink-700' : 'text-white',
                                        'block px-4 py-2 text-base font-medium'
                                    )}
                                >
                                    Idealist 💡
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/kanbanproject"
                                    className={classNames(
                                        active ? 'bg-pink-700' : 'text-white',
                                        'block px-4 py-2 text-base font-medium'
                                    )}
                                >
                                    Kanban Board 🛹
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/progress"
                                    className={classNames(
                                        active ? 'bg-pink-700' : 'text-white',
                                        'block px-4 py-2 text-base font-medium'
                                    )}
                                >
                                    Progress Tracker 🏃
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/diarynote"
                                    className={classNames(
                                        active ? 'bg-pink-700' : 'text-white',
                                        'block px-4 py-2 text-base font-medium'
                                    )}
                                >
                                    Notes Diary 📔
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/productivity-tips"
                                    className={classNames(
                                        active ? 'bg-pink-700' : 'text-white',
                                        'block px-4 py-2 text-base font-medium'
                                    )}
                                >
                                    Productivity Tips 💁‍♀️
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/stopwatch"
                                    className={classNames(
                                        active ? 'bg-pink-700' : 'text-white',
                                        'block px-4 py-2 text-base font-medium'
                                    )}
                                >
                                    Tick-Tock ⏰
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
