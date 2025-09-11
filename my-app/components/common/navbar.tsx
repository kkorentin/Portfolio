import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";

export default function Navbar() {
    return (
        <nav className="w-full bg-white ">
            <div className="relative flex items-center max-w-screen-xl h-16 mx-auto px-4">
                <div className="flex-1 flex items-center gap-8">
                    <a href="#"
                       className="uppercase tracking-wide text-sm font-semibold hover:text-gray-700">Projets</a>
                    <a href="#"
                       className="uppercase tracking-wide text-sm font-semibold hover:text-gray-700">Contact</a>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <a href="#" className="uppercase tracking-wide text-sm font-semibold hover:text-gray-700">Korentin</a>
                </div>
                <div className="flex-1 flex justify-end items-center gap-4">
                    <a href="https://github.com/kkorentin" aria-label="GitHub">
                        <GitHubIcon className="text-black hover:text-gray-700"/>
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <LinkedInIcon className="text-black hover:text-gray-700"/>
                    </a>
                </div>
            </div>
        </nav>
    );
}
