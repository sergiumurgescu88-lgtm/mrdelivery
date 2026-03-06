import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/i18n/translations';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ArrowLeft, Rocket, Video, Bot, Smartphone, Zap } from 'lucide-react';
import PoweredBySSociety from '@/components/PoweredBySSociety';

const seoData = {
  ro: {
    title: 'Servicii',
    description: 'Servicii complete de management platforme livrare, producție video AI, chatboți și automatizări pentru restaurante și afaceri HoReCa.',
    keywords: 'servicii restaurant, management Glovo, video AI, chatbot restaurant, automatizări HoReCa',
  },
  en: {
    title: 'Services',
    description: 'Complete delivery platform management, AI video production, chatbots and automation services for restaurants and businesses.',
    keywords: 'restaurant services, Glovo management, AI video, restaurant chatbot, business automation',
  },
  es: {
    title: 'Servicios',
    description: 'Gestión completa de plataformas de entrega, producción de video AI, chatbots y automatización para restaurantes y negocios.',
    keywords: 'servicios restaurante, gestión Glovo, video AI, chatbot restaurante, automatización negocios',
  }
};

const ServicesPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const seo = seoData[language];

  const services = [
    {
      icon: Rocket,
      title: t.services.standard.title,
      description: t.services.standard.subtitle,
    },
    {
      icon: Video,
      title: t.services.video.title,
      description: t.services.video.subtitle,
    },
    {
      icon: Bot,
      title: t.services.aiAgents.title,
      description: t.services.aiAgents.subtitle,
    },
    {
      icon: Smartphone,
      title: t.services.ugc.title,
      description: t.services.ugc.subtitle,
    },
    {
      icon: Zap,
      title: t.services.premium.title,
      description: t.services.premium.subtitle,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        url="https://mrdelivery.ro/services"
        locale={language === 'ro' ? 'ro_RO' : language === 'es' ? 'es_ES' : 'en_US'}
      />
      
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">{language === 'ro' ? 'Înapoi' : language === 'es' ? 'Atrás' : 'Back'}</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {language === 'ro' ? 'Serviciile Noastre' : language === 'es' ? 'Nuestros Servicios' : 'Our Services'}
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {language === 'ro' 
            ? 'Soluții complete pentru creșterea afacerii tale online' 
            : language === 'es' 
            ? 'Soluciones completas para hacer crecer tu negocio en línea'
            : 'Complete solutions to grow your online business'}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            {language === 'ro' ? 'Solicită Audit Gratuit' : language === 'es' ? 'Solicitar Auditoría Gratis' : 'Request Free Audit'}
          </Link>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 MrDelivery AI Agency. {language === 'ro' ? 'Toate drepturile rezervate.' : language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <PoweredBySSociety />
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
