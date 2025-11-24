
import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Globe,
  Mic,
  Cloud,
  Phone,
  Zap,
} from "lucide-react";
import Logo from "../../assets/Images/logoQmize.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isHoveringSubmenu, setIsHoveringSubmenu] = useState(false);

  const navLinks = [
    { name: "Home" },
    { name: "Why Choose Us" },
    { name: "Solutions" },
    { name: "Integrations" },
    { name: "Plans" },
    { name: "Insights" },
  ];

  // Handle delayed closing
  // const handleMouseLeave = () => {
  //   setTimeout(() => {
  //     if (!isHoveringSubmenu) setHoveredMenu(null);
  //   }, 150);
  // };

  


  return (
    <nav className="
    w-full 
    bg-green-200 
    border-b border-emerald-200 
   sticky top-0 left-0 
  z-60 
   ">
      <div className="w-[95%] mx-auto flex items-center justify-between py-2">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Qmize Logo" className="w-10 h-10 object-contain" />
        </div>

       {/* Center: Nav Links */}
<ul className="hidden md:flex items-center gap-6 text-emerald-900 font-semibold text-sm relative">

  {navLinks.map((link, index) => {
    const noSubmenu = ["Home", "Why Choose Us"];
    const showSubmenu = !noSubmenu.includes(link.name);

    return (
      <li
        key={index}
        className="relative flex items-center gap-1 cursor-pointer transition-colors hover:text-emerald-700"
        onMouseEnter={() => showSubmenu && setHoveredMenu(link.name)}
      >
        <span>{link.name}</span>

        {/* Dropdown Arrow */}
        {showSubmenu && (
          <ChevronDown
            size={12}
            className={`transition-transform duration-300 ease-in-out ${
              hoveredMenu === link.name ? "rotate-180 text-emerald-700" : "rotate-0"
            }`}
          />
        )}

        {/* Submenu */}
        {hoveredMenu === link.name && showSubmenu && (
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full mt-3  shadow-2xl 
                       border border-emerald-300 rounded-2xl p-6 w-[70vw] max-w-6xl 
                       animate-fadeIn z-[999] bg-green-50 "
            onMouseEnter={() => setIsHoveringSubmenu(true)}
            onMouseLeave={() => {
              setIsHoveringSubmenu(false);
              setHoveredMenu(null);
            }}
          >
            <div className="grid grid-cols-3 gap-8">
              
              {/* MARKETING SERVICES */}
              <div>
                <h3 className="text-emerald-800 font-bold text-sm mb-3 uppercase tracking-wide border-b border-emerald-200 pb-1">
                  Marketing Services
                </h3>
                <ul className="space-y-3 text-sm">

                  <li className="flex items-start gap-2 group cursor-pointer p-2 hover:bg-green-200 rounded-md">
                    <MessageCircle size={16} className="text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium group-hover:text-emerald-700 transition">
                        WhatsApp Business API
                      </p>
                      <p className="text-gray-500 text-xs">
                        Connect customers on WhatsApp
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-2 group cursor-pointer p-2 hover:bg-green-200 rounded-md">
                    <Zap size={16} className="text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium group-hover:text-emerald-700 transition">
                        Promotional SMS
                      </p>
                      <p className="text-gray-500 text-xs">
                        Send offers and alerts instantly
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-2 group cursor-pointer p-2 hover:bg-green-200 rounded-md">
                    <Phone size={16} className="text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium group-hover:text-emerald-700 transition">
                        OTP SMS
                      </p>
                      <p className="text-gray-500 text-xs">
                        Secure two-factor authentication
                      </p>
                    </div>
                  </li>

                </ul>
              </div>

              {/* DIGITAL SERVICES */}
              <div>
                <h3 className="text-emerald-800 font-bold text-sm mb-3 uppercase tracking-wide border-b border-emerald-200 pb-1">
                  Digital Services
                </h3>

                <ul className="space-y-3 text-sm">

                  <li className="flex items-start gap-2 group cursor-pointer p-2 hover:bg-green-200 rounded-md">
                    <Globe size={16} className="text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium group-hover:text-emerald-700 transition">
                        Website Development
                      </p>
                      <p className="text-gray-500 text-xs">
                        Build and deploy your brand website
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-2 group cursor-pointer p-2 hover:bg-green-200 rounded-md">
                    <Zap size={16} className="text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium group-hover:text-emerald-700 transition">
                        SEO & Digital Marketing
                      </p>
                      <p className="text-gray-500 text-xs">
                        Boost your reach and visibility
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-2 group cursor-pointer p-2 hover:bg-green-200 rounded-md">
                    <MessageCircle size={16} className="text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium group-hover:text-emerald-700 transition">
                        Social Media Campaigns
                      </p>
                      <p className="text-gray-500 text-xs">
                        Grow audience across platforms
                      </p>
                    </div>
                  </li>

                </ul>
              </div>

              {/* CLOUD TELEPHONY */}
              <div>
                <h3 className="text-emerald-800 font-bold text-sm mb-3 uppercase tracking-wide border-b border-emerald-200 pb-1">
                  Cloud Telephony
                </h3>

                <ul className="space-y-3 text-sm">

                  <li className="flex items-start gap-2 group cursor-pointer p-2 hover:bg-green-200 rounded-md">
                    <Mic size={16} className="text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium group-hover:text-emerald-700 transition">
                        Voice Broadcast
                      </p>
                      <p className="text-gray-500 text-xs">
                        Record & send bulk calls
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-2 group cursor-pointer p-2 hover:bg-green-200 rounded-md">
                    <Cloud size={16} className="text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium group-hover:text-emerald-700 transition">
                        Cloud Telephony
                      </p>
                      <p className="text-gray-500 text-xs">
                        Manage your IVR solutions
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-2 group cursor-pointer p-2 hover:bg-green-200 rounded-md">
                    <Phone size={16} className="text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium group-hover:text-emerald-700 transition">
                        Toll-Free & Missed Call
                      </p>
                      <p className="text-gray-500 text-xs">
                        Track customer leads easily
                      </p>
                    </div>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        )}
      </li>
    );
  })}

</ul>


        {/* Right: Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button className="bg-emerald-900 text-white text-sm font-medium px-4 py-1 rounded-md flex items-center gap-1 hover:bg-emerald-800 transition border-b-2 border-green-400">
            Sign in <ArrowRight size={12} />
          </button>
          <button className="bg-emerald-900 text-white text-sm font-medium px-4 py-1 rounded-md hover:bg-emerald-800 transition border-b-2 border-green-400">
            Talk to Sales
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden p-2 rounded-md text-emerald-900 hover:bg-emerald-200 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-emerald-50 border-t border-emerald-200 flex flex-col items-start gap-3 px-6 py-4">
          {navLinks.map((link, index) => (
            <button
              key={index}
              className="text-emerald-900 text-sm font-medium hover:text-emerald-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </button>
          ))}
          <div className="flex flex-col gap-2 w-full pt-2 border-t border-emerald-200">
            <button className="bg-emerald-900 text-white text-sm font-medium px-4 py-2 rounded-md flex items-center justify-center gap-1 hover:bg-emerald-800 transition border-b-2 border-green-400">
              Sign in <ArrowRight size={12} />
            </button>
            <button className="bg-emerald-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-emerald-800 transition border-b-2 border-green-400">
              Talk to Sales
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
