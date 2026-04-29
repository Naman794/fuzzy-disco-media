import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "../constants";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    if (serviceParam) {
      // Find matching service name
      for (const cat of Object.values(SERVICES_DATA)) {
        const found = cat.find(
          (s) => s.name.toLowerCase().replace(/[ &\-]+/g, "-") === serviceParam,
        );
        if (found) {
          setSelectedService(found.name);
          break;
        }
      }
    }
  }, [serviceParam]);

  return (
    <div>
      <section className="bg-surface py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left: Form */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Let's start something great.
            </h1>
            <p className="text-muted text-lg mb-12">
              Whether you need a full-funnel strategy or a focused campaign,
              we're ready to help you scale.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-wider font-bold text-muted mb-2 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-border-light bg-transparent py-2 focus:outline-none focus:border-coral transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider font-bold text-muted mb-2 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-border-light bg-transparent py-2 focus:outline-none focus:border-coral transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-wider font-bold text-muted mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-border-light bg-transparent py-2 focus:outline-none focus:border-coral transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider font-bold text-muted mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border-b border-border-light bg-transparent py-2 focus:outline-none focus:border-coral transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-bold text-muted mb-2 block">
                  Service Interested In
                </label>
                <select
                  className="w-full border-b border-border-light bg-transparent py-2 focus:outline-none focus:border-coral transition-colors"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="">Select a service...</option>
                  {Object.entries(SERVICES_DATA).map(([cat, items]) => (
                    <optgroup label={cat} key={cat}>
                      {items.map((s) => (
                        <option value={s.name} key={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-bold text-muted mb-2 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border-b border-border-light bg-transparent py-2 focus:outline-none focus:border-coral transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-coral text-white px-8 py-4 rounded-full font-bold hover:bg-[#1D4ED8] transition-colors inline-flex items-center gap-2 mt-6"
              >
                Request a callback <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Right: Contact details */}
          <div className="bg-ink text-white p-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-coral shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Delhi HQ</h4>
                  <p className="text-gray-400">
                    123 Business Avenue, New Delhi, India 110001
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-coral shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-gray-400">
                    <a
                      href="tel:+919999697569"
                      className="hover:text-white transition-colors"
                    >
                      +91 9999697569
                    </a>
                  </p>
                  <p className="text-gray-400">
                    <a
                      href="tel:+919999137126"
                      className="hover:text-white transition-colors"
                    >
                      +91 9999137126
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-coral shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-400">
                    <a
                      href="mailto:hello@adhookmedia.com"
                      className="hover:text-white transition-colors"
                    >
                      hello@adhookmedia.com
                    </a>
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-12 pt-12 border-t border-white/20">
              <h4 className="font-bold mb-4">Other Offices</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Mumbai &nbsp;&bull;&nbsp; Jaipur &nbsp;&bull;&nbsp; Bhubaneswar
                <br />
                Australia &nbsp;&bull;&nbsp; UAE &nbsp;&bull;&nbsp; USA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
