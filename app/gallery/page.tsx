"use client"

import { motion } from 'framer-motion';
import { Nav } from '@/components/nav';
import {Footer} from '@/components/footer';

const photos = [
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "江滩漫步",
    description: "漫步在长江边，感受江城之美"
  },
  {
    url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "黄鹤楼",
    description: "千年古楼，见证我们的爱情"
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "东湖樱园",
    description: "樱花绽放的季节，浪漫满园"
  },
  {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "户部巷",
    description: "品尝武汉美食，感受人间烟火"
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "长江大桥",
    description: "跨越长江，连接我们的心"
  },
  {
    url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "昙华林",
    description: "文艺街区，记录我们的故事"
  }
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Nav />
      
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-light mb-4 tracking-tight text-white">
            我们的照片墙
          </h1>
          <p className="text-gray-300 text-lg">
            记录每一个值得珍藏的瞬间
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-medium mb-2">{photo.title}</h3>
                  <p className="text-sm text-gray-200">{photo.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}