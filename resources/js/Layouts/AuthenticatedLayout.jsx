import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth?.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    
    return (
        <div className="min-h-screen bg-[#fbf8f2]">
            <nav className="border-b border-[#ddd8cc] bg-[#fbf8f2]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">

                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link
                                    href="/"
                                    className="font-serif text-2xl font-semibold text-[#485642]"
                                >
                                    Petal <span className="font-normal italic">& Stem</span>
                                </Link>
                            </div>

                            <div className="hidden items-center gap-8 sm:ms-10 sm:flex">
                                <Link href="/" className="text-sm font-semibold text-[#485642]">
                                    Shop
                                </Link>
                                <a href="#bouquets" className="text-sm font-medium text-[#65675c] transition hover:text-[#485642]">
                                    Bouquets
                                </a>
                                <a href="#story" className="text-sm font-medium text-[#65675c] transition hover:text-[#485642]">
                                    Our studio
                                </a>
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            {!user ? (
                                <Link href={route('login')} className="text-sm font-semibold text-[#485642] hover:text-[#8a674b]">
                                    Sign in
                                </Link>
                            ) : (
                            <div className="relative ms-3">

                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">

                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-[#fbf8f2] px-3 py-2 text-sm font-medium leading-4 text-[#485642] transition hover:text-[#8a674b] focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
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

                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>

                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>

                                    </Dropdown.Content>
                                </Dropdown>

                            </div>
                            )}
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">

                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) =>
                                            !previousState,
                                    )
                                }
                                aria-label="Toggle navigation"
                                className="inline-flex items-center justify-center rounded-md p-2 text-[#485642] transition hover:bg-[#e9e6d9] focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />

                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                        </div>

                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown
                            ? 'block'
                            : 'hidden') +
                        ' sm:hidden'
                    }
                >

                    <div className="space-y-1 border-t border-[#ddd8cc] pb-3 pt-2 sm:hidden">
                        <Link href="/" className="block px-4 py-2 text-sm font-semibold text-[#485642]">
                            Shop
                        </Link>
                        <a href="#bouquets" className="block px-4 py-2 text-sm text-[#65675c]">
                            Bouquets
                        </a>
                        <a href="#story" className="block px-4 py-2 text-sm text-[#65675c]">
                            Our studio
                        </a>
                    </div>

                    <div className="border-t border-[#ddd8cc] pb-1 pt-4">

                        {user ? (
                            <>
                        <div className="px-4">

                            <div className="text-base font-medium text-[#252b21]">
                                {user.name}
                            </div>

                            <div className="text-sm font-medium text-[#65675c]">
                                {user.email}
                            </div>

                        </div>

                        <div className="mt-3 space-y-1">

                            <ResponsiveNavLink
                                href={route('profile.edit')}
                            >
                                Profile
                            </ResponsiveNavLink>

                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>

                        </div>
                            </>
                        ) : (
                            <Link href={route('login')} className="block px-4 py-2 text-sm font-semibold text-[#485642]">
                                Sign in
                            </Link>
                        )}

                    </div>

                </div>
            </nav>

            {header && (
                <header className="border-b border-gray-200 bg-white">
                    <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}