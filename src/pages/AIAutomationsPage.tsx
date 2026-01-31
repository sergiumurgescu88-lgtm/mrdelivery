import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { InteractiveStarBackground } from '@/components/InteractiveStarBackground';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { automationServices } from '@/data/automationServices';
import { 
  ArrowLeft, ChevronRight, Sparkles, Home, MessageSquare, Phone
} from 'lucide-react';
import { getWhatsAppUrl, getPhoneUrl } from '@/i18n/translations';
import FloatingSocialIcons from '@/components/FloatingSocialIcons';
import { RestaurantAuditForm } from '@/components/RestaurantAuditForm';

const AIAutomationsPage = () => {
  const { language, t } = useLanguage();

  const pageTitle = {
    ro: 'Automatizări AI Complete',
    en: 'Complete AI Automations',
    es: 'Automatizaciones IA Completas'
  };

  const pageDescription = {
    ro: 'Servicii complete de automatizări AI pentru orice tip de afacere. Implementare rapidă, ROI garantat.',
    en: 'Complete AI automation services for any business. Fast implementation, guaranteed ROI.',
    es: 'Servicios completos de automatización IA para cualquier negocio. Implementación rápida, ROI garantizado.'
  };

  const sectionTitle = {
    ro: 'Servicii complete de automatizări AI pentru afaceri',
    en: 'Complete AI automation services for businesses',
    es: 'Servicios completos de automatización IA para negocios'
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gray-950">
      <SEO 
        title={pageTitle[language] || pageTitle.ro} 
        description={pageDescription[language] || pageDescription.ro}
        url="https://mrdelivery.lovable.app/automatizari-ai"
        locale={language === 'ro' ? 'ro_RO' : language === 'es' ? 'es_ES' : 'en_US'}
      />
      
      <InteractiveStarBackground />
      <FloatingSocialIcons />

      <div className="max-w-4xl mx-auto px-3 sm:px-4 pt-6 pb-28 sm:py-8 relative z-10">
        {/* Header */}
        <header className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center gap-2 text-amber-200/70 hover:text-amber-100 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">
                {language === 'ro' ? 'Înapoi acasă' : language === 'es' ? 'Volver al inicio' : 'Back home'}
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
            <span className="text-amber-100 font-medium">
              {language === 'ro' ? 'Automatizări AI' : language === 'es' ? 'Automatizaciones IA' : 'AI Automations'}
            </span>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative mb-8">
          {/* Animated Border Container */}
          <div className="relative">
            <div 
              className="absolute -inset-[2px] rounded-3xl pointer-events-none"
              style={{
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
                animation: 'border-rotate 4s linear infinite',
              }}
            />
            
            <div className="relative p-6 sm:p-8 rounded-3xl bg-black/60 backdrop-blur-sm">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-amber-500/30">
                <Sparkles className="w-4 h-4" />
                {language === 'ro' ? '10 Soluții Specializate' : language === 'es' ? '10 Soluciones Especializadas' : '10 Specialized Solutions'}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-50 mb-3">
                {sectionTitle[language] || sectionTitle.ro}
              </h1>

              {/* Description */}
              <p className="text-lg text-amber-100/80 mb-6">
                {pageDescription[language] || pageDescription.ro}
              </p>

              {/* CTA */}
              <RestaurantAuditForm 
                trigger={
                  <Button className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 text-gray-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/25 transition-all">
                    {language === 'ro' ? 'Completează formularul' : language === 'es' ? 'Completa el formulario' : 'Fill out the form'}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                }
              />
            </div>
          </div>
        </section>

        {/* All 10 Automation Services Grid */}
        <section className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {automationServices.map((service, index) => {
              const Icon = service.icon;
              const title = service.title[language] || service.title.ro;
              const description = service.description[language] || service.description.ro;
              const benefits = service.benefits[language] || service.benefits.ro;
              
              return (
                <Link
                  key={service.id}
                  to={`/automatizare/${service.slug}`}
                  className="group block"
                >
                  <div className="relative h-full">
                    {/* Traveling light border effect */}
                    <div 
                      className="absolute -inset-[2px] rounded-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
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
                        animation: 'border-rotate 4s linear infinite',
                      }}
                    />
                    
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-5 rounded-2xl h-full flex flex-col transition-all duration-300 group-hover:bg-gray-900/90">
                      {/* Header with icon and number */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2.5 bg-gradient-to-br ${service.color} rounded-xl shadow-lg flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-amber-400/80 font-semibold mb-1">
                            #{index + 1}
                          </div>
                          <h3 className="font-bold text-amber-50 text-sm sm:text-base leading-tight line-clamp-2 group-hover:text-amber-200 transition-colors">
                            {title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-amber-100/60 mb-4 line-clamp-2 flex-grow">
                        {description}
                      </p>

                      {/* Stats */}
                      <div className="flex gap-3 mb-3">
                        {benefits.slice(0, 2).map((benefit, i) => (
                          <div key={i} className="text-center flex-1">
                            <div className="text-lg font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                              {benefit.stat}
                            </div>
                            <div className="text-[10px] text-amber-200/60 font-medium">
                              {benefit.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between pt-3 border-t border-amber-500/20">
                        <span className="text-xs text-amber-200/70">
                          {language === 'ro' ? 'De la' : language === 'es' ? 'Desde' : 'From'} {service.pricing.monthly}
                        </span>
                        <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative">
          {/* Animated Border */}
          <div 
            className="absolute -inset-[2px] rounded-2xl pointer-events-none"
            style={{
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
              animation: 'border-rotate 4s linear infinite',
            }}
          />
          
          <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-2 text-amber-50">
              {language === 'ro' ? 'Pregătit să automatizezi?' : language === 'es' ? '¿Listo para automatizar?' : 'Ready to automate?'}
            </h2>
            <p className="text-center text-amber-100/70 mb-6">
              {language === 'ro' ? 'Contactează-ne pentru o consultație gratuită' : language === 'es' ? 'Contáctanos para una consulta gratuita' : 'Contact us for a free consultation'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <RestaurantAuditForm 
                trigger={
                  <Button className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 text-gray-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
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
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-amber-200/50">
          <p>© 2025 MrDelivery. {language === 'ro' ? 'Toate drepturile rezervate.' : language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
        </footer>
      </div>
    </div>
  );
};

export default AIAutomationsPage;
