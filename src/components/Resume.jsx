import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, Eye, Award, Shield, Sparkles, CheckCircle2, Briefcase, GraduationCap, Code2, Layers } from 'lucide-react';
import { Linkedin, Github } from './Icons';

export default function Resume() {
  const [viewMode, setViewMode] = useState('interactive'); // 'interactive' | 'pdf'

  const resumeData = {
    name: 'Devika Kondapalli',
    location: 'Hyderabad, India',
    phone: '+91-8688906651',
    email: 'kondapallidevika996@gmail.com',
    linkedin: 'https://www.linkedin.com/in/devika-kondapalli',
    github: 'https://github.com/DevikaKondapalli',
    pdfUrl: '/resume.pdf',
    summary:
      'Data Analyst with hands-on internship experience using Excel, SQL, and Python to analyze business data, improve data quality, and streamline reporting. Experienced in working with 10,000+ records, automating repetitive tasks, and building dashboards to track business performance. Skilled in Pandas, Power BI, GenAI, prompt engineering, Antigravity, and RAG workflows for data analysis and information retrieval.',
    skills: {
      'Programming Languages': ['Python', 'SQL'],
      'Libraries & Frameworks': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      'Databases & Analytics': ['MySQL', 'Advanced Excel', 'Power BI', 'Data Analytics', 'Business Intelligence'],
      'Developer & AI Tools': ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Antigravity'],
      'Core Competencies': ['RAG Pipeline', 'Prompt Engineering', 'Data-Driven Decision Making', 'Analytical Problem Solving']
    },
    experience: [
      {
        role: 'Junior Analyst Intern',
        company: 'Vangrove Tech Private Limited',
        location: 'Hyderabad',
        period: '01/2026 – Present',
        bullets: [
          'Worked with 10,000+ records using Excel, SQL and Python for data cleaning, validation, and analysis.',
          'Saved 12 hours per week by creating reusable SQL queries and automated reports, reducing repetitive reporting tasks and making regular data analysis faster and easier.',
          'Improved data accuracy by 15% by using Python and SQL to find and fix missing, duplicate, and inconsistent records, making datasets more reliable for reporting.',
          'Reduced reporting effort by 20% by automating data preparation with Python, Pandas and Excel.',
          'Improved reporting accuracy by 10% by reviewing data issues and simplifying recurring reporting workflows.',
          'Used SQL to extract, filter, join, and organize data for regular analysis and reporting.',
          'Built 5+ Power BI dashboards to track KPIs, compare performance, and understand business trends.',
          'Created data summaries using Excel and Pandas to make business information easier to review and compare.',
          'Performed data quality checks to find missing values, duplicates, and inconsistencies before reporting.'
        ]
      },
      {
        role: 'Intern – IT Assets and Inventory Management System',
        company: 'Hindustan Aeronautics Limited (HAL) – Avionics Division',
        location: 'Hyderabad',
        period: '10/2024 – 11/2024',
        bullets: [
          'Built a web-based IT Asset Management System using C# and SQL to organize and manage departmental asset records, improving access to asset information.',
          'Designed a normalized MySQL database to manage asset records, improving data retrieval and updates by 20% and making inventory tracking easier.',
          'Reduced manual data-entry errors by 15% by adding validation checks and testing SQL queries in MySQL Workbench, improving data consistency and reliability.',
          'Improved system performance by testing and optimizing SQL queries, enabling faster and more consistent asset data retrieval.'
        ]
      }
    ],
    project: {
      title: 'Online Recruitment Fraud Detection Platform',
      role: 'Data Analyst / ML Project',
      year: '2024',
      tools: 'Python, NLP, Pandas, Antigravity',
      bullets: [
        'Analyzed 500+ job postings using Python and Pandas, checking missing and mismatched details across key posting fields.',
        'Identified 5+ fraud indicators using NLP, text preprocessing, and TF-IDF to detect suspicious job-posting patterns.',
        'Built a Python-based fraud scoring system to identify potentially fake job postings across 500+ listings.',
        'Evaluated predictions using 4 classification metrics, comparing fake and genuine postings to assess detection performance.',
        'Built a browser extension with 1-click job scanning that displays a fraud score on the right side of the screen for quick assessment.'
      ]
    },
    education: {
      degree: 'B.Tech – Computer Science and Engineering',
      institution: 'Joginpally B.R. Engineering College',
      location: 'Hyderabad',
      period: '2021 – 2025'
    },
    achievements: [
      {
        title: '2nd Rank, B.Tech CSE',
        desc: 'Secured 2nd rank in class throughout the program.',
        icon: <Award size={15} className="text-accentTeal" />
      },
      {
        title: 'NCC Cadet',
        desc: 'Led and trained fellow cadets as Squad In-charge, demonstrating leadership and team coordination.',
        icon: <Shield size={15} className="text-accentTeal" />
      },
      {
        title: 'Lead Dancer',
        desc: 'Led classical and folk dance performances and taught advanced techniques to fellow students.',
        icon: <Sparkles size={15} className="text-accentTeal" />
      }
    ]
  };

  return (
    <section id="resume" className="py-24 border-t border-white/[0.04] bg-white/[0.002]">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-10"
        >
          {/* Header row with Title and CTAs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-accentTeal font-semibold">
                // Verified Credentials
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-textPrimary tracking-tight">
                Resume
              </h2>
              <p className="text-sm sm:text-base text-textSecondary font-light max-w-xl">
                Review the latest verified resume, skills breakdown, professional experience, and academic standing.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={resumeData.pdfUrl}
                download="Devika_Kondapalli_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold font-mono tracking-wide uppercase bg-gradient-to-r from-accentTeal to-accentViolet text-[#0B0E14] hover:opacity-95 rounded shadow-lg shadow-accentTeal/10 hover:shadow-accentTeal/20 transition-all duration-200"
              >
                <Download size={14} /> Download PDF
              </a>

              <a
                href={resumeData.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold font-mono tracking-wide uppercase border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.02] text-textPrimary hover:bg-white/[0.04] rounded transition-all duration-200"
              >
                <ExternalLink size={14} /> Open PDF
              </a>

              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold font-mono tracking-wide border border-accentTeal/30 text-accentTeal hover:bg-accentTeal/10 rounded transition-all duration-200"
                title="View LinkedIn Profile"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-2 p-1 bg-white/[0.02] border border-white/[0.06] rounded-lg">
              <button
                onClick={() => setViewMode('interactive')}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-medium transition-all ${
                  viewMode === 'interactive'
                    ? 'bg-accentTeal/15 text-accentTeal border border-accentTeal/30 shadow-sm'
                    : 'text-textSecondary hover:text-textPrimary'
                }`}
              >
                <FileText size={13} /> Interactive Resume
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-medium transition-all ${
                  viewMode === 'pdf'
                    ? 'bg-accentTeal/15 text-accentTeal border border-accentTeal/30 shadow-sm'
                    : 'text-textSecondary hover:text-textPrimary'
                }`}
              >
                <Eye size={13} /> PDF Document View
              </button>
            </div>

            <span className="font-mono text-xs text-textTertiary hidden sm:inline-block">
              Updated: August 2026 &bull; Hyderabad, India
            </span>
          </div>

          {/* Content Area */}
          {viewMode === 'interactive' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 md:p-10 rounded-xl space-y-10 relative overflow-hidden"
            >
              {/* Top Contact Bar in Resume format */}
              <div className="border-b border-white/[0.06] pb-6 space-y-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-textPrimary tracking-tight">
                      {resumeData.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-accentTeal mt-0.5">
                      {resumeData.location} &bull; {resumeData.phone} &bull; {resumeData.email}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={resumeData.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-textSecondary hover:text-accentTeal transition-colors"
                    >
                      <Linkedin size={13} /> linkedin.com/in/devika-kondapalli
                    </a>
                    <span className="text-white/20">&bull;</span>
                    <a
                      href={resumeData.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-textSecondary hover:text-accentTeal transition-colors"
                    >
                      <Github size={13} /> DevikaKondapalli
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accentTeal font-semibold">
                  <Briefcase size={14} /> Professional Summary
                </div>
                <p className="text-sm sm:text-base text-textSecondary leading-relaxed font-light">
                  {resumeData.summary}
                </p>
              </div>

              {/* Technical Skills Categorized */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accentTeal font-semibold">
                  <Code2 size={14} /> Technical Skills
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(resumeData.skills).map(([category, list], idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-white/[0.015] border border-white/[0.04] space-y-2">
                      <span className="font-mono text-xs font-semibold text-textPrimary block">
                        {category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {list.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="font-mono text-[11px] text-accentTeal bg-accentTeal/5 border border-accentTeal/15 px-2 py-0.5 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Experience */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accentTeal font-semibold">
                  <Layers size={14} /> Professional Experience
                </div>
                <div className="space-y-8">
                  {resumeData.experience.map((exp, eIdx) => (
                    <div key={eIdx} className="space-y-3 border-l-2 border-accentTeal/30 pl-4 sm:pl-6">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-textPrimary tracking-tight">
                            {exp.role}
                          </h4>
                          <span className="font-mono text-xs text-accentTeal font-medium">
                            {exp.company}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-textTertiary">
                          {exp.location} &bull; {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2 pt-1">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-textSecondary leading-relaxed">
                            <span className="text-accentTeal mt-1 text-base leading-none">&bull;</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Project from Resume */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accentTeal font-semibold">
                  <Code2 size={14} /> Featured Project
                </div>
                <div className="p-5 rounded-lg bg-white/[0.015] border border-white/[0.05] space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h4 className="text-base font-bold text-textPrimary tracking-tight">
                        {resumeData.project.title}
                      </h4>
                      <p className="text-xs font-mono text-accentViolet">
                        {resumeData.project.tools}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-textTertiary">
                      {resumeData.project.role} &bull; {resumeData.project.year}
                    </span>
                  </div>
                  <ul className="space-y-2 pt-1">
                    {resumeData.project.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-textSecondary leading-relaxed">
                        <span className="text-accentViolet mt-1 text-base leading-none">&bull;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Education & Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-white/[0.06]">
                {/* Education */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accentTeal font-semibold">
                    <GraduationCap size={14} /> Education
                  </div>
                  <div className="p-4 rounded-lg bg-white/[0.015] border border-white/[0.04] space-y-1.5">
                    <span className="font-mono text-xs text-accentTeal">
                      {resumeData.education.period}
                    </span>
                    <h5 className="text-sm font-bold text-textPrimary">
                      {resumeData.education.degree}
                    </h5>
                    <p className="text-xs text-textSecondary font-light">
                      {resumeData.education.institution}, {resumeData.education.location}
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accentTeal font-semibold">
                    <Award size={14} /> Achievements
                  </div>
                  <div className="p-4 rounded-lg bg-white/[0.015] border border-white/[0.04] space-y-3">
                    {resumeData.achievements.map((item, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5">
                        <div className="p-1 rounded bg-accentTeal/10 text-accentTeal shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div className="space-y-0.5">
                          <h6 className="text-xs font-semibold text-textPrimary">
                            {item.title}
                          </h6>
                          <p className="text-[11px] text-textSecondary leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-4 md:p-6 rounded-xl space-y-4"
            >
              <div className="flex items-center justify-between px-2 py-1 text-xs font-mono text-textSecondary">
                <span className="flex items-center gap-2">
                  <FileText size={14} className="text-accentTeal" /> Devika_Kondapalli_Resume.pdf
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={resumeData.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accentTeal transition-colors inline-flex items-center gap-1"
                  >
                    <ExternalLink size={12} /> Open in new tab
                  </a>
                  <a
                    href={resumeData.pdfUrl}
                    download="Devika_Kondapalli_Resume.pdf"
                    className="text-accentTeal hover:underline inline-flex items-center gap-1"
                  >
                    <Download size={12} /> Download
                  </a>
                </div>
              </div>

              {/* Embedded PDF iframe */}
              <div className="w-full h-[700px] md:h-[850px] rounded-lg overflow-hidden border border-white/[0.06] bg-[#161B22]">
                <iframe
                  src={`${resumeData.pdfUrl}#view=FitH`}
                  title="Devika Kondapalli Resume"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
