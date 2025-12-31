import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceItem } from '@/components/ServiceItem';
import { PulsingBadge } from '@/components/PulsingBadge';
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
} from 'lucide-react';

const Index = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'existente' | 'ai'>('existente');

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <LanguageSwitcher />

      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8 relative z-10">
        {/* Hero Section */}
        <header className="text-center mb-8 sm:mb-10 relative pt-12">
          <div className="inline-block relative mb-3 sm:mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient-primary">
              {t.siteName}
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-semibold px-2 max-w-2xl mx-auto">
            {t.tagline}
          </p>
          <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 flex-wrap px-2">
            <PulsingBadge color="blue">{t.badges.ai}</PulsingBadge>
            <PulsingBadge color="purple">{t.badges.apps}</PulsingBadge>
            <PulsingBadge color="green">{t.badges.marketing}</PulsingBadge>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
          <button
            onClick={() => setActiveTab('existente')}
            className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 relative overflow-hidden ${
              activeTab === 'existente'
                ? 'bg-gradient-primary text-primary-foreground shadow-2xl'
                : 'bg-card text-muted-foreground hover:shadow-lg border border-border'
            }`}
          >
            {activeTab === 'existente' && (
              <div className="absolute inset-0 bg-card/20 animate-pulse"></div>
            )}
            <span className="relative flex items-center justify-center gap-1 sm:gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.tabs.current}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 relative overflow-hidden ${
              activeTab === 'ai'
                ? 'bg-gradient-primary text-primary-foreground shadow-2xl'
                : 'bg-card text-muted-foreground hover:shadow-lg border border-border'
            }`}
          >
            {activeTab === 'ai' && (
              <div className="absolute inset-0 bg-card/20 animate-pulse"></div>
            )}
            <span className="relative flex items-center justify-center gap-1 sm:gap-2">
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

            {/* AI Agents */}
            <ServiceCard title={t.services.aiAgents.title} icon={MessageSquare} price={t.services.aiAgents.price} subtitle={t.services.aiAgents.subtitle}>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/10 to-accent/10 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-bold text-foreground">{t.services.aiAgents.badge}</span>
                </div>
              </div>

              {/* Phone Section */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-5 rounded-2xl mb-4 border-2 border-primary/20 shadow-lg">
                <h4 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-primary rounded-lg">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  {t.services.aiAgents.phone.title}
                </h4>
                {t.services.aiAgents.phone.items.map((item, index) => (
                  <ServiceItem key={index} text={item} />
                ))}
              </div>

              {/* WhatsApp Section */}
              <div className="bg-gradient-to-br from-success/5 to-success/10 p-5 rounded-2xl mb-4 border-2 border-success/20 shadow-lg">
                <h4 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-success rounded-lg">
                    <MessageSquare className="w-5 h-5 text-success-foreground" />
                  </div>
                  {t.services.aiAgents.whatsapp.title}
                </h4>
                {t.services.aiAgents.whatsapp.items.map((item, index) => (
                  <ServiceItem key={index} text={item} />
                ))}
              </div>

              {/* Reservations Section */}
              <div className="bg-gradient-to-br from-secondary/5 to-accent/10 p-5 rounded-2xl mb-4 border-2 border-secondary/20 shadow-lg">
                <h4 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  <div className="p-2 bg-secondary rounded-lg">
                    <Calendar className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  {t.services.aiAgents.reservations.title}
                </h4>
                {t.services.aiAgents.reservations.items.map((item, index) => (
                  <ServiceItem key={index} text={item} />
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-gradient-warning p-4 rounded-2xl border-2 border-warning/30 shadow-md">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-warning-foreground flex-shrink-0 mt-1" />
                  <p className="text-sm text-warning-foreground font-medium">
                    <strong>Benefits:</strong> {t.services.aiAgents.benefits}
                  </p>
                </div>
              </div>
            </ServiceCard>

            {/* Video Premium */}
            <ServiceCard title={t.services.video.title} icon={Video} price={t.services.video.price} originalPrice={t.services.video.originalPrice} discount={t.services.video.discount} discountNote={t.services.video.discountNote} subtitle={t.services.video.subtitle} highlight>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-lg">
                  <Video className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-gradient-primary">{t.services.video.badge}</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 via-accent/5 to-warning/5 p-6 rounded-2xl mb-5 border-2 border-secondary/30 shadow-2xl">
                <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Video className="w-6 h-6 text-primary-foreground" />
                  </div>
                  {t.services.video.videosTitle}
                </h4>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    {t.services.video.videoDesc}
                  </p>
                  <div className="pl-4 space-y-3">
                    <div className="flex items-center gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-8 h-8 bg-gradient-to-br from-destructive to-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 text-destructive-foreground" />
                      </div>
                      <span className="text-sm text-foreground">
                        <strong>{t.services.video.hook}</strong> - {t.services.video.hookDesc}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm text-foreground">
                        <strong>{t.services.video.action}</strong> - {t.services.video.actionDesc}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-card p-3 rounded-xl shadow-md">
                      <div className="w-8 h-8 bg-gradient-success rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-success-foreground" />
                      </div>
                      <span className="text-sm text-foreground">
                        <strong>{t.services.video.cta}</strong> - {t.services.video.ctaDesc}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-2xl border-2 border-primary/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h5 className="font-bold text-sm text-foreground">{t.services.video.veo3}</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.services.video.veo3Desc}</p>
                </div>
                <div className="bg-gradient-to-br from-success/5 to-success/10 p-4 rounded-2xl border-2 border-success/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-success" />
                    <h5 className="font-bold text-sm text-foreground">{t.services.video.format}</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.services.video.formatDesc}</p>
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
                <div className="flex items-start gap-3">
                  <Video className="w-6 h-6 text-warning-foreground flex-shrink-0 mt-1 animate-pulse" />
                  <p className="text-sm text-warning-foreground font-medium">
                    <strong>🎥 Content examples:</strong> {t.services.video.examples}
                  </p>
                </div>
              </div>
            </ServiceCard>

            {/* Premium Package */}
            <ServiceCard title={t.services.premium.title} icon={Sparkles} price={t.services.premium.price} originalPrice={t.services.premium.originalPrice} discount={t.services.premium.discount} discountNote={t.services.premium.discountNote} subtitle={t.services.premium.subtitle} highlight>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-lg">
                  <Star className="w-5 h-5 text-warning" />
                  <span className="text-sm font-bold text-gradient-primary">{t.services.premium.badge}</span>
                </div>
              </div>

              {/* Automation Section */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-5 rounded-2xl mb-4 border-2 border-primary/30 shadow-xl">
                <h4 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
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
              <div className="bg-gradient-to-br from-success/5 to-success/10 p-5 rounded-2xl mb-4 border-2 border-success/30 shadow-xl">
                <h4 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
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
              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-5 rounded-2xl border-2 border-secondary/30 shadow-xl">
                <h4 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
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
            <div className="bg-gradient-primary text-primary-foreground p-8 rounded-3xl mb-6 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-card/10 animate-pulse"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2">{t.aiServices.header}</h2>
                <p className="text-base opacity-95 text-center font-semibold">{t.aiServices.subtitle}</p>
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
            <div className="bg-gradient-to-r from-success/10 to-primary/10 p-4 rounded-xl border border-success/20">
              <h3 className="text-base font-bold text-foreground mb-2">{t.aiServices.modular}</h3>
              <p className="text-sm text-muted-foreground">{t.aiServices.modularDesc}</p>
            </div>
          </main>
        )}

        {/* Footer CTA */}
        <footer className="mt-8 bg-gradient-primary text-primary-foreground p-6 rounded-xl text-center mx-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">{t.footer.title}</h2>
          <p className="text-sm sm:text-base mb-5 opacity-90">{t.footer.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-success text-success-foreground px-6 py-3 rounded-lg font-semibold hover:bg-success/90 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              {t.footer.whatsapp}
            </a>
            <a
              href={getPhoneUrl()}
              className="bg-card text-primary px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {t.footer.call}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
