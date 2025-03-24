"use client"

import { motion } from 'framer-motion';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { timelineEvents } from '@/lib/timeline-events';

export default function Timeline() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Nav />
      
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl font-light text-center mb-12">我们的时光</h1>
        
        <div className="max-w-3xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-center mb-12"
            >
              <div className="flex-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-sm text-gray-500 mb-2">{event.date}</div>
                  <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                  {event.imageUrl && (
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="mt-4 rounded-lg w-full h-48 object-cover"
                    />
                  )}
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}