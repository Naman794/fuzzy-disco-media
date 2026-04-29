import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import {
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group w-max">
              <Logo
                className="h-12 w-auto group-hover:scale-105 transition-transform origin-left"
                textColor="#FFFFFF"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We turn ideas into measurable growth. A full-stack digital
              marketing agency driven by data and built on creativity.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-coral hover:text-white transition-colors text-gray-400"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-coral hover:text-white transition-colors text-gray-400"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-coral hover:text-white transition-colors text-gray-400"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-coral hover:text-white transition-colors text-gray-400"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-lg">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Performance Marketing",
                "SEO",
                "Website Development",
                "Social Media Management",
                "AI Marketing Solutions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/services/${item.toLowerCase().replace(/[ &\-]+/g, "-")}`}
                    className="text-gray-400 hover:text-coral transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-coral hover:underline text-sm font-medium mt-2 inline-block"
                >
                  All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              {[
                "About",
                "Careers",
                "FAQ",
                "Blog",
                "Case Studies",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-gray-400 hover:text-coral transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Get in touch */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-lg">
              Get in touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span>
                  Delhi HQ
                  <br />
                  123 Business Avenue,
                  <br />
                  New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-coral shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+919999697569"
                    className="hover:text-white transition-colors"
                  >
                    +91 9999697569
                  </a>
                  <a
                    href="tel:+919999137126"
                    className="hover:text-white transition-colors"
                  >
                    +91 9999137126
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-coral shrink-0" />
                <a
                  href="mailto:hello@adhookmedia.com"
                  className="hover:text-white transition-colors"
                >
                  hello@adhookmedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 AdHook Media. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
