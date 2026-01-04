import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceItem } from '@/components/ServiceItem';
import { PulsingBadge } from '@/components/PulsingBadge';
import { CinematicPlayer } from '@/components/CinematicPlayer';
import { FoodBackground } from '@/components/FoodBackground';
import { getWhatsAppUrl, getPhoneUrl } from '@/i18n/translations';
import {
  Zap,
  Sparkles,
  TrendingUp,
  MessageSquare,
  Video,
  Clock,
  ShoppingBag,
  Calendar,
  Award,
  Megaphone,
  Globe,
  Phone,
  Users,
  Star,
  Heart,
  Upload,
  Image,
  Check,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'existente' | 'ai'>('existente');

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Food Background with Miniature Chefs */}
      <FoodBackground />

      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8 relative z-10">
        {/* Hero Section */}
        <header className="text-center mb-8 sm:mb-10 relative pt-2">
          <LanguageSwitcher />
          
          <div className="inline-block relative mb-2 sm:mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient-primary drop-shadow-lg">
              {t.siteName}
            </h1>
          </div>
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 px-2 max-w-2xl mx-auto">
            {t.taglineItems.map((item, index) => (
              <p key={index} className="text-base sm:text-xl md:text-2xl text-white font-extrabold drop-shadow-md">
                {item.emoji} {item.text}
              </p>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 sm:gap-3 mt-2 sm:mt-4 flex-wrap px-2">
            <PulsingBadge color="blue">{t.badges.ai}</PulsingBadge>
            <PulsingBadge color="purple">{t.badges.apps}</PulsingBadge>
            <PulsingBadge color="green">{t.badges.marketing}</PulsingBadge>
          </div>
          
          {/* UGC Content Generator - Above CinematicPlayer */}
          <div className="mt-4 sm:mt-6 mb-4 sm:mb-6 px-2">
            <ServiceCard title={t.services.ugc.title} icon={Upload} price={t.services.ugc.price} discount={t.services.ugc.discount} subtitle={t.services.ugc.subtitle} highlight>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-lg">
                  <Image className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-gradient-primary">{t.services.ugc.badge}</span>
                </div>
              </div>

              {/* 4-Step Workflow Panel */}
              <div className="bg-gradient-to-br from-secondary/5 via-accent/5 to-warning/5 p-4 sm:p-6 rounded-2xl mb-5 border-2 border-secondary/30 shadow-2xl">
                <h4 className="font-bold text-base sm:text-lg text-foreground mb-4 flex items-center gap-2">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Video className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  {t.services.ugc.stepsTitle}
                </h4>
                <div className="mb-4">
                  <p className="text-sm sm:text-base text-muted-foreground font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    {t.services.ugc.stepsDesc}
                  </p>
                  <div className="pl-2 sm:pl-4 space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-destructive to-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Upload className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-destructive-foreground" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">
                        <strong>{t.services.ugc.step1}</strong> - {t.services.ugc.step1Desc}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">
                        <strong>{t.services.ugc.step2}</strong> - {t.services.ugc.step2Desc}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-success rounded-full flex items-center justify-center flex-shrink-0">
                        <Image className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success-foreground" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">
                        <strong>{t.services.ugc.step3}</strong> - {t.services.ugc.step3Desc}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-warning to-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-warning-foreground" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">
                        <strong>{t.services.ugc.step4}</strong> - {t.services.ugc.step4Desc}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-2xl border-2 border-primary/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h5 className="font-bold text-sm sm:text-base text-foreground">{t.services.ugc.ai}</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.services.ugc.aiDesc}</p>
                </div>
                <div className="bg-gradient-to-br from-success/5 to-success/10 p-4 rounded-2xl border-2 border-success/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-success" />
                    <h5 className="font-bold text-sm sm:text-base text-foreground">{t.services.ugc.format}</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.services.ugc.formatDesc}</p>
                </div>
              </div>

              {t.services.ugc.items.map((item, index) => (
                <ServiceItem
                  key={index}
                  text={item}
                  icon={[MessageSquare, Sparkles, Image, Video, Zap, Globe][index]}
                />
              ))}

              {/* Telegram Button */}
              <div className="mt-5 mb-5">
                <a
                  href="https://t.me/SergiuBot007bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full bg-[#0088cc] hover:bg-[#006699] text-white font-bold py-4 px-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-3">
                    <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                    {t.services.ugc.telegramButton}
                  </Button>
                </a>
              </div>

              {/* Examples box */}
              <div className="p-4 bg-gradient-warning rounded-2xl border-2 border-warning/30 shadow-lg">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Video className="w-5 h-5 sm:w-6 sm:h-6 text-warning-foreground flex-shrink-0 mt-1 animate-pulse" />
                  <p className="text-sm sm:text-base text-warning-foreground font-medium">
                    <strong>🎬 Content examples:</strong> {t.services.ugc.examples}
                  </p>
                </div>
              </div>
            </ServiceCard>
          </div>
          
          {/* Cinematic Auto-Expanding Player - Positioned below UGC */}
          <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
            <CinematicPlayer />
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
          <button
            onClick={() => setActiveTab('existente')}
            className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 relative overflow-hidden ${
              activeTab === 'existente'
                ? 'bg-gradient-primary text-primary-foreground shadow-2xl'
                : 'bg-card text-muted-foreground hover:shadow-lg border border-border'
            }`}
          >
            {activeTab === 'existente' && (
              <div className="absolute inset-0 bg-card/20 animate-pulse"></div>
            )}
            <span className="relative flex items-center justify-center gap-1.5 sm:gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.tabs.current}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 relative overflow-hidden ${
              activeTab === 'ai'
                ? 'bg-gradient-primary text-primary-foreground shadow-2xl'
                : 'bg-card text-muted-foreground hover:shadow-lg border border-border'
            }`}
          >
            {activeTab === 'ai' && (
              <div className="absolute inset-0 bg-card/20 animate-pulse"></div>
            )}
            <span className="relative flex items-center justify-center gap-1.5 sm:gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.tabs.ai}
            </span>
          </button>
        </nav>

        {/* Current Services Tab */}
        {activeTab === 'existente' && (
          <main className="space-y-5 px-2">
            {/* Standard Package */}
            <ServiceCard title={t.services.standard.title} icon={TrendingUp} price={t.services.standard.price} subtitle={t.services.standard.subtitle}>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-foreground">{t.services.standard.support}</span>
                </div>
              </div>
              {t.services.standard.items.map((item, index) => (
                <ServiceItem
                  key={index}
                  text={item}
                  icon={[ShoppingBag, Calendar, TrendingUp, Zap, Award, Megaphone, Clock, Globe, MessageSquare][index]}
                />
              ))}
            </ServiceCard>

            {/* Video Premium - VEO3 Services (Second) */}
            <ServiceCard title={t.services.video.title} icon={Video} price={t.services.video.price} originalPrice={t.services.video.originalPrice} discount={t.services.video.discount} subtitle={t.services.video.subtitle} highlight>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-lg">
                  <Video className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-gradient-primary">{t.services.video.badge}</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 via-accent/5 to-warning/5 p-4 sm:p-6 rounded-2xl mb-5 border-2 border-secondary/30 shadow-2xl">
                <h4 className="font-bold text-base sm:text-lg text-foreground mb-4 flex items-center gap-2">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Video className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  {t.services.video.videosTitle}
                </h4>
                <div className="mb-4">
                  <p className="text-sm sm:text-base text-muted-foreground font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    {t.services.video.videoDesc}
                  </p>
                  <div className="pl-2 sm:pl-4 space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-destructive to-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-destructive-foreground" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">
                        <strong>{t.services.video.hook}</strong> - {t.services.video.hookDesc}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">
                        <strong>{t.services.video.action}</strong> - {t.services.video.actionDesc}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-success rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success-foreground" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">
                        <strong>{t.services.video.cta}</strong> - {t.services.video.ctaDesc}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-2xl border-2 border-primary/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h5 className="font-bold text-sm sm:text-base text-foreground">{t.services.video.veo3}</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.services.video.veo3Desc}</p>
                </div>
                <div className="bg-gradient-to-br from-success/5 to-success/10 p-4 rounded-2xl border-2 border-success/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-success" />
                    <h5 className="font-bold text-sm sm:text-base text-foreground">{t.services.video.format}</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.services.video.formatDesc}</p>
                </div>
              </div>

              {t.services.video.items.map((item, index) => (
                <ServiceItem
                  key={index}
                  text={item}
                  icon={[Star, Users, Zap, Megaphone, Video, Award, TrendingUp, Globe][index]}
                />
              ))}

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

              {/* Main AI Agent Panel - Same structure as VEO3 */}
              <div className="bg-gradient-to-br from-secondary/5 via-accent/5 to-warning/5 p-4 sm:p-6 rounded-2xl mb-5 border-2 border-secondary/30 shadow-2xl">
                <h4 className="font-bold text-base sm:text-lg text-foreground mb-4 flex items-center gap-2">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  {t.services.aiAgents.phone.title}
                </h4>
                <div className="pl-2 sm:pl-4 space-y-3">
                  {t.services.aiAgents.phone.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-destructive to-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-destructive-foreground" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Section - Same colors as VEO3 */}
              <div className="bg-gradient-to-br from-secondary/5 via-accent/5 to-warning/5 p-4 sm:p-6 rounded-2xl mb-5 border-2 border-secondary/30 shadow-2xl">
                <h4 className="font-bold text-base sm:text-lg text-foreground mb-4 flex items-center gap-2">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  {t.services.aiAgents.whatsapp.title}
                </h4>
                <div className="pl-2 sm:pl-4 space-y-3">
                  {t.services.aiAgents.whatsapp.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reservations Section - Same colors as VEO3 */}
              <div className="bg-gradient-to-br from-secondary/5 via-accent/5 to-warning/5 p-4 sm:p-6 rounded-2xl mb-5 border-2 border-secondary/30 shadow-2xl">
                <h4 className="font-bold text-base sm:text-lg text-foreground mb-4 flex items-center gap-2">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  {t.services.aiAgents.reservations.title}
                </h4>
                <div className="pl-2 sm:pl-4 space-y-3">
                  {t.services.aiAgents.reservations.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-success rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success-foreground" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature cards - Same grid style as VEO3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-2xl border-2 border-primary/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h5 className="font-bold text-sm sm:text-base text-foreground">24/7 AI</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">Never miss a call or message with intelligent automation</p>
                </div>
                <div className="bg-gradient-to-br from-success/5 to-success/10 p-4 rounded-2xl border-2 border-success/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-success" />
                    <h5 className="font-bold text-sm sm:text-base text-foreground">Smart Integration</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">Seamlessly connects with Google Calendar and WhatsApp</p>
                </div>
              </div>

              {/* Benefits - Same style as VEO3 examples box */}
              <div className="mt-5 p-4 bg-gradient-warning rounded-2xl border-2 border-warning/30 shadow-lg">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-warning-foreground flex-shrink-0 mt-1 animate-pulse" />
                  <p className="text-sm sm:text-base text-warning-foreground font-medium">
                    <strong>🤖 Benefits:</strong> {t.services.aiAgents.benefits}
                  </p>
                </div>
              </div>
            </ServiceCard>

            {/* Premium Package */}
            <ServiceCard title={t.services.premium.title} icon={Sparkles} price={t.services.premium.price} originalPrice={t.services.premium.originalPrice} discount={t.services.premium.discount} discountNote={t.services.premium.discountNote} subtitle={t.services.premium.subtitle} highlight>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-lg">
                  <Star className="w-5 h-5 text-warning" />
                  <span className="text-sm sm:text-base font-bold text-gradient-primary">{t.services.premium.badge}</span>
                </div>
              </div>

              {/* Automation Section */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 sm:p-5 rounded-2xl mb-4 border-2 border-primary/30 shadow-xl">
                <h4 className="font-bold text-base sm:text-lg text-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-primary rounded-lg">
                    <Users className="w-5 h-5 text-primary-foreground" />
                  </div>
                  {t.services.premium.automation.title}
                </h4>
                {t.services.premium.automation.items.map((item, index) => (
                  <ServiceItem key={index} text={item} />
                ))}
              </div>

              {/* App Development Section */}
              <div className="bg-gradient-to-br from-success/5 to-success/10 p-4 sm:p-5 rounded-2xl mb-4 border-2 border-success/30 shadow-xl">
                <h4 className="font-bold text-base sm:text-lg text-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-success rounded-lg">
                    <Globe className="w-5 h-5 text-success-foreground" />
                  </div>
                  {t.services.premium.app.title}
                </h4>
                {t.services.premium.app.items.map((item, index) => (
                  <ServiceItem key={index} text={item} />
                ))}
              </div>

              {/* Social Media Section */}
              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-4 sm:p-5 rounded-2xl border-2 border-secondary/30 shadow-xl">
                <h4 className="font-bold text-base sm:text-lg text-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-secondary rounded-lg">
                    <Megaphone className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  {t.services.premium.social.title}
                </h4>
                {t.services.premium.social.items.map((item, index) => (
                  <ServiceItem key={index} text={item} />
                ))}
              </div>
            </ServiceCard>

          </main>
        )}

        {/* AI Services Tab */}
        {activeTab === 'ai' && (
          <main className="space-y-5 px-2">
            {/* Header Banner */}
            <div className="bg-gradient-primary text-primary-foreground p-4 sm:p-8 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-card/10 animate-pulse"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-1 sm:mb-2">{t.aiServices.header}</h2>
                <p className="text-sm sm:text-base opacity-95 text-center font-semibold">{t.aiServices.subtitle}</p>
              </div>
            </div>

            <ServiceCard title={t.aiServices.pricing} icon={TrendingUp}>
              {t.aiServices.pricingItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Zap, Star, Clock, TrendingUp][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.recommendations} icon={Users}>
              {t.aiServices.recommendationsItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Heart, ShoppingBag, Sparkles, TrendingUp][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.chatbot} icon={MessageSquare}>
              {t.aiServices.chatbotItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Globe, Clock, Zap, Users][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.stock} icon={Calendar}>
              {t.aiServices.stockItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[TrendingUp, Globe, Award, Zap][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.routes} icon={Globe}>
              {t.aiServices.routesItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Zap, Users, Clock, Star][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.sentiment} icon={MessageSquare}>
              {t.aiServices.sentimentItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Globe, TrendingUp, MessageSquare, Star][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.content} icon={Sparkles}>
              {t.aiServices.contentItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Megaphone, Globe, MessageSquare, Star][index]} />
              ))}
            </ServiceCard>

            <ServiceCard title={t.aiServices.competitive} icon={TrendingUp}>
              {t.aiServices.competitiveItems.map((item, index) => (
                <ServiceItem key={index} text={item} icon={[Globe, Star, Award, Zap][index]} />
              ))}
            </ServiceCard>

            {/* Modular Note */}
            <div className="bg-background/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-success/30 shadow-2xl">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 drop-shadow-md">{t.aiServices.modular}</h3>
              <p className="text-sm sm:text-base text-foreground font-medium drop-shadow-sm">{t.aiServices.modularDesc}</p>
            </div>
          </main>
        )}

        {/* Footer CTA */}
        <footer className="mt-6 sm:mt-8 bg-gradient-primary text-primary-foreground p-4 sm:p-6 rounded-xl text-center mx-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{t.footer.title}</h2>
          <p className="text-sm sm:text-base md:text-base mb-3 sm:mb-5 opacity-90">{t.footer.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-success text-success-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-success/90 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.footer.whatsapp}
            </a>
            <a
              href={getPhoneUrl()}
              className="bg-card text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.footer.call}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
