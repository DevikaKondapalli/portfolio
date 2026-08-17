import React from 'react';
import { motion } from 'framer-motion';
import { Download, LayoutGrid } from 'lucide-react';
import { Linkedin, Github } from './Icons';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Visual background decorations (radial glows are already handled fixed in index.css, let's add subtle section container alignment) */}
      <div className="max-w-[1080px] mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-start space-y-6 md:space-y-8"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="dot-pulse absolute inline-flex h-full w-full rounded-full bg-accentTeal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accentTeal"></span>
            </span>
            <span className="font-mono text-xs text-textSecondary uppercase tracking-wider">
              Open to Data Analyst roles &bull; Hyderabad
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-textPrimary tracking-tight leading-[1.1]">
              Devika Kondapalli
            </h1>
            <p className="font-mono text-lg sm:text-2xl md:text-3xl font-medium tracking-tight text-textSecondary">
              Junior Analyst Intern &amp; <span className="gradient-text font-bold">Data Analyst</span>
            </p>
          </div>

          {/* Value Statement */}
          <p className="text-base sm:text-lg md:text-xl text-textSecondary leading-relaxed max-w-2xl font-light">
            I turn raw business data into decisions &mdash; using SQL, Python, Excel, Power BI and Tableau, backed by automation and GenAI-assisted workflows to get from data to insight faster.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto pt-2">
            {/* Primary CTA: Resume Download */}
            <a 
              href="/resume.pdf" 
              download="Devika_Kondapalli_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold font-mono tracking-wide uppercase bg-gradient-to-r from-accentTeal to-accentViolet text-[#0B0E14] hover:opacity-95 rounded shadow-lg shadow-accentTeal/10 hover:shadow-accentTeal/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
            >
              <Download size={16} /> Download Resume
            </a>

            {/* Secondary CTA: View Projects */}
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold font-mono tracking-wide uppercase border border-accentTeal/20 hover:border-accentTeal/40 text-accentTeal hover:bg-accentTeal/[0.04] rounded transition-all duration-250"
            >
              <LayoutGrid size={16} /> View Projects
            </a>

            {/* Socials */}
            <div className="flex gap-4 items-center">
              <a 
                href="https://linkedin.com/in/devika-kondapalli" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center p-3 text-textSecondary hover:text-textPrimary border border-white/[0.06] hover:border-white/[0.12] bg-white/[0.02] rounded hover:scale-105 active:scale-95 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/DevikaKondapalli" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center p-3 text-textSecondary hover:text-textPrimary border border-white/[0.06] hover:border-white/[0.12] bg-white/[0.02] rounded hover:scale-105 active:scale-95 transition-all"
                title="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
