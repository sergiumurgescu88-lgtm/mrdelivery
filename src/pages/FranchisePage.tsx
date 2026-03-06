import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import SEO from '@/components/SEO';
import { ArrowLeft, Check, X, Bot, Search, Mail, Calendar, MapPin, Zap, Loader2, User, Phone, Globe, Send, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import PoweredBySSociety from '@/components/PoweredBySSociety';

const franchiseTranslations = {
  ro: {
    seo: {
      title: 'Franciză MrDelivery - Job remote pentru vorbitori de engleză sau spaniolă',
      description: 'Lucrează de oriunde din lume, cu un sistem complet automatizat de transformare digitală pentru restaurante. Scalabilitate garantată până la 15.000+ € profit lunar.',
      keywords: 'franciză, MrDelivery, job remote, USA, UK, Spania, restaurante, marketing digital'
    },
    nav: {
      backToHome: 'Înapoi la pagina principală'
    },
    hero: {
      title: 'Franciza',
      brand: 'MrDelivery',
      subtitle: 'Job remote pentru vorbitorii de',
      countries: 'engleză sau spaniolă',
      royalty: 'Percepem doar 9% redevență - tu câștigi 91%',
      description: 'Lucrează de oriunde din lume, cu un sistem complet automatizat de transformare digitală pentru restaurante. Scalabilitate garantată până la',
      profit: '15.000+ € profit lunar',
      badges: ['100% remote', 'Bot auto-recrutare', 'ROI 30 zile', 'Piață exclusivă', 'Doar 9% redevență'],
      cta: 'Vreau să aleg piața mea',
      secondaryCta: 'Vezi modelul financiar',
      manualCta: 'Manual Franciză MrDelivery'
    },
    form: {
      title: 'Aplică pentru Franciză',
      subtitle: 'Completează formularul și te contactăm în 24h',
      name: 'Nume complet',
      email: 'Email',
      phone: 'Telefon / WhatsApp',
      country: 'Piața de interes',
      countryPlaceholder: 'Selectează piața',
      countries: ['🇺🇸 USA', '🇬🇧 UK', '🇪🇸 Spania'],
      submit: 'Trimite Aplicația',
      submitting: 'Se trimite...',
      success: 'Aplicația a fost trimisă! Te contactăm în curând.',
      error: 'A apărut o eroare. Încearcă din nou.',
      googleButton: 'Continuă cu Google',
      googleSubtext: 'Sau completează manual',
      orDivider: 'sau',
      ctaTitle: 'Pregătit să începi călătoria către',
      ctaHighlight: '15.000 €/lună?',
      ctaSubtitle: 'Completează formularul și echipa noastră te va contacta în maxim 24 de ore pentru a discuta despre oportunitatea de franciză.',
      ctaPromise: '✓ Răspuns garantat în 24h · ✓ Fără obligații · ✓ Consultanță gratuită'
    },
    opportunity: {
      title: 'Pentru cine este această',
      titleHighlight: 'oportunitate?',
      countries: [{
        flag: '🇺🇸  -  🇬🇧',
        question: 'Vorbești engleză?',
        action: 'Alege orice stat din USA sau oraș din UK',
        description: 'Cele mai mari și profitabile piețe. Restaurante dispuse să plătească premium pentru servicii digitale de calitate.'
      }, {
        flag: '🇪🇸',
        question: 'Vorbești spaniolă?',
        action: 'Alege orice oraș din Spania',
        description: 'Piață în plină expansiune digitală. Restaurante tradiționale care au nevoie urgentă de modernizare.'
      }]
    },
    workFromHome: {
      title: 'Lucrează de oriunde',
      titleHighlight: 'din lume',
      description: 'MrDelivery este prima platformă complet automatizată de transformare digitală pentru restaurante. Lucrezi 100% remote, de pe o plajă din Hawaii sau din confortul casei tale.',
      features: [{
        title: '100% remote',
        description: 'Lucrezi de oriunde, fără birou, fără deplasări'
      }, {
        title: 'Sistem AI complet',
        description: 'Chatboți, agenți vocali, marketing automat'
      }, {
        title: 'Producție video',
        description: 'Conținut viral și postare automată'
      }],
      machineTitle: 'Mașinăria lucrează pentru tine',
      machineDescription: 'Primești un sistem automat de recrutare clienți (bot) care lucrează non-stop și un model de afacere verificat, care se scalează de la solo la echipă, cu profituri predictibile.',
      botTitle: 'Botul tău lucrează 10h/zi',
      botDescription: 'La fiecare 2 minute trimite mesaje personalizate. 250-300 mesaje pe zi către owneri de restaurante și business-uri online. Este întregul tău departament de vânzări.'
    },
    financial: {
      title: 'Modelul financiar: clar și cu risc minim',
      subtitle: 'Lucrezi de oriunde din lume, cu venituri scalabile',
      items: [{
        value: '5.000 €',
        label: 'Licență franciză',
        description: 'Piața ta exclusivă'
      }, {
        value: 'Remote',
        label: '100% de oriunde',
        description: 'Chiar și de pe o plajă'
      }, {
        value: '2 PC',
        label: 'Echipament necesar',
        description: 'Unul pentru bot, unul pentru tine'
      }, {
        value: '30 zile',
        label: 'Garanție ROI',
        description: '*Sau prelungim suportul'
      }]
    },
    scalability: {
      title: 'Scalabilitate pas cu pas:',
      titleHighlight: 'de la solo la CEO',
      subtitle: 'Evoluția afacerii tale în 12 luni (100% remote)',
      phases: [{
        phase: 'Faza 1',
        period: '6 luni',
        title: 'Solo remote',
        hours: '8-10h/zi',
        structure: 'Lucrezi singur de oriunde',
        clients: '10-12 clienți din zona ta',
        revenue: '8.000 €',
        profit: '~5.780 €'
      }, {
        phase: 'Faza 2',
        period: 'x2',
        title: 'Prima echipă remote',
        hours: '4-6h/zi',
        structure: 'Tu + 1 colaborator remote',
        clients: '20 clienți din zona ta',
        revenue: '16.000 €',
        profit: '~10.160 €'
      }, {
        phase: 'Faza 3',
        period: 'x3+',
        title: 'Echipa completă',
        hours: '2-4h/zi',
        structure: 'Manager + 2 colaboratori',
        clients: '30+ clienți din zona ta',
        revenue: '24.000 €',
        profit: '14.040 - 15.000+ €'
      }],
      guarantee: '*Garanție: Recuperezi investiția de 5.000€ în prima lună de la primul client, sau prelungim suportul gratuit.'
    },
    secret: {
      title: 'Secretul',
      titleHighlight: 'succesului',
      subtitle: 'Botul automat de recrutare care lucrează pentru tine 10h/zi, la fiecare 2 minute.',
      howItWorks: 'Cum funcționează sistemul tău automat:',
      steps: [{
        icon: 'search',
        title: 'Caută restaurante',
        description: 'Scanează Google Maps și platforme pentru locații noi'
      }, {
        icon: 'mail',
        title: 'Extrage contacte',
        description: 'Obține automat email, telefon, WhatsApp'
      }, {
        icon: 'send',
        title: 'Trimite mesaje',
        description: '250-300 mesaje/zi către owneri de business-uri'
      }, {
        icon: 'calendar',
        title: 'Programează demo',
        description: 'Îți completează calendarul cu prezentări'
      }],
      results: 'Rezultate așteptate:',
      leads: '50-100',
      leadsLabel: 'lead-uri/lună',
      demos: '5-10',
      demosLabel: 'demo-uri/săptămână'
    },
    ideal: {
      title: 'Ești francizorul ideal?',
      subtitle: 'Pentru vorbitorii de engleză sau spaniolă care vor să lucreze de oriunde',
      workFromHome: {
        title: 'Lucrează de oriunde din lume',
        description: 'De pe o plajă din Hawaii, din Bali sau din confortul casei tale. Un job 100% remote, cu flexibilitate totală și venituri scalabile.'
      },
      needTitle: 'Ai nevoie de:',
      needItems: ['Să vorbești fluent engleză sau spaniolă', 'Mentalitate de antreprenor și dorința de a câștiga peste 10.000 €/lună', 'Disciplină și consistență pentru a lucra remote', '5.000 € pentru investiția inițială', '2 calculatoare: unul pentru bot (trimite 250-300 mesaje/zi), unul pentru tine'],
      notNeedTitle: 'Nu ai nevoie de:',
      notNeedItems: ['Echipă de vânzări', 'Birou fizic', 'Cunoștințe tehnice avansate', 'Contacte în HORECA', 'Experiență în restaurante']
    }
  },
  en: {
    seo: {
      title: 'MrDelivery Franchise - Remote job for English or Spanish speakers',
      description: 'Work from anywhere in the world, with a fully automated digital transformation system for restaurants. Guaranteed scalability up to €15,000+ monthly profit.',
      keywords: 'franchise, MrDelivery, remote job, USA, UK, Spain, restaurants, digital marketing'
    },
    nav: {
      backToHome: 'Back to home'
    },
    hero: {
      title: 'Franchise',
      brand: 'MrDelivery',
      subtitle: 'Remote job for speakers of',
      countries: 'English or Spanish',
      royalty: 'We charge only 9% royalty - you earn 91%',
      description: 'Work from anywhere in the world, with a fully automated digital transformation system for restaurants. Guaranteed scalability up to',
      profit: '€15,000+ monthly profit',
      badges: ['100% remote', 'Auto-recruiting bot', '30-day ROI', 'Exclusive market', 'Only 9% royalty'],
      cta: 'I want to choose my market',
      secondaryCta: 'See financial model',
      manualCta: 'MrDelivery Franchise Manual'
    },
    form: {
      title: 'Apply for Franchise',
      subtitle: 'Fill the form and we contact you within 24h',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      country: 'Market of interest',
      countryPlaceholder: 'Select market',
      countries: ['🇺🇸 USA', '🇬🇧 UK', '🇪🇸 Spain'],
      submit: 'Submit Application',
      submitting: 'Submitting...',
      success: 'Application sent! We will contact you soon.',
      error: 'An error occurred. Please try again.',
      googleButton: 'Continue with Google',
      googleSubtext: 'Or fill manually',
      orDivider: 'or',
      ctaTitle: 'Ready to start your journey to',
      ctaHighlight: '€15,000/month?',
      ctaSubtitle: 'Fill out the form and our team will contact you within 24 hours to discuss the franchise opportunity.',
      ctaPromise: '✓ Guaranteed response in 24h · ✓ No obligations · ✓ Free consultation'
    },
    opportunity: {
      title: 'Who is this',
      titleHighlight: 'opportunity for?',
      countries: [{
        flag: '🇺🇸  -  🇬🇧',
        question: 'Do you speak English?',
        action: 'Choose any state in USA or city in UK',
        description: 'The largest and most profitable markets. Restaurants willing to pay premium for quality digital services.'
      }, {
        flag: '🇪🇸',
        question: 'Do you speak Spanish?',
        action: 'Choose any city in Spain',
        description: 'Market in full digital expansion. Traditional restaurants urgently needing modernization.'
      }]
    },
    workFromHome: {
      title: 'Work from anywhere',
      titleHighlight: 'in the world',
      description: 'MrDelivery is the first fully automated digital transformation platform for restaurants. Work 100% remote, from a beach in Hawaii or from the comfort of your home.',
      features: [{
        title: '100% remote',
        description: 'Work from anywhere, no office, no commuting'
      }, {
        title: 'Complete AI system',
        description: 'Chatbots, voice agents, automated marketing'
      }, {
        title: 'Video production',
        description: 'Viral content and automatic posting'
      }],
      machineTitle: 'The machine works for you',
      machineDescription: 'You receive an automatic client recruitment system (bot) that works non-stop and a verified business model that scales from solo to team, with predictable profits.',
      botTitle: 'Your bot works 10h/day',
      botDescription: 'Every 2 minutes it sends personalized messages. 250-300 messages per day to restaurant and online business owners. It is your entire sales department.'
    },
    financial: {
      title: 'Financial model: clear and low risk',
      subtitle: 'Work from anywhere in the world, with scalable income',
      items: [{
        value: '€5,000',
        label: 'Franchise license',
        description: 'Your exclusive market'
      }, {
        value: 'Remote',
        label: '100% from anywhere',
        description: 'Even from a beach'
      }, {
        value: '2 PCs',
        label: 'Required equipment',
        description: 'One for bot, one for you'
      }, {
        value: '30 days',
        label: 'ROI guarantee',
        description: '*Or we extend support'
      }]
    },
    scalability: {
      title: 'Step by step scalability:',
      titleHighlight: 'from solo to CEO',
      subtitle: 'Your business evolution in 12 months (100% remote)',
      phases: [{
        phase: 'Phase 1',
        period: '6 months',
        title: 'Solo remote',
        hours: '8-10h/day',
        structure: 'Work alone from anywhere',
        clients: '10-12 clients in your area',
        revenue: '€8,000',
        profit: '~€5,780'
      }, {
        phase: 'Phase 2',
        period: 'x2',
        title: 'First remote team',
        hours: '4-6h/day',
        structure: 'You + 1 remote collaborator',
        clients: '20 clients in your area',
        revenue: '€16,000',
        profit: '~€10,160'
      }, {
        phase: 'Phase 3',
        period: 'x3+',
        title: 'Complete team',
        hours: '2-4h/day',
        structure: 'Manager + 2 collaborators',
        clients: '30+ clients in your area',
        revenue: '€24,000',
        profit: '€14,040 - 15,000+'
      }],
      guarantee: '*Guarantee: Recover your €5,000 investment in the first month from your first client, or we extend free support.'
    },
    secret: {
      title: 'The secret to',
      titleHighlight: 'success',
      subtitle: 'The automatic recruitment bot that works for you 10h/day, every 2 minutes.',
      howItWorks: 'How your automatic system works:',
      steps: [{
        icon: 'search',
        title: 'Search restaurants',
        description: 'Scans Google Maps and platforms for new locations'
      }, {
        icon: 'mail',
        title: 'Extract contacts',
        description: 'Automatically gets email, phone, WhatsApp'
      }, {
        icon: 'send',
        title: 'Send messages',
        description: '250-300 messages/day to business owners'
      }, {
        icon: 'calendar',
        title: 'Schedule demo',
        description: 'Fills your calendar with presentations'
      }],
      results: 'Expected results:',
      leads: '50-100',
      leadsLabel: 'leads/month',
      demos: '5-10',
      demosLabel: 'demos/week'
    },
    ideal: {
      title: 'Are you the ideal franchisee?',
      subtitle: 'For English or Spanish speakers who want to work from anywhere',
      workFromHome: {
        title: 'Work from anywhere in the world',
        description: 'From a beach in Hawaii, from Bali or from the comfort of your home. A 100% remote job, with total flexibility and scalable income.'
      },
      needTitle: 'You need:',
      needItems: ['To speak fluent English or Spanish', 'Entrepreneurial mindset and desire to earn over €10,000/month', 'Discipline and consistency to work remotely', '€5,000 for initial investment', '2 computers: one for the bot (sends 250-300 messages/day), one for you'],
      notNeedTitle: "You don't need:",
      notNeedItems: ['Sales team', 'Physical office', 'Advanced technical knowledge', 'Contacts in HORECA', 'Restaurant experience']
    }
  },
  es: {
    seo: {
      title: 'Franquicia MrDelivery - Trabajo remoto para hablantes de inglés o español',
      description: 'Trabaja desde cualquier parte del mundo, con un sistema de transformación digital totalmente automatizado para restaurantes. Escalabilidad garantizada hasta €15.000+ de ganancia mensual.',
      keywords: 'franquicia, MrDelivery, trabajo remoto, USA, UK, España, restaurantes, marketing digital'
    },
    nav: {
      backToHome: 'Volver a la página principal'
    },
    hero: {
      title: 'Franquicia',
      brand: 'MrDelivery',
      subtitle: 'Trabajo remoto para hablantes de',
      countries: 'inglés o español',
      royalty: 'Cobramos solo 9% de regalías - tú ganas el 91%',
      description: 'Trabaja desde cualquier parte del mundo, con un sistema de transformación digital totalmente automatizado para restaurantes. Escalabilidad garantizada hasta',
      profit: '€15.000+ de ganancia mensual',
      badges: ['100% remoto', 'Bot auto-reclutamiento', 'ROI 30 días', 'Mercado exclusivo', 'Solo 9% regalías'],
      cta: 'Quiero elegir mi mercado',
      secondaryCta: 'Ver modelo financiero',
      manualCta: 'Manual Franquicia MrDelivery'
    },
    form: {
      title: 'Solicitar Franquicia',
      subtitle: 'Completa el formulario y te contactamos en 24h',
      name: 'Nombre completo',
      email: 'Email',
      phone: 'Teléfono / WhatsApp',
      country: 'Mercado de interés',
      countryPlaceholder: 'Seleccionar mercado',
      countries: ['🇺🇸 USA', '🇬🇧 UK', '🇪🇸 España'],
      submit: 'Enviar Solicitud',
      submitting: 'Enviando...',
      success: '¡Solicitud enviada! Te contactaremos pronto.',
      error: 'Ocurrió un error. Inténtalo de nuevo.',
      googleButton: 'Continuar con Google',
      googleSubtext: 'O completa manualmente',
      orDivider: 'o',
      ctaTitle: '¿Listo para comenzar tu viaje hacia',
      ctaHighlight: '€15.000/mes?',
      ctaSubtitle: 'Completa el formulario y nuestro equipo te contactará en un máximo de 24 horas para discutir la oportunidad de franquicia.',
      ctaPromise: '✓ Respuesta garantizada en 24h · ✓ Sin obligaciones · ✓ Consulta gratuita'
    },
    opportunity: {
      title: '¿Para quién es esta',
      titleHighlight: 'oportunidad?',
      countries: [{
        flag: '🇺🇸  -  🇬🇧',
        question: '¿Hablas inglés?',
        action: 'Elige cualquier estado de USA o ciudad del UK',
        description: 'Los mercados más grandes y rentables. Restaurantes dispuestos a pagar premium por servicios digitales de calidad.'
      }, {
        flag: '🇪🇸',
        question: '¿Hablas español?',
        action: 'Elige cualquier ciudad de España',
        description: 'Mercado en plena expansión digital. Restaurantes tradicionales que necesitan urgentemente modernización.'
      }]
    },
    workFromHome: {
      title: 'Trabaja desde cualquier',
      titleHighlight: 'parte del mundo',
      description: 'MrDelivery es la primera plataforma de transformación digital totalmente automatizada para restaurantes. Trabajas 100% remoto, desde una playa en Hawaii o desde la comodidad de tu hogar.',
      features: [{
        title: '100% remoto',
        description: 'Trabajas desde cualquier lugar, sin oficina, sin desplazamientos'
      }, {
        title: 'Sistema IA completo',
        description: 'Chatbots, agentes vocales, marketing automático'
      }, {
        title: 'Producción de video',
        description: 'Contenido viral y publicación automática'
      }],
      machineTitle: 'La máquina trabaja para ti',
      machineDescription: 'Recibes un sistema automático de reclutamiento de clientes (bot) que trabaja sin parar y un modelo de negocio verificado que escala de solo a equipo, con ganancias predecibles.',
      botTitle: 'Tu bot trabaja 10h/día',
      botDescription: 'Cada 2 minutos envía mensajes personalizados. 250-300 mensajes al día a dueños de restaurantes y negocios online. Es todo tu departamento de ventas.'
    },
    financial: {
      title: 'Modelo financiero: claro y con riesgo mínimo',
      subtitle: 'Trabaja desde cualquier parte del mundo, con ingresos escalables',
      items: [{
        value: '5.000 €',
        label: 'Licencia franquicia',
        description: 'Tu mercado exclusivo'
      }, {
        value: 'Remoto',
        label: '100% desde cualquier lugar',
        description: 'Incluso desde una playa'
      }, {
        value: '2 PC',
        label: 'Equipo necesario',
        description: 'Uno para el bot, uno para ti'
      }, {
        value: '30 días',
        label: 'Garantía ROI',
        description: '*O extendemos el soporte'
      }]
    },
    scalability: {
      title: 'Escalabilidad paso a paso:',
      titleHighlight: 'de solo a CEO',
      subtitle: 'Evolución de tu negocio en 12 meses (100% remoto)',
      phases: [{
        phase: 'Fase 1',
        period: '6 meses',
        title: 'Solo remoto',
        hours: '8-10h/día',
        structure: 'Trabajas solo desde cualquier lugar',
        clients: '10-12 clientes en tu zona',
        revenue: '8.000 €',
        profit: '~5.780 €'
      }, {
        phase: 'Fase 2',
        period: 'x2',
        title: 'Primer equipo remoto',
        hours: '4-6h/día',
        structure: 'Tú + 1 colaborador remoto',
        clients: '20 clientes en tu zona',
        revenue: '16.000 €',
        profit: '~10.160 €'
      }, {
        phase: 'Fase 3',
        period: 'x3+',
        title: 'Equipo completo',
        hours: '2-4h/día',
        structure: 'Manager + 2 colaboradores',
        clients: '30+ clientes en tu zona',
        revenue: '24.000 €',
        profit: '14.040 - 15.000+ €'
      }],
      guarantee: '*Garantía: Recuperas tu inversión de 5.000€ en el primer mes desde tu primer cliente, o extendemos el soporte gratis.'
    },
    secret: {
      title: 'El secreto del',
      titleHighlight: 'éxito',
      subtitle: 'El bot automático de reclutamiento que trabaja para ti 10h/día, cada 2 minutos.',
      howItWorks: 'Cómo funciona tu sistema automático:',
      steps: [{
        icon: 'search',
        title: 'Buscar restaurantes',
        description: 'Escanea Google Maps y plataformas para nuevas ubicaciones'
      }, {
        icon: 'mail',
        title: 'Extraer contactos',
        description: 'Obtiene automáticamente email, teléfono, WhatsApp'
      }, {
        icon: 'send',
        title: 'Enviar mensajes',
        description: '250-300 mensajes/día a dueños de negocios'
      }, {
        icon: 'calendar',
        title: 'Programar demo',
        description: 'Llena tu calendario con presentaciones'
      }],
      results: 'Resultados esperados:',
      leads: '50-100',
      leadsLabel: 'leads/mes',
      demos: '5-10',
      demosLabel: 'demos/semana'
    },
    ideal: {
      title: '¿Eres el franquiciado ideal?',
      subtitle: 'Para hablantes de inglés o español que quieren trabajar desde cualquier lugar',
      workFromHome: {
        title: 'Trabaja desde cualquier parte del mundo',
        description: 'Desde una playa en Hawaii, desde Bali o desde la comodidad de tu hogar. Un trabajo 100% remoto, con flexibilidad total e ingresos escalables.'
      },
      needTitle: 'Necesitas:',
      needItems: ['Hablar inglés o español con fluidez', 'Mentalidad emprendedora y deseo de ganar más de 10.000 €/mes', 'Disciplina y consistencia para trabajar remotamente', '5.000 € para la inversión inicial', '2 computadoras: una para el bot (envía 250-300 mensajes/día), una para ti'],
      notNeedTitle: 'No necesitas:',
      notNeedItems: ['Equipo de ventas', 'Oficina física', 'Conocimientos técnicos avanzados', 'Contactos en HORECA', 'Experiencia en restaurantes']
    }
  }
};
const FranchisePage: React.FC = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const t = franchiseTranslations[language as keyof typeof franchiseTranslations] || franchiseTranslations.ro;
  
  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('franchise_applications')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          country: formData.country
        });

      if (error) throw error;
      
      setSubmitted(true);
      toast({
        title: '✅',
        description: t.form.success
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: t.form.error
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO title={t.seo.title} description={t.seo.description} keywords={t.seo.keywords} url="https://mrdelivery.lovable.app/franchise" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{t.nav.backToHome}</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section - Clean */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">Franchise Opportunity</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2">
            <span className="text-amber-400">{t.hero.title}</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            {t.hero.brand}
          </h2>
          
          {/* Royalty highlight */}
          <div className="inline-block mb-4 md:mb-6">
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 border border-emerald-500/50 rounded-2xl px-4 md:px-6 py-3 md:py-4 backdrop-blur-sm">
              <p className="text-emerald-400 font-bold text-sm sm:text-base md:text-lg lg:text-xl flex items-center gap-2 justify-center">
                <span className="text-xl md:text-2xl">💰</span>
                {t.hero.royalty}
              </p>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-2 px-2">
            {t.hero.subtitle} <span className="text-amber-400 font-semibold">{t.hero.countries}</span>
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-3xl mx-auto mb-4 md:mb-6 px-2 leading-relaxed">
            {t.hero.description} <span className="text-amber-400 font-semibold">{t.hero.profit}</span>
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 md:mb-8 px-2">
            {t.hero.badges.map((badge, index) => (
              <span key={index} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 border border-white/10 text-white/80 rounded-full text-[10px] sm:text-xs font-medium">
                ✓ {badge}
              </span>
            ))}
          </div>

          {/* CTA to Manual Franchise Page - Premium Animated Golden Border */}
          <Link 
            to="/franchise_manual"
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-5 sm:py-6 text-lg sm:text-xl font-black rounded-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Animated gradient border */}
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 p-[3px] animate-shimmer" style={{ backgroundSize: '200% 100%' }}>
              <span className="absolute inset-[3px] rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 group-hover:from-amber-600 group-hover:to-amber-700 transition-all duration-300"></span>
            </span>
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-2xl bg-amber-400/30 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></span>
            {/* Text content */}
            <span className="relative z-10 text-black font-black tracking-wide drop-shadow-sm">
              {t.hero.manualCta}
            </span>
          </Link>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 px-2">
            {t.opportunity.title} <span className="text-amber-400">{t.opportunity.titleHighlight}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.opportunity.countries.map((country, index) => <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:border-amber-400/50 transition-colors">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{country.flag}</div>
                <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-2">{country.question}</h3>
                <p className="text-white/90 font-medium mb-2 sm:mb-3 text-sm sm:text-base">{country.action}</p>
                <p className="text-white/60 text-xs sm:text-sm font-bold leading-relaxed">{country.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Work From Home Section */}
      <section className="py-12 md:py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                {t.workFromHome.title} <span className="text-amber-400">{t.workFromHome.titleHighlight}</span>
              </h2>
              <p className="text-white/70 mb-6 md:mb-8 text-sm sm:text-base leading-relaxed">{t.workFromHome.description}</p>
              
              <div className="space-y-4">
                {t.workFromHome.features.map((feature, index) => <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">{feature.title}</h4>
                      <p className="text-white/60 text-xs sm:text-sm">{feature.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
            
            {/* Right Column */}
            <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-3 sm:mb-4">{t.workFromHome.machineTitle}</h3>
              <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{t.workFromHome.machineDescription}</p>
              
              <div className="bg-black/30 rounded-lg p-3 sm:p-4">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                  {t.workFromHome.botTitle}
                </h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{t.workFromHome.botDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Model Section */}
      <section className="py-12 md:py-16 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 px-2 leading-tight">{t.financial.title}</h2>
          <p className="text-white/60 text-center mb-8 md:mb-12 text-sm sm:text-base">{t.financial.subtitle}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {t.financial.items.map((item, index) => <div key={index} className="bg-amber-400/10 border border-amber-400/40 rounded-xl p-3 sm:p-4 md:p-6 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-amber-400 mb-1 sm:mb-2">{item.value}</div>
                <div className="font-semibold text-white mb-1 text-xs sm:text-sm md:text-base">{item.label}</div>
                <div className="text-white/50 text-[10px] sm:text-xs md:text-sm">{item.description}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Scalability Section */}
      <section className="py-12 md:py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 px-2 leading-tight">
            {t.scalability.title} <span className="text-amber-400">{t.scalability.titleHighlight}</span>
          </h2>
          <p className="text-white/60 text-center mb-8 md:mb-12 text-sm sm:text-base">{t.scalability.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {t.scalability.phases.map((phase, index) => <div key={index} className={`rounded-xl p-4 sm:p-6 ${index === 1 ? 'bg-amber-400 text-black' : 'bg-white/5 border border-white/10'}`}>
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <span className={`text-xs sm:text-sm font-bold ${index === 1 ? 'text-black/70' : 'text-amber-400'}`}>{phase.phase}</span>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium ${index === 1 ? 'bg-black/20 text-black' : 'bg-white/10 text-white/70'}`}>{phase.period}</span>
                </div>
                
                <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${index === 1 ? 'text-black' : 'text-white'}`}>{phase.title}</h3>
                
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm mb-4 sm:mb-6">
                  <p className={index === 1 ? 'text-black/70' : 'text-white/60'}>⏰ {phase.hours}</p>
                  <p className={index === 1 ? 'text-black/70' : 'text-white/60'}>👤 {phase.structure}</p>
                  <p className={index === 1 ? 'text-black/70' : 'text-white/60'}>🏢 {phase.clients}</p>
                </div>
                
                <div className={`pt-3 sm:pt-4 border-t ${index === 1 ? 'border-black/20' : 'border-white/10'}`}>
                  <div className={`text-xl sm:text-2xl font-black ${index === 1 ? 'text-black' : 'text-white'}`}>{phase.revenue}</div>
                  <div className={`text-xs sm:text-sm ${index === 1 ? 'text-black/70' : 'text-white/50'}`}>{phase.profit}</div>
                </div>
              </div>)}
          </div>
          
          <p className="text-center text-white/50 text-xs sm:text-sm mt-6 sm:mt-8 max-w-2xl mx-auto px-2 leading-relaxed">{t.scalability.guarantee}</p>
        </div>
      </section>

      {/* Secret to Success Section */}
      <section className="py-12 md:py-16 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="bg-amber-400/5 border border-amber-400/30 rounded-2xl p-5 sm:p-8 md:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 leading-tight">
              {t.secret.title} <span className="text-amber-400">{t.secret.titleHighlight}</span>
            </h2>
            <p className="text-white/70 text-center mb-8 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">{t.secret.subtitle}</p>
            
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center mb-6 md:mb-8">{t.secret.howItWorks}</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 md:mb-12">
              {t.secret.steps.map((step, index) => <div key={index} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-400/20 border border-amber-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    {step.icon === 'search' && <Search className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />}
                    {step.icon === 'mail' && <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />}
                    {step.icon === 'send' && <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />}
                    {step.icon === 'calendar' && <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />}
                  </div>
                  <h4 className="font-semibold text-white mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">{step.title}</h4>
                  <p className="text-white/60 text-[10px] sm:text-xs md:text-sm leading-relaxed">{step.description}</p>
                </div>)}
            </div>
            
            <div className="bg-black/30 rounded-xl p-4 sm:p-6">
              <h4 className="text-center font-semibold mb-4 sm:mb-6 text-sm sm:text-base">{t.secret.results}</h4>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-400">{t.secret.leads}</div>
                  <div className="text-white/60 text-xs sm:text-sm">{t.secret.leadsLabel}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-400">{t.secret.demos}</div>
                  <div className="text-white/60 text-xs sm:text-sm">{t.secret.demosLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Franchisee Section */}
      <section className="py-12 md:py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4 px-2">{t.ideal.title}</h2>
          <p className="text-white/60 text-center mb-8 md:mb-12 text-sm sm:text-base">{t.ideal.subtitle}</p>
          
          {/* Work From Home Banner */}
          <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-4 sm:p-6 mb-8 md:mb-12 text-center">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto mb-2 sm:mb-3" />
            <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-2">{t.ideal.workFromHome.title}</h3>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">{t.ideal.workFromHome.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Need */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-emerald-400 mb-4 sm:mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                {t.ideal.needTitle}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {t.ideal.needItems.map((item, index) => <li key={index} className="flex items-start gap-2 sm:gap-3 text-white/80 text-sm sm:text-base">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>)}
              </ul>
            </div>
            
            {/* Not Need */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-4 sm:mb-6 flex items-center gap-2">
                <X className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                {t.ideal.notNeedTitle}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {t.ideal.notNeedItems.map((item, index) => <li key={index} className="flex items-start gap-2 sm:gap-3 text-white/80 text-sm sm:text-base">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-form" className="py-12 md:py-20 px-4 border-t border-white/10 bg-gradient-to-b from-black to-amber-950/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4 sm:mb-6">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-emerald-400 text-xs sm:text-sm font-medium">
                  {language === 'ro' ? 'Ultimul pas' : language === 'en' ? 'Final step' : 'Último paso'}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-2 leading-tight">
                {t.form.ctaTitle} <span className="text-amber-400">{t.form.ctaHighlight}</span>
              </h2>
              
              <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-3 md:mb-4 px-2 leading-relaxed">
                {t.form.ctaSubtitle}
              </p>
              
              <p className="text-emerald-400/80 text-xs sm:text-sm px-2">
                {t.form.ctaPromise}
              </p>
            </div>

            {/* Form Card */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/30 via-emerald-400/30 to-amber-400/30 rounded-3xl blur-2xl opacity-40"></div>
              
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                      <Check className="w-12 h-12 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.form.success}</h3>
                    <p className="text-white/60 text-lg">🚀</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left side - Form info */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">{t.form.title}</h3>
                      <p className="text-white/60">{t.form.subtitle}</p>
                      
                      <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-3 text-white/80">
                          <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-amber-400" />
                          </div>
                          <span>{language === 'ro' ? 'Piață exclusivă garantată' : language === 'en' ? 'Guaranteed exclusive market' : 'Mercado exclusivo garantizado'}</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/80">
                          <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-amber-400" />
                          </div>
                          <span>{language === 'ro' ? 'Training complet inclus' : language === 'en' ? 'Complete training included' : 'Formación completa incluida'}</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/80">
                          <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-amber-400" />
                          </div>
                          <span>{language === 'ro' ? 'Suport continuu 24/7' : language === 'en' ? '24/7 continuous support' : 'Soporte continuo 24/7'}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name-bottom" className="text-white/80 text-sm">{t.form.name}</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                          <Input
                            id="name-bottom"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="h-12 pl-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus:border-amber-400/50 focus:ring-amber-400/20"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email-bottom" className="text-white/80 text-sm">{t.form.email}</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                          <Input
                            id="email-bottom"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="h-12 pl-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus:border-amber-400/50 focus:ring-amber-400/20"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone-bottom" className="text-white/80 text-sm">{t.form.phone}</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                          <Input
                            id="phone-bottom"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            className="h-12 pl-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus:border-amber-400/50 focus:ring-amber-400/20"
                            placeholder="+1 234 567 890"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country-bottom" className="text-white/80 text-sm">{t.form.country}</Label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                          <select
                            id="country-bottom"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            required
                            className="w-full h-12 pl-11 pr-4 bg-white/5 border border-white/10 text-white rounded-xl focus:border-amber-400/50 focus:ring-amber-400/20 focus:outline-none appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-gray-900">{t.form.countryPlaceholder}</option>
                            {t.form.countries.map((country, index) => (
                              <option key={index} value={country} className="bg-gray-900">{country}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 mt-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:shadow-xl"
                      >
                        {loading ? (
                          <Loader2 className="h-5 w-5 animate-spin mr-2" />
                        ) : (
                          <Send className="h-5 w-5 mr-2" />
                        )}
                        {loading ? t.form.submitting : t.form.submit}
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-4">
        <PoweredBySSociety />
      </div>
    </div>
  );
};

export default FranchisePage;