import React from 'react';
import { motion } from 'framer-motion';

export default function Impact() {
  const stats = [
    { number: '10,000+', label: 'Records analyzed' },
    { number: '12 hrs', label: 'Saved / wk via automation' },
    { number: '15%', label: 'Data accuracy gain' },
    { number: '20%', label: 'Faster reporting' },
    { number: '5+', label: 'Dashboards delivered' },
  ];

  return (
    <section className="py-12 border-y border-white/[0.04] bg-white/[0.01]">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-start"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
              <span className="font-mono text-3xl md:text-4xl font-bold text-accentTeal tracking-tight">
                {stat.number}
              </span>
              <span className="text-xs text-textSecondary uppercase tracking-wider leading-relaxed max-w-[160px]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
