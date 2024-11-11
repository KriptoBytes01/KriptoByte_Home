"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { metadata } from "./head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./globals.css";
import Image from "next/image";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-30"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Navbar */}
        <header
          className={`fixed top-0 w-full p-4 transition-all duration-300 z-50 ${
            isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"
          }`}
        >
          <nav className="container mx-auto flex justify-between items-center px-4 py-3">
            <div className="flex items-center space-x-2 text-2xl font-semibold">
              <Image width={100} height={100} src="/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
              <Link href="/">Kripto<span className="text-teal-500">Bytes</span></Link>
            </div>
            <ul className="flex space-x-6 relative">
              {/* Services Dropdown */}
              <li className="group relative">
                <Link
                  href="/services"
                  className="hover:border-b-4 hover:border-teal-500 pb-3"
                >
                  Services
                </Link>
                <div className="dropdown-menu hidden group-hover:flex absolute hover:block top-full left-0 w-full bg-black bg-opacity-90 text-white mt-2 p-6 flex-col md:flex-row rounded-md !important">
                  <div className="w-full md:w-1/2">
                    <Link href="/web-development" className="hover:text-teal-400 block">Web Development</Link>

                    {/* Mobile App Item with Nested Dropdown */}
                    <div className="relative group">
                      <Link href="/mobile-app" className="hover:text-teal-400 block mt-2">Mobile App</Link>
                      
                      {/* Nested Dropdown */}
                      <div className="nested-dropdown hidden group-hover:flex flex-col absolute top-0 left-full w-48 bg-black bg-opacity-90 text-white p-4 rounded-md space-y-2">
                        <Link href="/languages/swift" className="hover:text-teal-400">Swift</Link>
                        <Link href="/languages/kotlin" className="hover:text-teal-400">Kotlin</Link>
                        <Link href="/languages/react-native" className="hover:text-teal-400">React Native</Link>
                        <Link href="/languages/flutter" className="hover:text-teal-400">Flutter</Link>
                      </div>
                    </div>

                    <Link href="/cloud-services" className="hover:text-teal-400 block mt-2">Cloud Services</Link>
                  </div>

                 
                  <div className="hidden md:block w-full md:w-1/2 pl-4">
                    <p className="text-gray-300">
                      Choose from our range of expert services to boost your business and streamline processes.
                    </p>
                  </div>
                </div>
              </li>

              {/* Industries Dropdown */}
              <li className="group relative">
                <Link
                  href="/industries"
                  className="hover:border-b-4 hover:border-teal-500 pb-3"
                >
                  Industries
                </Link>
                <div className="dropdown-menu hidden group-hover:flex absolute top-full left-0 w-full bg-black bg-opacity-90 text-white mt-2 p-6 flex-col md:flex-row rounded-md">
                  <div className="w-full md:w-1/2">
                    <Link href="/healthcare" className="hover:text-teal-400 block">Healthcare</Link>
                    <Link href="/finance" className="hover:text-teal-400 block mt-2">Finance</Link>
                    <Link href="/education" className="hover:text-teal-400 block mt-2">Education</Link>
                  </div>
                  <div className="hidden md:block w-full md:w-1/2 pl-4">
                    <p className="text-gray-300">
                      Solutions tailored to meet the demands of various industries.
                    </p>
                  </div>
                </div>
              </li>

              {/* Solutions Dropdown */}
              <li className="group relative">
                <Link
                  href="/solutions"
                  className="hover:border-b-4 hover:border-teal-500 pb-3"
                >
                  Solutions
                </Link>
                <div className="dropdown-menu hidden group-hover:flex absolute top-full left-0 w-full bg-black bg-opacity-90 text-white mt-2 p-6 flex-col md:flex-row rounded-md">
                  <div className="w-full md:w-1/2">
                    <Link href="/ai-solutions" className="hover:text-teal-400 block">AI Solutions</Link>
                    <Link href="/iot-solutions" className="hover:text-teal-400 block mt-2">IoT Solutions</Link>
                    <Link href="/blockchain" className="hover:text-teal-400 block mt-2">Blockchain</Link>
                  </div>
                  <div className="hidden md:block w-full md:w-1/2 pl-4">
                    <p className="text-gray-300">
                      Discover innovative solutions to enhance productivity and efficiency.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <Link href="/about" className="hover:border-b-4 hover:border-teal-500 pb-3">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:border-b-4 hover:border-teal-500 pb-3">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:border-b-4 hover:border-teal-500 pb-3">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:border-b-4 hover:border-teal-500 pb-3">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-2">
              <Link href="/explore">Explore</Link>
              <Link href="/search" aria-label="Search">
                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
              </Link>
            </div>
          </nav>
        </header>

        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
