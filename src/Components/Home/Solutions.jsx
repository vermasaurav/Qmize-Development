import {
  Monitor,
  Share2,
  MessageCircle,
  PhoneCall,
  Megaphone,
} from "lucide-react";
import star from "../../assets/Icons/star.png";
import WebDev from "../../assets/Images/webdev.jpg"
import DigiMarket from "../../assets/Images/digimarketing.jpg"
import WhatsAppApi from "../../assets/Images/whatsappapi.jpg"
import BulkSms from "../../assets/Images/bulksms.jpg"
import Prrelease from "../../assets/Images/prrelease.jpg"
import WhatsAppFeature from "../../assets/Images/whatsappfeatures.png"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import WhatsAppFeature2 from "../../assets/Images/whatsappfeatures2.png"
import worldmap from "../../assets/Images/worldmap.png"
import gifvideo from '../../assets/Videos/create.gif';
import news1 from "../../assets/Images/news1.png"
import news2 from "../../assets/Images/news2.jpg"
import news3 from "../../assets/Images/news3.png"
import news4 from "../../assets/Images/news4.png"

export default function SolutionsSection() {


     const faqs = [
    {
      q: "What is WhatsApp Business API?",
      a: "It is a powerful solution that enables businesses to automate messages, send notifications, handle customer support, and scale communication seamlessly.",
    },
    {
      q: "How does Qmize help with WhatsApp automation?",
      a: "Qmize provides verified WhatsApp Business API access, automation tools, chatbots, templates, analytics, and campaign management.",
    },
    {
      q: "Is the WhatsApp API suitable for small businesses?",
      a: "Absolutely! Whether you are a startup or enterprise, the API helps automate customer communication and improve conversions.",
    },
    {
      q: "How long does onboarding take?",
      a: "Typically 24 hours after verification. Qmize provides fast onboarding with complete documentation support.",
    },
    {
      q: "Does Qmize offer customer support?",
      a: "Yes! 24x7 customer support with a dedicated success manager for all business plans.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };






     const images = [
   WebDev,WebDev,WebDev,WebDev,WebDev,WebDev,WebDev,WebDev,
    // add more image URLs here (remote or local)
  ];

  // duplicate array to create a seamless loop
  const looped = [...images, ...images,...images];



  const testimonials = [
    {
      name: "Aarav Mehta",
      username: "@aarav_mehta",
      text: "Qmize has completely transformed the way our team communicates with customers. The WhatsApp API automation is smooth, fast, and super reliable.Qmize has completely transformed the way our team communicates with customers. The WhatsApp API automation is smooth, fast, and super reliable.Qmize has completely transformed the way our team communicates with customers. The WhatsApp API automation is smooth, fast, and super reliable.",
      featured: true,
    },
    {
      name: "Priya Verma",
      username: "@priyaverma",
      text: "We increased our customer retention by 40% after switching to Qmize. Highly recommended!",
    },
    {
      name: "Rohan Singh",
      username: "@rohan_codes",
      text: "Super fast delivery and amazing customer support. The campaign dashboard is beautiful and easy to use.",
    },
    {
      name: "Sanaya Kapoor",
      username: "@sanayak",
      text: "Best WhatsApp Business API provider in India. Seamless onboarding and great pricing.",
    },
    {
      name: "Kabir Malhotra",
      username: "@kabirm",
      text: "Their analytics helped us understand our audience better. Love Qmize!",
    },
    {
      name: "Ishita Sharma",
      username: "@ishita_s",
      text: "The automation features saved us hours every single day. Brilliant product.",
    },
    {
      name: "Ishita Sharma",
      username: "@ishita_s",
      text: "The automation features saved us hours every single day. Brilliant product.",
    },
    {
      name: "Ishita Sharma",
      username: "@ishita_s",
      text: "The automation features saved us hours every single day. Brilliant product.",
    },
    
  ];


  const services = [

     {
      title: "WhatsApp Business API",
      desc: "Automate notifications, campaigns, and customer journeys using WABA.",
      icon: <MessageCircle size={34} className="text-emerald-700" />,
      image: WhatsAppApi,
    },
     {
      title: "Bulk SMS Services",
      desc: "Send instant bulk SMS alerts, OTPs, and promotional campaigns.",
      icon: <PhoneCall size={34} className="text-emerald-700" />,
      image: BulkSms,
    },
     {
      title: "Website Development",
      desc: "Beautiful, responsive, high-performance websites for your business.",
      icon: <Monitor size={34} className="text-emerald-700" />,
      image: WebDev,
    },
    {
      title: "Digital Marketing Services",
      desc: "Grow your brand with SEO, SMM, Google Ads, and performance marketing.",
      icon: <Megaphone size={34} className="text-emerald-700" />,
      image: DigiMarket,
    },
   
   
   
    {
      title: "PR Release Services",
      desc: "Boost your brand visibility with nationwide digital PR & media coverage.",
      icon: <Share2 size={34} className="text-emerald-700" />,
      image: Prrelease,
    },
  ];

  return (

    <>
    <section className="relative w-full bg-gradient-to-b from-green-50 via-white to-green-50 py-20 px-6 overflow-hidden">

  {/* Decorative Blobs */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200 opacity-20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-52 h-52 bg-green-300 opacity-20 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto relative z-10">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-900 tracking-tight animate-slideDown">
      Discover Powerful Solutions  
      <br /> 
      <span className="text-emerald-600">Built for Growth</span>
    </h2>

    <p className="text-gray-600 mt-4 text-sm sm:text-lg animate-fadeIn">
      Transform your business with our complete suite of digital & communication solutions.
    </p>
  </div>

  {/* GRID */}
  <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10">

    {services.map((srv, i) => (
      <div
        key={i}
        className="
          group relative bg-white/70 backdrop-blur-xl 
          rounded-3xl shadow-lg p-6 overflow-hidden
          border border-emerald-200 transition-all
          hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] 
          hover:-translate-y-2 
          hover:border-emerald-400
        "
      >
        {/* Gradient Border Glow */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-bl from-green-200 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={srv.image}
            alt={srv.title}
            className="
              w-full h-48 object-cover rounded-2xl
              group-hover:scale-105 transition-transform duration-700
            "
          />
        </div>

        {/* ICON BADGE */}
        <div className="
          w-14 h-14 bg-white shadow-md rounded-full 
          flex items-center justify-center 
          -mt-7 ml-3 relative z-10
          border border-emerald-200
          group-hover:-translate-y-1 transition-all
        ">
          {srv.icon}
        </div>

        {/* CONTENT */}
        <div className="mt-5 px-1">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-950 transition">
            {srv.title}
          </h3>

          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            {srv.desc}
          </p>

          <button className="
            mt-5 px-6 py-2 rounded-full text-sm font-semibold
            bg-emerald-600 text-white shadow-md
            hover:bg-emerald-700 hover:shadow-lg hover:scale-105
            transition-all duration-300
          ">
            Learn More →
          </button>
        </div>
      </div>
    ))}

  </div>

  
</section>






<section className="w-full py-24 px-6 md:px-16 text-white bg-[#001b12] relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent blur-3xl"></div>

  <div className="max-w-6xl mx-auto relative z-10">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center">
      The Future of Business Growth  
      <span className="block text-emerald-400">Starts With WhatsApp Business API</span>
    </h2>

    <p className="text-center text-white/60 mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
      With over <span className="text-emerald-400 font-semibold">2+ billion active users</span>,
      WhatsApp isn’t just a messaging app — it’s the biggest customer communication platform ever built.
      Brands that switch to WhatsApp API experience faster conversions, higher engagement, and deeper
      customer relationships.
    </p>

    {/* MAIN CONTENT SECTION */}
    <div className="mt-20 grid md:grid-cols-2 gap-16 items-start">

      {/* LEFT SIDE – LONG STORY CONTENT */}
      <div className="space-y-10">

        {/* Block 1 */}
        <div className="flex gap-5">
          <div className="w-2 bg-emerald-400 rounded-full"></div>
          <div>
            <h3 className="text-2xl font-bold">Customers Prefer WhatsApp</h3>
            <p className="text-white/70 mt-3 leading-relaxed">
              82% customers respond faster on WhatsApp than traditional SMS or email.
              When your business is available instantly, customers feel connected,
              supported, and confident in choosing you over competitors.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex gap-5">
          <div className="w-2 bg-emerald-400 rounded-full"></div>
          <div>
            <h3 className="text-2xl font-bold">Automation That Works 24/7</h3>
            <p className="text-white/70 mt-3 leading-relaxed">
              Chatbots reply instantly while your team sleeps.  
              Automated flows manage inquiries, bookings, reminders, follow-ups —  
              all without manual effort.  
              More responses → more conversions → more revenue.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex gap-5">
          <div className="w-2 bg-emerald-400 rounded-full"></div>
          <div>
            <h3 className="text-2xl font-bold">Build Trust With Verified Business Profile</h3>
            <p className="text-white/70 mt-3 leading-relaxed">
              A verified WhatsApp Business API profile with your brand name, logo,
              and green tick instantly increases trust. In crowded markets,
              trust wins customers — not ads.
            </p>
          </div>
        </div>

        {/* Block 4 */}
        <div className="flex gap-5">
          <div className="w-2 bg-emerald-400 rounded-full"></div>
          <div>
            <h3 className="text-2xl font-bold">Create Personalized Shopping Experiences</h3>
            <p className="text-white/70 mt-3 leading-relaxed">
              Send catalogue messages, product images, quick-reply buttons,
              order updates, payment links, and more — everything directly inside WhatsApp.
              A frictionless buying journey = Higher sales conversions.
            </p>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE – BIG VISUAL / IMAGE / STATS */}
      <div className="relative">

        {/* Glowing Circle */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/20 blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-3xl font-extrabold text-emerald-400">
            WhatsApp = Instant Revenue Engine
          </h3>

          <ul className="mt-6 space-y-4 text-white/80">
            <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> 98% Message Open Rate</li>
            <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> 3x Better Customer Retention</li>
            <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> 70% Faster Support Resolution</li>
            <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> Unlimited Verified Broadcasting</li>
            <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> Human + Chatbot Hybrid Support</li>
          </ul>

          <button className="
            mt-10 px-7 py-3 rounded-full text-black font-semibold
            bg-gradient-to-r from-emerald-500 to-green-400
            hover:scale-105 transition-all duration-300
          ">
            Start with WhatsApp API →
          </button>
        </div>

      </div>

    </div>

  </div>
</section>






    <section className="w-full bg-[#faf7ef] py-12 sm:py-10">
{/* Badge */}
<div className="flex justify-center">
<span className="px-4 py-1 bg-green-100 border border-green-300 text-green-800 text-xs sm:text-sm rounded-full font-medium flex items-center gap-2 shadow-sm animate-fadeIn">
<i className="fa-brands fa-whatsapp text-green-600"></i>
Powered by Official WhatsApp Business API
</span>
</div>


{/* Main Content */}
<div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row items-center md:items-start gap-10 px-6">
{/* Left Text Block */}
<div className="w-full md:w-1/2 animate-slideLeft text-center md:text-left">
<p className="text-emerald-700 font-semibold text-sm sm:text-base mb-2">
Best WhatsApp API Provider in India
</p>


<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
WhatsApp at the Core of Every Customer Conversation.
</h2>


<p className="text-gray-600 mt-4 text-sm sm:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
Build meaningful customer connections every day with India’s leading WhatsApp API platform.
</p>
</div>


{/* Right Image Block */}
<div className="w-full md:w-1/2 flex justify-center md:justify-end animate-imageFloat">
<div className="bg-white shadow-lg rounded-2xl p-8 sm:p-10">
<img
src={WhatsAppFeature}
alt="Meta Logo"
className="w-28 sm:w-36 md:w-40 object-contain"
/>
</div>
</div>
</div>
</section>







<section className="relative w-full bg-[#e9fdf4] py-20 overflow-hidden">

  {/* Soft animated background gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 via-transparent to-emerald-100 animate-bgMove opacity-50"></div>

  {/* TOP STRIP */}
  <div className="w-full overflow-hidden border-y border-emerald-300 bg-white/60 backdrop-blur-lg">
    <div className="flex items-center gap-14 py-4 animate-marqueeLeft">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 whitespace-nowrap text-emerald-800 font-semibold text-[15px]">
          <img src={star} className="w-5 h-5" alt="" />
          Qmize – Smart WhatsApp API Automation
        </div>
      ))}
    </div>
  </div>

  {/* BOTTOM STRIP */}
  <div className="w-full overflow-hidden border-y border-emerald-300 bg-white/60 backdrop-blur-lg mt-6">
    <div className="flex items-center gap-14 py-4 animate-marqueeRight">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 whitespace-nowrap text-emerald-900 font-semibold text-[15px]">
          <img src={star} className="w-5 h-5" alt="" />
          #1 WhatsApp Business API Platform
        </div>
      ))}
    </div>
  </div>

  {/* Animations */}
  <style jsx>{`
    @keyframes marqueeLeft {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marqueeRight {
      0%   { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    @keyframes bgMove {
      0% { background-position: 0 0; }
      100% { background-position: 200% 0; }
    }

    .animate-marqueeLeft {
      animation: marqueeLeft 40s linear infinite;
      width: max-content;
    }
    .animate-marqueeRight {
      animation: marqueeRight 40s linear infinite;
      width: max-content;
    }
    .animate-bgMove {
      animation: bgMove 2s ease-in-out infinite alternate;
      background-size: 300%;
    }

    @media (max-width: 768px) {
      .animate-marqueeLeft,
      .animate-marqueeRight {
        animation-duration: 30s;
      }
    }
  `}</style>
</section>
















    {/* <section className="w-full py-20 bg-white relative overflow-hidden">

  <div className="max-w-6xl mx-auto px-6">
    
    
    <h2 className="text-center text-4xl sm:text-5xl font-bold text-emerald-700 tracking-tight">
      Industries & Trusted Partners
    </h2>

    <p className="text-center text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
      Powering digital communication for top brands across multiple industries.
    </p>

    <div className="relative mt-14 overflow-hidden">

     
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      
      <div className="flex items-center gap-8 marquee-track">
        
        {looped.map((src, i) => (
          <div
            key={i}
            className="
              flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36
              rounded-xl overflow-hidden bg-gray-100 border border-gray-200
              shadow-[0_4px_20px_rgba(0,0,0,0.06)]
              hover:shadow-[0_6px_30px_rgba(0,0,0,0.12)]
              transition-all duration-300
            "
          >
            <img
              src={src}
              alt={`brand-${i}`}
              className="w-full h-full object-contain p-4"
              draggable={false}
            />
          </div>
        ))}

      </div>
    </div>
  </div> */}

  {/* STYLES */}
  {/* <style jsx>{`
    @keyframes marqueeScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .marquee-track {
      animation: marqueeScroll 22s linear infinite;
      width: max-content;
    }

    .marquee-track:hover {
      animation-play-state: paused;
    }

    @media (max-width: 640px) {
      .marquee-track {
        animation-duration: 28s;
      }
    }
  `}</style> */}

{/* </section> */}










<section className="w-full bg-[#020617] text-white py-24 px-6 md:px-14 relative overflow-hidden">

  {/* Background Gradient Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-400/5 blur-[140px]"></div>

  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

    {/* LEFT SIDE */}
    <div className="animate-fadeInUp">

      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Empowering Every  
        <span className="text-emerald-400"> Business Sector</span>
      </h2>

      <p className="text-white/60 text-base md:text-lg mb-12 leading-relaxed max-w-lg">
        From startups to enterprise giants — WhatsApp Business API helps every industry 
        automate communication, boost customer engagement, and accelerate business growth.
      </p>

      {/* INDUSTRIES GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

        {[
          "Government Sector",
          "Education Sector",
          "Health & Medical",
          "Real Estate Industry",
          "Entertainment",
          "Banking & Finance",
          "Business & Accounting",
          "Retail & E-commerce",
          "Transport & Logistics",
          "Food & Restaurant",
          "Information Technology",
          "Industry & Oil & Gas",
        ].map((item, i) => (
          <div
            key={i}
            className="
              group p-5 rounded-2xl bg-white/5 backdrop-blur-xl
              border border-white/10
              hover:bg-white/10 hover:border-emerald-400/50
              hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]
              transition-all duration-500 cursor-pointer
              flex flex-col items-center justify-center gap-3
              animate-fadeStagger
            "
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {/* Animated Icon */}
            <div className="
              w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center
              border border-emerald-400/20
              group-hover:scale-110 group-hover:bg-emerald-500/30 
              transition-all duration-500
            ">
              <span className="text-emerald-300 text-xl">★</span>
            </div>

            <p className="text-center text-sm text-white/80 leading-tight group-hover:text-white transition">
              {item}
            </p>
          </div>
        ))}

      </div>

    </div>

    {/* RIGHT SIDE — ANIMATED FLOATING GLOBE */}
    <div className="relative flex justify-center lg:justify-end">

      <div className="absolute -top-10 right-10 w-72 h-72 bg-emerald-400/20 blur-[120px] rounded-full"></div>

      <img
        src={worldmap}
        alt="Global Reach"
        className="
          w-[90%] md:w-[85%] lg:w-[600px]
          floatingGlobe drop-shadow-[0_0_40px_rgba(16,185,129,0.2)]
        "
      />
    </div>

  </div>

  {/* CUSTOM ANIMATIONS */}
  <style jsx>{`
    /* Fade upward animation */
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeInUp { animation: fadeInUp 1.2s ease forwards; }

    /* Stagger item fade */
    @keyframes fadeStagger {
      0% { opacity: 0; transform: translateY(15px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeStagger { animation: fadeStagger 0.8s ease forwards; }

    /* Floating Globe Animation */
    @keyframes floatGlobe {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-18px); }
      100% { transform: translateY(0px); }
    }
    .floatingGlobe { 
      animation: floatGlobe 5s ease-in-out infinite;
    }
  `}</style>

</section>






  







<section className="relative bg-[#001c11] py-20 text-white overflow-hidden">

  {/* Light Rays */}
  <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
    <div className="absolute top-20 left-1/2 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-green-400/20 blur-2xl rounded-full"></div>
  </div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">

    <h2 className="text-4xl font-extrabold text-center mb-3">In the News</h2>
    <p className="text-center text-white/60 mb-16">
      Major media outlets are recognizing our innovation.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-10">

      {/* Rotated Cards */}
      {[
        news1,
        news2,
        news3,news4
      ].map((img, i) => (
        <div key={i}
          className="rotate-6 hover:rotate-0 transition-all duration-500 
                     bg-white rounded-2xl p-1 shadow-xl border border-white/20">
          
          <img
            src={img}
            className="rounded-xl w-48 sm:w-60 h-32 sm:h-40 object-contain"
          />
        </div>
      ))}

    </div>
  </div>
</section>











<section className="w-full bg-[#fdfcf7] py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-5 animate-fadeIn">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
        Get Started with Qmize - 
        <span className="block">the new face of MSG24x7.</span>
      </h2>

      <div className="flex flex-wrap gap-4 text-gray-700 text-sm sm:text-base">
        <span className="flex items-center gap-1">⭐ Business Messaging</span>
        <span className="flex items-center gap-1">⭐ WhatsApp Business API</span>
        <span className="flex items-center gap-1">⭐ Social Media</span>
      </div>

      <button
        className="
          bg-emerald-700 text-white px-6 py-2 rounded-full text-sm
          hover:bg-emerald-800 transition shadow-md hover:shadow-lg
        "
      >
        📞 Ping us on WhatsApp
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center md:justify-end">
      <img
        src={WhatsAppFeature2}
        alt="Qmize Illustration"
        className="
          w-[80%] sm:w-[70%] lg:w-[60%] 
          drop-shadow-2xl rounded-xl 
          animate-floatSlow
        "
      />
    </div>
  </div>

  {/* Animations */}
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn { animation: fadeIn 1.2s ease forwards; }

    @keyframes floatSlow {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    .animate-floatSlow {
      animation: floatSlow 6s ease-in-out infinite;
    }
  `}</style>
</section>






<section className="w-full py-24 px-6 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">

  {/* Soft Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-200/30 blur-[180px] rounded-full"></div>

  <div className="relative z-10 max-w-4xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-900 leading-tight animate-fadeIn">
      Create Stunning WhatsApp Experiences  
      <span className="block text-emerald-500 mt-2">
        With Powerful Automation & Smart Conversations
      </span>
    </h2>

    {/* Subheading */}
    <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto animate-fadeIn delay-200">
      Build journeys, automate customer flows, and engage users with ease through our 
      high-performance WhatsApp Business API Platform.
    </p>

    {/* GIF Container */}
    <div className="mt-12 flex justify-center animate-fadeUp">

      <div className="p-4 sm:p-6 rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl 
                      hover:shadow-2xl transition-all duration-500 border border-white/40 max-w-[650px]">

        <img 
          src={gifvideo} 
          alt="AI WhatsApp Automation Demo"
          className="rounded-2xl w-full h-auto object-contain"
        />
      </div>
    </div>
  </div>

  {/* Animations */}
  <style jsx>{`
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fadeIn {
      animation: fadeIn 1s ease forwards;
    }
    .animate-fadeUp {
      animation: fadeUp 1.2s ease forwards;
    }
  `}</style>

</section>








 <section className="w-full bg-[#f2f2f2] py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Loved by thousands of people
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Here's what people are saying about Qmize
        </p>
      </div>

      {/* GRID */}
      <div className="
        max-w-7xl mx-auto 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-6
      ">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`
              bg-white rounded-3xl p-6 shadow-md border border-gray-200
              hover:shadow-xl transition-all duration-300
              ${t.featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            `}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.username}</p>
              </div>
            </div>

            {/* Content */}
            <p className="text-gray-700 leading-relaxed text-sm">{t.text}</p>
          </div>
        ))}
      </div>
    </section>




    <section className="w-full bg-[#fdfcf7] px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT SIDE HEADING */}
        <div className="col-span-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Frequently Asked <br />
            <span className="font-serif italic text-emerald-700">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Get instant answers to your most common questions.
          </p>
        </div>

        {/* RIGHT SIDE ACCORDION */}
        <div className="col-span-2 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
              >
                <span className="font-medium text-gray-900">
                  {item.q}
                </span>
                {openIndex === index ? (
                  <Minus className="text-emerald-700" size={20} />
                ) : (
                  <Plus className="text-gray-600" size={20} />
                )}
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 p-4 sm:p-5" : "max-h-0 p-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>








         <div className="w-full bg-white">
      {/* CONTACT SECTION */}
      <section className="relative bg-gradient-to-b from-emerald-900 to-emerald-800 text-white overflow-hidden">
        {/* Floating decorative SVG icons (top-left & bottom-right) */}
        <svg className="absolute -top-10 -left-8 w-36 opacity-10" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" fill="white" />
        </svg>
        <svg className="absolute -bottom-10 -right-8 w-44 opacity-8" viewBox="0 0 200 200">
          <rect x="0" y="0" width="200" height="200" rx="40" fill="white" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Headline + benefits */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Do you have a project in mind?
              </h2>
              <p className="text-gray-200 max-w-xl leading-relaxed">
                Tell us about your requirements and we'll get back within one business day.
                We help with WhatsApp Business API, digital marketing, websites and more.
              </p>

              {/* feature chips */}
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
                  {/* SVG icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-95">
                    <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Business Messaging
                </span>

                <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12h18M12 3v18" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  WhatsApp Business API
                </span>

                <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.6"/>
                    <path d="M19 12a7 7 0 10-14 0" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                  Social Media
                </span>
              </div>
            </div>

            {/* Right: Form card */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-emerald-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: integrate your form handler here
                  alert("Form submitted (demo) — replace with actual handler.");
                }}
                className="space-y-4"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="sr-only">Full name</span>
                    <input required placeholder="Full name" className="w-full border-b border-gray-200 py-2 outline-none bg-transparent" />
                  </label>
                  <label className="block">
                    <span className="sr-only">Mobile number</span>
                    <input required placeholder="Mobile No." className="w-full border-b border-gray-200 py-2 outline-none bg-transparent" />
                  </label>
                </div>

                <label className="block">
                  <span className="sr-only">Email</span>
                  <input required type="email" placeholder="Email" className="w-full border-b border-gray-200 py-2 outline-none bg-transparent" />
                </label>

                <label className="block">
                  <span className="sr-only">Subject</span>
                  <input required placeholder="Subject" className="w-full border-b border-gray-200 py-2 outline-none bg-transparent" />
                </label>

                <label className="block">
                  <span className="sr-only">Description</span>
                  <textarea required placeholder="Description" rows="4" className="w-full border border-gray-200 rounded-md p-3 resize-none outline-none" />
                </label>

                <div className="flex items-center justify-between gap-4">
                  <button type="submit" className="inline-flex items-center gap-2 bg-emerald-900 text-white px-4 py-2 rounded-full shadow hover:scale-[1.02] transition">
                    Submit
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <a href="#contact" className="text-sm text-white/80 hover:underline">Privacy Policy</a>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* curved divider SVG */}
        <div className="-mt-6">
          <svg viewBox="0 0 1440 120" className="w-full block">
            <path d="M0 40 C 360 120 1080 -40 1440 40 L1440 120 L0 120 Z" fill="#061025" />
          </svg>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#061025] text-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M3 12 L12 3 L21 12 L12 21 Z" fill="#10B981" />
              </svg>
              <div>
                <div className="font-semibold text-white">Qmize</div>
                <div className="text-sm text-gray-400">Smart customer messaging</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              We are a results-driven digital marketing company helping businesses grow online.
            </p>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>WhatsApp API</li>
              <li>Bulk SMS</li>
              <li>Website Dev</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>support@qmize.com</li>
              <li>+91 98765 43210</li>
              <li>Privacy</li>
            </ul>

            {/* social icons */}
            <div className="flex items-center gap-3 mt-4">
              {/* Facebook */}
              <a aria-label="facebook" href="#" className="w-9 h-9 flex items-center justify-center bg-white/6 rounded-full hover:bg-white/10 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 8h2V6c0-1 1-2 2-2h2v3h-1c-1 0-1 1-1 1v2h3l-1 3h-2v6h-3v-6H9v-3z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              {/* Twitter */}
              <a aria-label="twitter" href="#" className="w-9 h-9 flex items-center justify-center bg-white/6 rounded-full hover:bg-white/10 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 0 1-3 1 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="white" strokeWidth="0.8"/></svg>
              </a>
              {/* Linkedin */}
              <a aria-label="linkedin" href="#" className="w-9 h-9 flex items-center justify-center bg-white/6 rounded-full hover:bg-white/10 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h4v16H4zM8 8h7v2h1v10h-1v-6h-7v6H8z" stroke="white" strokeWidth="0.9"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/6 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Qmize. All rights reserved.
        </div>
      </footer>

      {/* Small styles for animations (optional: move to global css) */}
      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-floatSlow { animation: floatSlow 6s ease-in-out infinite; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp .9s ease forwards; }
      `}</style>
    </div>



</>

  );
}
