'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Download as DownloadIcon, Smartphone, Globe } from 'lucide-react';

export const Download: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6"
          >
            <DownloadIcon className="w-4 h-4 mr-2" />
            지금 다운로드
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Between Time을 무료로 사용해보세요
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            지금 바로 다운로드하고 전 세계 시간을 손쉽게 관리하세요
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button
            href="https://play.google.com/store/apps/details?id=com.iroon.worldclock"
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-4 text-lg font-semibold"
          >
            <Smartphone className="w-6 h-6 mr-3" />
            Google Play
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-4 text-lg font-semibold"
          >
            <Globe className="w-6 h-6 mr-3" />
            App Store (준비 중)
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🆓</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">완전 무료</h3>
            <p className="text-white/80">모든 기능을 무료로 이용하세요</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">프라이버시 보호</h3>
            <p className="text-white/80">개인정보는 기기에만 저장됩니다</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">빠른 성능</h3>
            <p className="text-white/80">가볍고 빠른 앱 경험</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};