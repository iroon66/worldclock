'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';
import { motion } from 'framer-motion';

const screenshots = [
  { title: '메인 화면', image: '/screenshots/main.png', desc: '두 시간대를 한눈에 비교' },
  { title: '도시 선택', image: '/screenshots/select.png', desc: '전 세계 도시 검색' },
  { title: '즐겨찾기', image: '/screenshots/favorites.png', desc: '자주 보는 도시 저장' },
  { title: '설정', image: '/screenshots/settings.png', desc: '앱 환경 설정' },
  { title: '상세 정보', image: '/screenshots/details.png', desc: '시간대 상세 보기' },
];

export const Screenshots: React.FC = () => {
  return (
    <section id="screenshots" className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            앱 미리보기
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Between Time의 직관적인 인터페이스를 경험하세요
          </p>
        </div>

        {/* Featured Screenshot - 첫 번째를 크게 */}
        <div className="mb-12 max-w-sm mx-auto">
          <motion.div
            className="group relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700"
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full aspect-[9/19]">
              <Image
                src={screenshots[0].image}
                alt={screenshots[0].title}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 384px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-1">{screenshots[0].title}</h3>
              <p className="text-sm text-white/90">{screenshots[0].desc}</p>
            </div>
          </motion.div>
        </div>

        {/* Grid of smaller screenshots */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {screenshots.slice(1).map((s, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 cursor-pointer"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-full aspect-[9/19]">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Title overlay - 항상 표시 */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-xs font-semibold text-white">{s.title}</h4>
              </div>

              {/* Description - 호버 시 표시 */}
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h4 className="text-sm font-bold text-white mb-1">{s.title}</h4>
                  <p className="text-xs text-white/90">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            실제 앱 화면
          </div>
        </div>
      </Container>
    </section>
  );
};