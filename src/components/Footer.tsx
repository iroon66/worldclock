'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🌍</span>
                </div>
                <span className="text-2xl font-bold gradient-text">Between Time</span>
              </Link>
              
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                전 세계 시간대를 실시간으로 비교하고 관리하는 아름다운 세계시계 앱입니다. 
                직관적인 인터페이스와 완벽한 프라이버시 보호를 제공합니다.
              </p>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/iroon66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:iroon66@gmail.com"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="이메일"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://betweentime.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="웹사이트"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">빠른 링크</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/#features" className="text-gray-400 hover:text-white transition-colors duration-200">
                    주요 기능
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-200">
                    사용 방법
                  </Link>
                </li>
                <li>
                  <Link href="/#screenshots" className="text-gray-400 hover:text-white transition-colors duration-200">
                    스크린샷
                  </Link>
                </li>
                <li>
                  <Link href="/#download" className="text-gray-400 hover:text-white transition-colors duration-200">
                    다운로드
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Support */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">지원</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/iroon66/worldclock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:iroon66@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    문의
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 iroon66. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};