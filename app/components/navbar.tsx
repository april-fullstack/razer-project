"use client";
import Image from "next/image";
import Link from "next/link";
import { Key, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import Logo from "../../public/images/SVG/wordmark.svg";
import { montserrat } from "./font";
import { Button } from "./button"

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuLevel, setMenuLevel] = useState<"main" | "products" | "headsets">(
    "main"
  );
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const productItems = [
    { label: "Laptops", href: "#", id: '0' },
    { label: "Mobiles", href: "#", id: '1'   },
    { label: "Mouse & Mats", href: "#", id: '2'   },
    { label: "Keyboards", href: "#", id: '3'   },
    { label: "HEADSET & AUDIO", id: '4', 
      isSubmenu: true,
      submenu: [
        { label: "WIRELESS", href: "#", id: '5'  },
        { label: "WIRED", href: "#", id: '6'  },
      ], 
    },
    { label: "Console", href: "#", id: '7'   },
  ];

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
          />{" "}
        </Link>

        {/* Right Side */}
        <div className="pl-5 hidden lg:flex">
          <ul className="whitespace-nowrap hidden sm:flex text-white items-center gap-x-8 lg:gap-x-10 mr-5">
            {/* Products with Dropdown */}
            <li className="uppercase relative">
              <Button
                variant="nav"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                icon={<IoIosArrowDown className={dropdownOpen ? "rotate-180" : ""} />}
                className="cursor-pointer">
                PRODUCTS
              </Button>

              {dropdownOpen && (
                <ul className="absolute top-full mt-8 bg-black text-white shadow-lg rounder w-50 z-50">
                  {productItems.map((item) =>
                    item.isSubmenu ? ( 
                      <li key={item.id} className="relative">
                        <Button
                          variant="submenu"
                          onClick={() => setSubMenuOpen(!subMenuOpen)}
                          icon={<IoIosArrowForward className={subMenuOpen ? "rotate-180" : ""} />}
                          className="px-3"
                        >
                          {item.label}
                        </Button>
                        {subMenuOpen && (
                          <ul className="absolute left-full top-0 mt-0 ml-1 w-48 bg-black text-white shadow-lg">
                            {item.submenu?.map((sub) => (
                              <li key={sub.id}>
                                <Link href={sub.href} className="navigation">
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <li key={item.id}>
                        <Link href={item.href || "#"} className="navigation">
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
            <Link href="\"> <li className="main-link-color">About</li></Link>
            <Link href="\"><li className="main-link-color">Community</li></Link>
            <Link href="\"><li className="main-link-color">Contact Us</li></Link>
          </ul>
          <button className="uppercase bg-[#39ff14] hover:bg-[#23da03] text-black rounded-full px-10 py-3 text-sm whitespace-nowrap">
            BUY NOW
          </button>
        </div>

        {/* MOBILE VIEW */}
        <div
          onClick={handleNav}
          className="block lg:hidden cursor-pointer pl-24"
        >
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
          <ul className="submenu gap-y-8">
            <div className="flex justify-between items-center pb-8">
              <li>Menu</li>
              <div
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              >
                <AiOutlineClose size={25} color="gray" />
              </div>
            </div>
            <li>
              <Button
                variant="submenu" onClick={() => setMenuLevel("products")} icon={<IoIosArrowForward />} className="px-0">
                PRODUCTS
              </Button>
            </li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Community</Link></li>
            <li><Link href="/">Contact Us</Link></li>
            <li>
              <Button variant="action" className="py-3 w-full max-w-[600px] mx-auto block text-center justify-center">
                Buy Now
              </Button>
            </li>
          </ul>
        )}

        {menuLevel === "products" && (
          <ul className="submenu">
            <div className="flex justify-between items-center pb-8">
              <button
                onClick={() => setMenuLevel("main")}
                className="flex items-center gap-2"
              >
                <IoIosArrowBack /> PRODUCTS
              </button>
              <div
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              >
                <AiOutlineClose size={25} color="gray" />
              </div>
            </div>
            {productItems.map((item) =>
              item.isSubmenu ? (
                <li key={item.id}>
                  <button
                    onClick={() => setMenuLevel("headsets")}
                    className="flex justify-between items-center w-full"
                  >
                    {item.label} <IoIosArrowForward />
                  </button>
                </li>
              ) : (
                <li key={item.id}>
                  <Link href={item.href || "#"}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
        )}

        {menuLevel === "headsets" && (
          <ul className="submenu">
            <div className="flex justify-between items-center pb-8">
              <button
                onClick={() => setMenuLevel("products")}
                className="flex items-center gap-2"
              >
                <IoIosArrowBack /> HEADSETS & AUDIO
              </button>
              <div
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              >
                <AiOutlineClose size={25} color="gray" />
              </div>
            </div>
            {productItems
              .find((i) => i.isSubmenu)?.submenu?.map((sub) => (
                <li key={sub.id}>
                  <Link href={sub.href}>{sub.label}</Link>
                </li>
              ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
