'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../public/images/SVG/wordmark.svg'
import { montserrat } from './font';
import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuLevel, setMenuLevel] = useState<"main" | "products" | "headsets">("main");

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`${montserrat.className} bg-[#111]`}>
            <div className="flex justify-between items-center h-20 w-full px-6 md:px-10 lg:px-20 z-50 bg-[#111] max-w-[1300px] mx-auto">
                {/* Left Side */}
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width="205"
                        height="100"
                        className="cursor-pointer min-w-[150px] h-auto"
                        priority
                    /> </Link>

                {/* Right Side */}
                <div className="pl-5 hidden lg:flex">
                    <ul className="whitespace-nowrap hidden sm:flex text-white items-center gap-x-8 lg:gap-x-10 mr-5">

                        {/* Products with Dropdown */}
                        <li className="uppercase relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="cursor-pointer text-sm flex items-center gap-1 focus:outline-none hover:text-[#39ff14]"> PRODUCTS
                                <IoIosArrowDown className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {dropdownOpen && (
                                <ul className="absolute top-full mt-8 bg-black text-white shadow-lg rounder w-50 z-50">
                                    <li>
                                        <Link href="#" className="block px-3 py-2 hover:text-[#39ff14]">
                                            LAPTOPS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="block px-3 py-2 hover:text-[#39ff14]">
                                            MOBILES
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="block px-3 py-2 hover:text-[#39ff14]">
                                            MOUSE & MATS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="block px-3 py-2 hover:text-[#39ff14]">
                                            KEYBOARDS
                                        </Link>
                                    </li>
                                    <li className="relative">
                                        <button
                                            onClick={() => setSubMenuOpen(!subMenuOpen)}
                                            className="w-full text-left px-3 py-2 hover:text-[#39ff14] flex justify-between items-center"
                                        >
                                            HEADSET & AUDIO
                                            <IoIosArrowForward
                                                className={`ml-2 transition-transform duration-200 ${subMenuOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>

                                        {subMenuOpen && (
                                            <ul className="absolute left-full top-0 mt-0 ml-1 w-48 bg-black text-white shadow-lg">
                                                <li>
                                                    <Link href="#" className="block px-3 py-2 hover:text-[#39ff14]">
                                                        WIRELESS
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="block px-3 py-2 hover:text-[#39ff14]">
                                                        WIRED
                                                    </Link>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <Link href="#" className="block px-3 py-2 hover:text-[#39ff14]">
                                            CONSOLE
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <Link href="\">
                            <li className="uppercase text-sm hover:text-[#39ff14]">About</li>
                        </Link>
                        <Link href="\">
                            <li className="uppercase text-sm hover:text-[#39ff14]">Community</li>
                        </Link>
                        <Link href="\">
                            <li className="uppercase text-sm hover:text-[#39ff14]">Contact Us</li>
                        </Link>

                    </ul>
                    <button className="uppercase bg-[#39ff14] hover:bg-[#23da03] text-black rounded-full px-10 py-3 text-sm whitespace-nowrap">BUY NOW</button>
                </div>
                <div onClick={handleNav} className="block lg:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} color="white" />
                </div>
            </div>

            <div
                className={`
                            fixed top-0 h-screen bg-[#111] z-50 ease-in duration-300 
                            ${menuOpen ? "translate-x-0" : "translate-x-full"} 
                            w-full sm:w-1/2 lg:hidden right-0 px-10 py-4
                            montserrat-regular
                        `}
            >
                {menuLevel === "main" && (
                    <ul className="flex flex-col gap-6 text-gray-500 uppercase text-xl gap-y-8">
                        <div className="flex justify-between items-center pb-8">
                            <li>Menu</li>
                            <div onClick={() => setMenuOpen(false)} className="cursor-pointer">
                                <AiOutlineClose size={25} color="gray" />
                            </div>
                        </div>
                        <li>
                            <button onClick={() => setMenuLevel("products")} className="flex justify-between items-center w-full" >
                                PRODUCTS <IoIosArrowForward />
                            </button>
                        </li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Community</Link></li>
                        <li><Link href="/">Contact Us</Link></li>
                        <li>
                            <button className="uppercase bg-[#39ff14] hover:bg-[#23da03] text-black rounded-full px-10 py-3 text-sm w-[98%]">
                                Buy Now
                            </button>
                        </li>
                    </ul>
                )}

                {menuLevel === "products" && (
                    <ul className="flex flex-col gap-6 text-gray-500 uppercase text-xl">
                        <div className="flex justify-between items-center pb-8">
                            <button onClick={() => setMenuLevel("main")} className="flex items-center gap-2">
                                <IoIosArrowBack /> PRODUCTS
                            </button>
                            <div onClick={() => setMenuOpen(false)} className="cursor-pointer">
                                <AiOutlineClose size={25} color="gray" />
                            </div>
                        </div>
                        <li><Link href="#">Laptops</Link></li>
                        <li><Link href="#">Mobiles</Link></li>
                        <li><Link href="#">Mouses & Mats</Link></li>
                        <li><Link href="#">Keyboards</Link></li>
                        <li>
                            <button onClick={() => setMenuLevel("headsets")} className="flex justify-between items-center w-full">
                                HEADSETS & AUDIO <IoIosArrowForward />
                            </button>
                        </li>
                        <li><Link href="#">Console</Link></li>
                    </ul>
                )}

                {menuLevel === "headsets" && (
                    <ul className="flex flex-col gap-6 text-gray-500 uppercase text-xl">
                        <div className="flex justify-between items-center pb-8">
                            <button onClick={() => setMenuLevel("products")} className="flex items-center gap-2">
                                <IoIosArrowBack /> HEADSETS & AUDIO
                            </button>
                            <div onClick={() => setMenuOpen(false)} className="cursor-pointer">
                                <AiOutlineClose size={25} color="gray" />
                            </div>
                        </div>
                        <li><Link href="#">Wireless</Link></li>
                        <li><Link href="#">Wired</Link></li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar