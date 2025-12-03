import React from 'react';
import { Users, Zap, Apple } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      id: "01",
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "質の高い経営者マッチング",
      subtitle: "「話が合う」だけではない。「波長が合う」相手と。",
      desc: "完全審査制を採用し、参加者を経営者・決裁者に限定。さらに、事前のヒアリングで事業フェーズや課題感、そして体力レベルを分析し、あなたにとって最適な「ビジネスパートナー」をマッチングします。"
    },
    {
      id: "02",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "会食を超える「共闘体験」",
      subtitle: "「食事」では見えない本音が、「運動」なら見える。",
      desc: "共に負荷に耐え、苦しい局面を乗り越える――この「吊り橋効果」にも似た共闘体験は、脳内のエンドルフィンを分泌させ、初対面でも一気に心の壁を取り払います。飾らない「素」の自分をさらけ出すことで生まれる信頼は本物です。"
    },
    {
      id: "03",
      icon: <Apple className="w-8 h-8 text-amber-500" />,
      title: "プロによる指導と食事管理",
      subtitle: "多忙な経営者のパフォーマンスを最大化する。",
      desc: "単なるマッチングの場ではありません。経営者のライフスタイルを熟知したプロトレーナーが、短時間で効率的に成果を出すメニューを指導。会食前後の調整メニューなど、ビジネスパーソン特有の悩みにも寄り添います。"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-bold tracking-widest mb-2 uppercase">Why Pair Fit</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">選ばれる3つの理由</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-amber-500/10 transition-colors">
                  {feature.icon}
                </div>
                <span className="text-5xl font-serif font-bold text-slate-800 group-hover:text-slate-700 transition-colors">
                  {feature.id}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-amber-500 text-sm font-medium mb-4">{feature.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};