"use client";

import React from 'react';
import { Container } from './ui/Container';
import { Smartphone, Apple } from 'lucide-react';

export const Download: React.FC = () => {
  return (
    <section id="download" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">지금 다운로드</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Between Time을 무료로 사용해보세요</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
              <Smartphone className="w-5 h-5" />
              <span>Google Play</span>
            </a>
            <button disabled className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500">
              <Apple className="w-5 h-5" />
              <span>App Store (준비 중)</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

