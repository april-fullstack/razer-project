'use client'
import Image from "next/image";
import Navbar from "./components/navbar";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { montserrat } from './components/font';
import { Logo, Thx, Chroma, Headset, Mouse, Keyboard, Nari, Cooling, Adjusting, Swiveling, Balance, Wireless, Twitter, Facebook, Google, Wired, Five, Six, Seven, Eight } from "../public/assets/images"
import { useRouter } from "next/navigation";
import Footer from "./components/footer";
import { useState } from "react";
import { StaticImageData } from "next/image";

const images = [Five, Six, Seven, Eight, Five, Six, Seven, Eight];
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Home() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // default for desktop
    slidesToScroll: 4,
    adaptiveHeight: true,
    customPaging: (i: number) => (
      <div className="w-4 h-4 rounded-full border-2 border-gray-500 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
      </div>
    ),
    dotsClass: "slick-dots custom-dot-class",
    responsive: [
      {
        breakpoint: 1024, // tablets & small laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [showMore, setShowMore] = useState(false);

  // Fullscreen state (basic example)
  const [fullscreenImage, setFullscreenImage] = useState<StaticImageData | null>(null);

  const router = useRouter();

  const handleClick = () => {
    router.push('#')
  }

  return (
    <main className={montserrat.className}>
      <div className="relative z-50 h-[80px]"> <Navbar /> </div>

      {/* MAIN BODY */}
      <section className="main-background pt-5 md:pt-15 min-h-auto md:min-h-[50vh] mx-auto">
        {/* Headings */}
        <div className="mt-0 max-w-[1200px] mx-auto">
          <p className="montserrat-bold mx-10 text-5xl lg:text-[65px] leading-snug md:leading-tight">
            SUPREME WIRELESS
          </p>
          <p className="montserrat-bold mx-10 text-5xl lg:text-[65px] leading-snug md:leading-tight">
            IMMERSION
          </p>
          <p className="montserrat-hairline text-[17px] mx-10 md:text-base lg:text-s leading-relaxed mt-4 md:w-[50%] lg:w-[47%]">
            When it comes to gaming immersion, sound plays a critical role. It
            engages your sense of hearing to determine the atmosphere and mood,
            creating a life like experience that lets you truly embody your game
            character. Standing by the philosophy, we've built a headset with THX
            Spatial Audio to bring you 360 positional sound, giving you greater spatial
            awareness. We've also added ergonomic design features to make this one
            of the most comfortable daily drivers for gaming. This is the Razer Nari.
          </p>
        </div>

        {/* Image row */}
        <div className="max-w-[1200px] mx-auto mt-6 flex flex-col md:flex-row md:justify-between items-start gap-6 pb-8 lg:pb-2">
          {/* Left side: THX + Chroma always on left */}
          <div className="flex space-x-4 mb-4 md:mb-0 ml-8 mr-10">
            <Image src={Thx} alt="THX" width={80} height={40} />
            <Image src={Chroma} alt="Chroma" width={80} height={108} />
          </div>

          {/* Right side: Nari */}
          <div className="hidden md:block">
            <Image
              src={Nari}
              alt="Razer Nari"
              width={300}
              height={170}
              className="w-48 sm:w-60 md:w-72 lg:w-[300px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* SECOND PART */}
      <section id="about-section" className="bg-[#111] pb-20">
        <div className="max-w-5xl mx-auto px-10 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center mb-10">
            <p className="text-green mb-5 text-[25px] montserrat-bold pt-10">
              COMPLEMENTED BY COMFORT
            </p>
            <p className="leading-loose montserrat-hairline tracking-wide text-sm text md:text-base max-w-2xl mx-auto">
              The Razer Nari is designed so that its immersive technology is
              complemented by comfortable features, letting you escape into game
              worlds for hours without strain.
            </p>
          </div>

          <div className="flex flex-col items-start sm:text-left px-6 md:px-0 tracking-widest md:tracking-wide">
            <Image src={Cooling} alt="" width={40} height={40} />
            <h5 className="mt-2 mb-1 montserrat-bold">
              COOLING GEL-INFUSED CUSHIONS
            </h5>
            <p className="montserrat-hairline text-sm">
              Reduces heat build-up during intense gaming sessions
            </p>
          </div>

          <div className="flex flex-col items-start sm:text-left px-6 md:px-0 tracking-widest md:tracking-wide">
            <Image src={Adjusting} alt="" width={40} height={40} />
            <h5 className="mt-2 mb-1 montserrat-bold">
              AUTO-ADJUSTING HEADBAND
            </h5>
            <p className="montserrat-hairline text-sm">
              Maximum adjustability to fit seamlessly onto any head size
            </p>
          </div>

          <div className="flex flex-col items-start sm:text-left px-6 md:px-0 tracking-widest md:tracking-wide">
            <Image src={Swiveling} alt="" width={40} height={40} />
            <h5 className="mt-2 mb-1 montserrat-bold">SWIVELING EARCUPS</h5>
            <p className="montserrat-hairline text-sm">
              Adapting to the shape and position of your ears
            </p>
          </div>

          <div className="flex flex-col items-start sm:text-left px-6 md:px-0 tracking-widest md:tracking-wide">
            <Image src={Balance} alt="" width={40} height={40} />
            <h5 className="mt-2 mb-1 montserrat-bold">GAME/CHAT BALANCE</h5>
            <p className="montserrat-hairline text-sm">
              Fine-tune between game and chat volume for the perfect mix that
              lets you enjoy immersive sound without interrupting team
              communication.
            </p>
          </div>

          <div className="flex flex-col items-start sm:text-left px-6 md:px-0 tracking-widest md:tracking-wide">
            <Image src={Wireless} alt="" width={40} height={40} />
            <h5 className="mt-2 mb-1 montserrat-bold">2.4GHZ WIRELESS AUDIO</h5>
            <p className="montserrat-hairline text-sm">
              Get lag-free, high-fidelity gaming audio with a wireless range of
              up to 12 meters smoothly without disconnection.
            </p>
          </div>

          <div className="flex flex-col items-start sm:text-left px-6 md:px-0 tracking-widest md:tracking-wide">
            <Image src={Wired} alt="" width={40} height={40} />
            <h5 className="mt-2 mb-1 montserrat-bold">WIRED MODE</h5>
            <p className="montserrat-hairline text-sm">
              Get seamless cross-platform compatibility via a 2.5 mm audio jack
              in wired mode. Enjoy high quality stereo sound whether you're
              playing on PC.
            </p>
          </div>
        </div>

        <hr className="hr-body" />

        <div className="items-center text-center mt-16">
          <p className="text-green mb-10 text-[25px] montserrat-bold">
            PRODUCT IMAGES
          </p>

          <div className="w-full max-w-5xl mx-auto px-6 relative pb-10 sm:overflow-x-visible overflow-x-hidden h-full">
            <Slider {...settings}>
              {images.map((imgSrc, idx) => (
                <div key={idx} className="relative group w-full sm:px-2 md:px-2 lg:px-2">
                  {/* Fullscreen button (appears on hover) */}
                  <div
                    className="absolute inset-0 flex items-center justify-center 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  >
                    <button
                      onClick={() => setFullscreenImage(imgSrc)}
                      className="bg-[#39ff14] hover:bg-[#23da03] px-6 py-2 md:px-8 md:py-3 text-xs md:text-sm  rounded-full uppercase 
                       tracking-wide transition-transform duration-200 transform hover:scale-105"
                    >
                      VIEW FULLSCREEN
                    </button>
                  </div>

                  {/* Image (darkens on hover) */}
                  <Image
                    src={imgSrc}
                    alt={`Product image ${idx + 1}`}
                    width={300}
                    height={300}
                    className="mx-auto brightness-100 group-hover:brightness-50 transition duration-300 
                     w-full h-auto max-w-[70%] sm:max-w-[340px] md:max-w-[300px] lg:max-w-[400px] object-contain"
                  />
                </div>
              ))}
            </Slider>

            {/* Fullscreen modal */}
            {fullscreenImage && (
              <div
                onClick={() => setFullscreenImage(null)}
                className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
              >
                <Image
                  src={fullscreenImage}
                  alt="Fullscreen product"
                  width={800}
                  height={800}
                  className="rounded max-w-[90%] max-h-[90%] object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* THIRD PART */}
      <section id="community-section" className="secondary-background py-15 lg:py-23 px-15 md:px-20">
        <div className="max-w-5xl mx-auto">

          {/* Text Content */}
          <h2 className="text-green text-2xl font-bold mb-4">
            THX SPATIAL AUDIO
          </h2>
          <p className="montserrat-hairline lg:w-[42%] text-base md:text-lg leading-relaxed tracking-widest mb-8">
            THX Spatial Audio goes beyond traditional surround sound by simulating
            sound in a 360° sphere around you. With the Nari Ultimate, you can now
            react to any in-game movement, even if it’s coming from above or beneath
            you, giving you heightened senses during your game. Unleash your predatory
            instincts with sound as a weapon.
          </p>

          {/* Responsive THX Logo */}
          <Image
            src={Thx}   // ← your THX logo
            alt="THX Logo"
            width={150}   // desktop size
            height={75}
            className="md:w-[150px] w-[80px] h-auto opacity-90 hidden sm:block"
          />
        </div>
      </section>

      {/* FOURTH PART */}
      <section className="bg-[#111] py-10 md:py-30">
        <p className="text-green text-[25px] montserrat-bold text-center px-20 lg:px-0 tracking-widest">EXPLORE OTHER PRODUCTS</p>

        <div className="mx-auto w-[90%] sm:w-[80%] lg:w-[65%] pt-7 md:pt-20 
                  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-6">

          {/* Product 1 */}
          <div className="shadow-2xl border-b-3 border-[#39ff14] mx-auto bg-[#222]">
            <div className="relative inline-block bg-black">
              <Image src={Headset} alt="" width={300} height={300} />
              <Image src={Chroma} alt="Chroma logo" width={50} height={50} className="absolute bottom-2 right-2" />
            </div>
            <div className="ml-3 pb-2">
              <p className="motserrat-bold my-1 tracking-wide">RAZER NARI ULTIMATE</p>
              <p className="montserrat-hairline text-xs mb-3 w-[75%]">Wireless Gaming Headset with Razer HyperSense</p>
              <button className="montserrat-regular btn-class text-green btn-learn text-xs mb-2">LEARN MORE</button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="shadow-2xl border-b-3 border-[#39ff14] mx-auto bg-[#222]">
            <div className="relative inline-block bg-black">
              <Image src={Headset} alt="" width={300} height={300} />
              <Image src={Chroma} alt="Chroma logo" width={50} height={50} className="absolute bottom-2 right-2" />
            </div>
            <div className="ml-3 pb-2">
              <p className="motserrat-bold my-1 tracking-wide">RAZER NARI</p>
              <p className="montserrat-hairline text-xs mb-3 w-[75%]">Wired Gaming Headset with Razer Hypersense</p>
              <button className="montserrat-regular btn-class text-green btn-learn text-xs mb-2">LEARN MORE</button>
            </div>
          </div>

          {/* Product 3 */}
          <div className={`shadow-2xl border-b-3 border-[#39ff14] mx-auto bg-[#222] ${showMore ? '' : 'hidden md:block'}`}>
            <div className="relative inline-block bg-black">
              <Image src={Mouse} alt="" width={300} height={300} />
              <Image src={Chroma} alt="Chroma logo" width={50} height={50} className="absolute bottom-2 right-2" />
            </div>
            <div className="ml-3 pb-2">
              <p className="motserrat-bold my-1 tracking-wide">RAZER MAMBA WIRELESS</p>
              <p className="montserrat-hairline text-xs mb-3 w-[75%]">Full Razer Chroma and Wireless Convenience</p>
              <button className="montserrat-regular btn-class text-green btn-learn text-xs mb-2">LEARN MORE</button>
            </div>
          </div>

          {/* Product 4 */}
          <div className={`shadow-2xl border-b-3 border-[#39ff14] mx-auto bg-[#222] ${showMore ? '' : 'hidden lg:block'}`}>
            <div className="relative inline-block bg-black">
              <Image src={Keyboard} alt="" width={300} height={300} />
              <Image src={Chroma} alt="Chroma logo" width={50} height={50} className="absolute bottom-2 right-2" />
            </div>
            <div className="ml-3 pb-2">
              <p className="motserrat-bold my-1 tracking-wide">RAZER BLACKWIDOW ELITE</p>
              <p className="montserrat-hairline text-xs mb-3 w-[75%]">The Complete Mechanical Gaming Keyboard</p>
              <button className="montserrat-regular btn-class text-green btn-learn text-xs mb-2">LEARN MORE</button>
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="uppercase bg-[#39ff14] hover:bg-[#23da03] text-black rounded-full px-10 py-3 text-sm lg:hidden"
          >
            {showMore ? "View Less Products" : "View More Products"}
          </button>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact-section" className="relative bg-black py-13">
        <div className="relative z-10 max-w-5xl mx-auto px-9 flex flex-col lg:flex-row gap-10">

          {/* Left Form */}
          <div className="w-full lg:w-2/3 lg:pr-20 px-5">
            <p className="text-green montserrat-bold text-[25px] mb-10 text-center lg:text-left">
              ASK A QUESTION
            </p>
            <form className="space-y-6 w-full lg:w-[90%] mx-auto lg:mx-0">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 border border-white text-white text-xs px-4 py-3 rounded-md focus:outline-none focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="flex-1 border border-white text-white text-xs px-4 py-3 rounded-md focus:outline-none focus:border-green-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-white text-white text-xs px-4 py-3 rounded-md focus:outline-none focus:border-green-500"
              />
              <input
                type="text"
                placeholder="Permanent Address"
                className="w-full border border-white text-white text-xs px-4 py-3 rounded-md focus:outline-none focus:border-green-500"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border border-white text-white text-xs px-4 py-3 rounded-md resize-none focus:outline-none focus:border-green-500"
              ></textarea>
              <button
                type="submit"
                className="montserrat-bold text-xs bg-[#39ff14] hover:bg-[#23da03] text-black px-15 py-3 rounded-full w-full md:w-auto"
              >
                SEND
              </button>
            </form>
          </div>

          {/* Right Information */}
          <div className="w-full lg:w-1/3 text-left ">
            <p className="text-green text-[25px] montserrat-bold mb-10 mt-8 md:mt-0 text-center lg:text-left">INFORMATION</p>

            <div className="mb-6 lg:mb-8 lg:pl-0 pl-5 text-sm lg:text-[13px]">
              <p className="montserrat-bold tracking-wide mb-1 lg:mb-2">ADDRESS</p>
              <p className="montserrat-light text-[#c2bfbf] tracking-wider">123 East 123th St.</p>
              <p className="montserrat-light text-[#c2bfbf] tracking-wider">Floor 123</p>
              <p className="montserrat-light text-[#c2bfbf] tracking-wider">New York, NY, 10003</p>
            </div>

            <div className="mb-6 lg:mb-8 lg:pl-0 pl-5 text-sm lg:text-[13px]">
              <p className="montserrat-bold tracking-wide mb-1 lg:mb-2">PHONE</p>
              <p className="montserrat-light text-[#c2bfbf] tracking-wider">+1 234 567-8910</p>
            </div>

            <div className="mb-6 lg:mb-8 lg:pl-0 pl-5 text-sm lg:text-[13px]">
              <p className="montserrat-bold tracking-wide mb-1 lg:mb-2">EMAIL</p>
              <p className="montserrat-light text-[#c2bfbf] tracking-wider">hello@fullstack.com</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#111]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pl-15 md:pl-0 pr-3 pt-2 pb-3 overflow-x-auto max-w-[1100px] mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0 pl-0 md:pl-10">
            <Image src={Logo} alt="Logo" width={180} height={100} className="w-[180px] h-[100px]" />
          </div>

          {/* Navigation */}
          <div className="whitespace-nowrap flex flex-col md:flex-row justify-start items-start md:items-center 
            gap-2 md:gap-4 space-x-4 text-xs montserrat-bold tracking-widest text-[gray] mb-4 md:mb-0 space-y-3 md:space-y-0">
            <a href="#">PRODUCTS</a>
            <a href="#">ABOUT</a>
            <a href="#">COMMUNITY</a>
            <a href="#">CONTACT US</a>
          </div>

          {/* Social Icons */}
          <div className="flex-shrink-0 flex gap-x-5 mt-4 md:mt-0 mb-5 md:mb-0">
            <Image src={Twitter} alt="Twitter" width={15} height={20} />
            <Image src={Facebook} alt="Facebook" width={14} height={18} />
            <Image src={Google} alt="Google" width={20} height={20} />
          </div>
        </div>

        {/* Responsive HR */}
        <div className="bg-[#111] w-full flex justify-center">
          <hr className="border-[#555] w-full lg:max-w-[1150px] m-0" />
        </div>
      </section>

      <div className="relative bg-[#111] py-5 md:py-3 pr-3 md:pr-0">
        <Footer />
      </div>
    </main >
  );
}
