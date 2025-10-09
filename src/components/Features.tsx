'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Star, Sparkles, Shield, Moon, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '실시간 시간대 변환',
    description: '두 개의 시간대를 동시에 보며 실시간으로 비교하세요. 정확한 시차 계산으로 혼란 없는 시간 관리가 가능합니다.',
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0.1,
  },
  {
    icon: MapPin,
    title: '위치 기반 자동 설정',
    description: 'GPS를 활용해 현재 위치의 시간대를 자동으로 인식합니다. 여행 중에도 별도 설정 없이 바로 사용하세요.',
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.2,
  },
  {
    icon: Star,
    title: '즐겨찾기 도시 관리',
    description: '자주 확인하는 도시를 저장하고 빠르게 접근하세요. 최대 10개 도시까지 즐겨찾기로 관리할 수 있습니다.',
    gradient: 'from-yellow-500 to-orange-500',
    delay: 0.3,
  },
  {
    icon: Sparkles,
    title: '간단하고 직관적인 UI',
    description: '복잡한 설정 없이 누구나 쉽게 사용할 수 있습니다. 깔끔하고 모던한 디자인으로 사용자 경험을 극대화했습니다.',
    gradient: 'from-green-500 to-emerald-500',
    delay: 0.4,
  },
  {
    icon: Shield,
    title: '완벽한 프라이버시',
    description: '모든 데이터는 기기에만 저장되며, 외부 전송이 없습니다. 개인정보 보호를 최우선으로 생각합니다.',
    gradient: 'from-red-500 to-rose-500',
    delay: 0.5,
  },
  {
    icon: Moon,
    title: '다크모드 지원',
    description: '눈의 피로를 줄여주는 세련된 다크모드를 제공합니다. 시스템 설정에 따라 자동으로 전환됩니다.',
    gradient: 'from-indigo-500 to-violet-500',
    delay: 0.6,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
          >
            <Globe className="w-4 h-4 mr-2" />
            주요 기능
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">특별한 기능들</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Between Time만의 독특하고 유용한 기능들로 시간 관리의 새로운 경험을 제공합니다
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <Zap className="w-5 h-5 mr-2" />
            모든 기능을 무료로 이용하세요
          </div>
        </motion.div>
      </div>
    </section>
  );
};