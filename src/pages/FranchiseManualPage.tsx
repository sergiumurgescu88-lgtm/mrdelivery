import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Bot, Box, ChartLine, Flag, Gift, Send, Check } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import SEO from '@/components/SEO';

const FranchiseManualPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white antialiased pb-24">
      <SEO 
        title="Franciza MrDelivery - Sistem AI la Cheie" 
        description="Business AI la cheie, complet automatizat. Fără birou, fără angajați. Investește €5.000 și operează un imperiu digital de oriunde din lume."
        keywords="franciză, MrDelivery, AI, automatizare, business digital"
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
        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Manual Franciză Versiunea 3.0</p>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8 text-center max-w-md mx-auto">
        <h1 className="text-3xl font-black text-white leading-tight mb-4">
          BUSINESS <span className="text-amber-400">AI</span> LA CHEIE <br /> COMPLET AUTOMATIZAT
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Fără birou. Fără angajați la început. Investește <span className="text-white font-bold">€5.000</span> și operează un imperiu digital de oriunde din lume.
        </p>
        
        <div className="inline-block px-4 py-2 bg-zinc-900 border border-amber-400/30 rounded-lg mb-6">
          <span className="text-amber-400 font-bold text-sm flex items-center gap-1">
            <Check className="w-4 h-4" /> Garanție ROI 30 Zile
          </span>
        </div>

        <a 
          href="#contact" 
          className="block w-full bg-amber-400 text-black font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(250,204,21,0.4)] animate-pulse hover:scale-105 transition transform text-lg uppercase"
        >
          Aplică pentru Franciză
        </a>
      </section>

      {/* Main Content Stack (Acordeoane) */}
      <main className="px-4 max-w-md mx-auto space-y-3">

        {/* 1. Viziunea */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all [&[open]]:bg-amber-400 [&[open]]:text-black">
            <span className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-amber-400 group-open:text-black" />
              VIZIUNEA & PROBLEMA
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm text-gray-300 border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <p className="mb-4"><strong className="text-white">Problema:</strong> 95% dintre restaurante și afacerile locale suferă digital.</p>
            <ul className="space-y-2 mb-4 list-disc pl-4 text-gray-400">
              <li>Comisioane uriașe (30-35%) la Glovo/Tazz/Uber.</li>
              <li>Lipsă de vizibilitate video (TikTok/Reels).</li>
              <li>Apeluri pierdute = bani pierduți.</li>
            </ul>
            <p><strong className="text-amber-400">Soluția MrDelivery:</strong> Tu le oferi un "departament digital" complet. Tu vinzi soluția, noi ne ocupăm de livrarea tehnică 100%.</p>
          </div>
        </details>

        {/* 2. Robotul (The Engine) */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-amber-400 group-open:text-black" />
              MOTORUL: ROBOTUL DE VÂNZĂRI
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm text-gray-300 border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <p className="mb-4">În timp ce alții sună "la rece", robotul tău AI muncește 24/7:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-amber-400/20 text-amber-400 w-6 h-6 flex items-center justify-center rounded font-bold text-xs">1</div>
                <p><span className="text-white font-bold">Scanează:</span> Google Maps în teritoriul tău exclusiv.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-amber-400/20 text-amber-400 w-6 h-6 flex items-center justify-center rounded font-bold text-xs">2</div>
                <p><span className="text-white font-bold">Extrage:</span> Email, Telefon, WhatsApp-ul patronilor.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-amber-400/20 text-amber-400 w-6 h-6 flex items-center justify-center rounded font-bold text-xs">3</div>
                <p><span className="text-white font-bold">Contactează:</span> Trimite 300 mesaje/zi automat.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-amber-400/20 text-amber-400 w-6 h-6 flex items-center justify-center rounded font-bold text-xs">4</div>
                <p><span className="text-white font-bold">Programează:</span> Îți pune Demo-uri direct în calendar.</p>
              </div>
            </div>
          </div>
        </details>

        {/* 3. Cele 5 Pachete */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <Box className="w-5 h-5 text-amber-400 group-open:text-black" />
              CELE 5 SURSE DE VENIT
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm border-t border-white/10 bg-black/50 space-y-6 animate-[slideDown_0.3s_ease-out]">
            
            {/* Pachet 1 */}
            <div>
              <h4 className="text-amber-400 font-bold">1. Management Platforme Livrare</h4>
              <p className="text-xs text-gray-400">Pentru Restaurante (Glovo, Tazz, Bolt)</p>
              <div className="flex justify-between mt-1">
                <span className="text-white font-bold">€300/lună</span>
                <span className="text-green-400 font-bold">Net: €273</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Negociere comisioane, optimizare meniuri.</p>
            </div>

            {/* Pachet 2 */}
            <div className="border-t border-white/10 pt-4">
              <h4 className="text-amber-400 font-bold">2. Producție Video Premium</h4>
              <p className="text-xs text-gray-400">Pentru orice afacere (TikTok/Reels)</p>
              <div className="flex justify-between mt-1">
                <span className="text-white font-bold">€500/lună</span>
                <span className="text-green-400 font-bold">Net: €455</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">20 Video-uri/lună, Avatar AI, Postare automată.</p>
            </div>

            {/* Pachet 3 */}
            <div className="border-t border-white/10 pt-4">
              <h4 className="text-amber-400 font-bold">3. Asistent Virtual AI 24/7</h4>
              <div className="flex justify-between mt-1">
                <span className="text-white font-bold">€400/lună</span>
                <span className="text-green-400 font-bold">Net: €364</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Răspunde la telefon, face rezervări pe WhatsApp.</p>
            </div>

            {/* Pachet 4 */}
            <div className="border-t border-white/10 pt-4 relative">
              <span className="absolute top-4 right-0 bg-amber-400 text-black text-[10px] px-2 rounded font-bold">BESTSELLER</span>
              <h4 className="text-amber-400 font-bold">4. Suită Digitală All-Inclusive</h4>
              <div className="flex justify-between mt-1">
                <span className="text-white font-bold">€350/lună</span>
                <span className="text-green-400 font-bold">Net: €318</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Aplicație proprie + Site Comenzi + Marketing.</p>
            </div>

            {/* Pachet 5 */}
            <div className="border-t border-white/10 pt-4">
              <h4 className="text-amber-400 font-bold">5. Generator Video AI</h4>
              <div className="flex justify-between mt-1">
                <span className="text-white font-bold">€100 (one-time)</span>
                <span className="text-green-400 font-bold">Net: €91</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Produs rapid de upsell. Poză în Video în 2 min.</p>
            </div>

          </div>
        </details>

        {/* 4. Financiar */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <ChartLine className="w-5 h-5 text-amber-400 group-open:text-black" />
              MODEL FINANCIAR
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <p className="mb-4 text-gray-400 text-center">Tu păstrezi <span className="text-white font-bold">91%</span> din venituri.</p>
            
            <div className="bg-black rounded border border-white/10 p-3 mb-3">
              <div className="text-amber-400 font-bold mb-1">FAZA 1: Solo (Lunile 1-6)</div>
              <div className="flex justify-between text-gray-300">
                <span>Clienți:</span> <span>10-12</span>
              </div>
              <div className="flex justify-between text-white font-bold mt-1">
                <span>Profit Net:</span> <span>~€5.780/lună</span>
              </div>
            </div>

            <div className="bg-black rounded border border-white/10 p-3 mb-3">
              <div className="text-amber-400 font-bold mb-1">FAZA 2: Echipă (Lunile 7-12)</div>
              <div className="flex justify-between text-gray-300">
                <span>Clienți:</span> <span>20</span>
              </div>
              <div className="flex justify-between text-white font-bold mt-1">
                <span>Profit Net:</span> <span>~€10.160/lună</span>
              </div>
            </div>

            <div className="bg-black rounded border border-white/10 p-3">
              <div className="text-amber-400 font-bold mb-1">FAZA 3: Imperiu (Luna 13+)</div>
              <div className="flex justify-between text-gray-300">
                <span>Clienți:</span> <span>30+</span>
              </div>
              <div className="flex justify-between text-white font-bold mt-1">
                <span>Profit Net:</span> <span>€15.000+/lună</span>
              </div>
            </div>
          </div>
        </details>

        {/* 5. Onboarding */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <Flag className="w-5 h-5 text-amber-400 group-open:text-black" />
              LANSARE ÎN 30 ZILE
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <ol className="relative border-l border-amber-400 ml-2 space-y-6">
              <li className="pl-6 relative">
                <span className="absolute -left-1.5 top-1.5 w-3 h-3 bg-amber-400 rounded-full"></span>
                <h5 className="font-bold text-white">Zilele 1-3: Fundația</h5>
                <p className="text-gray-400 text-xs">Semnare contract, acces Platformă, Configurare stație de lucru.</p>
              </li>
              <li className="pl-6 relative">
                <span className="absolute -left-1.5 top-1.5 w-3 h-3 bg-amber-400 rounded-full"></span>
                <h5 className="font-bold text-white">Zilele 4-10: Activare Bot</h5>
                <p className="text-gray-400 text-xs">Robotul începe trimiterea a 250 mesaje/zi. Primele demo-uri apar în calendar.</p>
              </li>
              <li className="pl-6 relative">
                <span className="absolute -left-1.5 top-1.5 w-3 h-3 bg-green-500 rounded-full"></span>
                <h5 className="font-bold text-white">Zilele 11-30: Primii Bani</h5>
                <p className="text-gray-400 text-xs">Închizi 4-6 clienți. <strong className="text-green-400">Recuperezi investiția de €5.000.</strong> Dacă nu, primești suport gratuit extins.</p>
              </li>
            </ol>
          </div>
        </details>

        {/* 6. Ce Primești */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-amber-400 group-open:text-black" />
              CE INCLUDE LICENȚA
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><Check className="w-4 h-4 text-amber-400 mr-2" /> Teritoriu Exclusiv</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-amber-400 mr-2" /> Configurare Robot AI Vânzări</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-amber-400 mr-2" /> Contracte & Legal GDPR</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-amber-400 mr-2" /> Training Academie Video</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-amber-400 mr-2" /> Coach Personal (90 zile)</li>
            </ul>
            <div className="mt-4 text-center border-t border-white/10 pt-4">
              <div className="text-gray-400 text-xs uppercase">Cost Unic Licență</div>
              <div className="text-3xl font-black text-white">€5.000</div>
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
          CONTACTEAZĂ ECHIPA
        </Link>
      </div>
    </div>
  );
};

export default FranchiseManualPage;
