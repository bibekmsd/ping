import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../Svg_files/pinglogo.svg";
import { navItems } from "../../constants/constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white/70 dark:bg-black/30 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-700/80 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img className="h-18 w-28" src={logo} alt="Logo" />
            {/* <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-transparent bg-clip-text tracking-tight">
              VirtualR
            </span> */}
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex space-x-10 text-gray-800 dark:text-gray-200 font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative inline-block py-1 transition hover:text-orange-600"
                >
                  <span>{item.label}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#"
              className="py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:border-orange-500 transition text-sm"
            >
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-md hover:shadow-lg transition text-sm"
            >
              Create Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} aria-label="Toggle Menu">
              {mobileDrawerOpen ? (
                <X className="h-7 w-7 text-gray-800 dark:text-white" />
              ) : (
                <Menu className="h-7 w-7 text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`absolute top-16 left-0 w-full bg-white dark:bg-neutral-900 shadow-md transition-all duration-300 overflow-hidden z-40 ${
            mobileDrawerOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="p-6 space-y-6 text-center">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block text-lg font-medium hover:text-orange-600 transition"
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex flex-col items-center space-y-3">
              <a
                href="#"
                className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:border-orange-500 transition"
              >
                Sign In
              </a>
              <a
                href="#"
                className="w-full py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow hover:shadow-lg transition"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
