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
import { Zap, Sparkles, TrendingUp, MessageSquare, Video, Clock, ShoppingBag, Calendar, Award, Megaphone, Globe, Phone, Users, Star, Heart, Upload, Image, Check, Send, Palette, ArrowRight, Bot, Eye, Truck, UtensilsCrossed, Headphones, DollarSign, Handshake, FileText, BarChart3, Rocket, ClipboardList, Building2, Stethoscope, Brain, Landmark, ShoppingCart, Hotel, Share2, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { RestaurantAuditForm } from '@/components/RestaurantAuditForm';
import FloatingSocialIcons from '@/components/FloatingSocialIcons';
import PoweredBySSociety from '@/components/PoweredBySSociety';
import Footer from '@/components/Footer';
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
          
          {/* Animated Border Container for Services */}
          <div className="relative max-w-2xl mx-auto">
            {/* Traveling light border effect */}
            <div className="absolute -inset-[2px] rounded-2xl pointer-events-none" style={{
            background: `conic-gradient(from var(--border-angle, 0deg), 
                  transparent 0deg, 
                  transparent 45deg, 
                  rgba(251, 191, 36, 0.3) 80deg, 
                  #fbbf24 120deg, 
                  #fef08a 150deg, 
                  #fbbf24 180deg, 
                  rgba(251, 191, 36, 0.3) 220deg, 
                  transparent 255deg, 
                  transparent 360deg)`,
            animation: 'border-rotate 4s linear infinite'
          }} />
            
            {/* Inner content container - transparent black */}
            <div className="relative p-4 sm:p-6 rounded-2xl bg-black/40 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-1.5 sm:gap-2 px-2 relative z-10">
                {t.taglineItems.map((item, index) => <p key={index} className="text-base sm:text-xl md:text-2xl text-white font-semibold drop-shadow-md" style={{
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.01em'
              }}>
                    {item.emoji} {item.text}
                  </p>)}
              </div>
              <div className="flex justify-center gap-1.5 sm:gap-3 mt-3 sm:mt-4 flex-wrap px-2 relative z-10">
                <PulsingBadge color="blue">{t.badges.ai}</PulsingBadge>
                <PulsingBadge color="green">{t.badges.marketing}</PulsingBadge>
                <PulsingBadge color="gold">{t.badges.apps}</PulsingBadge>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Stats - Experience/Trust Statement */}
        <div className="flex flex-col items-center gap-1 sm:gap-1.5 mb-4 sm:mb-5 px-3 text-center">
          <p className="text-base sm:text-lg md:text-xl text-amber-100/95 font-semibold">
            <span className="text-xl sm:text-2xl md:text-3xl text-amber-400 font-extrabold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">7+</span> {language === 'ro' ? 'ani experiență în Marketing' : language === 'es' ? 'años de experiencia en Marketing' : 'Years of Marketing Experience'}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-amber-100/95 font-semibold">
            <span className="text-xl sm:text-2xl md:text-3xl text-amber-400 font-extrabold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">5+</span> {language === 'ro' ? 'ani de expertiză în livrări' : language === 'es' ? 'años de experiencia de élite en delivery' : 'Years of Elite Delivery Expertise'}
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-amber-100/95 font-semibold">
            <span className="text-xl sm:text-2xl md:text-3xl text-amber-400 font-extrabold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">90%</span> {language === 'ro' ? 'dintre clienți vin prin recomandări' : language === 'es' ? 'de clientes llegan por recomendación' : 'of Clients Come via Referrals'}
          </p>
        </div>

        {/* Instant Menu Photos Premium Button - Below Stats */}
        <div className="px-2 mb-4 sm:mb-5">
          <a href="https://mrdelivery.online" target="_blank" rel="noopener noreferrer" className="block group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-950/80 via-yellow-900/60 to-amber-950/80 border-2 border-amber-400/80 p-4 sm:p-5 shadow-[0_0_40px_rgba(251,191,36,0.4),inset_0_1px_0_rgba(251,191,36,0.5)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] transition-all duration-500 hover:scale-[1.02] cursor-pointer">
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 animate-[shimmer_3s_infinite] pointer-events-none" style={{
              backgroundSize: '200% 100%'
            }} />
              
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
              
              <div className="relative z-10 flex-row gap-[6px] flex items-center justify-start">
                <div className="p-2 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image className="w-5 h-5 sm:w-6 sm:h-6 text-amber-950" />
                </div>
                <div className="flex flex-col items-start flex-1">
                  <span className="sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 drop-shadow-md text-left text-base">
                    📸 {language === 'ro' ? 'POZE MENIU INSTANT' : language === 'es' ? 'FOTOS MENÚ INSTANTÁNEAS' : 'INSTANT MENU PHOTOS'}
                  </span>
                  <span className="text-xs sm:text-sm text-amber-200/80 font-medium leading-tight">
                    {language === 'ro' ? 'Creează instant poze în stil Michelin pentru tot meniul tău, împreună cu alergeni, logo și poză din locație reală.' : language === 'es' ? 'Crea al instante fotos estilo Michelin para todo tu menú, con alérgenos, logo y foto de ubicación real.' : 'Instantly create Michelin-style photos for your entire menu, with allergens, logo, and real location photo.'}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
              </div>
            </div>
          </a>
        </div>

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
          <Link to="/automatizari-ai" className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 relative overflow-hidden bg-card text-muted-foreground hover:shadow-lg border border-border hover:border-amber-500/50`}>
            <span className="relative flex items-center justify-center gap-1.5 sm:gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.tabs.ai}
            </span>
          </Link>
        </nav>

        {/* Current Services Tab */}
        {activeTab === 'existente' && <main className="space-y-5 px-2">
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
                <button onClick={() => setIsReportsOpen(!isReportsOpen)} className="w-full bg-gradient-to-r from-amber-500/10 to-amber-600/5 px-5 py-4 flex items-center justify-between cursor-pointer hover:from-amber-500/15 hover:to-amber-600/10 transition-all duration-300 group">
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
                    {((t.services.standard as any).monthlyReports?.items || [{
                  icon: 'BarChart3',
                  title: 'Analiză comparativă a încasărilor',
                  desc: 'Evaluăm performanța financiară actuală în raport cu luna precedentă pentru a identifica tendințele de creștere.'
                }, {
                  icon: 'Rocket',
                  title: 'Raport de promovare și rezultate',
                  desc: 'Analizăm campaniile active și măsurăm impactul real al promoțiilor asupra volumului de comenzi.'
                }, {
                  icon: 'TrendingUp',
                  title: 'Situația vânzărilor prin aplicație',
                  desc: 'Monitorizăm fluxul de comenzi și eficiența canalelor de vânzare digitală.'
                }, {
                  icon: 'Users',
                  title: 'Raport achiziție clienți noi',
                  desc: 'Vezi exact câți utilizatori noi au descoperit brandul tău în ultima lună.'
                }, {
                  icon: 'ClipboardList',
                  title: 'Centralizator meniu și oferte',
                  desc: 'O situație clară a structurii meniului tău și a ofertelor speciale implementate.'
                }]).map((item: {
                  icon: string;
                  title: string;
                  desc: string;
                }, index: number) => {
                  const IconComponent = item.icon === 'BarChart3' ? BarChart3 : item.icon === 'Rocket' ? Rocket : item.icon === 'TrendingUp' ? TrendingUp : item.icon === 'Users' ? Users : ClipboardList;
                  return <div key={index} className={`flex items-start gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 ${isReportsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{
                    transitionDelay: isReportsOpen ? `${index * 100}ms` : '0ms',
                    transitionProperty: 'opacity, transform, background-color, border-color'
                  }}>
                          <div className="p-2.5 bg-amber-400 rounded-xl flex-shrink-0 shadow-lg shadow-amber-400/20">
                            <IconComponent className="w-5 h-5 text-black" />
                          </div>
                          <div className="flex-1">
                            <h6 className="font-bold text-base text-amber-400 mb-1">{item.title}</h6>
                            <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>;
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

          </main>}

        {/* AI Services Tab */}
        {activeTab === 'ai' && <main className="space-y-5 px-2">
            {/* Header Banner */}
            <div className="bg-gradient-primary text-primary-foreground p-4 sm:p-8 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-card/10 animate-pulse"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-2 sm:mb-3">
                  {language === 'ro' ? 'Servicii complete de automatizări AI pentru afaceri' : language === 'es' ? 'Servicios completos de automatización AI para negocios' : 'Complete AI automation services for businesses'}
                </h2>
                <p className="text-xs sm:text-sm opacity-90 text-center font-medium flex items-center justify-center gap-1.5 flex-wrap">
                  <Sparkles className="w-3.5 h-3.5" />
                  {language === 'ro' ? 'Salon Înfrumusețare • Cabinet Medical • Inteligență Artificială • Sector Public • Magazine Retail • Hotel & Pensiune • Chatboți WhatsApp & Telegram • Social Media AI • Agenții Imobiliare' : language === 'es' ? 'Salón de Belleza • Consultorio Médico • Inteligencia Artificial • Sector Público • Tiendas Retail • Hotel & Pensión • Chatbots WhatsApp & Telegram • Redes Sociales AI • Agencias Inmobiliarias' : 'Beauty Salon • Medical Office • Artificial Intelligence • Public Sector • Retail Stores • Hotel & Guesthouse • WhatsApp & Telegram Chatbots • AI Social Media • Real Estate Agencies'}
                </p>
              </div>
            </div>

            {/* 9 Automation Services as Expandable ServiceCard Components */}
            {[{
          slug: 'salon-infrumusetare',
          icon: Building2,
          title: {
            ro: 'Automatizare Salon Înfrumusețare',
            en: 'Beauty Salon Automation',
            es: 'Automatización Salón de Belleza'
          },
          subtitle: {
            ro: 'Programări online 24/7, reminder-uri automate, marketing personalizat',
            en: 'Online bookings 24/7, automatic reminders, personalized marketing',
            es: 'Reservas online 24/7, recordatorios automáticos, marketing personalizado'
          },
          color: 'from-pink-500 to-rose-600',
          features: {
            ro: ['📅 Programări online 24/7 - Clienții își programează singuri oricând, fără apeluri', '📱 Reminder-uri automate SMS/Email - Reducere no-show de la 30% la doar 5%', '👥 Gestiune clienți avansată - Istoric complet, preferințe, alergii, zile de naștere', '📊 Marketing automat - Campanii de reactivare și oferte aniversare personalizate', '💳 Plăți online integrate - Depozite pentru rezervări, pachete de servicii', '⭐ Gestiune recenzii - Solicitare automată feedback, îmbunătățire rating'],
            en: ['📅 Online bookings 24/7 - Clients book themselves anytime, no phone calls', '📱 Automatic SMS/Email reminders - Reduce no-shows from 30% to just 5%', '👥 Advanced client management - Complete history, preferences, allergies, birthdays', '📊 Automated marketing - Reactivation campaigns and personalized anniversary offers', '💳 Integrated online payments - Booking deposits, service packages', '⭐ Review management - Automatic feedback requests, rating improvement'],
            es: ['📅 Reservas online 24/7 - Los clientes reservan cuando quieran, sin llamadas', '📱 Recordatorios automáticos SMS/Email - Reduce no-shows del 30% al 5%', '👥 Gestión avanzada de clientes - Historial completo, preferencias, alergias, cumpleaños', '📊 Marketing automatizado - Campañas de reactivación y ofertas de aniversario', '💳 Pagos online integrados - Depósitos para reservas, paquetes de servicios', '⭐ Gestión de reseñas - Solicitud automática de feedback, mejora del rating']
          },
          stats: {
            stat1: '80%',
            label1: {
              ro: 'Reducere No-Show',
              en: 'No-Show Reduction',
              es: 'Reducción No-Show'
            },
            stat2: {
              ro: '2-3 săpt',
              en: '2-3 weeks',
              es: '2-3 sem'
            },
            label2: {
              ro: 'Implementare',
              en: 'Implementation',
              es: 'Implementación'
            },
            stat3: '40%',
            label3: {
              ro: 'Creștere Retenție',
              en: 'Retention Growth',
              es: 'Aumento Retención'
            }
          },
          pricing: {
            setup: {
              ro: '700€',
              en: '$750',
              es: '700€'
            },
            monthly: {
              ro: '129€/lună',
              en: '$139/month',
              es: '129€/mes'
            }
          },
          useCases: {
            ro: ['Saloane coafură', 'Saloane manichiură', 'Centre SPA', 'Studiouri makeup', 'Frizerii'],
            en: ['Hair salons', 'Nail salons', 'SPA centers', 'Makeup studios', 'Barbershops'],
            es: ['Peluquerías', 'Salones de manicura', 'Centros SPA', 'Estudios de maquillaje', 'Barberías']
          }
        }, {
          slug: 'cabinet-medical',
          icon: Stethoscope,
          title: {
            ro: 'Automatizare Cabinet Medical',
            en: 'Medical Office Automation',
            es: 'Automatización Consultorio Médico'
          },
          subtitle: {
            ro: 'Programări online GDPR compliant, dosare digitale securizate, reminder-uri pacienți',
            en: 'GDPR compliant online appointments, secure digital records, patient reminders',
            es: 'Citas online conformes con GDPR, expedientes digitales seguros, recordatorios'
          },
          color: 'from-blue-500 to-cyan-600',
          features: {
            ro: ['🏥 Programări online 24/7 - Fără întreruperi în timpul consultațiilor', '🔐 Conformitate GDPR completă - Criptare date, audit trail, zero riscuri legale', '📱 Reminder-uri automate - SMS/Email cu 24h și 2h înainte, reducere no-show 70%', '📋 Dosare medicale digitale - Istoric complet, rezultate analize, prescripții', '💊 Gestiune tratamente - Alerte medicație, programări control', '📊 Rapoarte statistice - Dashboard pacienți, analize performanță cabinet'],
            en: ['🏥 Online appointments 24/7 - No interruptions during consultations', '🔐 Complete GDPR compliance - Data encryption, audit trail, zero legal risks', '📱 Automatic reminders - SMS/Email 24h and 2h before, 70% no-show reduction', '📋 Digital medical records - Complete history, test results, prescriptions', '💊 Treatment management - Medication alerts, follow-up appointments', '📊 Statistical reports - Patient dashboard, cabinet performance analysis'],
            es: ['🏥 Citas online 24/7 - Sin interrupciones durante consultas', '🔐 Cumplimiento GDPR completo - Cifrado de datos, registro de auditoría', '📱 Recordatorios automáticos - SMS/Email 24h y 2h antes, reducción no-show 70%', '📋 Expedientes médicos digitales - Historial completo, resultados, recetas', '💊 Gestión de tratamientos - Alertas de medicación, citas de control', '📊 Informes estadísticos - Panel de pacientes, análisis de rendimiento']
          },
          stats: {
            stat1: '60%',
            label1: {
              ro: 'Reducere Timp Admin',
              en: 'Admin Time Reduction',
              es: 'Reducción Tiempo Admin'
            },
            stat2: {
              ro: '3-4 săpt',
              en: '3-4 weeks',
              es: '3-4 sem'
            },
            label2: {
              ro: 'Implementare',
              en: 'Implementation',
              es: 'Implementación'
            },
            stat3: '70%',
            label3: {
              ro: 'Reducere No-Show',
              en: 'No-Show Reduction',
              es: 'Reducción No-Show'
            }
          },
          pricing: {
            setup: {
              ro: '900€',
              en: '$970',
              es: '900€'
            },
            monthly: {
              ro: '149€/lună',
              en: '$159/month',
              es: '149€/mes'
            }
          },
          useCases: {
            ro: ['Cabinete stomatologie', 'Clinici recuperare', 'Cabinete psihologie', 'Medicină de familie', 'Oftalmologie'],
            en: ['Dental offices', 'Recovery clinics', 'Psychology offices', 'Family medicine', 'Ophthalmology'],
            es: ['Consultorios dentales', 'Clínicas de recuperación', 'Consultorios de psicología', 'Medicina familiar', 'Oftalmología']
          }
        }, {
          slug: 'inteligenta-artificiala',
          icon: Brain,
          title: {
            ro: 'Automatizări Inteligență Artificială',
            en: 'AI Automation',
            es: 'Automatización con IA'
          },
          subtitle: {
            ro: 'Chatboți AI custom, analiză predictivă, automatizare procese complexe',
            en: 'Custom AI chatbots, predictive analysis, complex process automation',
            es: 'Chatbots IA personalizados, análisis predictivo, automatización de procesos'
          },
          color: 'from-violet-500 to-purple-600',
          features: {
            ro: ['🤖 Chatbot AI personalizat - Antrenat pe datele tale, răspunde la 80% întrebări', '📊 Analiză AI automată - Insights din date, predicții vânzări, tendințe', '⚙️ Automatizare procese - Reduce munca repetitivă cu 60%, zero erori', '💬 Suport clienți 24/7 - Disponibil non-stop în română, engleză, spaniolă', '📧 Email marketing AI - Texte generate automat, segmentare inteligentă', '🎯 Lead scoring AI - Identificare automată clienți cu potențial mare'],
            en: ['🤖 Custom AI chatbot - Trained on your data, answers 80% of questions', '📊 Automatic AI analysis - Data insights, sales predictions, trends', '⚙️ Process automation - Reduce repetitive work by 60%, zero errors', '💬 24/7 Customer support - Available non-stop in multiple languages', '📧 AI email marketing - Auto-generated texts, intelligent segmentation', '🎯 AI lead scoring - Automatic identification of high-potential clients'],
            es: ['🤖 Chatbot IA personalizado - Entrenado con tus datos, responde 80% preguntas', '📊 Análisis automático IA - Insights de datos, predicciones, tendencias', '⚙️ Automatización de procesos - Reduce trabajo repetitivo 60%, cero errores', '💬 Soporte al cliente 24/7 - Disponible sin parar en múltiples idiomas', '📧 Email marketing IA - Textos generados automáticamente, segmentación', '🎯 Lead scoring IA - Identificación automática de clientes potenciales']
          },
          stats: {
            stat1: '40%',
            label1: {
              ro: 'Reducere Costuri',
              en: 'Cost Reduction',
              es: 'Reducción de Costos'
            },
            stat2: {
              ro: '3-6 luni',
              en: '3-6 months',
              es: '3-6 meses'
            },
            label2: {
              ro: 'ROI Garantat',
              en: 'Guaranteed ROI',
              es: 'ROI Garantizado'
            },
            stat3: '60%',
            label3: {
              ro: 'Timp Economisit',
              en: 'Time Saved',
              es: 'Tiempo Ahorrado'
            }
          },
          pricing: {
            setup: {
              ro: '800€',
              en: '$860',
              es: '800€'
            },
            monthly: {
              ro: '199€/lună',
              en: '$215/month',
              es: '199€/mes'
            }
          },
          useCases: {
            ro: ['E-commerce', 'Companii servicii', 'Agenții marketing', 'Clinici', 'Firme consultanță'],
            en: ['E-commerce', 'Service companies', 'Marketing agencies', 'Clinics', 'Consulting firms'],
            es: ['E-commerce', 'Empresas de servicios', 'Agencias de marketing', 'Clínicas', 'Consultoras']
          }
        }, {
          slug: 'sector-public',
          icon: Landmark,
          title: {
            ro: 'Automatizare Sector Public',
            en: 'Public Sector Automation',
            es: 'Automatización Sector Público'
          },
          subtitle: {
            ro: 'Portal cetățean digital, documente automate, transparență și eficiență',
            en: 'Digital citizen portal, automated documents, transparency and efficiency',
            es: 'Portal ciudadano digital, documentos automáticos, transparencia y eficiencia'
          },
          color: 'from-slate-500 to-gray-600',
          features: {
            ro: ['🏛️ Portal cetățean 24/7 - Cereri online fără cozi, tracking status', '📄 Automatizare documente - Eliberare automată certificate, adeverințe', '🔔 Notificări automate - Status cereri în timp real, SMS și email', '📊 Dashboard management - Statistici, rapoarte, analize performanță', '🔐 Securitate avansată - Conformitate GDPR, semnătură electronică', '📱 Aplicație mobilă cetățeni - Acces rapid la servicii publice'],
            en: ['🏛️ Citizen portal 24/7 - Online requests without queues, status tracking', '📄 Document automation - Automatic certificate and attestation issuance', '🔔 Automatic notifications - Real-time request status, SMS and email', '📊 Management dashboard - Statistics, reports, performance analysis', '🔐 Advanced security - GDPR compliance, electronic signature', '📱 Citizen mobile app - Quick access to public services'],
            es: ['🏛️ Portal ciudadano 24/7 - Solicitudes online sin colas, seguimiento', '📄 Automatización de documentos - Emisión automática de certificados', '🔔 Notificaciones automáticas - Estado en tiempo real, SMS y email', '📊 Panel de gestión - Estadísticas, informes, análisis de rendimiento', '🔐 Seguridad avanzada - Cumplimiento GDPR, firma electrónica', '📱 App móvil para ciudadanos - Acceso rápido a servicios públicos']
          },
          stats: {
            stat1: '70%',
            label1: {
              ro: 'Reducere Timp Așteptare',
              en: 'Wait Time Reduction',
              es: 'Reducción Tiempo Espera'
            },
            stat2: {
              ro: '4-6 săpt',
              en: '4-6 weeks',
              es: '4-6 sem'
            },
            label2: {
              ro: 'Implementare',
              en: 'Implementation',
              es: 'Implementación'
            },
            stat3: '85%',
            label3: {
              ro: 'Satisfacție Cetățeni',
              en: 'Citizen Satisfaction',
              es: 'Satisfacción Ciudadana'
            }
          },
          pricing: {
            setup: {
              ro: '1500€',
              en: '$1600',
              es: '1500€'
            },
            monthly: {
              ro: '299€/lună',
              en: '$320/month',
              es: '299€/mes'
            }
          },
          useCases: {
            ro: ['Primării', 'Consilii locale', 'Prefecturi', 'Instituții de stat', 'Agenții guvernamentale'],
            en: ['City halls', 'Local councils', 'Prefectures', 'State institutions', 'Government agencies'],
            es: ['Ayuntamientos', 'Consejos locales', 'Prefecturas', 'Instituciones estatales', 'Agencias gubernamentales']
          }
        }, {
          slug: 'magazine-retail',
          icon: ShoppingCart,
          title: {
            ro: 'Automatizare Magazine Retail',
            en: 'Retail Store Automation',
            es: 'Automatización Tiendas Retail'
          },
          subtitle: {
            ro: 'Gestiune stocuri inteligentă, comenzi automate furnizori, program fidelizare digital',
            en: 'Smart inventory management, auto supplier orders, digital loyalty program',
            es: 'Gestión inteligente de inventario, pedidos automáticos a proveedores, programa de fidelización digital'
          },
          color: 'from-orange-500 to-amber-600',
          features: {
            ro: ['📦 Gestiune stocuri AI - Alerte automate reaprovizionare, predicții vânzări', '🚚 Comenzi automate furnizori - Zero rupturi de stoc, optimizare costuri', '💳 Program fidelizare digital - Puncte, reduceri, oferte personalizate', '📊 Rapoarte vânzări real-time - Dashboard complet, decizii bazate pe date', '🏷️ Prețuri dinamice - Ajustare automată în funcție de cerere și stoc', '📱 Aplicație clienți - Comenzi online, notificări promoții'],
            en: ['📦 AI inventory management - Automatic restock alerts, sales predictions', '🚚 Automatic supplier orders - Zero stockouts, cost optimization', '💳 Digital loyalty program - Points, discounts, personalized offers', '📊 Real-time sales reports - Complete dashboard, data-driven decisions', '🏷️ Dynamic pricing - Automatic adjustment based on demand and stock', '📱 Customer app - Online orders, promotion notifications'],
            es: ['📦 Gestión de inventario IA - Alertas automáticas de reabastecimiento, predicciones de ventas', '🚚 Pedidos automáticos a proveedores - Cero roturas de stock, optimización de costos', '💳 Programa de fidelización digital - Puntos, descuentos, ofertas personalizadas', '📊 Informes de ventas en tiempo real - Panel completo, decisiones basadas en datos', '🏷️ Precios dinámicos - Ajuste automático según demanda y stock', '📱 App para clientes - Pedidos online, notificaciones de promociones']
          },
          stats: {
            stat1: '35%',
            label1: {
              ro: 'Creștere Retenție',
              en: 'Retention Increase',
              es: 'Aumento Retención'
            },
            stat2: {
              ro: '3-4 săpt',
              en: '3-4 weeks',
              es: '3-4 sem'
            },
            label2: {
              ro: 'Implementare',
              en: 'Implementation',
              es: 'Implementación'
            },
            stat3: '20%',
            label3: {
              ro: 'Reducere Stocuri Moarte',
              en: 'Dead Stock Reduction',
              es: 'Reducción Stock Muerto'
            }
          },
          pricing: {
            setup: {
              ro: '600€',
              en: '$650',
              es: '600€'
            },
            monthly: {
              ro: '149€/lună',
              en: '$159/month',
              es: '149€/mes'
            }
          },
          useCases: {
            ro: ['Magazine alimentare', 'Farmacii', 'Magazine electro', 'Librării', 'Magazine cosmetice'],
            en: ['Grocery stores', 'Pharmacies', 'Electronics stores', 'Bookstores', 'Cosmetics shops'],
            es: ['Tiendas de alimentación', 'Farmacias', 'Tiendas de electrónica', 'Librerías', 'Tiendas de cosméticos']
          }
        }, {
          slug: 'hotel-pensiune',
          icon: Hotel,
          title: {
            ro: 'Automatizare Hotel & Pensiune',
            en: 'Hotel & Guesthouse Automation',
            es: 'Automatización Hotel & Pensión'
          },
          subtitle: {
            ro: 'Rezervări directe fără comisioane, check-in/out digital, concierge AI non-stop',
            en: 'Direct bookings without commissions, digital check-in/out, 24/7 AI concierge',
            es: 'Reservas directas sin comisiones, check-in/out digital, conserje IA 24/7'
          },
          color: 'from-cyan-500 to-teal-600',
          features: {
            ro: ['🏨 Rezervări online 24/7 - Direct pe site-ul tău, fără comisioane OTA', '📱 Check-in/out digital - Self-service complet, fără cozi la recepție', '🤖 Concierge AI - Răspunsuri instant la întrebări, recomandări locale', '📅 Sincronizare calendare - Booking, Airbnb, Expedia într-un singur loc', '⭐ Gestiune recenzii - Răspunsuri automate, îmbunătățire rating', '🍽️ Upselling automat - Oferte mic dejun, spa, ture la rezervare'],
            en: ['🏨 Online bookings 24/7 - Direct on your site, no OTA commissions', '📱 Digital check-in/out - Complete self-service, no reception queues', '🤖 AI Concierge - Instant answers to questions, local recommendations', '📅 Calendar sync - Booking, Airbnb, Expedia in one place', '⭐ Review management - Automatic responses, rating improvement', '🍽️ Automatic upselling - Breakfast, spa, tour offers at booking'],
            es: ['🏨 Reservas online 24/7 - Directo en tu sitio, sin comisiones OTA', '📱 Check-in/out digital - Autoservicio completo, sin colas en recepción', '🤖 Conserje IA - Respuestas instantáneas, recomendaciones locales', '📅 Sincronización de calendarios - Booking, Airbnb, Expedia en un lugar', '⭐ Gestión de reseñas - Respuestas automáticas, mejora del rating', '🍽️ Upselling automático - Ofertas de desayuno, spa, tours al reservar']
          },
          stats: {
            stat1: '25%',
            label1: {
              ro: 'Creștere Rezervări',
              en: 'Booking Increase',
              es: 'Aumento Reservas'
            },
            stat2: {
              ro: '2-3 săpt',
              en: '2-3 weeks',
              es: '2-3 sem'
            },
            label2: {
              ro: 'Implementare',
              en: 'Implementation',
              es: 'Implementación'
            },
            stat3: '15%',
            label3: {
              ro: 'Economii Comisioane',
              en: 'Commission Savings',
              es: 'Ahorro Comisiones'
            }
          },
          pricing: {
            setup: {
              ro: '800€',
              en: '$860',
              es: '800€'
            },
            monthly: {
              ro: '179€/lună',
              en: '$190/month',
              es: '179€/mes'
            }
          },
          useCases: {
            ro: ['Hoteluri boutique', 'Pensiuni', 'Apartamente de închiriat', 'Vile de vacanță', 'Hosteluri'],
            en: ['Boutique hotels', 'Guesthouses', 'Rental apartments', 'Vacation villas', 'Hostels'],
            es: ['Hoteles boutique', 'Pensiones', 'Apartamentos de alquiler', 'Villas de vacaciones', 'Hostales']
          }
        }, {
          slug: 'chatboti-whatsapp-telegram',
          icon: MessageSquare,
          title: {
            ro: 'Chatboți AI WhatsApp & Telegram',
            en: 'AI Chatbots WhatsApp & Telegram',
            es: 'Chatbots AI WhatsApp & Telegram'
          },
          subtitle: {
            ro: 'Asistent virtual inteligent care răspunde, vinde și programează non-stop',
            en: 'Smart virtual assistant that responds, sells and schedules 24/7',
            es: 'Asistente virtual inteligente que responde, vende y programa 24/7'
          },
          color: 'from-violet-500 to-purple-600',
          features: {
            ro: ['💬 Răspunsuri instant 24/7 - Fără timp de așteptare pentru clienți', '🛒 Vânzări automate - Chatbot care prezintă produse și convertește', '📅 Programări prin chat - Rezervări complete fără apeluri telefonice', '📋 Integrare CRM - Toate conversațiile și lead-urile într-un dashboard', '🌐 Multilingv - Răspunde automat în limba clientului', '📊 Analiză conversații - Insights despre întrebări frecvente și nevoi'],
            en: ['💬 Instant 24/7 responses - No waiting time for customers', '🛒 Automated sales - Chatbot that presents products and converts', '📅 Chat bookings - Complete reservations without phone calls', '📋 CRM integration - All conversations and leads in one dashboard', '🌐 Multilingual - Automatic responses in customer language', '📊 Conversation analytics - Insights on frequent questions and needs'],
            es: ['💬 Respuestas instantáneas 24/7 - Sin tiempo de espera para clientes', '🛒 Ventas automatizadas - Chatbot que presenta productos y convierte', '📅 Reservas por chat - Reservas completas sin llamadas telefónicas', '📋 Integración CRM - Todas las conversaciones y leads en un panel', '🌐 Multilingüe - Respuestas automáticas en el idioma del cliente', '📊 Análisis de conversaciones - Insights sobre preguntas frecuentes']
          },
          stats: {
            stat1: '80%',
            label1: {
              ro: 'Răspunsuri Automate',
              en: 'Automated Responses',
              es: 'Respuestas Automatizadas'
            },
            stat2: {
              ro: '1-2 săpt',
              en: '1-2 weeks',
              es: '1-2 sem'
            },
            label2: {
              ro: 'Implementare',
              en: 'Implementation',
              es: 'Implementación'
            },
            stat3: '3x',
            label3: {
              ro: 'Mai Multe Conversii',
              en: 'More Conversions',
              es: 'Más Conversiones'
            }
          },
          pricing: {
            setup: {
              ro: '500€',
              en: '$540',
              es: '500€'
            },
            monthly: {
              ro: '99€/lună',
              en: '$109/month',
              es: '99€/mes'
            }
          },
          useCases: {
            ro: ['E-commerce', 'Servicii locale', 'Agenții', 'Clinici', 'Restaurante'],
            en: ['E-commerce', 'Local services', 'Agencies', 'Clinics', 'Restaurants'],
            es: ['E-commerce', 'Servicios locales', 'Agencias', 'Clínicas', 'Restaurantes']
          }
        }, {
          slug: 'social-media-ai',
          icon: Share2,
          title: {
            ro: 'Automatizare Social Media AI',
            en: 'AI Social Media Automation',
            es: 'Automatización Redes Sociales AI'
          },
          subtitle: {
            ro: 'Conținut generat AI, postări programate, engagement automat pe toate platformele',
            en: 'AI-generated content, scheduled posts, automatic engagement on all platforms',
            es: 'Contenido generado por IA, publicaciones programadas, engagement automático'
          },
          color: 'from-pink-500 to-rose-600',
          features: {
            ro: ['🎨 Generare conținut AI - Texte, imagini și video create automat', '📅 Programare postări - Calendar editorial automatizat multi-platformă', '📈 Analiză performanță - Insights detaliate și recomandări optimizare', '💬 Răspunsuri automate comentarii - Engagement non-stop cu followerii', '🎯 Targetare audiență - Identificare și atragere public relevant', '📊 Rapoarte lunare - Statistici complete și ROI social media'],
            en: ['🎨 AI content generation - Automatic text, images and video creation', '📅 Post scheduling - Multi-platform automated editorial calendar', '📈 Performance analysis - Detailed insights and optimization tips', '💬 Auto comment responses - Non-stop engagement with followers', '🎯 Audience targeting - Identify and attract relevant public', '📊 Monthly reports - Complete statistics and social media ROI'],
            es: ['🎨 Generación de contenido IA - Textos, imágenes y videos automáticos', '📅 Programación de publicaciones - Calendario editorial multi-plataforma', '📈 Análisis de rendimiento - Insights detallados y optimizaciones', '💬 Respuestas automáticas a comentarios - Engagement sin parar', '🎯 Segmentación de audiencia - Identificar y atraer público relevante', '📊 Informes mensuales - Estadísticas completas y ROI redes sociales']
          },
          stats: {
            stat1: '5x',
            label1: {
              ro: 'Mai Mult Conținut',
              en: 'More Content',
              es: 'Más Contenido'
            },
            stat2: {
              ro: '1-2 săpt',
              en: '1-2 weeks',
              es: '1-2 sem'
            },
            label2: {
              ro: 'Implementare',
              en: 'Implementation',
              es: 'Implementación'
            },
            stat3: '300%',
            label3: {
              ro: 'Creștere Engagement',
              en: 'Engagement Growth',
              es: 'Aumento Engagement'
            }
          },
          pricing: {
            setup: {
              ro: '400€',
              en: '$430',
              es: '400€'
            },
            monthly: {
              ro: '129€/lună',
              en: '$139/month',
              es: '129€/mes'
            }
          },
          useCases: {
            ro: ['Restaurante', 'Magazine', 'Saloane', 'Agenții', 'Freelanceri'],
            en: ['Restaurants', 'Stores', 'Salons', 'Agencies', 'Freelancers'],
            es: ['Restaurantes', 'Tiendas', 'Salones', 'Agencias', 'Freelancers']
          }
        }, {
          slug: 'agentii-imobiliare',
          icon: Home,
          title: {
            ro: 'Automatizare Agenții Imobiliare',
            en: 'Real Estate Agency Automation',
            es: 'Automatización Agencias Inmobiliarias'
          },
          subtitle: {
            ro: 'Listări automate pe toate platformele, calificare lead-uri AI, CRM imobiliar complet',
            en: 'Auto listings on all platforms, AI lead qualification, complete real estate CRM',
            es: 'Listados automáticos en todas las plataformas, calificación de leads IA, CRM inmobiliario'
          },
          color: 'from-indigo-500 to-blue-600',
          features: {
            ro: ['🏠 Listări automate multiplatformă - OLX, Storia, Imobiliare.ro, Facebook', '🎯 Calificare lead-uri AI - Focus doar pe clienții serioși și calificați', '📋 CRM imobiliar complet - Toate proprietățile, clienții și tranzacțiile', '🎥 Tururi virtuale automate - Vizionări 360° fără deplasare fizică', '📄 Generare contracte - Documente pre-completate automat', '📊 Analiză piață - Prețuri comparabile, tendințe zone'],
            en: ['🏠 Multi-platform auto listings - Zillow, Realtor, Redfin, Facebook', '🎯 AI lead qualification - Focus only on serious, qualified clients', '📋 Complete real estate CRM - All properties, clients and transactions', '🎥 Automatic virtual tours - 360° viewings without physical travel', '📄 Contract generation - Automatically pre-filled documents', '📊 Market analysis - Comparable prices, area trends'],
            es: ['🏠 Listados automáticos multiplataforma - Idealista, Fotocasa, Habitaclia', '🎯 Calificación de leads IA - Enfoque solo en clientes serios', '📋 CRM inmobiliario completo - Propiedades, clientes y transacciones', '🎥 Tours virtuales automáticos - Visitas 360° sin desplazamiento', '📄 Generación de contratos - Documentos pre-completados automáticamente', '📊 Análisis de mercado - Precios comparables, tendencias de zona']
          },
          stats: {
            stat1: '40%',
            label1: {
              ro: 'Mai Multe Lead-uri',
              en: 'More Leads',
              es: 'Más Leads'
            },
            stat2: {
              ro: '2-3 săpt',
              en: '2-3 weeks',
              es: '2-3 sem'
            },
            label2: {
              ro: 'Implementare',
              en: 'Implementation',
              es: 'Implementación'
            },
            stat3: '50%',
            label3: {
              ro: 'Timp Economisit',
              en: 'Time Saved',
              es: 'Tiempo Ahorrado'
            }
          },
          pricing: {
            setup: {
              ro: '700€',
              en: '$750',
              es: '700€'
            },
            monthly: {
              ro: '149€/lună',
              en: '$159/month',
              es: '149€/mes'
            }
          },
          useCases: {
            ro: ['Agenții imobiliare', 'Dezvoltatori', 'Brokeri independenți', 'Manageri proprietăți', 'Notari'],
            en: ['Real estate agencies', 'Developers', 'Independent brokers', 'Property managers', 'Notaries'],
            es: ['Agencias inmobiliarias', 'Desarrolladores', 'Brokers independientes', 'Gestores de propiedades', 'Notarios']
          }
        }].map((service, index) => {
          const Icon = service.icon;
          return <ServiceCard key={service.slug} title={service.title[language] || service.title.ro} icon={Icon} subtitle={service.subtitle[language] || service.subtitle.ro} price={typeof service.pricing.monthly === 'object' ? service.pricing.monthly[language] || service.pricing.monthly.ro : service.pricing.monthly} packageNumber={index + 1}>
                  {/* Stats Row - Enhanced with 3 stats */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-5">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-3 py-2 rounded-xl border border-primary/20">
                      <span className="text-lg sm:text-xl font-black text-primary">{service.stats.stat1}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{service.stats.label1[language] || service.stats.label1.ro}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-success/10 to-emerald-500/10 px-3 py-2 rounded-xl border border-success/20">
                      <span className="text-lg sm:text-xl font-black text-success">{typeof service.stats.stat2 === 'object' ? service.stats.stat2[language] || service.stats.stat2.ro : service.stats.stat2}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{service.stats.label2[language] || service.stats.label2.ro}</span>
                    </div>
                    {service.stats.stat3 && <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-3 py-2 rounded-xl border border-amber-400/20">
                        <span className="text-lg sm:text-xl font-black text-amber-500">{service.stats.stat3}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground">{service.stats.label3?.[language] || service.stats.label3?.ro}</span>
                      </div>}
                  </div>

                  {/* Features List - Enhanced */}
                  <div className="space-y-2 sm:space-y-3 mb-5">
                    {(service.features[language] || service.features.ro).map((feature: string, idx: number) => <div key={idx} className="flex items-start gap-2 sm:gap-3 bg-card/60 p-2.5 sm:p-3 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                        <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-foreground leading-relaxed">{feature}</span>
                      </div>)}
                  </div>

                  {/* Use Cases - New Section */}
                  {service.useCases && <div className="mb-5">
                      <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-2">
                        {language === 'ro' ? '✨ Ideal pentru:' : language === 'es' ? '✨ Ideal para:' : '✨ Perfect for:'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(service.useCases[language] || service.useCases.ro).map((useCase: string, idx: number) => <span key={idx} className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                            {useCase}
                          </span>)}
                      </div>
                    </div>}

                  {/* Pricing & CTA - Enhanced */}
                  <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10 p-4 rounded-xl border border-amber-400/30 mb-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">{language === 'ro' ? 'Setup inițial' : language === 'es' ? 'Configuración inicial' : 'Initial setup'}</p>
                        <p className="text-xl sm:text-2xl font-bold text-foreground">{typeof service.pricing.setup === 'object' ? service.pricing.setup[language] || service.pricing.setup.ro : service.pricing.setup}</p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="text-xs text-muted-foreground">{language === 'ro' ? 'Abonament lunar' : language === 'es' ? 'Suscripción mensual' : 'Monthly subscription'}</p>
                        <p className="text-xl sm:text-2xl font-bold text-primary">{typeof service.pricing.monthly === 'object' ? service.pricing.monthly[language] || service.pricing.monthly.ro : service.pricing.monthly}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons - Enhanced */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to={`/automatizare/${service.slug}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 text-gray-950 font-bold py-3">
                        <Eye className="w-4 h-4 mr-2" />
                        {language === 'ro' ? 'Vezi Detalii Complete' : language === 'es' ? 'Ver Detalles Completos' : 'View Full Details'}
                      </Button>
                    </Link>
                    <a href="https://wa.me/40768676141" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full border-success text-success hover:bg-success hover:text-success-foreground py-3">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </ServiceCard>;
        })}

            {/* AI Video Generator - Digital Avatar Package - Package 10 */}
            <ServiceCard title={t.services.ugc.title} icon={Video} discount={t.services.ugc.discount} price={t.services.ugc.price} originalPrice={t.services.ugc.originalPrice} subtitle={t.services.ugc.heroSubtitle} highlight packageNumber={10} audioPackage="brandul-tau" onPlayAudio={setActiveAudioPackage}>
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

            {/* Modular Note */}
            <div className="bg-background/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-success/30 shadow-2xl">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 drop-shadow-md">{t.aiServices.modular}</h3>
              <p className="text-sm sm:text-base text-foreground font-medium drop-shadow-sm">{t.aiServices.modularDesc}</p>
            </div>
          </main>}

        {/* Premium Gallery Button - Above Footer CTA */}
        <div className="px-2 mt-6 sm:mt-8">
          <Link to="/gallery" className="block group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-950/80 via-yellow-900/60 to-amber-950/80 border-2 border-amber-400/80 p-4 sm:p-5 shadow-[0_0_40px_rgba(251,191,36,0.4),inset_0_1px_0_rgba(251,191,36,0.5)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] transition-all duration-500 hover:scale-[1.02] cursor-pointer">
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 animate-[shimmer_3s_infinite] pointer-events-none" style={{
              backgroundSize: '200% 100%'
            }} />
              
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
        </div>

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
      
      {/* Footer */}
      <Footer />


      {/* Floating Social Media Icons */}
      <FloatingSocialIcons />
    </div>;
};
export default Index;