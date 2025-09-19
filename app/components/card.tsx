import Image from 'next/image'
import React from 'react'
import {Headset, Chroma, Mouse, Keyboard} from "../../public/assets/images"
import { Button } from "./button"

type ProductCardProps = {
  image: any;
  logo: any;
  title: string;
  description: string;
  hiddenClass?: string;
}

export function Card({
  image,
  logo,
  title,
  description,
  hiddenClass,
}: ProductCardProps) {

  return (
     <div
    className={`shadow-2xl border-b-3 border-[#39ff14] mx-auto bg-[#222] ${
      hiddenClass || ""
    }`}
  >
      <div className="relative inline-block bg-black">
        <Image src={image} alt={title} width={300} height={300} />
        <Image
          src={logo}
          alt="Chroma logo"
          width={50}
          height={50}
          className="absolute bottom-2 right-2"
        />
      </div>
      <div className="ml-3 pb-2">
        <p className="montserrat-bold my-1 tracking-wide">{title}</p>
        <p className="montserrat-hairline text-xs mb-3 w-[75%]">
          {description}
        </p>
        <button className="montserrat-regular btn-class text-green btn-learn text-xs mb-2">
          LEARN MORE
        </button>
      </div>
    </div>
  )
}