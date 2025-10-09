'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { Download as DownloadIcon } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 bg-white dark:bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              세계와 연결되는 시간,
              <br />
              <span className="gradient-text">Between Time</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              전 세계 어디서든, 정확한 시간을 손쉽게 비교하세요
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="#download" size="md" className="gap-2">
                <DownloadIcon className="w-5 h-5" /> Google Play에서 다운로드
              </Button>
              <Button variant="outline" size="md" disabled className="opacity-70">
                App Store (준비 중)
              </Button>
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end">
            <div className="relative w-[260px] h-[520px] md:w-[300px] md:h-[600px] rounded-[2.5rem] border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
              <Image
                src="/screenshots/main.png"
                alt="Between Time App"
                fill
                sizes="(min-width: 768px) 300px, 260px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

