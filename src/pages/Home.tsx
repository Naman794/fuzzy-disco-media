import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  Palette,
  Code,
  CheckCircle,
  Quote,
  Mail,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Lightbulb,
  Megaphone,
  Video,
  MonitorPlay,
  Monitor,
  Smartphone,
  Share2,
  TrendingUp,
  Search,
  FileText,
  Users,
  Star,
  LucideIcon,
} from "lucide-react";

// Icon mapping for dynamic rendering
const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Megaphone,
  Palette,
  Video,
  MonitorPlay,
  Monitor,
  Smartphone,
  Share2,
  TrendingUp,
  Search,
  FileText,
  Users,
  Star,
};

const SERVICES_DATA = {
  Strategy: [
    {
      name: "Strategy and Planning",
      desc: "Crafting big ideas to help your brand conquer the digital universe.",
      icon: "Lightbulb",
    },
    {
      name: "Media Buying & Planning",
      desc: "Getting your ads in the right place, at the right time, for the right clicks.",
      icon: "Megaphone",
    },
  ],
  Design: [
    {
      name: "Graphic Design",
      desc: "Where your brand's style gets a glow-up and grabs all the eyeballs.",
      icon: "Palette",
    },
    {
      name: "Video Production",
      desc: "Turning your stories into scroll-stopping showstoppers.",
      icon: "Video",
    },
    {
      name: "Animation Videos",
      desc: "Making your ideas bounce, fly, and dance on screens everywhere.",
      icon: "MonitorPlay",
    },
  ],
  Development: [
    {
      name: "Website Development",
      desc: "Building websites that are as smooth as your best sales pitch.",
      icon: "Monitor",
    },
    {
      name: "App Development",
      desc: "Creating apps that make swiping, tapping, and scrolling a total breeze.",
      icon: "Smartphone",
    },
  ],
  Growth: [
    {
      name: "Social Media Management",
      desc: "Turning likes and shares into long-term relationships with your audience.",
      icon: "Share2",
    },
    {
      name: "Performance Marketing",
      desc: "Serving up data-driven campaigns that deliver results like a boss.",
      icon: "TrendingUp",
    },
    {
      name: "Search Engine Optimization (SEO)",
      desc: "Polishing your online image so it shines brighter than your competition.",
      icon: "Search",
    },
    {
      name: "Content Marketing",
      desc: "Spinning words into magic that turns visitors into loyal fans.",
      icon: "FileText",
    },
    {
      name: "Affiliate Marketing",
      desc: "Growing your reach with partners who love to sell your stuff.",
      icon: "Users",
    },
    {
      name: "Influencer Marketing",
      desc: "Pairing your brand with trendsetters to create buzz (and sales).",
      icon: "Star",
    },
  ],
};

const INDUSTRIES_DATA = [
  {
    name: "B2B",
    info: "Accelerating B2B outreach with data-driven acquisition strategies.",
    image:
      "https://ibb.co/zWjGg1pN",
  },
  {
    name: "E-Commerce",
    info: "Scaling E-Commerce brands with high-converting campaigns.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Education",
    info: "Empowering educational institutions to reach more students globally.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "FMCG",
    info: "Driving brand awareness and consumer engagement for FMCG goods.",
    image:
      "https://images.unsplash.com/photo-1605342792695-0e3fcdbedfcf?q=80&w=2069&auto=format&fit=crop",
  },
  {
    name: "Government",
    info: "Delivering impactful citizen-centric digital communication.",
    image:
      "https://images.unsplash.com/photo-1523292562811-6fa0658fa991?q=80&w=1953&auto=format&fit=crop",
  },
  {
    name: "Healthcare",
    info: "Enhancing patient experiences through innovative digital solutions.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "NGO",
    info: "Amplifying social impact and donor engagement through digital outreach.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Real Estate",
    info: "Connecting real estate developers with high-intent buyers.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
  },
  {
    name: "Sustainable Energy",
    info: "Promoting green initiatives with targeted digital strategies.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
  },
];

const TESTIMONIALS = [
  {
    name: "Sahil Malik",
    title: "CEO, Earthen Threads",
    text: "I was struggling to get my small business noticed online. AdHook Media helped me reach more customers through their amazing social media marketing. My sales have gone up, and I'm really happy with the results!",
  },
  {
    name: "Kartik",
    title: "Marketing Executive, Renaissance Infratech",
    text: "AdHook Media completely transformed our digital marketing strategy. Their team helped us understand our target audience better and develop a plan that actually worked. We've seen a significant increase in website traffic and leads since partnering with them.",
  },
  {
    name: "Himani Chandel",
    title: "Program Manager Plan India",
    text: "We needed high-quality videos to showcase our products, and AdHook Media delivered beyond our expectations. Their creative team brought our vision to life, and the final product was amazing. We've received incredible feedback from our customers.",
  },
];

const LOCATIONS_INDIA = [
  {
    city: "Delhi",
    address: [
      "A-49 Engine House Mohan",
      "Cooperative Industrial",
      "Estate New Delhi - 110044",
    ],
  },
  {
    city: "Mumbai",
    address: [
      "Raheja Complex, Lotus",
      "A/4 Kalyan West, Mumbai,",
      "Maharashtra - 421301",
    ],
  },
  {
    city: "Jaipur",
    address: [
      "503/1, Kendriya Vihar 2",
      "Karolan Ka Barh",
      "Jagatpura, Jaipur -",
      "303905",
    ],
  },
  {
    city: "Orissa",
    address: [
      "1st Floor , Plot No. : 518 ,",
      "Sahid Nagar,",
      "Bhubaneswar , Odisha",
    ],
  },
];

const LOCATIONS_INTL = [
  {
    city: "Australia",
    address: ["53 Malvern Avenue, Baulkham Hills,", "NSW-2153, Australia"],
  },
  {
    city: "UAE",
    address: ["Flat 512, Sigma Residence, Mankhool,", "Dubai - 122002"],
  },
  {
    city: "USA",
    address: ["11540 Crowned Sparrow Lane Tampa,", "Florida - 33626"],
  },
];

export default function Home() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof SERVICES_DATA>("Growth");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeLocationTab, setActiveLocationTab] = useState<"india" | "intl">(
    "india",
  );

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  };

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 250]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Background Image with Blur and Parallax */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')",
            y: backgroundY,
            scale: 1.15,
          }}
        >
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        </motion.div>

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 left-10 w-24 h-24 border-4 border-coral/30 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -15, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-32 w-32 h-32 bg-lime/20 rounded-xl"
          />
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, 15, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-16 h-16 border border-ink/40 rounded-tr-3xl rounded-bl-3xl"
          />
        </div>

        <div className="relative px-6 lg:px-12 py-24 md:py-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted mb-4 block">
                Digital Marketing Agency
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-ink leading-[1.1]">
                We turn ideas into measurable growth.
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted max-w-lg leading-relaxed"
            >
              We combine data science with creative storytelling to scale brands
              globally. Your partner for full-funnel digital marketing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="bg-coral text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#1D4ED8] transition-colors shadow-lg hover:-translate-y-1 transform flex items-center gap-2"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className="bg-surface text-ink border border-border-light px-8 py-3.5 rounded-full font-medium hover:bg-bg transition-colors hover:-translate-y-1 transform"
              >
                View our work
              </Link>
            </motion.div>
          </div>
          <div className="lg:w-1/2 relative h-[400px] w-full flex justify-center items-center">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-coral/20 to-lime/30 blur-3xl"
            />
            <div className="relative z-10 w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Digital Marketing Growth"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-ink mb-10 md:mb-16">
          About us.
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="lg:w-1/2">
            <p className="text-ink text-base md:text-xl leading-relaxed font-medium">
              At AdHook Media, our team is a vibrant mix of young, passionate
              marketers, designers, and analysts, united by a drive for results.
              We believe the most effective marketing campaigns are born from
              the perfect blend of creativity and data-driven insights. Our
              "left-brain" thinkers craft captivating brand stories and visuals,
              while our "right-brain" strategists optimise campaigns to deliver
              measurable results. This synergy allows us to create marketing
              solutions that inspire and perform, helping your brand stand out
              in today's competitive landscape.
            </p>
          </div>
          <div className="lg:w-1/2 relative w-full mt-8 lg:mt-0">
            <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team at AdHook Media"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-ink mb-10 md:mb-16">
          Industries we serve.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.name}
              className="group relative w-full aspect-square [perspective:1000px]"
            >
              <Link
                to={`/industries/${ind.name.toLowerCase().replace(/[ &\-]+/g, "-")}`}
                className="w-full h-full block relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
              >
                {/* Front Face */}
                <div className="absolute inset-0 bg-surface border border-border-light overflow-hidden rounded-2xl flex flex-col justify-end transition-none [backface-visibility:hidden]">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="relative z-10 p-6 md:p-8 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 transition-colors">
                      <Globe2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl text-white drop-shadow-md transition-colors">
                      {ind.name}
                    </h3>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 bg-black text-white p-6 md:p-8 rounded-2xl flex items-center justify-center text-center shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-sm md:text-base lg:text-[1.125rem] font-medium leading-normal tracking-wide">
                    {ind.info}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-coral mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-ink">
                Full-stack solutions.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-ink font-medium flex items-center gap-2 hover:text-coral transition-colors"
            >
              Explore all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex gap-4 border-b border-border-light mb-12 overflow-x-auto pb-4 hide-scrollbar">
            {Object.keys(SERVICES_DATA).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as keyof typeof SERVICES_DATA)}
                className={`text-lg font-medium px-4 py-2 transition-colors shrink-0 ${activeTab === tab ? "border-b-2 border-coral text-ink" : "text-muted hover:text-ink"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          >
            {SERVICES_DATA[activeTab].map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.name}
                  to={`/services/${service.name.toLowerCase().replace(/[ &\-]+/g, "-")}`}
                  className="bg-surface border border-border-light p-8 md:p-10 rounded-xl hover:border-[#2563EB] hover:shadow-[0_8px_30px_rgb(37,99,235,0.12)] transition-all group flex flex-col items-center text-center justify-between min-h-[380px]"
                >
                  <div className="flex flex-col items-center">
                    {Icon && (
                      <div className="w-20 h-20 bg-blue-50/50 rounded-2xl flex items-center justify-center mb-6 text-[#2563EB] group-hover:scale-110 transition-transform">
                        <Icon strokeWidth={1.5} className="w-10 h-10" />
                      </div>
                    )}
                    <h3 className="font-bold text-2xl mb-4 group-hover:text-[#2563EB] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-base text-muted/80 leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-8 bg-[#2563EB] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#1D4ED8] transition-colors flex items-center gap-2 group-hover:shadow-md group-hover:-translate-y-0.5 transform">
                    Learn more <ChevronRight className="w-4 h-4 mt-0.5" />
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="border-y border-border-light bg-surface overflow-hidden py-10">
        <div className="flex gap-12 whitespace-nowrap animate-[marquee_30s_linear_infinite] opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Duplicate for infinite effect */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center shrink-0">
              <span className="font-display font-bold text-xl">
                Chandigarh Police
              </span>
              <span className="font-display font-bold text-xl">
                Seedling Public School
              </span>
              <span className="font-display font-bold text-xl">Aarambh</span>
              <span className="font-display font-bold text-xl">
                DBS Global University
              </span>
              <span className="font-display font-bold text-xl">FICCI</span>
              <span className="font-display font-bold text-xl">
                Plaksha University
              </span>
              <span className="font-display font-bold text-xl">ScholarLab</span>
              <span className="font-display font-bold text-xl">BYJU'S</span>
              <span className="font-display font-bold text-xl">
                Learning Links Foundation
              </span>
              <span className="font-display font-bold text-xl">
                Jaipur National University
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Feature */}
      <section className="py-20 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-ink rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
          <div className="lg:w-1/2 p-12 md:p-20 text-white relative z-10 flex flex-col justify-center">
            <span className="text-lime text-xs uppercase tracking-widest font-bold mb-6">
              Featured Case Study
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Revolutionizing Healthcare Acquisition
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              See how we helped a leading multi-specialty hospital drive
              unprecedented patient growth while optimizing ad spend.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl font-bold text-coral mb-2">
                  50% &darr;
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  CPC
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime mb-2">4X</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  Appointments
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  60% &uarr;
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  Impression Share
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  32% &uarr;
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  New Patients
                </div>
              </div>
            </div>

            <Link
              to="/case-studies/healthcare-acquisition"
              className="inline-flex max-w-fit items-center gap-2 bg-white text-ink px-6 py-3 rounded-full font-medium hover:bg-lime transition-colors"
            >
              Read Case Study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:w-1/2 relative bg-surface p-12 flex items-center justify-center min-h-[400px]">
            {/* Abstract chart graphic */}
            <div className="w-full max-w-md space-y-6">
              {[40, 70, 100].map((w, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 text-right text-sm font-mono text-muted pl-4">
                    Q{i + 1}
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${w}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-12 bg-coral rounded-r-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-12 bg-bg border-y border-border-light overflow-hidden">
        <div className="max-w-4xl mx-auto relative px-12">
          <div className="min-h-[300px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-white p-10 md:p-14 rounded-2xl shadow-sm text-center border-b-4 border-transparent hover:border-blue-500 transition-colors"
              >
                <Quote className="w-10 h-10 text-coral mb-6 mx-auto opacity-30" />
                <p className="text-gray-500 text-lg md:text-2xl leading-relaxed mb-10 italic">
                  "{TESTIMONIALS[activeTestimonial].text}"
                </p>
                <div>
                  <div className="text-xl font-bold text-ink mb-1">
                    {TESTIMONIALS[activeTestimonial].name}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {TESTIMONIALS[activeTestimonial].title}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:ml-0 p-3 bg-white border border-border-light rounded-full text-ink hover:text-coral hover:border-coral transition-colors shadow-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:mr-0 p-3 bg-white border border-border-light rounded-full text-ink hover:text-coral hover:border-coral transition-colors shadow-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-3 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === i
                    ? "bg-coral scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 md:py-24 px-6 lg:px-12 max-w-7xl mx-auto bg-[#e5dfd3]/30 rounded-3xl mb-16 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-ink mb-10 md:mb-16 text-center">
          Presence.
        </h2>
        <div className="flex justify-center gap-4 sm:gap-8 mb-12">
          <button
            onClick={() => setActiveLocationTab("india")}
            className={`font-medium pb-2 px-2 uppercase tracking-wide transition-colors ${activeLocationTab === "india" ? "text-[#8B5CF6] border-b-2 border-[#8B5CF6]" : "text-ink hover:text-[#8B5CF6]"}`}
          >
            India
          </button>
          <button
            onClick={() => setActiveLocationTab("intl")}
            className={`font-medium pb-2 px-2 uppercase tracking-wide transition-colors ${activeLocationTab === "intl" ? "text-[#8B5CF6] border-b-2 border-[#8B5CF6]" : "text-ink hover:text-[#8B5CF6]"}`}
          >
            International
          </button>
        </div>

        <div
          className={`grid gap-6 justify-center ${activeLocationTab === "india" ? "sm:grid-cols-2 md:grid-cols-4" : "sm:grid-cols-2 md:grid-cols-3"}`}
        >
          {(activeLocationTab === "india"
            ? LOCATIONS_INDIA
            : LOCATIONS_INTL
          ).map((loc, i) => (
            <div
              key={i}
              className="p-8 bg-[#FFFDF9] rounded-xl border border-border-light shadow-sm flex flex-col items-center text-center"
            >
              <h3 className="font-bold text-2xl mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6" /> {loc.city}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink/80">
                {loc.address.map((line, j) => (
                  <React.Fragment key={j}>
                    {line}
                    {j < loc.address.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-coral text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Want to maximise your ROAS?
          </h2>
          <Link
            to="/contact"
            className="bg-ink text-white px-10 py-4 rounded-full font-medium hover:bg-white hover:text-ink transition-colors text-lg inline-flex items-center gap-2"
          >
            Let's talk growth <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-ink text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Mail className="w-6 h-6 text-lime" /> Inside the Hook.
            </h3>
            <p className="text-gray-400 mt-2">
              Get agency insights and marketing trends in your inbox.
            </p>
          </div>
          <form
            className="flex w-full md:w-auto gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-lime flex-grow md:w-80"
              required
            />
            <button
              type="submit"
              className="bg-lime text-ink px-6 py-3 rounded-full font-bold hover:bg-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
