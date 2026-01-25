import { 
  Building2, Stethoscope, Brain, 
  Landmark, ShoppingCart, Hotel, MessageCircle, 
  Share2, Home, LucideIcon
} from 'lucide-react';

export interface AutomationProblem {
  emoji: string;
  problem: string;
  solution: string;
  benefit: string;
}

export interface AutomationFeature {
  icon: string;
  title: string;
  description: string;
  highlight: string;
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
  problems: {
    ro: AutomationProblem[];
    en: AutomationProblem[];
    es: AutomationProblem[];
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
  // 1. Salon Înfrumusețare
  {
    id: 'salon-infrumusetare',
    slug: 'salon-infrumusetare',
    icon: Building2,
    color: 'from-pink-500 to-rose-600',
    badge: {
      ro: 'Specializat pentru Saloane de Înfrumusețare',
      en: 'Specialized for Beauty Salons',
      es: 'Especializado para Salones de Belleza'
    },
    title: {
      ro: 'Automatizează-ți Salonul de Înfrumusețare',
      en: 'Automate Your Beauty Salon',
      es: 'Automatiza tu Salón de Belleza'
    },
    subtitle: {
      ro: 'Sistem complet pentru saloane, frizerii și centre wellness',
      en: 'Complete system for salons, hair stylists, and wellness centers',
      es: 'Sistema completo para salones, peluquerías y centros de bienestar'
    },
    description: {
      ro: 'Sistem complet pentru saloane, frizerii și centre wellness. Reduce no-show-urile cu 80%, programări online 24/7, marketing automat. Implementare în 2-3 săptămâni.',
      en: 'Complete system for salons, hair stylists, and wellness centers. Reduce no-shows by 80%, online bookings 24/7, automated marketing. Implementation in 2-3 weeks.',
      es: 'Sistema completo para salones, peluquerías y centros de bienestar. Reduce no-shows en 80%, reservas online 24/7, marketing automatizado. Implementación en 2-3 semanas.'
    },
    benefits: {
      ro: [
        { stat: '80%', label: 'Reducere No-Show' },
        { stat: '300+', label: 'Saloane în România' },
        { stat: '2-3 săpt', label: 'Implementare' }
      ],
      en: [
        { stat: '80%', label: 'No-Show Reduction' },
        { stat: '300+', label: 'Salons in Romania' },
        { stat: '2-3 wks', label: 'Implementation' }
      ],
      es: [
        { stat: '80%', label: 'Reducción No-Show' },
        { stat: '300+', label: 'Salones en Rumania' },
        { stat: '2-3 sem', label: 'Implementación' }
      ]
    },
    problems: {
      ro: [
        { emoji: '🤦‍♀️', problem: 'No-show-uri frecvente (25-30%)', solution: 'Reducere la 5% prin reminder-uri automate', benefit: 'Recuperezi 20-25% din timpul pierdut' },
        { emoji: '📞', problem: 'Telefoanele sună constant pentru programări', solution: 'Programări online 24/7, fără întreruperi', benefit: 'Focus 100% pe clienții din salon' },
        { emoji: '📝', problem: 'Evidența clienților pe hârtie sau Excel', solution: 'Bază de date digitală cu istoric complet', benefit: 'Servicii personalizate și marketing țintit' },
        { emoji: '💸', problem: 'Pierderea clienților prin lipsa de follow-up', solution: 'Marketing automat pentru reactivare', benefit: 'Creșterea retenției cu 40%' }
      ],
      en: [
        { emoji: '🤦‍♀️', problem: 'Frequent no-shows (25-30%)', solution: 'Reduce to 5% with automatic reminders', benefit: 'Recover 20-25% of lost time' },
        { emoji: '📞', problem: 'Phones constantly ringing for appointments', solution: 'Online bookings 24/7, uninterrupted', benefit: '100% focus on salon clients' },
        { emoji: '📝', problem: 'Client records on paper or Excel', solution: 'Digital database with complete history', benefit: 'Personalized services and targeted marketing' },
        { emoji: '💸', problem: 'Losing clients due to lack of follow-up', solution: 'Automated marketing for reactivation', benefit: '40% increase in retention' }
      ],
      es: [
        { emoji: '🤦‍♀️', problem: 'No-shows frecuentes (25-30%)', solution: 'Reducción al 5% con recordatorios automáticos', benefit: 'Recupera 20-25% del tiempo perdido' },
        { emoji: '📞', problem: 'Teléfonos sonando constantemente para citas', solution: 'Reservas online 24/7, sin interrupciones', benefit: 'Enfoque 100% en clientes del salón' },
        { emoji: '📝', problem: 'Registros de clientes en papel o Excel', solution: 'Base de datos digital con historial completo', benefit: 'Servicios personalizados y marketing dirigido' },
        { emoji: '💸', problem: 'Pérdida de clientes por falta de seguimiento', solution: 'Marketing automatizado para reactivación', benefit: 'Aumento de retención del 40%' }
      ]
    },
    features: {
      ro: [
        { icon: 'Calendar', title: 'Programări Online 24/7', description: 'Clienții își programează singuri serviciile oricând, fără să te deranjeze. Calendar disponibil non-stop.', highlight: 'Libertate completă pentru clienți' },
        { icon: 'Bell', title: 'Reminder-uri Automate', description: 'SMS și email automate cu 24h și 2h înainte. Reduce no-show-urile de la 30% la doar 5%.', highlight: 'Reducere no-show cu 80%' },
        { icon: 'Users', title: 'Gestiune Clienți Avansată', description: 'Istoric complet servicii, preferințe, alergii, data nașterii pentru felicitări automate.', highlight: 'Personalizare maximă' },
        { icon: 'TrendingUp', title: 'Marketing Automat', description: 'Campanii automate de reactivare, oferte aniversare și follow-up inteligent.', highlight: 'Creștere retenție 40%' }
      ],
      en: [
        { icon: 'Calendar', title: 'Online Bookings 24/7', description: 'Clients book services themselves anytime without bothering you. Calendar available 24/7.', highlight: 'Complete freedom for clients' },
        { icon: 'Bell', title: 'Automatic Reminders', description: 'Automatic SMS and email 24h and 2h before. Reduce no-shows from 30% to just 5%.', highlight: '80% no-show reduction' },
        { icon: 'Users', title: 'Advanced Client Management', description: 'Complete service history, preferences, allergies, birthdate for automatic greetings.', highlight: 'Maximum personalization' },
        { icon: 'TrendingUp', title: 'Automated Marketing', description: 'Automatic reactivation campaigns, anniversary offers, and smart follow-up.', highlight: '40% retention increase' }
      ],
      es: [
        { icon: 'Calendar', title: 'Reservas Online 24/7', description: 'Los clientes reservan servicios cuando quieran sin molestarte. Calendario disponible 24/7.', highlight: 'Libertad completa para clientes' },
        { icon: 'Bell', title: 'Recordatorios Automáticos', description: 'SMS y email automáticos 24h y 2h antes. Reduce no-shows del 30% a solo 5%.', highlight: 'Reducción de no-show 80%' },
        { icon: 'Users', title: 'Gestión Avanzada de Clientes', description: 'Historial completo de servicios, preferencias, alergias, fecha de cumpleaños para felicitaciones automáticas.', highlight: 'Personalización máxima' },
        { icon: 'TrendingUp', title: 'Marketing Automatizado', description: 'Campañas automáticas de reactivación, ofertas de aniversario y seguimiento inteligente.', highlight: 'Aumento de retención 40%' }
      ]
    },
    useCases: {
      ro: ['Saloane de coafură', 'Saloane de manichiură', 'Centre SPA', 'Studiouri de frumusețe', 'Frizerii'],
      en: ['Hair salons', 'Nail salons', 'SPA centers', 'Beauty studios', 'Barbershops'],
      es: ['Peluquerías', 'Salones de manicura', 'Centros SPA', 'Estudios de belleza', 'Barberías']
    },
    pricing: {
      setup: '700€',
      monthly: '129€/lună',
      implementation: '2-3 săptămâni',
      roi: '3-4 luni'
    }
  },

  // 2. Cabinet Medical
  {
    id: 'cabinet-medical',
    slug: 'cabinet-medical',
    icon: Stethoscope,
    color: 'from-blue-500 to-cyan-600',
    badge: {
      ro: 'Conformitate GDPR Medicală Completă',
      en: 'Complete Medical GDPR Compliance',
      es: 'Cumplimiento GDPR Médico Completo'
    },
    title: {
      ro: 'Automatizează-ți Cabinetul Medical',
      en: 'Automate Your Medical Office',
      es: 'Automatiza tu Consultorio Médico'
    },
    subtitle: {
      ro: 'Sistem complet pentru cabinete medicale și clinici',
      en: 'Complete system for medical offices and clinics',
      es: 'Sistema completo para consultorios médicos y clínicas'
    },
    description: {
      ro: 'Sistem complet pentru cabinete medicale și clinici. Programări online 24/7, conformitate GDPR, integrare CNAS, reducere timp administrativ cu 60%. Implementare securizată în 3-4 săptămâni.',
      en: 'Complete system for medical offices and clinics. Online appointments 24/7, GDPR compliance, insurance integration, 60% admin time reduction. Secure implementation in 3-4 weeks.',
      es: 'Sistema completo para consultorios médicos y clínicas. Citas online 24/7, cumplimiento GDPR, integración de seguros, reducción del 60% en tiempo administrativo. Implementación segura en 3-4 semanas.'
    },
    benefits: {
      ro: [
        { stat: '60%', label: 'Reducere Timp Admin' },
        { stat: 'GDPR', label: '100% Compliant' },
        { stat: '3-4 săpt', label: 'Implementare' }
      ],
      en: [
        { stat: '60%', label: 'Admin Time Reduction' },
        { stat: 'GDPR', label: '100% Compliant' },
        { stat: '3-4 wks', label: 'Implementation' }
      ],
      es: [
        { stat: '60%', label: 'Reducción Tiempo Admin' },
        { stat: 'GDPR', label: '100% Conforme' },
        { stat: '3-4 sem', label: 'Implementación' }
      ]
    },
    problems: {
      ro: [
        { emoji: '📞', problem: 'Telefoanele sună constant pentru programări', solution: 'Programări online 24/7, fără întreruperi', benefit: 'Focus 100% pe pacienți în timpul consultațiilor' },
        { emoji: '📄', problem: 'Evidența pacienților pe hârtie sau Excel', solution: 'Dosare medicale digitale GDPR compliant', benefit: 'Istoric complet și acces instant la date' },
        { emoji: '⏰', problem: 'Timpul pierdut cu administrația', solution: 'Automatizare procese administrative', benefit: 'Reducere timp administrativ cu 60%' },
        { emoji: '🔐', problem: 'Riscuri GDPR și confidențialitate', solution: 'Conformitate completă și audit trail', benefit: 'Zero riscuri legale și sancțiuni' }
      ],
      en: [
        { emoji: '📞', problem: 'Phones constantly ringing for appointments', solution: 'Online appointments 24/7, uninterrupted', benefit: '100% focus on patients during consultations' },
        { emoji: '📄', problem: 'Patient records on paper or Excel', solution: 'GDPR compliant digital medical records', benefit: 'Complete history and instant data access' },
        { emoji: '⏰', problem: 'Time lost on administration', solution: 'Automated administrative processes', benefit: '60% admin time reduction' },
        { emoji: '🔐', problem: 'GDPR and confidentiality risks', solution: 'Complete compliance and audit trail', benefit: 'Zero legal risks and penalties' }
      ],
      es: [
        { emoji: '📞', problem: 'Teléfonos sonando constantemente para citas', solution: 'Citas online 24/7, sin interrupciones', benefit: 'Enfoque 100% en pacientes durante consultas' },
        { emoji: '📄', problem: 'Registros de pacientes en papel o Excel', solution: 'Expedientes médicos digitales conformes con GDPR', benefit: 'Historial completo y acceso instantáneo a datos' },
        { emoji: '⏰', problem: 'Tiempo perdido en administración', solution: 'Procesos administrativos automatizados', benefit: 'Reducción del 60% en tiempo administrativo' },
        { emoji: '🔐', problem: 'Riesgos de GDPR y confidencialidad', solution: 'Cumplimiento completo y registro de auditoría', benefit: 'Cero riesgos legales y sanciones' }
      ]
    },
    features: {
      ro: [
        { icon: 'Calendar', title: 'Programări Online 24/7', description: 'Pacienții își programează singuri consultațiile oricând, fără să suni la cabinet în timpul programului.', highlight: 'Reducere apeluri cu 80%' },
        { icon: 'Shield', title: 'Conformitate GDPR Completă', description: 'Respectăm toate reglementările GDPR pentru date medicale. Audit trail complet și documentație conformitate.', highlight: 'Zero riscuri legale' },
        { icon: 'Bell', title: 'Reminder-uri Automate', description: 'SMS și email automate pentru reducerea neprezentărilor și îmbunătățirea punctualității pacienților.', highlight: 'Reducere no-show 70%' },
        { icon: 'FileText', title: 'Dosare Digitale Securizate', description: 'Istoric medical complet, documente și prescripții într-un singur loc cu acces securizat.', highlight: 'Acces instant la istoric' }
      ],
      en: [
        { icon: 'Calendar', title: 'Online Appointments 24/7', description: 'Patients schedule their own consultations anytime without calling the office during hours.', highlight: '80% call reduction' },
        { icon: 'Shield', title: 'Complete GDPR Compliance', description: 'We comply with all GDPR regulations for medical data. Complete audit trail and compliance documentation.', highlight: 'Zero legal risks' },
        { icon: 'Bell', title: 'Automatic Reminders', description: 'Automatic SMS and email to reduce no-shows and improve patient punctuality.', highlight: '70% no-show reduction' },
        { icon: 'FileText', title: 'Secure Digital Records', description: 'Complete medical history, documents, and prescriptions in one place with secure access.', highlight: 'Instant history access' }
      ],
      es: [
        { icon: 'Calendar', title: 'Citas Online 24/7', description: 'Los pacientes programan sus propias consultas cuando quieran sin llamar al consultorio.', highlight: 'Reducción de llamadas 80%' },
        { icon: 'Shield', title: 'Cumplimiento GDPR Completo', description: 'Cumplimos con todas las regulaciones GDPR para datos médicos. Registro de auditoría completo.', highlight: 'Cero riesgos legales' },
        { icon: 'Bell', title: 'Recordatorios Automáticos', description: 'SMS y email automáticos para reducir ausencias y mejorar la puntualidad de pacientes.', highlight: 'Reducción no-show 70%' },
        { icon: 'FileText', title: 'Expedientes Digitales Seguros', description: 'Historial médico completo, documentos y recetas en un solo lugar con acceso seguro.', highlight: 'Acceso instantáneo al historial' }
      ]
    },
    useCases: {
      ro: ['Cabinete stomatologice', 'Clinici de recuperare', 'Cabinete de psihologie', 'Medicină de familie', 'Cabinete oftalmologie'],
      en: ['Dental offices', 'Recovery clinics', 'Psychology offices', 'Family medicine', 'Ophthalmology offices'],
      es: ['Consultorios dentales', 'Clínicas de recuperación', 'Consultorios de psicología', 'Medicina familiar', 'Consultorios de oftalmología']
    },
    pricing: {
      setup: '900€',
      monthly: '149€/lună',
      implementation: '3-4 săptămâni',
      roi: '3-5 luni'
    }
  },

  // 3. Inteligență Artificială
  {
    id: 'inteligenta-artificiala',
    slug: 'inteligenta-artificiala',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    badge: {
      ro: 'Soluții Inteligență Artificială pentru Business',
      en: 'AI Solutions for Business',
      es: 'Soluciones de IA para Negocios'
    },
    title: {
      ro: 'Automatizări Inteligență Artificială (AI)',
      en: 'Artificial Intelligence Automation',
      es: 'Automatización con Inteligencia Artificial'
    },
    subtitle: {
      ro: 'Integrăm soluții de AI în orice tip de afacere',
      en: 'We integrate AI solutions into any business',
      es: 'Integramos soluciones de IA en cualquier negocio'
    },
    description: {
      ro: 'Integrăm soluții de inteligență artificială în orice tip de afacere pentru a reduce costurile operaționale, optimiza procesele repetitive și îmbunătăți experiența clienților. ROI garantat în 3-6 luni.',
      en: 'We integrate AI solutions into any business to reduce operational costs, optimize repetitive processes, and improve customer experience. Guaranteed ROI in 3-6 months.',
      es: 'Integramos soluciones de IA en cualquier negocio para reducir costos operativos, optimizar procesos repetitivos y mejorar la experiencia del cliente. ROI garantizado en 3-6 meses.'
    },
    benefits: {
      ro: [
        { stat: '40%', label: 'Reducere Costuri' },
        { stat: '3-6 luni', label: 'ROI Garantat' },
        { stat: '24/7', label: 'Suport Continuu' }
      ],
      en: [
        { stat: '40%', label: 'Cost Reduction' },
        { stat: '3-6 mo', label: 'Guaranteed ROI' },
        { stat: '24/7', label: 'Continuous Support' }
      ],
      es: [
        { stat: '40%', label: 'Reducción de Costos' },
        { stat: '3-6 meses', label: 'ROI Garantizado' },
        { stat: '24/7', label: 'Soporte Continuo' }
      ]
    },
    problems: {
      ro: [
        { emoji: '📞', problem: 'Personal ocupat cu întrebări repetitive', solution: 'Chatbot AI răspunde la 80% din întrebări automat', benefit: 'Echipa se concentrează pe taskuri importante' },
        { emoji: '📊', problem: 'Analiza manuală a datelor consumă timp', solution: 'AI analizează automat și generează insights', benefit: 'Decizii rapide bazate pe date precise' },
        { emoji: '✍️', problem: 'Crearea de conținut este costisitoare', solution: 'AI generează automat conținut personalizat', benefit: 'Marketing continuu fără efort manual' },
        { emoji: '⚙️', problem: 'Procese repetitive consumă resurse', solution: 'Automatizare completă cu AI care învață', benefit: 'Eficiență crescută cu 60%, zero erori' }
      ],
      en: [
        { emoji: '📞', problem: 'Staff busy with repetitive questions', solution: 'AI chatbot answers 80% of questions automatically', benefit: 'Team focuses on important tasks' },
        { emoji: '📊', problem: 'Manual data analysis is time-consuming', solution: 'AI analyzes automatically and generates insights', benefit: 'Quick decisions based on accurate data' },
        { emoji: '✍️', problem: 'Content creation is expensive', solution: 'AI automatically generates personalized content', benefit: 'Continuous marketing without manual effort' },
        { emoji: '⚙️', problem: 'Repetitive processes consume resources', solution: 'Complete automation with learning AI', benefit: '60% increased efficiency, zero errors' }
      ],
      es: [
        { emoji: '📞', problem: 'Personal ocupado con preguntas repetitivas', solution: 'Chatbot AI responde 80% de preguntas automáticamente', benefit: 'Equipo se enfoca en tareas importantes' },
        { emoji: '📊', problem: 'El análisis manual de datos consume tiempo', solution: 'AI analiza automáticamente y genera insights', benefit: 'Decisiones rápidas basadas en datos precisos' },
        { emoji: '✍️', problem: 'La creación de contenido es costosa', solution: 'AI genera automáticamente contenido personalizado', benefit: 'Marketing continuo sin esfuerzo manual' },
        { emoji: '⚙️', problem: 'Procesos repetitivos consumen recursos', solution: 'Automatización completa con IA que aprende', benefit: '60% más eficiencia, cero errores' }
      ]
    },
    features: {
      ro: [
        { icon: 'MessageCircle', title: 'Chatboți Inteligenți pentru Suport', description: 'Asistenți AI care răspund instant la întrebările clienților, 24/7, în limba română. Reduc volumul de apeluri cu 70%.', highlight: 'Suport clienți automatizat 24/7' },
        { icon: 'BarChart', title: 'Analiză Automată a Datelor', description: 'Algoritmi AI care analizează datele business-ului tău și generează rapoarte inteligente cu insights actionabile.', highlight: 'Decizii bazate pe date precise' },
        { icon: 'Sparkles', title: 'Generare Conținut AI', description: 'Creează automat texte pentru social media, descrieri produse, emailuri de marketing și multe altele.', highlight: 'Content fără efort manual' },
        { icon: 'Cog', title: 'Automatizare Procese Business', description: 'Automatizează sarcini repetitive cu AI care învață din pattern-uri și se îmbunătățește continuu.', highlight: 'Eficiență crescută cu 60%' }
      ],
      en: [
        { icon: 'MessageCircle', title: 'Intelligent Support Chatbots', description: 'AI assistants that instantly answer customer questions, 24/7, in your language. Reduce call volume by 70%.', highlight: 'Automated 24/7 customer support' },
        { icon: 'BarChart', title: 'Automatic Data Analysis', description: 'AI algorithms that analyze your business data and generate intelligent reports with actionable insights.', highlight: 'Data-driven decisions' },
        { icon: 'Sparkles', title: 'AI Content Generation', description: 'Automatically create social media texts, product descriptions, marketing emails, and more.', highlight: 'Content without manual effort' },
        { icon: 'Cog', title: 'Business Process Automation', description: 'Automate repetitive tasks with AI that learns from patterns and continuously improves.', highlight: '60% increased efficiency' }
      ],
      es: [
        { icon: 'MessageCircle', title: 'Chatbots Inteligentes de Soporte', description: 'Asistentes AI que responden instantáneamente a preguntas de clientes, 24/7, en tu idioma. Reducen llamadas en 70%.', highlight: 'Soporte al cliente automatizado 24/7' },
        { icon: 'BarChart', title: 'Análisis Automático de Datos', description: 'Algoritmos AI que analizan los datos de tu negocio y generan informes inteligentes con insights accionables.', highlight: 'Decisiones basadas en datos' },
        { icon: 'Sparkles', title: 'Generación de Contenido AI', description: 'Crea automáticamente textos para redes sociales, descripciones de productos, emails de marketing y más.', highlight: 'Contenido sin esfuerzo manual' },
        { icon: 'Cog', title: 'Automatización de Procesos de Negocio', description: 'Automatiza tareas repetitivas con IA que aprende de patrones y mejora continuamente.', highlight: '60% más eficiencia' }
      ]
    },
    useCases: {
      ro: ['Companii de servicii', 'Magazine online', 'Agenții marketing', 'Companii logistică', 'Start-up-uri tech'],
      en: ['Service companies', 'Online stores', 'Marketing agencies', 'Logistics companies', 'Tech startups'],
      es: ['Empresas de servicios', 'Tiendas online', 'Agencias de marketing', 'Empresas de logística', 'Startups tech']
    },
    pricing: {
      setup: '1500€',
      monthly: '299€/lună',
      implementation: '4-8 săptămâni',
      roi: '3-6 luni'
    }
  },

  // 4. Sector Public
  {
    id: 'sector-public',
    slug: 'sector-public',
    icon: Landmark,
    color: 'from-slate-500 to-gray-600',
    badge: {
      ro: 'Soluții Digitalizare Sector Public',
      en: 'Public Sector Digitization Solutions',
      es: 'Soluciones de Digitalización del Sector Público'
    },
    title: {
      ro: 'Automatizare Sector Public',
      en: 'Public Sector Automation',
      es: 'Automatización del Sector Público'
    },
    subtitle: {
      ro: 'Digitalizare și automatizare pentru instituții publice',
      en: 'Digitization and automation for public institutions',
      es: 'Digitalización y automatización para instituciones públicas'
    },
    description: {
      ro: 'Digitalizare completă pentru primării, instituții publice și administrație locală. Ghișee virtuale, programări online, gestiune documente și fluxuri de lucru automatizate. Conformitate legală garantată.',
      en: 'Complete digitization for city halls, public institutions, and local administration. Virtual counters, online appointments, document management, and automated workflows. Guaranteed legal compliance.',
      es: 'Digitalización completa para ayuntamientos, instituciones públicas y administración local. Ventanillas virtuales, citas online, gestión de documentos y flujos de trabajo automatizados. Cumplimiento legal garantizado.'
    },
    benefits: {
      ro: [
        { stat: '70%', label: 'Reducere Cozi' },
        { stat: '50%', label: 'Economii Resurse' },
        { stat: '100%', label: 'Conformitate' }
      ],
      en: [
        { stat: '70%', label: 'Queue Reduction' },
        { stat: '50%', label: 'Resource Savings' },
        { stat: '100%', label: 'Compliance' }
      ],
      es: [
        { stat: '70%', label: 'Reducción de Colas' },
        { stat: '50%', label: 'Ahorro de Recursos' },
        { stat: '100%', label: 'Cumplimiento' }
      ]
    },
    problems: {
      ro: [
        { emoji: '⏳', problem: 'Cozi interminabile la ghișee', solution: 'Ghișee virtuale și programări online', benefit: 'Reducerea timpului de așteptare cu 70%' },
        { emoji: '📋', problem: 'Documente pierdute sau greu de găsit', solution: 'Arhivă digitală cu căutare rapidă', benefit: 'Acces instant la orice document' },
        { emoji: '🔄', problem: 'Procese birocratice lente și complexe', solution: 'Fluxuri de lucru automatizate', benefit: 'Procesare de 3x mai rapidă' },
        { emoji: '💰', problem: 'Costuri mari cu personalul și hârtia', solution: 'Digitalizare completă a serviciilor', benefit: 'Economii de 50% la resurse' }
      ],
      en: [
        { emoji: '⏳', problem: 'Endless queues at counters', solution: 'Virtual counters and online appointments', benefit: '70% waiting time reduction' },
        { emoji: '📋', problem: 'Lost or hard to find documents', solution: 'Digital archive with quick search', benefit: 'Instant access to any document' },
        { emoji: '🔄', problem: 'Slow and complex bureaucratic processes', solution: 'Automated workflows', benefit: '3x faster processing' },
        { emoji: '💰', problem: 'High costs for staff and paper', solution: 'Complete digitization of services', benefit: '50% resource savings' }
      ],
      es: [
        { emoji: '⏳', problem: 'Colas interminables en ventanillas', solution: 'Ventanillas virtuales y citas online', benefit: 'Reducción del 70% en tiempo de espera' },
        { emoji: '📋', problem: 'Documentos perdidos o difíciles de encontrar', solution: 'Archivo digital con búsqueda rápida', benefit: 'Acceso instantáneo a cualquier documento' },
        { emoji: '🔄', problem: 'Procesos burocráticos lentos y complejos', solution: 'Flujos de trabajo automatizados', benefit: 'Procesamiento 3x más rápido' },
        { emoji: '💰', problem: 'Altos costos de personal y papel', solution: 'Digitalización completa de servicios', benefit: '50% de ahorro en recursos' }
      ]
    },
    features: {
      ro: [
        { icon: 'Calendar', title: 'Programări Online pentru Cetățeni', description: 'Cetățenii își programează singuri vizitele la instituție, eliminând cozile și timpul de așteptare.', highlight: 'Zero cozi la ghișee' },
        { icon: 'FileText', title: 'Gestiune Documente Digitale', description: 'Arhivă electronică completă cu căutare avansată, versionare și acces securizat bazat pe roluri.', highlight: 'Acces instant la documente' },
        { icon: 'RefreshCw', title: 'Fluxuri de Lucru Automatizate', description: 'Automatizează aprobările, notificările și transferul documentelor între departamente.', highlight: 'Procesare 3x mai rapidă' },
        { icon: 'Shield', title: 'Conformitate GDPR și Legală', description: 'Respectăm toate reglementările pentru instituții publice, cu audit trail complet.', highlight: '100% conformitate garantată' }
      ],
      en: [
        { icon: 'Calendar', title: 'Online Appointments for Citizens', description: 'Citizens schedule their own visits to the institution, eliminating queues and waiting time.', highlight: 'Zero queues at counters' },
        { icon: 'FileText', title: 'Digital Document Management', description: 'Complete electronic archive with advanced search, versioning, and role-based secure access.', highlight: 'Instant document access' },
        { icon: 'RefreshCw', title: 'Automated Workflows', description: 'Automate approvals, notifications, and document transfer between departments.', highlight: '3x faster processing' },
        { icon: 'Shield', title: 'GDPR and Legal Compliance', description: 'We comply with all regulations for public institutions, with complete audit trail.', highlight: '100% guaranteed compliance' }
      ],
      es: [
        { icon: 'Calendar', title: 'Citas Online para Ciudadanos', description: 'Los ciudadanos programan sus propias visitas a la institución, eliminando colas y tiempo de espera.', highlight: 'Cero colas en ventanillas' },
        { icon: 'FileText', title: 'Gestión de Documentos Digitales', description: 'Archivo electrónico completo con búsqueda avanzada, versionado y acceso seguro basado en roles.', highlight: 'Acceso instantáneo a documentos' },
        { icon: 'RefreshCw', title: 'Flujos de Trabajo Automatizados', description: 'Automatiza aprobaciones, notificaciones y transferencia de documentos entre departamentos.', highlight: 'Procesamiento 3x más rápido' },
        { icon: 'Shield', title: 'Cumplimiento GDPR y Legal', description: 'Cumplimos con todas las regulaciones para instituciones públicas, con registro de auditoría completo.', highlight: 'Cumplimiento 100% garantizado' }
      ]
    },
    useCases: {
      ro: ['Primării', 'Consilii locale', 'Instituții administrative', 'Spitale publice', 'Universități'],
      en: ['City halls', 'Local councils', 'Administrative institutions', 'Public hospitals', 'Universities'],
      es: ['Ayuntamientos', 'Consejos locales', 'Instituciones administrativas', 'Hospitales públicos', 'Universidades']
    },
    pricing: {
      setup: '2000€',
      monthly: '399€/lună',
      implementation: '6-10 săptămâni',
      roi: '6-12 luni'
    }
  },

  // 5. Magazine Retail
  {
    id: 'magazine-retail',
    slug: 'magazine-retail',
    icon: ShoppingCart,
    color: 'from-emerald-500 to-teal-600',
    badge: {
      ro: 'Automatizare Completă Magazine Retail',
      en: 'Complete Retail Store Automation',
      es: 'Automatización Completa de Tiendas Retail'
    },
    title: {
      ro: 'Automatizare Magazine Retail',
      en: 'Retail Store Automation',
      es: 'Automatización de Tiendas Retail'
    },
    subtitle: {
      ro: 'Gestiune inventar, vânzări și loializare clienți',
      en: 'Inventory management, sales, and customer loyalty',
      es: 'Gestión de inventario, ventas y fidelización de clientes'
    },
    description: {
      ro: 'Sistem complet pentru magazine retail: gestiune inventar în timp real, POS modern, program loializare, analiză vânzări AI și comenzi automate furnizori. ROI în 3-4 luni.',
      en: 'Complete system for retail stores: real-time inventory management, modern POS, loyalty program, AI sales analysis, and automatic supplier orders. ROI in 3-4 months.',
      es: 'Sistema completo para tiendas retail: gestión de inventario en tiempo real, POS moderno, programa de fidelización, análisis de ventas AI y pedidos automáticos a proveedores. ROI en 3-4 meses.'
    },
    benefits: {
      ro: [
        { stat: '30%', label: 'Creștere Vânzări' },
        { stat: '90%', label: 'Stoc Optimizat' },
        { stat: '3-4 luni', label: 'ROI' }
      ],
      en: [
        { stat: '30%', label: 'Sales Increase' },
        { stat: '90%', label: 'Optimized Stock' },
        { stat: '3-4 mo', label: 'ROI' }
      ],
      es: [
        { stat: '30%', label: 'Aumento de Ventas' },
        { stat: '90%', label: 'Stock Optimizado' },
        { stat: '3-4 meses', label: 'ROI' }
      ]
    },
    problems: {
      ro: [
        { emoji: '📦', problem: 'Stocuri dezorganizate sau excesive', solution: 'Gestiune inventar AI în timp real', benefit: 'Reducere stoc excedentar cu 40%' },
        { emoji: '💳', problem: 'POS învechit și lent', solution: 'Sistem POS modern cu plăți multiple', benefit: 'Checkout de 2x mai rapid' },
        { emoji: '🎯', problem: 'Clienți care nu revin', solution: 'Program loializare automatizat', benefit: 'Creștere retenție cu 50%' },
        { emoji: '📊', problem: 'Lipsa vizibilității pe vânzări', solution: 'Dashboard analytics în timp real', benefit: 'Decizii bazate pe date concrete' }
      ],
      en: [
        { emoji: '📦', problem: 'Disorganized or excessive stock', solution: 'Real-time AI inventory management', benefit: '40% excess stock reduction' },
        { emoji: '💳', problem: 'Outdated and slow POS', solution: 'Modern POS system with multiple payments', benefit: '2x faster checkout' },
        { emoji: '🎯', problem: 'Customers not returning', solution: 'Automated loyalty program', benefit: '50% retention increase' },
        { emoji: '📊', problem: 'Lack of sales visibility', solution: 'Real-time analytics dashboard', benefit: 'Data-driven decisions' }
      ],
      es: [
        { emoji: '📦', problem: 'Stock desorganizado o excesivo', solution: 'Gestión de inventario AI en tiempo real', benefit: 'Reducción del 40% en stock excedente' },
        { emoji: '💳', problem: 'POS obsoleto y lento', solution: 'Sistema POS moderno con múltiples pagos', benefit: 'Checkout 2x más rápido' },
        { emoji: '🎯', problem: 'Clientes que no regresan', solution: 'Programa de fidelización automatizado', benefit: 'Aumento del 50% en retención' },
        { emoji: '📊', problem: 'Falta de visibilidad en ventas', solution: 'Dashboard de analytics en tiempo real', benefit: 'Decisiones basadas en datos' }
      ]
    },
    features: {
      ro: [
        { icon: 'Package', title: 'Gestiune Inventar AI', description: 'Monitorizare stocuri în timp real, alertă când scad produsele, predicție cerere și comenzi automate.', highlight: 'Zero rupturi de stoc' },
        { icon: 'CreditCard', title: 'POS Modern Integrat', description: 'Sistem de casă rapid, plăți card/cash/voucher, emitere bonuri fiscale și sincronizare inventar.', highlight: 'Checkout 2x mai rapid' },
        { icon: 'Star', title: 'Program Loializare Automat', description: 'Puncte, reduceri și recompense automate pentru clienții fideli cu marketing personalizat.', highlight: 'Creștere retenție 50%' },
        { icon: 'BarChart', title: 'Analytics Vânzări AI', description: 'Dashboard cu cele mai vândute produse, marje, tendințe și recomandări de optimizare.', highlight: 'Decizii bazate pe AI' }
      ],
      en: [
        { icon: 'Package', title: 'AI Inventory Management', description: 'Real-time stock monitoring, alerts when products run low, demand prediction, and automatic orders.', highlight: 'Zero stock-outs' },
        { icon: 'CreditCard', title: 'Integrated Modern POS', description: 'Fast cash register, card/cash/voucher payments, fiscal receipt printing, and inventory sync.', highlight: '2x faster checkout' },
        { icon: 'Star', title: 'Automatic Loyalty Program', description: 'Automatic points, discounts, and rewards for loyal customers with personalized marketing.', highlight: '50% retention increase' },
        { icon: 'BarChart', title: 'AI Sales Analytics', description: 'Dashboard with best-selling products, margins, trends, and optimization recommendations.', highlight: 'AI-driven decisions' }
      ],
      es: [
        { icon: 'Package', title: 'Gestión de Inventario AI', description: 'Monitoreo de stock en tiempo real, alertas cuando bajan productos, predicción de demanda y pedidos automáticos.', highlight: 'Cero rupturas de stock' },
        { icon: 'CreditCard', title: 'POS Moderno Integrado', description: 'Caja rápida, pagos con tarjeta/efectivo/voucher, impresión de recibos fiscales y sincronización de inventario.', highlight: 'Checkout 2x más rápido' },
        { icon: 'Star', title: 'Programa de Fidelización Automático', description: 'Puntos, descuentos y recompensas automáticas para clientes fieles con marketing personalizado.', highlight: 'Aumento del 50% en retención' },
        { icon: 'BarChart', title: 'Analytics de Ventas AI', description: 'Dashboard con productos más vendidos, márgenes, tendencias y recomendaciones de optimización.', highlight: 'Decisiones basadas en AI' }
      ]
    },
    useCases: {
      ro: ['Magazine alimentare', 'Buticuri fashion', 'Farmacii', 'Magazine electronice', 'Supermarketuri'],
      en: ['Grocery stores', 'Fashion boutiques', 'Pharmacies', 'Electronics stores', 'Supermarkets'],
      es: ['Tiendas de alimentos', 'Boutiques de moda', 'Farmacias', 'Tiendas de electrónica', 'Supermercados']
    },
    pricing: {
      setup: '800€',
      monthly: '129€/lună',
      implementation: '2-4 săptămâni',
      roi: '3-4 luni'
    }
  },

  // 6. Hotel & Pensiune
  {
    id: 'hotel-pensiune',
    slug: 'hotel-pensiune',
    icon: Hotel,
    color: 'from-amber-500 to-orange-600',
    badge: {
      ro: 'Automatizare Hotelieră AI România',
      en: 'AI Hotel Automation Romania',
      es: 'Automatización Hotelera AI Rumania'
    },
    title: {
      ro: 'Hotel, Pensiune Automatizat cu AI',
      en: 'AI Automated Hotel & Guesthouse',
      es: 'Hotel, Pensión Automatizado con IA'
    },
    subtitle: {
      ro: 'Automatizare completă pentru hoteluri și pensiuni',
      en: 'Complete automation for hotels and guesthouses',
      es: 'Automatización completa para hoteles y pensiones'
    },
    description: {
      ro: 'Automatizare completă pentru hoteluri, pensiuni, moteluri: rezervări online cu AI, chatboți WhatsApp/Telegram, asistenți vocali, check-in digital. Scapă de comisioanele Booking.com și oferă experiență premium.',
      en: 'Complete automation for hotels, guesthouses, motels: online bookings with AI, WhatsApp/Telegram chatbots, voice assistants, digital check-in. Escape Booking.com fees and offer premium experience.',
      es: 'Automatización completa para hoteles, pensiones, moteles: reservas online con IA, chatbots WhatsApp/Telegram, asistentes de voz, check-in digital. Escapa de las comisiones de Booking.com y ofrece experiencia premium.'
    },
    benefits: {
      ro: [
        { stat: '95%', label: 'Check-in Automat' },
        { stat: '60%', label: 'Reducere Costuri' },
        { stat: '24/7', label: 'AI Recepție' }
      ],
      en: [
        { stat: '95%', label: 'Auto Check-in' },
        { stat: '60%', label: 'Cost Reduction' },
        { stat: '24/7', label: 'AI Reception' }
      ],
      es: [
        { stat: '95%', label: 'Check-in Auto' },
        { stat: '60%', label: 'Reducción Costos' },
        { stat: '24/7', label: 'Recepción AI' }
      ]
    },
    problems: {
      ro: [
        { emoji: '💸', problem: 'Comisioane 15-20% către Booking.com', solution: 'Rezervări directe prin site propriu și AI', benefit: 'Economii de 800€+/lună pentru 30 camere' },
        { emoji: '⏰', problem: 'Cozi la recepție pentru check-in', solution: 'Check-in/check-out digital prin QR code', benefit: 'Experiență premium fără așteptare' },
        { emoji: '📞', problem: 'Telefoane noaptea pentru rezervări', solution: 'Chatbot AI răspunde 24/7 pe WhatsApp', benefit: 'Nu mai pierzi rezervări din cauza programului' },
        { emoji: '👥', problem: 'Costuri mari cu personal recepție', solution: 'AI recepționer pentru sarcini repetitive', benefit: 'Reducere costuri operaționale cu 60%' }
      ],
      en: [
        { emoji: '💸', problem: '15-20% commissions to Booking.com', solution: 'Direct bookings through your own site and AI', benefit: '€800+/month savings for 30 rooms' },
        { emoji: '⏰', problem: 'Queues at reception for check-in', solution: 'Digital check-in/check-out via QR code', benefit: 'Premium experience without waiting' },
        { emoji: '📞', problem: 'Phone calls at night for reservations', solution: 'AI chatbot answers 24/7 on WhatsApp', benefit: 'Never lose bookings due to schedule' },
        { emoji: '👥', problem: 'High costs for reception staff', solution: 'AI receptionist for repetitive tasks', benefit: '60% operational cost reduction' }
      ],
      es: [
        { emoji: '💸', problem: 'Comisiones 15-20% a Booking.com', solution: 'Reservas directas a través de tu sitio y AI', benefit: 'Ahorro de €800+/mes para 30 habitaciones' },
        { emoji: '⏰', problem: 'Colas en recepción para check-in', solution: 'Check-in/check-out digital por código QR', benefit: 'Experiencia premium sin esperas' },
        { emoji: '📞', problem: 'Llamadas nocturnas para reservas', solution: 'Chatbot AI responde 24/7 en WhatsApp', benefit: 'Nunca pierdas reservas por horario' },
        { emoji: '👥', problem: 'Altos costos de personal de recepción', solution: 'Recepcionista AI para tareas repetitivas', benefit: 'Reducción del 60% en costos operativos' }
      ]
    },
    features: {
      ro: [
        { icon: 'Calendar', title: 'Rezervări Online Inteligente', description: 'Sistem complet rezervări camere cu calendar real-time, selecție tipuri camere, prețuri dinamice și confirmare instantă.', highlight: 'Rezervări 24/7 fără operator' },
        { icon: 'MessageCircle', title: 'Chatboți AI WhatsApp & Telegram', description: 'Asistenți AI care răspund la întrebări, fac rezervări, recomandă camere și oferă informații despre hotel în timp real.', highlight: 'Support 24/7 automat pentru oaspeți' },
        { icon: 'Phone', title: 'Asistenți Vocali AI', description: 'Telefon automat care preia apeluri, oferă informații și transferă la recepție doar apelurile complexe.', highlight: 'Reducere apeluri cu 70%' },
        { icon: 'QrCode', title: 'Check-in Digital Premium', description: 'Oaspeții fac check-in de pe telefon, primesc acces cameră prin QR code. Zero cozi la recepție.', highlight: 'Experiență 5 stele automatizată' }
      ],
      en: [
        { icon: 'Calendar', title: 'Smart Online Bookings', description: 'Complete room booking system with real-time calendar, room type selection, dynamic pricing, and instant confirmation.', highlight: '24/7 bookings without operator' },
        { icon: 'MessageCircle', title: 'AI Chatbots WhatsApp & Telegram', description: 'AI assistants that answer questions, make bookings, recommend rooms, and provide hotel info in real-time.', highlight: 'Automated 24/7 guest support' },
        { icon: 'Phone', title: 'AI Voice Assistants', description: 'Automated phone that takes calls, provides info, and transfers only complex calls to reception.', highlight: '70% call reduction' },
        { icon: 'QrCode', title: 'Premium Digital Check-in', description: 'Guests check in from their phone, get room access via QR code. Zero queues at reception.', highlight: 'Automated 5-star experience' }
      ],
      es: [
        { icon: 'Calendar', title: 'Reservas Online Inteligentes', description: 'Sistema completo de reservas con calendario en tiempo real, selección de tipos de habitación, precios dinámicos y confirmación instantánea.', highlight: 'Reservas 24/7 sin operador' },
        { icon: 'MessageCircle', title: 'Chatbots AI WhatsApp & Telegram', description: 'Asistentes AI que responden preguntas, hacen reservas, recomiendan habitaciones y dan info del hotel en tiempo real.', highlight: 'Soporte automatizado 24/7' },
        { icon: 'Phone', title: 'Asistentes de Voz AI', description: 'Teléfono automático que recibe llamadas, da información y transfiere solo llamadas complejas a recepción.', highlight: 'Reducción del 70% en llamadas' },
        { icon: 'QrCode', title: 'Check-in Digital Premium', description: 'Los huéspedes hacen check-in desde su móvil, acceden a la habitación por código QR. Cero colas en recepción.', highlight: 'Experiencia 5 estrellas automatizada' }
      ]
    },
    useCases: {
      ro: ['Hoteluri boutique', 'Pensiuni', 'Moteluri', 'Aparthoteluri', 'Cabane montane'],
      en: ['Boutique hotels', 'Guesthouses', 'Motels', 'Aparthotels', 'Mountain cabins'],
      es: ['Hoteles boutique', 'Pensiones', 'Moteles', 'Aparthoteles', 'Cabañas de montaña']
    },
    pricing: {
      setup: '1200€',
      monthly: '199€/lună',
      implementation: '3-5 săptămâni',
      roi: '4-6 luni'
    }
  },

  // 7. Chatboți WhatsApp & Telegram
  {
    id: 'chatboti-whatsapp-telegram',
    slug: 'chatboti-whatsapp-telegram',
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-600',
    badge: {
      ro: 'Chatboți AI în Limba Română',
      en: 'AI Chatbots in Your Language',
      es: 'Chatbots AI en Español'
    },
    title: {
      ro: 'Chatboți AI WhatsApp & Telegram',
      en: 'AI Chatbots WhatsApp & Telegram',
      es: 'Chatbots AI WhatsApp & Telegram'
    },
    subtitle: {
      ro: 'Asistenți AI care răspund clienților 24/7',
      en: 'AI assistants that respond to customers 24/7',
      es: 'Asistentes AI que responden a clientes 24/7'
    },
    description: {
      ro: 'Chatboți AI personalizați pentru WhatsApp, Telegram și Messenger. Răspund în limba română, fac programări, procesează comenzi și rezolvă întrebări frecvente automat. Integrare cu CRM și sistemele tale existente.',
      en: 'Custom AI chatbots for WhatsApp, Telegram, and Messenger. Respond in your language, make appointments, process orders, and automatically answer FAQs. Integration with CRM and your existing systems.',
      es: 'Chatbots AI personalizados para WhatsApp, Telegram y Messenger. Responden en español, hacen citas, procesan pedidos y responden preguntas frecuentes automáticamente. Integración con CRM y tus sistemas existentes.'
    },
    benefits: {
      ro: [
        { stat: '80%', label: 'Întrebări Rezolvate Auto' },
        { stat: '24/7', label: 'Disponibilitate' },
        { stat: '< 5 sec', label: 'Timp Răspuns' }
      ],
      en: [
        { stat: '80%', label: 'Auto-Resolved Questions' },
        { stat: '24/7', label: 'Availability' },
        { stat: '< 5 sec', label: 'Response Time' }
      ],
      es: [
        { stat: '80%', label: 'Preguntas Resueltas Auto' },
        { stat: '24/7', label: 'Disponibilidad' },
        { stat: '< 5 seg', label: 'Tiempo de Respuesta' }
      ]
    },
    problems: {
      ro: [
        { emoji: '📞', problem: 'Clienți care sună pentru întrebări simple', solution: 'Chatbot răspunde instant pe WhatsApp', benefit: 'Reducere apeluri cu 70%' },
        { emoji: '⏰', problem: 'Nu poți răspunde noaptea/weekend', solution: 'Bot activ 24/7, 365 zile/an', benefit: 'Nu mai pierzi clienți după program' },
        { emoji: '🔄', problem: 'Răspunsuri repetitive consumă timp', solution: 'AI automatizează întrebările frecvente', benefit: 'Echipa se focusează pe vânzări' },
        { emoji: '📋', problem: 'Programări prin telefon sunt ineficiente', solution: 'Chatbot face programări automat', benefit: 'Programări fără intervenție umană' }
      ],
      en: [
        { emoji: '📞', problem: 'Customers calling for simple questions', solution: 'Chatbot responds instantly on WhatsApp', benefit: '70% call reduction' },
        { emoji: '⏰', problem: "Can't respond at night/weekends", solution: 'Bot active 24/7, 365 days/year', benefit: "Never lose customers after hours" },
        { emoji: '🔄', problem: 'Repetitive answers consume time', solution: 'AI automates frequently asked questions', benefit: 'Team focuses on sales' },
        { emoji: '📋', problem: 'Phone appointments are inefficient', solution: 'Chatbot makes appointments automatically', benefit: 'Appointments without human intervention' }
      ],
      es: [
        { emoji: '📞', problem: 'Clientes llamando por preguntas simples', solution: 'Chatbot responde instantáneamente en WhatsApp', benefit: 'Reducción del 70% en llamadas' },
        { emoji: '⏰', problem: 'No puedes responder de noche/fines de semana', solution: 'Bot activo 24/7, 365 días/año', benefit: 'Nunca pierdas clientes fuera de horario' },
        { emoji: '🔄', problem: 'Respuestas repetitivas consumen tiempo', solution: 'AI automatiza preguntas frecuentes', benefit: 'Equipo se enfoca en ventas' },
        { emoji: '📋', problem: 'Citas por teléfono son ineficientes', solution: 'Chatbot hace citas automáticamente', benefit: 'Citas sin intervención humana' }
      ]
    },
    features: {
      ro: [
        { icon: 'MessageCircle', title: 'Răspunsuri Inteligente în Română', description: 'AI care înțelege și răspunde natural în limba română, cu personalitate adaptată brandului tău.', highlight: 'Conversații naturale 100%' },
        { icon: 'Calendar', title: 'Programări Automate', description: 'Clienții își fac programări direct din chat, cu sincronizare calendar și reminder-uri automate.', highlight: 'Zero intervenție umană' },
        { icon: 'ShoppingCart', title: 'Procesare Comenzi', description: 'Primește comenzi, procesează plăți și trimite confirmări automat prin chatbot.', highlight: 'Vânzări 24/7 automatizate' },
        { icon: 'Database', title: 'Integrare CRM & Sisteme', description: 'Conectare cu sistemele tale existente pentru acces la date clienți și istoric comenzi.', highlight: 'Răspunsuri personalizate' }
      ],
      en: [
        { icon: 'MessageCircle', title: 'Intelligent Responses in Your Language', description: 'AI that understands and responds naturally in your language, with personality adapted to your brand.', highlight: '100% natural conversations' },
        { icon: 'Calendar', title: 'Automatic Appointments', description: 'Customers make appointments directly from chat, with calendar sync and automatic reminders.', highlight: 'Zero human intervention' },
        { icon: 'ShoppingCart', title: 'Order Processing', description: 'Receive orders, process payments, and send confirmations automatically through chatbot.', highlight: 'Automated 24/7 sales' },
        { icon: 'Database', title: 'CRM & Systems Integration', description: 'Connect with your existing systems for access to customer data and order history.', highlight: 'Personalized responses' }
      ],
      es: [
        { icon: 'MessageCircle', title: 'Respuestas Inteligentes en Español', description: 'AI que entiende y responde naturalmente en español, con personalidad adaptada a tu marca.', highlight: 'Conversaciones 100% naturales' },
        { icon: 'Calendar', title: 'Citas Automáticas', description: 'Los clientes hacen citas directamente desde el chat, con sincronización de calendario y recordatorios automáticos.', highlight: 'Cero intervención humana' },
        { icon: 'ShoppingCart', title: 'Procesamiento de Pedidos', description: 'Recibe pedidos, procesa pagos y envía confirmaciones automáticamente a través del chatbot.', highlight: 'Ventas automatizadas 24/7' },
        { icon: 'Database', title: 'Integración CRM y Sistemas', description: 'Conecta con tus sistemas existentes para acceso a datos de clientes e historial de pedidos.', highlight: 'Respuestas personalizadas' }
      ]
    },
    useCases: {
      ro: ['Restaurante', 'Saloane de beauty', 'Clinici medicale', 'Magazine online', 'Agenții imobiliare'],
      en: ['Restaurants', 'Beauty salons', 'Medical clinics', 'Online stores', 'Real estate agencies'],
      es: ['Restaurantes', 'Salones de belleza', 'Clínicas médicas', 'Tiendas online', 'Agencias inmobiliarias']
    },
    pricing: {
      setup: '600€',
      monthly: '99€/lună',
      implementation: '1-2 săptămâni',
      roi: '1-2 luni'
    }
  },

  // 8. Social Media AI
  {
    id: 'social-media-ai',
    slug: 'social-media-ai',
    icon: Share2,
    color: 'from-pink-500 to-purple-600',
    badge: {
      ro: '5 Platforme Automatizate',
      en: '5 Platforms Automated',
      es: '5 Plataformas Automatizadas'
    },
    title: {
      ro: 'Automatizare Social Media AI',
      en: 'AI Social Media Automation',
      es: 'Automatización de Redes Sociales AI'
    },
    subtitle: {
      ro: 'AI răspunde instant la toate comentariile',
      en: 'AI responds instantly to all comments',
      es: 'AI responde instantáneamente a todos los comentarios'
    },
    description: {
      ro: 'AI răspunde instant în română la toate comentariile pe YouTube, Instagram, Facebook, TikTok și LinkedIn. Programare inteligentă, moderare automată și analiză sentiment avansată.',
      en: 'AI responds instantly in your language to all comments on YouTube, Instagram, Facebook, TikTok, and LinkedIn. Smart scheduling, automatic moderation, and advanced sentiment analysis.',
      es: 'AI responde instantáneamente en español a todos los comentarios en YouTube, Instagram, Facebook, TikTok y LinkedIn. Programación inteligente, moderación automática y análisis de sentimiento avanzado.'
    },
    benefits: {
      ro: [
        { stat: '300%', label: 'Creștere Engagement' },
        { stat: '80%', label: 'Reducere Timp' },
        { stat: '24/7', label: 'Răspunsuri Active' }
      ],
      en: [
        { stat: '300%', label: 'Engagement Increase' },
        { stat: '80%', label: 'Time Reduction' },
        { stat: '24/7', label: 'Active Responses' }
      ],
      es: [
        { stat: '300%', label: 'Aumento de Engagement' },
        { stat: '80%', label: 'Reducción de Tiempo' },
        { stat: '24/7', label: 'Respuestas Activas' }
      ]
    },
    problems: {
      ro: [
        { emoji: '⏰', problem: 'Ore întregi pierdute răspunzând la comentarii', solution: 'AI răspunde instant în română la toate comentariile', benefit: 'Economisești 80% din timpul petrecut pe social media' },
        { emoji: '📅', problem: 'Posts programate basic fără optimizare', solution: 'Programare inteligentă la momentele cu cel mai mare reach', benefit: 'Creștere reach organic cu 150%' },
        { emoji: '📱', problem: 'Managementul a 5 platforme devine copleșitor', solution: 'Dashboard centralizat pentru toate cele 5 platforme', benefit: 'Control total dintr-un singur loc' },
        { emoji: '💬', problem: 'Răspunsuri tardive = pierderea engagement-ului', solution: 'Engagement automat 24/7 fără întrerupere', benefit: 'Creștere engagement cu 300%' }
      ],
      en: [
        { emoji: '⏰', problem: 'Hours lost responding to comments', solution: 'AI responds instantly in your language to all comments', benefit: 'Save 80% of time spent on social media' },
        { emoji: '📅', problem: 'Basic scheduled posts without optimization', solution: 'Smart scheduling at peak reach times', benefit: '150% organic reach increase' },
        { emoji: '📱', problem: 'Managing 5 platforms becomes overwhelming', solution: 'Centralized dashboard for all 5 platforms', benefit: 'Total control from one place' },
        { emoji: '💬', problem: 'Late responses = lost engagement', solution: 'Automatic 24/7 engagement without interruption', benefit: '300% engagement increase' }
      ],
      es: [
        { emoji: '⏰', problem: 'Horas perdidas respondiendo comentarios', solution: 'AI responde instantáneamente en español a todos los comentarios', benefit: 'Ahorra 80% del tiempo en redes sociales' },
        { emoji: '📅', problem: 'Posts programados básicos sin optimización', solution: 'Programación inteligente en momentos de máximo alcance', benefit: 'Aumento del 150% en alcance orgánico' },
        { emoji: '📱', problem: 'Gestionar 5 plataformas se vuelve abrumador', solution: 'Dashboard centralizado para las 5 plataformas', benefit: 'Control total desde un solo lugar' },
        { emoji: '💬', problem: 'Respuestas tardías = pérdida de engagement', solution: 'Engagement automático 24/7 sin interrupción', benefit: 'Aumento del 300% en engagement' }
      ]
    },
    features: {
      ro: [
        { icon: 'MessageCircle', title: 'AI Comment Management', description: 'Răspunsuri automate inteligente în română la toate comentariile pe toate platformele cu escalare la om când e necesar.', highlight: 'Engagement maxim pe toate platformele' },
        { icon: 'Calendar', title: 'Scheduling Inteligent', description: 'Programare posts la momentele optime pentru fiecare platformă cu calendar editorial centralizat.', highlight: 'Reach maxim garantat' },
        { icon: 'BarChart', title: 'Analytics & Monitoring', description: 'Dashboard unificat cu metrici de pe toate platformele, alertă la comentarii negative, rapoarte automate.', highlight: 'Vizibilitate completă' },
        { icon: 'Shield', title: 'Moderare Automată', description: 'Detectare și filtrare automată spam, comentarii toxice și protecție reputație brand.', highlight: 'Brand protejat 24/7' }
      ],
      en: [
        { icon: 'MessageCircle', title: 'AI Comment Management', description: 'Smart automatic responses in your language to all comments on all platforms with human escalation when needed.', highlight: 'Maximum engagement on all platforms' },
        { icon: 'Calendar', title: 'Smart Scheduling', description: 'Post scheduling at optimal times for each platform with centralized editorial calendar.', highlight: 'Guaranteed maximum reach' },
        { icon: 'BarChart', title: 'Analytics & Monitoring', description: 'Unified dashboard with metrics from all platforms, negative comment alerts, automatic reports.', highlight: 'Complete visibility' },
        { icon: 'Shield', title: 'Automatic Moderation', description: 'Automatic spam detection and filtering, toxic comments, and brand reputation protection.', highlight: '24/7 brand protection' }
      ],
      es: [
        { icon: 'MessageCircle', title: 'Gestión de Comentarios AI', description: 'Respuestas automáticas inteligentes en español a todos los comentarios en todas las plataformas con escalación humana cuando es necesario.', highlight: 'Engagement máximo en todas las plataformas' },
        { icon: 'Calendar', title: 'Programación Inteligente', description: 'Programación de posts en momentos óptimos para cada plataforma con calendario editorial centralizado.', highlight: 'Alcance máximo garantizado' },
        { icon: 'BarChart', title: 'Analytics y Monitoreo', description: 'Dashboard unificado con métricas de todas las plataformas, alertas de comentarios negativos, informes automáticos.', highlight: 'Visibilidad completa' },
        { icon: 'Shield', title: 'Moderación Automática', description: 'Detección y filtrado automático de spam, comentarios tóxicos y protección de reputación de marca.', highlight: 'Protección de marca 24/7' }
      ]
    },
    useCases: {
      ro: ['Influenceri', 'Agenții marketing', 'Branduri retail', 'Restaurante', 'Companii tech'],
      en: ['Influencers', 'Marketing agencies', 'Retail brands', 'Restaurants', 'Tech companies'],
      es: ['Influencers', 'Agencias de marketing', 'Marcas retail', 'Restaurantes', 'Empresas tech']
    },
    pricing: {
      setup: '500€',
      monthly: '149€/lună',
      implementation: '1-2 săptămâni',
      roi: '2-3 luni'
    }
  },

  // 9. Agenții Imobiliare
  {
    id: 'agentii-imobiliare',
    slug: 'agentii-imobiliare',
    icon: Home,
    color: 'from-indigo-500 to-blue-600',
    badge: {
      ro: 'Sistem Imobiliar Complet',
      en: 'Complete Real Estate System',
      es: 'Sistema Inmobiliario Completo'
    },
    title: {
      ro: 'Automatizează Agenția Imobiliară',
      en: 'Automate Your Real Estate Agency',
      es: 'Automatiza tu Agencia Inmobiliaria'
    },
    subtitle: {
      ro: 'CRM + Portal + Automatizări complete',
      en: 'CRM + Portal + Complete Automations',
      es: 'CRM + Portal + Automatizaciones completas'
    },
    description: {
      ro: 'CRM + Portal + Automatizări complete. Lead capture automat multi-platformă, programări vizionări, marketing digital automatizat. Transformă agenția ta într-un lider tehnologic.',
      en: 'CRM + Portal + Complete Automations. Automatic multi-platform lead capture, viewing appointments, automated digital marketing. Transform your agency into a tech leader.',
      es: 'CRM + Portal + Automatizaciones completas. Captura automática de leads multi-plataforma, citas de visualización, marketing digital automatizado. Transforma tu agencia en líder tecnológico.'
    },
    benefits: {
      ro: [
        { stat: '+200%', label: 'Lead-uri/lună' },
        { stat: '+60%', label: 'Rata Conversie' },
        { stat: '5+ ore', label: 'Economite/zi' }
      ],
      en: [
        { stat: '+200%', label: 'Leads/month' },
        { stat: '+60%', label: 'Conversion Rate' },
        { stat: '5+ hrs', label: 'Saved/day' }
      ],
      es: [
        { stat: '+200%', label: 'Leads/mes' },
        { stat: '+60%', label: 'Tasa de Conversión' },
        { stat: '5+ hrs', label: 'Ahorradas/día' }
      ]
    },
    problems: {
      ro: [
        { emoji: '📋', problem: 'Lead-uri pierdute sau uitare de follow-up', solution: 'Lead management automat cu nurturing personalizat', benefit: 'Conversie lead-uri crescută cu 60-80%' },
        { emoji: '⏰', problem: 'Programări vizionări manual și no-show-uri', solution: 'Calendar automat cu confirmări SMS/email', benefit: 'Reducere no-show cu 70%' },
        { emoji: '📊', problem: 'Lipsa vizibilității pe performanța agenților', solution: 'CRM cu tracking pipeline și rapoarte automate', benefit: 'Productivitate agenți crescută cu 50%' },
        { emoji: '🌐', problem: 'Prezență online fragmentată', solution: 'Portal proprietăți cu sync automat pe toate platformele', benefit: '300% mai multă expunere online' }
      ],
      en: [
        { emoji: '📋', problem: 'Lost leads or forgotten follow-ups', solution: 'Automatic lead management with personalized nurturing', benefit: '60-80% increase in lead conversion' },
        { emoji: '⏰', problem: 'Manual viewing appointments and no-shows', solution: 'Automatic calendar with SMS/email confirmations', benefit: '70% no-show reduction' },
        { emoji: '📊', problem: 'Lack of visibility on agent performance', solution: 'CRM with pipeline tracking and automatic reports', benefit: '50% increase in agent productivity' },
        { emoji: '🌐', problem: 'Fragmented online presence', solution: 'Property portal with auto-sync on all platforms', benefit: '300% more online exposure' }
      ],
      es: [
        { emoji: '📋', problem: 'Leads perdidos u olvido de seguimiento', solution: 'Gestión automática de leads con nurturing personalizado', benefit: 'Aumento del 60-80% en conversión de leads' },
        { emoji: '⏰', problem: 'Citas de visualización manuales y no-shows', solution: 'Calendario automático con confirmaciones SMS/email', benefit: 'Reducción del 70% en no-shows' },
        { emoji: '📊', problem: 'Falta de visibilidad en rendimiento de agentes', solution: 'CRM con tracking de pipeline e informes automáticos', benefit: 'Aumento del 50% en productividad de agentes' },
        { emoji: '🌐', problem: 'Presencia online fragmentada', solution: 'Portal de propiedades con sincronización automática', benefit: '300% más exposición online' }
      ]
    },
    features: {
      ro: [
        { icon: 'Users', title: 'Lead Management Automat', description: 'Capturare automată lead-uri din site, Facebook, OLX, Storia. Distribuire inteligentă către agenți, follow-up automat.', highlight: 'Conversie lead-uri +60-80%' },
        { icon: 'Calendar', title: 'Sistem Programări Integrate', description: 'Calendar sincronizat cu vizualizări proprietăți, confirmări automate SMS/email, reminder-uri cu linkuri Google Maps.', highlight: 'Reducere no-show cu 70%' },
        { icon: 'Database', title: 'CRM Imobiliar Complet', description: 'Pipeline vânzări, tracking agenți, istoric clienți, documente și rapoarte automate.', highlight: 'Productivitate +50%' },
        { icon: 'Globe', title: 'Portal Proprietăți Modern', description: 'Website modern cu căutare avansată, sync automat pe toate platformele, virtual tours și hărți interactive.', highlight: '+300% expunere online' }
      ],
      en: [
        { icon: 'Users', title: 'Automatic Lead Management', description: 'Automatic lead capture from website, Facebook, OLX, Storia. Smart distribution to agents, automatic follow-up.', highlight: '+60-80% lead conversion' },
        { icon: 'Calendar', title: 'Integrated Appointment System', description: 'Calendar synced with property viewings, automatic SMS/email confirmations, reminders with Google Maps links.', highlight: '70% no-show reduction' },
        { icon: 'Database', title: 'Complete Real Estate CRM', description: 'Sales pipeline, agent tracking, client history, documents, and automatic reports.', highlight: '+50% productivity' },
        { icon: 'Globe', title: 'Modern Property Portal', description: 'Modern website with advanced search, auto-sync on all platforms, virtual tours, and interactive maps.', highlight: '+300% online exposure' }
      ],
      es: [
        { icon: 'Users', title: 'Gestión Automática de Leads', description: 'Captura automática de leads desde web, Facebook, OLX, portales. Distribución inteligente a agentes, seguimiento automático.', highlight: '+60-80% conversión de leads' },
        { icon: 'Calendar', title: 'Sistema de Citas Integrado', description: 'Calendario sincronizado con visualizaciones de propiedades, confirmaciones automáticas SMS/email, recordatorios con links de Google Maps.', highlight: 'Reducción del 70% en no-shows' },
        { icon: 'Database', title: 'CRM Inmobiliario Completo', description: 'Pipeline de ventas, tracking de agentes, historial de clientes, documentos e informes automáticos.', highlight: '+50% productividad' },
        { icon: 'Globe', title: 'Portal de Propiedades Moderno', description: 'Website moderno con búsqueda avanzada, sincronización automática en todas las plataformas, tours virtuales y mapas interactivos.', highlight: '+300% exposición online' }
      ]
    },
    useCases: {
      ro: ['Agenții imobiliare', 'Dezvoltatori imobiliari', 'Brokeri independenți', 'Francize imobiliare', 'Property managers'],
      en: ['Real estate agencies', 'Real estate developers', 'Independent brokers', 'Real estate franchises', 'Property managers'],
      es: ['Agencias inmobiliarias', 'Desarrolladores inmobiliarios', 'Brokers independientes', 'Franquicias inmobiliarias', 'Property managers']
    },
    pricing: {
      setup: '1000€',
      monthly: '179€/lună',
      implementation: '3-5 săptămâni',
      roi: '3-4 luni'
    }
  }
];

export const getAutomationBySlug = (slug: string): AutomationService | undefined => {
  return automationServices.find(service => service.slug === slug);
};

export const getAllAutomationSlugs = (): string[] => {
  return automationServices.map(service => service.slug);
};
