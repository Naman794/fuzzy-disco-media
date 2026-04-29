import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "../Logo";

const SERVICES = [
  {
    category: "Strategy",
    items: ["Digital Marketing Strategy", "Media Buying & Planning"],
  },
  {
    category: "Design",
    items: ["Animation Videos", "Graphic Design", "Video Production"],
  },
  {
    category: "Development",
    items: ["App Development", "Website Development"],
  },
  {
    category: "Growth",
    items: [
      "Affiliate Marketing",
      "Content Marketing",
      "Influencer Marketing",
      "ORM",
      "Performance Marketing",
      "SEO",
      "Social Media Management",
      "AI Marketing Solutions",
    ],
  },
];

const INDUSTRIES = [
  "B2B",
  "E-Commerce",
  "Education",
  "FMCG",
  "Government",
  "Healthcare",
  "NGO",
  "Real Estate",
  "Sustainable Energy",
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center",
          scrolled
            ? "bg-surface/90 backdrop-blur-md shadow-sm"
            : "bg-surface/50 backdrop-blur-sm",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <Logo className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform origin-left" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors py-8",
                  isActive("/services")
                    ? "text-coral"
                    : "text-ink hover:text-coral",
                )}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>

              {/* Services Mega Menu */}
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
                    className="absolute top-full -left-48 w-[800px] bg-white shadow-xl rounded-2xl border border-border-light p-8 grid grid-cols-4 gap-8"
                  >
                    {SERVICES.map((col) => (
                      <div key={col.category}>
                        <h4 className="font-display font-semibold mb-4 text-ink">
                          {col.category}
                        </h4>
                        <ul className="space-y-2">
                          {col.items.map((item) => (
                            <li key={item}>
                              <Link
                                to={`/services/${item.toLowerCase().replace(/[ &\-]+/g, "-")}`}
                                className="text-sm text-muted hover:text-coral transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-4 border-t border-border-light pt-4 mt-2">
                      <Link
                        to="/services"
                        className="text-coral font-medium text-sm flex items-center gap-1 hover:underline"
                      >
                        Explore all services &rarr;
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors py-8",
                  isActive("/industries")
                    ? "text-coral"
                    : "text-ink hover:text-coral",
                )}
              >
                Industries <ChevronDown className="w-4 h-4" />
              </button>

              {/* Industries Mega Menu */}
              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
                    className="absolute top-full -left-32 w-[600px] bg-white shadow-xl rounded-2xl border border-border-light p-8 grid grid-cols-3 gap-6"
                  >
                    {INDUSTRIES.map((item) => (
                      <Link
                        key={item}
                        to={`/industries/${item.toLowerCase().replace(/[ &\-]+/g, "-")}`}
                        className="text-sm text-muted hover:text-coral transition-colors block p-2 -mx-2 rounded-lg hover:bg-bg"
                      >
                        {item}
                      </Link>
                    ))}
                    <div className="col-span-3 border-t border-border-light pt-4 mt-2">
                      <Link
                        to="/industries"
                        className="text-coral font-medium text-sm flex items-center gap-1 hover:underline"
                      >
                        Explore all industries &rarr;
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/case-studies"
              className={cn(
                "text-sm font-medium transition-colors",
                isActive("/case-studies")
                  ? "text-coral"
                  : "text-ink hover:text-coral",
              )}
            >
              Case Studies
            </Link>
            <Link
              to="/blog"
              className={cn(
                "text-sm font-medium transition-colors",
                isActive("/blog") ? "text-coral" : "text-ink hover:text-coral",
              )}
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className={cn(
                "text-sm font-medium transition-colors",
                isActive("/careers")
                  ? "text-coral"
                  : "text-ink hover:text-coral",
              )}
            >
              Careers
            </Link>
            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors",
                isActive("/about") ? "text-coral" : "text-ink hover:text-coral",
              )}
            >
              About
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-coral text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1D4ED8] transition-colors shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 transform inline-block"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-ink z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 pb-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-lg font-display">
              <div className="space-y-4">
                <div className="font-bold border-b border-border-light pb-2">
                  Services
                </div>
                <ul className="space-y-3 pl-4">
                  <li>
                    <Link to="/services" className="text-coral">
                      Explore All Services
                    </Link>
                  </li>
                  {SERVICES.flatMap((c) => c.items)
                    .slice(0, 5)
                    .map((item) => (
                      <li key={item}>
                        <Link
                          to={`/services/${item.toLowerCase().replace(/[ &\-]+/g, "-")}`}
                          className="text-muted hover:text-ink"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="font-bold border-b border-border-light pb-2">
                  Industries
                </div>
                <ul className="space-y-3 pl-4">
                  <li>
                    <Link to="/industries" className="text-coral">
                      Explore All Industries
                    </Link>
                  </li>
                  {INDUSTRIES.slice(0, 5).map((item) => (
                    <li key={item}>
                      <Link
                        to={`/industries/${item.toLowerCase().replace(/[ &\-]+/g, "-")}`}
                        className="text-muted hover:text-ink"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/case-studies"
                className="font-bold border-b border-border-light pb-2 block"
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="font-bold border-b border-border-light pb-2 block"
              >
                Blog
              </Link>
              <Link
                to="/careers"
                className="font-bold border-b border-border-light pb-2 block"
              >
                Careers
              </Link>
              <Link
                to="/about"
                className="font-bold border-b border-border-light pb-2 block"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="bg-coral text-white text-center py-4 rounded-full font-medium mt-4 block"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
