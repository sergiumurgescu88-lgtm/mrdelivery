import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import SEO from '@/components/SEO';
import { 
  ArrowLeft,
  Globe,
  Bot,
  Video,
  TrendingUp,
  MessageSquare,
  Search,
  Mail,
  Send,
  Calendar,
  Check,
  X,
  Phone,
  Sparkles
} from 'lucide-react';

const franchiseTranslations = {
  ro: {
    seo: {
      title: 'Franciză MrDelivery',
      description: 'Lucrează de acasă, în propriul oraș, cu un sistem complet automatizat de transformare digitală pentru restaurante. Scalabilitate garantată până la 15.000+ € profit lunar.',
      keywords: 'franciză, MrDelivery, job remote, USA, UK, Spania, restaurante, marketing digital'
    },
    nav: {
      backToHome: 'Înapoi la Pagina Principală'
    },
    hero: {
      title: 'FRANC',
      titleHighlight: 'IZA',
      brand: 'MrDelivery',
      subtitle: 'Job Remote pentru Nativi din',
      countries: ['USA', 'UK', 'Spania'],
      description: 'Lucrează de acasă, în propriul oraș, cu un sistem complet automatizat de transformare digitală pentru restaurante. Scalabilitate garantată până la',
      profit: '15.000+ € profit lunar',
      badges: ['100% Remote', 'BOT Auto-Recrutare', 'ROI 30 Zile', 'Piață Exclusivă'],
      cta: 'VREAU SĂ ALEG PIAȚA MEA',
      secondaryCta: 'VEZI MODELUL FINANCIAR'
    },
    opportunity: {
      title: 'Pentru Cine Este Această',
      titleHighlight: 'Oportunitate?',
      countries: [
        {
          flag: '🇺🇸',
          question: 'Ești american?',
          action: 'Alege orice stat din USA',
          description: 'Piața cea mai mare și mai profitabilă. Restaurante dispuse să plătească premium pentru servicii digitale de calitate.'
        },
        {
          flag: '🇬🇧',
          question: 'Ești britanic?',
          action: 'Alege orice oraș din UK',
          description: 'Piață matură cu restaurante care caută soluții digitale complete și profesioniste.'
        },
        {
          flag: '🇪🇸',
          question: 'Ești spaniol?',
          action: 'Alege orice oraș din Spania',
          description: 'Piață în plină expansiune digitală. Restaurante tradiționale care au nevoie urgentă de modernizare.'
        }
      ]
    },
    workFromHome: {
      title: 'Lucrează de Acasă',
      titleHighlight: 'în Propriul Oraș',
      description: 'MrDelivery este prima platformă complet automatizată de transformare digitală pentru restaurante. Lucrezi 100% remote, din confortul casei tale, pentru restaurante din zona ta.',
      features: [
        { title: '100% Remote', description: 'Lucrezi de acasă, fără birou, fără deplasări' },
        { title: 'Sistem AI Complet', description: 'Chatboți, agenți vocali, marketing automat' },
        { title: 'Producție Video', description: 'Conținut viral și postare automată' }
      ],
      machineTitle: 'Mașinăria lucrează pentru TINE',
      machineDescription: 'Primești un sistem automat de recrutare clienți (BOT) care lucrează non-stop și un model de afacere verificat, care se scalează de la solo la echipă, cu profituri predictibile.',
      botTitle: 'BOT-ul tău lucrează 24/7',
      botDescription: 'La fiecare 2 minute, găsește restaurante noi în zona ta, extrage contacte și trimite mesaje personalizate. Este întregul tău departament de vânzări.'
    },
    financial: {
      title: 'Modelul Financiar: Clar și Cu Risc Minim',
      subtitle: 'Lucrezi de acasă, în propriul oraș, cu venituri scalabile',
      items: [
        { value: '5.000 €', label: 'Licență franciză', description: 'Piața ta exclusivă' },
        { value: 'REMOTE', label: '100% de acasă', description: 'Fără birou, fără deplasări' },
        { value: '2 PC', label: 'Echipament necesar', description: 'Pe care le deții deja' },
        { value: '30 ZILE', label: 'Garanție ROI', description: '*Sau prelungim suportul' }
      ]
    },
    scalability: {
      title: 'Scalabilitate Pas cu Pas: De la Solo la CEO',
      subtitle: 'Evoluția afacerii tale în 12 luni (100% remote)',
      phases: [
        {
          phase: 'FAZA 1',
          title: 'Solo Remote',
          period: 'Lunile 1-6',
          hours: '8-10h/zi',
          structure: 'Lucrezi singur de acasă',
          clients: '10-12 clienți din zona ta',
          revenue: '8.000 €',
          revenueLabel: 'venit lunar',
          profit: '~5.780 €',
          profitLabel: 'profit net/lună'
        },
        {
          phase: 'FAZA 2',
          title: 'Prima Echipă Remote',
          period: 'La 20 de clienți',
          hours: '4-6h/zi',
          structure: 'Tu + 1 colaborator remote',
          clients: '20 clienți din zona ta',
          revenue: '16.000 €',
          revenueLabel: 'venit lunar',
          profit: '~10.160 €',
          profitLabel: 'profit net/lună'
        },
        {
          phase: 'FAZA 3',
          title: 'Echipa Completă',
          period: 'La 30+ clienți',
          hours: '2-4h/zi',
          structure: 'Manager + 2 colaboratori',
          clients: '30+ clienți din zona ta',
          revenue: '24.000 €',
          revenueLabel: 'venit lunar',
          profit: '14.040 - 15.000+ €',
          profitLabel: 'profit net/lună'
        }
      ],
      guarantee: '*Garanție: Recuperezi investiția de 5.000€ în prima lună de la primul client, sau prelungim suportul gratuit.'
    },
    secret: {
      title: 'Secretul Succesului',
      subtitle: 'BOT-ul automat de recrutare care lucrează pentru tine 24/7, la fiecare 2 minute.',
      howItWorks: 'Cum funcționează sistemul tău automat:',
      steps: [
        { number: '1', title: 'Caută Restaurante', description: 'Scanează Google Maps și platforme pentru locații noi' },
        { number: '2', title: 'Extrage Contacte', description: 'Obține automat email, telefon, WhatsApp' },
        { number: '3', title: 'Trimite Mesaje', description: 'Mesaje personalizate în 12 limbi' },
        { number: '4', title: 'Programează Demo', description: 'Îți completează calendarul cu prezentări' }
      ],
      results: 'Rezultate așteptate:',
      leads: '50-100',
      leadsLabel: 'lead-uri/lună',
      demos: '5-10',
      demosLabel: 'demo-uri/săptămână'
    },
    idealFranchisee: {
      title: 'Ești Francizorul Ideal?',
      subtitle: 'Pentru nativii din USA, UK și Spania care vor să lucreze de acasă',
      workFromHome: {
        title: 'Lucrează de Acasă, în Propriul Oraș',
        description: 'Stai acasă, lucrezi la orele tale și servești restaurante din zona ta. Un job 100% remote, cu flexibilitate totală și venituri scalabile.'
      },
      needTitle: 'Ai nevoie de:',
      needItems: [
        'Să fii rezident în USA, UK sau Spania',
        'Mentalitate de antreprenor și dorința de a câștiga peste 10.000 €/lună',
        'Disciplină și consistență pentru a lucra de acasă',
        '5.000 € pentru investiția inițială și 2 calculatoare',
        '3-4 ore pe zi (flexibil) pentru a gestiona afacerea în primele luni'
      ],
      notNeedTitle: 'Nu ai nevoie de:',
      notNeedItems: [
        'Echipă de vânzări',
        'Birou fizic',
        'Cunoștințe tehnice avansate',
        'Contacte în HORECA',
        'Experiență în restaurante'
      ]
    },
    limitedOffer: {
      title: 'Oferta Limitată de Lansare',
      subtitle: 'Pentru primii 3 francizați care semnează',
      items: [
        { title: 'Licență Redusă', value: '3.500 € (în loc de 5.000 €)' },
        { title: '3 Luni Gratis', value: 'Fără redevență (economisești 2.100 €)' },
        { title: 'Training Premium', value: '1-la-1 cu Fondatorul' },
        { title: 'Piață la Alegere', value: 'USA, UK sau Spania' }
      ],
      note: '*O singură franciză per stat (USA) / oraș mare (UK, Spania). Primul care semnează, primește dreptul de exclusivitate pentru zona respectivă.'
    },
    cta: {
      title: 'Pregătit să începi călătoria către 15.000 €/lună?',
      whatsapp: 'TRIMITE MESAJ PE WHATSAPP',
      whatsappNote: 'Specifică limba pe care o vorbești și piața dorită. Răspundem în maxim 30 de minute.',
      or: 'SAU'
    }
  },
  en: {
    seo: {
      title: 'MrDelivery Franchise',
      description: 'Work from home, in your own city, with a fully automated digital transformation system for restaurants. Guaranteed scalability up to €15,000+ monthly profit.',
      keywords: 'franchise, MrDelivery, remote job, USA, UK, Spain, restaurants, digital marketing'
    },
    nav: {
      backToHome: 'Back to Home'
    },
    hero: {
      title: 'FRANC',
      titleHighlight: 'HISE',
      brand: 'MrDelivery',
      subtitle: 'Remote Job for Natives from',
      countries: ['USA', 'UK', 'Spain'],
      description: 'Work from home, in your own city, with a fully automated digital transformation system for restaurants. Guaranteed scalability up to',
      profit: '€15,000+ monthly profit',
      badges: ['100% Remote', 'Auto-Recruiting BOT', '30-Day ROI', 'Exclusive Market'],
      cta: 'I WANT TO CHOOSE MY MARKET',
      secondaryCta: 'SEE FINANCIAL MODEL'
    },
    opportunity: {
      title: 'Who Is This',
      titleHighlight: 'Opportunity For?',
      countries: [
        {
          flag: '🇺🇸',
          question: 'Are you American?',
          action: 'Choose any state in USA',
          description: 'The largest and most profitable market. Restaurants willing to pay premium for quality digital services.'
        },
        {
          flag: '🇬🇧',
          question: 'Are you British?',
          action: 'Choose any city in UK',
          description: 'Mature market with restaurants seeking complete and professional digital solutions.'
        },
        {
          flag: '🇪🇸',
          question: 'Are you Spanish?',
          action: 'Choose any city in Spain',
          description: 'Market in full digital expansion. Traditional restaurants urgently needing modernization.'
        }
      ]
    },
    workFromHome: {
      title: 'Work From Home',
      titleHighlight: 'in Your Own City',
      description: 'MrDelivery is the first fully automated digital transformation platform for restaurants. Work 100% remote, from the comfort of your home, for restaurants in your area.',
      features: [
        { title: '100% Remote', description: 'Work from home, no office, no commuting' },
        { title: 'Complete AI System', description: 'Chatbots, voice agents, automated marketing' },
        { title: 'Video Production', description: 'Viral content and automatic posting' }
      ],
      machineTitle: 'The Machine Works for YOU',
      machineDescription: 'You receive an automatic client recruitment system (BOT) that works non-stop and a verified business model that scales from solo to team, with predictable profits.',
      botTitle: 'Your BOT works 24/7',
      botDescription: 'Every 2 minutes, it finds new restaurants in your area, extracts contacts and sends personalized messages. It is your entire sales department.'
    },
    financial: {
      title: 'Financial Model: Clear and Low Risk',
      subtitle: 'Work from home, in your own city, with scalable income',
      items: [
        { value: '€5,000', label: 'Franchise license', description: 'Your exclusive market' },
        { value: 'REMOTE', label: '100% from home', description: 'No office, no commuting' },
        { value: '2 PCs', label: 'Required equipment', description: 'Which you already own' },
        { value: '30 DAYS', label: 'ROI Guarantee', description: '*Or we extend support' }
      ]
    },
    scalability: {
      title: 'Step by Step Scalability: From Solo to CEO',
      subtitle: 'Your business evolution in 12 months (100% remote)',
      phases: [
        {
          phase: 'PHASE 1',
          title: 'Solo Remote',
          period: 'Months 1-6',
          hours: '8-10h/day',
          structure: 'Work alone from home',
          clients: '10-12 clients in your area',
          revenue: '€8,000',
          revenueLabel: 'monthly income',
          profit: '~€5,780',
          profitLabel: 'net profit/month'
        },
        {
          phase: 'PHASE 2',
          title: 'First Remote Team',
          period: 'At 20 clients',
          hours: '4-6h/day',
          structure: 'You + 1 remote collaborator',
          clients: '20 clients in your area',
          revenue: '€16,000',
          revenueLabel: 'monthly income',
          profit: '~€10,160',
          profitLabel: 'net profit/month'
        },
        {
          phase: 'PHASE 3',
          title: 'Complete Team',
          period: 'At 30+ clients',
          hours: '2-4h/day',
          structure: 'Manager + 2 collaborators',
          clients: '30+ clients in your area',
          revenue: '€24,000',
          revenueLabel: 'monthly income',
          profit: '€14,040 - 15,000+',
          profitLabel: 'net profit/month'
        }
      ],
      guarantee: '*Guarantee: Recover your €5,000 investment in the first month from your first client, or we extend free support.'
    },
    secret: {
      title: 'The Secret to Success',
      subtitle: 'The automatic recruitment BOT that works for you 24/7, every 2 minutes.',
      howItWorks: 'How your automatic system works:',
      steps: [
        { number: '1', title: 'Search Restaurants', description: 'Scans Google Maps and platforms for new locations' },
        { number: '2', title: 'Extract Contacts', description: 'Automatically gets email, phone, WhatsApp' },
        { number: '3', title: 'Send Messages', description: 'Personalized messages in 12 languages' },
        { number: '4', title: 'Schedule Demo', description: 'Fills your calendar with presentations' }
      ],
      results: 'Expected results:',
      leads: '50-100',
      leadsLabel: 'leads/month',
      demos: '5-10',
      demosLabel: 'demos/week'
    },
    idealFranchisee: {
      title: 'Are You the Ideal Franchisee?',
      subtitle: 'For natives from USA, UK and Spain who want to work from home',
      workFromHome: {
        title: 'Work From Home, in Your Own City',
        description: 'Stay home, work your own hours and serve restaurants in your area. A 100% remote job, with total flexibility and scalable income.'
      },
      needTitle: 'You need:',
      needItems: [
        'To be a resident in USA, UK or Spain',
        'Entrepreneurial mindset and desire to earn over €10,000/month',
        'Discipline and consistency to work from home',
        '€5,000 for initial investment and 2 computers',
        '3-4 hours per day (flexible) to manage the business in the first months'
      ],
      notNeedTitle: 'You don\'t need:',
      notNeedItems: [
        'Sales team',
        'Physical office',
        'Advanced technical knowledge',
        'Contacts in HORECA',
        'Restaurant experience'
      ]
    },
    limitedOffer: {
      title: 'Limited Launch Offer',
      subtitle: 'For the first 3 franchisees who sign',
      items: [
        { title: 'Reduced License', value: '€3,500 (instead of €5,000)' },
        { title: '3 Months Free', value: 'No royalty (save €2,100)' },
        { title: 'Premium Training', value: '1-on-1 with the Founder' },
        { title: 'Market of Choice', value: 'USA, UK or Spain' }
      ],
      note: '*One franchise per state (USA) / major city (UK, Spain). First to sign gets exclusivity rights for that area.'
    },
    cta: {
      title: 'Ready to start your journey to €15,000/month?',
      whatsapp: 'SEND MESSAGE ON WHATSAPP',
      whatsappNote: 'Specify your language and desired market. We respond within 30 minutes.',
      or: 'OR'
    }
  },
  es: {
    seo: {
      title: 'Franquicia MrDelivery',
      description: 'Trabaja desde casa, en tu propia ciudad, con un sistema de transformación digital totalmente automatizado para restaurantes. Escalabilidad garantizada hasta €15.000+ de ganancia mensual.',
      keywords: 'franquicia, MrDelivery, trabajo remoto, USA, UK, España, restaurantes, marketing digital'
    },
    nav: {
      backToHome: 'Volver a la Página Principal'
    },
    hero: {
      title: 'FRANQU',
      titleHighlight: 'ICIA',
      brand: 'MrDelivery',
      subtitle: 'Trabajo Remoto para Nativos de',
      countries: ['USA', 'UK', 'España'],
      description: 'Trabaja desde casa, en tu propia ciudad, con un sistema de transformación digital totalmente automatizado para restaurantes. Escalabilidad garantizada hasta',
      profit: '€15.000+ de ganancia mensual',
      badges: ['100% Remoto', 'BOT Auto-Reclutamiento', 'ROI 30 Días', 'Mercado Exclusivo'],
      cta: 'QUIERO ELEGIR MI MERCADO',
      secondaryCta: 'VER MODELO FINANCIERO'
    },
    opportunity: {
      title: '¿Para Quién Es Esta',
      titleHighlight: 'Oportunidad?',
      countries: [
        {
          flag: '🇺🇸',
          question: '¿Eres americano?',
          action: 'Elige cualquier estado de USA',
          description: 'El mercado más grande y rentable. Restaurantes dispuestos a pagar premium por servicios digitales de calidad.'
        },
        {
          flag: '🇬🇧',
          question: '¿Eres británico?',
          action: 'Elige cualquier ciudad del UK',
          description: 'Mercado maduro con restaurantes que buscan soluciones digitales completas y profesionales.'
        },
        {
          flag: '🇪🇸',
          question: '¿Eres español?',
          action: 'Elige cualquier ciudad de España',
          description: 'Mercado en plena expansión digital. Restaurantes tradicionales que necesitan urgentemente modernización.'
        }
      ]
    },
    workFromHome: {
      title: 'Trabaja Desde Casa',
      titleHighlight: 'en Tu Propia Ciudad',
      description: 'MrDelivery es la primera plataforma de transformación digital totalmente automatizada para restaurantes. Trabajas 100% remoto, desde la comodidad de tu hogar, para restaurantes de tu zona.',
      features: [
        { title: '100% Remoto', description: 'Trabajas desde casa, sin oficina, sin desplazamientos' },
        { title: 'Sistema AI Completo', description: 'Chatbots, agentes de voz, marketing automático' },
        { title: 'Producción de Video', description: 'Contenido viral y publicación automática' }
      ],
      machineTitle: 'La Máquina Trabaja para TI',
      machineDescription: 'Recibes un sistema automático de reclutamiento de clientes (BOT) que trabaja sin parar y un modelo de negocio verificado que escala de solo a equipo, con ganancias predecibles.',
      botTitle: 'Tu BOT trabaja 24/7',
      botDescription: 'Cada 2 minutos, encuentra restaurantes nuevos en tu zona, extrae contactos y envía mensajes personalizados. Es todo tu departamento de ventas.'
    },
    financial: {
      title: 'Modelo Financiero: Claro y Con Riesgo Mínimo',
      subtitle: 'Trabajas desde casa, en tu propia ciudad, con ingresos escalables',
      items: [
        { value: '€5.000', label: 'Licencia franquicia', description: 'Tu mercado exclusivo' },
        { value: 'REMOTO', label: '100% desde casa', description: 'Sin oficina, sin desplazamientos' },
        { value: '2 PC', label: 'Equipo necesario', description: 'Que ya tienes' },
        { value: '30 DÍAS', label: 'Garantía ROI', description: '*O extendemos el soporte' }
      ]
    },
    scalability: {
      title: 'Escalabilidad Paso a Paso: De Solo a CEO',
      subtitle: 'La evolución de tu negocio en 12 meses (100% remoto)',
      phases: [
        {
          phase: 'FASE 1',
          title: 'Solo Remoto',
          period: 'Meses 1-6',
          hours: '8-10h/día',
          structure: 'Trabajas solo desde casa',
          clients: '10-12 clientes en tu zona',
          revenue: '€8.000',
          revenueLabel: 'ingreso mensual',
          profit: '~€5.780',
          profitLabel: 'ganancia neta/mes'
        },
        {
          phase: 'FASE 2',
          title: 'Primer Equipo Remoto',
          period: 'A 20 clientes',
          hours: '4-6h/día',
          structure: 'Tú + 1 colaborador remoto',
          clients: '20 clientes en tu zona',
          revenue: '€16.000',
          revenueLabel: 'ingreso mensual',
          profit: '~€10.160',
          profitLabel: 'ganancia neta/mes'
        },
        {
          phase: 'FASE 3',
          title: 'Equipo Completo',
          period: 'A 30+ clientes',
          hours: '2-4h/día',
          structure: 'Manager + 2 colaboradores',
          clients: '30+ clientes en tu zona',
          revenue: '€24.000',
          revenueLabel: 'ingreso mensual',
          profit: '€14.040 - 15.000+',
          profitLabel: 'ganancia neta/mes'
        }
      ],
      guarantee: '*Garantía: Recuperas tu inversión de €5.000 en el primer mes desde tu primer cliente, o extendemos el soporte gratis.'
    },
    secret: {
      title: 'El Secreto del Éxito',
      subtitle: 'El BOT automático de reclutamiento que trabaja para ti 24/7, cada 2 minutos.',
      howItWorks: 'Cómo funciona tu sistema automático:',
      steps: [
        { number: '1', title: 'Busca Restaurantes', description: 'Escanea Google Maps y plataformas buscando nuevas ubicaciones' },
        { number: '2', title: 'Extrae Contactos', description: 'Obtiene automáticamente email, teléfono, WhatsApp' },
        { number: '3', title: 'Envía Mensajes', description: 'Mensajes personalizados en 12 idiomas' },
        { number: '4', title: 'Programa Demo', description: 'Llena tu calendario con presentaciones' }
      ],
      results: 'Resultados esperados:',
      leads: '50-100',
      leadsLabel: 'leads/mes',
      demos: '5-10',
      demosLabel: 'demos/semana'
    },
    idealFranchisee: {
      title: '¿Eres el Franquiciado Ideal?',
      subtitle: 'Para nativos de USA, UK y España que quieren trabajar desde casa',
      workFromHome: {
        title: 'Trabaja Desde Casa, en Tu Propia Ciudad',
        description: 'Quédate en casa, trabaja en tus horarios y sirve restaurantes de tu zona. Un trabajo 100% remoto, con flexibilidad total e ingresos escalables.'
      },
      needTitle: 'Necesitas:',
      needItems: [
        'Ser residente en USA, UK o España',
        'Mentalidad emprendedora y deseo de ganar más de €10.000/mes',
        'Disciplina y consistencia para trabajar desde casa',
        '€5.000 para la inversión inicial y 2 computadoras',
        '3-4 horas al día (flexible) para gestionar el negocio en los primeros meses'
      ],
      notNeedTitle: 'No necesitas:',
      notNeedItems: [
        'Equipo de ventas',
        'Oficina física',
        'Conocimientos técnicos avanzados',
        'Contactos en HORECA',
        'Experiencia en restaurantes'
      ]
    },
    limitedOffer: {
      title: 'Oferta Limitada de Lanzamiento',
      subtitle: 'Para los primeros 3 franquiciados que firmen',
      items: [
        { title: 'Licencia Reducida', value: '€3.500 (en lugar de €5.000)' },
        { title: '3 Meses Gratis', value: 'Sin regalías (ahorras €2.100)' },
        { title: 'Training Premium', value: '1-a-1 con el Fundador' },
        { title: 'Mercado a Elección', value: 'USA, UK o España' }
      ],
      note: '*Una sola franquicia por estado (USA) / ciudad grande (UK, España). El primero en firmar obtiene los derechos de exclusividad para esa zona.'
    },
    cta: {
      title: '¿Listo para empezar tu viaje hacia €15.000/mes?',
      whatsapp: 'ENVIAR MENSAJE EN WHATSAPP',
      whatsappNote: 'Especifica tu idioma y mercado deseado. Respondemos en máximo 30 minutos.',
      or: 'O'
    }
  }
};

const FranchisePage = () => {
  const { language } = useLanguage();
  const t = franchiseTranslations[language];

  const scrollToFinancial = () => {
    document.getElementById('financial-model')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = "https://wa.me/40768676141?text=Hello!%20I%27m%20interested%20in%20the%20MrDelivery%20franchise.%20I%20live%20in%20[COUNTRY/STATE/CITY]";

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title={t.seo.title}
        description={t.seo.description}
        keywords={t.seo.keywords}
        locale={language === 'ro' ? 'ro_RO' : language === 'es' ? 'es_ES' : 'en_US'}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">{t.nav.backToHome}</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-black tracking-wider mb-4">
            <span className="text-white">{t.hero.title}</span>
            <span className="text-yellow-500">{t.hero.titleHighlight}</span>
          </h1>
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6" />
          
          {/* Brand */}
          <p className="text-2xl md:text-3xl font-medium mb-4">
            <span className="text-yellow-500">Mr</span>
            <span className="text-white">Delivery</span>
          </p>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-medium mb-2">
            {t.hero.subtitle}{' '}
            <span className="text-yellow-500">{t.hero.countries[0]}</span>,{' '}
            <span className="text-yellow-500">{t.hero.countries[1]}</span>{' '}
            {language === 'es' ? 'o' : language === 'ro' ? 'sau' : 'or'}{' '}
            <span className="text-yellow-500">{t.hero.countries[2]}</span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 max-w-3xl mx-auto mb-2">
            {t.hero.description} <span className="text-yellow-500 font-semibold">{t.hero.profit}</span>.
          </p>
          
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {t.hero.badges.map((badge, index) => (
              <span 
                key={index}
                className="flex items-center gap-1.5 px-4 py-2 bg-card/60 border border-yellow-500/30 rounded-full text-sm text-gray-300"
              >
                {index === 0 && <Globe className="w-4 h-4 text-yellow-500" />}
                {index === 1 && <Bot className="w-4 h-4 text-yellow-500" />}
                {index === 2 && <TrendingUp className="w-4 h-4 text-yellow-500" />}
                {index === 3 && <Sparkles className="w-4 h-4 text-yellow-500" />}
                {badge}
              </span>
            ))}
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg shadow-yellow-500/20"
            >
              <Sparkles className="w-5 h-5" />
              {t.hero.cta}
            </a>
            <button 
              onClick={scrollToFinancial}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-500/50 text-yellow-500 font-bold rounded-full hover:bg-yellow-500/10 transition-all"
            >
              <TrendingUp className="w-5 h-5" />
              {t.hero.secondaryCta}
            </button>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.opportunity.title}{' '}
            <span className="text-yellow-500">{t.opportunity.titleHighlight}</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.opportunity.countries.map((country, index) => (
              <div 
                key={index}
                className="bg-card/40 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{country.question}</h3>
                    <p className="text-yellow-500 text-sm font-medium">{country.action}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{country.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work From Home Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-yellow-500">{t.workFromHome.title}</span>{' '}
                {t.workFromHome.titleHighlight}
              </h2>
              <p className="text-gray-400 mb-8">{t.workFromHome.description}</p>
              
              <div className="grid gap-4">
                {t.workFromHome.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 bg-card/30 border border-border/30 rounded-lg p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                      {index === 0 && <Globe className="w-5 h-5 text-yellow-500" />}
                      {index === 1 && <Bot className="w-5 h-5 text-yellow-500" />}
                      {index === 2 && <Video className="w-5 h-5 text-yellow-500" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Machine */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-yellow-500">{t.workFromHome.machineTitle}</h3>
              </div>
              <p className="text-gray-300 mb-6">{t.workFromHome.machineDescription}</p>
              
              <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">{t.workFromHome.botTitle}</h4>
                <p className="text-gray-400 text-sm">{t.workFromHome.botDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Model Section */}
      <section id="financial-model" className="py-16 px-4 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{t.financial.title}</h2>
          <p className="text-gray-400 text-center mb-12">{t.financial.subtitle}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.financial.items.map((item, index) => (
              <div 
                key={index}
                className="bg-card/40 border border-yellow-500/20 rounded-xl p-6 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1">{item.value}</div>
                <div className="text-white font-medium mb-1">{item.label}</div>
                <div className="text-gray-500 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{t.scalability.title}</h2>
          <p className="text-gray-400 text-center mb-12">{t.scalability.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.scalability.phases.map((phase, index) => (
              <div 
                key={index}
                className="bg-card/40 border border-yellow-500/20 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {phase.phase}
                </div>
                
                <h3 className="text-xl font-bold text-yellow-500 mb-1 mt-4">{phase.title}</h3>
                <div className="flex gap-4 text-sm text-gray-400 mb-4">
                  <span>{phase.period}</span>
                  <span>{phase.hours}</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-2"><strong>Structură:</strong> {phase.structure}</p>
                <p className="text-gray-400 text-sm mb-4">{phase.clients}</p>
                
                <div className="border-t border-yellow-500/20 pt-4 mt-4">
                  <div className="text-2xl font-bold text-white">{phase.revenue}</div>
                  <div className="text-gray-400 text-sm mb-2">{phase.revenueLabel}</div>
                  <div className="text-xl font-bold text-yellow-500">{phase.profit}</div>
                  <div className="text-gray-400 text-sm">{phase.profitLabel}</div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-8">{t.scalability.guarantee}</p>
        </div>
      </section>

      {/* Secret to Success Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{t.secret.title}</h2>
          <p className="text-gray-400 text-center mb-12">{t.secret.subtitle}</p>
          
          <div className="bg-card/40 border border-yellow-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-8 text-center">{t.secret.howItWorks}</h3>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {t.secret.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 text-black font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="border-t border-yellow-500/20 pt-8">
              <p className="text-center text-gray-400 mb-6">{t.secret.results}</p>
              <div className="flex justify-center gap-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">{t.secret.leads}</div>
                  <div className="text-gray-400 text-sm">{t.secret.leadsLabel}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">{t.secret.demos}</div>
                  <div className="text-gray-400 text-sm">{t.secret.demosLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Franchisee Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{t.idealFranchisee.title}</h2>
          <p className="text-gray-400 text-center mb-12">{t.idealFranchisee.subtitle}</p>
          
          <div className="bg-card/40 border border-yellow-500/20 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-yellow-500 mb-2">{t.idealFranchisee.workFromHome.title}</h3>
            <p className="text-gray-300">{t.idealFranchisee.workFromHome.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Need */}
            <div className="bg-card/40 border border-green-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-500 mb-4">{t.idealFranchisee.needTitle}</h3>
              <ul className="space-y-3">
                {t.idealFranchisee.needItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Don't Need */}
            <div className="bg-card/40 border border-red-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-500 mb-4">{t.idealFranchisee.notNeedTitle}</h3>
              <ul className="space-y-3">
                {t.idealFranchisee.notNeedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Offer Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{t.limitedOffer.title}</h2>
          <p className="text-gray-400 text-center mb-12">{t.limitedOffer.subtitle}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {t.limitedOffer.items.map((item, index) => (
              <div 
                key={index}
                className="bg-card/60 border border-yellow-500/30 rounded-xl p-4 text-center"
              >
                <h4 className="text-yellow-500 font-semibold mb-2">{item.title}</h4>
                <p className="text-white text-sm">{item.value}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 text-sm">{t.limitedOffer.note}</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.cta.title}</h2>
          
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-full hover:from-green-400 hover:to-green-500 transition-all shadow-lg shadow-green-500/30 mb-4"
          >
            <Phone className="w-6 h-6" />
            {t.cta.whatsapp}
          </a>
          
          <p className="text-gray-400 text-sm mb-6">{t.cta.whatsappNote}</p>
          
          <p className="text-gray-500">{t.cta.or}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 <span className="text-yellow-500">Mr</span>Delivery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FranchisePage;
