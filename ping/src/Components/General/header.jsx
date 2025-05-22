import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { MdPhone, MdEmail } from "react-icons/md";
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-6 text-white">
      {/* Main container with responsive flex layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* ===== CONTACT INFORMATION SECTION ===== */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          {/* Phone number with icon */}
          <div className="flex items-center gap-2">
            <FaPhone className="h-5 w-5 text-white" />
            <span className="font-medium">1000-477-776</span>
          </div>

          {/* Email with icon */}
          <div className="flex items-center gap-2">
            <FaEnvelope className="h-5 w-5 text-white" />
            <a
              href="mailto:info.asp@starprojection.com.au"
              className="font-medium hover:underline transition-colors"
            >
              info.pingsolutions.com.au
            </a>
          </div>
        </div>

        {/* ===== SOCIAL MEDIA SECTION ===== */}
        <div className="flex items-center gap-3">
          {/* Facebook icon */}
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-4 h-4" />
          </a>

          {/* Twitter icon */}
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="w-4 h-4" />
          </a>

          {/* Instagram icon */}
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-4 h-4" />
          </a>

          {/* LinkedIn icon - added for completeness */}
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
