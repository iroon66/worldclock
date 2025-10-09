'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 dark:text-gray-300">
        <div>© {year} iroon66. All rights reserved.</div>
        <nav className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white">개인정보처리방침</Link>
          <a href="https://github.com/iroon66/between-time" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">GitHub</a>
          <a href="https://github.com/iroon66/between-time/issues" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">문의</a>
        </nav>
      </div>
    </footer>
  );
};

