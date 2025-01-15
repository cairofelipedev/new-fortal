import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen flex">
            <nav className="bg-fortalorange w-64 flex-shrink-0">
                <div className="h-full flex flex-col">
                    <div className="flex items-center justify-center h-16">
                        <Link href="/">
                            <img src="/images/orangefortallogo.png" className="block h-9 w-auto fill-current" />
                        </Link>
                    </div>
                    <div className="overflow-y-auto">
                        <div className="space-y-1 p-2">
                            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                Dashboard
                            </NavLink>
                        </div>
                    </div>
                    <div className="overflow-y-auto">
                        <div className="space-y-1 p-2">
                            <NavLink href={route('dashboard/espacos-de-eventos')} active={route().current('dashboard/espacos-de-eventos')}>
                                Espaços
                            </NavLink>
                        </div>
                    </div>
                    <div className="overflow-y-auto">
                        <div className="space-y-1 p-2">
                            <NavLink href={route('dashboard/leads')} active={route().current('dashboard/leads')}>
                                Leads
                            </NavLink>
                        </div>
                    </div>
                    <div className="absolute right-0 top-2">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md w-full">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 w-full border border-transparent text-[16px] leading-4 font-medium rounded-md text-[#bfcblue] hover:text-[#0011fd] focus:outline-none transition ease-in-out duration-150"
                                    >
                                        <div className='flex items-center justify-center w-[40px] h-[40px] mr-[10px] bg-[#fff] rounded-full'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_108_12941)">
                                                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#6B6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="#6B6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_108_12941">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        {user.name}

                                        <svg
                                            className="ms-2 -me-0.5 h-4 w-4 text-[#d3b4e4]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>Perfil</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Sair
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </nav>

            <div className="flex-grow">
                {header && (
                    <header className="bg-gray-100 shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </div>
    );
}
