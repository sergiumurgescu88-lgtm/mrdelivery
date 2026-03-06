import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ArrowLeft, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import PoweredBySSociety from '@/components/PoweredBySSociety';
import Footer from '@/components/Footer';

const seoData = {
  ro: {
    title: 'Contact',
    description: 'Contactează MrDelivery pentru servicii de management platforme livrare, video AI și automatizări pentru restaurante. Răspundem în 24 ore.',
    keywords: 'contact MrDelivery, agenție restaurante România, consultanță HoReCa, marketing restaurant contact',
  },
  en: {
    title: 'Contact',
    description: 'Contact MrDelivery for delivery platform management, AI video and automation services for restaurants. We respond within 24 hours.',
    keywords: 'contact MrDelivery, restaurant agency, HoReCa consulting, restaurant marketing contact',
  },
  es: {
    title: 'Contacto',
    description: 'Contacta MrDelivery para gestión de plataformas de entrega, video AI y automatización para restaurantes. Respondemos en 24 horas.',
    keywords: 'contacto MrDelivery, agencia restaurantes, consultoría HoReCa, marketing restaurante contacto',
  }
};

const ContactPage = () => {
  const { language } = useLanguage();
  const seo = seoData[language];

  const contactInfo = [
    {
      icon: Phone,
      label: language === 'ro' ? 'Telefon' : language === 'es' ? 'Teléfono' : 'Phone',
      value: '+40 768 676 141',
      href: 'tel:+40768676141',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@mrdelivery.ro',
      href: 'mailto:contact@mrdelivery.ro',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+40 768 676 141',
      href: 'https://wa.me/40768676141',
    },
    {
      icon: MapPin,
      label: language === 'ro' ? 'Locație' : language === 'es' ? 'Ubicación' : 'Location',
      value: 'România',
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        url="https://mrdelivery.ro/contact"
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
          {language === 'ro' ? 'Contactează-ne' : language === 'es' ? 'Contáctanos' : 'Contact Us'}
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {language === 'ro' 
            ? 'Suntem aici să te ajutăm. Răspundem în maximum 24 de ore.' 
            : language === 'es' 
            ? 'Estamos aquí para ayudarte. Respondemos en máximo 24 horas.'
            : 'We\'re here to help. We respond within 24 hours.'}
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h2 className="text-lg font-semibold mb-2">{item.label}</h2>
              {item.href ? (
                <a 
                  href={item.href}
                  className="text-xl text-primary hover:underline"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-xl text-muted-foreground">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            {language === 'ro' 
              ? 'Sau solicită un audit gratuit direct pe pagina principală' 
              : language === 'es' 
              ? 'O solicita una auditoría gratuita directamente en la página principal'
              : 'Or request a free audit directly on the main page'}
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            {language === 'ro' ? 'Solicită Audit Gratuit' : language === 'es' ? 'Solicitar Auditoría Gratis' : 'Request Free Audit'}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
