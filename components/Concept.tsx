import React from 'react';

export const Concept: React.FC = () => {
  return (
    <section id="concept" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             <div className="relative">
                {/* Decorative border */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-600/50"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-600/50"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format&fit=crop"
                  alt="Endorphin boosting workout" 
                  className="w-full rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight">
              ビジネスを加速させるのは、<br />
              アルコールではなく<br />
              <span className="text-amber-500">エンドルフィン</span>だ。
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                経営者の時間は有限です。形式的な交流会や、翌日に響く連日の会食にこれ以上時間を費やす必要はありません。
              </p>
              <p>
                必要なのは、探り合いの会話ではなく、本能で通じ合う信頼関係です。
              </p>
              <p>
                「ペアフィット」は、多忙な経営者同士がペアを組み、共にトレーニングを行うことで、最短距離で深いリレーションを構築する新しいビジネスマッチングです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};