"use client";

import { Button } from "@/components/ui/button";
import { Search, User, Building2, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const router = useRouter();

    return (
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <h1 className="text-2xl font-bold text-[var(--upfront)]">
                                    Upfront
                                </h1>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation - Desktop */}
                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="#"
                            className="text-gray-600 hover:text-[var(--upfront)] px-3 py-2 text-sm font-medium"
                        >
                            Find Jobs
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-[var(--upfront)] px-3 py-2 text-sm font-medium"
                        >
                            Companies
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-[var(--upfront)] px-3 py-2 text-sm font-medium"
                        >
                            Career Advice
                        </a>
                    </nav>

                    {/* Auth Buttons - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            className="text-gray-600 hover:text-[var(--upfront)]"
                        >
                            <User className="w-4 h-4 mr-2" />
                            Job Seeker Login
                        </Button>
                        <Button
                            variant="outline"
                            className="border-[var(--upfront)] text-[var(--upfront)] hover:bg-blue-50"
                        >
                            <Building2 className="w-4 h-4 mr-2" />
                            Employer Login
                        </Button>
                        <Link href="/post-job">
                            <Button className="bg-[var(--upfront)] hover:bg-[var(--upfront-hover)] text-white cursor-pointer">
                                Post a Job
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu className="w-6 h-6" />
                        </Button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-[var(--upfront)] block px-3 py-2 text-sm font-medium"
                            >
                                Find Jobs
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-[var(--upfront)] block px-3 py-2 text-sm font-medium"
                            >
                                Companies
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-[var(--upfront)] block px-3 py-2 text-sm font-medium"
                            >
                                Career Advice
                            </a>
                            <div className="pt-4 pb-3 border-t border-gray-200">
                                <div className="flex flex-col space-y-2">
                                    <Button
                                        variant="ghost"
                                        className="justify-start"
                                    >
                                        <User className="w-4 h-4 mr-2" />
                                        Job Seeker Login
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="justify-start"
                                    >
                                        <Building2 className="w-4 h-4 mr-2" />
                                        Employer Login
                                    </Button>
                                    <Button className="bg-[var(--upfront)] hover:bg-[var(--upfront-hover)]">
                                        Post a Job
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
