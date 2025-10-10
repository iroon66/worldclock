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
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: MapPin,
    title: '위치 기반 자동 설정',
    description: 'GPS를 활용해 현재 위치의 시간대를 자동으로 인식합니다. 여행 중에도 별도 설정 없이 바로 사용하세요.',
    gradient: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: Star,
    title: '즐겨찾기 도시 관리',
    description: '자주 확인하는 도시를 저장하고 빠르게 접근하세요. 최대 10개 도시까지 즐겨찾기로 관리할 수 있습니다.',
    gradient: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
  },
  {
    icon: Sparkles,
    title: '간단하고 직관적인 UI',
    description: '복잡한 설정 없이 누구나 쉽게 사용할 수 있습니다. 깔끔하고 모던한 디자인으로 사용자 경험을 극대화했습니다.',
    gradient: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: Shield,
    title: '완벽한 프라이버시',
    description: '모든 데이터는 기기에만 저장되며, 외부 전송이 없습니다. 개인정보 보호를 최우선으로 생각합니다.',
    gradient: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
  },
  {
    icon: Moon,
    title: '다크모드 지원',
    description: '눈의 피로를 줄여주는 세련된 다크모드를 제공합니다. 시스템 설정에 따라 자동으로 전환됩니다.',
    gradient: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-200/30 to-cyan-200/30 dark:from-green-800/20 dark:to-cyan-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-8 shadow-lg"
          >
            <Zap className="w-5 h-5 mr-2" />
            주요 기능
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            <span className="gradient-text">특별한 기능들</span>
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            worldclock만의 독특하고 유용한 기능들로 시간 관리의 새로운 경험을 제공합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className={`relative p-8 ${feature.bgColor} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700 overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full blur-xl"></div>
                </div>

                {/* Icon */}
                <div className={`relative w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <feature.icon className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <Globe className="w-6 h-6 mr-3" />
            모든 기능을 무료로 이용하세요
          </div>
        </motion.div>
      </div>
    </section>
  );
};