import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillGroups = [
    {
      title: 'Data Analytics',
      skills: ['Statistical Analysis', 'Business Intelligence', 'Data Cleaning', 'Data-Driven Decision Making'],
    },
    {
      title: 'Python / Libraries',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
      title: 'BI & Visualization',
      skills: ['Power BI', 'Tableau', 'Advanced Excel', 'Power Query'],
    },
    {
      title: 'Databases',
      skills: ['SQL', 'MySQL'],
    },
    {
      title: 'AI / GenAI',
      skills: ['RAG Pipelines', 'Prompt Engineering', 'Antigravity'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-white/[0.04] bg-white/[0.005]">
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
              // Tech Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-textPrimary tracking-tight">
              Technical Capabilities
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, groupIdx) => (
              <div 
                key={groupIdx} 
                className="glass-card p-6 rounded-lg flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-textPrimary tracking-tight">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx}
                        className="font-mono text-xs text-accentTeal bg-accentTeal/5 border border-accentTeal/10 px-2.5 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
