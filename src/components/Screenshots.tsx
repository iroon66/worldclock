'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const screenshots = [
  {
    title: '메인 화면',
    description: '깔끔하고 직관적인 인터페이스로 시간을 한눈에 확인하세요',
    image: '/screenshots/main.png',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: '시간 비교',
    description: '두 개의 시간대를 동시에 비교하여 정확한 시차를 확인하세요',
    image: '/screenshots/compare.png',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: '즐겨찾기',
    description: '자주 사용하는 도시를 저장하고 빠르게 접근하세요',
    image: '/screenshots/favorites.png',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export const Screenshots: React.FC = () => {
  return (
    <section id="screenshots" className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 dark:from-blue-800/20 dark:to-cyan-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-8 shadow-lg"
          >
            📱 스크린샷
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            <span className="gradient-text">아름다운 인터페이스</span>
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            worldclock의 깔끔하고 직관적인 인터페이스를 만나보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                {/* Phone Frame */}
                <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-4 m-4">
                  <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                    <Image
                      src={screenshot.image}
                      alt={screenshot.title}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Screen reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                  <h3 className="text-xl font-bold mb-2">{screenshot.title}</h3>
                  <p className="text-sm text-gray-200">{screenshot.description}</p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-3">{screenshot.title}</h3>
                  <p className="text-lg text-gray-200">{screenshot.description}</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};