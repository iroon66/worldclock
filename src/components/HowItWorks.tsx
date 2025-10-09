'use client';

import React from 'react';
import { Container } from './ui/Container';

const steps = [
  { num: '01', title: '앱 실행', desc: '현재 위치 시간대 자동 감지' },
  { num: '02', title: '도시 선택', desc: '비교할 도시를 선택' },
  { num: '03', title: '실시간 비교', desc: '두 시간대를 실시간 비교' },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">사용 방법</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">3단계로 간편하게 세계 시간 비교</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">{s.num}</div>
              <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

