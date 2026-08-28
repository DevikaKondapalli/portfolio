import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const projects = [
    {
      title: 'Online Recruitment Fraud Detection Platform',
      year: '2024',
      tags: ['Python', 'NLP', 'Pandas', 'TF-IDF', 'Antigravity'],
      liveDemo: 'https://fraud-dectection.vercel.app/',
      gitHub: 'https://github.com/DevikaKondapalli/Recruitment-Fraud-Detector',
      sections: [
        { label: 'PROBLEM', text: 'Job boards carry a mix of genuine and fake postings; candidates have no quick way to tell them apart.' },
        { label: 'TOOLS', text: 'Python, Pandas, NLP, TF-IDF' },
        { label: 'ANALYSIS', text: 'Analyzed 500+ postings for missing/mismatched fields; extracted 5+ text-based fraud indicators.' },
        { label: 'INSIGHTS', text: 'Certain field-completeness and language patterns reliably separated genuine from fake listings, validated across 4 classification metrics.' },
        { label: 'RECOMMENDATION', text: 'Shipped as a 1-click browser extension so candidates get a fraud read before they apply.' }
      ]
    },
    {
      title: 'Professional Weather Assistant Website',
      year: '2024',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'OpenWeather API'],
      liveDemo: 'https://weather-detector-ruby.vercel.app/',
      gitHub: 'https://github.com/DevikaKondapalli/Weather_Detector',
      sections: [
        { label: 'PROBLEM', text: 'Weather dashboard applications often expose private API keys on the frontend or fail to provide actionable real-time precautions.' },
        { label: 'TOOLS', text: 'HTML5, CSS3, JavaScript (ES6 Modules), Node.js, Express, OpenWeather API' },
        { label: 'ANALYSIS', text: 'Engineered a secure client-server backend routing OpenWeather requests to shield API keys, along with local storage tracking of search history and favorites.' },
        { label: 'INSIGHTS', text: 'Created dynamic rules-based precautions matching precipitation, wind, and temperature thresholds alongside direct messaging (SMS/WhatsApp) sharing schemas.' },
        { label: 'RECOMMENDATION', text: 'Built a responsive layout highlighting real-time conditions, 24-hour visual trends, 5-day forecasts, and outdoor activity suitability ratings.' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-white/[0.04]">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accentTeal font-semibold">
              // Featured Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-textPrimary tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Project Glass Cards */}
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 rounded-lg space-y-8">
                {/* Header: Title and Buttons */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-textPrimary tracking-tight">
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs text-textTertiary px-2 py-0.5 border border-white/[0.08] rounded-full">
                        {project.year}
                      </span>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className="font-mono text-[10px] text-accentViolet bg-accentViolet/5 border border-accentViolet/10 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold font-mono tracking-wide uppercase bg-accentTeal text-[#0B0E14] hover:bg-accentTeal/90 rounded transition-colors"
                      >
                        Live Demo <ExternalLink size={12} />
                      </a>
                    )}
                    <a 
                      href={project.gitHub} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold font-mono tracking-wide uppercase border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.02] text-textPrimary hover:bg-white/[0.04] rounded transition-colors"
                    >
                      <Github size={12} /> GitHub
                    </a>
                  </div>
                </div>

                {/* Content: Sub-Panels */}
                <div className="grid grid-cols-1 gap-6">
                  {project.sections.map((section, secIdx) => (
                    <div key={secIdx} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                      {/* Label (Teal Mono) */}
                      <div className="w-full md:w-44 shrink-0">
                        <span className="font-mono text-xs font-semibold text-accentTeal tracking-wider uppercase block md:pt-0.5">
                          {section.label}:
                        </span>
                      </div>
                      {/* Text (Inter) */}
                      <div className="w-full">
                        <p className="text-sm text-textSecondary leading-relaxed">
                          {section.text}
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
