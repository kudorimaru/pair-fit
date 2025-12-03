import React from 'react';
import { Quote } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section id="message" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900 skew-x-12 translate-x-20 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-5/12 order-2 md:order-1">
             <div className="relative aspect-[3/4] w-full max-w-sm mx-auto md:ml-auto">
                <img 
                  src="/founder.jpg" 
                  alt="Founder portrait" 
                  className="w-full h-full object-cover rounded-sm shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-slate-900 p-6 border-l-4 border-amber-500 shadow-xl max-w-xs">
                    <p className="text-amber-500 font-bold text-sm mb-1">FOUNDER</p>
                    <p className="text-white font-serif text-xl">加藤耀介</p>
                </div>
             </div>
          </div>

          <div className="w-full md:w-7/12 order-1 md:order-2">
            <Quote className="w-12 h-12 text-amber-500/20 mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              一枚の名刺より、<br />
              一度のハイタッチを。
            </h2>
            <div className="text-slate-300 space-y-6 text-lg leading-relaxed">
              <p>
                かつて、私が新卒で入社した会社の社長との関係に悩んでいた時、状況を一変させたのは「一度の合同トレーニング」でした。
              </p>
              <p>
                極限まで体を動かし、息を切らして共に限界に挑戦をした瞬間、それまでの嘘のように深い信頼関係が生まれたのです。
              </p>
              <p>
                この原体験が「ペアフィット」の全てです。ただでさえ、忙しく会食の多い経営者が健康になりながら、最高のビジネスパートナーも見つかる。そんな一石二鳥の体験を、ぜひあなたも体感してください。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};