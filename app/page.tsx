"use client"

import { useEffect, useState } from 'react';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { loveQuotes } from '@/lib/love-quotes';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { CountdownTimer } from '@/components/countdown-timer';

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const startDate = new Date('2024-10-18');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen relative bg-black">
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-sm" />
      </div>
      
      <Nav />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-7xl font-extralight tracking-tight mb-12">
            李世佳 <Heart className="inline-block text-white/80 mx-4 h-8 w-8" fill="none" strokeWidth={1} /> 李晨
          </h1>
          
          <div className="mb-16">
            <CountdownTimer startDate={startDate} />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl font-extralight tracking-wide max-w-2xl mx-auto text-white/90"
            >
              {loveQuotes[currentQuote]}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>
      
      <Footer />
    </main>
  );
}