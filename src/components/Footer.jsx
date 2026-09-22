import React from 'react';
import { Linkedin, Github } from './Icons';
import { Mail, Download } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-white/[0.04] bg-[#0b0e14]/70">
      <div className="max-w-[1080px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-mono text-xs font-bold text-textPrimary">DEVIKA KONDAPALLI</span>
          <p className="font-mono text-[10px] text-textTertiary uppercase tracking-widest">
            &copy; {currentYear} Devika Kondapalli. All rights reserved.
          </p>
        </div>

        {/* Social & Resume Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href="https://www.linkedin.com/in/devika-kondapalli"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-textSecondary hover:text-accentTeal transition-colors"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
          <span className="text-white/10">&bull;</span>
          <a
            href="https://github.com/DevikaKondapalli"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-textSecondary hover:text-accentTeal transition-colors"
          >
            <Github size={14} /> GitHub
          </a>
          <span className="text-white/10">&bull;</span>
          <a
            href="mailto:kondapallidevika996@gmail.com"
            className="flex items-center gap-1.5 text-textSecondary hover:text-accentTeal transition-colors"
          >
            <Mail size={14} /> Email
          </a>
          <span className="text-white/10">&bull;</span>
          <a
            href="/resume.pdf"
            download="Devika_Kondapalli_Resume.pdf"
            className="flex items-center gap-1 text-accentTeal hover:underline"
          >
            <Download size={13} /> Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
