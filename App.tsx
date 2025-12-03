import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Features } from './components/Features';
import { Founder } from './components/Founder';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden selection:bg-amber-500 selection:text-slate-900">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Features />
        <Founder />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;