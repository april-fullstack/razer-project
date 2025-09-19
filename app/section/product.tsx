import { Button } from "../components/button";
import { Card } from "../components/card";
import { StaticImageData } from "next/image";
import { useState } from "react";

export default function ProductsSection({
  Headset,
  Mouse,
  Keyboard,
  Chroma,
}: {
  Headset: StaticImageData;
  Mouse: StaticImageData;
  Keyboard: StaticImageData;
  Chroma: StaticImageData;
}) {
  // 👇 this is what controls the button
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-[#111] py-10 md:py-30">
      <p className="text-green text-[25px] montserrat-bold text-center px-20 lg:px-0 tracking-widest">
        EXPLORE OTHER PRODUCTS
      </p>

      <div
        className="mx-auto w-[90%] sm:w-[80%] lg:w-[65%] pt-7 md:pt-20 
                  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-6"
      >
        <Card
          image={Headset}
          logo={Chroma}
          title="RAZER NARI ULTIMATE"
          description="Wireless Gaming Headset with Razer HyperSense"
        />
        <Card
          image={Headset}
          logo={Chroma}
          title="RAZER NARI"
          description="Wired Gaming Headset with Razer Hypersense"
        />
        <Card
          image={Mouse}
          logo={Chroma}
          title="RAZER MAMBA WIRELESS"
          description="Full Razer Chroma and Wireless Convenience"
          hiddenClass={showMore ? "" : "hidden md:block"}
        />
        <Card
          image={Keyboard}
          logo={Chroma}
          title="RAZER BLACKWIDOW ELITE"
          description="The Complete Mechanical Gaming Keyboard"
          hiddenClass={showMore ? "" : "hidden lg:block"}
        />
      </div>

      <div className="text-center mt-6">
        <Button
          variant="action"
          onClick={() => setShowMore(!showMore)}
          className="px-10 py-3 mx-auto lg:hidden"
        >
          {showMore ? "View Less Products" : "View More Products"}
        </Button>
      </div>
    </section>
  );
}