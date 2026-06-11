import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Compass
} from 'lucide-react';

const GradientLuxuryFooter = () => {
  const linksGrid = [
    {
      title: "Our Services",
      links: [
        { label: "Residential Construction", url: "#" },
        { label: "Commercial Construction", url: "#" },
        { label: "Land Development", url: "#" },
        { label: "Interior Designing", url: "#" },
        { label: "Project Management", url: "#" }
      ]
    },
    {
      title: "Why Choose Us",
      links: [
        { label: "Experienced Construction Professionals", url: "#" },
        { label: "Transparent Communication", url: "#" },
        { label: "Cost-Effective Solutions", url: "#" },
        { label: "Commitment to Safety Standards", url: "#" },
        { label: "Customer-Centric Approach", url: "#" }
      ]
    }
  ];

  return (
    <footer id="contact" className="w-full bg-white text-slate-800 pt-36 pb-16 px-6 relative z-30 rounded-t-[4rem] overflow-hidden font-sans border-t border-slate-100 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.05)]">
      
      {/* Injecting CSS for the smooth flowing green gradient animation background */}
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradientFlow 15s ease infinite;
        }
      `}</style>

      {/* Moving Green Gradient Ambient Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-100/40 via-teal-50/30 to-green-100/40 rounded-full blur-[120px] pointer-events-none animate-gradient-flow" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-r from-green-50/50 via-emerald-100/30 to-slate-100/50 rounded-full blur-[150px] pointer-events-none animate-gradient-flow" />

      {/* 1. MAIN INTERACTIVE CONTENT GRID */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start pb-20 border-b border-slate-200/60 relative z-10">
        
        {/* Column A: Core Contact Credentials & Mission Statement */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block mb-3">
              [Company Name]
            </span>
            <h2 className="text-4xl font-black tracking-tighter leading-none mb-6 text-slate-900">
              TRANSFORMING IDEAS <br/>INTO STRUCTURES.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              A trusted construction company dedicated to creating exceptional spaces and infrastructure with a strict focus on quality workmanship and timely delivery.
            </p>
          </div>

          {/* Dynamic Address Grid */}
          <div className="space-y-4 text-xs font-semibold tracking-wider text-slate-600">
            <div className="flex items-center gap-3">
              <Building2 size={16} className="text-emerald-600 flex-shrink-0" />
              <span>[Company Name]</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-emerald-600 flex-shrink-0" />
              <span>Address: [Your Address]</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-emerald-600 flex-shrink-0" />
              <span>Phone: [Your Phone Number]</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-emerald-600 flex-shrink-0" />
              <span>Email: [Your Email Address]</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={16} className="text-emerald-600 flex-shrink-0" />
              <span>Website: [Your Website]</span>
            </div>
          </div>
        </div>

        {/* Column B: Curated Link Systems */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
          {linksGrid.map((column, colIdx) => (
            <div key={colIdx} className="space-y-6">
              <h3 className="text-xs font-bold tracking-widest uppercase text-emerald-700 pb-2 border-b border-slate-200">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <motion.a
                      href={link.url}
                      whileHover={{ x: 4, color: "#059669" }}
                      className="group flex items-start gap-1.5 text-xs font-bold text-slate-600 transition-colors leading-snug"
                    >
                      <span className="text-emerald-500/40 group-hover:text-emerald-600 transition-colors">—</span>
                      <span>{link.label}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Column C: Interactive Consultation Card with Dynamic Gradient Background */}
        <div className="lg:col-span-4 w-full">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-800 animate-gradient-flow text-white p-8 rounded-[2.5rem] w-full shadow-xl shadow-emerald-900/10 border border-emerald-500/20">
            <span className="text-[10px] font-bold tracking-widest text-emerald-200 uppercase block mb-2">
              Ready to start your next construction project?
            </span>
            <h3 className="text-lg font-black mb-4 tracking-tight uppercase">
              Request a Consultation Today
            </h3>
            
            <p className="text-emerald-100/80 text-xs mb-6 normal-case font-medium leading-relaxed">
              Let's build something exceptional together. Submit your details below to schedule a review.
            </p>

            <form className="space-y-4 text-[10px] tracking-widest uppercase font-bold" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-emerald-200 block">Contact Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white placeholder-emerald-200/50 uppercase focus:outline-none focus:border-white focus:bg-white/15 text-xs font-medium tracking-normal transition-all" 
                  placeholder="Enter phone line" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-white text-emerald-900 py-4 rounded-xl font-black mt-2 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-lg tracking-widest text-xs flex items-center justify-center gap-2"
              >
                <span>REQUEST A FREE CONSULTATION</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* 2. DATA HORIZON TICKER */}
      <div className="max-w-[1400px] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {[
          { label: "PROPERTY VALUATION REPORTS", val: "DEVELOPMENT & ROADS", color: "text-emerald-600" },
          { label: "GEOGRAPHICAL EXPANSION", val: "NEARBY GROWTH ANALYSIS", color: "text-slate-800" },
          { label: "MISSION ARCHITECTURE", val: "SUSTAINABLE & COST-EFFECTIVE", color: "text-slate-800" },
          { label: "QUALITY ASSURANCE", val: "SAFETY STANDARDS VERIFIED", color: "text-emerald-600" }
        ].map((stat, idx) => (
          <div key={idx} className="p-5 bg-slate-50/60 border border-slate-100 rounded-2xl flex flex-col justify-center text-left backdrop-blur-sm">
            <span className="text-[9px] font-bold text-slate-400 tracking-widest mb-1 uppercase">{stat.label}</span>
            <span className={`text-xs font-black uppercase tracking-tight ${stat.color}`}>{stat.val}</span>
          </div>
        ))}
      </div>

      {/* 3. FINAL COMPACT LEGAL COMPLIANCE LAYER */}
      <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="flex flex-wrap justify-center md:justify-start gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <span className="text-slate-600">©2026 [Company Name]</span>
          <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Ecosystem</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Client Testimonials Node</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Terms of Workmanship</a>
        </div>
        
        <div className="text-[9px] font-bold bg-slate-900 text-white px-4 py-1.5 rounded-full uppercase tracking-widest font-black shadow-md">
          EXCELLENCE • INTEGRITY • SATISFACTION
        </div>
      </div>

      {/* Abstract Structural Background Geometry */}
      <div className="absolute inset-0 flex justify-center items-center opacity-[0.02] pointer-events-none">
         <Compass size={800} className="text-slate-900" />
      </div>

    </footer>
  );
};

export default GradientLuxuryFooter;