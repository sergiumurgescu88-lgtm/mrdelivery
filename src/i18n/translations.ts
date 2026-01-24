export type Language = 'en' | 'es' | 'ro';

export const translations = {
  en: {
    siteName: 'MrDelivery',
    heroSubtitle: '5+ Years of Elite Delivery Expertise. 4+ Years of Proven Partnerships. 90% of Our Clients Come via Referrals.',
    tagline: '🚀 Marketing management • AI chatbots & voice agents • Viral video content',
    taglineItems: [
      { emoji: '🚀', text: 'Staff training - management and marketing' },
      { emoji: '🤖', text: 'AI chatbots & voice agents' },
      { emoji: '🎬', text: 'Viral video content - daily posting' }
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
        title: 'Delivery Platform Management',
        price: '$399/month',
        subtitle: 'We negotiate commissions and budgets on Uber Eats, DoorDash & Grubhub',
        support: 'Available in Romania, Spain & USA',
        badge: 'Multi-Platform Management',
        negotiation: {
          title: 'Negotiations & Budgets',
          tagline: 'Save Money',
          intro: 'Stop losing profit to high commissions.',
          items: [
            'Lower commissions negotiated directly with platforms',
            'Free marketing budgets funded by apps',
            'Campaign activation within 6 hours'
          ]
        },
        menu: {
          title: 'Optimized Menu',
          tagline: 'Sell More',
          intro: 'A well-presented menu sells more.',
          items: [
            'Daily menu updates to keep customers coming back',
            'Professional photos with full product details',
            'Upselling structure to boost average order'
          ]
        },
        support_card: {
          title: 'Support & Optimization',
          tagline: '24/7 WhatsApp',
          intro: 'Your dedicated delivery team on WhatsApp.',
          items: [
            'Optimized delivery zones for speed and cost',
            'Monthly sales analysis with growth insights',
            'Fast resolution of any order issues'
          ]
        },
        training: {
          title: 'Staff Training',
          tagline: 'Expert Team',
          intro: 'Your team masters delivery platforms.',
          items: [
            'Full training: orders, tablets, confirmations',
            'Handle refunds and cancellations smoothly',
            'Best practices for prep time and packaging',
            'Direct WhatsApp support for your staff'
          ]
        },
        monthlyReports: {
          title: 'Monthly reports included',
          intro: '5 detailed reports each month to grow your delivery business with data-driven decisions.',
          items: [
            { icon: 'BarChart3', title: 'Revenue comparison', desc: 'Current vs previous month growth trends' },
            { icon: 'Rocket', title: 'Promotion results', desc: 'Campaign impact on order volume' },
            { icon: 'TrendingUp', title: 'App sales status', desc: 'Order flow and channel efficiency' },
            { icon: 'Users', title: 'New customers', desc: 'New users who discovered your brand' },
            { icon: 'ClipboardList', title: 'Menu summary', desc: 'Menu structure and active offers' }
          ],
          whyImportant: 'Why this management matters',
          whyDesc: 'We actively manage your online presence: logo, photos, location optimization to maximize every sale.'
        },
        whyTitle: 'Why choose this package?',
        whyItems: [
          'ROI from month 1 through commission savings',
          'Top visibility on all delivery platforms',
          'Zero technical hassle for you'
        ]
      },
      aiAgents: {
        title: 'AI Virtual Assistant',
        price: '$399/month',
        originalPrice: '$499/month',
        discount: '25% OFF',
        subtitle: 'Never sleeps, responds instantly to every customer',
        badge: '24/7 AI Agent',
        phone: {
          title: 'Answers calls',
          tagline: 'Voice AI',
          intro: 'Never miss a customer when you are busy.',
          items: [
            'Natural voice, speaks like a human',
            'Knows your menu, prices, ingredients',
            'Handles dozens of calls at once'
          ]
        },
        whatsapp: {
          title: 'WhatsApp expert',
          tagline: 'Chat AI',
          intro: 'Instant answers when customers ask.',
          items: [
            'Sends photos and menu details directly',
            'Smart upselling and offer recommendations',
            'Available 24/7, even at night'
          ]
        },
        reservations: {
          title: 'Auto reservations',
          tagline: 'Calendar Sync',
          intro: 'No paper agenda, no human errors.',
          items: [
            'Books directly into Google Calendar',
            'Sends confirmations and reminders',
            'Customers reschedule via chat or call'
          ]
        },
        benefitsTitle: 'Why AI Agent?',
        benefitsList: [
          'Zero missed calls',
          'Always available',
          'Less team stress'
        ]
      },
      video: {
        title: 'Video Production & Auto-Posting',
        price: '$399/month',
        originalPrice: '$599/month',
        discount: '35% OFF',
        subtitle: 'We create and post daily on 4 platforms',
        badge: 'Viral Video Content',
        videosTitle: '🎬 16-20 Premium Clips/Month',
        videoDesc: '16-20 videos monthly:',
        hook: 'Hook (8s)',
        hookDesc: 'captures attention',
        action: 'Action (8s)',
        actionDesc: 'shows concept',
        cta: 'CTA (8s)',
        ctaDesc: 'drives action',
        veo3: 'Cinematic Quality',
        veo3Desc: 'Cinema-grade visuals with presenters that bring your brand to life',
        format: 'Creative Variety',
        formatDesc: 'Challenges, interviews and shareable clips',
        presenters: {
          title: 'OUR PRESENTERS',
          tagline: 'Zero effort from you',
          intro: 'Our professional team creates everything for you.',
          items: [
            'Professional creator team',
            'Experienced presenters',
            'No effort from you'
          ]
        },
        yourFace: {
          title: 'YOUR FACE AS BRAND',
          tagline: 'Max authenticity',
          intro: 'Your face and voice with VEO3 AI technology.',
          items: [
            'Personal audience connection',
            'VEO3 AI technology',
            'Ideal for authentic owners'
          ]
        },
        quality: {
          title: 'Quality & Creativity',
          tagline: 'Both options',
          intro: 'Premium image, sound and editing.',
          items: [
            'Viral storyboards',
            'Challenges, interviews, interactive',
            'Attention-grabbing ideas'
          ]
        },
        robot: {
          title: '🤖 Daily Posting Robot',
          tagline: 'Set & Forget',
          intro: 'Monthly package delivered for your approval.',
          items: [
            'Posts daily on TikTok, Instagram, Facebook, YouTube',
            'Same optimal time every day',
            'Fully automated, zero hassle'
          ]
        },
        visibility: {
          title: '🚀 Guaranteed Results',
          tagline: 'Measurable Impact',
          intro: 'Algorithms love consistency.',
          items: [
            'Daily posting boosts organic reach',
            'See growth in 30 days',
            'Strong brand presence'
          ]
        },
        formatExamples: {
          label: 'Format Examples'
        },
        included: {
          title: "What's Included",
          items: [
            '20 premium videos/month (our team or your face*)',
            'Creative ideas and full content management',
            'Auto-posting on 4 platforms after approval'
          ],
          note: '(*) Face option selected at start, included in price.',
          cta: 'We create. We post. You grow.'
        },
        items: [
          '16 creative concepts with full script',
          'Professional MrDelivery presenter',
          'Interactive audience challenges',
          'Natural brand integration + CTA',
          'Diverse formats: challenges, interviews',
          'Cinematic production quality',
          'Algorithm-optimized content',
          '16:9 and 9:16 delivery'
        ],
        examples: 'Burger Challenge, Street Food Confessions, Guess the Ingredient, Couples Battle and more'
      },
      ugc: {
        title: 'Your Brand, Your Voice: AI Digital Avatar',
        heroTitle: 'Your Brand, Your Voice',
        heroSubtitle: 'Create viral content with your face and voice in seconds, no influencers needed.',
        price: '$199',
        originalPrice: '$299',
        discount: '35% OFF',
        noSubscription: 'One-time payment. No subscription.',
        subtitle: 'Real presenter promotes your product. Just send a photo.',
        badge: 'AI UGC Creator',
        stepsTitle: 'How it works (4 steps)',
        stepsDesc: 'Automated via Telegram:',
        step1: 'OPEN',
        step1Desc: 'Telegram bot',
        step2: 'SEND',
        step2Desc: 'product photo',
        step3: 'WAIT',
        step3Desc: '2 minutes',
        step4: 'GET',
        step4Desc: '24s viral video ready to post',
        benefitsTitle: 'Why AI Video Generator?',
        benefit1Title: 'Fast',
        benefit1Desc: 'Photo to video in under 5 min',
        benefit2Title: 'Cheap',
        benefit2Desc: '~$3/video vs expensive influencers',
        benefit3Title: 'Easy',
        benefit3Desc: 'No team or studio needed',
        benefit4Title: 'Pro Quality',
        benefit4Desc: 'Real presenter, natural look',
        deliverable: '24s video for TikTok, Reels, Shorts',
        telegramButton: 'START ON TELEGRAM',
        finalCta: 'CREATE YOUR FIRST VIDEO',
        items: [
          'Real presenter promotes your product',
          '24s video for TikTok, Reels, Shorts',
          'Delivered in under 5 minutes',
          '~$3/video - way cheaper than influencers',
          'No team, studio or marketing skills',
          'Telegram-based - fast and simple'
        ],
        examples: 'Product showcases, food promos, testimonials, unboxings, lifestyle content'
      },
      premium: {
        title: 'Business on Autopilot',
        price: '$399/month',
        originalPrice: '$699/month',
        discount: '45% OFF',
        discountNote: 'Save 45% with Digitalization + Marketing bundle',
        subtitle: 'Complete online sales solution in one package.',
        badge: 'All-Inclusive',
        app: {
          title: 'Your App & Website',
          tagline: 'Your own store',
          intro: 'Independence from platforms and social media.',
          items: [
            'Full launch: Android, iOS app + ordering website',
            'We handle design to maintenance',
            'Delivery partner integration included'
          ]
        },
        automation: {
          title: 'Automation & Loyalty',
          tagline: 'More repeat sales',
          intro: 'Turn visitors into loyal customers.',
          items: [
            'Auto-collect customer data for offers',
            'WhatsApp/SMS automatic promotions',
            'Right message at the right time'
          ]
        },
        social: {
          title: 'Social Media Management',
          tagline: 'Max Visibility',
          intro: 'Daily presence where customers are.',
          items: [
            'Viral TikTok, Instagram, Facebook content',
            'Growth strategy, not just posting',
            'Continuous optimization for results'
          ]
        },
        whyChoose: 'Why this package?',
        benefits: [
          'Save time: We handle tech + posting',
          'One subscription = full team (devs, marketers, social)',
          'Your channels, no commission fees'
        ]
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
    siteName: 'MrDelivery',
    heroSubtitle: 'Más de 5 años de experiencia de élite en delivery. Alianzas probadas por más de 4 años. El 90% de nuestros clientes llegan por recomendación.',
    tagline: '🚀 Gestión de marketing • Chatbots IA & agentes de voz • Contenido de vídeo viral',
    taglineItems: [
      { emoji: '🚀', text: 'Formación de personal - gestión y marketing' },
      { emoji: '🤖', text: 'Chatbots IA & agentes de voz' },
      { emoji: '🎬', text: 'Contenido de vídeo viral - publicación diaria' }
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
        title: 'Gestión Plataformas Delivery',
        price: '399 €/mes',
        subtitle: 'Negociamos comisiones y presupuestos en Glovo, Uber Eats y Just Eat',
        support: 'Disponible en Rumanía, España y USA',
        badge: 'Gestión Multi-Plataforma',
        negotiation: {
          title: 'Negociación y Presupuestos',
          tagline: 'Ahorra Dinero',
          intro: 'No pierdas más beneficios en comisiones.',
          items: [
            'Comisiones más bajas negociadas directamente',
            'Presupuestos de marketing gratis de las apps',
            'Campañas activadas en máximo 6 horas'
          ]
        },
        menu: {
          title: 'Menú Optimizado',
          tagline: 'Vende Más',
          intro: 'Un menú bien presentado vende más.',
          items: [
            'Actualizaciones diarias para fidelizar clientes',
            'Fotos profesionales con detalles completos',
            'Estructura upselling para subir ticket medio'
          ]
        },
        support_card: {
          title: 'Soporte y Optimización',
          tagline: 'WhatsApp 24/7',
          intro: 'Tu equipo de delivery dedicado en WhatsApp.',
          items: [
            'Zonas de entrega optimizadas',
            'Análisis mensual con insights de crecimiento',
            'Resolución rápida de incidencias'
          ]
        },
        training: {
          title: 'Formación del Personal',
          tagline: 'Equipo Experto',
          intro: 'Tu equipo domina las plataformas.',
          items: [
            'Formación completa: pedidos, tablets, confirmaciones',
            'Gestión de reembolsos y cancelaciones',
            'Mejores prácticas de preparación y empaque',
            'Soporte WhatsApp directo para tu staff'
          ]
        },
        monthlyReports: {
          title: 'Informes mensuales incluidos',
          intro: '5 informes detallados cada mes para crecer tu negocio de delivery con datos reales.',
          items: [
            { icon: 'BarChart3', title: 'Comparativa ingresos', desc: 'Tendencias de crecimiento vs mes anterior' },
            { icon: 'Rocket', title: 'Resultados promociones', desc: 'Impacto de campañas en volumen de pedidos' },
            { icon: 'TrendingUp', title: 'Ventas por app', desc: 'Flujo de pedidos y eficiencia de canales' },
            { icon: 'Users', title: 'Clientes nuevos', desc: 'Nuevos usuarios que descubrieron tu marca' },
            { icon: 'ClipboardList', title: 'Resumen menú', desc: 'Estructura del menú y ofertas activas' }
          ],
          whyImportant: '¿Por qué importa esta gestión?',
          whyDesc: 'Gestionamos activamente tu presencia online: logo, fotos, optimización para maximizar ventas.'
        },
        whyTitle: '¿Por qué elegir este paquete?',
        whyItems: [
          'ROI desde el mes 1 por ahorro en comisiones',
          'Máxima visibilidad en todas las plataformas',
          'Cero complicaciones técnicas para ti'
        ]
      },
      aiAgents: {
        title: 'Asistente Virtual IA',
        price: '399 €/mes',
        originalPrice: '499 €/mes',
        discount: '-25%',
        subtitle: 'Nunca duerme, responde al instante a cada cliente',
        badge: 'Agente IA 24/7',
        phone: {
          title: 'Contesta llamadas',
          tagline: 'Voice AI',
          intro: 'Nunca pierdas un cliente por estar ocupado.',
          items: [
            'Voz natural, habla como humano',
            'Conoce tu menú, precios, ingredientes',
            'Atiende decenas de llamadas a la vez'
          ]
        },
        whatsapp: {
          title: 'Experto WhatsApp',
          tagline: 'Chat AI',
          intro: 'Respuestas instantáneas cuando preguntan.',
          items: [
            'Envía fotos y detalles del menú',
            'Upselling inteligente y ofertas',
            'Disponible 24/7, incluso de noche'
          ]
        },
        reservations: {
          title: 'Reservas automáticas',
          tagline: 'Calendar Sync',
          intro: 'Sin agenda de papel, sin errores humanos.',
          items: [
            'Reserva directamente en Google Calendar',
            'Envía confirmaciones y recordatorios',
            'Clientes reagendan por chat o llamada'
          ]
        },
        benefitsTitle: '¿Por qué Agente IA?',
        benefitsList: [
          'Cero llamadas perdidas',
          'Siempre disponible',
          'Menos estrés para el equipo'
        ]
      },
      video: {
        title: 'Producción Video + Publicación Auto',
        price: '389 €/mes',
        originalPrice: '599 €/mes',
        discount: '-35%',
        subtitle: 'Creamos y publicamos diario en 4 plataformas',
        badge: 'Contenido Video Viral',
        videosTitle: '🎬 16-20 Clips Premium/Mes',
        videoDesc: '16-20 videos mensuales:',
        hook: 'Hook (8s)',
        hookDesc: 'capta atención',
        action: 'Acción (8s)',
        actionDesc: 'muestra concepto',
        cta: 'CTA (8s)',
        ctaDesc: 'impulsa acción',
        veo3: 'Calidad Cinematográfica',
        veo3Desc: 'Visuales de cine con presentadores que dan vida a tu marca',
        format: 'Variedad Creativa',
        formatDesc: 'Retos, entrevistas y clips compartibles',
        presenters: {
          title: 'NUESTROS PRESENTADORES',
          tagline: 'Cero esfuerzo tuyo',
          intro: 'Nuestro equipo profesional crea todo.',
          items: [
            'Equipo de creadores profesional',
            'Presentadores con experiencia',
            'Sin esfuerzo de tu parte'
          ]
        },
        yourFace: {
          title: 'TU CARA COMO MARCA',
          tagline: 'Máxima autenticidad',
          intro: 'Tu cara y voz con tecnología IA VEO3.',
          items: [
            'Conexión personal con tu audiencia',
            'Tecnología IA VEO3',
            'Ideal para dueños auténticos'
          ]
        },
        quality: {
          title: 'Calidad y Creatividad',
          tagline: 'Ambas opciones',
          intro: 'Imagen, sonido y edición premium.',
          items: [
            'Storyboards virales',
            'Retos, entrevistas, interactivos',
            'Ideas que captan atención'
          ]
        },
        robot: {
          title: '🤖 Robot de Publicación Diaria',
          tagline: 'Configura y Olvida',
          intro: 'Paquete mensual para tu aprobación.',
          items: [
            'Publica diario en TikTok, Instagram, Facebook, YouTube',
            'Misma hora óptima cada día',
            'Totalmente automatizado, cero lío'
          ]
        },
        visibility: {
          title: '🚀 Resultados Garantizados',
          tagline: 'Impacto Medible',
          intro: 'Los algoritmos aman la consistencia.',
          items: [
            'Publicación diaria aumenta alcance orgánico',
            'Ve crecimiento en 30 días',
            'Presencia de marca fuerte'
          ]
        },
        formatExamples: {
          label: 'Ejemplos de Formatos'
        },
        included: {
          title: 'Qué Incluye',
          items: [
            '20 videos premium/mes (nuestro equipo o tu cara*)',
            'Ideas creativas y gestión completa',
            'Publicación auto en 4 plataformas tras aprobación'
          ],
          note: '(*) Opción de cara se elige al inicio, incluida en precio.',
          cta: 'Nosotros creamos. Nosotros publicamos. Tú creces.'
        },
        items: [
          '16 conceptos creativos con guión completo',
          'Presentador profesional MrDelivery',
          'Retos interactivos para audiencia',
          'Integración natural de marca + CTA',
          'Formatos diversos: retos, entrevistas',
          'Producción cinematográfica',
          'Contenido optimizado para algoritmos',
          'Entrega en 16:9 y 9:16'
        ],
        examples: 'Burger Challenge, Street Food Confessions, Adivina el Ingrediente, Batalla de Parejas y más'
      },
      ugc: {
        title: 'Tu Marca, Tu Voz: Avatar Digital IA',
        heroTitle: 'Tu Marca, Tu Voz',
        heroSubtitle: 'Crea contenido viral con tu cara y voz en segundos, sin influencers.',
        price: '€199',
        originalPrice: '€299',
        discount: '-35%',
        noSubscription: 'Pago único. Sin suscripción.',
        subtitle: 'Presentador real promociona tu producto. Solo envías foto.',
        badge: 'Creador UGC IA',
        stepsTitle: 'Cómo funciona (4 pasos)',
        stepsDesc: 'Automatizado vía Telegram:',
        step1: 'ABRE',
        step1Desc: 'bot Telegram',
        step2: 'ENVÍA',
        step2Desc: 'foto del producto',
        step3: 'ESPERA',
        step3Desc: '2 minutos',
        step4: 'RECIBE',
        step4Desc: 'video viral 24s listo para publicar',
        benefitsTitle: '¿Por qué AI Video Generator?',
        benefit1Title: 'Rápido',
        benefit1Desc: 'De foto a video en menos de 5 min',
        benefit2Title: 'Barato',
        benefit2Desc: '~€3/video vs influencers caros',
        benefit3Title: 'Fácil',
        benefit3Desc: 'Sin equipo ni estudio',
        benefit4Title: 'Profesional',
        benefit4Desc: 'Presentador real, aspecto natural',
        deliverable: 'Video 24s para TikTok, Reels, Shorts',
        telegramButton: 'EMPIEZA EN TELEGRAM',
        finalCta: 'CREA TU PRIMER VIDEO',
        items: [
          'Presentador real promociona tu producto',
          'Video 24s para TikTok, Reels, Shorts',
          'Entrega en menos de 5 minutos',
          '~€3/video - mucho más barato que influencers',
          'Sin equipo, estudio ni conocimientos',
          'Por Telegram - rápido y simple'
        ],
        examples: 'Showcases de productos, promos de comida, testimonios, unboxings, contenido lifestyle'
      },
      premium: {
        title: 'Negocio en Piloto Automático',
        price: '399 €/mes',
        originalPrice: '699 €/mes',
        discount: '-45%',
        discountNote: 'Ahorra 45% con pack Digitalización + Marketing',
        subtitle: 'Solución completa de ventas online en un paquete.',
        badge: 'Todo Incluido',
        app: {
          title: 'Tu App y Website',
          tagline: 'Tu propia tienda',
          intro: 'Independencia de plataformas y redes.',
          items: [
            'Lanzamiento completo: app Android, iOS + web pedidos',
            'Nosotros manejamos diseño y mantenimiento',
            'Integración con partners de entrega incluida'
          ]
        },
        automation: {
          title: 'Automatización y Fidelización',
          tagline: 'Más ventas repetidas',
          intro: 'Convierte visitantes en clientes fieles.',
          items: [
            'Recopilación automática de datos para ofertas',
            'Promociones automáticas WhatsApp/SMS',
            'Mensaje correcto en momento correcto'
          ]
        },
        social: {
          title: 'Gestión Redes Sociales',
          tagline: 'Visibilidad Máxima',
          intro: 'Presencia diaria donde están tus clientes.',
          items: [
            'Contenido viral TikTok, Instagram, Facebook',
            'Estrategia de crecimiento, no solo publicar',
            'Optimización continua para resultados'
          ]
        },
        whyChoose: '¿Por qué este paquete?',
        benefits: [
          'Ahorra tiempo: Manejamos tech + publicaciones',
          'Una suscripción = equipo completo (devs, marketers, social)',
          'Tus canales, sin comisiones a terceros'
        ]
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
    siteName: 'MrDelivery',
    heroSubtitle: 'Peste 5 ani de expertiză în livrări. Parteneriate de peste 4 ani. 90% dintre clienții noștri vin prin recomandări.',
    tagline: '🚀 Management marketing • Chatboți AI & agenți vocali • Conținut video viral',
    taglineItems: [
      { emoji: '🚀', text: 'Instruire personal - management și marketing' },
      { emoji: '🤖', text: 'Chatboți AI & agenți vocali' },
      { emoji: '🎬', text: 'Conținut video viral - postări zilnice' }
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
        title: 'Management Platforme de Livrare',
        price: '1.500 RON/lună',
        subtitle: 'Negociem comisioanele și bugetele pentru tine pe Glovo, Wolt și Bolt Food',
        support: 'Disponibil pentru România, Spania și USA',
        badge: 'Management Multi-Platformă',
        negotiation: {
          title: 'Negociere Comisioane și Bugete',
          tagline: 'Economisești Bani',
          intro: 'Nu lăsa profitul tău să dispară în comisioane uriașe.',
          items: [
            'Comisioane mai mici: Negociem direct cu platformele (Glovo, Wolt, Bolt) pentru a obține cele mai bune taxe pentru tine.',
            'Bugete de Marketing Cadou: Obținem bugete de campanie susținute direct de platforme, ca să primești clienți noi pe banii lor.',
            'Viteză de Reacție: Activăm orice campanie promoțională în maxim 6 ore de la decizie.'
          ]
        },
        menu: {
          title: 'Meniu Optimizat pentru Vânzare',
          tagline: 'Vinzi Mai Mult',
          intro: 'Un meniu care arată bine, vinde mai mult.',
          items: [
            'Meniul Zilei: Îl actualizăm zilnic pentru tine, ca să păstrezi clienții fideli și curioși.',
            'Poze și Detalii Profesionale: Prezentăm produsele cu imagini corecte și informații complete (alergeni, ingrediente).',
            'Vânzări Suplimentare (Upsell): Structurăm meniul astfel încât clienții să adauge mereu un suc, un sos sau un desert în coș.'
          ]
        },
        support_card: {
          title: 'Suport și Optimizare',
          tagline: 'WhatsApp 24/7',
          intro: 'Suntem „departamentul tău de livrări" disponibil oricând pe WhatsApp.',
          items: [
            'Eficientizarea Livrării: Optimizăm razele de livrare (pentru livrare proprie) ca să ajungi la clienți rapid și ieftin.',
            'Analiză lunară: Îți arătăm exact cât ai vândut și cum putem crește comanda medie.',
            'Rezolvare Probleme: Orice incident cu o comandă sau cu platforma se rezolvă rapid prin suportul nostru dedicat.'
          ]
        },
        training: {
          title: 'Training Staff și Management',
          tagline: 'Echipă Instruită',
          intro: 'Echipa ta învață să utilizeze platformele de livrare ca un profesionist.',
          items: [
            'Instruire Completă: Învățăm personalul tău să folosească Glovo, Wolt și Bolt Food eficient - comenzi, tablete, confirmări.',
            'Probleme Comenzi: Învață să gestioneze produse lipsă, comenzi anulate, cereri de refund - totul rezolvat rapid.',
            'Best Practices: Sfaturi și trucuri pentru reducerea timpului de preparare, îmbunătățirea ambalajului și evitarea recenziilor negative.',
            'Suport Continuu: Echipa are acces direct la noi pe WhatsApp pentru orice întrebare sau problemă.'
          ]
        },
        monthlyReports: {
          title: 'Ce primești lunar',
          intro: '5 rapoarte detaliate lunar pentru a-ți crește afacerea de delivery cu decizii bazate pe date.',
          items: [
            { icon: 'BarChart3', title: 'Comparație încasări', desc: 'Tendințe de creștere vs luna anterioară' },
            { icon: 'Rocket', title: 'Rezultate promoții', desc: 'Impact campanii asupra volumului de comenzi' },
            { icon: 'TrendingUp', title: 'Vânzări pe aplicații', desc: 'Flux comenzi și eficiență canale' },
            { icon: 'Users', title: 'Clienți noi', desc: 'Utilizatori noi care au descoperit brandul' },
            { icon: 'ClipboardList', title: 'Rezumat meniu', desc: 'Structura meniului și oferte active' }
          ],
          whyImportant: 'De ce contează acest management?',
          whyDesc: 'Gestionăm activ prezența ta online: logo, poze, optimizare pentru a maximiza vânzările.'
        },
        whyTitle: 'De ce să alegi acest pachet?',
        whyItems: [
          'ROI din luna 1 prin economii la comisioane',
          'Vizibilitate maximă pe toate platformele',
          'Zero bătăi de cap tehnice pentru tine'
        ]
      },
      aiAgents: {
        title: 'Asistent Virtual AI',
        price: '1.500 RON/lună',
        originalPrice: '2.000 RON/lună',
        discount: '-25%',
        subtitle: 'Nu doarme niciodată, răspunde instant oricărui client',
        badge: 'Agent AI 24/7',
        phone: {
          title: 'Răspunde la telefon',
          tagline: 'Voice AI',
          intro: 'Nu mai pierzi clienți când ești ocupat.',
          items: [
            'Voce naturală, vorbește ca un om',
            'Știe meniul, prețurile, ingredientele',
            'Preia zeci de apeluri simultan'
          ]
        },
        whatsapp: {
          title: 'Expert WhatsApp',
          tagline: 'Chat AI',
          intro: 'Răspunsuri instant când întreabă.',
          items: [
            'Trimite poze și detalii din meniu',
            'Upselling inteligent și oferte',
            'Disponibil 24/7, chiar și noaptea'
          ]
        },
        reservations: {
          title: 'Rezervări automate',
          tagline: 'Calendar Sync',
          intro: 'Fără agendă de hârtie, fără erori.',
          items: [
            'Rezervă direct în Google Calendar',
            'Trimite confirmări și reminder-uri',
            'Clienții reprogramează prin chat'
          ]
        },
        benefitsTitle: 'De ce Agent AI?',
        benefitsList: [
          'Zero apeluri pierdute',
          'Mereu disponibil',
          'Mai puțin stres pentru echipă'
        ]
      },
      video: {
        title: 'Producție Video & Postare Automată',
        price: '1.625 RON/lună',
        originalPrice: '2.500 RON/lună',
        discount: '-35%',
        subtitle: 'Noi creăm, noi postăm. Afacerea ta crește zilnic pe 4 platforme simultan',
        badge: 'Conținut Video Viral',
        videosTitle: '🎬 16-20 Clipuri Premium / Lună',
        videoDesc: '16-20 Videoclipuri/Lună:',
        hook: 'Hook (8s)',
        hookDesc: 'captează atenția instant',
        action: 'Action (8s)',
        actionDesc: 'prezintă conceptul',
        cta: 'CTA (8s)',
        ctaDesc: 'call-to-action puternic',
        veo3: 'Calitate Cinematografică',
        veo3Desc: 'Imagine și sunet la standarde de cinema, cu prezentatori care dau viață brandului tău',
        format: 'Creativitate Continuă',
        formatDesc: 'Provocări, interviuri și clipuri interactive care fac oamenii să dea Share',
        presenters: {
          title: 'PREZENTATORII NOȘTRI',
          tagline: 'Implicare zero din partea ta',
          intro: 'Facem totul noi. Echipa noastră de creatori și prezentatori profesionali aduc viață brandului tău.',
          items: [
            'Echipă profesionistă de creatori',
            'Prezentatori cu experiență',
            'Fără niciun efort din partea ta'
          ]
        },
        yourFace: {
          title: 'TU EȘTI FAȚA BRANDULUI',
          tagline: 'Maximă autenticitate',
          intro: 'Folosim chipul și vocea ta. Tehnologie AI (VEO3) de ultimă oră pentru videoclipuri cinematografice.',
          items: [
            'Conexiune personală cu publicul',
            'Tehnologie VEO3 de ultimă oră',
            'Ideal pentru proprietari autentici'
          ]
        },
        quality: {
          title: 'Calitate & Creativitate',
          tagline: 'Pentru ambele opțiuni',
          intro: 'Calitate Cinematografică: Imagine, sunet și editare premium.',
          items: [
            'Storyboard-uri creative și virale',
            'Challenge-uri, interviuri, clipuri interactive',
            'Idei care captează atenția'
          ]
        },
        robot: {
          title: '🤖 Robot de Postare Zilnică (Cu Aprobarea Ta)',
          tagline: 'Set & Forget',
          intro: 'Predare & Aprobare: La sfârșitul lunii, primești întregul pachet de videoclipuri pentru revizuire și aprobare finală.',
          items: [
            '4 Platforme Simultane: Postează zilnic pe TikTok, Instagram Reels, Facebook Reels, YouTube Shorts.',
            'Consecvență Perfectă: La aceeași oră optimă, în fiecare zi.',
            'Complet Hands-Off: Nicio gestionare manuală, fără login-uri, fără bătăi de cap.'
          ]
        },
        visibility: {
          title: '🚀 Rezultate Garantate',
          tagline: 'Impact Măsurabil',
          intro: 'Împrietenește-te cu Algoritmul: Algoritmii social media adoră consecvența.',
          items: [
            'Prietenia Algoritmului: Consecvența zilnică îți mărește vizibilitatea organică semnificativ.',
            'Impact Măsurabil: Vezi creșteri în vizualizări, urmăritori și angajament în primele 30 de zile.',
            'Branding Puternic: Prezența constantă te menține în mintea clienților.'
          ]
        },
        formatExamples: {
          label: 'Exemple de Formate'
        },
        included: {
          title: 'Ce este inclus',
          items: [
            '20 videoclipuri premium/lună (cu prezentatorii noștri SAU cu chipul și vocea ta*)',
            'Idei creative și managementul complet al conținutului',
            'Postare automată pe 4 rețele de social media, după aprobarea ta'
          ],
          note: '(*) Opțiunea cu chipul și vocea proprietarului se selectează la începutul colaborării și este inclusă în preț.',
          cta: 'Finalizează-ți prezența online. Noi facem videoclipurile și postările. Tu primești rezultatele.'
        },
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
        price: '499 RON',
        originalPrice: '750 RON',
        discount: '-35%',
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
        title: 'Afacere pe Pilot Automat',
        price: '1.375 RON/lună',
        originalPrice: '2.500 RON/lună',
        discount: '-45%',
        discountNote: 'Economisești 45% activând pachetele 1 și 2 împreună',
        subtitle: 'Tot ce ai nevoie pentru a vinde online, într-o singură soluție completă.',
        badge: 'Pachet All-Inclusive',
        app: {
          title: 'Aplicația Ta Mobilă și Website',
          tagline: 'Propriul tău magazin',
          intro: 'Nu mai depinde doar de platformele de livrare sau rețelele sociale.',
          items: [
            'Lansare Completă: Creăm, testăm și lansăm aplicația ta de Android & iOS și website-ul de comenzi.',
            'Fără Griji: Ne ocupăm noi de tot, de la design la mentenanță tehnică.',
            'Livrare Inteligentă: Integrare cu parteneri de livrare (nu trebuie să angajezi tu curieri).'
          ]
        },
        automation: {
          title: 'Automatizare și Fidelizare',
          tagline: 'Vinde mai mult clienților actuali',
          intro: 'Transformă vizitatorii ocazionali în clienți fideli care revin.',
          items: [
            'Bază de Date: Colectăm automat datele clienților tăi pentru a le putea trimite oferte.',
            'Mesaje Directe: Trimite notificări automate și promoții prin WhatsApp sau SMS.',
            'Marketing Personalizat: Mesaje potrivite trimise la momentul potrivit.'
          ]
        },
        social: {
          title: 'Management Social Media',
          tagline: 'Vizibilitate Maximă',
          intro: 'Fii prezent acolo unde sunt clienții tăi, în fiecare zi.',
          items: [
            'Conținut Viral: Postări și clipuri create special pentru TikTok, Instagram și Facebook.',
            'Strategie de Creștere: Nu doar postăm, ci aducem oameni noi care să interacționeze cu brandul tău.',
            'Monitorizare: Analizăm ce funcționează și optimizăm constant pentru rezultate mai bune.'
          ]
        },
        whyChoose: 'De ce să alegi acest pachet?',
        benefits: [
          'Economisești timp: Noi ne ocupăm de tehnologie și postări, tu te ocupi de afacere.',
          'Costuri reduse: Primești o întreagă echipă (Developeri, Marketeri, Social Media) la prețul unui singur abonament.',
          'Control Total: Ai propriile tale canale de vânzare, fără comisioane uriașe către terți.'
        ]
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

// Franchise Manual translations (separate for cleaner organization)
export const franchiseManualTranslations = {
  en: {
    version: 'Franchise Manual Version 3.0',
    heroTitle: 'TURNKEY AI BUSINESS COMPLETELY AUTOMATED',
    heroDescription: 'No office. No employees at the start. Invest €5,000 and operate a digital empire from anywhere in the world.',
    roiGuarantee: '30 Day ROI Guarantee',
    applyCta: 'Apply for Franchise',
    contactTeam: 'CONTACT TEAM',
    sections: {
      vision: {
        title: 'VISION & PROBLEM',
        problem: 'The Problem:',
        problemDesc: '95% of restaurants and local businesses suffer digitally.',
        problemItems: [
          'Huge commissions (30-35%) on Uber Eats/DoorDash/Grubhub.',
          'Lack of video visibility (TikTok/Reels).',
          'Missed calls = lost money.'
        ],
        solution: 'The MrDelivery Solution:',
        solutionDesc: 'You offer them a complete "digital department". You sell the solution, we handle 100% of the technical delivery.'
      },
      robot: {
        title: 'THE ENGINE: SALES ROBOT',
        intro: 'While others cold call, your AI robot works 24/7:',
        steps: [
          { title: 'Scans:', desc: 'Google Maps in your exclusive territory.' },
          { title: 'Extracts:', desc: 'Email, Phone, WhatsApp of business owners.' },
          { title: 'Contacts:', desc: 'Sends 300 messages/day automatically.' },
          { title: 'Schedules:', desc: 'Books demos directly in your calendar.' }
        ]
      },
      income: {
        title: '5 INCOME SOURCES',
        packages: [
          {
            name: '1. Delivery Platform Management',
            target: 'For Restaurants (Uber Eats, DoorDash, Grubhub)',
            price: '€300/month',
            net: 'Net: €273',
            desc: 'Commission negotiation, menu optimization.'
          },
          {
            name: '2. Premium Video Production',
            target: 'For any business (TikTok/Reels)',
            price: '€500/month',
            net: 'Net: €455',
            desc: '20 Videos/month, AI Avatar, Auto-posting.'
          },
          {
            name: '3. 24/7 AI Virtual Assistant',
            target: '',
            price: '€400/month',
            net: 'Net: €364',
            desc: 'Answers phone, makes WhatsApp reservations.'
          },
          {
            name: '4. All-Inclusive Digital Suite',
            target: '',
            price: '€350/month',
            net: 'Net: €318',
            desc: 'Own App + Order Website + Marketing.',
            bestseller: true
          },
          {
            name: '5. AI Video Generator',
            target: '',
            price: '€100 (one-time)',
            net: 'Net: €91',
            desc: 'Quick upsell product. Photo to Video in 2 min.'
          }
        ]
      },
      financial: {
        title: 'FINANCIAL MODEL',
        intro: 'You keep 91% of revenues.',
        phases: [
          { name: 'PHASE 1: Solo (Months 1-6)', clients: '10-12', profit: '~€5,780/month' },
          { name: 'PHASE 2: Team (Months 7-12)', clients: '20', profit: '~€10,160/month' },
          { name: 'PHASE 3: Empire (Month 13+)', clients: '30+', profit: '€15,000+/month' }
        ],
        clientsLabel: 'Clients:',
        profitLabel: 'Net Profit:'
      },
      launch: {
        title: 'LAUNCH IN 30 DAYS',
        timeline: [
          { title: 'Days 1-3: Foundation', desc: 'Contract signing, Platform access, Workstation setup.' },
          { title: 'Days 4-10: Bot Activation', desc: 'Robot starts sending 250 messages/day. First demos appear in calendar.' },
          { title: 'Days 11-30: First Money', desc: 'Close 4-6 clients. Recover your €5,000 investment. If not, you get extended free support.' }
        ]
      },
      license: {
        title: 'WHAT THE LICENSE INCLUDES',
        items: [
          'Exclusive Territory',
          'AI Sales Robot Setup',
          'Contracts & GDPR Legal',
          'Video Academy Training',
          'Personal Coach (90 days)'
        ],
        costLabel: 'One-Time License Cost',
        cost: '€5,000'
      }
    }
  },
  es: {
    version: 'Manual de Franquicia Versión 3.0',
    heroTitle: 'NEGOCIO IA LLAVE EN MANO COMPLETAMENTE AUTOMATIZADO',
    heroDescription: 'Sin oficina. Sin empleados al inicio. Invierte €5.000 y opera un imperio digital desde cualquier parte del mundo.',
    roiGuarantee: 'Garantía ROI 30 Días',
    applyCta: 'Solicitar Franquicia',
    contactTeam: 'CONTACTAR EQUIPO',
    sections: {
      vision: {
        title: 'VISIÓN Y PROBLEMA',
        problem: 'El Problema:',
        problemDesc: 'El 95% de los restaurantes y negocios locales sufren digitalmente.',
        problemItems: [
          'Comisiones enormes (30-35%) en Glovo/Uber Eats/Just Eat.',
          'Falta de visibilidad en video (TikTok/Reels).',
          'Llamadas perdidas = dinero perdido.'
        ],
        solution: 'La Solución MrDelivery:',
        solutionDesc: 'Tú les ofreces un "departamento digital" completo. Tú vendes la solución, nosotros nos encargamos del 100% de la entrega técnica.'
      },
      robot: {
        title: 'EL MOTOR: ROBOT DE VENTAS',
        intro: 'Mientras otros llaman en frío, tu robot IA trabaja 24/7:',
        steps: [
          { title: 'Escanea:', desc: 'Google Maps en tu territorio exclusivo.' },
          { title: 'Extrae:', desc: 'Email, Teléfono, WhatsApp de dueños de negocios.' },
          { title: 'Contacta:', desc: 'Envía 300 mensajes/día automáticamente.' },
          { title: 'Programa:', desc: 'Reserva demos directamente en tu calendario.' }
        ]
      },
      income: {
        title: '5 FUENTES DE INGRESO',
        packages: [
          {
            name: '1. Gestión Plataformas Delivery',
            target: 'Para Restaurantes (Glovo, Uber Eats, Just Eat)',
            price: '€300/mes',
            net: 'Neto: €273',
            desc: 'Negociación comisiones, optimización menús.'
          },
          {
            name: '2. Producción Video Premium',
            target: 'Para cualquier negocio (TikTok/Reels)',
            price: '€500/mes',
            net: 'Neto: €455',
            desc: '20 Videos/mes, Avatar IA, Auto-publicación.'
          },
          {
            name: '3. Asistente Virtual IA 24/7',
            target: '',
            price: '€400/mes',
            net: 'Neto: €364',
            desc: 'Responde llamadas, hace reservas por WhatsApp.'
          },
          {
            name: '4. Suite Digital Todo Incluido',
            target: '',
            price: '€350/mes',
            net: 'Neto: €318',
            desc: 'App propia + Web de Pedidos + Marketing.',
            bestseller: true
          },
          {
            name: '5. Generador Video IA',
            target: '',
            price: '€100 (único)',
            net: 'Neto: €91',
            desc: 'Producto rápido de upsell. Foto a Video en 2 min.'
          }
        ]
      },
      financial: {
        title: 'MODELO FINANCIERO',
        intro: 'Te quedas con el 91% de los ingresos.',
        phases: [
          { name: 'FASE 1: Solo (Meses 1-6)', clients: '10-12', profit: '~€5.780/mes' },
          { name: 'FASE 2: Equipo (Meses 7-12)', clients: '20', profit: '~€10.160/mes' },
          { name: 'FASE 3: Imperio (Mes 13+)', clients: '30+', profit: '€15.000+/mes' }
        ],
        clientsLabel: 'Clientes:',
        profitLabel: 'Beneficio Neto:'
      },
      launch: {
        title: 'LANZAMIENTO EN 30 DÍAS',
        timeline: [
          { title: 'Días 1-3: Fundación', desc: 'Firma contrato, Acceso Plataforma, Configuración puesto de trabajo.' },
          { title: 'Días 4-10: Activación Bot', desc: 'Robot empieza a enviar 250 mensajes/día. Primeras demos aparecen en calendario.' },
          { title: 'Días 11-30: Primeros Ingresos', desc: 'Cierras 4-6 clientes. Recuperas tu inversión de €5.000. Si no, recibes soporte extendido gratis.' }
        ]
      },
      license: {
        title: 'QUÉ INCLUYE LA LICENCIA',
        items: [
          'Territorio Exclusivo',
          'Configuración Robot IA Ventas',
          'Contratos & Legal GDPR',
          'Formación Academia Video',
          'Coach Personal (90 días)'
        ],
        costLabel: 'Coste Único Licencia',
        cost: '€5.000'
      }
    }
  },
  ro: {
    version: 'Manual Franciză Versiunea 3.0',
    heroTitle: 'BUSINESS AI LA CHEIE COMPLET AUTOMATIZAT',
    heroDescription: 'Fără birou. Fără angajați la început. Investește €5.000 și operează un imperiu digital de oriunde din lume.',
    roiGuarantee: 'Garanție ROI 30 Zile',
    applyCta: 'Aplică pentru Franciză',
    contactTeam: 'CONTACTEAZĂ ECHIPA',
    sections: {
      vision: {
        title: 'VIZIUNEA & PROBLEMA',
        problem: 'Problema:',
        problemDesc: '95% dintre restaurante și afacerile locale suferă digital.',
        problemItems: [
          'Comisioane uriașe (30-35%) la Glovo/Tazz/Uber.',
          'Lipsă de vizibilitate video (TikTok/Reels).',
          'Apeluri pierdute = bani pierduți.'
        ],
        solution: 'Soluția MrDelivery:',
        solutionDesc: 'Tu le oferi un "departament digital" complet. Tu vinzi soluția, noi ne ocupăm de livrarea tehnică 100%.'
      },
      robot: {
        title: 'MOTORUL: ROBOTUL DE VÂNZĂRI',
        intro: 'În timp ce alții sună "la rece", robotul tău AI muncește 24/7:',
        steps: [
          { title: 'Scanează:', desc: 'Google Maps în teritoriul tău exclusiv.' },
          { title: 'Extrage:', desc: 'Email, Telefon, WhatsApp-ul patronilor.' },
          { title: 'Contactează:', desc: 'Trimite 300 mesaje/zi automat.' },
          { title: 'Programează:', desc: 'Îți pune Demo-uri direct în calendar.' }
        ]
      },
      income: {
        title: 'CELE 5 SURSE DE VENIT',
        packages: [
          {
            name: '1. Management Platforme Livrare',
            target: 'Pentru Restaurante (Glovo, Tazz, Bolt)',
            price: '€300/lună',
            net: 'Net: €273',
            desc: 'Negociere comisioane, optimizare meniuri.'
          },
          {
            name: '2. Producție Video Premium',
            target: 'Pentru orice afacere (TikTok/Reels)',
            price: '€500/lună',
            net: 'Net: €455',
            desc: '20 Video-uri/lună, Avatar AI, Postare automată.'
          },
          {
            name: '3. Asistent Virtual AI 24/7',
            target: '',
            price: '€400/lună',
            net: 'Net: €364',
            desc: 'Răspunde la telefon, face rezervări pe WhatsApp.'
          },
          {
            name: '4. Suită Digitală All-Inclusive',
            target: '',
            price: '€350/lună',
            net: 'Net: €318',
            desc: 'Aplicație proprie + Site Comenzi + Marketing.',
            bestseller: true
          },
          {
            name: '5. Generator Video AI',
            target: '',
            price: '€100 (one-time)',
            net: 'Net: €91',
            desc: 'Produs rapid de upsell. Poză în Video în 2 min.'
          }
        ]
      },
      financial: {
        title: 'MODEL FINANCIAR',
        intro: 'Tu păstrezi 91% din venituri.',
        phases: [
          { name: 'FAZA 1: Solo (Lunile 1-6)', clients: '10-12', profit: '~€5.780/lună' },
          { name: 'FAZA 2: Echipă (Lunile 7-12)', clients: '20', profit: '~€10.160/lună' },
          { name: 'FAZA 3: Imperiu (Luna 13+)', clients: '30+', profit: '€15.000+/lună' }
        ],
        clientsLabel: 'Clienți:',
        profitLabel: 'Profit Net:'
      },
      launch: {
        title: 'LANSARE ÎN 30 ZILE',
        timeline: [
          { title: 'Zilele 1-3: Fundația', desc: 'Semnare contract, acces Platformă, Configurare stație de lucru.' },
          { title: 'Zilele 4-10: Activare Bot', desc: 'Robotul începe trimiterea a 250 mesaje/zi. Primele demo-uri apar în calendar.' },
          { title: 'Zilele 11-30: Primii Bani', desc: 'Închizi 4-6 clienți. Recuperezi investiția de €5.000. Dacă nu, primești suport gratuit extins.' }
        ]
      },
      license: {
        title: 'CE INCLUDE LICENȚA',
        items: [
          'Teritoriu Exclusiv',
          'Configurare Robot AI Vânzări',
          'Contracte & Legal GDPR',
          'Training Academie Video',
          'Coach Personal (90 zile)'
        ],
        costLabel: 'Cost Unic Licență',
        cost: '€5.000'
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
