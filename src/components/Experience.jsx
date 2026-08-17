import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const job = {
    company: 'Vangrove Tech Private Limited',
    role: 'Junior Analyst Intern',
    location: 'Hyderabad',
    period: 'Jan 2026 – Present',
    metrics: [
      { number: '+10%', desc: 'Weekly reporting accuracy, via Excel, SQL & Power Query' },
      { number: '-12 hrs', desc: 'Manual data extraction saved / wk, via reusable SQL + automated reports' },
      { number: '+15%', desc: 'Data accuracy, fixing missing/duplicate/inconsistent records' },
      { number: '+20%', desc: 'Faster reporting, automating prep with Python & Power Query' },
      { number: '5+', desc: 'Power BI / Tableau dashboards shipped for KPI tracking' },
      { number: '1', desc: 'RAG pipeline built in Antigravity for faster information retrieval' }
    ]
  };

  return (
    <section id="experience" className="py-20 border-t border-white/[0.04] bg-white/[0.005]">
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
              // Professional Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-textPrimary tracking-tight">
              Work Experience
            </h2>
          </div>

          {/* Experience Card */}
          <div className="glass-card p-6 md:p-8 rounded-lg space-y-8">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-textPrimary tracking-tight">
                  {job.role}
                </h3>
                <p className="text-sm font-medium text-accentTeal">
                  {job.company}
                </p>
              </div>
              <div className="font-mono text-xs text-textSecondary md:text-right space-y-1">
                <p>{job.period}</p>
                <p className="text-textTertiary">{job.location}</p>
              </div>
            </div>

            {/* Metrics 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {job.metrics.map((metric, idx) => (
                <div key={idx} className="flex gap-4 items-start border-l border-white/[0.06] pl-4">
                  <div className="font-mono text-2xl font-bold text-accentTeal shrink-0 md:pt-0.5">
                    {metric.number}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm text-textSecondary leading-relaxed">
                      {metric.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
