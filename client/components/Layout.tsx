import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Home, Menu, X, Heart, Sparkles, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Get Help", href: "/submit", icon: MessageSquare },
    { name: "Find Expert", href: "/mentor", icon: Users },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Background with gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900"></div>
      <div className="fixed inset-0 bg-black/20"></div>

      {/* Floating background elements */}
      <div className="fixed top-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="fixed bottom-20 right-20 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="fixed top-1/2 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>

      <div className="relative z-10">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b border-purple-200 shadow-lg">
        <div className="container">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold">
                  <span className="text-purple-600">Samasya</span>
                  <span className="text-pink-500">Samadhan</span>
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
                        ? "bg-purple-100 text-purple-700 shadow-sm"
                        : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
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
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full px-5" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105" asChild>
                <Link to="/signup">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-colors duration-200"
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
          <div className="md:hidden border-t border-purple-100">
            <div className="container py-6 space-y-4">
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
                          ? "bg-purple-100 text-purple-700"
                          : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
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
              <div className="border-t border-purple-100 pt-4 space-y-3">
                <Button variant="outline" size="sm" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl py-3" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl py-3 shadow-lg" asChild>
                  <Link to="/signup">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 pt-18">{children}</main>

      {/* Enhanced Footer */}
      <footer className="relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>

        <div className="relative">
          <div className="container py-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
              {/* Enhanced Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold">
                    <span className="text-purple-300">Samasya</span>
                    <span className="text-pink-300">Samadhan</span>
                  </div>
                </div>

                <p className="text-gray-300 max-w-lg leading-relaxed text-lg">
                  Hey, we get it. Every problem has a solution. Get help safely and confidentially - no judgment, just real support when you need it.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm font-medium">100% Anonymous</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-white text-sm font-medium">Safe & Secure</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-white text-sm font-medium">No Judgment</span>
                  </div>
                </div>

                {/* Quick CTA */}
                <div className="pt-4">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <Link to="/submit">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Get Help Now
                    </Link>
                  </Button>
                </div>

                {/* Social Media Links */}
                <div className="pt-6">
                  <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200 hover:scale-110 transform">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.492"/>
                      </svg>
                    </a>
                    <a href="https://instagram.com/samasyasamadhan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-110 transform">
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://facebook.com/samasyasamadhan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 hover:scale-110 transform">
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Enhanced Quick Links */}
              <div className="space-y-6">
                <h3 className="text-white font-bold text-lg border-b border-white/20 pb-3">
                  Quick Links
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link to="/submit" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-pink-400 transition-colors"></div>
                      <span>Get Help</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/mentor" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-pink-400 transition-colors"></div>
                      <span>Find Mentors</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-pink-400 transition-colors"></div>
                      <span>How It Works</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Enhanced Support */}
              <div className="space-y-6">
                <h3 className="text-white font-bold text-lg border-b border-white/20 pb-3">
                  Support
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <div className="w-2 h-2 bg-green-400 rounded-full group-hover:bg-emerald-400 transition-colors"></div>
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:bg-amber-400 transition-colors"></div>
                      <span>Terms</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced bottom section */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-300 text-sm">
                  &copy; 2024 SamasyaSamadhan • Made with{" "}
                  <Heart className="w-4 h-4 inline text-pink-400 animate-pulse" />{" "}
                  by Vishal
                </p>
                <div className="flex items-center space-x-6">
                  <span className="text-gray-400 text-xs">Helping people since 2024</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">All systems operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
