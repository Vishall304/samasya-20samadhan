import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Home, Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Submit Problem", href: "/submit", icon: MessageSquare },
    { name: "Find Experts", href: "/experts", icon: Users },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="hidden font-bold sm:inline-block text-xl">
                ExpertConnect
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 transition-colors hover:text-foreground/80 ${
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-foreground/60"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>

          {/* Mobile logo */}
          <Link to="/" className="flex items-center space-x-2 md:hidden">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">ExpertConnect</span>
          </Link>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none"></div>
            <nav className="hidden md:flex items-center">
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button size="sm" className="ml-2" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/60 hover:bg-accent hover:text-accent-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="border-t pt-4">
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/login">Sign In</Link>
                  </Button>
                  <Button size="sm" className="w-full" asChild>
                    <Link to="/signup">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                  <MessageSquare className="h-3 w-3 text-primary-foreground" />
                </div>
                <span className="font-bold">ExpertConnect</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Connect with experts and get solutions to your problems.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Platform</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/submit" className="hover:text-foreground">Submit Problem</Link></li>
                <li><Link to="/experts" className="hover:text-foreground">Find Experts</Link></li>
                <li><Link to="/how-it-works" className="hover:text-foreground">How It Works</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-foreground">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ExpertConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
