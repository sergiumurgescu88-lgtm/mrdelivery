import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Building2, 
  Brain, 
  Users, 
  TrendingUp, 
  Headphones, 
  Sparkles,
  Target,
  Shield,
  Zap,
  Award,
  Clock,
  Globe,
  BarChart3,
  MessageSquare,
  GraduationCap,
  Handshake,
  DollarSign,
  Settings,
  Phone,
  Building,
  Truck,
  Video,
  Bot,
  Cog
} from 'lucide-react';

const franchiseTranslations = {
  en: {
    nav: {
      home: 'Home',
      partner: 'Become a Partner'
    },
    hero: {
      badge: 'Franchise Opportunity',
      title1: 'Become a Partner',
      title2: 'MrDelivery',
      subtitle: 'Build a profitable business in delivery and automation. You get AI technology, systems and support — you bring the clients.',
      cta: 'Apply for Partnership',
      secondaryCta: 'Schedule a Call'
    },
    stats: {
      partners: 'Active Partners',
      restaurants: 'Managed Restaurants',
      countries: 'Countries'
    },
    whatIs: {
      title: 'What is the MrDelivery Partnership?',
      subtitle: 'Technology + Management Partnership',
      description: 'This is NOT a traditional restaurant franchise. You don\'t cook, you don\'t deliver. You manage restaurants on delivery platforms using our AI systems.',
      model: {
        title: 'The Business Model',
        items: [
          'You become a local MrDelivery partner in your territory',
          'We provide AI systems, training, and negotiation power',
          'You manage restaurants on Uber Eats, DoorDash, Grubhub',
          'Restaurants pay monthly recurring fees for management',
          'You earn predictable monthly income from each client'
        ]
      },
      youGet: {
        title: 'What You Manage',
        items: [
          'Platform negotiations (commissions, budgets)',
          'Menu optimization and daily updates',
          'Marketing campaigns and promotions',
          'Customer support and problem solving',
          'Performance analysis and reporting'
        ]
      }
    },
    services: {
      title: 'Main Services',
      items: [
        {
          icon: 'Truck',
          title: 'Delivery Management',
          description: 'We negotiate commissions and budgets on Glovo, Wolt and Bolt Food.'
        },
        {
          icon: 'Video',
          title: 'AI Video Production',
          description: 'We create and post video content daily on 4 platforms.'
        },
        {
          icon: 'Bot',
          title: 'AI Chatbots',
          description: 'Virtual assistants that respond to customers 24/7.'
        },
        {
          icon: 'Cog',
          title: 'Complete Automation',
          description: 'AI systems for marketing, orders and operations.'
        }
      ]
    },
    whoFor: {
      title: 'Who This Is For',
      subtitle: 'Ideal Partner Profiles',
      profiles: [
        {
          icon: 'Building2',
          title: 'Entrepreneurs',
          description: 'Looking for a structured business opportunity with recurring revenue potential.'
        },
        {
          icon: 'Users',
          title: 'Restaurant Consultants',
          description: 'Already working with restaurants and want to add a profitable service.'
        },
        {
          icon: 'TrendingUp',
          title: 'Digital Marketers',
          description: 'With performance marketing experience who want to specialize.'
        },
        {
          icon: 'Target',
          title: 'Local Operators',
          description: 'With strong local networks who can build relationships with restaurants.'
        }
      ],
      note: 'Restaurant industry experience is helpful but not mandatory. What matters is commitment and professionalism.'
    },
    whoNotFor: {
      title: 'Who This Is NOT For',
      subtitle: 'This opportunity is not suitable for everyone',
      items: [
        {
          title: 'Quick Money Seekers',
          description: 'This is a real business that requires time to build.'
        },
        {
          title: 'Passive Investors',
          description: 'You need to actively manage your territory and clients.'
        },
        {
          title: 'Freelancers Looking for Gigs',
          description: 'This is a long-term business partnership.'
        },
        {
          title: 'People Without Commitment',
          description: 'Building a client base takes dedication.'
        }
      ]
    },
    whatYouGet: {
      title: 'What You Get as a Partner',
      subtitle: 'Complete Business-in-a-Box',
      items: [
        {
          icon: 'Brain',
          title: 'AI Technology',
          description: 'Access to our proprietary AI systems for menu optimization, voice agents and chatbots.'
        },
        {
          icon: 'GraduationCap',
          title: 'Comprehensive Training',
          description: 'Complete onboarding covering sales, operations and client success.'
        },
        {
          icon: 'Handshake',
          title: 'Negotiation Power',
          description: 'Leverage our platform relationships for better commission rates.'
        },
        {
          icon: 'Shield',
          title: 'Brand & Credibility',
          description: 'Operate under the MrDelivery brand with established reputation.'
        },
        {
          icon: 'Headphones',
          title: 'Ongoing Support',
          description: '24/7 access to our support team and strategy calls.'
        },
        {
          icon: 'Users',
          title: 'Partner Community',
          description: 'Join a network of partners sharing best practices.'
        }
      ]
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'From Partner to Profitable Operations',
      steps: [
        {
          number: '01',
          title: 'Application & Qualification',
          description: 'Submit your application. We review your profile and schedule a call.'
        },
        {
          number: '02',
          title: 'Onboarding & Training',
          description: 'Complete our training program. Learn systems and operations.'
        },
        {
          number: '03',
          title: 'Territory Setup',
          description: 'We help you set up your territory and marketing materials.'
        },
        {
          number: '04',
          title: 'Client Acquisition',
          description: 'Start approaching restaurants. We support with sales tools.'
        },
        {
          number: '05',
          title: 'Recurring Operations',
          description: 'Manage clients monthly. Collect recurring fees and grow.'
        }
      ]
    },
    revenue: {
      title: 'The Revenue Opportunity',
      subtitle: 'Build Predictable Monthly Income',
      description: 'Our model is based on recurring monthly fees from managed restaurants. As you build your client base, your income grows and becomes increasingly predictable.',
      highlights: [
        {
          icon: 'DollarSign',
          title: 'Recurring Revenue',
          description: 'Monthly management fees from each client'
        },
        {
          icon: 'TrendingUp',
          title: 'Scalable Growth',
          description: 'Add more restaurants to grow proportionally'
        },
        {
          icon: 'BarChart3',
          title: 'Performance Bonuses',
          description: 'Additional earnings for exceeding targets'
        },
        {
          icon: 'Clock',
          title: 'Long-term Value',
          description: 'Client relationships that last years'
        }
      ],
      note: 'Specific revenue potential depends on your territory and commitment. Details provided during qualification.'
    },
    support: {
      title: 'Support & Training',
      subtitle: 'We\'re With You Every Step',
      items: [
        {
          title: 'Initial Onboarding',
          description: 'Comprehensive training covering sales, operations, technology and client management.'
        },
        {
          title: 'Ongoing Education',
          description: 'Regular updates, new feature tutorials and industry best practices.'
        },
        {
          title: 'Dedicated Support',
          description: '24/7 WhatsApp access. Strategy calls for complex situations.'
        },
        {
          title: 'System Updates',
          description: 'Continuous AI improvements at no additional cost.'
        },
        {
          title: 'Partner Community',
          description: 'Private community for networking and sharing strategies.'
        }
      ]
    },
    cta: {
      title: 'Want to Become a MrDelivery Partner?',
      subtitle: 'Build your own business with our technology and support.',
      button: 'Learn More'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  ro: {
    nav: {
      home: 'Acasă',
      partner: 'Devino Partener'
    },
    hero: {
      badge: 'Oportunitate de Franciză',
      title1: 'Devino Partener',
      title2: 'MrDelivery',
      subtitle: 'Construiește o afacere profitabilă în delivery și automatizare. Primești tehnologia AI, sistemele și suportul — tu aduci clienții.',
      cta: 'Aplică pentru Parteneriat',
      secondaryCta: 'Programează un Call'
    },
    stats: {
      partners: 'Parteneri Activi',
      restaurants: 'Restaurante Gestionate',
      countries: 'Țări'
    },
    whatIs: {
      title: 'Ce înseamnă Parteneriatul MrDelivery?',
      subtitle: 'Parteneriat de Tehnologie + Management',
      description: 'Aceasta NU este o franciză tradițională de restaurant. Nu gătești, nu livrezi. Administrezi restaurante pe platformele de livrare folosind sistemele noastre AI.',
      model: {
        title: 'Modelul de Afacere',
        items: [
          'Devii partener local MrDelivery în zona ta',
          'Îți oferim sisteme AI, instruire și putere de negociere',
          'Administrezi restaurante pe Uber Eats, Glovo, Tazz, Bolt Food',
          'Restaurantele plătesc taxe lunare recurente pentru administrare',
          'Câștigi venit lunar predictibil de la fiecare client'
        ]
      },
      youGet: {
        title: 'Ce Vei Administra',
        items: [
          'Negocieri cu platformele (comisioane, bugete de marketing)',
          'Optimizarea meniului și actualizări zilnice',
          'Campanii de marketing și promoții',
          'Suport pentru clienți și rezolvarea problemelor',
          'Analiza performanței și raportare lunară'
        ]
      }
    },
    services: {
      title: 'Servicii Principale',
      items: [
        {
          icon: 'Truck',
          title: 'Management Livrări',
          description: 'Negociem comisioane și bugete pe Glovo, Wolt și Bolt Food.'
        },
        {
          icon: 'Video',
          title: 'Producție Video AI',
          description: 'Creăm și postăm conținut video zilnic pe 4 platforme.'
        },
        {
          icon: 'Bot',
          title: 'Chatboți AI',
          description: 'Asistenți virtuali care răspund clienților 24/7.'
        },
        {
          icon: 'Cog',
          title: 'Automatizări Complete',
          description: 'Sisteme AI pentru marketing, comenzi și operațiuni.'
        }
      ]
    },
    whoFor: {
      title: 'Cui i se Adresează',
      subtitle: 'Profiluri Ideale de Parteneri',
      profiles: [
        {
          icon: 'Building2',
          title: 'Antreprenori',
          description: 'Care caută o oportunitate de afacere structurată cu potențial de venituri recurente.'
        },
        {
          icon: 'Users',
          title: 'Consultanți HoReCa',
          description: 'Care deja lucrează cu restaurante și doresc să adauge un serviciu profitabil.'
        },
        {
          icon: 'TrendingUp',
          title: 'Specialiști Marketing Digital',
          description: 'Cu experiență în marketing de performanță care vor să se specializeze.'
        },
        {
          icon: 'Target',
          title: 'Operatori Locali',
          description: 'Cu rețele locale puternice care pot construi relații cu restaurantele.'
        }
      ],
      note: 'Experiența în industria restaurantelor este utilă, dar nu obligatorie. Ce contează este angajamentul și profesionalismul.'
    },
    whoNotFor: {
      title: 'Cui NU i se Adresează',
      subtitle: 'Această oportunitate nu este potrivită pentru toată lumea',
      items: [
        {
          title: 'Persoane care vor Bani Rapizi',
          description: 'Aceasta este o afacere reală care necesită timp pentru construire.'
        },
        {
          title: 'Investitori Pasivi',
          description: 'Trebuie să administrezi activ zona și clienții.'
        },
        {
          title: 'Freelanceri în Căutare de Proiecte',
          description: 'Acesta este un parteneriat de afaceri pe termen lung.'
        },
        {
          title: 'Persoane fără Angajament',
          description: 'Construirea unei baze de clienți necesită dedicare.'
        }
      ]
    },
    whatYouGet: {
      title: 'Ce Primești ca Partener',
      subtitle: 'Afacere Completă, Gata de Pornire',
      items: [
        {
          icon: 'Brain',
          title: 'Tehnologie AI',
          description: 'Acces la sistemele noastre AI pentru optimizarea meniului, asistenți vocali și chatboți.'
        },
        {
          icon: 'GraduationCap',
          title: 'Instruire Completă',
          description: 'Program de onboarding care acoperă vânzări, operațiuni și succesul clienților.'
        },
        {
          icon: 'Handshake',
          title: 'Putere de Negociere',
          description: 'Folosești relațiile noastre cu platformele pentru comisioane mai bune.'
        },
        {
          icon: 'Shield',
          title: 'Brand și Credibilitate',
          description: 'Operezi sub brandul MrDelivery cu reputație stabilită.'
        },
        {
          icon: 'Headphones',
          title: 'Suport Permanent',
          description: 'Acces 24/7 la echipa de suport și discuții de strategie.'
        },
        {
          icon: 'Users',
          title: 'Comunitate de Parteneri',
          description: 'Te alături unei rețele de parteneri care împărtășesc bune practici.'
        }
      ]
    },
    howItWorks: {
      title: 'Cum Funcționează',
      subtitle: 'De la Aplicație la Operațiuni Profitabile',
      steps: [
        {
          number: '01',
          title: 'Aplicație și Calificare',
          description: 'Trimite aplicația. Analizăm profilul și programăm o discuție.'
        },
        {
          number: '02',
          title: 'Onboarding și Instruire',
          description: 'Parcurgi programul de instruire. Înveți sistemele și operațiunile.'
        },
        {
          number: '03',
          title: 'Configurare Zonă',
          description: 'Te ajutăm să îți configurezi zona și materialele de marketing.'
        },
        {
          number: '04',
          title: 'Achiziție Clienți',
          description: 'Începi să abordezi restaurantele. Te susținem cu instrumente de vânzare.'
        },
        {
          number: '05',
          title: 'Operațiuni Recurente',
          description: 'Administrezi clienții lunar. Colectezi taxe recurente și crești.'
        }
      ]
    },
    revenue: {
      title: 'Oportunitatea de Venituri',
      subtitle: 'Construiește Venit Lunar Predictibil',
      description: 'Modelul nostru se bazează pe taxe lunare recurente de la restaurantele administrate. Pe măsură ce îți construiești baza de clienți, venitul crește și devine din ce în ce mai stabil.',
      highlights: [
        {
          icon: 'DollarSign',
          title: 'Venituri Recurente',
          description: 'Taxe lunare de administrare de la fiecare client'
        },
        {
          icon: 'TrendingUp',
          title: 'Creștere Scalabilă',
          description: 'Adaugi mai multe restaurante și crești proporțional'
        },
        {
          icon: 'BarChart3',
          title: 'Bonusuri de Performanță',
          description: 'Câștiguri suplimentare pentru depășirea obiectivelor'
        },
        {
          icon: 'Clock',
          title: 'Valoare pe Termen Lung',
          description: 'Relații cu clienții care durează ani de zile'
        }
      ],
      note: 'Potențialul de venituri depinde de zonă și angajament. Detaliile sunt furnizate în procesul de calificare.'
    },
    support: {
      title: 'Suport și Instruire',
      subtitle: 'Suntem Alături de Tine la Fiecare Pas',
      items: [
        {
          title: 'Onboarding Inițial',
          description: 'Program complet de instruire: vânzări, operațiuni, tehnologie și managementul clienților.'
        },
        {
          title: 'Educație Continuă',
          description: 'Actualizări regulate, tutoriale pentru funcționalități noi și bune practici.'
        },
        {
          title: 'Suport Dedicat',
          description: 'Acces 24/7 pe WhatsApp. Discuții de strategie pentru situații complexe.'
        },
        {
          title: 'Actualizări Sistem',
          description: 'Îmbunătățiri continue ale sistemelor AI fără costuri suplimentare.'
        },
        {
          title: 'Comunitate de Parteneri',
          description: 'Comunitate privată pentru networking și împărtășire de strategii.'
        }
      ]
    },
    cta: {
      title: 'Vrei să Devii Partener MrDelivery?',
      subtitle: 'Construiește-ți propria afacere cu tehnologia și suportul nostru.',
      button: 'Află Mai Multe'
    },
    footer: {
      rights: 'Toate drepturile rezervate.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      partner: 'Hazte Socio'
    },
    hero: {
      badge: 'Oportunidad de Franquicia',
      title1: 'Hazte Socio',
      title2: 'MrDelivery',
      subtitle: 'Construye un negocio rentable en delivery y automatización. Recibes la tecnología AI, los sistemas y el soporte — tú traes los clientes.',
      cta: 'Aplicar para Asociación',
      secondaryCta: 'Programar una Llamada'
    },
    stats: {
      partners: 'Socios Activos',
      restaurants: 'Restaurantes Gestionados',
      countries: 'Países'
    },
    whatIs: {
      title: '¿Qué es la Asociación MrDelivery?',
      subtitle: 'Asociación de Tecnología + Gestión',
      description: 'Esto NO es una franquicia tradicional de restaurante. No cocinas, no entregas. Gestionas restaurantes en plataformas de entrega usando nuestros sistemas AI.',
      model: {
        title: 'El Modelo de Negocio',
        items: [
          'Te conviertes en socio local MrDelivery en tu territorio',
          'Te proporcionamos sistemas AI, capacitación y poder de negociación',
          'Gestionas restaurantes en Uber Eats, DoorDash, Grubhub',
          'Los restaurantes pagan tarifas mensuales recurrentes',
          'Ganas ingresos mensuales predecibles de cada cliente'
        ]
      },
      youGet: {
        title: 'Lo Que Gestionas',
        items: [
          'Negociaciones con plataformas (comisiones, presupuestos)',
          'Optimización de menú y actualizaciones diarias',
          'Campañas de marketing y promociones',
          'Soporte al cliente y resolución de problemas',
          'Análisis de rendimiento e informes'
        ]
      }
    },
    services: {
      title: 'Servicios Principales',
      items: [
        {
          icon: 'Truck',
          title: 'Gestión de Entregas',
          description: 'Negociamos comisiones y presupuestos en Glovo, Wolt y Bolt Food.'
        },
        {
          icon: 'Video',
          title: 'Producción Video AI',
          description: 'Creamos y publicamos contenido de video diario en 4 plataformas.'
        },
        {
          icon: 'Bot',
          title: 'Chatbots AI',
          description: 'Asistentes virtuales que responden a clientes 24/7.'
        },
        {
          icon: 'Cog',
          title: 'Automatización Completa',
          description: 'Sistemas AI para marketing, pedidos y operaciones.'
        }
      ]
    },
    whoFor: {
      title: 'Para Quién Es',
      subtitle: 'Perfiles Ideales de Socios',
      profiles: [
        {
          icon: 'Building2',
          title: 'Emprendedores',
          description: 'Buscando una oportunidad de negocio estructurada con potencial de ingresos recurrentes.'
        },
        {
          icon: 'Users',
          title: 'Consultores de Restaurantes',
          description: 'Ya trabajando con restaurantes y queriendo agregar un servicio rentable.'
        },
        {
          icon: 'TrendingUp',
          title: 'Especialistas en Marketing Digital',
          description: 'Con experiencia en marketing de rendimiento que quieren especializarse.'
        },
        {
          icon: 'Target',
          title: 'Operadores Locales',
          description: 'Con redes locales fuertes que pueden construir relaciones con restaurantes.'
        }
      ],
      note: 'La experiencia en la industria restaurantera es útil pero no obligatoria. Lo que importa es el compromiso y profesionalismo.'
    },
    whoNotFor: {
      title: 'Para Quién NO Es',
      subtitle: 'Esta oportunidad no es para todos',
      items: [
        {
          title: 'Buscadores de Dinero Rápido',
          description: 'Este es un negocio real que requiere tiempo para construirse.'
        },
        {
          title: 'Inversores Pasivos',
          description: 'Necesitas gestionar activamente tu territorio y clientes.'
        },
        {
          title: 'Freelancers Buscando Proyectos',
          description: 'Esta es una asociación de negocio a largo plazo.'
        },
        {
          title: 'Personas Sin Compromiso',
          description: 'Construir una base de clientes requiere dedicación.'
        }
      ]
    },
    whatYouGet: {
      title: 'Lo Que Recibes como Socio',
      subtitle: 'Negocio Completo Listo para Usar',
      items: [
        {
          icon: 'Brain',
          title: 'Tecnología AI',
          description: 'Acceso a nuestros sistemas AI para optimización de menú, agentes de voz y chatbots.'
        },
        {
          icon: 'GraduationCap',
          title: 'Capacitación Completa',
          description: 'Programa de incorporación que cubre ventas, operaciones y éxito del cliente.'
        },
        {
          icon: 'Handshake',
          title: 'Poder de Negociación',
          description: 'Aprovecha nuestras relaciones con plataformas para mejores tasas.'
        },
        {
          icon: 'Shield',
          title: 'Marca y Credibilidad',
          description: 'Opera bajo la marca MrDelivery con reputación establecida.'
        },
        {
          icon: 'Headphones',
          title: 'Soporte Continuo',
          description: 'Acceso 24/7 al equipo de soporte y llamadas de estrategia.'
        },
        {
          icon: 'Users',
          title: 'Comunidad de Socios',
          description: 'Únete a una red de socios compartiendo mejores prácticas.'
        }
      ]
    },
    howItWorks: {
      title: 'Cómo Funciona',
      subtitle: 'De Socio a Operaciones Rentables',
      steps: [
        {
          number: '01',
          title: 'Aplicación y Calificación',
          description: 'Envía tu aplicación. Revisamos tu perfil y programamos una llamada.'
        },
        {
          number: '02',
          title: 'Incorporación y Capacitación',
          description: 'Completa nuestro programa de capacitación. Aprende sistemas y operaciones.'
        },
        {
          number: '03',
          title: 'Configuración de Territorio',
          description: 'Te ayudamos a configurar tu territorio y materiales de marketing.'
        },
        {
          number: '04',
          title: 'Adquisición de Clientes',
          description: 'Comienza a acercarte a restaurantes. Te apoyamos con herramientas.'
        },
        {
          number: '05',
          title: 'Operaciones Recurrentes',
          description: 'Gestiona clientes mensualmente. Cobra tarifas recurrentes y crece.'
        }
      ]
    },
    revenue: {
      title: 'La Oportunidad de Ingresos',
      subtitle: 'Construye Ingresos Mensuales Predecibles',
      description: 'Nuestro modelo se basa en tarifas mensuales recurrentes de restaurantes gestionados. A medida que construyes tu base de clientes, tus ingresos crecen y se vuelven más predecibles.',
      highlights: [
        {
          icon: 'DollarSign',
          title: 'Ingresos Recurrentes',
          description: 'Tarifas mensuales de gestión de cada cliente'
        },
        {
          icon: 'TrendingUp',
          title: 'Crecimiento Escalable',
          description: 'Agrega más restaurantes para crecer proporcionalmente'
        },
        {
          icon: 'BarChart3',
          title: 'Bonos por Rendimiento',
          description: 'Ganancias adicionales por superar objetivos'
        },
        {
          icon: 'Clock',
          title: 'Valor a Largo Plazo',
          description: 'Relaciones con clientes que duran años'
        }
      ],
      note: 'El potencial de ingresos depende de tu territorio y compromiso. Detalles proporcionados durante calificación.'
    },
    support: {
      title: 'Soporte y Capacitación',
      subtitle: 'Estamos Contigo en Cada Paso',
      items: [
        {
          title: 'Incorporación Inicial',
          description: 'Programa integral: ventas, operaciones, tecnología y gestión de clientes.'
        },
        {
          title: 'Educación Continua',
          description: 'Actualizaciones regulares, tutoriales y mejores prácticas.'
        },
        {
          title: 'Soporte Dedicado',
          description: 'Acceso 24/7 por WhatsApp. Llamadas de estrategia para situaciones complejas.'
        },
        {
          title: 'Actualizaciones del Sistema',
          description: 'Mejoras continuas a sistemas AI sin costo adicional.'
        },
        {
          title: 'Comunidad de Socios',
          description: 'Comunidad privada para networking y compartir estrategias.'
        }
      ]
    },
    cta: {
      title: '¿Quieres ser Socio MrDelivery?',
      subtitle: 'Construye tu propio negocio con nuestra tecnología y soporte.',
      button: 'Más Información'
    },
    footer: {
      rights: 'Todos los derechos reservados.'
    }
  }
};

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Building2,
  Users,
  TrendingUp,
  Target,
  Brain,
  GraduationCap,
  Handshake,
  Shield,
  Headphones,
  DollarSign,
  BarChart3,
  Clock,
  XCircle,
  Truck,
  Video,
  Bot,
  Cog
};

const FranchisePage = () => {
  const { language } = useLanguage();
  const t = franchiseTranslations[language] || franchiseTranslations.en;

  const getWhatsAppUrl = () => {
    const messages = {
      en: "Hello! I'm interested in the MrDelivery Partnership program. I would like to learn more about becoming a partner.",
      ro: "Bună ziua! Sunt interesat de programul de parteneriat MrDelivery. Aș dori să aflu mai multe despre cum pot deveni partener.",
      es: "¡Hola! Estoy interesado en el programa de franquicia MrDelivery. Me gustaría saber más sobre cómo convertirme en socio."
    };
    return `https://api.whatsapp.com/send/?phone=40768676141&text=${encodeURIComponent(messages[language] || messages.en)}&type=phone_number&app_absent=0`;
  };

  return (
    <div className="min-h-screen bg-background stars-bg">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold text-primary">
              MrDelivery
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.home}
              </Link>
              <Link to="/franchise" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Sparkles className="w-4 h-4 text-primary" />
                {t.nav.partner}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <Sparkles className="w-4 h-4" />
                  {t.nav.partner}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-muted-foreground text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            {t.hero.badge}
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">{t.hero.title1}</span>
            <br />
            <span className="text-primary">{t.hero.title2}</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl">
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg font-semibold rounded-xl border-border hover:bg-muted">
                {t.hero.secondaryCta}
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Building className="w-5 h-5 text-primary" />
                <span className="text-3xl sm:text-4xl font-bold text-foreground">50+</span>
              </div>
              <p className="text-sm text-muted-foreground">{t.stats.partners}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-primary" />
                <span className="text-3xl sm:text-4xl font-bold text-foreground">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">{t.stats.restaurants}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-3xl sm:text-4xl font-bold text-foreground">3</span>
              </div>
              <p className="text-sm text-muted-foreground">{t.stats.countries}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            {t.services.title}
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Zap;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.whatIs.title}</h2>
            <p className="text-xl text-primary font-medium mb-4">{t.whatIs.subtitle}</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.whatIs.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 text-primary" />
                {t.whatIs.model.title}
              </h3>
              <ul className="space-y-4">
                {t.whatIs.model.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                {t.whatIs.youGet.title}
              </h3>
              <ul className="space-y-4">
                {t.whatIs.youGet.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who For Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.whoFor.title}</h2>
            <p className="text-xl text-muted-foreground">{t.whoFor.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whoFor.profiles.map((profile, index) => {
              const IconComponent = iconMap[profile.icon] || Building2;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{profile.title}</h3>
                  <p className="text-sm text-muted-foreground">{profile.description}</p>
                </div>
              );
            })}
          </div>
          
          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto italic">
            {t.whoFor.note}
          </p>
        </div>
      </section>

      {/* Who NOT For Section */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.whoNotFor.title}</h2>
            <p className="text-xl text-muted-foreground">{t.whoNotFor.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.whoNotFor.items.map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-destructive/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.whatYouGet.title}</h2>
            <p className="text-xl text-muted-foreground">{t.whatYouGet.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whatYouGet.items.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Zap;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.howItWorks.title}</h2>
            <p className="text-xl text-muted-foreground">{t.howItWorks.subtitle}</p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            
            <div className="space-y-8 lg:space-y-0">
              {t.howItWorks.steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className={`bg-card rounded-2xl p-6 border border-border inline-block ${index % 2 === 1 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                      <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground max-w-sm">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-glow-sm">
                    {step.number}
                  </div>
                  
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.revenue.title}</h2>
            <p className="text-xl text-primary font-medium mb-4">{t.revenue.subtitle}</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.revenue.description}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.revenue.highlights.map((highlight, index) => {
              const IconComponent = iconMap[highlight.icon] || DollarSign;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              );
            })}
          </div>
          
          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto text-sm italic">
            {t.revenue.note}
          </p>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.support.title}</h2>
            <p className="text-xl text-muted-foreground">{t.support.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.support.items.map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.cta.title}</h2>
          <p className="text-lg text-muted-foreground mb-10">{t.cta.subtitle}</p>
          
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl">
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MrDelivery. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FranchisePage;
