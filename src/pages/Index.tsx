import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceItem } from '@/components/ServiceItem';
import { PulsingBadge } from '@/components/PulsingBadge';
import { CinematicPlayer, PackageType } from '@/components/CinematicPlayer';
import { InteractiveStarBackground } from '@/components/InteractiveStarBackground';
import { FullscreenVideo } from '@/components/FullscreenVideo';
import { getWhatsAppUrl, getPhoneUrl } from '@/i18n/translations';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Zap, Sparkles, TrendingUp, MessageSquare, Video, Clock, ShoppingBag, Calendar, Award, Megaphone, Globe, Phone, Users, Star, Heart, Upload, Image, Check, Send, Palette, ArrowRight, Bot, Eye, Truck, UtensilsCrossed, Headphones, DollarSign, Handshake, FileText, BarChart3, Rocket, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { RestaurantAuditForm } from '@/components/RestaurantAuditForm';
const Index = () => {
  const {
    language,
    t
  } = useLanguage();
  const [activeTab, setActiveTab] = useState<'existente' | 'ai'>('existente');
  const [activeAudioPackage, setActiveAudioPackage] = useState<PackageType | null>(null);
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const seoData = {
    ro: {
      title: 'Servicii de Management Livrări și Marketing AI pentru Restaurante',
      description: 'MrDelivery oferă management complet pentru restaurante pe platformele de livrare (Glovo, Wolt, Bolt Food), producție video AI, chatboți și automatizări inteligente. Crește-ți vânzările cu 40%!',
      keywords: 'management livrări restaurant, Glovo management, Wolt management, Bolt Food, marketing restaurant, video AI restaurant, chatbot restaurant, automatizări HoReCa, creștere vânzări restaurant'
    },
    en: {
      title: 'Delivery Management & AI Marketing Services for Restaurants',
      description: 'MrDelivery provides complete restaurant management on delivery platforms (Uber Eats, DoorDash, Grubhub), AI video production, chatbots, and smart automations. Increase your sales by 40%!',
      keywords: 'restaurant delivery management, Uber Eats management, DoorDash management, restaurant marketing, AI video restaurant, restaurant chatbot, HoReCa automations, restaurant sales growth'
    },
    es: {
      title: 'Gestión de Entregas y Marketing AI para Restaurantes',
      description: 'MrDelivery ofrece gestión completa para restaurantes en plataformas de entrega, producción de video AI, chatbots y automatizaciones inteligentes. ¡Aumenta tus ventas un 40%!',
      keywords: 'gestión entregas restaurante, gestión Uber Eats, marketing restaurante, video AI restaurante, chatbot restaurante, automatizaciones HoReCa'
    }
  };
  const currentSeo = seoData[language] || seoData.ro;
  return <div className="min-h-screen relative overflow-x-hidden bg-background">
      <SEO title={currentSeo.title} description={currentSeo.description} keywords={currentSeo.keywords} url="https://mrdelivery.lovable.app" locale={language === 'ro' ? 'ro_RO' : language === 'es' ? 'es_ES' : 'en_US'} />
      
      {/* Interactive Star Background with Mouse Effect */}
      <InteractiveStarBackground />

      <div className="max-w-4xl mx-auto px-3 sm:px-4 pt-6 pb-28 sm:py-8 relative z-10">
        {/* Hero Section */}
        <header className="text-center mb-6 sm:mb-8 relative pt-2">
          <LanguageSwitcher />
          
          <div className="inline-block relative mb-2 sm:mb-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gradient-primary drop-shadow-lg md:text-6xl">
              {t.siteName}
            </h1>
          </div>
          
          {/* Hero Subtitle - Experience/Trust Statement */}
          <div className="flex flex-col items-center gap-1 sm:gap-1.5 mb-4 sm:mb-5 px-3">
            <p className="text-base sm:text-lg md:text-xl text-amber-100/95 font-semibold">
              <span className="text-xl sm:text-2xl md:text-3xl text-amber-400 font-extrabold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">5+</span> {language === 'ro' ? 'ani de expertiză în livrări' : language === 'es' ? 'años de experiencia de élite en delivery' : 'Years of Elite Delivery Expertise'}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-amber-100/95 font-semibold">
              <span className="text-xl sm:text-2xl md:text-3xl text-amber-400 font-extrabold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">4+</span> {language === 'ro' ? 'ani de parteneriate de succes' : language === 'es' ? 'años de alianzas probadas' : 'Years of Proven Partnerships'}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-amber-100/95 font-semibold">
              <span className="text-xl sm:text-2xl md:text-3xl text-amber-400 font-extrabold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">90%</span> {language === 'ro' ? 'dintre clienți vin prin recomandări' : language === 'es' ? 'de clientes llegan por recomendación' : 'of Clients Come via Referrals'}
            </p>
          </div>
          
          {/* Gold Frame Container for Services */}
          <div className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-950/60 via-yellow-900/40 to-amber-950/60 border-2 border-amber-400/70 shadow-[0_0_30px_rgba(251,191,36,0.3),inset_0_1px_0_rgba(251,191,36,0.4)] backdrop-blur-sm max-w-2xl mx-auto">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-3 border-l-3 border-amber-400 rounded-tl-xl"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-3 border-r-3 border-amber-400 rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-3 border-l-3 border-amber-400 rounded-bl-xl"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-3 border-r-3 border-amber-400 rounded-br-xl"></div>
            
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-yellow-300/10 to-amber-400/5 rounded-2xl pointer-events-none" />
            
            <div className="flex flex-col items-center gap-1.5 sm:gap-2 px-2 relative z-10">
              {t.taglineItems.map((item, index) => <p key={index} className="text-base sm:text-xl md:text-2xl text-white font-extrabold drop-shadow-md">
                  {item.emoji} {item.text}
                </p>)}
            </div>
            <div className="flex justify-center gap-1.5 sm:gap-3 mt-3 sm:mt-4 flex-wrap px-2 relative z-10">
              <PulsingBadge color="blue">{t.badges.ai}</PulsingBadge>
              <PulsingBadge color="purple">{t.badges.apps}</PulsingBadge>
              <PulsingBadge color="green">{t.badges.marketing}</PulsingBadge>
            </div>
          </div>
        </header>

        {/* Unified Audio Player - Podcast + Packages */}
        <CinematicPlayer activePackage={activeAudioPackage} onClearPackage={() => setActiveAudioPackage(null)} />



        


        {/* Tab Navigation - Servicii existente / Servicii AI */}
        <nav className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
          <button onClick={() => setActiveTab('existente')} className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 relative overflow-hidden ${activeTab === 'existente' ? 'bg-gradient-primary text-primary-foreground shadow-2xl' : 'bg-card text-muted-foreground hover:shadow-lg border border-border'}`}>
            {activeTab === 'existente' && <div className="absolute inset-0 bg-card/20 animate-pulse"></div>}
            <span className="relative flex items-center justify-center gap-1.5 sm:gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.tabs.current}
            </span>
          </button>
          <button onClick={() => setActiveTab('ai')} className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 relative overflow-hidden ${activeTab === 'ai' ? 'bg-gradient-primary text-primary-foreground shadow-2xl' : 'bg-card text-muted-foreground hover:shadow-lg border border-border'}`}>
            {activeTab === 'ai' && <div className="absolute inset-0 bg-card/20 animate-pulse"></div>}
            <span className="relative flex items-center justify-center gap-1.5 sm:gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.tabs.ai}
            </span>
          </button>
        </nav>

        {/* Current Services Tab */}
        {activeTab === 'existente' && <main className="space-y-5 px-2">
            {/* Premium Gallery Button */}
            <Link to="/gallery" className="block group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-950/80 via-yellow-900/60 to-amber-950/80 border-2 border-amber-400/80 p-4 sm:p-5 shadow-[0_0_40px_rgba(251,191,36,0.4),inset_0_1px_0_rgba(251,191,36,0.5)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] transition-all duration-500 hover:scale-[1.02] cursor-pointer">
                {/* Animated glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 animate-[shimmer_3s_infinite] pointer-events-none" style={{backgroundSize: '200% 100%'}} />
                
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-3 border-l-3 border-amber-400 rounded-tl-xl opacity-80"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-3 border-r-3 border-amber-400 rounded-tr-xl opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-3 border-l-3 border-amber-400 rounded-bl-xl opacity-80"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-3 border-r-3 border-amber-400 rounded-br-xl opacity-80"></div>
                
                {/* Sparkle particles */}
                <div className="absolute top-2 left-4 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse opacity-70" />
                <div className="absolute top-4 right-8 w-1 h-1 bg-yellow-200 rounded-full animate-ping opacity-60" />
                <div className="absolute bottom-3 left-12 w-1 h-1 bg-amber-200 rounded-full animate-pulse opacity-50" />
                <div className="absolute bottom-2 right-4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping opacity-70" />
                
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Video className="w-5 h-5 sm:w-6 sm:h-6 text-amber-950" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 drop-shadow-md">
                      🎬 {language === 'ro' ? 'GALERIE VIDEO PREMIUM' : language === 'es' ? 'GALERÍA DE VIDEO PREMIUM' : 'PREMIUM VIDEO GALLERY'}
                    </span>
                    <span className="text-xs sm:text-sm text-amber-200/80 font-medium">
                      {language === 'ro' ? 'Vezi exemple de conținut creat pentru clienți' : language === 'es' ? 'Ver ejemplos de contenido creado' : 'See content examples created for clients'}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 group-hover:translate-x-2 transition-transform duration-300 ml-auto" />
                </div>
              </div>
            </Link>
            
            {/* Standard Package - Delivery Platform Management */}
            <ServiceCard title={t.services.standard.title} icon={Truck} price={t.services.standard.price} subtitle={t.services.standard.subtitle} packageNumber={1} audioPackage="management-platforme" onPlayAudio={setActiveAudioPackage}>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-foreground">{t.services.standard.support}</span>
                </div>
              </div>

              {/* 3 Main Feature Cards */}
              <div className="grid grid-cols-1 gap-4 mb-5">
                {/* Card 1: Negotiation & Budgets */}
                <div className="bg-gradient-to-br from-warning/10 via-warning/5 to-warning/10 p-4 sm:p-5 rounded-2xl border-2 border-warning/30 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-gradient-warning rounded-xl shadow-lg">
                      <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-warning-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-foreground">{(t.services.standard as any).negotiation?.title || '💰 Negociere Comisioane și Bugete'}</h4>
                      <span className="text-xs bg-warning/20 text-warning-foreground px-2 py-0.5 rounded-full font-semibold">{(t.services.standard as any).negotiation?.tagline || 'Economisești Bani'}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{(t.services.standard as any).negotiation?.intro || 'Nu lăsa profitul tău să dispară în comisioane uriașe.'}</p>
                  <div className="space-y-2">
                    {((t.services.standard as any).negotiation?.items || []).map((item: string, index: number) => <div key={index} className="flex items-start gap-2 bg-card/60 p-2.5 rounded-lg border border-warning/20">
                        <Check className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>)}
                  </div>
                </div>

                {/* Card 2: Active Menu */}
                <div className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-secondary/10 p-4 sm:p-5 rounded-2xl border-2 border-secondary/30 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-gradient-primary rounded-xl shadow-lg">
                      <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-foreground">{(t.services.standard as any).menu?.title || '🍽️ Meniu Optimizat pentru Vânzare'}</h4>
                      <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full font-semibold">{(t.services.standard as any).menu?.tagline || 'Vinzi Mai Mult'}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{(t.services.standard as any).menu?.intro || 'Un meniu care arată bine, vinde mai mult.'}</p>
                  <div className="space-y-2">
                    {((t.services.standard as any).menu?.items || []).map((item: string, index: number) => <div key={index} className="flex items-start gap-2 bg-card/60 p-2.5 rounded-lg border border-secondary/20">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>)}
                  </div>
                </div>

                {/* Card 3: Support & Optimization */}
                <div className="bg-gradient-to-br from-success/10 via-success/5 to-success/10 p-4 sm:p-5 rounded-2xl border-2 border-success/30 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-gradient-success rounded-xl shadow-lg">
                      <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-success-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-foreground">{(t.services.standard as any).support_card?.title || '📈 Suport și Logistică 24/7'}</h4>
                      <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded-full font-semibold">{(t.services.standard as any).support_card?.tagline || 'WhatsApp 24/7'}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{(t.services.standard as any).support_card?.intro || 'Suntem „departamentul tău de livrări" disponibil oricând pe WhatsApp.'}</p>
                  <div className="space-y-2">
                    {((t.services.standard as any).support_card?.items || []).map((item: string, index: number) => <div key={index} className="flex items-start gap-2 bg-card/60 p-2.5 rounded-lg border border-success/20">
                        <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>)}
                  </div>
                </div>

                {/* Card 4: Training Staff & Management */}
                <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-3 sm:p-5 rounded-2xl border-2 border-primary/30 shadow-lg">
                  <div className="flex items-start gap-2 sm:gap-3 mb-3">
                    <div className="p-2 sm:p-2.5 bg-gradient-primary rounded-xl shadow-lg flex-shrink-0">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-sm sm:text-lg text-foreground leading-tight break-words">{(t.services.standard as any).training?.title || '👥 Training Staff și Management'}</h4>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-semibold inline-block mt-1">{(t.services.standard as any).training?.tagline || 'Echipă Instruită'}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 break-words">{(t.services.standard as any).training?.intro || 'Echipa ta învață să utilizeze platformele de livrare ca un profesionist.'}</p>
                  <div className="space-y-2">
                    {((t.services.standard as any).training?.items || ['Instruire Completă: Învățăm personalul tău să folosească Glovo, Wolt și Bolt Food eficient - comenzi, tablete, confirmări.', 'Probleme Comenzi: Învață să gestioneze produse lipsă, comenzi anulate, cereri de refund - totul rezolvat rapid.', 'Best Practices: Sfaturi și trucuri pentru reducerea timpului de preparare, îmbunătățirea ambalajului și evitarea recenziilor negative.', 'Suport Continuu: Echipa are acces direct la noi pe WhatsApp pentru orice întrebare sau problemă.']).map((item: string, index: number) => <div key={index} className="flex items-start gap-2 bg-card/60 p-2 sm:p-2.5 rounded-lg border border-primary/20">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-foreground break-words leading-relaxed">{item}</span>
                      </div>)}
                  </div>
                </div>
              </div>

              {/* Monthly Reports - Premium Black & Gold Collapsible Section */}
              <div className="bg-black rounded-2xl border border-amber-400/30 shadow-2xl shadow-amber-500/10 mb-5 overflow-hidden">
                {/* Toggle Header */}
                <button 
                  onClick={() => setIsReportsOpen(!isReportsOpen)}
                  className="w-full bg-gradient-to-r from-amber-500/10 to-amber-600/5 px-5 py-4 flex items-center justify-between cursor-pointer hover:from-amber-500/15 hover:to-amber-600/10 transition-all duration-300 group"
                >
                  <h5 className="font-black text-xl sm:text-2xl text-amber-400 flex items-center gap-3">
                    <div className="p-2.5 bg-amber-400 rounded-xl shadow-lg shadow-amber-400/30 group-hover:shadow-amber-400/50 transition-shadow">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    {(t.services.standard as any).monthlyReports?.title || 'Ce primești lunar'}
                  </h5>
                  <ChevronDown className={`w-6 h-6 text-amber-400 transition-transform duration-300 ${isReportsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Collapsible Content */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isReportsOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  {/* Intro */}
                  <div className="px-5 pt-4 pb-2 border-t border-amber-400/20">
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      {(t.services.standard as any).monthlyReports?.intro || 'Pentru a ne asigura că business-ul tău crește constant pe platformele de delivery (Glovo, Wolt, Bolt, Tazz), îți oferim lunar un set de 5 rapoarte detaliate de performanță.'}
                    </p>
                  </div>

                  {/* Reports List */}
                  <div className="px-5 py-4 space-y-3">
                    {((t.services.standard as any).monthlyReports?.items || [
                      { icon: 'BarChart3', title: 'Analiză comparativă a încasărilor', desc: 'Evaluăm performanța financiară actuală în raport cu luna precedentă pentru a identifica tendințele de creștere.' },
                      { icon: 'Rocket', title: 'Raport de promovare și rezultate', desc: 'Analizăm campaniile active și măsurăm impactul real al promoțiilor asupra volumului de comenzi.' },
                      { icon: 'TrendingUp', title: 'Situația vânzărilor prin aplicație', desc: 'Monitorizăm fluxul de comenzi și eficiența canalelor de vânzare digitală.' },
                      { icon: 'Users', title: 'Raport achiziție clienți noi', desc: 'Vezi exact câți utilizatori noi au descoperit brandul tău în ultima lună.' },
                      { icon: 'ClipboardList', title: 'Centralizator meniu și oferte', desc: 'O situație clară a structurii meniului tău și a ofertelor speciale implementate.' }
                    ]).map((item: { icon: string; title: string; desc: string }, index: number) => {
                      const IconComponent = item.icon === 'BarChart3' ? BarChart3 
                        : item.icon === 'Rocket' ? Rocket 
                        : item.icon === 'TrendingUp' ? TrendingUp 
                        : item.icon === 'Users' ? Users 
                        : ClipboardList;
                      return (
                        <div 
                          key={index} 
                          className={`flex items-start gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 ${
                            isReportsOpen 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-4'
                          }`}
                          style={{ 
                            transitionDelay: isReportsOpen ? `${index * 100}ms` : '0ms',
                            transitionProperty: 'opacity, transform, background-color, border-color'
                          }}
                        >
                          <div className="p-2.5 bg-amber-400 rounded-xl flex-shrink-0 shadow-lg shadow-amber-400/20">
                            <IconComponent className="w-5 h-5 text-black" />
                          </div>
                          <div className="flex-1">
                            <h6 className="font-bold text-base text-amber-400 mb-1">{item.title}</h6>
                            <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer - Why Important */}
                  <div className="px-5 py-4 bg-gradient-to-r from-amber-500/10 to-transparent border-t border-amber-400/20">
                    <h6 className="font-bold text-base text-amber-400 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      {(t.services.standard as any).monthlyReports?.whyImportant || 'De ce este important acest management?'}
                    </h6>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {(t.services.standard as any).monthlyReports?.whyDesc || 'Nu doar listăm produsele, ci gestionăm activ prezența ta online. Ne ocupăm de integrarea logo-ului, fotografiile de brand și optimizarea viziunii locației tale, astfel încât să maximizezi fiecare oportunitate de vânzare.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Why section */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-2xl border-2 border-primary/20">
                <h5 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  {(t.services.standard as any).whyTitle || 'De ce ai nevoie de acest management?'}
                </h5>
                <div className="space-y-2">
                  {((t.services.standard as any).whyItems || []).map((item: string, index: number) => <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>)}
                </div>
              </div>
            </ServiceCard>

            {/* Pachet 2 - Video Production & Automatic Posting */}
            <ServiceCard title={t.services.video.title} icon={Video} price={t.services.video.price} originalPrice={t.services.video.originalPrice} discount={t.services.video.discount} subtitle={t.services.video.subtitle} highlight packageNumber={2} audioPackage="productie-video" onPlayAudio={setActiveAudioPackage}>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-lg">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-gradient-primary">{t.services.video.videosTitle}</span>
                </div>
              </div>

              {/* 3-Column Grid for Video Production Features */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
                {/* Column 1: Our Presenters */}
                <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 p-4 sm:p-5 rounded-2xl border-2 border-destructive/30 shadow-xl h-full">
                  <h4 className="font-bold text-base sm:text-lg text-foreground mb-2 flex items-center gap-2">
                    <div className="p-2 bg-destructive rounded-lg">
                      <Users className="w-5 h-5 text-destructive-foreground" />
                    </div>
                    {t.services.video.presenters?.title || 'OUR PRESENTERS'}
                  </h4>
                  <p className="text-sm text-destructive font-semibold mb-2">{t.services.video.presenters?.tagline || 'Zero effort from you'}</p>
                  <p className="text-sm text-muted-foreground mb-3">{t.services.video.presenters?.intro || 'We do everything. Our team of professional creators and presenters bring your brand to life.'}</p>
                  <div className="space-y-2">
                    {(t.services.video.presenters?.items || ['Professional team of creators', 'Experienced presenters', 'No effort required from you']).map((item: string, idx: number) => <ServiceItem key={idx} text={item} />)}
                  </div>
                </div>

                {/* Column 2: You Are The Face */}
                <div className="bg-gradient-to-br from-success/5 to-success/10 p-4 sm:p-5 rounded-2xl border-2 border-success/30 shadow-xl h-full">
                  <h4 className="font-bold text-base sm:text-lg text-foreground mb-2 flex items-center gap-2">
                    <div className="p-2 bg-success rounded-lg">
                      <Star className="w-5 h-5 text-success-foreground" />
                    </div>
                    {t.services.video.yourFace?.title || 'YOU ARE THE BRAND FACE'}
                  </h4>
                  <p className="text-sm text-success font-semibold mb-2">{t.services.video.yourFace?.tagline || 'Maximum authenticity'}</p>
                  <p className="text-sm text-muted-foreground mb-3">{t.services.video.yourFace?.intro || 'We use your face and voice. Cutting-edge AI technology (VEO3) for cinematic videos.'}</p>
                  <div className="space-y-2">
                    {(t.services.video.yourFace?.items || ['Personal connection with audience', 'Cutting-edge VEO3 technology', 'Ideal for authentic owners']).map((item: string, idx: number) => <ServiceItem key={idx} text={item} />)}
                  </div>
                </div>

                {/* Column 3: Quality & Creativity */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 sm:p-5 rounded-2xl border-2 border-primary/30 shadow-xl h-full">
                  <h4 className="font-bold text-base sm:text-lg text-foreground mb-2 flex items-center gap-2">
                    <div className="p-2 bg-primary rounded-lg">
                      <Video className="w-5 h-5 text-primary-foreground" />
                    </div>
                    {t.services.video.quality?.title || 'Quality & Creativity'}
                  </h4>
                  <p className="text-sm text-primary font-semibold mb-2">{t.services.video.quality?.tagline || 'For both options'}</p>
                  <p className="text-sm text-muted-foreground mb-3">{t.services.video.quality?.intro || 'Cinematic Quality: Premium image, sound and editing.'}</p>
                  <div className="space-y-2">
                    {(t.services.video.quality?.items || ['Creative and viral storyboards', 'Challenges, interviews, interactive clips', 'Ideas that capture attention']).map((item: string, idx: number) => <ServiceItem key={idx} text={item} />)}
                  </div>
                </div>
              </div>

              {/* Daily Posting Robot */}
              <div className="bg-gradient-to-br from-primary/15 via-primary/10 to-accent/15 p-4 sm:p-5 rounded-2xl border-2 border-primary/40 shadow-2xl relative overflow-hidden mb-5">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 animate-pulse pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg shadow-primary/30">
                      <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-foreground">{t.services.video.robot.title}</h4>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-semibold">{t.services.video.robot.tagline}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{t.services.video.robot.intro}</p>
                  <div className="space-y-2">
                    {t.services.video.robot.items.map((item: string, idx: number) => <div key={idx} className="flex items-start gap-2 bg-card/60 p-2.5 rounded-lg border border-primary/20">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>)}
                  </div>
                </div>
              </div>

              {/* Guaranteed Results */}
              <div className="bg-gradient-to-br from-success/10 via-success/5 to-success/10 p-4 sm:p-5 rounded-2xl border-2 border-success/30 shadow-lg mb-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-gradient-success rounded-xl shadow-lg">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-success-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-foreground">{t.services.video.visibility.title}</h4>
                    <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded-full font-semibold">{t.services.video.visibility.tagline}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {t.services.video.visibility.items.map((item: string, idx: number) => <div key={idx} className="flex items-start gap-2 bg-card/60 p-2.5 rounded-lg border border-success/20">
                      <TrendingUp className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>)}
                </div>
              </div>

              {/* Content Examples - Premium Gold Box */}
              <div className="mt-5 mb-5">
                <div className="bg-gradient-to-br from-amber-950/80 via-yellow-900/60 to-amber-950/80 rounded-2xl border-2 border-amber-400/50 shadow-2xl overflow-hidden relative">
                  {/* Premium gold glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-300/5 to-amber-400/10 pointer-events-none" />
                  
                  {/* Header - Links to Gallery Page */}
                  <Link to="/gallery" className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-amber-400/10 transition-colors relative z-10 block">
                    <h4 className="font-bold text-base sm:text-lg text-amber-100 flex items-center gap-2">
                      <div className="p-2 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg shadow-lg shadow-amber-500/30">
                        <Video className="w-5 h-5 sm:w-6 sm:h-6 text-amber-950" />
                      </div>
                      <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
                        🎬 Content Examples
                      </span>
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-amber-300 font-semibold tracking-wide">
                        See All Videos
                      </span>
                      <div className="p-1.5 bg-amber-400/30 rounded-full border border-amber-400/50">
                        <ArrowRight className="w-4 h-4 text-amber-300" />
                      </div>
                    </div>
                  </Link>
                  
                  {/* Premium badge */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full text-[10px] font-bold text-amber-950 uppercase tracking-wider shadow-lg">
                    Premium
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-gradient-warning p-4 sm:p-5 rounded-2xl border-2 border-warning/30 shadow-xl">
                <h4 className="font-bold text-base sm:text-lg text-warning-foreground mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  💰 {t.services.video.included?.title || "What's Included"}
                </h4>
                <div className="space-y-2">
                  {(t.services.video.included?.items || t.services.video.items).map((item: string, idx: number) => <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-warning-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-warning-foreground">{item}</span>
                    </div>)}
                </div>
                <p className="text-xs text-warning-foreground/80 mt-3 italic">
                  {t.services.video.included?.note || "(*) The option with owner's face and voice is selected at the start of collaboration and is included in the price."}
                </p>
                <p className="text-sm text-warning-foreground font-bold mt-3">
                  {t.services.video.included?.cta || "Complete your online presence. We make the videos and posts. You get the results."}
                </p>
              </div>
            </ServiceCard>

            {/* AI Agents (Third) - Styled like VEO3 with same colors */}
            <ServiceCard title={t.services.aiAgents.title} icon={MessageSquare} price={t.services.aiAgents.price} originalPrice={t.services.aiAgents.originalPrice} discount={t.services.aiAgents.discount} subtitle={t.services.aiAgents.subtitle} highlight packageNumber={3} audioPackage="asistent-virtual" onPlayAudio={setActiveAudioPackage}>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-lg">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-gradient-primary">{t.services.aiAgents.badge}</span>
                </div>
              </div>

              {/* 3-Column Grid for AI Agent Features */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
                {/* Column 1: Phone/Voice AI */}
                <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 p-4 sm:p-5 rounded-2xl border-2 border-destructive/30 shadow-xl h-full">
                  <h4 className="font-bold text-base sm:text-lg text-foreground mb-2 flex items-center gap-2">
                    <div className="p-2 bg-destructive rounded-lg">
                      <Phone className="w-5 h-5 text-destructive-foreground" />
                    </div>
                    {t.services.aiAgents.phone.title}
                  </h4>
                  <p className="text-sm text-destructive font-semibold mb-2">{t.services.aiAgents.phone.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-3">{t.services.aiAgents.phone.intro}</p>
                  {t.services.aiAgents.phone.items.map((item, index) => <ServiceItem key={index} text={item} />)}
                </div>

                {/* Column 2: WhatsApp/Chat AI */}
                <div className="bg-gradient-to-br from-success/5 to-success/10 p-4 sm:p-5 rounded-2xl border-2 border-success/30 shadow-xl h-full">
                  <h4 className="font-bold text-base sm:text-lg text-foreground mb-2 flex items-center gap-2">
                    <div className="p-2 bg-success rounded-lg">
                      <MessageSquare className="w-5 h-5 text-success-foreground" />
                    </div>
                    {t.services.aiAgents.whatsapp.title}
                  </h4>
                  <p className="text-sm text-success font-semibold mb-2">{t.services.aiAgents.whatsapp.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-3">{t.services.aiAgents.whatsapp.intro}</p>
                  {t.services.aiAgents.whatsapp.items.map((item, index) => <ServiceItem key={index} text={item} />)}
                </div>

                {/* Column 3: Reservations/Calendar Sync */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 sm:p-5 rounded-2xl border-2 border-primary/30 shadow-xl h-full">
                  <h4 className="font-bold text-base sm:text-lg text-foreground mb-2 flex items-center gap-2">
                    <div className="p-2 bg-primary rounded-lg">
                      <Calendar className="w-5 h-5 text-primary-foreground" />
                    </div>
                    {t.services.aiAgents.reservations.title}
                  </h4>
                  <p className="text-sm text-primary font-semibold mb-2">{t.services.aiAgents.reservations.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-3">{t.services.aiAgents.reservations.intro}</p>
                  {t.services.aiAgents.reservations.items.map((item, index) => <ServiceItem key={index} text={item} />)}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-gradient-warning p-4 sm:p-5 rounded-2xl border-2 border-warning/30 shadow-xl">
                <h4 className="font-bold text-base sm:text-lg text-warning-foreground mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  {t.services.aiAgents.benefitsTitle}
                </h4>
                <div className="space-y-2">
                  {t.services.aiAgents.benefitsList.map((benefit, index) => <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-warning-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-warning-foreground">{benefit}</span>
                    </div>)}
                </div>
              </div>
            </ServiceCard>

            {/* Premium Package - Business on Autopilot */}
            <ServiceCard title={t.services.premium.title} icon={Sparkles} price={t.services.premium.price} originalPrice={t.services.premium.originalPrice} discount={t.services.premium.discount} discountNote={t.services.premium.discountNote} subtitle={t.services.premium.subtitle} highlight packageNumber={4} audioPackage="pilot-automat" onPlayAudio={setActiveAudioPackage}>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-lg">
                  <Star className="w-5 h-5 text-warning" />
                  <span className="text-sm sm:text-base font-bold text-gradient-primary">{t.services.premium.badge}</span>
                </div>
              </div>

              {/* 3-Column Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
                {/* Column 1: App & Website */}
                <div className="bg-gradient-to-br from-success/5 to-success/10 p-4 sm:p-5 rounded-2xl border-2 border-success/30 shadow-xl h-full">
                  <h4 className="font-bold text-base sm:text-lg text-foreground mb-2 flex items-center gap-2">
                    <div className="p-2 bg-success rounded-lg">
                      <Globe className="w-5 h-5 text-success-foreground" />
                    </div>
                    {t.services.premium.app.title}
                  </h4>
                  <p className="text-sm text-success font-semibold mb-2">{t.services.premium.app.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-3">{t.services.premium.app.intro}</p>
                  {t.services.premium.app.items.map((item, index) => <ServiceItem key={index} text={item} />)}
                </div>

                {/* Column 2: Automation & Loyalty */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 sm:p-5 rounded-2xl border-2 border-primary/30 shadow-xl h-full">
                  <h4 className="font-bold text-base sm:text-lg text-foreground mb-2 flex items-center gap-2">
                    <div className="p-2 bg-primary rounded-lg">
                      <Users className="w-5 h-5 text-primary-foreground" />
                    </div>
                    {t.services.premium.automation.title}
                  </h4>
                  <p className="text-sm text-primary font-semibold mb-2">{t.services.premium.automation.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-3">{t.services.premium.automation.intro}</p>
                  {t.services.premium.automation.items.map((item, index) => <ServiceItem key={index} text={item} />)}
                </div>

                {/* Column 3: Social Media */}
                <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-4 sm:p-5 rounded-2xl border-2 border-secondary/30 shadow-xl h-full">
                  <h4 className="font-bold text-base sm:text-lg text-foreground mb-2 flex items-center gap-2">
                    <div className="p-2 bg-secondary rounded-lg">
                      <Megaphone className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    {t.services.premium.social.title}
                  </h4>
                  <p className="text-sm text-secondary font-semibold mb-2">{t.services.premium.social.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-3">{t.services.premium.social.intro}</p>
                  {t.services.premium.social.items.map((item, index) => <ServiceItem key={index} text={item} />)}
                </div>
              </div>

              {/* Why Choose This Package */}
              <div className="bg-gradient-warning p-4 sm:p-5 rounded-2xl border-2 border-warning/30 shadow-xl">
                <h4 className="font-bold text-base sm:text-lg text-warning-foreground mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  {t.services.premium.whyChoose}
                </h4>
                <div className="space-y-2">
                  {t.services.premium.benefits.map((benefit, index) => <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-warning-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-warning-foreground">{benefit}</span>
                    </div>)}
                </div>
              </div>
            </ServiceCard>

            {/* AI Video Generator - Digital Avatar Package - MOVED TO BOTTOM */}
            <ServiceCard title={t.services.ugc.title} icon={Video} discount={t.services.ugc.discount} price={t.services.ugc.price} originalPrice={t.services.ugc.originalPrice} subtitle={t.services.ugc.heroSubtitle} highlight packageNumber={5} audioPackage="brandul-tau" onPlayAudio={setActiveAudioPackage}>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-card px-3 py-1.5 rounded-full shadow-lg">
                  <Video className="w-4 h-4 text-accent" />
                  <span className="text-xs sm:text-sm font-bold text-gradient-primary">{t.services.ugc.noSubscription}</span>
                </div>
              </div>

              {/* How It Works Section - Simplified for mobile */}
              <div className="bg-gradient-to-br from-secondary/5 via-accent/5 to-warning/5 p-3 sm:p-5 rounded-xl mb-4 border border-secondary/30">
                <h4 className="font-bold text-sm sm:text-base text-foreground mb-3 flex items-center gap-2">
                  <div className="p-1.5 sm:p-2 bg-gradient-primary rounded-lg">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                  </div>
                  {t.services.ugc.stepsTitle}
                </h4>
                <div className="space-y-2">
                  {[{
                num: '1',
                text: t.services.ugc.step1,
                desc: t.services.ugc.step1Desc,
                colors: 'from-primary to-secondary'
              }, {
                num: '2',
                text: t.services.ugc.step2,
                desc: t.services.ugc.step2Desc,
                colors: 'from-secondary to-accent'
              }, {
                num: '3',
                text: t.services.ugc.step3,
                desc: t.services.ugc.step3Desc,
                colors: 'from-accent to-warning'
              }, {
                num: '4',
                text: t.services.ugc.step4,
                desc: t.services.ugc.step4Desc,
                colors: 'bg-gradient-success'
              }].map((step, index) => <div key={index} className="flex items-start gap-2 bg-card/80 p-2 sm:p-2.5 rounded-lg">
                      <div className={`w-6 h-6 bg-gradient-to-br ${step.colors} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-xs font-bold text-primary-foreground">{step.num}</span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm text-foreground font-semibold">{step.text}</span>
                        <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
                      </div>
                    </div>)}
                </div>
              </div>

              {/* Benefits Section - Compact */}
              <div className="bg-gradient-to-br from-secondary/5 via-accent/5 to-warning/5 p-3 sm:p-5 rounded-xl mb-4 border border-secondary/30">
                <h4 className="font-bold text-sm sm:text-base text-foreground mb-3 flex items-center gap-2">
                  <div className="p-1.5 sm:p-2 bg-gradient-primary rounded-lg">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                  </div>
                  {t.services.ugc.benefitsTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[{
                icon: Zap,
                title: t.services.ugc.benefit1Title,
                desc: t.services.ugc.benefit1Desc,
                colors: 'from-primary to-secondary'
              }, {
                icon: Star,
                title: t.services.ugc.benefit2Title,
                desc: t.services.ugc.benefit2Desc,
                colors: 'bg-gradient-success'
              }, {
                icon: Check,
                title: t.services.ugc.benefit3Title,
                desc: t.services.ugc.benefit3Desc,
                colors: 'from-secondary to-accent'
              }, {
                icon: Users,
                title: t.services.ugc.benefit4Title,
                desc: t.services.ugc.benefit4Desc,
                colors: 'from-accent to-warning'
              }].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return <div key={index} className="flex items-start gap-2 bg-card/80 p-2 sm:p-2.5 rounded-lg">
                        <div className={`w-6 h-6 bg-gradient-to-br ${benefit.colors} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-sm text-foreground font-semibold">{benefit.title}</span>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{benefit.desc}</p>
                        </div>
                      </div>;
              })}
                </div>
              </div>

              {/* Platform badges - Compact */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                <div className="bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold text-foreground">TikTok & Reels</span>
                </div>
                <div className="bg-success/10 px-3 py-1.5 rounded-full border border-success/20 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-success" />
                  <span className="text-xs font-semibold text-foreground">YouTube Shorts</span>
                </div>
              </div>

              {/* CTA Button - Compact */}
              <div className="p-3 sm:p-4 bg-[#0088cc]/10 rounded-xl border border-[#0088cc]/30">
                <div className="flex flex-col items-center gap-3">
                  <p className="text-sm text-foreground font-medium text-center">
                    🚀 {t.services.ugc.finalCta}
                  </p>
                  <a href="https://t.me/SergiuBot007bot" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#0088cc] hover:bg-[#006699] text-white font-bold py-2.5 px-5 rounded-xl shadow-lg flex items-center gap-2 text-sm">
                      <Send className="w-4 h-4" />
                      {t.services.ugc.telegramButton}
                    </Button>
                  </a>
                </div>
              </div>
            </ServiceCard>

          </main>}

        {/* AI Services Tab */}
        {activeTab === 'ai' && <main className="space-y-5 px-2">
            {/* Header Banner */}
            <div className="bg-gradient-primary text-primary-foreground p-4 sm:p-8 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-card/10 animate-pulse"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-1 sm:mb-2">{t.aiServices.header}</h2>
                <p className="text-sm sm:text-base opacity-95 text-center font-semibold">{t.aiServices.subtitle}</p>
              </div>
            </div>

            <ServiceCard title={t.aiServices.pricing} icon={TrendingUp}>
              {t.aiServices.pricingItems.map((item, index) => <ServiceItem key={index} text={item} icon={[Zap, Star, Clock, TrendingUp][index]} />)}
            </ServiceCard>

            <ServiceCard title={t.aiServices.recommendations} icon={Users}>
              {t.aiServices.recommendationsItems.map((item, index) => <ServiceItem key={index} text={item} icon={[Heart, ShoppingBag, Sparkles, TrendingUp][index]} />)}
            </ServiceCard>

            <ServiceCard title={t.aiServices.chatbot} icon={MessageSquare}>
              {t.aiServices.chatbotItems.map((item, index) => <ServiceItem key={index} text={item} icon={[Globe, Clock, Zap, Users][index]} />)}
            </ServiceCard>

            <ServiceCard title={t.aiServices.stock} icon={Calendar}>
              {t.aiServices.stockItems.map((item, index) => <ServiceItem key={index} text={item} icon={[TrendingUp, Globe, Award, Zap][index]} />)}
            </ServiceCard>

            <ServiceCard title={t.aiServices.routes} icon={Globe}>
              {t.aiServices.routesItems.map((item, index) => <ServiceItem key={index} text={item} icon={[Zap, Users, Clock, Star][index]} />)}
            </ServiceCard>

            <ServiceCard title={t.aiServices.sentiment} icon={MessageSquare}>
              {t.aiServices.sentimentItems.map((item, index) => <ServiceItem key={index} text={item} icon={[Globe, TrendingUp, MessageSquare, Star][index]} />)}
            </ServiceCard>

            <ServiceCard title={t.aiServices.content} icon={Sparkles}>
              {t.aiServices.contentItems.map((item, index) => <ServiceItem key={index} text={item} icon={[Megaphone, Globe, MessageSquare, Star][index]} />)}
            </ServiceCard>

            <ServiceCard title={t.aiServices.competitive} icon={TrendingUp}>
              {t.aiServices.competitiveItems.map((item, index) => <ServiceItem key={index} text={item} icon={[Globe, Star, Award, Zap][index]} />)}
            </ServiceCard>

            {/* Modular Note */}
            <div className="bg-background/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-success/30 shadow-2xl">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 drop-shadow-md">{t.aiServices.modular}</h3>
              <p className="text-sm sm:text-base text-foreground font-medium drop-shadow-sm">{t.aiServices.modularDesc}</p>
            </div>
          </main>}

        {/* Footer CTA */}
        <footer className="mt-6 sm:mt-8 bg-gradient-primary text-primary-foreground p-4 sm:p-6 rounded-xl text-center mx-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{t.footer.title}</h2>
          <p className="text-sm sm:text-base md:text-base mb-3 sm:mb-5 opacity-90">{t.footer.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            {/* Restaurant Audit Form Button */}
            <RestaurantAuditForm trigger={<Button className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 text-gray-950 font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  {language === 'ro' ? 'Completează Formular' : language === 'es' ? 'Completa Formulario' : 'Fill Form'}
                </Button>} />
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="bg-success text-success-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-success/90 transition-all flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.footer.whatsapp}
            </a>
            <a href={getPhoneUrl()} className="bg-card text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-muted transition-all flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.footer.call}
            </a>
          </div>
        </footer>

        {/* Franchise CTA Banner - Black & Yellow - LAST SECTION */}
        <div className="mt-6 sm:mt-8 mx-2 mb-4">
          <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl border-2 border-amber-400/60 shadow-2xl overflow-hidden p-6 sm:p-8">
            {/* Yellow glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-yellow-400/10 to-amber-400/5 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Earnings Badge - positioned in flow on mobile, absolute on desktop */}
              <div className="flex justify-center mb-3 sm:mb-0 sm:absolute sm:top-3 sm:right-3">
                <div className="px-3 py-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full text-xs sm:text-sm font-bold text-gray-950 tracking-wider shadow-lg flex items-center gap-1">
                  
                  {language === 'ro' ? '15K+ €/lună' : language === 'es' ? '15K+ €/mes' : '15K+ €/month'}
                </div>
              </div>
              
              {/* Target Audience Badge */}
              <div className="mb-3 sm:mb-4 flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full text-xs sm:text-sm text-amber-200 font-medium">
                  Ex-Glovo
                </span>
                <span className="px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full text-xs sm:text-sm text-amber-200 font-medium">
                  Ex-Wolt
                </span>
                <span className="px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full text-xs sm:text-sm text-amber-200 font-medium">
                  Ex-Bolt Food
                </span>
                <span className="px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full text-xs sm:text-sm text-amber-200 font-medium">
                  Ex-Uber Eats
                </span>
                <span className="px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full text-xs sm:text-sm text-amber-200 font-medium">
                  Ex-DoorDash
                </span>
              </div>
              
              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
                {language === 'ro' ? 'Ai experiență în delivery? Câștigă 15.000€+ pe lună!' : language === 'es' ? '¿Tienes experiencia en delivery? ¡Gana 15.000€+ al mes!' : 'Delivery experience? Earn 15,000€+ per month!'}
              </h2>
              
              {/* Subtitle */}
              <p className="text-sm sm:text-base text-amber-100/80 mb-4 sm:mb-5 max-w-lg mx-auto">
                {language === 'ro' ? 'Foști angajați Glovo, Wolt, Bolt Food, Uber Eats sau DoorDash - transformă-ți experiența în propriul business de succes!' : language === 'es' ? 'Ex empleados de Glovo, Wolt, Bolt Food, Uber Eats o DoorDash - ¡transforma tu experiencia en tu propio negocio exitoso!' : 'Former Glovo, Wolt, Bolt Food, Uber Eats or DoorDash employees - turn your experience into your own successful business!'}
              </p>
              
              {/* Franchise Button */}
              <div className="mb-4 sm:mb-5">
                <Link to="/franchise" className="inline-block">
                  <Button className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 text-gray-950 font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-xl sm:rounded-2xl shadow-xl shadow-amber-500/30 transform hover:scale-105 transition-all duration-300 text-sm sm:text-lg flex items-center gap-2 sm:gap-3">
                    <Handshake className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="whitespace-nowrap">{language === 'ro' ? 'Devino Partener MrDelivery' : language === 'es' ? 'Conviértete en Socio MrDelivery' : 'Become a MrDelivery Partner'}</span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </Link>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="https://wa.me/40768676141" target="_blank" rel="noopener noreferrer" className="bg-success text-success-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-success/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-success/30">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                  WhatsApp
                </a>
                <a href="tel:+40768676141" className="bg-white/10 backdrop-blur-sm text-amber-100 border-2 border-amber-400/40 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-amber-400/20 transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  {language === 'ro' ? 'Sună Acum' : language === 'es' ? 'Llama Ahora' : 'Call Now'}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>;
};
export default Index;