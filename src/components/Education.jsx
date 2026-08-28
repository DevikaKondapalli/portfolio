import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Sparkles } from 'lucide-react';

export default function Education() {
  const achievements = [
    {
      icon: <Award size={16} className="text-accentTeal" />,
      title: '1st Rank, B.Tech CSE',
      desc: 'Secured 1st rank in class throughout the program.'
    },
    {
      icon: <Shield size={16} className="text-accentTeal" />,
      title: 'NCC Cadet',
      desc: 'Led and trained fellow cadets as Squad In-charge, demonstrating leadership and team coordination.'
    },
    {
      icon: <Sparkles size={16} className="text-accentTeal" />,
      title: 'Lead Dancer',
      desc: 'Led classical and folk dance performances and taught advanced techniques to fellow students.'
    }
  ];

  return (
    <section id="education" className="py-20 border-t border-white/[0.04] bg-white/[0.005]">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accentTeal font-semibold">
                // Education
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-textPrimary tracking-tight">
                Academic Background
              </h2>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-lg space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-accentTeal">2021 – 2025</span>
                  <h3 className="text-xl font-bold text-textPrimary leading-tight">
                    B.Tech in Computer Science &amp; Engineering
                  </h3>
                  <p className="text-sm text-textSecondary font-light">
                    Joginpally B.R. Engineering College, Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accentTeal font-semibold">
                // Achievements & Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-textPrimary tracking-tight">
                Key Accomplishments
              </h2>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-lg space-y-6">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start border-l border-white/[0.06] pl-4">
                  <div className="p-1.5 rounded bg-accentTeal/5 border border-accentTeal/10 text-accentTeal shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-textPrimary tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-textSecondary leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
