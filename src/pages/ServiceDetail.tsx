import React from "react";
import { useParams, Link } from "react-router-dom";
import { SERVICES_DATA } from "../constants";
import { ArrowRight, CheckCircle2, Star, Plus } from "lucide-react";

export default function ServiceDetail() {
  const { id } = useParams();

  // Find the exact service based on URL slug
  let currentService = null;
  let currentCategory = "";
  Object.entries(SERVICES_DATA).forEach(([category, items]) => {
    const found = items.find(
      (item) => item.name.toLowerCase().replace(/[ &\-]+/g, "-") === id,
    );
    if (found) {
      currentService = found;
      currentCategory = category;
    }
  });

  if (!currentService) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-bold mb-4">Service not found.</h1>
        <Link to="/services" className="text-coral underline">
          Return to services
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-ink text-white py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-lime text-xs uppercase tracking-widest font-bold mb-6 block">
            {currentCategory}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            {currentService.name}
          </h1>
          <p className="text-xl text-gray-400 mb-10">{currentService.desc}</p>
          <Link
            to={`/contact?service=${id}`}
            className="bg-coral text-white px-8 py-4 rounded-full font-bold hover:bg-[#1D4ED8] transition-colors inline-block text-lg"
          >
            Get a quote
          </Link>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What we offer.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            We approach {currentService.name} with a focus on measurable results
            and sustainable growth. Our experts embed themselves into your
            business to understand exactly what moves the needle.
          </p>
        </div>
        <div className="space-y-4">
          {[
            "Custom Strategy Development",
            "Continuous Optimization",
            "Transparent Reporting",
            "Dedicated Account Manager",
          ].map((feat) => (
            <div
              key={feat}
              className="flex items-center gap-3 bg-surface p-4 rounded-xl border border-border-light"
            >
              <CheckCircle2 className="w-6 h-6 text-lime shrink-0" />
              <span className="font-medium">{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg border-y border-border-light py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface p-8 rounded-2xl">
              <div className="w-12 h-12 bg-ink text-white rounded-full flex items-center justify-center font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Audit & Strategy</h3>
              <p className="text-muted text-sm">
                We analyze your current standing and build a roadmap.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-2xl">
              <div className="w-12 h-12 bg-ink text-white rounded-full flex items-center justify-center font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Implementation</h3>
              <p className="text-muted text-sm">
                Flawless execution driven by data.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-2xl">
              <div className="w-12 h-12 bg-coral text-white rounded-full flex items-center justify-center font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Scale & Optimize</h3>
              <p className="text-muted text-sm">
                Constant testing and refinements to maximize ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-8">Ready to get started?</h2>
        <Link
          to={`/contact?service=${id}`}
          className="bg-ink text-white px-10 py-4 rounded-full font-medium hover:bg-coral transition-colors text-lg inline-flex items-center gap-2"
        >
          Talk to an expert <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
