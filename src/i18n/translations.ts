export type Language = 'en' | 'es' | 'ro';

export const translations = {
  en: {
    siteName: 'MrDelivery.com',
    tagline: '🚀 Marketing Management • AI Chatbots & Voice Agents • Viral Video Content',
    subtitle: 'Dominate Uber Eats, DoorDash & Grubhub with our all-in-one restaurant marketing solutions',
    badges: {
      ai: '✨ AI-Powered',
      apps: '📱 Apps & Web',
      marketing: '📈 Marketing'
    },
    tabs: {
      current: 'Current Services',
      ai: 'AI Services'
    },
    services: {
      standard: {
        title: 'Standard Package',
        price: '€399/month',
        subtitle: 'All services on Uber Eats, DoorDash & Grubhub',
        support: '24/7 Support via WhatsApp',
        items: [
          'Detailed menu presentation with professional images and complete allergen information',
          'Daily menu updates for maximum variety and recurring customer attraction',
          'Campaign performance tracking and marketing strategies to increase average order value',
          'Implementation of upselling and cross-selling strategies through personalized suggestions',
          'Periodic analysis and development strategies for dynamic market adaptation',
          'Campaign management for maximum visibility on Uber Eats, DoorDash and Grubhub',
          'Campaign implementation within 6 hours of decision',
          'Delivery radius adaptation for maximum efficiency (own delivery)',
          'Constant support via WhatsApp and phone for real-time resolution'
        ]
      },
      aiAgents: {
        title: 'AI Agents - Intelligent Virtual Assistant',
        price: '€499/month',
        subtitle: 'Never miss a call or message – 24/7 automated customer service',
        badge: '24/7 Conversational AI Agent',
        phone: {
          title: '📞 Phone Answering',
          items: [
            'Voice agent that automatically answers phone calls',
            'Natural voice and fluent conversation in English',
            'Complete knowledge of menu, prices and availability',
            'Answers questions about allergens, ingredients and preparation'
          ]
        },
        whatsapp: {
          title: '💬 WhatsApp Chatbot',
          items: [
            'Instant responses on WhatsApp Business',
            'Menu presentation with images and detailed descriptions',
            'Personalized recommendations based on preferences',
            'Information about promotions and special offers'
          ]
        },
        reservations: {
          title: '📅 Automated Reservations',
          items: [
            'Takes reservations automatically via phone or WhatsApp',
            'Checks availability in real-time',
            'Enters reservations directly into Google Calendar',
            'Sends automatic confirmations and reminders to customers',
            'Manages reservation changes and cancellations'
          ]
        },
        benefits: '24/7 availability, zero missed calls, reduced workload for staff, uniform customer experience, and increased conversion rate'
      },
      video: {
        title: 'Premium Video Service with VEO3',
        price: '€449/month',
        originalPrice: '€599/month',
        discount: '25% OFF',
        discountNote: 'Includes the Standard Package (€399)',
        subtitle: 'Viral content for TikTok, Instagram Reels & YouTube Shorts',
        badge: 'Viral Video Content',
        videosTitle: '🎬 16 Videos/Month',
        videoDesc: 'Each 24-second video:',
        hook: 'Hook (8s)',
        hookDesc: 'captures attention instantly',
        action: 'Action (8s)',
        actionDesc: 'presents the concept',
        cta: 'CTA (8s)',
        ctaDesc: 'powerful call-to-action',
        veo3: 'VEO3 Technology',
        veo3Desc: 'Cinematic AI production for maximum quality',
        format: 'Optimized Format',
        formatDesc: 'Perfect for TikTok, Instagram Reels and YouTube Shorts',
        items: [
          '16 creative concepts per month with complete script',
          'Professional presenter representing MrDelivery',
          'Interactive challenges for audience participation',
          'Natural brand integration and call-to-action',
          'Diverse formats: challenges, interviews, battles',
          'Professional cinematic production',
          'Optimization for social media algorithms',
          'Delivery in 16:9 and 9:16 format for all platforms'
        ],
        examples: 'Ultimate Burger Challenge, Street Food Confessions, Guess the Secret Ingredient, Boyfriend vs Girlfriend Battle and many more'
      },
      premium: {
        title: 'Premium Package: Efficiency and Innovation',
        price: '€454/month',
        originalPrice: '€699/month',
        discount: '35% OFF',
        discountNote: '35% off if you purchase Packages 1, 2 and 3 together',
        subtitle: 'Complete digital transformation – Apps, Automation & Social Media',
        badge: 'All-Inclusive Package',
        automation: {
          title: '🎯 Automation and Customer Database',
          items: [
            'Collection and organization of database for personalized marketing',
            'Scheduled notifications via WhatsApp/SMS',
            'LAAS integration - delivery through partners without hiring couriers'
          ]
        },
        app: {
          title: '📱 App Development (via TapTasty)',
          items: [
            'Complete design, development, testing and launch of mobile apps and websites',
            'Complete management from concept to launch',
            'Continuous updates and maintenance'
          ]
        },
        social: {
          title: '🎨 Social Media Management',
          items: [
            'Personalized content on Facebook, Instagram, TikTok',
            'Strategies to increase engagement',
            'Continuous monitoring and optimization'
          ]
        }
      }
    },
    aiServices: {
      header: 'AI Services for Restaurants',
      subtitle: '🚀 Innovative solutions based on Artificial Intelligence',
      pricing: 'Dynamic Price Optimization',
      pricingItems: [
        'Real-time analysis: demand, competition, weather, events',
        'Automatic optimal pricing suggestions',
        'Identification of ideal moments for discounts',
        'Dynamic adjustments based on patterns'
      ],
      recommendations: 'Personalized Recommendations',
      recommendationsItems: [
        'Order history analysis for personalized recommendations',
        'Intelligent upselling and cross-selling suggestions',
        'Machine learning for continuous improvement',
        'Increase in average cart value'
      ],
      chatbot: 'Intelligent Chatbot',
      chatbotItems: [
        'AI chatbot on website, app and social media',
        'Automatic order taking 24/7',
        'Instant answers to frequently asked questions',
        'Reduced workload for staff'
      ],
      stock: 'Predictive Stock Analysis',
      stockItems: [
        'Accurate prediction of future demand',
        'Weather analysis to anticipate orders',
        'Stock optimization and waste reduction',
        'Product availability assurance'
      ],
      routes: 'Delivery Route Optimization',
      routesItems: [
        'Real-time route optimization with traffic',
        'Intelligent courier allocation',
        'Minimization of delivery time and costs',
        'Accurate delivery time prediction'
      ],
      sentiment: 'Sentiment Analysis',
      sentimentItems: [
        'Automatic monitoring of reviews from all platforms',
        'Rapid identification of issues and trends',
        'Personalized automatic responses',
        'Online reputation improvement'
      ],
      content: 'AI Content Generation',
      contentItems: [
        'Automatic texts for social media',
        'SEO-optimized product descriptions',
        'Personalized promotional emails',
        'Creative ideas for campaigns'
      ],
      competitive: 'Competitive Analysis',
      competitiveItems: [
        'Automatic monitoring of competitor activity',
        'Review analysis for opportunities',
        'Detailed and actionable reports',
        'Real-time alerts on changes'
      ],
      modular: 'Modular Implementation',
      modularDesc: 'AI services can be integrated modularly, allowing restaurants to choose solutions suitable for their needs and budget.'
    },
    footer: {
      title: 'Ready to transform your restaurant?',
      subtitle: 'Contact us for a free consultation',
      whatsapp: 'WhatsApp',
      call: 'Call Now'
    }
  },
  es: {
    siteName: 'MrDelivery.es',
    tagline: '🚀 Gestión de Marketing • Chatbots IA & Agentes de Voz • Contenido de Vídeo Viral',
    subtitle: 'Domina Glovo, Uber Eats y Just Eat con nuestras soluciones integrales de marketing para restaurantes',
    badges: {
      ai: '✨ Con IA',
      apps: '📱 Apps & Web',
      marketing: '📈 Marketing'
    },
    tabs: {
      current: 'Servicios Actuales',
      ai: 'Servicios IA'
    },
    services: {
      standard: {
        title: 'Paquete Estándar',
        price: '399 €/mes',
        subtitle: 'Todos los servicios en Glovo, Uber Eats & Just Eat',
        support: 'Soporte 24/7 por WhatsApp',
        items: [
          'Presentación detallada del menú con imágenes profesionales e información completa sobre alérgenos',
          'Modificación diaria del menú del día para máxima diversidad y atracción de clientes recurrentes',
          'Seguimiento de resultados de campañas y aplicación de estrategias de marketing para aumentar el ticket medio',
          'Implementación de estrategias de upselling y cross-selling mediante sugerencias personalizadas',
          'Análisis periódicos y estrategias de desarrollo para adaptación dinámica al mercado',
          'Gestión de campañas para máxima visibilidad en Glovo, Uber Eats y Just Eat',
          'Implementación de campañas en máximo 6 horas desde la decisión',
          'Adaptación de radios de entrega para máxima eficiencia (entrega propia)',
          'Soporte constante por WhatsApp y teléfono para resolución en tiempo real'
        ]
      },
      aiAgents: {
        title: 'Agentes IA - Asistente Virtual Inteligente',
        price: '499 €/mes',
        subtitle: 'Nunca pierdas una llamada o mensaje – Atención al cliente 24/7 automatizada',
        badge: 'Agente IA Conversacional 24/7',
        phone: {
          title: '📞 Contestador Automático',
          items: [
            'Agente vocal que responde automáticamente a llamadas telefónicas',
            'Voz natural y conversación fluida en español',
            'Conocimiento completo del menú, precios y disponibilidad',
            'Respuestas a preguntas sobre alérgenos, ingredientes y preparación'
          ]
        },
        whatsapp: {
          title: '💬 Chatbot WhatsApp',
          items: [
            'Respuestas instantáneas en WhatsApp Business',
            'Presentación del menú con imágenes y descripciones detalladas',
            'Recomendaciones personalizadas basadas en preferencias',
            'Información sobre promociones y ofertas especiales'
          ]
        },
        reservations: {
          title: '📅 Reservas Automáticas',
          items: [
            'Gestiona reservas automáticamente por teléfono o WhatsApp',
            'Verifica disponibilidad en tiempo real',
            'Introduce reservas directamente en Google Calendar',
            'Envía confirmaciones y recordatorios automáticos a clientes',
            'Gestiona modificaciones y cancelaciones de reservas'
          ]
        },
        benefits: 'Disponibilidad 24/7, cero llamadas perdidas, reducción de carga de trabajo para el personal, experiencia uniforme para clientes y aumento de la tasa de conversión'
      },
      video: {
        title: 'Servicio de Vídeo Premium con VEO3',
        price: '449 €/mes',
        originalPrice: '599 €/mes',
        discount: '25% DESCUENTO',
        discountNote: 'Incluye el Paquete Estándar (399 €)',
        subtitle: 'Contenido viral para TikTok, Instagram Reels y YouTube Shorts',
        badge: 'Contenido de Vídeo Viral',
        videosTitle: '🎬 16 Vídeos/Mes',
        videoDesc: 'Cada vídeo de 24 segundos:',
        hook: 'Hook (8s)',
        hookDesc: 'capta la atención al instante',
        action: 'Acción (8s)',
        actionDesc: 'presenta el concepto',
        cta: 'CTA (8s)',
        ctaDesc: 'llamada a la acción potente',
        veo3: 'Tecnología VEO3',
        veo3Desc: 'Producción cinematográfica con IA para máxima calidad',
        format: 'Formato Optimizado',
        formatDesc: 'Perfecto para TikTok, Instagram Reels y YouTube Shorts',
        items: [
          '16 conceptos creativos al mes con guion completo',
          'Presentador profesional representando a MrDelivery',
          'Retos interactivos para participación del público',
          'Integración natural de la marca y llamada a la acción',
          'Formatos diversos: challenges, entrevistas, batallas',
          'Producción cinematográfica profesional',
          'Optimización para algoritmos de redes sociales',
          'Entrega en formato 16:9 y 9:16 para todas las plataformas'
        ],
        examples: 'Ultimate Burger Challenge, Street Food Confessions, Adivina el Ingrediente Secreto, Batalla Novio vs Novia y muchos más'
      },
      premium: {
        title: 'Paquete Premium: Eficiencia e Innovación',
        price: '454 €/mes',
        originalPrice: '699 €/mes',
        discount: '35% DESCUENTO',
        discountNote: '35% de descuento al adquirir los Paquetes 1, 2 y 3 juntos',
        subtitle: 'Transformación digital completa – Apps, Automatización y Redes Sociales',
        badge: 'Paquete Todo Incluido',
        automation: {
          title: '🎯 Automatización y Base de Datos de Clientes',
          items: [
            'Recopilación y organización de base de datos para marketing personalizado',
            'Notificaciones programadas por WhatsApp/SMS',
            'Integración LAAS - entrega a través de partners sin contratar repartidores'
          ]
        },
        app: {
          title: '📱 Desarrollo de Aplicaciones (a través de TapTasty)',
          items: [
            'Diseño, desarrollo, pruebas y lanzamiento completo de apps móviles y website',
            'Gestión completa desde el concepto hasta el lanzamiento',
            'Actualizaciones y mantenimiento continuo'
          ]
        },
        social: {
          title: '🎨 Gestión de Redes Sociales',
          items: [
            'Contenido personalizado en Facebook, Instagram, TikTok',
            'Estrategias para aumentar el engagement',
            'Monitorización y optimización continua'
          ]
        }
      }
    },
    aiServices: {
      header: 'Servicios de IA para Restaurantes',
      subtitle: '🚀 Soluciones innovadoras basadas en Inteligencia Artificial',
      pricing: 'Optimización Dinámica de Precios',
      pricingItems: [
        'Análisis en tiempo real: demanda, competencia, meteorología, eventos',
        'Sugerencias automáticas de precios óptimos',
        'Identificación de momentos ideales para descuentos',
        'Ajustes dinámicos basados en patrones'
      ],
      recommendations: 'Recomendaciones Personalizadas',
      recommendationsItems: [
        'Análisis de historial de pedidos para recomendaciones personalizadas',
        'Sugerencias inteligentes de upselling y cross-selling',
        'Machine learning para mejora continua',
        'Aumento del valor medio del carrito'
      ],
      chatbot: 'Chatbot Inteligente',
      chatbotItems: [
        'Chatbot IA en website, app y redes sociales',
        'Recogida de pedidos automática 24/7',
        'Respuestas instantáneas a preguntas frecuentes',
        'Reducción de carga de trabajo para el personal'
      ],
      stock: 'Análisis Predictivo de Stock',
      stockItems: [
        'Predicción precisa de demanda futura',
        'Análisis meteorológico para anticipar pedidos',
        'Optimización de stock y reducción de desperdicio',
        'Garantía de disponibilidad de productos'
      ],
      routes: 'Optimización de Rutas de Entrega',
      routesItems: [
        'Optimización de rutas en tiempo real con tráfico',
        'Asignación inteligente de repartidores',
        'Minimización de tiempo de entrega y costes',
        'Predicción precisa de tiempos de entrega'
      ],
      sentiment: 'Análisis de Sentimiento',
      sentimentItems: [
        'Monitorización automática de reseñas de todas las plataformas',
        'Identificación rápida de problemas y tendencias',
        'Respuestas automáticas personalizadas',
        'Mejora de la reputación online'
      ],
      content: 'Generación de Contenido con IA',
      contentItems: [
        'Textos automáticos para redes sociales',
        'Descripciones de productos optimizadas para SEO',
        'Emails promocionales personalizados',
        'Ideas creativas para campañas'
      ],
      competitive: 'Análisis Competitivo',
      competitiveItems: [
        'Monitorización automática de actividad de la competencia',
        'Análisis de reseñas para oportunidades',
        'Informes detallados y accionables',
        'Alertas en tiempo real ante cambios'
      ],
      modular: 'Implementación Modular',
      modularDesc: 'Los servicios de IA se pueden integrar de forma modular, permitiendo a los restaurantes elegir las soluciones adecuadas a sus necesidades y presupuesto.'
    },
    footer: {
      title: '¿Listo para transformar tu restaurante?',
      subtitle: 'Contáctanos para una consulta gratuita',
      whatsapp: 'WhatsApp',
      call: 'Llámanos'
    }
  },
  ro: {
    siteName: 'MrDelivery.ro',
    tagline: '🚀 Management Marketing • Chatboți AI & Agenți Vocali • Conținut Video Viral',
    subtitle: 'Domină Wolt, Glovo și Bolt Food cu soluțiile noastre complete de marketing pentru restaurante',
    badges: {
      ai: '✨ AI-Powered',
      apps: '📱 Apps & Web',
      marketing: '📈 Marketing'
    },
    tabs: {
      current: 'Servicii Existente',
      ai: 'Servicii AI'
    },
    services: {
      standard: {
        title: 'Pachet Standard',
        price: '1.500 RON/lună',
        subtitle: 'Toate serviciile pe Wolt, Glovo & Bolt Food',
        support: 'Suport 24/7 pe WhatsApp',
        items: [
          'Prezentarea detaliată a meniului cu imagini profesionale și informații complete despre alergeni',
          'Modificarea zilnică a meniului zilei pentru diversitate maximă și atragerea clienților recurenți',
          'Urmărirea rezultatelor campaniilor și aplicarea strategiilor de marketing pentru creșterea comenzii medii',
          'Implementarea strategiilor de upsell și cross-sell prin sugestii personalizate',
          'Analize periodice și strategii de dezvoltare pentru adaptare dinamică la piață',
          'Gestionarea campaniilor pentru vizibilitate maximă pe Wolt, Glovo și Bolt Food',
          'Implementarea campaniilor în maxim 6 ore de la decizie',
          'Adaptarea razelor de livrare pentru eficiență maximă (livrare proprie)',
          'Suport constant prin WhatsApp și telefon pentru rezolvarea în timp real'
        ]
      },
      aiAgents: {
        title: 'AI Agents - Asistent Virtual Inteligent',
        price: '2.000 RON/lună',
        subtitle: 'Nu mai pierzi nici un apel sau mesaj – Suport clienți automatizat 24/7',
        badge: 'Agent AI Conversațional 24/7',
        phone: {
          title: '📞 Răspunde la Telefon',
          items: [
            'Agent vocal care răspunde automat la apeluri telefonice',
            'Voce naturală și conversație fluidă în limba română',
            'Cunoaștere completă a meniului, prețurilor și disponibilității',
            'Răspunsuri la întrebări despre alergeni, ingrediente și preparare'
          ]
        },
        whatsapp: {
          title: '💬 Chatbot WhatsApp',
          items: [
            'Răspunsuri instant pe WhatsApp Business',
            'Prezentare meniu cu imagini și descrieri detaliate',
            'Recomandări personalizate bazate pe preferințe',
            'Informații despre promoții și oferte speciale'
          ]
        },
        reservations: {
          title: '📅 Rezervări Automate',
          items: [
            'Preia rezervări automat prin telefon sau WhatsApp',
            'Verifică disponibilitatea în timp real',
            'Introduce rezervările direct în Google Calendar',
            'Trimite confirmări și reminder-uri automate clienților',
            'Gestionează modificări și anulări de rezervări'
          ]
        },
        benefits: 'Disponibilitate 24/7, zero apeluri pierdite, reducerea volumului de muncă pentru personal, experiență uniformă pentru clienți, și creșterea ratei de conversie'
      },
      video: {
        title: 'Serviciu Video Premium cu VEO3',
        price: '1.875 RON/lună',
        originalPrice: '2.500 RON/lună',
        discount: '25% REDUCERE',
        discountNote: 'Include Pachetul Standard (1.500 RON)',
        subtitle: 'Conținut viral pentru TikTok, Instagram Reels și YouTube Shorts',
        badge: 'Conținut Video Viral',
        videosTitle: '🎬 16 Videoclipuri/Lună',
        videoDesc: 'Fiecare video de 24 secunde:',
        hook: 'Hook (8s)',
        hookDesc: 'captează atenția instant',
        action: 'Action (8s)',
        actionDesc: 'prezintă conceptul',
        cta: 'CTA (8s)',
        ctaDesc: 'call-to-action puternic',
        veo3: 'Tehnologie VEO3',
        veo3Desc: 'Producție cinematografică cu AI pentru calitate maximă',
        format: 'Format Optimizat',
        formatDesc: 'Perfect pentru TikTok, Instagram Reels și YouTube Shorts',
        items: [
          '16 concepte creative pe lună cu scenariu complet',
          'Prezentator profesionist reprezentând MrDelivery',
          'Provocări interactive pentru participarea publicului',
          'Integrare naturală a brandului și call-to-action',
          'Formate diverse: challenges, interviuri, batalii',
          'Producție cinematografică profesională',
          'Optimizare pentru algoritmi social media',
          'Livrare în format 16:9 și 9:16 pentru toate platformele'
        ],
        examples: 'Ultimate Burger Challenge, Street Food Confessions, Ghicește Ingredientul Secret, Batalla Iubit vs Iubită și multe altele'
      },
      premium: {
        title: 'Pachet Premium: Eficiență și Inovație',
        price: '1.625 RON/lună',
        originalPrice: '2.500 RON/lună',
        discount: '35% REDUCERE',
        discountNote: '35% reducere la achiziționarea Pachetelor 1, 2 și 3 împreună',
        subtitle: 'Transformare digitală completă – Aplicații Android/iOS, Automatizare și Social Media',
        badge: 'Pachet All-Inclusive',
        automation: {
          title: '🎯 Automatizare și Bază de Date Clienți',
          items: [
            'Colectarea și organizarea bazei de date pentru marketing personalizat',
            'Notificări programate prin WhatsApp/SMS',
            'Integrare LAAS - livrare prin parteneri fără angajarea curierilor'
          ]
        },
        app: {
          title: '📱 Dezvoltare Aplicații (prin TapTasty)',
          items: [
            'Design, dezvoltare, testare și lansare completă de aplicații mobile și website',
            'Management complet de la concept la lansare',
            'Actualizări și mentenanță continuă'
          ]
        },
        social: {
          title: '🎨 Management Social Media',
          items: [
            'Conținut personalizat pe Facebook, Instagram, TikTok',
            'Strategii pentru creșterea engagement-ului',
            'Monitorizare și optimizare continuă'
          ]
        }
      }
    },
    aiServices: {
      header: 'Servicii AI pentru Restaurante',
      subtitle: '🚀 Soluții inovatoare bazate pe Inteligență Artificială',
      pricing: 'Optimizare Dinamică Prețuri',
      pricingItems: [
        'Analiză în timp real: cerere, competiție, vreme, evenimente',
        'Sugestii automate de prețuri optime',
        'Identificarea momentelor ideale pentru reduceri',
        'Ajustări dinamice bazate pe pattern-uri'
      ],
      recommendations: 'Recomandări Personalizate',
      recommendationsItems: [
        'Analiză istoric comenzi pentru recomandări personalizate',
        'Sugestii inteligente de upselling și cross-selling',
        'Machine learning pentru îmbunătățire continuă',
        'Creșterea valorii medii coș'
      ],
      chatbot: 'Chatbot Inteligent',
      chatbotItems: [
        'Chatbot AI pe website, aplicație și social media',
        'Preluare comenzi automată 24/7',
        'Răspunsuri instant la întrebări frecvente',
        'Reducerea volumului de muncă pentru personal'
      ],
      stock: 'Analiză Predictivă Stock',
      stockItems: [
        'Predicție precisă a cererii viitoare',
        'Analiză meteo pentru anticiparea comenzilor',
        'Optimizare stoc și reducere risipă',
        'Asigurarea disponibilității produselor'
      ],
      routes: 'Optimizare Rute Livrare',
      routesItems: [
        'Optimizare rute în timp real cu trafic',
        'Alocare inteligentă a curierilor',
        'Minimizare timp de livrare și costuri',
        'Predicție precisă timp de livrare'
      ],
      sentiment: 'Analiză Sentiment',
      sentimentItems: [
        'Monitorizare automată review-uri din toate platformele',
        'Identificare rapidă probleme și tendințe',
        'Răspunsuri automate personalizate',
        'Îmbunătățire reputație online'
      ],
      content: 'Generare Conținut AI',
      contentItems: [
        'Texte automate pentru social media',
        'Descrieri produse optimizate SEO',
        'Email-uri promoționale personalizate',
        'Idei creative pentru campanii'
      ],
      competitive: 'Analiză Competiție',
      competitiveItems: [
        'Monitorizare automată activitate competitori',
        'Analiză review-uri pentru oportunități',
        'Rapoarte detaliate și acționabile',
        'Alerte în timp real la schimbări'
      ],
      modular: 'Implementare Modulară',
      modularDesc: 'Serviciile AI pot fi integrate modular, permițând restaurantelor să aleagă soluțiile potrivite nevoilor și bugetului lor.'
    },
    footer: {
      title: 'Gata să îți transformi restaurantul?',
      subtitle: 'Contactează-ne pentru o consultație gratuită',
      whatsapp: 'WhatsApp',
      call: 'Sună Acum'
    }
  }
};

export const getWhatsAppUrl = () => {
  return 'https://wa.me/40768676141';
};

export const getPhoneUrl = () => {
  return 'tel:+40768676141';
};
