import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";

export default function Navbar() {
    return (
        <nav className="w-full bg-white ">
            <div className="relative flex items-center max-w-screen-xl h-16 mx-auto px-4">
                <div className="flex-1 flex items-center gap-8">
                    <Link href="/project" className="uppercase tracking-wide text-sm font-semibold hover:text-gray-700">Projets</Link>
                    <Link href="/contact" className="uppercase tracking-wide text-sm font-semibold hover:text-gray-700">Contact</Link>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link href="/" className="uppercase tracking-wide text-sm font-semibold hover:text-gray-700">Korentin</Link>
                </div>
                <div className="flex-1 flex justify-end items-center gap-4">
                    <div className="flex justify-end items-center gap-3 w-24">
                        <a href="https://github.com/kkorentin" aria-label="GitHub" target="_blank"
                           rel="noopener noreferrer">
                            <GitHubIcon className="text-black hover:text-gray-700"/>
                        </a>
                        <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="text-black hover:text-gray-700"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
