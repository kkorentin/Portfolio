import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="w-full bg-white ">
            <div className="relative flex items-center max-w-screen-xl h-16 mx-auto px-4">
                <div className="flex-1 flex items-center gap-8">
                    <Link href="/" className="uppercase tracking-wide text-sm font-semibold hover:text-gray-700">Accueil</Link>
                    <Link href="/experience"
                          className="uppercase tracking-wide text-sm font-semibold hover:text-gray-700" >Experiences</Link>
                    <Link href="/about"
                          className="uppercase tracking-wide text-sm font-semibold hover:text-gray-700">A Propos</Link>
                </div>
                <div className="flex-1 flex justify-end items-center gap-4">
                    <div className="flex justify-end items-center gap-3 w-24">
                        <a href="https://github.com/kkorentin" aria-label="GitHub" target="_blank"
                           rel="noopener noreferrer">
                            <img src="/icons8-github.svg" alt="GitHub" className="h-6 w-6 hover:opacity-70"/>
                        </a>
                        <a href="www.linkedin.com/in/korentin-kolaczek" aria-label="LinkedIn" target="_blank"
                           rel="noopener noreferrer">
                            <img src="/icons8-linkedin.svg" alt="LinkedIn" className="h-6 w-6 hover:opacity-70"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
