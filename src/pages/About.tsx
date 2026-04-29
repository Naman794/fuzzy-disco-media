import React from "react";
import { motion } from "motion/react";
import { Award, Users, Globe2, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="px-6 lg:px-12 py-20 md:py-32 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Built on creativity. Driven by data.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted leading-relaxed"
          >
            We're a global marketing agency obsessed with measurable growth.
          </motion.p>
        </div>
        <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
          {/* Abstract image grid */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-ink h-64 rounded-2xl"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-coral h-64 rounded-2xl translate-y-8"
          ></motion.div>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-surface border-y border-border-light py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            The Left-Brain & Right-Brain Philosophy
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Marketing has changed. Creative that doesn't convert is just art.
            Data without a story is just numbers. At AdHook, we unify these two
            hemispheres. Our strategists work alongside our designers, and our
            media buyers collaborate with our copywriters. The result? Campaigns
            that capture attention and drive aggressive revenue growth.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-coral mb-4 block">
            Our Mission
          </span>
          <p className="text-xl font-medium tracking-tight">
            To engineer growth for bold brands through transparent, data-driven
            marketing.
          </p>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-lime mb-4 block text-ink">
            Our Vision
          </span>
          <p className="text-xl font-medium tracking-tight">
            To be the most trusted performance marketing partner globally.
          </p>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-ink mb-4 block">
            Our Values
          </span>
          <ul className="space-y-2 text-muted">
            <li>&bull; Extreme Ownership</li>
            <li>&bull; Creative Agility</li>
            <li>&bull; Data Truth</li>
          </ul>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-ink text-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-sm font-bold uppercase tracking-wider text-gray-400">
          <div>
            <div className="text-4xl text-white mb-2">8+</div>Years
          </div>
          <div>
            <div className="text-4xl text-white mb-2">200+</div>Brands
          </div>
          <div>
            <div className="text-4xl text-white mb-2">150+</div>Team members
          </div>
          <div>
            <div className="text-4xl text-white mb-2">7</div>Global Offices
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-4xl text-coral mb-2">25+</div>Awards
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Leadership Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] bg-surface border border-border-light rounded-2xl mb-4 group-hover:-translate-y-2 transition-transform"></div>
              <h4 className="font-bold text-lg">Partner Name</h4>
              <p className="text-sm text-muted">Role / Title</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 bg-surface text-center px-6 border-t border-border-light">
        <h2 className="text-4xl font-bold mb-8">Ready to grow?</h2>
        <div className="flex gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-coral text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#1D4ED8] transition-colors shadow-lg hover:-translate-y-1 transform"
          >
            Contact us
          </Link>
          <Link
            to="/careers"
            className="bg-bg text-ink border border-border-light px-8 py-3.5 rounded-full font-medium hover:bg-surface transition-colors hover:-translate-y-1 transform"
          >
            Join the team
          </Link>
        </div>
      </section>
    </div>
  );
}
