import { 
  Calendar, Building2, Stethoscope, UtensilsCrossed, Brain, 
  Landmark, ShoppingCart, Hotel, Workflow, MessageCircle, 
  Share2, Home, Briefcase, LucideIcon
} from 'lucide-react';

export interface AutomationFeature {
  icon: string;
  title: string;
  description: string;
}

export interface AutomationBenefit {
  stat: string;
  label: string;
}

export interface AutomationService {
  id: string;
  slug: string;
  icon: LucideIcon;
  color: string;
  badge: {
    ro: string;
    en: string;
    es: string;
  };
  title: {
    ro: string;
    en: string;
    es: string;
  };
  subtitle: {
    ro: string;
    en: string;
    es: string;
  };
  description: {
    ro: string;
    en: string;
    es: string;
  };
  benefits: {
    ro: AutomationBenefit[];
    en: AutomationBenefit[];
    es: AutomationBenefit[];
  };
  features: {
    ro: AutomationFeature[];
    en: AutomationFeature[];
    es: AutomationFeature[];
  };
  useCases: {
    ro: string[];
    en: string[];
    es: string[];
  };
  pricing: {
    setup: string;
    monthly: string;
    implementation: string;
    roi: string;
  };
}

export const automationServices: AutomationService[] = [
  {
    id: 'sistem-programari',
    slug: 'sistem-programari-online',
    icon: Calendar,
    color: 'from-pink-500 to-rose-600',
    badge: {
      ro: 'Reduce No-Show-urile cu 80%',
      en: 'Reduce No-Shows by 80%',
      es: 'Reduce No-Shows en 80%'
    },
    title: {
      ro: 'Sistem Programări Online 24/7',
      en: 'Online Booking System 24/7',
      es: 'Sistema de Reservas Online 24/7'
    },
    subtitle: {
      ro: 'Soluții inovatoare bazate pe Inteligență Artificială',
      en: 'AI-powered innovative solutions',
      es: 'Soluciones innovadoras basadas en IA'
    },
    description: {
      ro: 'Calendar automat pentru saloane, clinici, restaurante și servicii. Reminder-uri SMS/Email, integrare POS, eliminarea no-show-urilor. Implementare în 1-2 săptămâni.',
      en: 'Automatic calendar for salons, clinics, restaurants, and services. SMS/Email reminders, POS integration, no-show elimination. Implementation in 1-2 weeks.',
      es: 'Calendario automático para salones, clínicas, restaurantes y servicios. Recordatorios SMS/Email, integración POS, eliminación de no-shows. Implementación en 1-2 semanas.'
    },
    benefits: {
      ro: [
        { stat: '80%', label: 'Reducere No-Show' },
        { stat: '24/7', label: 'Disponibilitate' },
        { stat: '1-2 săpt', label: 'Implementare' }
      ],
      en: [
        { stat: '80%', label: 'No-Show Reduction' },
        { stat: '24/7', label: 'Availability' },
        { stat: '1-2 wks', label: 'Implementation' }
      ],
      es: [
        { stat: '80%', label: 'Reducción No-Show' },
        { stat: '24/7', label: 'Disponibilidad' },
        { stat: '1-2 sem', label: 'Implementación' }
      ]
    },
    features: {
      ro: [
        { icon: 'Calendar', title: 'Calendar Online 24/7', description: 'Clienții își pot programa singuri întâlnirile oricând, fără să te deranjeze.' },
        { icon: 'Bell', title: 'Reminder-uri Automate', description: 'SMS și email automate cu 24h și 2h înainte - reduce no-show-urile cu 80%.' },
        { icon: 'Smartphone', title: 'Mobile-First Design', description: 'Optimizat pentru telefon - 90% din programări se fac de pe mobil.' },
        { icon: 'BarChart', title: 'Analytics și Raportare', description: 'Vezi tendințele, orele de vârf și optimizează-ți programul automat.' }
      ],
      en: [
        { icon: 'Calendar', title: 'Online Calendar 24/7', description: 'Customers can book appointments anytime without bothering you.' },
        { icon: 'Bell', title: 'Automatic Reminders', description: 'SMS and email reminders 24h and 2h before - reduces no-shows by 80%.' },
        { icon: 'Smartphone', title: 'Mobile-First Design', description: 'Optimized for phones - 90% of bookings are made on mobile.' },
        { icon: 'BarChart', title: 'Analytics & Reporting', description: 'See trends, peak hours, and optimize your schedule automatically.' }
      ],
      es: [
        { icon: 'Calendar', title: 'Calendario Online 24/7', description: 'Los clientes pueden programar citas cuando quieran sin molestarte.' },
        { icon: 'Bell', title: 'Recordatorios Automáticos', description: 'SMS y email automáticos 24h y 2h antes - reduce no-shows en 80%.' },
        { icon: 'Smartphone', title: 'Diseño Mobile-First', description: 'Optimizado para móvil - 90% de las reservas se hacen desde el móvil.' },
        { icon: 'BarChart', title: 'Analytics y Reportes', description: 'Ve tendencias, horas pico y optimiza tu agenda automáticamente.' }
      ]
    },
    useCases: {
      ro: ['Saloane de înfrumusețare', 'Clinici medicale', 'Restaurante pentru rezervări', 'Centre de fitness'],
      en: ['Beauty salons', 'Medical clinics', 'Restaurants for reservations', 'Fitness centers'],
      es: ['Salones de belleza', 'Clínicas médicas', 'Restaurantes para reservas', 'Centros de fitness']
    },
    pricing: {
      setup: '500€',
      monthly: '99€/lună',
      implementation: '1-2 săptămâni',
      roi: '2-3 luni'
    }
  },
  {
    id: 'salon-infrumusetare',
    slug: 'automatizare-salon-infrumusetare',
    icon: Building2,
    color: 'from-purple-500 to-violet-600',
    badge: {
      ro: 'Salon Complet Automatizat',
      en: 'Fully Automated Salon',
      es: 'Salón Completamente Automatizado'
    },
    title: {
      ro: 'Automatizare Salon Înfrumusețare',
      en: 'Beauty Salon Automation',
      es: 'Automatización Salón de Belleza'
    },
    subtitle: {
      ro: 'Gestionează programări, clienți și stocuri automat',
      en: 'Manage bookings, clients, and inventory automatically',
      es: 'Gestiona citas, clientes e inventario automáticamente'
    },
    description: {
      ro: 'Soluție completă pentru saloane: programări online, reminder-uri automate, gestionare clienți fideli, inventar produse și rapoarte de performanță.',
      en: 'Complete solution for salons: online bookings, automatic reminders, loyalty client management, product inventory, and performance reports.',
      es: 'Solución completa para salones: reservas online, recordatorios automáticos, gestión de clientes fieles, inventario de productos e informes de rendimiento.'
    },
    benefits: {
      ro: [
        { stat: '60%', label: 'Mai puțin timp admin' },
        { stat: '40%', label: 'Creștere retenție' },
        { stat: '2x', label: 'Eficiență echipă' }
      ],
      en: [
        { stat: '60%', label: 'Less admin time' },
        { stat: '40%', label: 'Retention increase' },
        { stat: '2x', label: 'Team efficiency' }
      ],
      es: [
        { stat: '60%', label: 'Menos tiempo admin' },
        { stat: '40%', label: 'Aumento retención' },
        { stat: '2x', label: 'Eficiencia equipo' }
      ]
    },
    features: {
      ro: [
        { icon: 'Users', title: 'Gestionare Clienți', description: 'Istoric complet, preferințe, și program de fidelizare automat.' },
        { icon: 'Package', title: 'Control Stocuri', description: 'Alertă când produsele sunt pe terminate, comandă automată.' },
        { icon: 'Star', title: 'Program Fidelitate', description: 'Puncte și reduceri automate pentru clienții fideli.' },
        { icon: 'TrendingUp', title: 'Rapoarte Vânzări', description: 'Analizează performanța pe stilist, serviciu și perioadă.' }
      ],
      en: [
        { icon: 'Users', title: 'Client Management', description: 'Complete history, preferences, and automatic loyalty program.' },
        { icon: 'Package', title: 'Inventory Control', description: 'Alert when products run low, automatic ordering.' },
        { icon: 'Star', title: 'Loyalty Program', description: 'Automatic points and discounts for loyal clients.' },
        { icon: 'TrendingUp', title: 'Sales Reports', description: 'Analyze performance by stylist, service, and period.' }
      ],
      es: [
        { icon: 'Users', title: 'Gestión de Clientes', description: 'Historial completo, preferencias y programa de fidelidad automático.' },
        { icon: 'Package', title: 'Control de Inventario', description: 'Alerta cuando los productos se agotan, pedido automático.' },
        { icon: 'Star', title: 'Programa de Fidelidad', description: 'Puntos y descuentos automáticos para clientes fieles.' },
        { icon: 'TrendingUp', title: 'Informes de Ventas', description: 'Analiza rendimiento por estilista, servicio y período.' }
      ]
    },
    useCases: {
      ro: ['Saloane de coafură', 'Saloane de manichiură', 'Centre SPA', 'Studiouri de frumusețe'],
      en: ['Hair salons', 'Nail salons', 'SPA centers', 'Beauty studios'],
      es: ['Peluquerías', 'Salones de manicura', 'Centros SPA', 'Estudios de belleza']
    },
    pricing: {
      setup: '700€',
      monthly: '129€/lună',
      implementation: '2-3 săptămâni',
      roi: '3-4 luni'
    }
  },
  {
    id: 'cabinet-medical',
    slug: 'automatizare-cabinet-medical',
    icon: Stethoscope,
    color: 'from-blue-500 to-cyan-600',
    badge: {
      ro: 'GDPR Compliant',
      en: 'GDPR Compliant',
      es: 'Compatible con GDPR'
    },
    title: {
      ro: 'Automatizare Cabinet Medical',
      en: 'Medical Office Automation',
      es: 'Automatización Consultorio Médico'
    },
    subtitle: {
      ro: 'Programări, dosare pacienți și facturare automată',
      en: 'Appointments, patient files, and automatic billing',
      es: 'Citas, expedientes de pacientes y facturación automática'
    },
    description: {
      ro: 'Soluție pentru cabinete medicale: programări online securizate, dosare digitale ale pacienților, reminder-uri consultații, integrare facturare și rapoarte medicale.',
      en: 'Solution for medical offices: secure online appointments, digital patient records, consultation reminders, billing integration, and medical reports.',
      es: 'Solución para consultorios médicos: citas online seguras, expedientes digitales de pacientes, recordatorios de consultas, integración de facturación e informes médicos.'
    },
    benefits: {
      ro: [
        { stat: '90%', label: 'Pacienți la timp' },
        { stat: '50%', label: 'Reducere admin' },
        { stat: '100%', label: 'GDPR Compliant' }
      ],
      en: [
        { stat: '90%', label: 'Patients on time' },
        { stat: '50%', label: 'Admin reduction' },
        { stat: '100%', label: 'GDPR Compliant' }
      ],
      es: [
        { stat: '90%', label: 'Pacientes puntuales' },
        { stat: '50%', label: 'Reducción admin' },
        { stat: '100%', label: 'Compatible GDPR' }
      ]
    },
    features: {
      ro: [
        { icon: 'FileText', title: 'Dosare Digitale', description: 'Istoric medical complet, documente și prescripții într-un singur loc.' },
        { icon: 'Shield', title: 'Securitate GDPR', description: 'Criptare date, acces pe bază de roluri, audit trail complet.' },
        { icon: 'CreditCard', title: 'Facturare Automată', description: 'Generare automată facturi, integrare ANAF și asigurări.' },
        { icon: 'Clock', title: 'Gestionare Program', description: 'Calendar inteligent cu pauzele și urgențele gestionate automat.' }
      ],
      en: [
        { icon: 'FileText', title: 'Digital Records', description: 'Complete medical history, documents, and prescriptions in one place.' },
        { icon: 'Shield', title: 'GDPR Security', description: 'Data encryption, role-based access, complete audit trail.' },
        { icon: 'CreditCard', title: 'Automatic Billing', description: 'Automatic invoice generation, tax and insurance integration.' },
        { icon: 'Clock', title: 'Schedule Management', description: 'Smart calendar with automatically managed breaks and emergencies.' }
      ],
      es: [
        { icon: 'FileText', title: 'Expedientes Digitales', description: 'Historial médico completo, documentos y recetas en un solo lugar.' },
        { icon: 'Shield', title: 'Seguridad GDPR', description: 'Encriptación de datos, acceso por roles, auditoría completa.' },
        { icon: 'CreditCard', title: 'Facturación Automática', description: 'Generación automática de facturas, integración fiscal y seguros.' },
        { icon: 'Clock', title: 'Gestión de Horarios', description: 'Calendario inteligente con pausas y urgencias gestionadas automáticamente.' }
      ]
    },
    useCases: {
      ro: ['Cabinete stomatologice', 'Clinici de recuperare', 'Cabinete de psihologie', 'Medicină de familie'],
      en: ['Dental offices', 'Recovery clinics', 'Psychology offices', 'Family medicine'],
      es: ['Consultorios dentales', 'Clínicas de recuperación', 'Consultorios de psicología', 'Medicina familiar']
    },
    pricing: {
      setup: '900€',
      monthly: '149€/lună',
      implementation: '2-4 săptămâni',
      roi: '3-5 luni'
    }
  },
  {
    id: 'restaurant',
    slug: 'automatizare-restaurant',
    icon: UtensilsCrossed,
    color: 'from-orange-500 to-amber-600',
    badge: {
      ro: '0% Comisioane Livrare',
      en: '0% Delivery Fees',
      es: '0% Comisiones de Entrega'
    },
    title: {
      ro: 'Automatizare Restaurant',
      en: 'Restaurant Automation',
      es: 'Automatización Restaurante'
    },
    subtitle: {
      ro: 'Meniu digital, comenzi online și plăți integrate',
      en: 'Digital menu, online orders, and integrated payments',
      es: 'Menú digital, pedidos online y pagos integrados'
    },
    description: {
      ro: 'Sistem propriu de comenzi fără comisioane platforme. Meniu QR, plăți online, integrare POS și analytics detaliate. ROI în 2-3 luni prin economii la comisioane.',
      en: 'Your own ordering system with no platform fees. QR menu, online payments, POS integration, and detailed analytics. ROI in 2-3 months through fee savings.',
      es: 'Tu propio sistema de pedidos sin comisiones de plataformas. Menú QR, pagos online, integración POS y analytics detalladas. ROI en 2-3 meses a través de ahorro en comisiones.'
    },
    benefits: {
      ro: [
        { stat: '0%', label: 'Comisioane' },
        { stat: '1350€', label: 'Economie/lună' },
        { stat: '2-3 luni', label: 'ROI' }
      ],
      en: [
        { stat: '0%', label: 'Fees' },
        { stat: '€1350', label: 'Savings/month' },
        { stat: '2-3 mo', label: 'ROI' }
      ],
      es: [
        { stat: '0%', label: 'Comisiones' },
        { stat: '€1350', label: 'Ahorro/mes' },
        { stat: '2-3 meses', label: 'ROI' }
      ]
    },
    features: {
      ro: [
        { icon: 'QrCode', title: 'Meniu Digital QR', description: 'Meniu nelimitat cu poze, descrieri și prețuri actualizabile instant.' },
        { icon: 'ShoppingCart', title: 'Comenzi Fără Comisioane', description: 'Sistem propriu de comenzi online - economisești mii de euro lunar.' },
        { icon: 'CreditCard', title: 'Plăți Integrate', description: 'Card și cash, cu confirmare automată și raportare în timp real.' },
        { icon: 'BarChart', title: 'Analytics Detaliate', description: 'Cele mai vândute produse, orele de vârf, tendințe și predicții.' }
      ],
      en: [
        { icon: 'QrCode', title: 'Digital QR Menu', description: 'Unlimited menu with photos, descriptions, and instantly updatable prices.' },
        { icon: 'ShoppingCart', title: 'Zero-Fee Orders', description: 'Your own online ordering system - save thousands of euros monthly.' },
        { icon: 'CreditCard', title: 'Integrated Payments', description: 'Card and cash, with automatic confirmation and real-time reporting.' },
        { icon: 'BarChart', title: 'Detailed Analytics', description: 'Best-selling products, peak hours, trends, and predictions.' }
      ],
      es: [
        { icon: 'QrCode', title: 'Menú Digital QR', description: 'Menú ilimitado con fotos, descripciones y precios actualizables al instante.' },
        { icon: 'ShoppingCart', title: 'Pedidos Sin Comisiones', description: 'Tu propio sistema de pedidos online - ahorra miles de euros mensuales.' },
        { icon: 'CreditCard', title: 'Pagos Integrados', description: 'Tarjeta y efectivo, con confirmación automática e informes en tiempo real.' },
        { icon: 'BarChart', title: 'Analytics Detalladas', description: 'Productos más vendidos, horas pico, tendencias y predicciones.' }
      ]
    },
    useCases: {
      ro: ['Restaurante fast-food', 'Pizzerii', 'Cafenele', 'Food trucks'],
      en: ['Fast-food restaurants', 'Pizzerias', 'Coffee shops', 'Food trucks'],
      es: ['Restaurantes de comida rápida', 'Pizzerías', 'Cafeterías', 'Food trucks']
    },
    pricing: {
      setup: '800€',
      monthly: '150€/lună',
      implementation: '2-3 săptămâni',
      roi: '2-3 luni'
    }
  },
  {
    id: 'inteligenta-artificiala',
    slug: 'automatizari-inteligenta-artificiala',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    badge: {
      ro: 'AI Avansat',
      en: 'Advanced AI',
      es: 'IA Avanzada'
    },
    title: {
      ro: 'Automatizări Inteligență Artificială',
      en: 'Artificial Intelligence Automation',
      es: 'Automatización con Inteligencia Artificial'
    },
    subtitle: {
      ro: 'Machine Learning și AI pentru afacerea ta',
      en: 'Machine Learning and AI for your business',
      es: 'Machine Learning e IA para tu negocio'
    },
    description: {
      ro: 'Implementări AI custom: predicție vânzări, recomandări personalizate, chatboți inteligenți, analiză sentiment, procesare documente și automatizări complexe.',
      en: 'Custom AI implementations: sales prediction, personalized recommendations, intelligent chatbots, sentiment analysis, document processing, and complex automations.',
      es: 'Implementaciones de IA personalizadas: predicción de ventas, recomendaciones personalizadas, chatbots inteligentes, análisis de sentimiento, procesamiento de documentos y automatizaciones complejas.'
    },
    benefits: {
      ro: [
        { stat: '3x', label: 'Productivitate' },
        { stat: '75%', label: 'Reducere erori' },
        { stat: '24/7', label: 'Funcționare' }
      ],
      en: [
        { stat: '3x', label: 'Productivity' },
        { stat: '75%', label: 'Error reduction' },
        { stat: '24/7', label: 'Operation' }
      ],
      es: [
        { stat: '3x', label: 'Productividad' },
        { stat: '75%', label: 'Reducción errores' },
        { stat: '24/7', label: 'Operación' }
      ]
    },
    features: {
      ro: [
        { icon: 'Brain', title: 'Predicție AI', description: 'Modele ML pentru predicție cerere, stocuri și tendințe de piață.' },
        { icon: 'Target', title: 'Personalizare', description: 'Recomandări personalizate pentru fiecare client bazate pe comportament.' },
        { icon: 'FileSearch', title: 'Procesare Documente', description: 'Extragere automată date din facturi, contracte și formulare.' },
        { icon: 'Cog', title: 'Automatizări Complexe', description: 'Workflow-uri multi-step cu logică condițională și decizii AI.' }
      ],
      en: [
        { icon: 'Brain', title: 'AI Prediction', description: 'ML models for demand prediction, inventory, and market trends.' },
        { icon: 'Target', title: 'Personalization', description: 'Personalized recommendations for each customer based on behavior.' },
        { icon: 'FileSearch', title: 'Document Processing', description: 'Automatic data extraction from invoices, contracts, and forms.' },
        { icon: 'Cog', title: 'Complex Automations', description: 'Multi-step workflows with conditional logic and AI decisions.' }
      ],
      es: [
        { icon: 'Brain', title: 'Predicción IA', description: 'Modelos ML para predicción de demanda, inventario y tendencias del mercado.' },
        { icon: 'Target', title: 'Personalización', description: 'Recomendaciones personalizadas para cada cliente basadas en comportamiento.' },
        { icon: 'FileSearch', title: 'Procesamiento de Documentos', description: 'Extracción automática de datos de facturas, contratos y formularios.' },
        { icon: 'Cog', title: 'Automatizaciones Complejas', description: 'Flujos de trabajo multi-paso con lógica condicional y decisiones de IA.' }
      ]
    },
    useCases: {
      ro: ['E-commerce', 'Servicii financiare', 'Producție', 'Logistică'],
      en: ['E-commerce', 'Financial services', 'Manufacturing', 'Logistics'],
      es: ['E-commerce', 'Servicios financieros', 'Manufactura', 'Logística']
    },
    pricing: {
      setup: 'de la 1500€',
      monthly: 'de la 299€/lună',
      implementation: '4-8 săptămâni',
      roi: '4-6 luni'
    }
  },
  {
    id: 'sector-public',
    slug: 'automatizare-sector-public',
    icon: Landmark,
    color: 'from-slate-500 to-gray-600',
    badge: {
      ro: 'Digitalizare Instituții',
      en: 'Institution Digitalization',
      es: 'Digitalización de Instituciones'
    },
    title: {
      ro: 'Automatizare Sector Public',
      en: 'Public Sector Automation',
      es: 'Automatización Sector Público'
    },
    subtitle: {
      ro: 'Digitalizare și eficientizare servicii publice',
      en: 'Digitalization and efficiency of public services',
      es: 'Digitalización y eficiencia de servicios públicos'
    },
    description: {
      ro: 'Soluții pentru instituții publice: programări cetățeni, gestionare dosare, fluxuri de aprobare, documente digitale și raportare transparentă.',
      en: 'Solutions for public institutions: citizen appointments, case management, approval workflows, digital documents, and transparent reporting.',
      es: 'Soluciones para instituciones públicas: citas de ciudadanos, gestión de expedientes, flujos de aprobación, documentos digitales e informes transparentes.'
    },
    benefits: {
      ro: [
        { stat: '70%', label: 'Mai rapid' },
        { stat: '80%', label: 'Reducere hârtie' },
        { stat: '100%', label: 'Trasabilitate' }
      ],
      en: [
        { stat: '70%', label: 'Faster' },
        { stat: '80%', label: 'Paper reduction' },
        { stat: '100%', label: 'Traceability' }
      ],
      es: [
        { stat: '70%', label: 'Más rápido' },
        { stat: '80%', label: 'Reducción papel' },
        { stat: '100%', label: 'Trazabilidad' }
      ]
    },
    features: {
      ro: [
        { icon: 'Users', title: 'Portal Cetățeni', description: 'Platformă online pentru depunere cereri și urmărire status.' },
        { icon: 'FileText', title: 'Dosare Digitale', description: 'Arhivare și gestionare documente cu căutare avansată.' },
        { icon: 'GitBranch', title: 'Fluxuri Aprobare', description: 'Workflow-uri configurabile cu notificări și termene.' },
        { icon: 'Eye', title: 'Transparență', description: 'Rapoarte publice și audit trail pentru fiecare acțiune.' }
      ],
      en: [
        { icon: 'Users', title: 'Citizen Portal', description: 'Online platform for submitting requests and tracking status.' },
        { icon: 'FileText', title: 'Digital Files', description: 'Document archiving and management with advanced search.' },
        { icon: 'GitBranch', title: 'Approval Workflows', description: 'Configurable workflows with notifications and deadlines.' },
        { icon: 'Eye', title: 'Transparency', description: 'Public reports and audit trail for every action.' }
      ],
      es: [
        { icon: 'Users', title: 'Portal Ciudadanos', description: 'Plataforma online para enviar solicitudes y seguir el estado.' },
        { icon: 'FileText', title: 'Expedientes Digitales', description: 'Archivo y gestión de documentos con búsqueda avanzada.' },
        { icon: 'GitBranch', title: 'Flujos de Aprobación', description: 'Flujos de trabajo configurables con notificaciones y plazos.' },
        { icon: 'Eye', title: 'Transparencia', description: 'Informes públicos y registro de auditoría para cada acción.' }
      ]
    },
    useCases: {
      ro: ['Primării', 'Spitale de stat', 'Instituții educaționale', 'Agenții guvernamentale'],
      en: ['City halls', 'Public hospitals', 'Educational institutions', 'Government agencies'],
      es: ['Ayuntamientos', 'Hospitales públicos', 'Instituciones educativas', 'Agencias gubernamentales']
    },
    pricing: {
      setup: 'de la 2000€',
      monthly: 'de la 399€/lună',
      implementation: '8-12 săptămâni',
      roi: '6-12 luni'
    }
  },
  {
    id: 'magazine-retail',
    slug: 'automatizare-magazine-retail',
    icon: ShoppingCart,
    color: 'from-green-500 to-emerald-600',
    badge: {
      ro: 'Retail Inteligent',
      en: 'Smart Retail',
      es: 'Retail Inteligente'
    },
    title: {
      ro: 'Automatizare Magazine Retail',
      en: 'Retail Store Automation',
      es: 'Automatización Tiendas Retail'
    },
    subtitle: {
      ro: 'Inventar, vânzări și experiență client optimizate',
      en: 'Inventory, sales, and customer experience optimized',
      es: 'Inventario, ventas y experiencia del cliente optimizados'
    },
    description: {
      ro: 'Soluții complete pentru retail: gestionare stocuri inteligentă, POS integrat, program fidelitate, analytics vânzări și omnichannel management.',
      en: 'Complete retail solutions: smart inventory management, integrated POS, loyalty program, sales analytics, and omnichannel management.',
      es: 'Soluciones completas para retail: gestión inteligente de inventario, POS integrado, programa de fidelidad, analytics de ventas y gestión omnicanal.'
    },
    benefits: {
      ro: [
        { stat: '30%', label: 'Creștere vânzări' },
        { stat: '50%', label: 'Reducere stocuri' },
        { stat: '2x', label: 'Retenție clienți' }
      ],
      en: [
        { stat: '30%', label: 'Sales increase' },
        { stat: '50%', label: 'Stock reduction' },
        { stat: '2x', label: 'Customer retention' }
      ],
      es: [
        { stat: '30%', label: 'Aumento ventas' },
        { stat: '50%', label: 'Reducción stock' },
        { stat: '2x', label: 'Retención clientes' }
      ]
    },
    features: {
      ro: [
        { icon: 'Package', title: 'Inventar Smart', description: 'Predicție stocuri, alerte automate și comandă inteligentă.' },
        { icon: 'CreditCard', title: 'POS Avansat', description: 'Procesare rapidă, multiple metode plată, integrare contabilitate.' },
        { icon: 'Gift', title: 'Program Fidelitate', description: 'Puncte, vouchere și oferte personalizate pentru clienți.' },
        { icon: 'Layers', title: 'Omnichannel', description: 'Sincronizare stocuri și comenzi între magazin fizic și online.' }
      ],
      en: [
        { icon: 'Package', title: 'Smart Inventory', description: 'Stock prediction, automatic alerts, and intelligent ordering.' },
        { icon: 'CreditCard', title: 'Advanced POS', description: 'Fast processing, multiple payment methods, accounting integration.' },
        { icon: 'Gift', title: 'Loyalty Program', description: 'Points, vouchers, and personalized offers for customers.' },
        { icon: 'Layers', title: 'Omnichannel', description: 'Stock and order synchronization between physical and online store.' }
      ],
      es: [
        { icon: 'Package', title: 'Inventario Inteligente', description: 'Predicción de stock, alertas automáticas y pedidos inteligentes.' },
        { icon: 'CreditCard', title: 'POS Avanzado', description: 'Procesamiento rápido, múltiples métodos de pago, integración contable.' },
        { icon: 'Gift', title: 'Programa de Fidelidad', description: 'Puntos, vales y ofertas personalizadas para clientes.' },
        { icon: 'Layers', title: 'Omnicanal', description: 'Sincronización de stock y pedidos entre tienda física y online.' }
      ]
    },
    useCases: {
      ro: ['Magazine îmbrăcăminte', 'Supermarketuri', 'Farmacii', 'Magazine electronice'],
      en: ['Clothing stores', 'Supermarkets', 'Pharmacies', 'Electronics stores'],
      es: ['Tiendas de ropa', 'Supermercados', 'Farmacias', 'Tiendas de electrónica']
    },
    pricing: {
      setup: '1000€',
      monthly: '199€/lună',
      implementation: '3-4 săptămâni',
      roi: '3-4 luni'
    }
  },
  {
    id: 'hotel-pensiune',
    slug: 'automatizare-hotel-pensiune',
    icon: Hotel,
    color: 'from-sky-500 to-blue-600',
    badge: {
      ro: 'Ospitalitate Digitală',
      en: 'Digital Hospitality',
      es: 'Hospitalidad Digital'
    },
    title: {
      ro: 'Automatizare Hotel & Pensiune',
      en: 'Hotel & Guesthouse Automation',
      es: 'Automatización Hotel y Pensión'
    },
    subtitle: {
      ro: 'Rezervări, check-in și experiență oaspeți optimizate',
      en: 'Bookings, check-in, and guest experience optimized',
      es: 'Reservas, check-in y experiencia de huéspedes optimizados'
    },
    description: {
      ro: 'Sistem complet pentru hoteluri: booking engine propriu, channel manager, check-in online, gestionare camere și servicii pentru oaspeți.',
      en: 'Complete hotel system: own booking engine, channel manager, online check-in, room management, and guest services.',
      es: 'Sistema completo para hoteles: motor de reservas propio, gestor de canales, check-in online, gestión de habitaciones y servicios para huéspedes.'
    },
    benefits: {
      ro: [
        { stat: '40%', label: 'Rezervări directe' },
        { stat: '15%', label: 'Creștere RevPAR' },
        { stat: '5★', label: 'Rating oaspeți' }
      ],
      en: [
        { stat: '40%', label: 'Direct bookings' },
        { stat: '15%', label: 'RevPAR increase' },
        { stat: '5★', label: 'Guest rating' }
      ],
      es: [
        { stat: '40%', label: 'Reservas directas' },
        { stat: '15%', label: 'Aumento RevPAR' },
        { stat: '5★', label: 'Rating huéspedes' }
      ]
    },
    features: {
      ro: [
        { icon: 'Globe', title: 'Booking Engine', description: 'Motor de rezervări propriu fără comisioane OTA-uri.' },
        { icon: 'RefreshCw', title: 'Channel Manager', description: 'Sincronizare automată cu Booking.com, Airbnb, Expedia.' },
        { icon: 'Smartphone', title: 'Check-in Digital', description: 'Oaspeții pot face check-in din telefon înainte de sosire.' },
        { icon: 'Concierge', title: 'Servicii Oaspeți', description: 'Room service, spa, restaurant - totul de pe telefon.' }
      ],
      en: [
        { icon: 'Globe', title: 'Booking Engine', description: 'Own booking engine without OTA commissions.' },
        { icon: 'RefreshCw', title: 'Channel Manager', description: 'Automatic sync with Booking.com, Airbnb, Expedia.' },
        { icon: 'Smartphone', title: 'Digital Check-in', description: 'Guests can check-in from their phone before arrival.' },
        { icon: 'Concierge', title: 'Guest Services', description: 'Room service, spa, restaurant - all from the phone.' }
      ],
      es: [
        { icon: 'Globe', title: 'Motor de Reservas', description: 'Motor de reservas propio sin comisiones OTA.' },
        { icon: 'RefreshCw', title: 'Gestor de Canales', description: 'Sincronización automática con Booking.com, Airbnb, Expedia.' },
        { icon: 'Smartphone', title: 'Check-in Digital', description: 'Los huéspedes pueden hacer check-in desde su teléfono antes de llegar.' },
        { icon: 'Concierge', title: 'Servicios para Huéspedes', description: 'Servicio de habitaciones, spa, restaurante - todo desde el teléfono.' }
      ]
    },
    useCases: {
      ro: ['Hoteluri boutique', 'Pensiuni', 'Vile de închiriat', 'Resort-uri'],
      en: ['Boutique hotels', 'Guesthouses', 'Rental villas', 'Resorts'],
      es: ['Hoteles boutique', 'Pensiones', 'Villas de alquiler', 'Resorts']
    },
    pricing: {
      setup: '1200€',
      monthly: '249€/lună',
      implementation: '3-5 săptămâni',
      roi: '4-5 luni'
    }
  },
  {
    id: 'zapier-make',
    slug: 'automatizari-zapier-make-airtable',
    icon: Workflow,
    color: 'from-orange-500 to-red-600',
    badge: {
      ro: 'No-Code Automation',
      en: 'No-Code Automation',
      es: 'Automatización No-Code'
    },
    title: {
      ro: 'Automatizări Zapier, Make & Airtable',
      en: 'Zapier, Make & Airtable Automations',
      es: 'Automatizaciones Zapier, Make y Airtable'
    },
    subtitle: {
      ro: 'Conectează aplicațiile tale fără cod',
      en: 'Connect your apps without code',
      es: 'Conecta tus aplicaciones sin código'
    },
    description: {
      ro: 'Implementări no-code cu Zapier, Make (Integromat) și Airtable. Conectăm aplicațiile tale pentru a automatiza procese repetitive și a economisi timp.',
      en: 'No-code implementations with Zapier, Make (Integromat), and Airtable. We connect your apps to automate repetitive processes and save time.',
      es: 'Implementaciones no-code con Zapier, Make (Integromat) y Airtable. Conectamos tus aplicaciones para automatizar procesos repetitivos y ahorrar tiempo.'
    },
    benefits: {
      ro: [
        { stat: '100+', label: 'Integrări' },
        { stat: '10h', label: 'Economie/săpt' },
        { stat: '0', label: 'Cod necesar' }
      ],
      en: [
        { stat: '100+', label: 'Integrations' },
        { stat: '10h', label: 'Saved/week' },
        { stat: '0', label: 'Code needed' }
      ],
      es: [
        { stat: '100+', label: 'Integraciones' },
        { stat: '10h', label: 'Ahorro/semana' },
        { stat: '0', label: 'Código necesario' }
      ]
    },
    features: {
      ro: [
        { icon: 'Zap', title: 'Zapier Zaps', description: 'Conectare între 5000+ aplicații cu workflow-uri automate.' },
        { icon: 'Cog', title: 'Make Scenarios', description: 'Automatizări complexe cu logică avansată și ramificații.' },
        { icon: 'Database', title: 'Airtable Bases', description: 'Baze de date flexibile cu automatizări integrate.' },
        { icon: 'RefreshCw', title: 'Sincronizări', description: 'Date sincronizate automat între CRM, email, calendare.' }
      ],
      en: [
        { icon: 'Zap', title: 'Zapier Zaps', description: 'Connection between 5000+ apps with automatic workflows.' },
        { icon: 'Cog', title: 'Make Scenarios', description: 'Complex automations with advanced logic and branches.' },
        { icon: 'Database', title: 'Airtable Bases', description: 'Flexible databases with integrated automations.' },
        { icon: 'RefreshCw', title: 'Syncs', description: 'Data automatically synced between CRM, email, calendars.' }
      ],
      es: [
        { icon: 'Zap', title: 'Zaps de Zapier', description: 'Conexión entre 5000+ apps con flujos de trabajo automáticos.' },
        { icon: 'Cog', title: 'Escenarios de Make', description: 'Automatizaciones complejas con lógica avanzada y ramificaciones.' },
        { icon: 'Database', title: 'Bases de Airtable', description: 'Bases de datos flexibles con automatizaciones integradas.' },
        { icon: 'RefreshCw', title: 'Sincronizaciones', description: 'Datos sincronizados automáticamente entre CRM, email, calendarios.' }
      ]
    },
    useCases: {
      ro: ['Marketing automation', 'Lead management', 'E-commerce operations', 'HR onboarding'],
      en: ['Marketing automation', 'Lead management', 'E-commerce operations', 'HR onboarding'],
      es: ['Automatización de marketing', 'Gestión de leads', 'Operaciones e-commerce', 'Onboarding de RRHH']
    },
    pricing: {
      setup: '400€',
      monthly: '79€/lună',
      implementation: '1-2 săptămâni',
      roi: '1-2 luni'
    }
  },
  {
    id: 'chatboti-whatsapp',
    slug: 'chatboti-ai-whatsapp-telegram',
    icon: MessageCircle,
    color: 'from-green-500 to-teal-600',
    badge: {
      ro: 'AI Conversațional',
      en: 'Conversational AI',
      es: 'IA Conversacional'
    },
    title: {
      ro: 'Chatboți AI WhatsApp & Telegram',
      en: 'AI Chatbots WhatsApp & Telegram',
      es: 'Chatbots IA WhatsApp y Telegram'
    },
    subtitle: {
      ro: 'Asistent AI 24/7 în limba română',
      en: '24/7 AI assistant in your language',
      es: 'Asistente IA 24/7 en tu idioma'
    },
    description: {
      ro: 'Asistent AI inteligent care vorbește perfect româna și automatizează customer service-ul. Disponibil 24/7 pe WhatsApp Business și Telegram. Reducă costurile cu 75%.',
      en: 'Intelligent AI assistant that speaks your language and automates customer service. Available 24/7 on WhatsApp Business and Telegram. Reduce costs by 75%.',
      es: 'Asistente IA inteligente que habla tu idioma y automatiza el servicio al cliente. Disponible 24/7 en WhatsApp Business y Telegram. Reduce costos en 75%.'
    },
    benefits: {
      ro: [
        { stat: '<2s', label: 'Timp răspuns' },
        { stat: '24/7', label: 'Disponibilitate' },
        { stat: '75%', label: 'Reducere costuri' }
      ],
      en: [
        { stat: '<2s', label: 'Response time' },
        { stat: '24/7', label: 'Availability' },
        { stat: '75%', label: 'Cost reduction' }
      ],
      es: [
        { stat: '<2s', label: 'Tiempo respuesta' },
        { stat: '24/7', label: 'Disponibilidad' },
        { stat: '75%', label: 'Reducción costos' }
      ]
    },
    features: {
      ro: [
        { icon: 'MessageCircle', title: 'Răspuns Instant', description: 'Răspunde la 80% din întrebări automat în maximum 2 secunde.' },
        { icon: 'Brain', title: 'AI Avansat', description: 'Înțelege contextul, emoțiile și intenția clientului.' },
        { icon: 'ShoppingCart', title: 'Preluare Comenzi', description: 'Preia comenzi, programări și plăți direct din conversație.' },
        { icon: 'Globe', title: 'Multilingv', description: 'Vorbește română, engleză și alte limbi nativ.' }
      ],
      en: [
        { icon: 'MessageCircle', title: 'Instant Response', description: 'Answers 80% of questions automatically in under 2 seconds.' },
        { icon: 'Brain', title: 'Advanced AI', description: 'Understands context, emotions, and customer intent.' },
        { icon: 'ShoppingCart', title: 'Order Taking', description: 'Takes orders, appointments, and payments directly from conversation.' },
        { icon: 'Globe', title: 'Multilingual', description: 'Speaks English, Spanish, and other languages natively.' }
      ],
      es: [
        { icon: 'MessageCircle', title: 'Respuesta Instantánea', description: 'Responde al 80% de las preguntas automáticamente en menos de 2 segundos.' },
        { icon: 'Brain', title: 'IA Avanzada', description: 'Entiende el contexto, las emociones y la intención del cliente.' },
        { icon: 'ShoppingCart', title: 'Toma de Pedidos', description: 'Toma pedidos, citas y pagos directamente desde la conversación.' },
        { icon: 'Globe', title: 'Multilingüe', description: 'Habla español, inglés y otros idiomas de forma nativa.' }
      ]
    },
    useCases: {
      ro: ['E-commerce', 'Restaurante', 'Clinici', 'Servicii diverse'],
      en: ['E-commerce', 'Restaurants', 'Clinics', 'Various services'],
      es: ['E-commerce', 'Restaurantes', 'Clínicas', 'Servicios diversos']
    },
    pricing: {
      setup: '600€',
      monthly: '149€/lună',
      implementation: '1-2 săptămâni',
      roi: '2-3 luni'
    }
  },
  {
    id: 'social-media',
    slug: 'automatizare-social-media-ai',
    icon: Share2,
    color: 'from-pink-500 to-purple-600',
    badge: {
      ro: 'Social Media AI',
      en: 'Social Media AI',
      es: 'Social Media IA'
    },
    title: {
      ro: 'Automatizare Social Media AI',
      en: 'AI Social Media Automation',
      es: 'Automatización Social Media IA'
    },
    subtitle: {
      ro: 'Conținut generat AI și postare automată',
      en: 'AI-generated content and automatic posting',
      es: 'Contenido generado por IA y publicación automática'
    },
    description: {
      ro: 'Gestionare completă social media: generare conținut cu AI, programare postări, răspuns automat la comentarii, analytics și raportare performanță.',
      en: 'Complete social media management: AI content generation, post scheduling, automatic comment responses, analytics, and performance reporting.',
      es: 'Gestión completa de social media: generación de contenido con IA, programación de publicaciones, respuestas automáticas a comentarios, analytics e informes de rendimiento.'
    },
    benefits: {
      ro: [
        { stat: '10x', label: 'Mai mult conținut' },
        { stat: '5h', label: 'Economie/zi' },
        { stat: '3x', label: 'Engagement' }
      ],
      en: [
        { stat: '10x', label: 'More content' },
        { stat: '5h', label: 'Saved/day' },
        { stat: '3x', label: 'Engagement' }
      ],
      es: [
        { stat: '10x', label: 'Más contenido' },
        { stat: '5h', label: 'Ahorro/día' },
        { stat: '3x', label: 'Engagement' }
      ]
    },
    features: {
      ro: [
        { icon: 'Sparkles', title: 'Conținut AI', description: 'Generare texte, imagini și video pentru postări.' },
        { icon: 'Calendar', title: 'Programare Postări', description: 'Calendar editorial cu postare automată pe toate platformele.' },
        { icon: 'MessageSquare', title: 'Răspuns Automat', description: 'AI răspunde la comentarii și mesaje în stilul brandului.' },
        { icon: 'BarChart', title: 'Analytics Detaliate', description: 'Metrici, tendințe și recomandări de optimizare.' }
      ],
      en: [
        { icon: 'Sparkles', title: 'AI Content', description: 'Generate text, images, and videos for posts.' },
        { icon: 'Calendar', title: 'Post Scheduling', description: 'Editorial calendar with automatic posting on all platforms.' },
        { icon: 'MessageSquare', title: 'Auto Reply', description: 'AI responds to comments and messages in brand style.' },
        { icon: 'BarChart', title: 'Detailed Analytics', description: 'Metrics, trends, and optimization recommendations.' }
      ],
      es: [
        { icon: 'Sparkles', title: 'Contenido IA', description: 'Genera textos, imágenes y videos para publicaciones.' },
        { icon: 'Calendar', title: 'Programación de Publicaciones', description: 'Calendario editorial con publicación automática en todas las plataformas.' },
        { icon: 'MessageSquare', title: 'Respuesta Automática', description: 'IA responde a comentarios y mensajes en el estilo de la marca.' },
        { icon: 'BarChart', title: 'Analytics Detalladas', description: 'Métricas, tendencias y recomendaciones de optimización.' }
      ]
    },
    useCases: {
      ro: ['Branduri locale', 'Influenceri', 'Agenții marketing', 'E-commerce'],
      en: ['Local brands', 'Influencers', 'Marketing agencies', 'E-commerce'],
      es: ['Marcas locales', 'Influencers', 'Agencias de marketing', 'E-commerce']
    },
    pricing: {
      setup: '500€',
      monthly: '199€/lună',
      implementation: '1-2 săptămâni',
      roi: '2-3 luni'
    }
  },
  {
    id: 'agentii-imobiliare',
    slug: 'automatizare-agentii-imobiliare',
    icon: Home,
    color: 'from-amber-500 to-orange-600',
    badge: {
      ro: 'Real Estate AI',
      en: 'Real Estate AI',
      es: 'Real Estate IA'
    },
    title: {
      ro: 'Automatizare Agenții Imobiliare',
      en: 'Real Estate Agency Automation',
      es: 'Automatización Agencias Inmobiliarias'
    },
    subtitle: {
      ro: 'CRM, listări și matching automat proprietăți',
      en: 'CRM, listings, and automatic property matching',
      es: 'CRM, listados y matching automático de propiedades'
    },
    description: {
      ro: 'Soluție completă pentru agenții imobiliare: CRM clienți, sincronizare listări pe portaluri, matching AI proprietăți-clienți și automatizare marketing.',
      en: 'Complete solution for real estate agencies: client CRM, portal listing sync, AI property-client matching, and marketing automation.',
      es: 'Solución completa para agencias inmobiliarias: CRM de clientes, sincronización de listados en portales, matching IA propiedades-clientes y automatización de marketing.'
    },
    benefits: {
      ro: [
        { stat: '50%', label: 'Mai multe vânzări' },
        { stat: '3x', label: 'Vizionări/agent' },
        { stat: '70%', label: 'Timp economisit' }
      ],
      en: [
        { stat: '50%', label: 'More sales' },
        { stat: '3x', label: 'Viewings/agent' },
        { stat: '70%', label: 'Time saved' }
      ],
      es: [
        { stat: '50%', label: 'Más ventas' },
        { stat: '3x', label: 'Visitas/agente' },
        { stat: '70%', label: 'Tiempo ahorrado' }
      ]
    },
    features: {
      ro: [
        { icon: 'Users', title: 'CRM Imobiliar', description: 'Gestionare clienți, cerințe și istoric interacțiuni.' },
        { icon: 'RefreshCw', title: 'Sincronizare Portaluri', description: 'Listări actualizate automat pe Imobiliare.ro, Storia, OLX.' },
        { icon: 'Target', title: 'Matching AI', description: 'Potrivire automată proprietăți cu cerințele clienților.' },
        { icon: 'Mail', title: 'Email Marketing', description: 'Newslettere cu proprietăți noi personalizate pentru fiecare client.' }
      ],
      en: [
        { icon: 'Users', title: 'Real Estate CRM', description: 'Client management, requirements, and interaction history.' },
        { icon: 'RefreshCw', title: 'Portal Sync', description: 'Listings automatically updated on Zillow, Realtor, etc.' },
        { icon: 'Target', title: 'AI Matching', description: 'Automatic matching of properties with client requirements.' },
        { icon: 'Mail', title: 'Email Marketing', description: 'Newsletters with new properties personalized for each client.' }
      ],
      es: [
        { icon: 'Users', title: 'CRM Inmobiliario', description: 'Gestión de clientes, requisitos e historial de interacciones.' },
        { icon: 'RefreshCw', title: 'Sincronización de Portales', description: 'Listados actualizados automáticamente en Idealista, Fotocasa, etc.' },
        { icon: 'Target', title: 'Matching IA', description: 'Emparejamiento automático de propiedades con requisitos de clientes.' },
        { icon: 'Mail', title: 'Email Marketing', description: 'Newsletters con nuevas propiedades personalizadas para cada cliente.' }
      ]
    },
    useCases: {
      ro: ['Agenții imobiliare', 'Dezvoltatori', 'Brokeri independenți', 'Property managers'],
      en: ['Real estate agencies', 'Developers', 'Independent brokers', 'Property managers'],
      es: ['Agencias inmobiliarias', 'Desarrolladores', 'Brokers independientes', 'Property managers']
    },
    pricing: {
      setup: '800€',
      monthly: '179€/lună',
      implementation: '2-3 săptămâni',
      roi: '3-4 luni'
    }
  },
  {
    id: 'afaceri-mici',
    slug: 'automatizare-afaceri-mici-mijlocii',
    icon: Briefcase,
    color: 'from-indigo-500 to-blue-600',
    badge: {
      ro: 'SMB Friendly',
      en: 'SMB Friendly',
      es: 'Amigable PYME'
    },
    title: {
      ro: 'Automatizare Afaceri Mici și Mijlocii',
      en: 'Small & Medium Business Automation',
      es: 'Automatización Pequeñas y Medianas Empresas'
    },
    subtitle: {
      ro: 'Soluții accesibile pentru orice afacere',
      en: 'Affordable solutions for any business',
      es: 'Soluciones accesibles para cualquier negocio'
    },
    description: {
      ro: 'Pachet complet pentru SMB: CRM simplu, facturare automată, email marketing, programări online și raportare. Preț accesibil, rezultate garantate.',
      en: 'Complete SMB package: simple CRM, automatic billing, email marketing, online booking, and reporting. Affordable price, guaranteed results.',
      es: 'Paquete completo para PYME: CRM simple, facturación automática, email marketing, reservas online e informes. Precio accesible, resultados garantizados.'
    },
    benefits: {
      ro: [
        { stat: '50%', label: 'Economie timp' },
        { stat: '30%', label: 'Creștere venituri' },
        { stat: '€99', label: 'Doar/lună' }
      ],
      en: [
        { stat: '50%', label: 'Time saved' },
        { stat: '30%', label: 'Revenue growth' },
        { stat: '€99', label: 'Only/month' }
      ],
      es: [
        { stat: '50%', label: 'Tiempo ahorrado' },
        { stat: '30%', label: 'Crecimiento ingresos' },
        { stat: '€99', label: 'Solo/mes' }
      ]
    },
    features: {
      ro: [
        { icon: 'Users', title: 'CRM Simplu', description: 'Gestionare clienți și lead-uri fără complexitate.' },
        { icon: 'FileText', title: 'Facturare Automată', description: 'Generare și trimitere facturi, reminder-uri plăți.' },
        { icon: 'Mail', title: 'Email Marketing', description: 'Campanii automate pentru reactivare și fidelizare.' },
        { icon: 'Calendar', title: 'Programări Online', description: 'Calendar online simplu pentru programări și rezervări.' }
      ],
      en: [
        { icon: 'Users', title: 'Simple CRM', description: 'Client and lead management without complexity.' },
        { icon: 'FileText', title: 'Automatic Billing', description: 'Invoice generation and sending, payment reminders.' },
        { icon: 'Mail', title: 'Email Marketing', description: 'Automatic campaigns for reactivation and loyalty.' },
        { icon: 'Calendar', title: 'Online Booking', description: 'Simple online calendar for appointments and reservations.' }
      ],
      es: [
        { icon: 'Users', title: 'CRM Simple', description: 'Gestión de clientes y leads sin complejidad.' },
        { icon: 'FileText', title: 'Facturación Automática', description: 'Generación y envío de facturas, recordatorios de pago.' },
        { icon: 'Mail', title: 'Email Marketing', description: 'Campañas automáticas para reactivación y fidelización.' },
        { icon: 'Calendar', title: 'Reservas Online', description: 'Calendario online simple para citas y reservas.' }
      ]
    },
    useCases: {
      ro: ['Freelanceri', 'Consultanți', 'Meșteri', 'Servicii locale'],
      en: ['Freelancers', 'Consultants', 'Craftsmen', 'Local services'],
      es: ['Freelancers', 'Consultores', 'Artesanos', 'Servicios locales']
    },
    pricing: {
      setup: '300€',
      monthly: '99€/lună',
      implementation: '1 săptămână',
      roi: '1-2 luni'
    }
  }
];

export const getAutomationBySlug = (slug: string): AutomationService | undefined => {
  return automationServices.find(service => service.slug === slug);
};
