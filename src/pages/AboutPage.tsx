import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ArrowLeft, Target, Users, Lightbulb, Award } from 'lucide-react';

const seoData = {
  ro: {
    title: 'Despre Noi',
    description: 'MrDelivery este o agenție AI specializată în management platforme livrare și automatizări pentru restaurante din România.',
    keywords: 'despre MrDelivery, agenție AI România, echipă marketing restaurant, management platforme livrare',
  },
  en: {
    title: 'About Us',
    description: 'MrDelivery is an AI agency specialized in delivery platform management and automation for restaurants worldwide.',
    keywords: 'about MrDelivery, AI agency, restaurant marketing team, delivery platform management',
  },
  es: {
    title: 'Sobre Nosotros',
    description: 'MrDelivery es una agencia de IA especializada en gestión de plataformas de entrega y automatización para restaurantes.',
    keywords: 'sobre MrDelivery, agencia IA, equipo marketing restaurante, gestión plataformas entrega',
  }
};

const AboutPage = () => {
  const { language } = useLanguage();
  const seo = seoData[language];

  const values = [
    {
      icon: Target,
      title: language === 'ro' ? 'Misiunea Noastră' : language === 'es' ? 'Nuestra Misión' : 'Our Mission',
      description: language === 'ro' 
        ? 'Ajutăm restaurantele să crească vânzările online prin tehnologie AI și management profesionist.'
        : language === 'es'
        ? 'Ayudamos a los restaurantes a aumentar las ventas en línea a través de tecnología AI y gestión profesional.'
        : 'We help restaurants grow online sales through AI technology and professional management.',
    },
    {
      icon: Lightbulb,
      title: language === 'ro' ? 'Inovație' : language === 'es' ? 'Innovación' : 'Innovation',
      description: language === 'ro' 
        ? 'Folosim cele mai noi tehnologii AI pentru video, chatboți și automatizări.'
        : language === 'es'
        ? 'Utilizamos las últimas tecnologías de IA para video, chatbots y automatización.'
        : 'We use the latest AI technologies for video, chatbots and automation.',
    },
    {
      icon: Users,
      title: language === 'ro' ? 'Parteneriat' : language === 'es' ? 'Asociación' : 'Partnership',
      description: language === 'ro' 
        ? 'Tratăm fiecare client ca un partener pe termen lung, nu doar un proiect.'
        : language === 'es'
        ? 'Tratamos a cada cliente como un socio a largo plazo, no solo un proyecto.'
        : 'We treat each client as a long-term partner, not just a project.',
    },
    {
      icon: Award,
      title: language === 'ro' ? 'Rezultate' : language === 'es' ? 'Resultados' : 'Results',
      description: language === 'ro' 
        ? 'Ne măsurăm succesul prin creșterea vânzărilor și satisfacția clienților noștri.'
        : language === 'es'
        ? 'Medimos nuestro éxito por el crecimiento de ventas y la satisfacción de nuestros clientes.'
        : 'We measure our success by sales growth and customer satisfaction.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        url="https://mrdelivery.ro/about"
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
          {language === 'ro' ? 'Despre MrDelivery' : language === 'es' ? 'Sobre MrDelivery' : 'About MrDelivery'}
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          {language === 'ro' 
            ? 'Suntem o agenție AI dedicată creșterii afacerilor din industria HoReCa prin soluții digitale inovatoare și management profesionist al platformelor de livrare.' 
            : language === 'es' 
            ? 'Somos una agencia de IA dedicada al crecimiento de negocios en la industria HoReCa a través de soluciones digitales innovadoras y gestión profesional de plataformas de entrega.'
            : 'We are an AI agency dedicated to growing HoReCa businesses through innovative digital solutions and professional delivery platform management.'}
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <value.icon className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-3">{value.title}</h2>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            {language === 'ro' ? 'Contactează-ne' : language === 'es' ? 'Contáctanos' : 'Contact Us'}
          </Link>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 MrDelivery AI Agency. {language === 'ro' ? 'Toate drepturile rezervate.' : language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
