import React from 'react';
import { Dumbbell, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="bg-amber-600 p-1.5 rounded-lg">
               <Dumbbell className="w-5 h-5 text-slate-950" />
            </div>
            <span className="text-xl font-serif font-bold text-white tracking-wider">
              PAIR FIT
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-slate-300 transition-colors">運営会社</a>
            <a href="#" className="hover:text-slate-300 transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-slate-300 transition-colors">特定商取引法に基づく表記</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Pair Fit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};