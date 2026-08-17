import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-white/[0.04] bg-[#0b0e14]/50">
      <div className="max-w-[1080px] mx-auto px-6 text-center">
        <p className="font-mono text-[10px] text-textTertiary uppercase tracking-widest">
          &copy; {currentYear} Devika Kondapalli. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
