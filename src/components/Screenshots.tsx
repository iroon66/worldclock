'use client';

import React from 'react';
import { motion } from 'framer-motion';

const screenshots = [
  {
    title: '메인 화면',
    description: '깔끔하고 직관적인 인터페이스',
    emoji: '🏠',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: '도시 선택',
    description: '전 세계 도시를 쉽게 검색',
    emoji: '🔍',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: '즐겨찾기',
    description: '자주 사용하는 도시를 빠르게 접근',
    emoji: '⭐',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: '설정',
    description: '다양한 커스터마이징 옵션',
    emoji: '⚙️',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: '상세 정보',
    description: '시간대별 자세한 정보 제공',
    emoji: '📊',
    gradient: 'from-red-500 to-rose-500',
  },
];

export const Screenshots: React.FC = () => {
  return (
    <section id="screenshots" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6"
          >
            📱 스크린샷
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">아름다운 인터페이스</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Between Time의 깔끔하고 직관적인 인터페이스를 만나보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Phone Frame */}
                <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-3">
                  <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
                    <div className={`w-full h-full bg-gradient-to-br ${screenshot.gradient} flex flex-col items-center justify-center text-white relative`}>
                      <div className="text-6xl mb-4">{screenshot.emoji}</div>
                      <div className="text-2xl font-bold mb-2">{screenshot.title}</div>
                      <div className="text-lg opacity-80 text-center px-4">{screenshot.description}</div>
                    </div>
                    {/* Screen reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* Home indicator */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full"></div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
                  <p className="text-sm text-gray-200">{screenshot.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};