import React from "react";
import { Link } from "react-router-dom";
import { INDUSTRIES_DATA } from "../constants";
import { ArrowRight, Globe2, MoveRight } from "lucide-react";

export default function Industries() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 lg:px-12 py-20 md:py-32 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Industry expertise that delivers.
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          We don't believe in one-size-fits-all. Our specialized teams
          understand the unique challenges, audience behaviors, and regulatory
          landscapes of your specific sector.
        </p>
      </section>

      {/* Grid */}
      <section className="pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <Link
              key={ind.name}
              to={`/industries/${ind.name.toLowerCase().replace(/[ &\-]+/g, "-")}`}
              className="bg-surface border border-border-light p-8 rounded-2xl hover:border-coral group transition-all"
            >
              <div className="w-14 h-14 bg-bg rounded-full flex items-center justify-center group-hover:bg-coral group-hover:text-white transition-colors mb-6 text-ink">
                <Globe2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{ind.name}</h3>
              <p className="text-muted mb-8 text-sm">{ind.desc}</p>
              <span className="text-coral text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore <MoveRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-ink text-white text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Don't see your industry? We adapt.
        </h2>
        <Link
          to="/contact"
          className="bg-lime text-ink px-10 py-4 rounded-full font-bold hover:bg-white transition-colors text-lg inline-flex items-center gap-2"
        >
          Let's talk <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
