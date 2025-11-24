import React from 'react'
import group from "../../assets/Images/Group.png"
import group2 from "../../assets/Images/Group2.png"
import group3 from "../../assets/Images/Group3.png"

const AboutHeroSec = () => {
  return (
    <>
    
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-green-500 via-green-50 to-green-300 py-24 md:py-32">

  {/* LEFT TOP CIRCLE SVG */}
  <img
    src={group}
    alt="Decor"
    className="absolute top-4 left-0 w-28 md:w-40 opacity-80 pointer-events-none select-none"
  />

  {/* RIGHT TOP LINES SVG */}
  <img
    src={group2}
    alt="Decor"
    className="absolute top-6 right-4 w-20 md:w-32 opacity-80 pointer-events-none select-none"
  />

  {/* RIGHT BOTTOM CIRCLE SVG */}
  <img
    src={group3}
    alt="Decor"
    className="absolute bottom-4 right-2 w-28 md:w-40 opacity-80 pointer-events-none select-none"
  />

  {/* MAIN CONTENT WRAPPER */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

    {/* ABOUT BUTTON */}
    <button
      className="
        px-6 py-1 rounded-full text-sm md:text-base font-semibold
        bg-white text-emerald-700 border border-emerald-300
        shadow-md hover:shadow-lg transition-all duration-300
      "
    >
      ABOUT US
    </button>

    {/* MAIN HEADING */}
    <h2
      className="
        mt-6 text-xl sm:text-3xl md:text-4xl
        font-bold text-green-900 leading-snug
      "
    >
      “We Build Brands That Stand Out Online”
    </h2>

  </div>

  {/* MOBILE RESPONSIVE FIXES */}
  <style>{`
      @media (max-width: 400px) {
        img[src={group}] { width: 70px; top: 10px; }
        img[src={group2}] { width: 60px; top: 20px; }
        img[src={group3}] { width: 80px; bottom: 10px; }
      }
  `}</style>

</section>





<section className="w-full bg-[#fafdf7] py-20 px-6 md:px-14">

  {/* Section Heading */}
  <h2 className="text-center text-2xl md:text-3xl font-bold mb-12 text-gray-900">
    Who we Are
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT AREA */}
    <div className="text-gray-800 space-y-6 text-[15px] leading-relaxed">
      <p>
        We’re not just another digital marketing company - we're your
        growth partners in the online world.  
        At Qmize, we combine creativity, strategy, and technology to help
        businesses build a powerful digital presence, attract the right
        audience, and drive real results.
      </p>

      <p>
        Our team of passionate marketers, designers, and developers work
        hand-in-hand to transform your brand into a digital success story.
      </p>
    </div>

    {/* RIGHT PLACEHOLDER GRID */}
    <div className="grid grid-cols-2 gap-6">

  {/* Image 1 – Team Collaboration */}
  <img
    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    alt="Team Collaboration"
    className="w-full h-40 object-cover rounded-md shadow-md"
  />

  {/* Image 2 – Creative Workspace */}
  <img
    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    alt="Creative Workspace"
    className="w-full h-40 object-cover rounded-md shadow-md"
  />

  {/* Image 3 – Marketing Team */}
  <img
    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    alt="Marketing Team"
    className="w-full h-40 object-cover rounded-md shadow-md"
  />

  {/* Image 4 – Strategy & Planning */}
  <img
    src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80"
    alt="Strategy Planning"
    className="w-full h-40 object-cover rounded-md shadow-md"
  />

</div>


  </div>

  {/* Mobile Fixes */}
  <style>{`
    @media (max-width: 400px) {
      section div.text-gray-800 {
        font-size: 14px !important;
      }
      section .grid div {
        height: 120px !important;
      }
    }
  `}</style>

</section>








<section className="w-full bg-[#d7ffcd] py-16 px-6 md:px-12">

  {/* Heading */}
  <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
    Our Journey
  </h2>

  <p className="text-center text-gray-700 mt-2 text-sm md:text-base">
    Every great story begins with a simple idea – and ours began with the passion to help brands grow in the digital world.
  </p>

  {/* Timeline Container */}
  <div className="relative max-w-5xl mx-auto mt-14">

    {/* Vertical Line */}
    <div className="absolute left-1/2 top-0 w-[3px] bg-green-900 h-full -translate-x-1/2"></div>

    {/* STAR ICON COMPONENT */}
    <style>
      {`
      @keyframes starPulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.3); opacity: 0.7; }
        100% { transform: scale(1); opacity: 1; }
      }
      .star-anim {
        animation: starPulse 2s infinite ease-in-out;
      }
      `}
    </style>

    {/* TIMELINE ITEMS */}
    <div className="space-y-20">

      {/* 2018 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        
        <div className="md:pr-10">
          <div className="w-full bg-white rounded-xl p-5 shadow-md">
            <h3 className="text-xl font-bold text-green-800">2018</h3>
            <p className="text-gray-700 mt-2">
              We started our journey within four walls - with a simple dream to help businesses grow digitally.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white star-anim"></div>
        </div>

      </div>

      {/* 2020 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        
        <div className="flex justify-center md:justify-end order-last md:order-first">
          <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white star-anim"></div>
        </div>

        <div className="md:pl-10">
          <div className="w-full bg-white rounded-xl p-5 shadow-md">
            <h3 className="text-xl font-bold text-green-800">2020</h3>
            <p className="text-gray-700 mt-2">
              We opened our first office under the parent company <b>Digintra Inc.</b>.
            </p>
          </div>
        </div>

      </div>

      {/* 2022 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        
        <div className="md:pr-10">
          <div className="w-full bg-white rounded-xl p-5 shadow-md">
            <h3 className="text-xl font-bold text-green-800">2022</h3>
            <p className="text-gray-700 mt-2">
              We launched <b>MSG24x7</b> - our WhatsApp automation & marketing platform.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white star-anim"></div>
        </div>

      </div>

      {/* 2024 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        
        <div className="flex justify-center md:justify-end order-last md:order-first">
          <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white star-anim"></div>
        </div>

        <div className="md:pl-10">
          <div className="w-full bg-white rounded-xl p-5 shadow-md">
            <h3 className="text-xl font-bold text-green-800">2024</h3>
            <p className="text-gray-700 mt-2">
              Our team reached <b>50+ members</b> - strong, creative, and unstoppable.
            </p>
          </div>
        </div>

      </div>

      {/* 2025 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        
        <div className="md:pr-10">
          <div className="w-full bg-white rounded-xl p-5 shadow-md">
            <h3 className="text-xl font-bold text-green-800">2025</h3>
            <p className="text-gray-700 mt-2">
              We're moving faster than ever - building products, empowering brands, and setting new benchmarks.
              <br /><b>The journey has just begun.</b>
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white star-anim"></div>
        </div>

      </div>

    </div>
  </div>
</section>






    <section className="w-full py-20 px-6 bg-white">
  
  {/* Heading */}
  <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
    Why Us?
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-4 animate-fadeIn">
      <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 leading-snug underline underline-offset-4">
        Performance That Speaks <br /> for Itself.
      </h3>

      <p className="text-gray-600 leading-relaxed max-w-md">
        Qmize, a venture by DIGINTRA Inc., is your go-to IT and SaaS provider 
        specializing in website development and powerful WhatsApp messaging & 
        marketing automation solutions.  
      </p>
    </div>

    {/* RIGHT CONTENT - PROMISING FACTORS */}
    <div className="flex flex-col gap-5 animate-slideUp">

      {[
        "Trusted by 10,000+ Growing Businesses",
        "99% Delivery Rate with Intelligent Routing",
        "Dedicated Support with Fast Response Time",
        "Powerful Automation + Insights for Better ROI",
      ].map((item, i) => (
        <div
          key={i}
          className="
            bg-emerald-200/60 border border-emerald-300 shadow-sm 
            rounded-xl p-5 text-gray-900 font-semibold
            hover:bg-emerald-300/70 hover:scale-[1.02] hover:shadow-md
            transition-all duration-300 cursor-default
          "
        >
          <p className="text-base md:text-lg">{item}</p>
        </div>
      ))}

    </div>

  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.8s ease-out forwards;
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slideUp {
      animation: slideUp 0.9s ease-out forwards;
    }
  `}</style>

</section>





    <section className="relative w-full py-20 px-6 overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-700 text-white">

  {/* Decorative SVG Circles Left */}
  <svg
    className="absolute top-10 left-4 w-40 opacity-20"
    viewBox="0 0 200 200"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <circle cx="100" cy="100" r="80" />
    <circle cx="100" cy="100" r="60" />
    <circle cx="100" cy="100" r="40" />
  </svg>

  {/* Decorative Blobs Right */}
  <div className="absolute right-0 top-0 w-60 h-60 bg-green-300/20 rounded-full blur-3xl"></div>
  <div className="absolute right-20 bottom-10 w-40 h-40 bg-green-500/20 rounded-full blur-2xl"></div>

  {/* Content */}
  <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeUp">

    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
      Welcome To The New Era Of Business<br className="hidden md:block" />
      Messaging
    </h2>

    <p className="mt-5 text-sm md:text-base text-white/90 leading-relaxed px-2">
      We help businesses implement bulk messaging services aimed to increase revenues,
      improve brand strategy, optimize business performance and develop impactful
      public services through mobile media.  
      Our messaging platform is capable of delivering bulk messages to virtually any
      CDMA/GSM mobile handset across the globe.
    </p>
  </div>

  {/* Floating WhatsApp Icon */}
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="absolute bottom-6 left-6 w-12 md:w-14 opacity-80 animate-iconFloat"
  />

  {/* Floating Message Icon */}
  <img
    src="https://cdn-icons-png.flaticon.com/512/893/893257.png"
    alt="message"
    className="absolute top-16 right-6 w-12 md:w-16 opacity-80 animate-iconFloatSlow"
  />

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp { animation: fadeUp 1s ease-out forwards; }

    @keyframes iconFloat {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
    .animate-iconFloat { animation: iconFloat 4s ease-in-out infinite; }

    @keyframes iconFloatSlow {
      0% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
      100% { transform: translateY(0); }
    }
    .animate-iconFloatSlow { animation: iconFloatSlow 6s ease-in-out infinite; }
  `}</style>

</section>




    <section className="w-full py-20 px-6 bg-gradient-to-b from-white to-emerald-50">

  {/* Heading */}
  <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-14">
    Our Working Process
  </h2>

  {/* Process Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

    {/* STEP 01 */}
    <div className="group relative bg-white shadow-md rounded-2xl p-8 border border-gray-200 
                    hover:shadow-xl hover:border-emerald-400 transition-all duration-300">

      {/* Number Badge */}
      <div className="absolute -top-4 left-6 bg-emerald-500 text-white text-sm font-bold w-10 h-10 
                      rounded-full flex items-center justify-center shadow-lg">
        01
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
          alt="Discovery"
          className="w-16 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        Research & Discovery
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-center mt-2 text-sm leading-relaxed">
        Understanding your business, goals & audience to craft a powerful strategy.
      </p>
    </div>

    {/* STEP 02 */}
    <div className="group relative bg-white shadow-md rounded-2xl p-8 border border-gray-200 
                    hover:shadow-xl hover:border-emerald-400 transition-all duration-300">

      <div className="absolute -top-4 left-6 bg-emerald-500 text-white text-sm font-bold w-10 h-10 
                      rounded-full flex items-center justify-center shadow-lg">
        02
      </div>

      <div className="flex justify-center mb-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1998/1998610.png"
          alt="Planning"
          className="w-16 opacity-90 group-hover:scale-110 transition-all"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 text-center">
        Strategy & Planning
      </h3>

      <p className="text-gray-600 text-center mt-2 text-sm leading-relaxed">
        Creating a unique solution with clear steps to achieve your brand goals.
      </p>
    </div>

    {/* STEP 03 */}
    <div className="group relative bg-white shadow-md rounded-2xl p-8 border border-gray-200 
                    hover:shadow-xl hover:border-emerald-400 transition-all duration-300">

      <div className="absolute -top-4 left-6 bg-emerald-500 text-white text-sm font-bold w-10 h-10 
                      rounded-full flex items-center justify-center shadow-lg">
        03
      </div>

      <div className="flex justify-center mb-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4205/4205501.png"
          alt="Execution"
          className="w-16 opacity-90 group-hover:scale-110 transition-all"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 text-center">
        Execution & Delivery
      </h3>

      <p className="text-gray-600 text-center mt-2 text-sm leading-relaxed">
        Executing with excellence and delivering measurable results for your business.
      </p>
    </div>

  </div>

</section>




<section className="w-full py-16 px-6 bg-gradient-to-b from-emerald-100 to-emerald-50">

  {/* Heading */}
  <h2 className="text-center text-3xl md:text-4xl font-bold text-emerald-900 mb-12">
    Qmize at a Glance
  </h2>

  {/* Stats Row */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

    {/* STAT 1 */}
    <div className="group bg-white rounded-2xl shadow-md p-8 border border-emerald-200 
                    hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-center">

      {/* Icon */}
      <img 
        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
        className="w-14 mx-auto opacity-90 group-hover:scale-110 transition-all"
      />

      <h3 className="text-3xl font-extrabold text-emerald-700 mt-4">200+</h3>
      <p className="text-gray-700 font-medium mt-1">Projects Completed</p>
    </div>

    {/* STAT 2 */}
    <div className="group bg-white rounded-2xl shadow-md p-8 border border-emerald-200 
                    hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-center">

      <img 
        src="https://cdn-icons-png.flaticon.com/512/9292/9292923.png"
        className="w-14 mx-auto opacity-90 group-hover:scale-110 transition-all"
      />

      <h3 className="text-3xl font-extrabold text-emerald-700 mt-4">10,000+</h3>
      <p className="text-gray-700 font-medium mt-1">Active Customers</p>
    </div>

    {/* STAT 3 */}
    <div className="group bg-white rounded-2xl shadow-md p-8 border border-emerald-200 
                    hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-center">

      <img 
        src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
        className="w-14 mx-auto opacity-90 group-hover:scale-110 transition-all"
      />

      <h3 className="text-3xl font-extrabold text-emerald-700 mt-4">50+</h3>
      <p className="text-gray-700 font-medium mt-1">Team Members</p>
    </div>

  </div>
</section>




<section className="w-full py-20 px-6 bg-white relative overflow-hidden">

  {/* Background Floating SVG Decorations */}
  <svg className="absolute top-10 left-10 w-24 opacity-15" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="40" stroke="#22c55e" strokeWidth="3" />
  </svg>

  <svg className="absolute bottom-10 right-10 w-20 opacity-10" viewBox="0 0 100 100" fill="none">
    <rect x="10" y="10" width="80" height="80" stroke="#22c55e" strokeWidth="3" rx="12" />
  </svg>

  {/* Heading */}
  <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-14">
    Meet Our Team
  </h2>

  {/* Team Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

    {/* TEAM CARD COMPONENT */}
    {[
      {
        name: "Md. Anamullah",
        role: "CEO & Founder",
        img: "/placeholder.png",
      },
      {
        name: "Safder Ali Khan",
        role: "Manager",
        img: "/placeholder.png",
      },
      {
        name: "Sujat Ali Khan",
        role: "B.D.M",
        img: "/placeholder.png",
      }
    ].map((member, i) => (
      <div
        key={i}
        className="group bg-white rounded-3xl p-4 shadow-md border border-gray-200 
                   hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer"
      >

        {/* Image Wrapper */}
        <div className="w-full h-56 bg-gray-200 rounded-2xl overflow-hidden">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          />
        </div>

        {/* Info Box */}
        <div className="mt-4 p-4 rounded-2xl bg-emerald-100 text-center shadow-inner 
                        backdrop-blur-lg hover:bg-emerald-200 transition-all">
          <h3 className="text-lg font-semibold text-emerald-900">{member.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{member.role}</p>
        </div>

        {/* Floating SVG Icon */}
        <svg
          className="absolute -top-2 right-4 w-8 opacity-0 group-hover:opacity-100 
                     transition-all duration-500"
          viewBox="0 0 24 24"
          fill="#22c55e"
        >
          <path d="M12 2L15 8H9L12 2Z" />
          <circle cx="12" cy="14" r="8" fill="none" stroke="#22c55e" strokeWidth="2" />
        </svg>

      </div>
    ))}

  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-card {
      animation: fadeUp 1s ease-out forwards;
    }
  `}</style>

</section>


    
    
    
    
    
    
    
    
    </>
  )
}

export default AboutHeroSec