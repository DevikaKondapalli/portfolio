import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-12 border-t border-white/[0.04] bg-white/[0.005]">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 glass-card rounded-lg"
        >
          {/* Degree & College info */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accentTeal font-semibold block">
              // Education
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
              <h3 className="text-base sm:text-lg font-bold text-textPrimary">
                B.Tech in Computer Science &amp; Engineering
              </h3>
              <span className="font-mono text-xs text-textTertiary">
                (2021 – 2025)
              </span>
            </div>
            <p className="text-sm text-textSecondary font-light">
              Joginpally B.R. Engineering College, Hyderabad
            </p>
          </div>

          {/* Badge: 1st Rank in Class */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-accentTeal/5 border border-accentTeal/20 self-start md:self-auto">
            <Award size={14} className="text-accentTeal" />
            <span className="font-mono text-[11px] font-semibold text-accentTeal tracking-wide uppercase">
              1st Rank in Class
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
