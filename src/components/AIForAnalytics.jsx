import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function AIForAnalytics() {
  const points = [
    'Built a RAG pipeline with Antigravity to make information retrieval from project data faster and less manual.',
    'Applied prompt engineering to AI-assisted workflows to reduce repetitive analysis tasks.',
    'Used Antigravity in the fraud-detection project to support NLP-based fraud-indicator extraction.'
  ];

  return (
    <section id="ai-for-analytics" className="py-20 border-t border-white/[0.04]">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accentTeal font-semibold">
              // AI Integration
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-textPrimary tracking-tight">
              AI for Analytics
            </h2>
          </div>

          {/* Highlighted Panel */}
          <div className="glass-card p-6 md:p-8 rounded-lg relative overflow-hidden group">
            {/* Visual violet highlight border on left side */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-accentViolet to-transparent"></div>
            
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-textPrimary font-medium leading-relaxed">
                "I use GenAI as a tool inside analyst workflows, not as a headline skill on its own &mdash; applied specifically where it removed real friction in reporting and information retrieval."
              </p>

              <div className="grid grid-cols-1 gap-4 pt-4 border-t border-white/[0.06]">
                {points.map((point, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="p-1 rounded bg-accentTeal/10 text-accentTeal shrink-0 mt-0.5">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <p className="text-sm text-textSecondary leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
