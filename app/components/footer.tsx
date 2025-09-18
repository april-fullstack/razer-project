import React from 'react'
import Image from 'next/image'
import { montserrat } from './font';
import Logo from '../../public/images/SVG/wordmark.svg'


const Footer = () => {
    return (
        <footer className={montserrat.className}>
            <div className="text-[#555] montserrat-light text-[12px] md:text-[10px] px-15 md:px-5 md:text-center tracking-widest
                ">
                <p>COPYRIGHT &copy; 2019 FULLSTACKHQ INC. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    )
}

export default Footer