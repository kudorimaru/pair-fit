import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
         <img 
            src="https://picsum.photos/seed/running/1920/1080" 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
          まずは、無料体験セッションへ。
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          あなたのビジネスと健康を変える60分間がここから始まります。
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfMRjDa7dGJ2J8DCw4jrmL9P7dS1U24iAwgb1Y-520QWFPWHQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-amber-900/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
          >
            無料体験に申し込む
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfMRjDa7dGJ2J8DCw4jrmL9P7dS1U24iAwgb1Y-520QWFPWHQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg rounded-lg border border-slate-600 transition-all flex items-center justify-center gap-2"
          >
            無料カウンセリング
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-slate-400 text-sm">
           <div className="flex items-center gap-2">
             <CheckCircle2 className="w-4 h-4 text-amber-500" />
             <span>無理な勧誘は一切ありません</span>
           </div>
           <div className="flex items-center gap-2">
             <CheckCircle2 className="w-4 h-4 text-amber-500" />
             <span>初心者歓迎</span>
           </div>
           <div className="flex items-center gap-2">
             <CheckCircle2 className="w-4 h-4 text-amber-500" />
             <span>審査制により質を担保</span>
           </div>
        </div>
      </div>
    </section>
  );
};