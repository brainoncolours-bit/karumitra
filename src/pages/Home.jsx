import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowUpRight, 
  Compass, 
  Building2, 
  MapPin, 
  Maximize, 
  Layers, 
  Trees, 
  ShieldCheck, 
  MessageSquare, 
  Coins, 
  Users, 
  Phone, 
  Mail, 
  Globe,
  ChevronRight
} from 'lucide-react';

// --- STAGGER CONTAINER ANIMATION CONFIG ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

// --- MODERN REVEAL ON SCROLL ---
const PremiumReveal = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function LuxuryRealEstateHome() {
  const containerRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  
  // Parallax calculations for the editorial split Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yImageParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  // Data
  const premiumEstates = [
    { num: "01", title: "The Obsidian Villa", price: "$4,850,000", sqft: "6,200 SQ FT", location: "Beverly Crest", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=90" },
    { num: "02", title: "Lumina Penthouse", price: "$3,200,000", sqft: "3,800 SQ FT", location: "Metropolis Highs", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90" },
    { num: "03", title: "Elysian Coast Estate", price: "$8,900,000", sqft: "9,400 SQ FT", location: "Malibu Edge", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=90" },
    { num: "04", title: "The Brutalist Pavilion", price: "$5,150,000", sqft: "5,500 SQ FT", location: "Highland Valley", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-[#0F2419] font-sans overflow-x-hidden selection:bg-[#0F2419] selection:text-white antialiased">
      
      {/* --- FLOATING PREMIUM NAVIGATION BAR --- */}
    

      {/* --- EDITORIAL HERO SECTION (SPLIT 50/50 GREEN & WHITE) --- */}
      
      <div className="relative min-h-screen grid lg:grid-cols-2 items-center pt-20 lg:pt-0" id='#'>
        
        {/* Left Side: Crisp White Dynamic Typography Block */}
        <div className="h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 relative z-20 bg-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-[#0F2419]/30"></span>
              <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">
                Architectural Pioneers
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter text-[#0F2419] mb-8">
              CRAFTING <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F2419] to-emerald-600">ENDURING</span> <br/>
              LEGACIES.
            </h1>
            
            <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed mb-10">
              We deliver high-end construction solutions with absolute precision, safety, and vision. From residential masterworks to structural infrastructure, our commitment to architectural luxury stands unmatched.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-[#0F2419] text-white font-bold px-8 py-5 rounded-full flex items-center gap-3 shadow-xl hover:bg-emerald-600 transition-colors group text-xs tracking-widest uppercase">
                Request Free Consultation 
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#projects" className="border border-[#0F2419]/20 hover:border-[#0F2419] font-bold px-8 py-5 rounded-full text-xs tracking-widest uppercase transition-colors">
                View Curation
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Deep Green Immersive Canvas Frame */}
        <div className="relative h-[60vh] lg:h-full w-full bg-[#0F2419] overflow-hidden flex items-center justify-center">
          <motion.div 
            style={{ y: yImageParallax, scale: heroScale }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2419] via-[#0F2419]/20 to-transparent" />
          
          {/* Floating Premium Badge Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-12 left-12 right-12 p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-20"
          >
            <div>
              <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase block mb-1">Global Presence</span>
              <p className="text-white text-sm font-black tracking-wide">MALIBU • BEVERLY HILLS • MANHATTAN</p>
            </div>
            <div className="h-px md:h-8 w-full md:w-px bg-white/10" />
            <div>
              <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase block mb-1">Status</span>
              <p className="text-white text-sm font-black tracking-wide">4 ACTIVE PRIVATE RELEASES</p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* --- DESIGN MANIFESTO SECTION (WHITE BALANCE WITH GREEN ACCENTS) --- */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative z-30" id='about'>
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 sticky top-32">
            <span className="text-xs font-black tracking-widest text-emerald-600 uppercase block mb-4">01 // Identity</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#0F2419] leading-none mb-6">
              UNCOMPROMISING AESTHETICS. <br/>
              UNRIVALED VALUE.
            </h2>
            <div className="w-20 h-1 bg-[#0F2419] mt-8"></div>
          </div>
          
          <div className="lg:col-span-7 space-y-12 lg:pt-4">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
              [Company Name] is a trusted development and elite construction firm dedicated to architecting exceptional premium landmarks. We seamlessly combine meticulous engineering with pure high-end spatial aesthetics.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="border-t border-[#0F2419]/10 pt-6">
                <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block mb-3">Our Core Mission</span>
                <h4 className="font-black text-lg mb-2">Innovative & Sustainable Architecture</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Executing future-proof layouts utilizing immaculate custom craftsmanship and green architecture processes.
                </p>
              </div>
              <div className="border-t border-[#0F2419]/10 pt-6">
                <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block mb-3">Our Core Vision</span>
                <h4 className="font-black text-lg mb-2">Globally Recognized Structural Distinction</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Setting world-class benchmarks in luxury execution, timeless safety principles, and investor satisfaction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- ASYMMETRICAL PORTFOLIO CURATION (GREEN & WHITE SPLIT PATTERN) --- */}
      <section id="projects" className="py-32 bg-[#0F2419] text-white px-6 md:px-12 lg:px-24 relative z-30">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase block mb-4">02 // Curation</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Featured Assets</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-md mt-6 md:mt-0 font-medium leading-relaxed">
              Our dynamic portfolio ranges across custom luxury residential frames, sleek minimalist commercial quarters, and masterful environmental engineering.
            </p>
          </div>

          {/* Asymmetric Alternating Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {premiumEstates.map((estate, idx) => (
              <PremiumReveal key={idx}>
                <div className={`group relative cursor-pointer ${idx % 2 === 1 ? 'md:translate-y-20' : ''}`}>
                  
                  {/* Dynamic Zooming Image Container */}
                  <div className="aspect-[16/11] w-full overflow-hidden rounded-xl relative bg-emerald-950">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      src={estate.img} 
                      alt={estate.title}
                      className="w-full h-full object-cover mix-blend-soft-light group-hover:mix-blend-normal transition-all duration-500"
                    />
                    <div className="absolute top-6 left-6 text-white/40 font-black tracking-tight text-3xl">
                      {estate.num}
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white text-[#0F2419] px-4 py-2 rounded-lg font-black text-sm shadow-xl">
                      {estate.price}
                    </div>
                  </div>
                  
                  {/* Property Typography Details */}
                  <div className="mt-8 flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">
                        <MapPin size={12} />
                        <span>{estate.location}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                        {estate.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 border border-white/10 px-3 py-1.5 rounded-lg bg-white/5">
                      <Maximize size={12} className="text-emerald-400" />
                      <span>{estate.sqft}</span>
                    </div>
                  </div>

                </div>
              </PremiumReveal>
            ))}
          </div>

        </div>
      </section>

      {/* --- BESPOKE SERVICES SECTION (WHITE PATTERN WITH GRID HOVERS) --- */}
      <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-white relative z-30">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="max-w-2xl mb-24">
            <span className="text-xs font-black tracking-widest text-emerald-600 uppercase block mb-4">03 // Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#0F2419]">
              PREMIUM ARCHITECTURAL DEVELOPMENT & CONSTRUCT SOLUTIONS
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-1 bg-gray-200 border border-gray-200"
          >
            {[
              { icon: <Building2 size={24}/>, title: "Residential Construction", desc: "Crafting iconic, custom estates tailored around ultra-luxury prestige and elite natural materials." },
              { icon: <Layers size={24}/>, title: "Commercial Frameworks", desc: "Developing premier operational workspaces and timeless corporate centers with high structural integrity." },
              { icon: <Compass size={24}/>, title: "Land Masterplanning", desc: "Strategizing environmental design vector layouts, premium plot zoning, and structural placement." },
              { icon: <Trees size={24}/>, title: "Bespoke Interior Systems", desc: "Curating sleek minimalist finishings, integrated luxury environments, and balanced spatial flows." },
              { icon: <Maximize size={24}/>, title: "Elite Project Governance", desc: "End-to-end management ensuring flawless quality controls, accurate budget parameters, and fast execution." },
              { icon: <ShieldCheck size={24}/>, title: "Valuation & Analytics", desc: "Advanced data-driven property profiling assessing environmental impacts, zoning expansion, and appreciation assets." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUpVariant}
                className="bg-white p-12 hover:bg-[#0F2419] hover:text-white transition-all duration-500 group flex flex-col justify-between min-h-[320px]"
              >
                <div>
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-10 text-[#0F2419] group-hover:bg-white/10 group-hover:text-emerald-400 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black tracking-tight mb-3 text-[#0F2419] group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <span>Learn More</span> <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- INTEGRATED BRAND VALUE PROPOSITION (GREEN CANVAS) --- */}
      <section id='why-us' className="py-24 bg-[#0F2419] text-white border-t border-white/10 relative z-30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
            <div>
              <h5 className="text-5xl font-black tracking-tighter text-emerald-400 mb-2">100%</h5>
              <p className="text-xs uppercase font-bold tracking-widest text-gray-400">Transparent Pipeline Visibility</p>
            </div>
            <div>
              <h5 className="text-5xl font-black tracking-tighter text-emerald-400 mb-2">M+</h5>
              <p className="text-xs uppercase font-bold tracking-widest text-gray-400">Premium Valuation Managed</p>
            </div>
            <div>
              <h5 className="text-5xl font-black tracking-tighter text-emerald-400 mb-2">Zero</h5>
              <p className="text-xs uppercase font-bold tracking-widest text-gray-400">Code Infraction Record</p>
            </div>
            <div>
              <h5 className="text-5xl font-black tracking-tighter text-emerald-400 mb-2">Top tier</h5>
              <p className="text-xs uppercase font-bold tracking-widest text-gray-400">Architectural Council Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORM & FOULPROOF FOOTER SECTION (50/50 WHITE BACKGROUND WITH GREEN INTERACTION FOOTER) --- */}
      <section id="contact" className="relative z-30 bg-white pt-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pb-24 grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Contact Credentials info */}
          <div className="lg:col-span-5">
            <span className="text-xs font-black tracking-widest text-emerald-600 uppercase block mb-4">04 // Contact Workspace</span>
            <h2 className="text-4xl md:text-[3.5rem] font-black tracking-tighter leading-[0.95] text-[#0F2419] mb-8">
              READY TO COMMENCE <br/>YOUR STRUCTURAL BLUEPRINT?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-12 max-w-sm">
              Connect with our master advisory panel today. We align structural engineering resources directly with your residential or corporate blueprint objectives.
            </p>
            
            <div className="space-y-4 font-bold text-xs tracking-wider uppercase text-[#0F2419]">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                <Building2 size={16} className="text-emerald-600" />
                <span>[Company Name] Real Estate Headquarters</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                <MapPin size={16} className="text-emerald-600" />
                <span>[Your Corporate Address Place]</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                <Phone size={16} className="text-emerald-600" />
                <span>[Your Phone Line]</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                <Mail size={16} className="text-emerald-600" />
                <span className="lowercase font-normal tracking-normal text-sm text-gray-600">[Your Email Address]</span>
              </div>
            </div>
          </div>

          {/* Right Block: Pure High-End Dark-Green Consultation Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#0F2419] text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <h3 className="text-2xl font-black mb-2 tracking-tight">REQUEST DISCREET CONSULTATION</h3>
              <p className="text-gray-400 text-xs mb-8 tracking-wide">CONFIDENTIALITY REASSURED BY AN EXECUTIVE PARTNER</p>
              
              <form className="space-y-6 text-[10px] tracking-widest uppercase font-black" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-emerald-400">Full Name</label>
                    <input type="text" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-400 font-medium tracking-normal normal-case text-sm transition-colors" placeholder="e.g. Sterling Hunt" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-emerald-400">Corporate Email</label>
                    <input type="email" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-400 font-medium tracking-normal normal-case text-sm transition-colors" placeholder="e.g. hunt@domain.com" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-emerald-400">Contact Number</label>
                  <input type="tel" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-400 font-medium tracking-normal text-sm transition-colors" placeholder="+1 (555) 000-0000" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-emerald-400">Project Type Spec</label>
                  <select className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-400 font-medium tracking-normal normal-case text-sm transition-colors appearance-none">
                    <option className="bg-[#0F2419]">Residential Bespoke Villa Development</option>
                    <option className="bg-[#0F2419]">Commercial Structural Framework</option>
                    <option className="bg-[#0F2419]">Environmental Land Optimization</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-white text-[#0F2419] py-5 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-emerald-400 hover:text-[#0F2419] transition-all shadow-xl pt-5">
                  Submit Verification Request
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* --- DYNAMIC STICKY BOTTOM EXECUTIVES BAR --- */}
        <div className="w-full px-6 py-6 bg-[#0F2419] text-white flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest border-t border-white/10 z-50">
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <span className="w-2 py-2 px-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <p className="text-gray-400">
              © 2026 <span className="text-white font-extrabold">[Company Name].</span> All Architectural Property Rights Reserved.
            </p>
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Infrastructure</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Spec</a>
          </div>
        </div>
      </section>

    </div>
  );
}