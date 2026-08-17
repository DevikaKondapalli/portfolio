import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 max-w-[1080px] mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="space-y-6"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-accentTeal font-semibold">
          // About Me
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-textPrimary tracking-tight">
          Background &amp; Approach
        </h2>
        <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-light max-w-3xl">
          I'm a Data Analyst currently interning at Vangrove Tech, where I clean, model and report on business data using Excel, SQL and Python. My work centers on making reporting faster and more reliable &mdash; building automated pipelines, fixing data quality issues at the source, and shipping dashboards teams actually use for day-to-day decisions. I've also built a fraud-detection system that scores job postings using NLP, and I use GenAI tools like RAG pipelines and prompt engineering where they genuinely speed up analysis, not as a substitute for it.
        </p>
      </motion.div>
    </section>
  );
}
