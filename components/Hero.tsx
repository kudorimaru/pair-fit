import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="Dark Luxury Gym Background"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          style={{ animationDuration: '30s', animationDirection: 'alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <p className="text-amber-500 font-bold tracking-[0.2em] mb-4 uppercase animate-[fadeIn_1s_ease-out]">
            Executive Fitness Matching
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8 font-serif text-white animate-[fadeInUp_1s_ease-out_0.3s_both]">
            名刺交換より、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
              限界突破
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl animate-[fadeInUp_1s_ease-out_0.6s_both]">
            10回の会食より、1回のトレーニング。<br />
            経営者のための、審査制フィットネスマッチング「ペアフィット」。<br className="hidden md:block"/>
            共に汗を流し、心拍数を共有する体験が、最強の絆をつくる。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_1s_ease-out_0.9s_both]">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfMRjDa7dGJ2J8DCw4jrmL9P7dS1U24iAwgb1Y-520QWFPWHQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition-all transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-amber-500/20"
            >
              無料体験セッションに申し込む
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#concept"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 hover:border-amber-500 hover:text-amber-500 text-slate-300 font-medium rounded-lg transition-all"
            >
              詳しく見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};