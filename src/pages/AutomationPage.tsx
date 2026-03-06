import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { InteractiveStarBackground } from '@/components/InteractiveStarBackground';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { getAutomationBySlug } from '@/data/automationServices';
import { 
  ArrowLeft, Check, MessageSquare, Phone, ChevronRight,
  Calendar, Bell, Smartphone, BarChart, Users, Package, Star, TrendingUp,
  FileText, Shield, CreditCard, Clock, QrCode, ShoppingCart, Brain, Target,
  FileSearch, Cog, GitBranch, Eye, Gift, Layers, Globe, RefreshCw,
  Zap, Database, MessageCircle, Sparkles, Mail, Home
} from 'lucide-react';
import { getWhatsAppUrl, getPhoneUrl } from '@/i18n/translations';
import FloatingSocialIcons from '@/components/FloatingSocialIcons';
import { RestaurantAuditForm } from '@/components/RestaurantAuditForm';
import PoweredBySSociety from '@/components/PoweredBySSociety';
import Footer from '@/components/Footer';

const iconMap: { [key: string]: any } = {
  Calendar, Bell, Smartphone, BarChart, Users, Package, Star, TrendingUp,
  FileText, Shield, CreditCard, Clock, QrCode, ShoppingCart, Brain, Target,
  FileSearch, Cog, GitBranch, Eye, Gift, Layers, Globe, RefreshCw,
  Zap, Database, MessageCircle, Sparkles, Mail, Home
};

const AutomationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  
  const service = getAutomationBySlug(slug || '');
  
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-amber-50 mb-4">
            {language === 'ro' ? 'Serviciu negăsit' : language === 'es' ? 'Servicio no encontrado' : 'Service not found'}
          </h1>
          <Link to="/">
            <Button className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-gray-950 font-bold">
              {language === 'ro' ? 'Înapoi acasă' : language === 'es' ? 'Volver al inicio' : 'Back home'}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const title = service.title[language] || service.title.ro;
  const subtitle = service.subtitle[language] || service.subtitle.ro;
  const description = service.description[language] || service.description.ro;
  const badge = service.badge[language] || service.badge.ro;
  const benefits = service.benefits[language] || service.benefits.ro;
  const features = service.features[language] || service.features.ro;
  const useCases = service.useCases[language] || service.useCases.ro;

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gray-950">
      <SEO 
        title={title} 
        description={description}
        url={`https://mrdelivery.lovable.app/automatizare/${slug}`}
        locale={language === 'ro' ? 'ro_RO' : language === 'es' ? 'es_ES' : 'en_US'}
      />
      
      <InteractiveStarBackground />
      <FloatingSocialIcons />

      <div className="max-w-4xl mx-auto px-3 sm:px-4 pt-6 pb-28 sm:py-8 relative z-10">
        {/* Header */}
        <header className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Link to="/?tab=ai" className="flex items-center gap-2 text-amber-200/70 hover:text-amber-100 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">
                {language === 'ro' ? 'Automatizări AI' : language === 'es' ? 'Automatizaciones IA' : 'AI Automations'}
              </span>
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-amber-200/60 mb-6">
            <Link to="/" className="hover:text-amber-100 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              {language === 'ro' ? 'Acasă' : language === 'es' ? 'Inicio' : 'Home'}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/?tab=ai" className="hover:text-amber-100 transition-colors">
              {language === 'ro' ? 'Automatizare' : language === 'es' ? 'Automatización' : 'Automation'}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-amber-100 font-medium">{title}</span>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative mb-8">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-amber-600/10 rounded-3xl" />
          
          <div className="relative p-6 sm:p-8 rounded-3xl border border-amber-500/30 backdrop-blur-sm bg-gray-900/60">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-amber-500/30">
              <Sparkles className="w-4 h-4" />
              {badge}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-50 mb-3">
              {title.split(' ').map((word, i) => 
                i > 0 ? <span key={i} className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent"> {word}</span> : word
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-amber-100/80 mb-6">{description}</p>

            {/* CTA Button */}
            <RestaurantAuditForm 
              trigger={
                <Button className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 text-gray-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/25 transition-all">
                  {language === 'ro' ? 'Completează formularul' : language === 'es' ? 'Completa el formulario' : 'Fill out the form'}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              }
            />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    {benefit.stat}
                  </div>
                  <div className="text-xs sm:text-sm text-amber-200/70 font-medium">
                    {benefit.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-50 mb-6 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/25">
              <Check className="w-5 h-5 text-gray-950" />
            </div>
            {language === 'ro' ? 'Funcționalități Complete' : language === 'es' ? 'Funcionalidades Completas' : 'Complete Features'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const FeatureIcon = iconMap[feature.icon] || Check;
              return (
                <div 
                  key={index}
                  className="bg-gray-900/60 backdrop-blur-sm p-5 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/25 flex-shrink-0">
                      <FeatureIcon className="w-5 h-5 text-gray-950" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-50 mb-1">{feature.title}</h3>
                      <p className="text-sm text-amber-100/70">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-50 mb-6 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/25">
              <Target className="w-5 h-5 text-gray-950" />
            </div>
            {language === 'ro' ? 'Perfect pentru' : language === 'es' ? 'Perfecto para' : 'Perfect for'}
          </h2>
          
          <div className="bg-gray-900/60 backdrop-blur-sm p-5 rounded-2xl border border-amber-500/20">
            <div className="flex flex-wrap gap-3">
              {useCases.map((useCase, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 text-amber-100 rounded-full text-sm font-medium border border-amber-500/30"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-50 mb-6 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/25">
              <CreditCard className="w-5 h-5 text-gray-950" />
            </div>
            {language === 'ro' ? 'Investiție și Returnare' : language === 'es' ? 'Inversión y Retorno' : 'Investment & Returns'}
          </h2>
          
          <div className="relative overflow-hidden rounded-2xl border-2 border-amber-500/40 p-6 sm:p-8 bg-gray-900/60 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-yellow-500/5 to-amber-600/5" />
            
            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-xs text-amber-200/60 mb-1">
                  {language === 'ro' ? 'Setup' : 'Setup'}
                </div>
                <div className="text-lg sm:text-xl font-bold text-amber-50">
                  {service.pricing.setup}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-amber-200/60 mb-1">
                  {language === 'ro' ? 'Lunar' : language === 'es' ? 'Mensual' : 'Monthly'}
                </div>
                <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  {service.pricing.monthly}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-amber-200/60 mb-1">
                  {language === 'ro' ? 'Implementare' : language === 'es' ? 'Implementación' : 'Implementation'}
                </div>
                <div className="text-lg sm:text-xl font-bold text-amber-50">
                  {service.pricing.implementation}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-amber-200/60 mb-1">ROI</div>
                <div className="text-lg sm:text-xl font-bold text-emerald-400">
                  {service.pricing.roi}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border-2 border-amber-500/40 p-6 sm:p-8 rounded-2xl relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-to-b from-amber-500/20 to-transparent blur-3xl" />
          
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2 text-amber-50 relative z-10">
            {language === 'ro' ? 'Pregătit să automatizezi?' : language === 'es' ? '¿Listo para automatizar?' : 'Ready to automate?'}
          </h2>
          <p className="text-center text-amber-100/70 mb-6 relative z-10">
            {language === 'ro' ? 'Contactează-ne pentru o consultație gratuită' : language === 'es' ? 'Contáctanos para una consulta gratuita' : 'Contact us for a free consultation'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
            <RestaurantAuditForm 
              trigger={
                <Button className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 text-gray-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  {language === 'ro' ? 'Completează Formular' : language === 'es' ? 'Completa Formulario' : 'Fill Form'}
                </Button>
              }
            />
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp
            </a>
            <a 
              href={getPhoneUrl()}
              className="bg-gray-800 hover:bg-gray-700 text-amber-100 border border-amber-500/30 px-6 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {language === 'ro' ? 'Sună-ne' : language === 'es' ? 'Llámanos' : 'Call us'}
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AutomationPage;
