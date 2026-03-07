import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Users,
  Home,
  Menu,
  X,
  Sparkles,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContent";


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Find Expert", href: "/mentor", icon: Users },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Global pure white background */}
      <div className="fixed inset-0 bg-white"></div>

      <div className="relative z-10">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b border-[#D6EAF8] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#5DADE2] rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200">
                  <img
                    src="/logo.png"
                    alt="Samasya Samadhan logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold">
                  <span className="text-[#2E86C1]">Samasya</span>
                  <span className="text-[#5DADE2]">Samadhan</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      active
                        ? "bg-[#D6EAF8] text-[#1B4F72] shadow-sm"
                        : "text-gray-600 hover:text-[#1B4F72] hover:bg-[#EBF5FB]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {user ?(
                <Button
                  size="sm"
                  className="bg-[#5DADE2] hover:bg-[#3498DB] text-white rounded-full px-4 sm:px-6 py-2.5"
                  asChild
                >
                  <Link to="/profile">Profile</Link>
                </Button>
              ) :  (
                <>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-[#1B4F72] hover:bg-[#EBF5FB] rounded-full px-4 sm:px-5"
                asChild
              >
                <Link to="/login">Sign In</Link>
              </Button>
              <Button
                size="sm"
                className="bg-[#5DADE2] hover:bg-[#3498DB] text-white rounded-full px-4 sm:px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                asChild
              >
                <Link to="/signup">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started
                </Link>
              </Button>
              </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#D6EAF8] text-gray-600 hover:text-[#1B4F72] transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#D6EAF8] bg-white/95 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                        active
                          ? "bg-[#D6EAF8] text-[#1B4F72]"
                          : "text-gray-600 hover:text-[#1B4F72] hover:bg-[#EBF5FB]"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="border-t border-[#D6EAF8] pt-4 space-y-3">
                {user ? (
                  <Button
                    size="sm"
                    className="w-full bg-[#5DADE2] hover:bg-[#3498DB] text-white rounded-xl py-3"
                    asChild
                  >
                    <Link to="/profile">Profile</Link>
                </Button>
              ) : (
               <>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-[#D6EAF8] text-[#1B4F72] hover:bg-[#EBF5FB] rounded-xl py-3"
                  asChild
                >
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-[#5DADE2] hover:bg-[#3498DB] text-white rounded-xl py-3 shadow-lg rounded-xl transition-all duration-200"
                  asChild
                >
                  <Link to="/signup">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get Started
                  </Link>
                </Button>
              </>
              )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 pt-16 sm:pt-18">{children}</main>

      {/* Footer */}
      <footer className="relative overflow-hidden mt-12 bg-white border-t border-[#D6EAF8]">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#5DADE2] rounded-2xl flex items-center justify-center shadow-lg">
                    <img
                      src="/logo.png"
                      alt="Samasya Samadhan logo"
                      className="w-8 sm:w-9 h-8 sm:h-9 object-contain"
                    />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold">
                    <span className="text-[#2E86C1]">Samasya</span>
                    <span className="text-[#5DADE2]">Samadhan</span>
                  </div>
                </div>

                <p className="text-gray-700 max-w-lg leading-relaxed text-base sm:text-lg">
                  Hey, we get it. Every problem has a solution. Get help safely and confidentially - no judgment, just real support when you need it.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-800 text-xs sm:text-sm font-medium">
                      100% Anonymous
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-800 text-xs sm:text-sm font-medium">
                      Safe & Secure
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#5DADE2] rounded-full"></div>
                    <span className="text-gray-800 text-xs sm:text-sm font-medium">
                      No Judgment
                    </span>
                  </div>
                </div>

                {/* Quick CTA */}
                <div className="pt-4">
                  <Button
                    className="bg-[#5DADE2] hover:bg-[#3498DB] text-white rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base min-h-[44px]"
                    asChild
                  >
                    <Link to="/submit">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Share Your Problem
                    </Link>
                  </Button>
                </div>

              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-[#1B4F72] font-bold text-lg border-b border-[#D6EAF8] pb-3">
                  Quick Links
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/mentor"
                      className="text-gray-600 hover:text-[#1B4F72] transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-2 h-2 bg-[#5DADE2] rounded-full group-hover:bg-[#3498DB] transition-colors"></div>
                      <span>Find Expert</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/how-it-works"
                      className="text-gray-600 hover:text-[#1B4F72] transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-2 h-2 bg-[#5DADE2] rounded-full group-hover:bg-[#3498DB] transition-colors"></div>
                      <span>How It Works</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-600 hover:text-[#1B4F72] transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-2 h-2 bg-[#5DADE2] rounded-full group-hover:bg-[#3498DB] transition-colors"></div>
                      <span>About</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div className="space-y-6">
                <h3 className="text-[#1B4F72] font-bold text-lg border-b border-[#D6EAF8] pb-3">
                  Support
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/terms"
                      className="text-gray-600 hover:text-[#1B4F72] transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-2 h-2 bg-[#5DADE2] rounded-full group-hover:bg-[#3498DB] transition-colors"></div>
                      <span>Terms</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-gray-600 hover:text-[#1B4F72] transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-2 h-2 bg-[#5DADE2] rounded-full group-hover:bg-[#3498DB] transition-colors"></div>
                      <span>Privacy</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom section with social icons */}
            <div className="mt-16 pt-8 border-t border-[#D6EAF8]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1B4F72] hover:bg-[#5DADE2] hover:text-white transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1B4F72] hover:bg-[#5DADE2] hover:text-white transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1B4F72] hover:bg-[#5DADE2] hover:text-white transition-all duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1B4F72] hover:bg-[#5DADE2] hover:text-white transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-500 text-xs md:text-sm text-center md:text-right">
                  &copy; SamasyaSamadhan. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
