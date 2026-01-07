import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceItem } from '@/components/ServiceItem';
import { PulsingBadge } from '@/components/PulsingBadge';
import { CinematicPlayer } from '@/components/CinematicPlayer';
import { FoodBackground } from '@/components/FoodBackground';
import { FullscreenVideo } from '@/components/FullscreenVideo';
import { VideoGallery } from '@/components/VideoGallery';
import { getWhatsAppUrl, getPhoneUrl } from '@/i18n/translations';
import { Link } from 'react-router-dom';
import ugcExample1 from '@/assets/ugc-example-1.mp4';
import ugcExample2 from '@/assets/ugc-example-2.mp4';
import ugcExample3 from '@/assets/ugc-example-3.mp4';
import ugcExample4 from '@/assets/ugc-example-4.mp4';
import ugcExample5 from '@/assets/ugc-example-5.mp4';
import ugcExample6 from '@/assets/ugc-example-6.mp4';
import { Zap, Sparkles, TrendingUp, MessageSquare, Video, Clock, ShoppingBag, Calendar, Award, Megaphone, Globe, Phone, Users, Star, Heart, Upload, Image, Check, Send, Palette, ArrowRight, Bot, Eye, Truck, UtensilsCrossed, Headphones, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
const Index = () => {
  const {
    language,
    t
  } = useLanguage();
  const [activeTab, setActiveTab] = useState<'existente' | 'ai'>('existente');
  return <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Food Background with Miniature Chefs */}
      <FoodBackground />

      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8 relative z-10">
        {/* Hero Section */}
        <header className="text-center mb-6 sm:mb-8 relative pt-2">
          <LanguageSwitcher />
          
          <div className="inline-block relative mb-2 sm:mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient-primary drop-shadow-lg">
              {t.siteName}
            </h1>
          </div>
          
          
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 px-2 max-w-2xl mx-auto">
            {t.taglineItems.map((item, index) => <p key={index} className="text-base sm:text-xl md:text-2xl text-white font-extrabold drop-shadow-md">
                {item.emoji} {item.text}
              </p>)}
          </div>
          <div className="flex justify-center gap-1.5 sm:gap-3 mt-2 sm:mt-4 flex-wrap px-2">
            <PulsingBadge color="blue">{t.badges.ai}</PulsingBadge>
            <PulsingBadge color="purple">{t.badges.apps}</PulsingBadge>
            <PulsingBadge color="green">{t.badges.marketing}</PulsingBadge>
          </div>
        </header>

        {/* Podcast Player Section */}
        <div className="mb-6 sm:mb-8 px-2">
          <CinematicPlayer />
        </div>



        

        {/* Content Examples - Premium Gold Box */}
        <div className="mb-6 sm:mb-8 px-2">
          <div className="bg-gradient-to-br from-amber-950/80 via-yellow-900/60 to-amber-950/80 rounded-2xl border-2 border-amber-400/50 shadow-2xl overflow-hidden relative">
            {/* Premium gold glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-300/5 to-amber-400/10 pointer-events-none" />
            
            {/* Header - Opens Video Gallery */}
            <VideoGallery videos={[ugcExample1, ugcExample2, ugcExample3, ugcExample4, ugcExample5, ugcExample6]} buttonText="" customTrigger={<button className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-amber-400/10 transition-colors relative z-10">
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
                      <ChevronDown className="w-4 h-4 text-amber-300" />
                    </div>
                  </div>
                </button>} />
            
            {/* Premium badge */}
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full text-[10px] font-bold text-amber-950 uppercase tracking-wider shadow-lg">
              Premium
            </div>
          </div>
        </div>

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
            {/* Standard Package - Delivery Platform Management */}
            <ServiceCard title={t.services.standard.title} icon={Truck} price={t.services.standard.price} subtitle={t.services.standard.subtitle}>
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
                    {((t.services.standard as any).negotiation?.items || []).map((item: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 bg-card/60 p-2.5 rounded-lg border border-warning/20">
                        <Check className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
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
                    {((t.services.standard as any).menu?.items || []).map((item: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 bg-card/60 p-2.5 rounded-lg border border-secondary/20">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
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
                    {((t.services.standard as any).support_card?.items || []).map((item: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 bg-card/60 p-2.5 rounded-lg border border-success/20">
                        <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
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
                    {((t.services.standard as any).training?.items || [
                      'Instruire Completă: Învățăm personalul tău să folosească Glovo, Wolt și Bolt Food eficient - comenzi, tablete, confirmări.',
                      'Probleme Comenzi: Învață să gestioneze produse lipsă, comenzi anulate, cereri de refund - totul rezolvat rapid.',
                      'Best Practices: Sfaturi și trucuri pentru reducerea timpului de preparare, îmbunătățirea ambalajului și evitarea recenziilor negative.',
                      'Suport Continuu: Echipa are acces direct la noi pe WhatsApp pentru orice întrebare sau problemă.'
                    ]).map((item: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 bg-card/60 p-2 sm:p-2.5 rounded-lg border border-primary/20">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-foreground break-words leading-relaxed">{item}</span>
                      </div>
                    ))}
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
                  {((t.services.standard as any).whyItems || []).map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ServiceCard>

            {/* Video Premium - VEO3 Services (Second) */}
            <ServiceCard title={t.services.video.title} icon={Video} price={t.services.video.price} originalPrice={t.services.video.originalPrice} discount={t.services.video.discount} subtitle={t.services.video.subtitle} highlight>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-lg">
                  <Video className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-gradient-primary">{t.services.video.badge}</span>
                </div>
              </div>

              {/* 3 Main Feature Cards */}
              <div className="grid grid-cols-1 gap-4 mb-5">
                {/* Card 1: Premium Content */}
                <div className="bg-gradient-to-br from-secondary/10 via-accent/5 to-secondary/10 p-4 sm:p-5 rounded-2xl border-2 border-secondary/30 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-gradient-primary rounded-xl shadow-lg">
                      <Video className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-foreground">{t.services.video.videosTitle}</h4>
                      <span className="text-xs text-muted-foreground font-medium">{t.services.video.videoDesc}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-card/50 p-3 rounded-xl border border-border/50">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-sm text-foreground">{t.services.video.veo3}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{t.services.video.veo3Desc}</p>
                    </div>
                    <div className="bg-card/50 p-3 rounded-xl border border-border/50">
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="w-4 h-4 text-warning" />
                        <span className="font-semibold text-sm text-foreground">{t.services.video.format}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{t.services.video.formatDesc}</p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Daily Posting Robot - PROMINENT */}
                <div className="bg-gradient-to-br from-primary/15 via-primary/10 to-accent/15 p-4 sm:p-5 rounded-2xl border-2 border-primary/40 shadow-2xl relative overflow-hidden">
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 animate-pulse pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg shadow-primary/30">
                        <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg text-foreground">{(t.services.video as any).robot?.title || '🤖 Robot de Postare Zilnică'}</h4>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-semibold">{(t.services.video as any).robot?.tagline || 'Automatizare'}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{(t.services.video as any).robot?.intro || 'Uită de grija postărilor manuale. Robotul nostru lucrează pentru tine.'}</p>
                    <div className="space-y-2">
                      {((t.services.video as any).robot?.items || [
                        'Postare pe 4 Platforme: Clipul tău ajunge simultan pe TikTok, Instagram, Facebook și YouTube Shorts.',
                        'Precizie Maximă: Postăm în fiecare zi, exact la aceeași oră, pentru a maximiza impactul.',
                        'Fără Efort: Nu trebuie să intri în aplicații, să scrii descrieri sau să pui hashtag-uri. Noi automatizăm tot procesul.'
                      ]).map((item: string, index: number) => (
                        <div key={index} className="flex items-start gap-2 bg-card/60 p-2.5 rounded-lg border border-primary/20">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card 3: Guaranteed Visibility */}
                <div className="bg-gradient-to-br from-success/10 via-success/5 to-success/10 p-4 sm:p-5 rounded-2xl border-2 border-success/30 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-gradient-success rounded-xl shadow-lg">
                      <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-success-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-foreground">{(t.services.video as any).visibility?.title || '📈 Vizibilitate Garantată din Prima Lună'}</h4>
                      <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded-full font-semibold">{(t.services.video as any).visibility?.tagline || 'Algoritm Prietenos'}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{(t.services.video as any).visibility?.intro || 'Împrietenește-te cu Algoritmul: Algoritmii social media adoră consecvența.'}</p>
                  <div className="space-y-2">
                    {((t.services.video as any).visibility?.items || [
                      'Impact Imediat: Vei vedea creșteri în vizibilitate, urmăritori și interacțiuni încă din primele 30 de zile.',
                      'Constanță de Fier: Brandul tău rămâne în mintea clienților pentru că ești prezent sub ochii lor în fiecare zi.'
                    ]).map((item: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 bg-card/60 p-2.5 rounded-lg border border-success/20">
                        <TrendingUp className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 p-4 bg-gradient-warning rounded-2xl border-2 border-warning/30 shadow-lg">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Video className="w-5 h-5 sm:w-6 sm:h-6 text-warning-foreground flex-shrink-0 mt-1 animate-pulse" />
                  <p className="text-sm sm:text-base text-warning-foreground font-medium">
                    <strong>🎥 Content examples:</strong> {t.services.video.examples}
                  </p>
                </div>
              </div>
            </ServiceCard>

            {/* AI Agents (Third) - Styled like VEO3 with same colors */}
            <ServiceCard title={t.services.aiAgents.title} icon={MessageSquare} price={t.services.aiAgents.price} originalPrice={t.services.aiAgents.originalPrice} discount={t.services.aiAgents.discount} subtitle={t.services.aiAgents.subtitle} highlight>
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
                  {t.services.aiAgents.benefitsList.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-warning-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-warning-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ServiceCard>

            {/* Premium Package - Business on Autopilot */}
            <ServiceCard title={t.services.premium.title} icon={Sparkles} price={t.services.premium.price} originalPrice={t.services.premium.originalPrice} discount={t.services.premium.discount} discountNote={t.services.premium.discountNote} subtitle={t.services.premium.subtitle} highlight>
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
                  {t.services.premium.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-warning-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-warning-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ServiceCard>

            {/* AI Video Generator - Digital Avatar Package - MOVED TO BOTTOM */}
            <ServiceCard title={t.services.ugc.title} icon={Video} discount="32 videoclipuri" price={t.services.ugc.price} originalPrice={t.services.ugc.originalPrice} subtitle={t.services.ugc.heroSubtitle} highlight>
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
                  {[
                    { num: '1', text: t.services.ugc.step1, desc: t.services.ugc.step1Desc, colors: 'from-primary to-secondary' },
                    { num: '2', text: t.services.ugc.step2, desc: t.services.ugc.step2Desc, colors: 'from-secondary to-accent' },
                    { num: '3', text: t.services.ugc.step3, desc: t.services.ugc.step3Desc, colors: 'from-accent to-warning' },
                    { num: '4', text: t.services.ugc.step4, desc: t.services.ugc.step4Desc, colors: 'bg-gradient-success' }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-2 bg-card/80 p-2 sm:p-2.5 rounded-lg">
                      <div className={`w-6 h-6 bg-gradient-to-br ${step.colors} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-xs font-bold text-primary-foreground">{step.num}</span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm text-foreground font-semibold">{step.text}</span>
                        <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
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
                  {[
                    { icon: Zap, title: t.services.ugc.benefit1Title, desc: t.services.ugc.benefit1Desc, colors: 'from-primary to-secondary' },
                    { icon: Star, title: t.services.ugc.benefit2Title, desc: t.services.ugc.benefit2Desc, colors: 'bg-gradient-success' },
                    { icon: Check, title: t.services.ugc.benefit3Title, desc: t.services.ugc.benefit3Desc, colors: 'from-secondary to-accent' },
                    { icon: Users, title: t.services.ugc.benefit4Title, desc: t.services.ugc.benefit4Desc, colors: 'from-accent to-warning' }
                  ].map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="flex items-start gap-2 bg-card/80 p-2 sm:p-2.5 rounded-lg">
                        <div className={`w-6 h-6 bg-gradient-to-br ${benefit.colors} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-sm text-foreground font-semibold">{benefit.title}</span>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{benefit.desc}</p>
                        </div>
                      </div>
                    );
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
          {/* Become a Creator Button */}
          <div className="mb-4 sm:mb-6 flex justify-center">
            <a href="https://api.whatsapp.com/send/?phone=40768676141&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="animate-flicker bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base flex items-center gap-2 w-full sm:w-auto justify-center">
                <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Become a Creator for Your Business</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </a>
          </div>
          
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{t.footer.title}</h2>
          <p className="text-sm sm:text-base md:text-base mb-3 sm:mb-5 opacity-90">{t.footer.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
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
      </div>
    </div>;
};
export default Index;