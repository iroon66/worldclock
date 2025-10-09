'use client';

import React from 'react';
import { Clock, MapPin, Star, Sparkles, Shield, Moon } from 'lucide-react';
import { Card } from './ui/Card';
import { Container } from './ui/Container';

const features = [
  { 
    icon: Clock, 
    title: '실시간 시간대 변환', 
    description: '두 시간대를 동시에 실시간 비교',
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: MapPin, 
    title: '위치 기반 자동 설정', 
    description: '현재 위치 시간대 자동 인식',
    gradient: 'from-emerald-500 to-teal-500'
  },
  { 
    icon: Star, 
    title: '즐겨찾기 도시 관리', 
    description: '자주 확인하는 도시를 저장',
    gradient: 'from-amber-500 to-orange-500'
  },
  { 
    icon: Sparkles, 
    title: '간단하고 직관적인 UI', 
    description: '누구나 쉽게 사용하는 인터페이스',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    icon: Shield, 
    title: '완벽한 프라이버시', 
    description: '모든 데이터는 기기에만 저장',
    gradient: 'from-rose-500 to-red-500'
  },
  { 
    icon: Moon, 
    title: '다크모드 지원', 
    description: '눈의 피로를 줄이는 테마 선택',
    gradient: 'from-indigo-500 to-violet-500'
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">주요 기능</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Between Time이 제공하는 핵심 기능</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Card key={i} className="h-full">
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 rounded-xl bg-gradient-to-br ${f.gradient} p-3 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{f.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{f.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
