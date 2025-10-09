'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: '기능' },
    { href: '#how-it-works', label: '사용방법' },
    { href: '#screenshots', label: '스크린샷' },
    { href: '#download', label: '다운로드' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        isScrolled ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-gray-900/50 border-b border-gray-200/60 dark:border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Between Time" width={28} height={28} className="rounded" />
          <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Between Time</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="메뉴"
            onClick={() => setIsMobileOpen((v) => !v)}
            className="p-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
          >
            {isMobileOpen ? '닫기' : '메뉴'}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur">
          <nav className="px-4 py-3 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-sm text-gray-800 dark:text-gray-200"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

