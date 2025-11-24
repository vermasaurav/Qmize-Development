







import React, { useRef, useState } from "react";
import Fb from "../../assets/Icons/facebook.png";
import Google from "../../assets/Icons/search.png";
import Star from "../../assets/Icons/star.png";
import WhatsApp from "../../assets/Icons/whatsapp.png";
import Meta from "../../assets/Icons/meta.png";
import Logo1 from "../../assets/Icons/brand1.png"
import Logo2 from "../../assets/Icons/brand2.png"
import Logo3 from "../../assets/Icons/brand3.png"
import Logo4 from "../../assets/Icons/brand4.png"
import Logo5 from "../../assets/Icons/brand5.png"
import Logo6 from "../../assets/Icons/brand6.png"
import Logo7 from "../../assets/Icons/brand7.png"
import Logo8 from "../../assets/Icons/brand8.png"
import Video from "../../assets/Videos/videoAD.mp4"


const HeroSection = () => {

   const logos = [
    Logo1, Logo2, Logo3, Logo4,
    Logo5, Logo6, Logo7, Logo8,
  ];


    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  

  return (
    <>
    <section className="relative w-full bg-gradient-to-br from-green-100 via-white to-green-300 pb-28 pt-16 overflow-hidden">

      {/* Animated Floating Icons (Left & Right) */}
      <img
        src={Google}
        alt="google"
        className="hidden sm:block absolute left-2 top-[45%] w-6 sm:w-8 opacity-80 animate-float"
      />

      <img
        src={Fb}
        alt="fb"
        className="hidden sm:block absolute right-3 top-[40%]   w-6 sm:w-10 opacity-90 animate-floatSlow"
      />
      <img
        src={Meta}
        alt="fb"
        className="hidden sm:block absolute left-72 top-[70%] w-6 sm:w-10 opacity-90 animate-floatSlow"
      />
      <img
        src={WhatsApp}
        alt="fb"
        className="hidden sm:block absolute right-72 top-[70%] w-6 sm:w-10 opacity-90 animate-floatSlow"
      />

      {/* MAIN CONTAINER */}
      <div className="max-w-5xl mx-auto text-center px-4">

        {/* TOP BADGE */}
        <div className="flex justify-center mb-6 animate-fadeIn">
          <span className="px-4 py-1 border border-[#CDEEC7] rounded-full bg-white shadow text-[11px] sm:text-[13px] text-[#1b1b1b] font-medium flex items-center gap-2">
            <img src={Star} alt="spark" className="w-3 sm:w-4" />
            DIGITAL MARKETING COMPANY
          </span>
        </div>

        {/* MAIN HEADING */}
        <h1 className="text-[30px] sm:text-[40px] md:text-[58px] font-bold leading-[1.2] text-[#111] animate-slideUp">

          Reimagine the{" "}

         <span className="relative inline-block px-2 mx-1 highlight-wrap">
  <span className="highlight-bg"></span>
  <span className="green-glow"></span>
  <span className="relative z-10">Future of Marketing</span>
</span>


          <br />

          With{" "}

          <span className="relative inline-block px-2 mx-1 highlight-wrap mr-0 md:mr-25">
  <span className="highlight-bg"></span>
  <span className="green-glow"></span>
  <span className="relative z-10">Qmize</span>
</span>

        </h1>

        {/* UNDER ICONS */}
        <div className="flex justify-center gap-10 mt-6 text-3xl sm:text-4xl animate-fadeInSlow">
          <i className="fa-brands fa-whatsapp text-[#1cd260]"></i>
          <i className="fa-brands fa-meta text-[#316FF6]"></i>
        </div>

        {/* SUB-TEXT */}
        <p className="text-[#6b6b6b] mt-4 text-[15px] sm:text-[18px] max-w-lg mx-auto animate-fadeIn">
          Empowering Brands Through Data, AI, and Human Creativity.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-8 animate-slideUp">
          <button className="bg-[#20D235] text-white px-6 sm:px-7 py-2.5 sm:py-1.5 rounded-full shadow font-semibold hover:scale-[1.05] transition-all">
            Get Started
          </button>

          <button className="border border-green-700 px-6 sm:px-7 py-2.5 sm:py-1.5 rounded-full shadow font-semibold text-gray-800 hover:bg-gray-100 transition-all">
            Book Demo
          </button>
        </div>
      </div>

      {/* THIN GREEN CURVED BORDER */}
      <div className="absolute bottom-0 left-0 right-0">
  <svg
    className="w-full"
    viewBox="0 0 1440 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 20 C 420 60 1020 -10 1440 30 L1440 60 L0 60 Z"
      fill="url(#g1)"
    />
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1440" y2="0">
        <stop offset="0%" stopColor="#6DFF57" />
        <stop offset="100%" stopColor="#19D63A" />
      </linearGradient>
    </defs>
  </svg>
</div>

    </section>










    <section className="w-full bg-white pt-10 pb-5">

  {/* Heading */}
  <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800 mb-8">
    Join <span className="text-emerald-600 font-bold">10,000+</span> customers around the world who trust{" "}
    <span className="text-emerald-700 font-bold">Qmize</span>
  </h2>

  {/* Green Background Line */}
  <div className="w-full py-4 overflow-hidden">
    
    {/* MARQUEE CONTAINER */}
    <div className="flex items-center gap-24 animate-marquee whitespace-nowrap">

      {logos.concat(logos).map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="client-logo"
          className="w-20 sm:w-24 md:w-28 object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all"
        />
      ))}

    </div>
  </div>

</section>









      <section className="w-full py-16 bg-white">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-emerald-800 mb-8 px-4">
        Experience How Qmize Transforms Marketing With Smart Automation 🚀
      </h2>

      {/* Video Wrapper */}
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="relative group rounded-xl overflow-hidden shadow-lg">
          {/* Video */}
          <video
            ref={videoRef}
            className="w-full rounded-xl transition-all duration-300 group-hover:brightness-105"
          >
            <source src={Video} type="video/mp4" />
          </video>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="
              absolute inset-0 m-auto
              w-16 h-16 md:w-20 md:h-20 
              bg-white/70 backdrop-blur-md
              rounded-full flex items-center justify-center
              shadow-xl border border-emerald-300
              transition-all duration-300
              hover:scale-110 hover:bg-white
              animate-fadeIn
            "
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-emerald-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-emerald-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* Caption */}
        <p className="text-center text-gray-600 text-sm md:text-base mt-4">
          Watch how businesses like yours achieve faster, smarter, automated marketing wins.
        </p>
      </div>
    </section>


    </>
  );
};

export default HeroSection;


