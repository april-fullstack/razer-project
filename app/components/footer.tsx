import React from "react";
import { montserrat } from "./font";
import { Logo, Twitter, Facebook, Google } from "../../public/assets/images"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={montserrat.className}>
      <section className="bg-[#111]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pl-15 md:pl-0 pr-3 pt-2 pb-3 overflow-x-auto max-w-[1100px] mx-auto">

          <div className="flex-shrink-0 pl-0 md:pl-10">
            <Image src={Logo} alt="Logo" width={180} height={100} className="w-[180px] h-[100px]" />
          </div>

          <div className="whitespace-nowrap flex flex-col md:flex-row justify-start items-start md:items-center 
            gap-2 md:gap-4 space-x-4 text-xs montserrat-bold tracking-widest text-[gray] mb-4 md:mb-0 space-y-3 md:space-y-0">
            <a href="#">PRODUCTS</a>
            <a href="#">ABOUT</a>
            <a href="#">COMMUNITY</a>
            <a href="#">CONTACT US</a>
          </div>

          <div className="flex-shrink-0 flex gap-x-5 mt-4 md:mt-0 mb-5 md:mb-0">
            <Image src={Twitter} alt="Twitter" width={15} height={20} />
            <Image src={Facebook} alt="Facebook" width={14} height={18} />
            <Image src={Google} alt="Google" width={20} height={20} />
          </div>
        </div>

        <div className="bg-[#111] w-full flex justify-center">
          <hr className="border-[#555] w-full lg:max-w-[1150px] m-0" />
        </div>
      </section>

      <div
        className="text-[#555] montserrat-light text-[12px] md:text-[10px] pt-5 lg:pt-0 px-15 md:px-5 md:text-center tracking-widest
                "
      >
        <p>COPYRIGHT &copy; 2019 FULLSTACKHQ INC. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
