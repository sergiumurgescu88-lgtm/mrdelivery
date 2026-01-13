import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  XCircle, 
  Building2, 
  Brain, 
  Users, 
  TrendingUp, 
  Headphones, 
  Rocket,
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
  Sparkles,
  Bot
} from 'lucide-react';

const franchiseTranslations = {
  en: {
    nav: {
      backToHome: 'Back to Home'
    },
    hero: {
      badge: 'MrDelivery Franchise Program',
      title: 'Build a Recurring Revenue Business with Restaurant Delivery Management',
      subtitle: 'Become a local partner managing restaurants on delivery platforms using our AI-powered systems, negotiation power, and proven methodology.',
      cta: 'Apply to Become a Partner',
      secondaryCta: 'Schedule a Call'
    },
    whatIs: {
      title: 'What is the MrDelivery Franchise?',
      subtitle: 'A Technology + Management Partnership',
      description: 'This is NOT a traditional restaurant franchise. You don\'t cook, you don\'t deliver. You manage restaurants on delivery platforms using our systems.',
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
    whoFor: {
      title: 'Who This Is For',
      subtitle: 'Ideal Partner Profiles',
      profiles: [
        {
          icon: 'Building2',
          title: 'Entrepreneurs',
          description: 'Looking for a structured business opportunity with recurring revenue potential and proven systems.'
        },
        {
          icon: 'Users',
          title: 'Restaurant Consultants',
          description: 'Already working with restaurants and want to add a profitable service to your portfolio.'
        },
        {
          icon: 'TrendingUp',
          title: 'Digital Marketers',
          description: 'With experience in performance marketing who want to specialize in the restaurant industry.'
        },
        {
          icon: 'Target',
          title: 'Local Operators',
          description: 'With strong local networks who can build relationships with restaurant owners in their area.'
        }
      ],
      note: 'Experience in the restaurant industry is helpful but not mandatory. What matters is commitment, professionalism, and the ability to build client relationships.'
    },
    whoNotFor: {
      title: 'Who This Is NOT For',
      subtitle: 'This opportunity is not suitable for everyone',
      items: [
        {
          icon: 'XCircle',
          title: 'Quick Money Seekers',
          description: 'This is a real business that requires time to build. No overnight success stories.'
        },
        {
          icon: 'XCircle',
          title: 'Passive Investors',
          description: 'You need to actively manage your territory and clients. This is not a set-and-forget investment.'
        },
        {
          icon: 'XCircle',
          title: 'Freelancers Looking for Gigs',
          description: 'This is a long-term business partnership, not a freelance project or short-term contract.'
        },
        {
          icon: 'XCircle',
          title: 'People Without Commitment',
          description: 'Building a client base takes dedication. We need partners who are in it for the long run.'
        }
      ]
    },
    whatYouGet: {
      title: 'What You Get as a Partner',
      subtitle: 'Complete Business-in-a-Box',
      items: [
        {
          icon: 'Brain',
          title: 'AI-Powered Technology',
          description: 'Access to our proprietary AI systems for menu optimization, voice agents, chatbots, and analytics.'
        },
        {
          icon: 'GraduationCap',
          title: 'Comprehensive Training',
          description: 'Complete onboarding program covering sales, operations, platform management, and client success.'
        },
        {
          icon: 'Handshake',
          title: 'Negotiation Power',
          description: 'Leverage our relationships with Uber Eats, DoorDash, and Grubhub for better commission rates.'
        },
        {
          icon: 'Shield',
          title: 'Brand & Credibility',
          description: 'Operate under the MrDelivery brand with established reputation and marketing materials.'
        },
        {
          icon: 'Headphones',
          title: 'Ongoing Support',
          description: '24/7 access to our support team, regular strategy calls, and continuous system updates.'
        },
        {
          icon: 'Users',
          title: 'Partner Community',
          description: 'Join a network of partners sharing best practices, strategies, and mutual support.'
        }
      ]
    },
    howItWorks: {
      title: 'How the Business Works',
      subtitle: 'From Partner to Profitable Operations',
      steps: [
        {
          number: '01',
          title: 'Application & Qualification',
          description: 'Submit your application. We review your profile and schedule a call to discuss the opportunity.'
        },
        {
          number: '02',
          title: 'Onboarding & Training',
          description: 'Complete our comprehensive training program. Learn systems, sales, and operations.'
        },
        {
          number: '03',
          title: 'Territory Setup',
          description: 'We help you set up your territory, marketing materials, and initial prospecting strategy.'
        },
        {
          number: '04',
          title: 'Client Acquisition',
          description: 'Start approaching restaurants in your area. We support you with sales tools and guidance.'
        },
        {
          number: '05',
          title: 'Recurring Operations',
          description: 'Manage your clients monthly using our systems. Collect recurring fees and grow your portfolio.'
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
          description: 'Monthly management fees from each restaurant client'
        },
        {
          icon: 'TrendingUp',
          title: 'Scalable Growth',
          description: 'Add more restaurants to grow your income proportionally'
        },
        {
          icon: 'BarChart3',
          title: 'Performance Bonuses',
          description: 'Additional earnings for exceeding client growth targets'
        },
        {
          icon: 'Clock',
          title: 'Long-term Value',
          description: 'Client relationships that last years, not months'
        }
      ],
      note: 'Specific revenue potential depends on your territory, commitment level, and number of managed restaurants. Details provided during the qualification process.'
    },
    support: {
      title: 'Support & Training',
      subtitle: 'We\'re With You Every Step',
      items: [
        {
          title: 'Initial Onboarding',
          description: 'Comprehensive training program covering all aspects of the business: sales, operations, technology, and client management.'
        },
        {
          title: 'Ongoing Education',
          description: 'Regular training updates, new feature tutorials, and industry best practices shared with all partners.'
        },
        {
          title: 'Dedicated Support',
          description: '24/7 WhatsApp access to our support team. Strategy calls available for complex situations.'
        },
        {
          title: 'System Updates',
          description: 'Continuous improvements to our AI systems and management tools at no additional cost.'
        },
        {
          title: 'Partner Community',
          description: 'Private community of MrDelivery partners for networking, sharing strategies, and mutual support.'
        }
      ]
    },
    cta: {
      title: 'Ready to Build Your Business?',
      subtitle: 'Take the first step toward building a recurring revenue business in the restaurant delivery industry.',
      primary: 'Apply to Become a Partner',
      secondary: 'Schedule a Call',
      note: 'Application does not guarantee acceptance. We carefully review each candidate to ensure mutual fit.'
    },
    services: 'Main Services',
    servicesList: [
      {
        icon: 'TrendingUp',
        title: 'Delivery Management',
        description: 'We negotiate commissions and budgets on Glovo, Wolt, and Bolt Food.'
      },
      {
        icon: 'Video',
        title: 'AI Video Production',
        description: 'We create and post video content daily on 4 platforms.'
      },
      {
        icon: 'MessageSquare',
        title: 'AI Chatbots',
        description: 'Virtual assistants that respond to customers 24/7.'
      },
      {
        icon: 'Bot',
        title: 'Complete Automations',
        description: 'AI systems for marketing, orders, and operations.'
      }
    ],
    franchiseBanner: {
      title: 'Want to Become a MrDelivery Partner?',
      description: 'Build your own business with our technology and support.',
      cta: 'Learn More'
    }
  },
  ro: {
    nav: {
      backToHome: 'Înapoi la Pagina Principală'
    },
    hero: {
      badge: 'Program de Parteneriat MrDelivery',
      title: 'Construiește o Afacere cu Venituri Recurente în Managementul Livrărilor',
      subtitle: 'Devino partener local și administrează restaurante pe platformele de livrare folosind sistemele noastre bazate pe inteligență artificială, puterea de negociere și metodologia testată.',
      cta: 'Aplică pentru Parteneriat',
      secondaryCta: 'Programează o Discuție'
    },
    whatIs: {
      title: 'Ce înseamnă Parteneriatul MrDelivery?',
      subtitle: 'Parteneriat de Tehnologie și Management',
      description: 'Aceasta NU este o franciză tradițională de restaurant. Nu gătești, nu livrezi. Administrezi restaurante pe platformele de livrare folosind sistemele noastre.',
      model: {
        title: 'Modelul de Afacere',
        items: [
          'Devii partener local MrDelivery în zona ta',
          'Îți oferim sisteme AI, instruire completă și putere de negociere',
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
    whoFor: {
      title: 'Cui i se Adresează',
      subtitle: 'Profiluri Ideale de Parteneri',
      profiles: [
        {
          icon: 'Building2',
          title: 'Antreprenori',
          description: 'Care caută o oportunitate de afacere structurată cu potențial de venituri recurente și sisteme deja funcționale.'
        },
        {
          icon: 'Users',
          title: 'Consultanți HoReCa',
          description: 'Care deja lucrează cu restaurante și doresc să adauge un serviciu profitabil în portofoliul lor.'
        },
        {
          icon: 'TrendingUp',
          title: 'Specialiști în Marketing Digital',
          description: 'Cu experiență în marketing de performanță care vor să se specializeze în industria restaurantelor.'
        },
        {
          icon: 'Target',
          title: 'Operatori Locali',
          description: 'Cu rețele locale puternice care pot construi relații cu proprietarii de restaurante din zona lor.'
        }
      ],
      note: 'Experiența în industria restaurantelor este utilă, dar nu obligatorie. Ce contează este angajamentul, profesionalismul și capacitatea de a construi relații durabile cu clienții.'
    },
    whoNotFor: {
      title: 'Cui NU i se Adresează',
      subtitle: 'Această oportunitate nu este potrivită pentru toată lumea',
      items: [
        {
          icon: 'XCircle',
          title: 'Persoane care vor Bani Rapizi',
          description: 'Aceasta este o afacere reală care necesită timp pentru a fi construită. Nu există povești de succes peste noapte.'
        },
        {
          icon: 'XCircle',
          title: 'Investitori Pasivi',
          description: 'Trebuie să administrezi activ zona și clienții. Nu este o investiție de tip „setează și uită".'
        },
        {
          icon: 'XCircle',
          title: 'Freelanceri în Căutare de Proiecte',
          description: 'Acesta este un parteneriat de afaceri pe termen lung, nu un proiect freelance sau un contract temporar.'
        },
        {
          icon: 'XCircle',
          title: 'Persoane fără Angajament',
          description: 'Construirea unei baze de clienți necesită dedicare. Căutăm parteneri care sunt implicați pe termen lung.'
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
          description: 'Acces la sistemele noastre de inteligență artificială pentru optimizarea meniului, asistenți vocali, chatboți și analiză.'
        },
        {
          icon: 'GraduationCap',
          title: 'Instruire Completă',
          description: 'Program de onboarding care acoperă vânzări, operațiuni, managementul platformelor și succesul clienților.'
        },
        {
          icon: 'Handshake',
          title: 'Putere de Negociere',
          description: 'Folosești relațiile noastre cu Uber Eats, Glovo, Tazz și Bolt Food pentru comisioane mai bune.'
        },
        {
          icon: 'Shield',
          title: 'Brand și Credibilitate',
          description: 'Operezi sub brandul MrDelivery cu reputație stabilită și materiale de marketing gata de utilizare.'
        },
        {
          icon: 'Headphones',
          title: 'Suport Permanent',
          description: 'Acces 24/7 la echipa noastră de suport, discuții de strategie și actualizări continue ale sistemelor.'
        },
        {
          icon: 'Users',
          title: 'Comunitate de Parteneri',
          description: 'Te alături unei rețele de parteneri care împărtășesc bune practici, strategii și se sprijină reciproc.'
        }
      ]
    },
    howItWorks: {
      title: 'Cum Funcționează Afacerea',
      subtitle: 'De la Aplicație la Operațiuni Profitabile',
      steps: [
        {
          number: '01',
          title: 'Aplicație și Calificare',
          description: 'Trimite aplicația. Analizăm profilul tău și programăm o discuție pentru a afla mai multe detalii.'
        },
        {
          number: '02',
          title: 'Onboarding și Instruire',
          description: 'Parcurgi programul nostru complet de instruire. Înveți sistemele, vânzările și operațiunile.'
        },
        {
          number: '03',
          title: 'Configurare Zonă',
          description: 'Te ajutăm să îți configurezi zona, materialele de marketing și strategia inițială de prospectare.'
        },
        {
          number: '04',
          title: 'Achiziție Clienți',
          description: 'Începi să abordezi restaurantele din zona ta. Te susținem cu instrumente de vânzare și îndrumare.'
        },
        {
          number: '05',
          title: 'Operațiuni Recurente',
          description: 'Administrezi clienții lunar folosind sistemele noastre. Colectezi taxe recurente și îți crești portofoliul.'
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
          description: 'Taxe lunare de administrare de la fiecare restaurant client'
        },
        {
          icon: 'TrendingUp',
          title: 'Creștere Scalabilă',
          description: 'Adaugi mai multe restaurante și crești venitul proporțional'
        },
        {
          icon: 'BarChart3',
          title: 'Bonusuri de Performanță',
          description: 'Câștiguri suplimentare pentru depășirea obiectivelor de creștere'
        },
        {
          icon: 'Clock',
          title: 'Valoare pe Termen Lung',
          description: 'Relații cu clienții care durează ani de zile, nu luni'
        }
      ],
      note: 'Potențialul de venituri depinde de zonă, nivelul de angajament și numărul de restaurante administrate. Detaliile sunt furnizate în procesul de calificare.'
    },
    support: {
      title: 'Suport și Instruire',
      subtitle: 'Suntem Alături de Tine la Fiecare Pas',
      items: [
        {
          title: 'Onboarding Inițial',
          description: 'Program complet de instruire care acoperă toate aspectele afacerii: vânzări, operațiuni, tehnologie și managementul clienților.'
        },
        {
          title: 'Educație Continuă',
          description: 'Actualizări regulate de instruire, tutoriale pentru funcționalități noi și bune practici din industrie împărtășite cu toți partenerii.'
        },
        {
          title: 'Suport Dedicat',
          description: 'Acces 24/7 pe WhatsApp la echipa noastră de suport. Discuții de strategie disponibile pentru situații complexe.'
        },
        {
          title: 'Actualizări Sistem',
          description: 'Îmbunătățiri continue ale sistemelor noastre AI și instrumentelor de administrare fără costuri suplimentare.'
        },
        {
          title: 'Comunitate de Parteneri',
          description: 'Comunitate privată de parteneri MrDelivery pentru networking, împărtășire de strategii și suport reciproc.'
        }
      ]
    },
    cta: {
      title: 'Ești Pregătit să Îți Construiești Afacerea?',
      subtitle: 'Fă primul pas către o afacere cu venituri recurente în industria livrărilor pentru restaurante.',
      primary: 'Aplică pentru Parteneriat',
      secondary: 'Programează o Discuție',
      note: 'Aplicația nu garantează acceptarea. Analizăm cu atenție fiecare candidat pentru a ne asigura de potrivirea reciprocă.'
    },
    services: 'Servicii Principale',
    servicesList: [
      {
        icon: 'TrendingUp',
        title: 'Management Livrări',
        description: 'Negociem comisioane și bugete pe Glovo, Wolt și Bolt Food.'
      },
      {
        icon: 'Video',
        title: 'Producție Video AI',
        description: 'Creăm și postăm conținut video zilnic pe 4 platforme.'
      },
      {
        icon: 'MessageSquare',
        title: 'Chatboți AI',
        description: 'Asistenți virtuali care răspund clienților 24/7.'
      },
      {
        icon: 'Bot',
        title: 'Automatizări Complete',
        description: 'Sisteme AI pentru marketing, comenzi și operațiuni.'
      }
    ],
    franchiseBanner: {
      title: 'Vrei să Devii Partener MrDelivery?',
      description: 'Construiește-ți propria afacere cu tehnologia și suportul nostru.',
      cta: 'Află Mai Multe'
    }
  },
  es: {
    nav: {
      backToHome: 'Volver al Inicio'
    },
    hero: {
      badge: 'Programa de Franquicia MrDelivery',
      title: 'Construye un Negocio con Ingresos Recurrentes en Gestión de Entregas',
      subtitle: 'Conviértete en socio local gestionando restaurantes en plataformas de entrega usando nuestros sistemas de IA, poder de negociación y metodología comprobada.',
      cta: 'Aplicar para ser Socio',
      secondaryCta: 'Programar una Llamada'
    },
    whatIs: {
      title: '¿Qué es la Franquicia MrDelivery?',
      subtitle: 'Asociación de Tecnología + Gestión',
      description: 'Esto NO es una franquicia tradicional de restaurante. No cocinas, no entregas. Gestionas restaurantes en plataformas de entrega usando nuestros sistemas.',
      model: {
        title: 'El Modelo de Negocio',
        items: [
          'Te conviertes en socio local MrDelivery en tu territorio',
          'Te proporcionamos sistemas de IA, capacitación y poder de negociación',
          'Gestionas restaurantes en Uber Eats, DoorDash, Grubhub',
          'Los restaurantes pagan tarifas mensuales recurrentes por la gestión',
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
    whoFor: {
      title: 'Para Quién Es',
      subtitle: 'Perfiles Ideales de Socios',
      profiles: [
        {
          icon: 'Building2',
          title: 'Emprendedores',
          description: 'Buscando una oportunidad de negocio estructurada con potencial de ingresos recurrentes y sistemas probados.'
        },
        {
          icon: 'Users',
          title: 'Consultores de Restaurantes',
          description: 'Ya trabajando con restaurantes y queriendo agregar un servicio rentable a su portafolio.'
        },
        {
          icon: 'TrendingUp',
          title: 'Especialistas en Marketing Digital',
          description: 'Con experiencia en marketing de rendimiento que quieren especializarse en la industria restaurantera.'
        },
        {
          icon: 'Target',
          title: 'Operadores Locales',
          description: 'Con redes locales fuertes que pueden construir relaciones con propietarios de restaurantes en su área.'
        }
      ],
      note: 'La experiencia en la industria restaurantera es útil pero no obligatoria. Lo que importa es el compromiso, el profesionalismo y la capacidad de construir relaciones con clientes.'
    },
    whoNotFor: {
      title: 'Para Quién NO Es',
      subtitle: 'Esta oportunidad no es para todos',
      items: [
        {
          icon: 'XCircle',
          title: 'Buscadores de Dinero Rápido',
          description: 'Este es un negocio real que requiere tiempo para construirse. Sin historias de éxito de la noche a la mañana.'
        },
        {
          icon: 'XCircle',
          title: 'Inversores Pasivos',
          description: 'Necesitas gestionar activamente tu territorio y clientes. No es una inversión de configurar y olvidar.'
        },
        {
          icon: 'XCircle',
          title: 'Freelancers Buscando Proyectos',
          description: 'Esta es una asociación de negocio a largo plazo, no un proyecto freelance o contrato temporal.'
        },
        {
          icon: 'XCircle',
          title: 'Personas Sin Compromiso',
          description: 'Construir una base de clientes requiere dedicación. Necesitamos socios comprometidos a largo plazo.'
        }
      ]
    },
    whatYouGet: {
      title: 'Lo Que Recibes como Socio',
      subtitle: 'Negocio Completo Listo para Usar',
      items: [
        {
          icon: 'Brain',
          title: 'Tecnología de IA',
          description: 'Acceso a nuestros sistemas de IA para optimización de menú, agentes de voz, chatbots y análisis.'
        },
        {
          icon: 'GraduationCap',
          title: 'Capacitación Completa',
          description: 'Programa de incorporación que cubre ventas, operaciones, gestión de plataformas y éxito del cliente.'
        },
        {
          icon: 'Handshake',
          title: 'Poder de Negociación',
          description: 'Aprovecha nuestras relaciones con Uber Eats, DoorDash y Grubhub para mejores tasas de comisión.'
        },
        {
          icon: 'Shield',
          title: 'Marca y Credibilidad',
          description: 'Opera bajo la marca MrDelivery con reputación establecida y materiales de marketing.'
        },
        {
          icon: 'Headphones',
          title: 'Soporte Continuo',
          description: 'Acceso 24/7 a nuestro equipo de soporte, llamadas de estrategia y actualizaciones del sistema.'
        },
        {
          icon: 'Users',
          title: 'Comunidad de Socios',
          description: 'Únete a una red de socios compartiendo mejores prácticas, estrategias y apoyo mutuo.'
        }
      ]
    },
    howItWorks: {
      title: 'Cómo Funciona el Negocio',
      subtitle: 'De Socio a Operaciones Rentables',
      steps: [
        {
          number: '01',
          title: 'Aplicación y Calificación',
          description: 'Envía tu aplicación. Revisamos tu perfil y programamos una llamada para discutir la oportunidad.'
        },
        {
          number: '02',
          title: 'Incorporación y Capacitación',
          description: 'Completa nuestro programa integral de capacitación. Aprende sistemas, ventas y operaciones.'
        },
        {
          number: '03',
          title: 'Configuración de Territorio',
          description: 'Te ayudamos a configurar tu territorio, materiales de marketing y estrategia inicial.'
        },
        {
          number: '04',
          title: 'Adquisición de Clientes',
          description: 'Comienza a acercarte a restaurantes en tu área. Te apoyamos con herramientas y orientación.'
        },
        {
          number: '05',
          title: 'Operaciones Recurrentes',
          description: 'Gestiona tus clientes mensualmente usando nuestros sistemas. Cobra tarifas recurrentes y crece.'
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
          description: 'Tarifas mensuales de gestión de cada cliente restaurante'
        },
        {
          icon: 'TrendingUp',
          title: 'Crecimiento Escalable',
          description: 'Agrega más restaurantes para crecer tus ingresos proporcionalmente'
        },
        {
          icon: 'BarChart3',
          title: 'Bonos por Rendimiento',
          description: 'Ganancias adicionales por superar objetivos de crecimiento'
        },
        {
          icon: 'Clock',
          title: 'Valor a Largo Plazo',
          description: 'Relaciones con clientes que duran años, no meses'
        }
      ],
      note: 'El potencial de ingresos depende de tu territorio, nivel de compromiso y número de restaurantes gestionados. Detalles proporcionados durante el proceso de calificación.'
    },
    support: {
      title: 'Soporte y Capacitación',
      subtitle: 'Estamos Contigo en Cada Paso',
      items: [
        {
          title: 'Incorporación Inicial',
          description: 'Programa integral de capacitación que cubre todos los aspectos del negocio: ventas, operaciones, tecnología y gestión de clientes.'
        },
        {
          title: 'Educación Continua',
          description: 'Actualizaciones regulares de capacitación, tutoriales de nuevas funciones y mejores prácticas compartidas con todos los socios.'
        },
        {
          title: 'Soporte Dedicado',
          description: 'Acceso 24/7 por WhatsApp a nuestro equipo de soporte. Llamadas de estrategia disponibles para situaciones complejas.'
        },
        {
          title: 'Actualizaciones del Sistema',
          description: 'Mejoras continuas a nuestros sistemas de IA y herramientas de gestión sin costo adicional.'
        },
        {
          title: 'Comunidad de Socios',
          description: 'Comunidad privada de socios MrDelivery para networking, compartir estrategias y apoyo mutuo.'
        }
      ]
    },
    cta: {
      title: '¿Listo para Construir tu Negocio?',
      subtitle: 'Da el primer paso hacia un negocio con ingresos recurrentes en la industria de entregas para restaurantes.',
      primary: 'Aplicar para ser Socio',
      secondary: 'Programar una Llamada',
      note: 'La aplicación no garantiza aceptación. Revisamos cuidadosamente cada candidato para asegurar un ajuste mutuo.'
    },
    services: 'Servicios Principales',
    servicesList: [
      {
        icon: 'TrendingUp',
        title: 'Gestión de Entregas',
        description: 'Negociamos comisiones y presupuestos en Glovo, Wolt y Bolt Food.'
      },
      {
        icon: 'Video',
        title: 'Producción de Video AI',
        description: 'Creamos y publicamos contenido de video diariamente en 4 plataformas.'
      },
      {
        icon: 'MessageSquare',
        title: 'Chatbots de IA',
        description: 'Asistentes virtuales que responden a los clientes 24/7.'
      },
      {
        icon: 'Bot',
        title: 'Automatizaciones Completas',
        description: 'Sistemas de IA para marketing, pedidos y operaciones.'
      }
    ],
    franchiseBanner: {
      title: '¿Quieres Ser Socio de MrDelivery?',
      description: 'Construye tu propio negocio con nuestra tecnología y soporte.',
      cta: 'Saber Más'
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
  Bot,
  MessageSquare
};

// Star background component
const StarBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Stars layer 1 - small stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={`star-1-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Stars layer 2 - medium stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-2-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Stars layer 3 - large stars with glow */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`star-3-${i}`}
            className="absolute w-1.5 h-1.5 bg-yellow-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 6px 2px rgba(253, 224, 71, 0.5)',
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-transparent to-yellow-900/5" />
    </div>
  );
};

const FranchisePage = () => {
  const { language } = useLanguage();
  const t = franchiseTranslations[language] || franchiseTranslations.en;

  const getWhatsAppUrl = () => {
    const messages = {
      en: "Hello! I'm interested in the MrDelivery Franchise Partnership program. I would like to learn more about becoming a partner.",
      ro: "Bună ziua! Sunt interesat de programul de parteneriat MrDelivery. Aș dori să aflu mai multe despre cum pot deveni partener.",
      es: "¡Hola! Estoy interesado en el programa de franquicia MrDelivery. Me gustaría saber más sobre cómo convertirme en socio."
    };
    return `https://api.whatsapp.com/send/?phone=40768676141&text=${encodeURIComponent(messages[language] || messages.en)}&type=phone_number&app_absent=0`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">{t.nav.backToHome}</span>
            </Link>
            <div className="text-xl font-bold text-yellow-400">MrDelivery</div>
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
          </div>
          <div className="sm:hidden mt-3">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <StarBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t.hero.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            {t.hero.title.split(' ').map((word, i) => 
              i === 0 || i === 1 ? (
                <span key={i}>{word} </span>
              ) : i === 2 || i === 3 ? (
                <span key={i} className="text-yellow-400">{word} </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-6 text-lg font-semibold rounded-xl">
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg font-semibold rounded-xl border-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400">
                <Phone className="mr-2 w-5 h-5" />
                {t.hero.secondaryCta}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - Added from reference */}
      <section className="relative py-16 sm:py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.services}</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.servicesList.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Zap;
              return (
                <div key={index} className="bg-black/50 rounded-2xl p-6 border border-yellow-500/20 shadow-lg hover:border-yellow-500/40 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="relative py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.whatIs.title}</h2>
            <p className="text-xl text-yellow-400 font-medium mb-4">{t.whatIs.subtitle}</p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">{t.whatIs.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-yellow-500/20 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 text-yellow-400" />
                {t.whatIs.model.title}
              </h3>
              <ul className="space-y-4">
                {t.whatIs.model.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-yellow-500/20 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-yellow-400" />
                {t.whatIs.youGet.title}
              </h3>
              <ul className="space-y-4">
                {t.whatIs.youGet.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who For Section */}
      <section className="relative py-16 sm:py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.whoFor.title}</h2>
            <p className="text-xl text-gray-400">{t.whoFor.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whoFor.profiles.map((profile, index) => {
              const IconComponent = iconMap[profile.icon] || Building2;
              return (
                <div key={index} className="bg-black/50 rounded-2xl p-6 border border-yellow-500/20 shadow-lg hover:border-yellow-500/40 transition-all hover:shadow-yellow-500/10">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{profile.title}</h3>
                  <p className="text-sm text-gray-400">{profile.description}</p>
                </div>
              );
            })}
          </div>
          
          <p className="text-center text-gray-500 mt-8 max-w-3xl mx-auto italic">
            {t.whoFor.note}
          </p>
        </div>
      </section>

      {/* Who NOT For Section */}
      <section className="relative py-16 sm:py-24 bg-red-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.whoNotFor.title}</h2>
            <p className="text-xl text-gray-400">{t.whoNotFor.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.whoNotFor.items.map((item, index) => (
              <div key={index} className="bg-black/50 rounded-2xl p-6 border border-red-500/30 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="relative py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.whatYouGet.title}</h2>
            <p className="text-xl text-gray-400">{t.whatYouGet.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whatYouGet.items.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Zap;
              return (
                <div key={index} className="bg-gray-900/50 rounded-2xl p-6 border border-yellow-500/20 shadow-lg hover:border-yellow-500/40 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-16 sm:py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.howItWorks.title}</h2>
            <p className="text-xl text-gray-400">{t.howItWorks.subtitle}</p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-500/30 -translate-x-1/2" />
            
            <div className="space-y-8 lg:space-y-0">
              {t.howItWorks.steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className={`bg-black/50 rounded-2xl p-6 border border-yellow-500/20 shadow-lg inline-block ${index % 2 === 1 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400 max-w-sm">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-16 h-16 rounded-full bg-yellow-500 text-black flex items-center justify-center text-xl font-bold shadow-lg shadow-yellow-500/30">
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
      <section className="relative py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.revenue.title}</h2>
            <p className="text-xl text-yellow-400 font-medium mb-4">{t.revenue.subtitle}</p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">{t.revenue.description}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.revenue.highlights.map((highlight, index) => {
              const IconComponent = iconMap[highlight.icon] || DollarSign;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black rounded-2xl p-6 border border-green-500/30 shadow-lg text-center">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-400">{highlight.description}</p>
                </div>
              );
            })}
          </div>
          
          <p className="text-center text-gray-500 mt-8 max-w-3xl mx-auto text-sm italic">
            {t.revenue.note}
          </p>
        </div>
      </section>

      {/* Support Section */}
      <section className="relative py-16 sm:py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.support.title}</h2>
            <p className="text-xl text-gray-400">{t.support.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.support.items.map((item, index) => (
              <div key={index} className="bg-black/50 rounded-2xl p-6 border border-yellow-500/20 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Banner */}
      <section className="relative py-16 sm:py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-yellow-600/10 to-yellow-500/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.franchiseBanner.title}</h2>
          <p className="text-lg text-gray-300 mb-8">{t.franchiseBanner.description}</p>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-6 text-lg font-semibold rounded-xl">
              {t.franchiseBanner.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-yellow-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t.cta.title}</h2>
          <p className="text-lg text-black/70 mb-10">{t.cta.subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-black hover:bg-gray-900 text-yellow-400 px-8 py-6 text-lg font-semibold rounded-xl">
                {t.cta.primary}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg font-semibold rounded-xl border-2 border-black/30 text-black hover:bg-black/10">
                <MessageSquare className="mr-2 w-5 h-5" />
                {t.cta.secondary}
              </Button>
            </a>
          </div>
          
          <p className="text-sm text-black/60 italic">{t.cta.note}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MrDelivery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FranchisePage;
