"use client"

import { useState } from 'react';
import { Heart, Image, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Nav() {
  const pathname = usePathname();
  
  return (
    <nav className="fixed w-full backdrop-blur-xl bg-black/20 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Heart className="h-5 w-5 text-white/90" strokeWidth={1} />
          <span className="text-lg font-light tracking-wide text-white/90">李世佳 ❤️ 李晨</span>
        </Link>
        <div className="flex items-center space-x-2">
          <Link href="/gallery" passHref>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-white/90 hover:text-white hover:bg-white/10"
            >
              <Image className="h-4 w-4" strokeWidth={1} />
              👀回忆
            </Button>
          </Link>
          <Link href="/timeline" passHref>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-white/90 hover:text-white hover:bg-white/10"
            >
              <Clock className="h-4 w-4" strokeWidth={1} />
              👣足迹
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}