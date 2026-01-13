import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
  Phone
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
      secondaryCta: 'Schedule a Discovery Call'
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
          description: 'Submit your application. We review your profile and schedule a discovery call.'
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
      secondary: 'Schedule a Discovery Call',
      note: 'Application does not guarantee acceptance. We carefully review each candidate to ensure mutual fit.'
    }
  },
  ro: {
    nav: {
      backToHome: 'Înapoi la Pagina Principală'
    },
    hero: {
      badge: 'Program Franciză MrDelivery',
      title: 'Construiește o Afacere cu Venituri Recurente în Managementul Livrărilor pentru Restaurante',
      subtitle: 'Devino partener local care administrează restaurante pe platformele de livrare folosind sistemele noastre AI, puterea de negociere și metodologia dovedită.',
      cta: 'Aplică pentru Parteneriat',
      secondaryCta: 'Programează un Call de Descoperire'
    },
    whatIs: {
      title: 'Ce este Franciza MrDelivery?',
      subtitle: 'Un Parteneriat de Tehnologie + Management',
      description: 'Aceasta NU este o franciză tradițională de restaurant. Nu gătești, nu livrezi. Administrezi restaurante pe platformele de livrare folosind sistemele noastre.',
      model: {
        title: 'Modelul de Business',
        items: [
          'Devii partener local MrDelivery în teritoriul tău',
          'Noi furnizăm sisteme AI, training și putere de negociere',
          'Tu administrezi restaurante pe Uber Eats, Glovo, Tazz, Bolt Food',
          'Restaurantele plătesc taxe lunare recurente pentru management',
          'Tu câștigi venit lunar predictibil de la fiecare client'
        ]
      },
      youGet: {
        title: 'Ce Administrezi',
        items: [
          'Negocieri cu platformele (comisioane, bugete)',
          'Optimizare meniu și actualizări zilnice',
          'Campanii de marketing și promoții',
          'Suport clienți și rezolvare probleme',
          'Analiză performanță și raportare'
        ]
      }
    },
    whoFor: {
      title: 'Pentru Cine Este Potrivit',
      subtitle: 'Profile Ideale de Parteneri',
      profiles: [
        {
          icon: 'Building2',
          title: 'Antreprenori',
          description: 'Care caută o oportunitate de business structurată cu potențial de venituri recurente și sisteme dovedite.'
        },
        {
          icon: 'Users',
          title: 'Consultanți Restaurante',
          description: 'Care deja lucrează cu restaurante și vor să adauge un serviciu profitabil portofoliului lor.'
        },
        {
          icon: 'TrendingUp',
          title: 'Specialiști Marketing Digital',
          description: 'Cu experiență în marketing de performanță care vor să se specializeze în industria restaurantelor.'
        },
        {
          icon: 'Target',
          title: 'Operatori Locali',
          description: 'Cu rețele locale puternice care pot construi relații cu proprietarii de restaurante din zona lor.'
        }
      ],
      note: 'Experiența în industria restaurantelor este utilă dar nu obligatorie. Ce contează este angajamentul, profesionalismul și abilitatea de a construi relații cu clienții.'
    },
    whoNotFor: {
      title: 'Pentru Cine NU Este Potrivit',
      subtitle: 'Această oportunitate nu este pentru toată lumea',
      items: [
        {
          icon: 'XCircle',
          title: 'Căutători de Bani Rapizi',
          description: 'Aceasta este o afacere reală care necesită timp pentru a fi construită. Fără povești de succes peste noapte.'
        },
        {
          icon: 'XCircle',
          title: 'Investitori Pasivi',
          description: 'Trebuie să administrezi activ teritoriul și clienții. Nu este o investiție de tip set-and-forget.'
        },
        {
          icon: 'XCircle',
          title: 'Freelanceri în Căutare de Proiecte',
          description: 'Aceasta este o parteneriat de business pe termen lung, nu un proiect freelance sau contract pe termen scurt.'
        },
        {
          icon: 'XCircle',
          title: 'Persoane fără Angajament',
          description: 'Construirea unei baze de clienți necesită dedicare. Avem nevoie de parteneri care sunt aici pe termen lung.'
        }
      ]
    },
    whatYouGet: {
      title: 'Ce Primești ca Partener',
      subtitle: 'Business Complet Gata de Utilizare',
      items: [
        {
          icon: 'Brain',
          title: 'Tehnologie AI',
          description: 'Acces la sistemele noastre proprietare AI pentru optimizare meniu, asistenți vocali, chatboți și analiză.'
        },
        {
          icon: 'GraduationCap',
          title: 'Training Complet',
          description: 'Program de onboarding complet care acoperă vânzări, operațiuni, management platforme și succes client.'
        },
        {
          icon: 'Handshake',
          title: 'Putere de Negociere',
          description: 'Folosește relațiile noastre cu Uber Eats, Glovo, Tazz, Bolt Food pentru comisioane mai bune.'
        },
        {
          icon: 'Shield',
          title: 'Brand și Credibilitate',
          description: 'Operează sub brandul MrDelivery cu reputație stabilită și materiale de marketing.'
        },
        {
          icon: 'Headphones',
          title: 'Suport Continuu',
          description: 'Acces 24/7 la echipa noastră de suport, call-uri de strategie și actualizări continue ale sistemelor.'
        },
        {
          icon: 'Users',
          title: 'Comunitate de Parteneri',
          description: 'Alătură-te unei rețele de parteneri care împărtășesc bune practici, strategii și suport reciproc.'
        }
      ]
    },
    howItWorks: {
      title: 'Cum Funcționează Business-ul',
      subtitle: 'De la Partener la Operațiuni Profitabile',
      steps: [
        {
          number: '01',
          title: 'Aplicație și Calificare',
          description: 'Trimite aplicația ta. Analizăm profilul și programăm un call de descoperire.'
        },
        {
          number: '02',
          title: 'Onboarding și Training',
          description: 'Completează programul nostru complet de training. Învață sistemele, vânzările și operațiunile.'
        },
        {
          number: '03',
          title: 'Configurare Teritoriu',
          description: 'Te ajutăm să îți configurezi teritoriul, materialele de marketing și strategia inițială de prospectare.'
        },
        {
          number: '04',
          title: 'Achiziție Clienți',
          description: 'Începe să abordezi restaurantele din zona ta. Te susținem cu instrumente de vânzare și ghidare.'
        },
        {
          number: '05',
          title: 'Operațiuni Recurente',
          description: 'Administrează clienții lunar folosind sistemele noastre. Colectează taxe recurente și crește portofoliul.'
        }
      ]
    },
    revenue: {
      title: 'Oportunitatea de Venituri',
      subtitle: 'Construiește Venit Lunar Predictibil',
      description: 'Modelul nostru se bazează pe taxe lunare recurente de la restaurantele administrate. Pe măsură ce îți construiești baza de clienți, venitul crește și devine din ce în ce mai predictibil.',
      highlights: [
        {
          icon: 'DollarSign',
          title: 'Venituri Recurente',
          description: 'Taxe lunare de management de la fiecare restaurant client'
        },
        {
          icon: 'TrendingUp',
          title: 'Creștere Scalabilă',
          description: 'Adaugă mai multe restaurante pentru a crește venitul proporțional'
        },
        {
          icon: 'BarChart3',
          title: 'Bonusuri de Performanță',
          description: 'Câștiguri suplimentare pentru depășirea țintelor de creștere'
        },
        {
          icon: 'Clock',
          title: 'Valoare pe Termen Lung',
          description: 'Relații cu clienții care durează ani, nu luni'
        }
      ],
      note: 'Potențialul specific de venituri depinde de teritoriu, nivelul de angajament și numărul de restaurante administrate. Detalii furnizate în procesul de calificare.'
    },
    support: {
      title: 'Suport și Training',
      subtitle: 'Suntem Alături de Tine la Fiecare Pas',
      items: [
        {
          title: 'Onboarding Inițial',
          description: 'Program complet de training care acoperă toate aspectele business-ului: vânzări, operațiuni, tehnologie și management clienți.'
        },
        {
          title: 'Educație Continuă',
          description: 'Actualizări regulate de training, tutoriale pentru funcții noi și bune practici din industrie împărtășite cu toți partenerii.'
        },
        {
          title: 'Suport Dedicat',
          description: 'Acces 24/7 pe WhatsApp la echipa noastră de suport. Call-uri de strategie disponibile pentru situații complexe.'
        },
        {
          title: 'Actualizări Sistem',
          description: 'Îmbunătățiri continue ale sistemelor noastre AI și instrumentelor de management fără costuri suplimentare.'
        },
        {
          title: 'Comunitate de Parteneri',
          description: 'Comunitate privată de parteneri MrDelivery pentru networking, împărtășire strategii și suport reciproc.'
        }
      ]
    },
    cta: {
      title: 'Gata să Îți Construiești Afacerea?',
      subtitle: 'Fă primul pas spre construirea unei afaceri cu venituri recurente în industria livrărilor pentru restaurante.',
      primary: 'Aplică pentru Parteneriat',
      secondary: 'Programează un Call de Descoperire',
      note: 'Aplicația nu garantează acceptarea. Analizăm cu atenție fiecare candidat pentru a asigura potrivirea reciprocă.'
    }
  },
  es: {
    nav: {
      backToHome: 'Volver al Inicio'
    },
    hero: {
      badge: 'Programa de Franquicia MrDelivery',
      title: 'Construye un Negocio con Ingresos Recurrentes en la Gestión de Entregas para Restaurantes',
      subtitle: 'Conviértete en socio local gestionando restaurantes en plataformas de entrega usando nuestros sistemas de IA, poder de negociación y metodología probada.',
      cta: 'Aplicar para ser Socio',
      secondaryCta: 'Programar una Llamada'
    },
    whatIs: {
      title: '¿Qué es la Franquicia MrDelivery?',
      subtitle: 'Una Asociación de Tecnología + Gestión',
      description: 'Esto NO es una franquicia tradicional de restaurante. No cocinas, no entregas. Gestionas restaurantes en plataformas de entrega usando nuestros sistemas.',
      model: {
        title: 'El Modelo de Negocio',
        items: [
          'Te conviertes en socio local MrDelivery en tu territorio',
          'Nosotros proporcionamos sistemas de IA, capacitación y poder de negociación',
          'Tú gestionas restaurantes en Uber Eats, DoorDash, Grubhub',
          'Los restaurantes pagan tarifas mensuales recurrentes por la gestión',
          'Tú ganas ingresos mensuales predecibles de cada cliente'
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
      title: 'Para Quién Es Esto',
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
      title: 'Para Quién NO Es Esto',
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
          description: 'Esta es una asociación de negocio a largo plazo, no un proyecto freelance o contrato a corto plazo.'
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
          description: 'Acceso a nuestros sistemas propietarios de IA para optimización de menú, agentes de voz, chatbots y análisis.'
        },
        {
          icon: 'GraduationCap',
          title: 'Capacitación Completa',
          description: 'Programa de incorporación completo que cubre ventas, operaciones, gestión de plataformas y éxito del cliente.'
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
          description: 'Acceso 24/7 a nuestro equipo de soporte, llamadas de estrategia y actualizaciones continuas del sistema.'
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
          description: 'Envía tu aplicación. Revisamos tu perfil y programamos una llamada de descubrimiento.'
        },
        {
          number: '02',
          title: 'Incorporación y Capacitación',
          description: 'Completa nuestro programa integral de capacitación. Aprende sistemas, ventas y operaciones.'
        },
        {
          number: '03',
          title: 'Configuración de Territorio',
          description: 'Te ayudamos a configurar tu territorio, materiales de marketing y estrategia inicial de prospección.'
        },
        {
          number: '04',
          title: 'Adquisición de Clientes',
          description: 'Comienza a acercarte a restaurantes en tu área. Te apoyamos con herramientas de venta y orientación.'
        },
        {
          number: '05',
          title: 'Operaciones Recurrentes',
          description: 'Gestiona tus clientes mensualmente usando nuestros sistemas. Cobra tarifas recurrentes y crece tu portafolio.'
        }
      ]
    },
    revenue: {
      title: 'La Oportunidad de Ingresos',
      subtitle: 'Construye Ingresos Mensuales Predecibles',
      description: 'Nuestro modelo se basa en tarifas mensuales recurrentes de restaurantes gestionados. A medida que construyes tu base de clientes, tus ingresos crecen y se vuelven cada vez más predecibles.',
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
      note: 'El potencial de ingresos específico depende de tu territorio, nivel de compromiso y número de restaurantes gestionados. Detalles proporcionados durante el proceso de calificación.'
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
          description: 'Actualizaciones regulares de capacitación, tutoriales de nuevas funciones y mejores prácticas de la industria compartidas con todos los socios.'
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
      subtitle: 'Da el primer paso hacia la construcción de un negocio con ingresos recurrentes en la industria de entregas para restaurantes.',
      primary: 'Aplicar para ser Socio',
      secondary: 'Programar una Llamada',
      note: 'La aplicación no garantiza aceptación. Revisamos cuidadosamente cada candidato para asegurar un ajuste mutuo.'
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
  XCircle
};

const FranchisePage = () => {
  const { language } = useLanguage();
  const t = franchiseTranslations[language] || franchiseTranslations.en;

  const getWhatsAppUrl = () => {
    const messages = {
      en: "Hello! I'm interested in the MrDelivery Franchise Partnership program. I would like to learn more about becoming a partner.",
      ro: "Bună! Sunt interesat de programul de parteneriat franciză MrDelivery. Aș dori să aflu mai multe despre a deveni partener.",
      es: "¡Hola! Estoy interesado en el programa de franquicia MrDelivery. Me gustaría saber más sobre cómo convertirme en socio."
    };
    return `https://api.whatsapp.com/send/?phone=40768676141&text=${encodeURIComponent(messages[language] || messages.en)}&type=phone_number&app_absent=0`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">{t.nav.backToHome}</span>
            </Link>
            <div className="text-xl font-bold text-primary">MrDelivery</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            {t.hero.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight max-w-5xl mx-auto">
            {t.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl">
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg font-semibold rounded-xl border-2">
                <Phone className="mr-2 w-5 h-5" />
                {t.hero.secondaryCta}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.whatIs.title}</h2>
            <p className="text-xl text-primary font-medium mb-4">{t.whatIs.subtitle}</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.whatIs.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 text-primary" />
                {t.whatIs.model.title}
              </h3>
              <ul className="space-y-4">
                {t.whatIs.model.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                {t.whatIs.youGet.title}
              </h3>
              <ul className="space-y-4">
                {t.whatIs.youGet.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
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
                <div key={index} className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow">
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
      <section className="py-16 sm:py-24 bg-destructive/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.whoNotFor.title}</h2>
            <p className="text-xl text-muted-foreground">{t.whoNotFor.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.whoNotFor.items.map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-destructive/20 shadow-lg">
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
                <div key={index} className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
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
      <section className="py-16 sm:py-24 bg-muted/30">
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
                    <div className={`bg-card rounded-2xl p-6 border border-border shadow-lg inline-block ${index % 2 === 1 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                      <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground max-w-sm">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg">
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
                <div key={index} className="bg-gradient-to-br from-card to-muted/30 rounded-2xl p-6 border border-border shadow-lg text-center">
                  <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-7 h-7 text-success" />
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
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.support.title}</h2>
            <p className="text-xl text-muted-foreground">{t.support.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.support.items.map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border shadow-lg">
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
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">{t.cta.title}</h2>
          <p className="text-lg text-primary-foreground/80 mb-10">{t.cta.subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-semibold rounded-xl">
                {t.cta.primary}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10">
                <MessageSquare className="mr-2 w-5 h-5" />
                {t.cta.secondary}
              </Button>
            </a>
          </div>
          
          <p className="text-sm text-primary-foreground/60 italic">{t.cta.note}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MrDelivery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FranchisePage;
