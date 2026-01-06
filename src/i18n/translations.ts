export type Language = 'en' | 'es' | 'ro';

export const translations = {
  en: {
    siteName: 'MrDelivery.com',
    tagline: '🚀 Marketing Management • AI Chatbots & Voice Agents • Viral Video Content',
    taglineItems: [
      { emoji: '🚀', text: 'Training Staff - Management and Marketing' },
      { emoji: '🤖', text: 'AI Chatbots & Voice Agents' },
      { emoji: '🎬', text: 'Viral Video Content - Daily Posting' }
    ],
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
        price: '€374/month',
        originalPrice: '€499/month',
        discount: '25% OFF',
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
        price: '€389/month',
        originalPrice: '€599/month',
        discount: '35% OFF',
        subtitle: 'Viral content for TikTok, Instagram Reels & YouTube Shorts',
        badge: 'Viral Video Content',
        videosTitle: '🎬 16-20 Videoclips/Month',
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
      ugc: {
        title: 'Your Brand, Your Voice: The Digital Avatar That Grows Your Business',
        heroTitle: 'Your Brand, Your Voice',
        heroSubtitle: "Don't depend on influencers anymore. Use your own face and voice to create viral content in seconds, at a fraction of the cost.",
        price: '€100 for 32 videos',
        originalPrice: '',
        discount: '32 Videos',
        noSubscription: 'Pay once. No monthly subscription.',
        subtitle: 'A real presenter promotes your product. You just send a photo on Telegram.',
        badge: 'AI-Powered UGC Creator',
        stepsTitle: 'How It Works? (4 Simple Steps)',
        stepsDesc: 'Automated workflow via Telegram:',
        step1: 'OPEN',
        step1Desc: 'the bot on Telegram',
        step2: 'SEND',
        step2Desc: 'a photo of your product',
        step3: 'WAIT',
        step3Desc: '2 minutes',
        step4: 'RECEIVE',
        step4Desc: 'your 24-second viral video, ready to post',
        benefitsTitle: 'Why Choose AI Video Generator?',
        benefit1Title: 'Fast',
        benefit1Desc: 'From photo to video in less than 5 minutes',
        benefit2Title: 'Cheap',
        benefit2Desc: '~€3 per video. Much less than an influencer',
        benefit3Title: 'Easy',
        benefit3Desc: 'No team, studio, or marketing knowledge needed',
        benefit4Title: 'Professional',
        benefit4Desc: 'Real presenter, natural and quality look',
        deliverable: '24-second video optimized for TikTok, Reels, YouTube Shorts',
        telegramButton: 'START NOW ON TELEGRAM',
        finalCta: 'GENERATE YOUR FIRST VIDEO NOW',
        items: [
          'Real presenter promoting your product',
          '24-second video optimized for TikTok, Reels, Shorts',
          'Delivery in less than 5 minutes',
          '~€3 per video - much cheaper than an influencer',
          'No team, studio, or marketing knowledge needed',
          'Works only on Telegram - fast and easy!'
        ],
        examples: 'Influencer product showcases, restaurant food promotions, authentic testimonials, lifestyle unboxings, morning routines with your products'
      },
      premium: {
        title: 'Premium Package: Efficiency and Innovation',
        price: '€384/month',
        originalPrice: '€699/month',
        discount: '45% OFF',
        discountNote: '45% off if you purchase Packages 1 and 2 together',
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
    },
    creatorStudio: {
      nav: {
        dashboard: 'Dashboard',
        banner: 'AI Banner',
        logo: 'AI Logo',
        socialPosts: 'Social Posts',
        businessCards: 'Business Cards',
        credits: 'Credits',
        backToHome: 'Back to Home',
        logIn: 'Log In',
        signUp: 'Sign Up',
        logOut: 'Log Out'
      },
      announcement: 'Welcome to MrDelivery Studio! Create stunning marketing content for your restaurant.',
      dashboard: {
        heroSlides: [
          {
            title: 'Create Stunning Banners for Your Restaurant',
            description: 'Generate professional-quality promotional banners in minutes. Perfect for food delivery promotions, special offers, and restaurant marketing.',
            buttons: ['Start with AI', 'Browse Gallery', 'How It Works']
          },
          {
            title: 'Design Your Restaurant Logo with AI',
            description: 'Create professional restaurant logos in minutes with AI-powered creativity. Perfect for new restaurants, rebranding, and delivery services.',
            buttons: ['Start with AI']
          },
          {
            title: 'Build Your Restaurant Brand Identity',
            description: 'Create professional business cards and establish your brand kit. Keep your restaurant branding consistent across all marketing materials.',
            buttons: ['Business Cards', 'Brand Kit']
          },
          {
            title: 'Create Food Delivery Social Posts',
            description: 'Design beautiful promotional graphics for Instagram, Facebook, and LinkedIn. Perfect for daily specials, menu highlights, and delivery promotions.',
            buttons: ['Create Social Post']
          }
        ],
        getStarted: 'Get Started',
        startCreating: 'Start Creating for Free!',
        freeCredits: 'Free Credits',
        bannerShowcase: 'Banner Showcase',
        logoShowcase: 'Logo Showcase',
        featured: 'Featured',
        lovedBy: 'Loved by Restaurant Owners',
        lovedByDesc: 'Join hundreds of restaurants and delivery partners who trust MrDelivery Studio for their marketing needs',
        rating: 'Rated 4.9/5 from over 500+ happy restaurant partners',
        features: {
          title: 'Create Your Restaurant Brand with Powerful Tools',
          viewPlans: 'View Plans',
          aiLogoMaker: 'AI Logo Maker',
          aiLogoMakerDesc: 'Answer a few questions and let MrDelivery Studio design a professional logo for your restaurant',
          brandKit: 'Brand Kit',
          brandKitDesc: 'Save your restaurant colors, fonts, and logo to maintain consistency across all your marketing',
          businessCardMaker: 'Business Card Maker',
          businessCardMakerDesc: 'Design professional business cards for your restaurant with customizable templates',
          aiBannerGenerator: 'AI Banner Generator',
          aiBannerGeneratorDesc: 'Describe your promotion and let MrDelivery Studio generate stunning banners with food imagery',
          socialPostGenerator: 'Social Post Generator',
          socialPostGeneratorDesc: 'Create eye-catching promotional graphics for daily specials, delivery deals, and menu updates',
          needLogo: 'Need a restaurant logo?',
          needLogoDesc: 'Create stunning AI-powered logos for your restaurant in seconds.',
          tryLogoMaker: 'Try Logo Maker Now'
        },
        testimonials: [
          {
            quote: "MrDelivery Studio has completely transformed how we create promotional content. What used to take hours now takes minutes, and the quality is consistently excellent.",
            author: "Maria Popescu",
            role: "Restaurant Owner at Bucătăria Veche"
          },
          {
            quote: "As a small restaurant, we needed affordable marketing solutions. MrDelivery's AI-powered tools help us create professional banners without hiring a designer.",
            author: "Ion Gheorghe",
            role: "Owner at Pizza & Pasta Corner"
          },
          {
            quote: "The variety of templates for food delivery promotions is amazing. We can maintain our brand consistency across all platforms while promoting daily specials.",
            author: "Ana Munteanu",
            role: "Marketing Manager at FoodChain Delivery"
          }
        ]
      },
      banner: {
        title: 'MrDelivery Banner Generator',
        description: 'Describe your restaurant promotion and let AI create stunning banners for you',
        promptLabel: 'Describe your banner',
        promptPlaceholder: 'E.g., A delicious pizza delivery banner with 20% OFF text, warm colors, and mouth-watering food imagery',
        sizeLabel: 'Banner Size',
        generateBtn: 'Generate Banner (1 Credit)',
        generating: 'Generating...',
        creditsRemaining: 'credits remaining',
        preview: 'Preview',
        clear: 'Clear',
        download: 'Download',
        creating: 'Creating your banner...',
        willAppear: 'Your generated banner will appear here',
        selectedSize: 'Selected size'
      },
      logo: {
        title: 'MrDelivery Logo Maker',
        description: 'Answer a few questions and let AI design a professional logo for your restaurant',
        restaurantName: 'Restaurant Name',
        restaurantNamePlaceholder: 'Enter your restaurant or delivery service name',
        restaurantDescription: 'Restaurant Description (Optional)',
        restaurantDescPlaceholder: 'E.g., A family Italian restaurant specializing in wood-fired pizzas and fresh pasta',
        logoStyle: 'Logo Style',
        colorScheme: 'Color Scheme',
        generateBtn: 'Generate Logo (2 Credits)',
        generating: 'Generating...',
        creditsRemaining: 'credits remaining',
        preview: 'Preview',
        clear: 'Clear',
        download: 'Download',
        designing: 'Designing your logo...',
        willAppear: 'Your generated logo will appear here',
        styles: {
          modern: { label: 'Modern', description: 'Clean and minimal design' },
          bold: { label: 'Bold', description: 'Strong and impactful' },
          '3d': { label: '3D', description: 'Three-dimensional look' },
          vintage: { label: 'Vintage', description: 'Classic retro style' },
          playful: { label: 'Playful', description: 'Fun and colorful' },
          professional: { label: 'Professional', description: 'Corporate and trustworthy' }
        }
      },
      socialPosts: {
        title: 'Social Post Generator',
        description: 'Create beautiful text graphics for social media',
        platform: 'Platform',
        yourText: 'Your Text',
        textPlaceholder: 'Enter your quote, announcement, or promotional text...',
        aiGenerate: 'AI Generate',
        fontStyle: 'Font Style',
        background: 'Background',
        savePost: 'Save Post',
        saving: 'Saving...',
        preview: 'Preview',
        yourTextWillAppear: 'Your text will appear here'
      },
      businessCards: {
        title: 'Business Card Maker',
        description: 'Design professional business cards with customizable templates',
        fullName: 'Full Name',
        jobTitle: 'Job Title',
        company: 'Company',
        email: 'Email',
        phone: 'Phone',
        website: 'Website',
        templateStyle: 'Template Style',
        colorScheme: 'Color Scheme',
        saveCard: 'Save Business Card',
        saving: 'Saving...',
        livePreview: 'Live Preview',
        yourName: 'Your Name',
        templates: {
          classic: 'Classic',
          modern: 'Modern',
          bold: 'Bold',
          creative: 'Creative'
        }
      },
      credits: {
        title: 'Credits & Pricing',
        chooseYourPlan: 'Choose Your Plan',
        description: 'Get credits to generate restaurant banners, logos, and promotional content. All plans include access to all MrDelivery Studio AI tools.',
        yourBalance: 'Your Balance',
        credits: 'Credits',
        mostPopular: 'Most Popular',
        getStarted: 'Get Started',
        processing: 'Processing...',
        creditsIncluded: 'credits included',
        perMonth: '/month',
        creditUsage: 'Credit Usage',
        bannerGeneration: 'Banner Generation',
        logoGeneration: 'Logo Generation',
        aiTextGeneration: 'AI Text Generation',
        businessCards: 'Business Cards',
        free: 'Free',
        plans: {
          starter: {
            name: 'Starter',
            features: ['50 AI generations', 'All banner sizes', 'Logo generator', 'Social post creator', 'Standard support']
          },
          pro: {
            name: 'Pro',
            features: ['200 AI generations', 'All banner sizes', 'Logo generator', 'Social post creator', 'Business card maker', 'Priority support', 'Brand kit storage']
          },
          enterprise: {
            name: 'Enterprise',
            features: ['1000 AI generations', 'All features included', 'Custom templates', 'API access', 'Dedicated support', 'Team collaboration', 'White-label exports']
          }
        }
      },
      profile: {
        title: 'My Profile',
        subtitle: 'Manage your account and view your generated content',
        loginRequired: 'Login Required',
        loginRequiredDesc: 'Please log in to view your profile and generated content.',
        settings: 'Settings',
        banners: 'Banners',
        logos: 'Logos',
        posts: 'Posts',
        cards: 'Cards',
        accountInfo: 'Account Information',
        email: 'Email',
        emailCantChange: 'Email cannot be changed',
        displayName: 'Display Name',
        displayNamePlaceholder: 'Enter your display name',
        saving: 'Saving...',
        saveChanges: 'Save Changes',
        profileUpdated: 'Profile updated successfully!',
        updateFailed: 'Failed to update profile',
        creditsSummary: 'Credits Summary',
        generatedBanners: 'Generated Banners',
        generatedLogos: 'Generated Logos',
        savedPosts: 'Saved Social Posts',
        savedCards: 'Saved Business Cards',
        noBanners: 'No banners generated yet',
        noLogos: 'No logos generated yet',
        noPosts: 'No social posts saved yet',
        noCards: 'No business cards saved yet',
        itemDeleted: 'Item deleted successfully',
        deleteFailed: 'Failed to delete item'
      }
    }
  },
  es: {
    siteName: 'MrDelivery.es',
    tagline: '🚀 Gestión de Marketing • Chatbots IA & Agentes de Voz • Contenido de Vídeo Viral',
    taglineItems: [
      { emoji: '🚀', text: 'Formación de Personal - Gestión y Marketing' },
      { emoji: '🤖', text: 'Chatbots IA & Agentes de Voz' },
      { emoji: '🎬', text: 'Contenido de Vídeo Viral - Publicación Diaria' }
    ],
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
        price: '374 €/mes',
        originalPrice: '499 €/mes',
        discount: '25% DESCUENTO',
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
        price: '389 €/mes',
        originalPrice: '599 €/mes',
        discount: '35% DESCUENTO',
        subtitle: 'Contenido viral para TikTok, Instagram Reels y YouTube Shorts',
        badge: 'Contenido de Vídeo Viral',
        videosTitle: '🎬 16-20 Videoclips/Mes',
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
      ugc: {
        title: 'Tu Marca, Tu Voz: El Avatar Digital que Hace Crecer tu Negocio',
        heroTitle: 'Tu Marca, Tu Voz',
        heroSubtitle: 'No dependas más de influencers. Usa tu propio rostro y voz para crear contenido viral en segundos, a una fracción del costo.',
        price: '€100 por 32 vídeos',
        originalPrice: '',
        discount: '32 Vídeos',
        noSubscription: 'Paga una vez. Sin suscripción mensual.',
        subtitle: 'Un presentador real promociona tu producto. Solo envías una foto por Telegram.',
        badge: 'Creador UGC con IA',
        stepsTitle: '¿Cómo Funciona? (4 Pasos Simples)',
        stepsDesc: 'Flujo automatizado vía Telegram:',
        step1: 'ABRE',
        step1Desc: 'el bot en Telegram',
        step2: 'ENVÍA',
        step2Desc: 'una foto de tu producto',
        step3: 'ESPERA',
        step3Desc: '2 minutos',
        step4: 'RECIBE',
        step4Desc: 'tu vídeo viral de 24 segundos, listo para publicar',
        benefitsTitle: '¿Por Qué Elegir AI Video Generator?',
        benefit1Title: 'Rápido',
        benefit1Desc: 'De foto a vídeo en menos de 5 minutos',
        benefit2Title: 'Barato',
        benefit2Desc: '~€3 por vídeo. Mucho menos que un influencer',
        benefit3Title: 'Fácil',
        benefit3Desc: 'Sin equipo, estudio ni conocimientos de marketing',
        benefit4Title: 'Profesional',
        benefit4Desc: 'Presentador real, aspecto natural y de calidad',
        deliverable: 'Vídeo de 24 segundos optimizado para TikTok, Reels, YouTube Shorts',
        telegramButton: 'EMPIEZA AHORA EN TELEGRAM',
        finalCta: 'GENERA TU PRIMER VÍDEO AHORA',
        items: [
          'Presentador real promocionando tu producto',
          'Vídeo de 24 segundos optimizado para TikTok, Reels, Shorts',
          'Entrega en menos de 5 minutos',
          '~€3 por vídeo - mucho más barato que un influencer',
          'Sin equipo, estudio ni conocimientos de marketing',
          '¡Funciona solo en Telegram - rápido y fácil!'
        ],
        examples: 'Showcases de productos con influencers, promociones de comida de restaurante, testimonios auténticos, unboxings lifestyle, rutinas matutinas con tus productos'
      },
      premium: {
        title: 'Paquete Premium: Eficiencia e Innovación',
        price: '384 €/mes',
        originalPrice: '699 €/mes',
        discount: '45% DESCUENTO',
        discountNote: '45% de descuento al adquirir los Paquetes 1 y 2 juntos',
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
    },
    creatorStudio: {
      nav: {
        dashboard: 'Panel',
        banner: 'Banner IA',
        logo: 'Logo IA',
        socialPosts: 'Posts Sociales',
        businessCards: 'Tarjetas de Visita',
        credits: 'Créditos',
        backToHome: 'Volver al Inicio',
        logIn: 'Iniciar Sesión',
        signUp: 'Registrarse',
        logOut: 'Cerrar Sesión'
      },
      announcement: '¡Bienvenido a MrDelivery Studio! Crea contenido de marketing impresionante para tu restaurante.',
      dashboard: {
        heroSlides: [
          {
            title: 'Crea Banners Impresionantes para tu Restaurante',
            description: 'Genera banners promocionales de calidad profesional en minutos. Perfecto para promociones de delivery, ofertas especiales y marketing de restaurantes.',
            buttons: ['Empezar con IA', 'Ver Galería', 'Cómo Funciona']
          },
          {
            title: 'Diseña el Logo de tu Restaurante con IA',
            description: 'Crea logos profesionales para restaurantes en minutos con creatividad impulsada por IA. Perfecto para nuevos restaurantes, rebranding y servicios de delivery.',
            buttons: ['Empezar con IA']
          },
          {
            title: 'Construye la Identidad de Marca de tu Restaurante',
            description: 'Crea tarjetas de visita profesionales y establece tu kit de marca. Mantén la coherencia de tu marca en todos los materiales de marketing.',
            buttons: ['Tarjetas de Visita', 'Kit de Marca']
          },
          {
            title: 'Crea Posts de Delivery para Redes Sociales',
            description: 'Diseña gráficos promocionales hermosos para Instagram, Facebook y LinkedIn. Perfecto para ofertas diarias, destacados del menú y promociones de delivery.',
            buttons: ['Crear Post Social']
          }
        ],
        getStarted: 'Empezar',
        startCreating: '¡Empieza a Crear Gratis!',
        freeCredits: 'Créditos Gratis',
        bannerShowcase: 'Galería de Banners',
        logoShowcase: 'Galería de Logos',
        featured: 'Destacado',
        lovedBy: 'Amado por Dueños de Restaurantes',
        lovedByDesc: 'Únete a cientos de restaurantes y socios de delivery que confían en MrDelivery Studio para sus necesidades de marketing',
        rating: 'Valorado 4.9/5 por más de 500+ socios felices',
        features: {
          title: 'Crea la Marca de tu Restaurante con Herramientas Poderosas',
          viewPlans: 'Ver Planes',
          aiLogoMaker: 'Creador de Logos IA',
          aiLogoMakerDesc: 'Responde algunas preguntas y deja que MrDelivery Studio diseñe un logo profesional para tu restaurante',
          brandKit: 'Kit de Marca',
          brandKitDesc: 'Guarda los colores, fuentes y logo de tu restaurante para mantener la consistencia en todo tu marketing',
          businessCardMaker: 'Creador de Tarjetas',
          businessCardMakerDesc: 'Diseña tarjetas de visita profesionales para tu restaurante con plantillas personalizables',
          aiBannerGenerator: 'Generador de Banners IA',
          aiBannerGeneratorDesc: 'Describe tu promoción y deja que MrDelivery Studio genere banners impresionantes con imágenes de comida',
          socialPostGenerator: 'Generador de Posts Sociales',
          socialPostGeneratorDesc: 'Crea gráficos promocionales llamativos para ofertas diarias, promociones de delivery y actualizaciones del menú',
          needLogo: '¿Necesitas un logo para tu restaurante?',
          needLogoDesc: 'Crea logos impresionantes con IA para tu restaurante en segundos.',
          tryLogoMaker: 'Prueba el Creador de Logos'
        },
        testimonials: [
          {
            quote: "MrDelivery Studio ha transformado completamente cómo creamos contenido promocional. Lo que antes tomaba horas ahora toma minutos, y la calidad es consistentemente excelente.",
            author: "María García",
            role: "Dueña de Restaurante en La Cocina Tradicional"
          },
          {
            quote: "Como pequeño restaurante, necesitábamos soluciones de marketing asequibles. Las herramientas de IA de MrDelivery nos ayudan a crear banners profesionales sin contratar un diseñador.",
            author: "Carlos Rodríguez",
            role: "Dueño de Pizza Express"
          },
          {
            quote: "La variedad de plantillas para promociones de delivery es increíble. Podemos mantener la consistencia de nuestra marca en todas las plataformas mientras promocionamos ofertas diarias.",
            author: "Ana Martínez",
            role: "Gerente de Marketing en FoodChain Delivery"
          }
        ]
      },
      banner: {
        title: 'Generador de Banners MrDelivery',
        description: 'Describe tu promoción de restaurante y deja que la IA cree banners impresionantes para ti',
        promptLabel: 'Describe tu banner',
        promptPlaceholder: 'Ej., Un banner de delivery de pizza deliciosa con texto 20% DESCUENTO, colores cálidos e imágenes de comida apetitosa',
        sizeLabel: 'Tamaño del Banner',
        generateBtn: 'Generar Banner (1 Crédito)',
        generating: 'Generando...',
        creditsRemaining: 'créditos restantes',
        preview: 'Vista Previa',
        clear: 'Limpiar',
        download: 'Descargar',
        creating: 'Creando tu banner...',
        willAppear: 'Tu banner generado aparecerá aquí',
        selectedSize: 'Tamaño seleccionado'
      },
      logo: {
        title: 'Creador de Logos MrDelivery',
        description: 'Responde algunas preguntas y deja que la IA diseñe un logo profesional para tu restaurante',
        restaurantName: 'Nombre del Restaurante',
        restaurantNamePlaceholder: 'Ingresa el nombre de tu restaurante o servicio de delivery',
        restaurantDescription: 'Descripción del Restaurante (Opcional)',
        restaurantDescPlaceholder: 'Ej., Un restaurante italiano familiar especializado en pizzas a la leña y pasta fresca',
        logoStyle: 'Estilo del Logo',
        colorScheme: 'Esquema de Colores',
        generateBtn: 'Generar Logo (2 Créditos)',
        generating: 'Generando...',
        creditsRemaining: 'créditos restantes',
        preview: 'Vista Previa',
        clear: 'Limpiar',
        download: 'Descargar',
        designing: 'Diseñando tu logo...',
        willAppear: 'Tu logo generado aparecerá aquí',
        styles: {
          modern: { label: 'Moderno', description: 'Diseño limpio y minimalista' },
          bold: { label: 'Audaz', description: 'Fuerte e impactante' },
          '3d': { label: '3D', description: 'Aspecto tridimensional' },
          vintage: { label: 'Vintage', description: 'Estilo retro clásico' },
          playful: { label: 'Divertido', description: 'Colorido y entretenido' },
          professional: { label: 'Profesional', description: 'Corporativo y confiable' }
        }
      },
      socialPosts: {
        title: 'Generador de Posts Sociales',
        description: 'Crea hermosos gráficos de texto para redes sociales',
        platform: 'Plataforma',
        yourText: 'Tu Texto',
        textPlaceholder: 'Ingresa tu cita, anuncio o texto promocional...',
        aiGenerate: 'Generar con IA',
        fontStyle: 'Estilo de Fuente',
        background: 'Fondo',
        savePost: 'Guardar Post',
        saving: 'Guardando...',
        preview: 'Vista Previa',
        yourTextWillAppear: 'Tu texto aparecerá aquí'
      },
      businessCards: {
        title: 'Creador de Tarjetas de Visita',
        description: 'Diseña tarjetas de visita profesionales con plantillas personalizables',
        fullName: 'Nombre Completo',
        jobTitle: 'Cargo',
        company: 'Empresa',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        website: 'Sitio Web',
        templateStyle: 'Estilo de Plantilla',
        colorScheme: 'Esquema de Colores',
        saveCard: 'Guardar Tarjeta',
        saving: 'Guardando...',
        livePreview: 'Vista Previa en Vivo',
        yourName: 'Tu Nombre',
        templates: {
          classic: 'Clásico',
          modern: 'Moderno',
          bold: 'Audaz',
          creative: 'Creativo'
        }
      },
      credits: {
        title: 'Créditos y Precios',
        chooseYourPlan: 'Elige tu Plan',
        description: 'Obtén créditos para generar banners, logos y contenido promocional para restaurantes. Todos los planes incluyen acceso a todas las herramientas de IA de MrDelivery Studio.',
        yourBalance: 'Tu Saldo',
        credits: 'Créditos',
        mostPopular: 'Más Popular',
        getStarted: 'Empezar',
        processing: 'Procesando...',
        creditsIncluded: 'créditos incluidos',
        perMonth: '/mes',
        creditUsage: 'Uso de Créditos',
        bannerGeneration: 'Generación de Banner',
        logoGeneration: 'Generación de Logo',
        aiTextGeneration: 'Generación de Texto IA',
        businessCards: 'Tarjetas de Visita',
        free: 'Gratis',
        plans: {
          starter: {
            name: 'Inicial',
            features: ['50 generaciones IA', 'Todos los tamaños de banner', 'Generador de logos', 'Creador de posts sociales', 'Soporte estándar']
          },
          pro: {
            name: 'Pro',
            features: ['200 generaciones IA', 'Todos los tamaños de banner', 'Generador de logos', 'Creador de posts sociales', 'Creador de tarjetas', 'Soporte prioritario', 'Almacenamiento kit de marca']
          },
          enterprise: {
            name: 'Empresarial',
            features: ['1000 generaciones IA', 'Todas las funciones incluidas', 'Plantillas personalizadas', 'Acceso API', 'Soporte dedicado', 'Colaboración en equipo', 'Exportaciones sin marca']
          }
        }
      },
      profile: {
        title: 'Mi Perfil',
        subtitle: 'Administra tu cuenta y visualiza tu contenido generado',
        loginRequired: 'Inicio de Sesión Requerido',
        loginRequiredDesc: 'Por favor inicia sesión para ver tu perfil y contenido generado.',
        settings: 'Configuración',
        banners: 'Banners',
        logos: 'Logos',
        posts: 'Posts',
        cards: 'Tarjetas',
        accountInfo: 'Información de la Cuenta',
        email: 'Correo Electrónico',
        emailCantChange: 'El correo no puede ser cambiado',
        displayName: 'Nombre para Mostrar',
        displayNamePlaceholder: 'Ingresa tu nombre para mostrar',
        saving: 'Guardando...',
        saveChanges: 'Guardar Cambios',
        profileUpdated: '¡Perfil actualizado exitosamente!',
        updateFailed: 'Error al actualizar el perfil',
        creditsSummary: 'Resumen de Créditos',
        generatedBanners: 'Banners Generados',
        generatedLogos: 'Logos Generados',
        savedPosts: 'Posts Sociales Guardados',
        savedCards: 'Tarjetas de Visita Guardadas',
        noBanners: 'Aún no hay banners generados',
        noLogos: 'Aún no hay logos generados',
        noPosts: 'Aún no hay posts sociales guardados',
        noCards: 'Aún no hay tarjetas de visita guardadas',
        itemDeleted: 'Elemento eliminado exitosamente',
        deleteFailed: 'Error al eliminar el elemento'
      }
    }
  },
  ro: {
    siteName: 'MrDelivery.ro',
    tagline: '🚀 Management Marketing • Chatboți AI & Agenți Vocali • Conținut Video Viral',
    taglineItems: [
      { emoji: '🚀', text: 'Instruire Personal - Management și Marketing' },
      { emoji: '🤖', text: 'Chatboți AI & Agenți Vocali' },
      { emoji: '🎬', text: 'Conținut Video Viral - postări zilnice' }
    ],
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
        price: '1.500 RON/lună',
        originalPrice: '2.000 RON/lună',
        discount: '25% REDUCERE',
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
        price: '1.625 RON/lună',
        originalPrice: '2.500 RON/lună',
        discount: '35% REDUCERE',
        subtitle: 'Conținut viral pentru TikTok, Instagram Reels și YouTube Shorts',
        badge: 'Conținut Video Viral',
        videosTitle: '🎬 16-20 Videoclipuri/Lună',
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
      ugc: {
        title: 'Brandul tău, Vocea ta: Avatarul Digital care îți Crește Afacerea',
        heroTitle: 'Brandul tău, Vocea ta',
        heroSubtitle: 'Nu mai depinde de influenceri. Folosește-ți propriul chip și propria voce pentru a crea conținut viral în câteva secunde, la o fracțiune de cost.',
        price: '499 RON (100 EUR) pentru 32 de videoclipuri',
        originalPrice: '',
        discount: '32 Videoclipuri',
        noSubscription: 'Plătești o singură dată. Nu există abonament lunar.',
        subtitle: 'Un prezentator real îți promovează produsul. Tu doar trimiți o poză pe Telegram.',
        badge: 'Creator UGC cu AI',
        stepsTitle: 'Cum Funcționează? (4 Pași Simpli)',
        stepsDesc: 'Flux automatizat prin Telegram:',
        step1: 'DESCHIDE',
        step1Desc: 'robotul pe Telegram',
        step2: 'TRIMITE',
        step2Desc: 'o fotografie a produsului tău',
        step3: 'AȘTEAPTĂ',
        step3Desc: '2 minute',
        step4: 'PRIMEȘTI',
        step4Desc: 'videoclipul viral de 24 secunde, gata de publicat',
        benefitsTitle: 'De Ce Să Alegi AI Video Generator?',
        benefit1Title: 'Rapid',
        benefit1Desc: 'De la poză la videoclip în mai puțin de 5 minute',
        benefit2Title: 'Ieftin',
        benefit2Desc: '~15 RON / videoclip. Mult mai puțin decât un influencer',
        benefit3Title: 'Ușor',
        benefit3Desc: 'Fără echipă, studio sau cunoștințe de marketing',
        benefit4Title: 'Profesional',
        benefit4Desc: 'Prezentator real, aspect natural și de calitate',
        deliverable: 'Videoclip de 24 secunde optimizat pentru TikTok, Reels, YouTube Shorts',
        telegramButton: 'START ACUM PE TELEGRAM',
        finalCta: 'GENEREAZĂ PRIMUL VIDEO ACUM',
        items: [
          'Prezentator real care îți promovează produsul',
          'Video de 24 secunde optimizat pentru TikTok, Reels, Shorts',
          'Livrare în mai puțin de 5 minute',
          '~15 RON / videoclip - mult mai ieftin decât un influencer',
          'Fără echipă, studio sau cunoștințe de marketing',
          'Funcționează doar pe Telegram - rapid și simplu!'
        ],
        examples: 'Prezentări produse cu influenceri, promoții mâncare restaurant, testimoniale autentice, unboxing-uri lifestyle, rutine de dimineață cu produsele tale'
      },
      premium: {
        title: 'Pachet Premium: Eficiență și Inovație',
        price: '1.375 RON/lună',
        originalPrice: '2.500 RON/lună',
        discount: '45% REDUCERE',
        discountNote: '45% reducere la achiziționarea Pachetelor 1 și 2 împreună',
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
    },
    creatorStudio: {
      nav: {
        dashboard: 'Panou',
        banner: 'Banner IA',
        logo: 'Logo IA',
        socialPosts: 'Postări Sociale',
        businessCards: 'Cărți de Vizită',
        credits: 'Credite',
        backToHome: 'Înapoi Acasă',
        logIn: 'Autentificare',
        signUp: 'Înregistrare',
        logOut: 'Deconectare'
      },
      announcement: 'Bine ai venit la MrDelivery Studio! Creează conținut de marketing impresionant pentru restaurantul tău.',
      dashboard: {
        heroSlides: [
          {
            title: 'Creează Bannere Impresionante pentru Restaurantul Tău',
            description: 'Generează bannere promoționale de calitate profesională în câteva minute. Perfect pentru promoții de livrare, oferte speciale și marketing pentru restaurante.',
            buttons: ['Începe cu IA', 'Vezi Galeria', 'Cum Funcționează']
          },
          {
            title: 'Creează Logo-ul Restaurantului cu IA',
            description: 'Creează logo-uri profesionale pentru restaurante în câteva minute cu creativitate alimentată de IA. Perfect pentru restaurante noi, rebranding și servicii de livrare.',
            buttons: ['Începe cu IA']
          },
          {
            title: 'Construiește Identitatea de Brand a Restaurantului',
            description: 'Creează cărți de vizită profesionale și stabilește kit-ul tău de brand. Menține coerența brandului în toate materialele de marketing.',
            buttons: ['Cărți de Vizită', 'Kit de Brand']
          },
          {
            title: 'Creează Postări pentru Livrare pe Social Media',
            description: 'Creează grafice promoționale frumoase pentru Instagram, Facebook și LinkedIn. Perfect pentru oferte zilnice, evidențieri de meniu și promoții de livrare.',
            buttons: ['Creează Postare']
          }
        ],
        getStarted: 'Începe',
        startCreating: 'Începe să Creezi Gratuit!',
        freeCredits: 'Credite Gratuite',
        bannerShowcase: 'Galerie Bannere',
        logoShowcase: 'Galerie Logo-uri',
        featured: 'Recomandat',
        lovedBy: 'Iubit de Proprietarii de Restaurante',
        lovedByDesc: 'Alătură-te sutelor de restaurante și parteneri de livrare care au încredere în MrDelivery Studio pentru nevoile lor de marketing',
        rating: 'Evaluat 4.9/5 de peste 500+ parteneri fericiți',
        features: {
          title: 'Creează Brandul Restaurantului cu Instrumente Puternice',
          viewPlans: 'Vezi Planuri',
          aiLogoMaker: 'Creator Logo IA',
          aiLogoMakerDesc: 'Răspunde la câteva întrebări și lasă MrDelivery Studio să creeze un logo profesional pentru restaurantul tău',
          brandKit: 'Kit de Brand',
          brandKitDesc: 'Salvează culorile, fonturile și logo-ul restaurantului pentru a menține consistența în tot marketingul tău',
          businessCardMaker: 'Creator Cărți de Vizită',
          businessCardMakerDesc: 'Creează cărți de vizită profesionale pentru restaurantul tău cu șabloane personalizabile',
          aiBannerGenerator: 'Generator Bannere IA',
          aiBannerGeneratorDesc: 'Descrie promoția ta și lasă MrDelivery Studio să genereze bannere impresionante cu imagini de mâncare',
          socialPostGenerator: 'Generator Postări Sociale',
          socialPostGeneratorDesc: 'Creează grafice promoționale atrăgătoare pentru oferte zilnice, promoții de livrare și actualizări de meniu',
          needLogo: 'Ai nevoie de un logo pentru restaurant?',
          needLogoDesc: 'Creează logo-uri impresionante cu IA pentru restaurantul tău în câteva secunde.',
          tryLogoMaker: 'Încearcă Creatorul de Logo-uri'
        },
        testimonials: [
          {
            quote: "MrDelivery Studio a transformat complet modul în care creăm conținut promoțional. Ce dura ore acum durează minute, iar calitatea este constant excelentă.",
            author: "Maria Popescu",
            role: "Proprietar Restaurant la Bucătăria Veche"
          },
          {
            quote: "Ca restaurant mic, aveam nevoie de soluții de marketing accesibile. Instrumentele IA de la MrDelivery ne ajută să creăm bannere profesionale fără să angajăm un designer.",
            author: "Ion Gheorghe",
            role: "Proprietar la Pizza & Pasta Corner"
          },
          {
            quote: "Varietatea de șabloane pentru promoții de livrare este uimitoare. Putem menține consistența brandului pe toate platformele în timp ce promovăm ofertele zilnice.",
            author: "Ana Munteanu",
            role: "Manager Marketing la FoodChain Delivery"
          }
        ]
      },
      banner: {
        title: 'Generator Bannere MrDelivery',
        description: 'Descrie promoția restaurantului tău și lasă IA să creeze bannere impresionante pentru tine',
        promptLabel: 'Descrie banner-ul tău',
        promptPlaceholder: 'Ex., Un banner de livrare pizza delicioasă cu text 20% REDUCERE, culori calde și imagini de mâncare apetisantă',
        sizeLabel: 'Dimensiune Banner',
        generateBtn: 'Generează Banner (1 Credit)',
        generating: 'Se generează...',
        creditsRemaining: 'credite rămase',
        preview: 'Previzualizare',
        clear: 'Șterge',
        download: 'Descarcă',
        creating: 'Se creează banner-ul tău...',
        willAppear: 'Banner-ul generat va apărea aici',
        selectedSize: 'Dimensiune selectată'
      },
      logo: {
        title: 'Creator Logo MrDelivery',
        description: 'Răspunde la câteva întrebări și lasă IA să creeze un logo profesional pentru restaurantul tău',
        restaurantName: 'Numele Restaurantului',
        restaurantNamePlaceholder: 'Introdu numele restaurantului sau serviciului de livrare',
        restaurantDescription: 'Descrierea Restaurantului (Opțional)',
        restaurantDescPlaceholder: 'Ex., Un restaurant italian de familie specializat în pizza la cuptor cu lemne și paste proaspete',
        logoStyle: 'Stilul Logo-ului',
        colorScheme: 'Schema de Culori',
        generateBtn: 'Generează Logo (2 Credite)',
        generating: 'Se generează...',
        creditsRemaining: 'credite rămase',
        preview: 'Previzualizare',
        clear: 'Șterge',
        download: 'Descarcă',
        designing: 'Se creează logo-ul tău...',
        willAppear: 'Logo-ul generat va apărea aici',
        styles: {
          modern: { label: 'Modern', description: 'Design curat și minimalist' },
          bold: { label: 'Îndrăzneț', description: 'Puternic și impactant' },
          '3d': { label: '3D', description: 'Aspect tridimensional' },
          vintage: { label: 'Vintage', description: 'Stil retro clasic' },
          playful: { label: 'Jucăuș', description: 'Colorat și distractiv' },
          professional: { label: 'Profesional', description: 'Corporativ și de încredere' }
        }
      },
      socialPosts: {
        title: 'Generator Postări Sociale',
        description: 'Creează grafice de text frumoase pentru social media',
        platform: 'Platformă',
        yourText: 'Textul Tău',
        textPlaceholder: 'Introdu citatul, anunțul sau textul promoțional...',
        aiGenerate: 'Generează cu IA',
        fontStyle: 'Stil Font',
        background: 'Fundal',
        savePost: 'Salvează Postarea',
        saving: 'Se salvează...',
        preview: 'Previzualizare',
        yourTextWillAppear: 'Textul tău va apărea aici'
      },
      businessCards: {
        title: 'Creator Cărți de Vizită',
        description: 'Creează cărți de vizită profesionale cu șabloane personalizabile',
        fullName: 'Nume Complet',
        jobTitle: 'Funcție',
        company: 'Companie',
        email: 'Email',
        phone: 'Telefon',
        website: 'Website',
        templateStyle: 'Stil Șablon',
        colorScheme: 'Schema de Culori',
        saveCard: 'Salvează Cartea de Vizită',
        saving: 'Se salvează...',
        livePreview: 'Previzualizare Live',
        yourName: 'Numele Tău',
        templates: {
          classic: 'Clasic',
          modern: 'Modern',
          bold: 'Îndrăzneț',
          creative: 'Creativ'
        }
      },
      credits: {
        title: 'Credite și Prețuri',
        chooseYourPlan: 'Alege Planul Tău',
        description: 'Obține credite pentru a genera bannere, logo-uri și conținut promoțional pentru restaurante. Toate planurile includ acces la toate instrumentele IA MrDelivery Studio.',
        yourBalance: 'Soldul Tău',
        credits: 'Credite',
        mostPopular: 'Cel Mai Popular',
        getStarted: 'Începe',
        processing: 'Se procesează...',
        creditsIncluded: 'credite incluse',
        perMonth: '/lună',
        creditUsage: 'Utilizare Credite',
        bannerGeneration: 'Generare Banner',
        logoGeneration: 'Generare Logo',
        aiTextGeneration: 'Generare Text IA',
        businessCards: 'Cărți de Vizită',
        free: 'Gratuit',
        plans: {
          starter: {
            name: 'Starter',
            features: ['50 generări IA', 'Toate dimensiunile de banner', 'Generator logo', 'Creator postări sociale', 'Suport standard']
          },
          pro: {
            name: 'Pro',
            features: ['200 generări IA', 'Toate dimensiunile de banner', 'Generator logo', 'Creator postări sociale', 'Creator cărți de vizită', 'Suport prioritar', 'Stocare kit de brand']
          },
          enterprise: {
            name: 'Enterprise',
            features: ['1000 generări IA', 'Toate funcțiile incluse', 'Șabloane personalizate', 'Acces API', 'Suport dedicat', 'Colaborare în echipă', 'Exporturi fără brand']
          }
        }
      },
      profile: {
        title: 'Profilul Meu',
        subtitle: 'Administrează-ți contul și vizualizează conținutul generat',
        loginRequired: 'Autentificare Necesară',
        loginRequiredDesc: 'Te rugăm să te autentifici pentru a vedea profilul și conținutul generat.',
        settings: 'Setări',
        banners: 'Bannere',
        logos: 'Logo-uri',
        posts: 'Postări',
        cards: 'Cărți',
        accountInfo: 'Informații Cont',
        email: 'Email',
        emailCantChange: 'Email-ul nu poate fi schimbat',
        displayName: 'Nume Afișat',
        displayNamePlaceholder: 'Introdu numele tău afișat',
        saving: 'Se salvează...',
        saveChanges: 'Salvează Modificările',
        profileUpdated: 'Profilul a fost actualizat cu succes!',
        updateFailed: 'Actualizarea profilului a eșuat',
        creditsSummary: 'Sumar Credite',
        generatedBanners: 'Bannere Generate',
        generatedLogos: 'Logo-uri Generate',
        savedPosts: 'Postări Sociale Salvate',
        savedCards: 'Cărți de Vizită Salvate',
        noBanners: 'Încă nu ai generat bannere',
        noLogos: 'Încă nu ai generat logo-uri',
        noPosts: 'Încă nu ai salvat postări sociale',
        noCards: 'Încă nu ai salvat cărți de vizită',
        itemDeleted: 'Elementul a fost șters cu succes',
        deleteFailed: 'Ștergerea elementului a eșuat'
      }
    }
  }
};

export const getWhatsAppUrl = () => {
  return 'https://wa.me/40768676141';
};

export const getPhoneUrl = () => {
  return 'tel:+40768676141';
};
