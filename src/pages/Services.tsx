import React from "react";
import { Link } from "react-router-dom";
import { SERVICES_DATA } from "../constants"; // Let me create constants.ts
import {
  ArrowRight,
  MoveRight,
  Layers,
  PenTool,
  Code,
  TrendingUp,
} from "lucide-react";

const icons = {
  Strategy: Layers,
  Design: PenTool,
  Development: Code,
  Growth: TrendingUp,
};

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 lg:px-12 py-20 md:py-32 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 relative">
          Full-stack marketing services.
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          From the first pixel to the final conversion, we handle every aspect
          of your digital presence. Discover our interconnected approach to
          brand growth.
        </p>
      </section>

      {/* Services List */}
      <section className="pb-32 px-6 lg:px-12 max-w-7xl mx-auto space-y-32">
        {Object.entries(SERVICES_DATA).map(([category, items]) => {
          const Icon = icons[category as keyof typeof icons] || Layers;
          return (
            <div
              key={category}
              className="grid md:grid-cols-[1fr_2fr] gap-12 items-start border-t border-border-light pt-12"
            >
              <div className="sticky top-32">
                <Icon className="w-12 h-12 text-coral mb-6" />
                <h2 className="text-3xl font-bold mb-4">{category}</h2>
                <p className="text-muted mb-6">
                  Expert solutions tailored to elevate your brand's{" "}
                  {category.toLowerCase()}.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {items.map((service) => (
                  <Link
                    to={`/services/${service.name.toLowerCase().replace(/[ &\-]+/g, "-")}`}
                    key={service.name}
                    className="block bg-surface p-8 rounded-2xl border border-border-light hover:border-coral group transition-colors"
                  >
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-sm text-muted mb-6">{service.desc}</p>
                    <span className="text-coral text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <MoveRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Process */}
      <section className="bg-ink text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Our Process
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                name: "Discover",
                desc: "Auditing your brand, competitors, and market opportunities.",
              },
              {
                step: "02",
                name: "Strategize",
                desc: "Building a bespoke roadmap with clear KPIs and timelines.",
              },
              {
                step: "03",
                name: "Execute",
                desc: "Deploying creative and campaigns across selected channels.",
              },
              {
                step: "04",
                name: "Optimize",
                desc: "Analyzing data to refine targeting and maximize ROAS.",
              },
            ].map((s) => (
              <div key={s.step} className="border-t border-white/20 pt-6">
                <div className="text-lime font-mono text-xl mb-4">{s.step}</div>
                <h3 className="text-2xl font-bold mb-2">{s.name}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center bg-coral text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Not sure where to start? Let's chat.
        </h2>
        <Link
          to="/contact"
          className="bg-ink text-white px-10 py-4 rounded-full font-medium hover:bg-white hover:text-ink transition-colors text-lg inline-flex items-center gap-2"
        >
          Request a consultation <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
