import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const jobs = [
    {
      company: 'Vangrove Tech Private Limited',
      role: 'Junior Analyst Intern',
      location: 'Hyderabad, India',
      period: '01/2026 – Present',
      metrics: [
        { number: '10k+', desc: 'Records worked with using Excel, SQL, Python & Power Query for cleaning' },
        { number: '-12 hrs', desc: 'Saved per week via reusable SQL queries and automated reports' },
        { number: '+15%', desc: 'Data accuracy improvement by identifying and fixing records' },
        { number: '20%', desc: 'Reporting effort reduction via Python & Pandas automation' },
        { number: '+10%', desc: 'Reporting accuracy improved by simplifying recurring workflows' },
        { number: '5+', desc: 'Power BI & Tableau dashboards built to track KPIs and trends' }
      ]
    },
    {
      company: 'Hindustan Aeronautics Limited (HAL) – Avionics Division',
      role: 'Intern – IT Assets and Inventory Management System',
      location: 'Hyderabad, India',
      period: '10/2024 – 11/2024',
      metrics: [
        { number: 'C# & SQL', desc: 'Built a web-based IT Asset Management System to manage asset records' },
        { number: '+20%', desc: 'Faster data retrieval and updates via a normalized MySQL database' },
        { number: '-15%', desc: 'Manual data-entry errors through validation checks & SQL query testing' },
        { number: 'Optimized', desc: 'Tested and optimized SQL queries in MySQL Workbench for faster access' }
      ]
    }
  ];

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

          {/* Experience Cards */}
          <div className="space-y-8">
            {jobs.map((job, jobIdx) => (
              <div key={jobIdx} className="glass-card p-6 md:p-8 rounded-lg space-y-8">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-textPrimary tracking-tight">
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-accentTeal font-mono">
                      {job.company}
                    </p>
                  </div>
                  <div className="font-mono text-xs text-textSecondary md:text-right space-y-1">
                    <p>{job.period}</p>
                    <p className="text-textTertiary">{job.location}</p>
                  </div>
                </div>

                {/* Metrics Grid */}
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
