import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, MapPin, Phone, Mail, Globe, Compass } from 'lucide-react';

// --- Standalone Reveal on Scroll Wrapper for Parent Isolation ---
const RevealOnScroll = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-120px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function LuxuryWhiteFooterSection() {
  return (
    <section 
      id="contact" 
      className="bg-[#FBFBFC] text-[#161917] py-36 px-6 relative overflow-hidden rounded-t-[4rem] border-t border-gray-200/60 font-sans"
    >
      {/* Immersive Subtle Light Radial Glow Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-700/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Brand Coordinates & Description [cite: 29, 30] */}
          <RevealOnScroll>
            <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase block mb-6">
              Contact Us [cite: 29]
            </span>
            <h2 className="text-4xl md:text-[4.5rem] font-black tracking-tighter leading-[0.95] mb-8 uppercase text-[#1A2E22]">
              Ready to start <br /> your next project? [cite: 30]
            </h2>
            <p className="text-gray-500 text-base max-w-md mb-8 leading-relaxed">
              Let's build something exceptional together[cite: 36]. Connect with our advisory workspace today to coordinate your blueprints, structural renovations, or development targets.
            </p>
            
            {/* Contextual Contact Detail Node [cite: 31, 32, 33, 34, 35] */}
            <div className="flex flex-col gap-4 font-semibold tracking-wide text-sm text-gray-600">
              <div className="flex items-center gap-3 group">
                <Building2 size={18} className="text-emerald-800 group-hover:scale-110 transition-transform" />
                <span className="font-black tracking-tight text-[#1A2E22]">[Company Name] [cite: 31]</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-emerald-800" />
                <span>Address: [Your Address] [cite: 32]</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-800" />
                <span>Phone: [Your Phone Number] [cite: 33]</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-800" />
                <span>Email: [Your Your Email Address] [cite: 34]</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-emerald-800" />
                <span>Website: [Your Website] [cite: 35]</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Premium Matte White Form Container [cite: 36, 37, 38] */}
          <RevealOnScroll delay={0.2} className="w-full">
            <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-gray-200/80 shadow-xl relative">
              <span className="text-[10px] font-bold tracking-widest text-emerald-800 uppercase block mb-2">
                Request a Consultation Today [cite: 36]
              </span>
              <h3 className="text-xl font-black mb-6 tracking-tight uppercase text-[#1A2E22]">
                Request a Free Consultation [cite: 37]
              </h3>
              
              <form className="flex flex-col gap-4 text-xs tracking-widest uppercase font-bold" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-800 uppercase focus:outline-none focus:border-emerald-800 text-sm font-normal tracking-normal transition-colors" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 tracking-wider">Contact Number</label>
                  <input 
                    type="tel" 
                    className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-800 uppercase focus:outline-none focus:border-emerald-800 text-sm font-normal tracking-normal transition-colors" 
                    placeholder="Your Number" 
                    required 
                  />
                </div>
                
                {/* Contact Number Trigger Button [cite: 38] */}
                <button 
                  type="submit" 
                  className="w-full bg-[#1A2E22] text-white py-5 rounded-xl font-black mt-4 hover:bg-emerald-800 transition-all duration-300 shadow-xl tracking-widest flex items-center justify-center gap-2 group text-xs"
                >
                  <span>CONTACT NUMBER TAB</span> [cite: 38]
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </RevealOnScroll>

        </div>
      </div>
      
      {/* Immersive Geometrical Brand Overlay */}
      <div className="absolute inset-0 flex justify-center items-center opacity-[0.02] pointer-events-none select-none">
         <Compass size={700} className="text-black" />
      </div>
    </section>
  );
}