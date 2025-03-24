'use client';

import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full py-12 bg-transparent backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-base text-white/90 font-medium tracking-wider">
            LISHIJIA & LICHEN
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-white/60">始于 2024.10.18</span>
            <span className="text-white/30">·</span>
            <span className="text-sm text-white/60">永远相爱</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;