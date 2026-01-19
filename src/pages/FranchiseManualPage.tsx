import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Bot, Box, ChartLine, Flag, Gift, Send, Check } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { franchiseManualTranslations } from '@/i18n/translations';
import SEO from '@/components/SEO';

const FranchiseManualPage: React.FC = () => {
  const { language } = useLanguage();
  const t = franchiseManualTranslations[language];

  return (
    <div className="min-h-screen bg-black text-white antialiased pb-24">
      <SEO 
        title={`${t.heroTitle} - MrDelivery`}
        description={t.heroDescription}
        keywords="franchise, MrDelivery, AI, automation, digital business"
        url="https://mrdelivery.lovable.app/franchise_manual"
      />

      {/* Header / Logo Area */}
      <header className="pt-8 pb-4 px-4 text-center sticky top-0 bg-black/95 backdrop-blur-md z-50 border-b border-white/10">
        <div className="flex items-center justify-between max-w-md mx-auto mb-2">
          <Link to="/franchise" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-400 rounded flex items-center justify-center text-black font-black text-lg">M</div>
            <span className="text-xl font-extrabold text-white tracking-tight">Mr<span className="text-amber-400">Delivery</span></span>
          </div>
          <LanguageSwitcher />
        </div>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">{t.version}</p>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8 text-center max-w-md mx-auto">
        <h1 className="text-3xl font-black text-white leading-tight mb-4">
          {t.heroTitle.split(' ').map((word, i) => 
            word === 'AI' || word === 'IA' ? <span key={i} className="text-amber-400">{word} </span> : word + ' '
          )}
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          {t.heroDescription}
        </p>
        
        <div className="inline-block px-4 py-2 bg-zinc-900 border border-amber-400/30 rounded-lg mb-6">
          <span className="text-amber-400 font-bold text-sm flex items-center gap-1">
            <Check className="w-4 h-4" /> {t.roiGuarantee}
          </span>
        </div>

        <a 
          href="#contact" 
          className="block w-full bg-amber-400 text-black font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(250,204,21,0.4)] animate-pulse hover:scale-105 transition transform text-lg uppercase"
        >
          {t.applyCta}
        </a>
      </section>

      {/* Main Content Stack (Acordeoane) */}
      <main className="px-4 max-w-md mx-auto space-y-3">

        {/* 1. Viziunea */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all [&[open]]:bg-amber-400 [&[open]]:text-black">
            <span className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-amber-400 group-open:text-black" />
              {t.sections.vision.title}
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm text-gray-300 border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <p className="mb-4"><strong className="text-white">{t.sections.vision.problem}</strong> {t.sections.vision.problemDesc}</p>
            <ul className="space-y-2 mb-4 list-disc pl-4 text-gray-400">
              {t.sections.vision.problemItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p><strong className="text-amber-400">{t.sections.vision.solution}</strong> {t.sections.vision.solutionDesc}</p>
          </div>
        </details>

        {/* 2. Robotul (The Engine) */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-amber-400 group-open:text-black" />
              {t.sections.robot.title}
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm text-gray-300 border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <p className="mb-4">{t.sections.robot.intro}</p>
            <div className="space-y-3">
              {t.sections.robot.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-amber-400/20 text-amber-400 w-6 h-6 flex items-center justify-center rounded font-bold text-xs">{i + 1}</div>
                  <p><span className="text-white font-bold">{step.title}</span> {step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </details>

        {/* 3. Cele 5 Pachete */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <Box className="w-5 h-5 text-amber-400 group-open:text-black" />
              {t.sections.income.title}
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm border-t border-white/10 bg-black/50 space-y-6 animate-[slideDown_0.3s_ease-out]">
            {t.sections.income.packages.map((pkg, i) => (
              <div key={i} className={i > 0 ? 'border-t border-white/10 pt-4 relative' : 'relative'}>
                {pkg.bestseller && (
                  <span className="absolute top-4 right-0 bg-amber-400 text-black text-[10px] px-2 rounded font-bold">BESTSELLER</span>
                )}
                <h4 className="text-amber-400 font-bold">{pkg.name}</h4>
                {pkg.target && <p className="text-xs text-gray-400">{pkg.target}</p>}
                <div className="flex justify-between mt-1">
                  <span className="text-white font-bold">{pkg.price}</span>
                  <span className="text-green-400 font-bold">{pkg.net}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </details>

        {/* 4. Financiar */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <ChartLine className="w-5 h-5 text-amber-400 group-open:text-black" />
              {t.sections.financial.title}
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <p className="mb-4 text-gray-400 text-center">{t.sections.financial.intro}</p>
            
            {t.sections.financial.phases.map((phase, i) => (
              <div key={i} className="bg-black rounded border border-white/10 p-3 mb-3">
                <div className="text-amber-400 font-bold mb-1">{phase.name}</div>
                <div className="flex justify-between text-gray-300">
                  <span>{t.sections.financial.clientsLabel}</span> <span>{phase.clients}</span>
                </div>
                <div className="flex justify-between text-white font-bold mt-1">
                  <span>{t.sections.financial.profitLabel}</span> <span>{phase.profit}</span>
                </div>
              </div>
            ))}
          </div>
        </details>

        {/* 5. Onboarding */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <Flag className="w-5 h-5 text-amber-400 group-open:text-black" />
              {t.sections.launch.title}
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <ol className="relative border-l border-amber-400 ml-2 space-y-6">
              {t.sections.launch.timeline.map((item, i) => (
                <li key={i} className="pl-6 relative">
                  <span className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full ${i === 2 ? 'bg-green-500' : 'bg-amber-400'}`}></span>
                  <h5 className="font-bold text-white">{item.title}</h5>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </details>

        {/* 6. Ce Primești */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-amber-400 group-open:text-black" />
              {t.sections.license.title}
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <ul className="space-y-2 text-gray-300">
              {t.sections.license.items.map((item, i) => (
                <li key={i} className="flex items-center"><Check className="w-4 h-4 text-amber-400 mr-2" /> {item}</li>
              ))}
            </ul>
            <div className="mt-4 text-center border-t border-white/10 pt-4">
              <div className="text-gray-400 text-xs uppercase">{t.sections.license.costLabel}</div>
              <div className="text-3xl font-black text-white">{t.sections.license.cost}</div>
            </div>
          </div>
        </details>

      </main>

      {/* Bottom Sticky CTA for Mobile */}
      <div id="contact" className="fixed bottom-0 left-0 w-full p-4 bg-black/80 backdrop-blur border-t border-white/10 z-40">
        <Link 
          to="/franchise#apply-form"
          className="flex items-center justify-center w-full bg-white text-black font-extrabold py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          <Send className="w-5 h-5 mr-2" />
          {t.contactTeam}
        </Link>
      </div>
    </div>
  );
};

export default FranchiseManualPage;