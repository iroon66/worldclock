'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowDown, Sparkles, Globe, Clock, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-800/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/30 dark:bg-purple-800/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200/30 dark:bg-pink-800/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              새로운 세계시계 경험
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">세계와 연결되는</span>
              <br />
              <span className="text-gray-900 dark:text-white">시간, worldclock</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              전 세계 어디서든, 정확한 시간을 손쉽게 비교하세요. 
              <span className="font-semibold text-gray-800 dark:text-gray-200">직관적이고 아름다운</span> 인터페이스로 시간을 관리하세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                href="https://play.google.com/store/apps/details?id=com.iroon.worldclock"
                size="lg"
                className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Google Play에서 다운로드
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                App Store 출시 예정
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                무료 다운로드
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                프라이버시 보호
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                실시간 동기화
              </div>
            </motion.div>
          </motion.div>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-80 h-[600px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-8">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-6">🌍</div>
                        <div className="text-3xl font-bold mb-2">worldclock</div>
                        <div className="text-lg opacity-80 mb-8">세계시계 앱</div>
                        
                        <div className="space-y-4 text-left">
                          <div className="flex items-center">
                            <Globe className="w-5 h-5 mr-3" />
                            <span>실시간 시간대 변환</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-3" />
                            <span>위치 기반 자동 설정</span>
                          </div>
                          <div className="flex items-center">
                            <Shield className="w-5 h-5 mr-3" />
                            <span>완벽한 프라이버시</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Screen reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
              </div>

              {/* Floating elements around phone */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">🌍</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center"
              >
                <span className="text-white font-bold">⏰</span>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 dark:text-gray-500"
            >
              <span className="text-sm mb-2">스크롤하여 더 보기</span>
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};