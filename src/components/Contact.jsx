import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { Linkedin, Github } from './Icons';

export default function Contact() {
  const contactLinks = {
    email: 'mailto:kondapallidevika996@gmail.com',
    linkedin: 'https://linkedin.com/in/devika-kondapallidevika',
    github: 'https://github.com/DevikaKondapalli',
    resume: '/resume.pdf'
  };

  return (
    <section id="contact" className="py-24 border-t border-white/[0.04] bg-white/[0.01]">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="glass-card p-8 md:p-12 rounded-lg text-center space-y-8 relative overflow-hidden"
        >
          {/* Accent decoration */}
          <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-accentTeal/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-24 -top-24 w-48 h-48 bg-accentViolet/5 rounded-full blur-3xl"></div>

          {/* Heading */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-accentTeal font-semibold block">
              // Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight">
              Let's talk data.
            </h2>
            <p className="text-base sm:text-lg text-textSecondary font-light leading-relaxed">
              Open to Data Analyst roles in Hyderabad &mdash; resume, code and dashboards are one click away.
            </p>
          </div>

          {/* Buttons grid */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 max-w-3xl mx-auto relative z-10">
            {/* Download Resume (Teal Solid) */}
            <a 
              href={contactLinks.resume}
              download="Devika_Kondapalli_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold font-mono tracking-wide uppercase bg-gradient-to-r from-accentTeal to-accentViolet text-[#0B0E14] hover:opacity-95 rounded shadow-lg shadow-accentTeal/10 hover:shadow-accentTeal/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
            >
              <Download size={14} /> Download Resume
            </a>

            {/* Email (Outline Teal) */}
            <a 
              href={contactLinks.email}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold font-mono tracking-wide uppercase border border-accentTeal/20 hover:border-accentTeal/40 text-accentTeal hover:bg-accentTeal/[0.04] rounded transition-all duration-250"
            >
              <Mail size={14} /> Email Me
            </a>

            {/* LinkedIn (Glass White) */}
            <a 
              href={contactLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold font-mono tracking-wide uppercase border border-white/[0.08] hover:border-white/[0.15] bg-white/[0.02] text-textPrimary hover:bg-white/[0.04] rounded transition-all duration-250"
            >
              <Linkedin size={14} /> LinkedIn
            </a>

            {/* GitHub (Glass White) */}
            <a 
              href={contactLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold font-mono tracking-wide uppercase border border-white/[0.08] hover:border-white/[0.15] bg-white/[0.02] text-textPrimary hover:bg-white/[0.04] rounded transition-all duration-250"
            >
              <Github size={14} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
