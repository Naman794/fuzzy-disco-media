import React from "react";
import { useParams, Link } from "react-router-dom";
import { INDUSTRIES_DATA } from "../constants";
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

export default function IndustryDetail() {
  const { id } = useParams();

  const currentIndustry = INDUSTRIES_DATA.find(
    (ind) => ind.name.toLowerCase().replace(/[ &\-]+/g, "-") === id,
  );

  if (!currentIndustry) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-bold mb-4">Industry not found.</h1>
        <Link to="/industries" className="text-coral underline">
          Return to industries
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-surface border-b border-border-light py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-ink">
            {currentIndustry.name} Growth Strategies
          </h1>
          <p className="text-xl text-muted mb-10 leading-relaxed font-sans">
            {currentIndustry.desc} We partner with{" "}
            {currentIndustry.name.toLowerCase()} brands to navigate complexities
            and dominate the market.
          </p>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Industry Challenges</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 p-6 bg-bg rounded-2xl">
                <AlertCircle className="w-6 h-6 text-coral shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Challenge {i}</h4>
                  <p className="text-sm text-muted">
                    Placeholder for specific pain points related to high
                    acquisition costs, retention, etc.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Our Solutions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex gap-4 p-6 bg-ink text-white rounded-2xl"
              >
                <CheckCircle2 className="w-6 h-6 text-lime shrink-0" />
                <div>
                  <h4 className="font-bold mb-1 border-b border-white/10 pb-2">
                    Solution {i}
                  </h4>
                  <p className="text-sm text-gray-400 pt-2">
                    Targeted performance marketing, CRO, and specialized
                    campaigns.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-coral text-white text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let's grow your {currentIndustry.name} brand.
        </h2>
        <Link
          to="/contact"
          className="bg-ink text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-ink transition-colors text-lg inline-flex items-center gap-2"
        >
          Get in touch <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
