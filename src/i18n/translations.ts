export type Language = 'en' | 'es' | 'ro';

export const translations = {
  en: {
    siteName: 'MrDelivery',
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
        subtitle: 'We negotiate commissions and budgets for you on Uber Eats, DoorDash & Grubhub',
        support: 'Available for Romania, Spain & USA',
        badge: 'Multi-Platform Management',
        negotiation: {
          title: 'Negotiation & Budgets',
          tagline: 'Save Money',
          intro: "Don't let your profit disappear in huge commissions.",
          items: [
            'Lower Commissions: We negotiate directly with platforms (Uber Eats, DoorDash, Grubhub) to get the best rates for you.',
            'Free Marketing Budgets: We obtain campaign budgets supported directly by platforms, so you get new customers on their money.',
            'Fast Reaction: We activate any promotional campaign within 6 hours of decision.'
          ]
        },
        menu: {
          title: 'Active Menu',
          tagline: 'Sell More',
          intro: 'A menu that looks good, sells more.',
          items: [
            'Daily Menu: We update it daily for you, to keep customers loyal and curious.',
            'Professional Photos & Details: We present products with correct images and complete information (allergens, ingredients).',
            'Upselling: We structure the menu so customers always add a drink, sauce or dessert to their cart.'
          ]
        },
        support_card: {
          title: 'Support & Optimization',
          tagline: '24/7 WhatsApp',
          intro: 'We are your "delivery department" available anytime on WhatsApp.',
          items: [
            'Delivery Efficiency: We optimize delivery radius (for own delivery) to reach customers fast and cheap.',
            'Monthly Analysis: We show you exactly how much you sold and how we can increase the average order.',
            'Problem Solving: Any incident with an order or platform is resolved quickly through our dedicated support.'
          ]
        },
        training: {
          title: 'Staff Training & Management',
          tagline: 'Trained Team',
          intro: 'Your team learns to use delivery platforms like a pro.',
          items: [
            'Complete Training: We teach your staff to use Uber Eats, DoorDash & Grubhub efficiently - orders, tablets, confirmations.',
            'Order Issues: They learn to handle missing items, canceled orders, refund requests - everything solved fast.',
            'Best Practices: Tips & tricks for reducing prep time, improving packaging, and avoiding bad reviews.',
            'Continuous Support: The team has direct access to us on WhatsApp for any questions or issues.'
          ]
        },
        whyTitle: 'Why do you need this management?',
        whyItems: [
          'Recover Investment: By simply negotiating commissions, our package can pay for itself from the first month.',
          'Maximum Visibility: We put you on the front line of delivery platforms, exactly where hungry customers are looking.',
          'No Technical Headaches: You no longer need to enter tablets or complex control panels.'
        ]
      },
      aiAgents: {
        title: 'Intelligent Virtual Assistant',
        price: '$399/month',
        originalPrice: '$499/month',
        discount: '25% OFF',
        subtitle: 'Your ideal employee: Never sleeps and responds instantly to any customer',
        badge: '24/7 Conversational AI Agent',
        phone: {
          title: 'Answers Your Phone',
          tagline: 'Voice AI',
          intro: 'Never lose a customer because you were busy in the kitchen or in a meeting.',
          items: [
            'Natural Voice: Speaks fluently in English, just like a human.',
            'Expert in Your Business: Knows everything about your menu, prices, ingredients or services.',
            'No Missed Calls: Can handle dozens of calls simultaneously, 24/7.'
          ]
        },
        whatsapp: {
          title: 'WhatsApp Expert',
          tagline: 'Chat AI',
          intro: 'Customers want answers NOW. AI gives them instantly.',
          items: [
            'Digital Menu: Sends photos and product details directly on WhatsApp.',
            'Active Selling: Recommends products and presents special offers intelligently.',
            'Total Availability: Responds instantly, even in the middle of the night.'
          ]
        },
        reservations: {
          title: 'Automatic Reservations',
          tagline: 'Calendar Sync',
          intro: 'Forget the paper agenda and human errors.',
          items: [
            'Direct Scheduling: Checks availability and puts the reservation directly in Google Calendar.',
            'Confirmations & Reminders: Automatically sends messages to customers to ensure they show up.',
            'Simple Management: Customers can cancel or move the reservation themselves, via chat or phone.'
          ]
        },
        benefitsTitle: 'Why do you need an AI Agent?',
        benefitsList: [
          'Zero missed calls',
          '24/7 availability',
          'Less stress for the team'
        ]
      },
      video: {
        title: 'Video Production & Automatic Posting',
        price: '$399/month',
        originalPrice: '$599/month',
        discount: '35% OFF',
        subtitle: 'We create, we post. Your business grows daily on 4 platforms simultaneously',
        badge: 'Viral Video Content',
        videosTitle: '🎬 16-20 Premium Clips / Month',
        videoDesc: '16-20 Videoclips/Month:',
        hook: 'Hook (8s)',
        hookDesc: 'captures attention instantly',
        action: 'Action (8s)',
        actionDesc: 'presents the concept',
        cta: 'CTA (8s)',
        ctaDesc: 'powerful call-to-action',
        veo3: 'Cinematic Quality',
        veo3Desc: 'Image and sound at cinema standards, with presenters that bring your brand to life',
        format: 'Creative Variety',
        formatDesc: 'Challenges, interviews and interactive clips that make people share',
        presenters: {
          title: 'OUR PRESENTERS',
          tagline: 'Zero effort from you',
          intro: 'We do everything. Our team of professional creators and presenters bring your brand to life.',
          items: [
            'Professional team of creators',
            'Experienced presenters',
            'No effort required from you'
          ]
        },
        yourFace: {
          title: 'YOU ARE THE BRAND FACE',
          tagline: 'Maximum authenticity',
          intro: 'We use your face and voice. Cutting-edge AI technology (VEO3) for cinematic videos.',
          items: [
            'Personal connection with audience',
            'Cutting-edge VEO3 technology',
            'Ideal for authentic owners'
          ]
        },
        quality: {
          title: 'Quality & Creativity',
          tagline: 'For both options',
          intro: 'Cinematic Quality: Premium image, sound and editing.',
          items: [
            'Creative and viral storyboards',
            'Challenges, interviews, interactive clips',
            'Ideas that capture attention'
          ]
        },
        robot: {
          title: '🤖 Daily Posting Robot (With Your Approval)',
          tagline: 'Set & Forget',
          intro: 'Delivery & Approval: At the end of the month, you receive the entire video package for review and final approval.',
          items: [
            '4 Platforms Simultaneously: Posts daily on TikTok, Instagram Reels, Facebook Reels, YouTube Shorts.',
            'Perfect Consistency: At the same optimal time, every day.',
            'Completely Hands-Off: No manual management, no logins, no headaches.'
          ]
        },
        visibility: {
          title: '🚀 Guaranteed Results',
          tagline: 'Measurable Impact',
          intro: 'Make friends with the Algorithm: Social media algorithms love consistency.',
          items: [
            'Algorithm Friendship: Daily consistency significantly increases your organic visibility.',
            'Measurable Impact: See increases in views, followers and engagement in the first 30 days.',
            'Strong Branding: Constant presence keeps you in customers minds.'
          ]
        },
        formatExamples: {
          label: 'Format Examples'
        },
        included: {
          title: "What's Included",
          items: [
            '20 premium videos/month (with our presenters OR with your face and voice*)',
            'Creative ideas and complete content management',
            'Automatic posting on 4 social networks, after your approval'
          ],
          note: "(*) The option with owner's face and voice is selected at the start of collaboration and is included in the price.",
          cta: 'Complete your online presence. We make the videos and posts. You get the results.'
        },
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
        price: '$199',
        originalPrice: '$299',
        discount: '35% OFF',
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
        title: 'Business on Autopilot',
        price: '$399/month',
        originalPrice: '$699/month',
        discount: '45% OFF',
        discountNote: 'Save 45% by activating Digitalization and Marketing packages together',
        subtitle: 'Everything you need to sell online, in one complete solution.',
        badge: 'All-Inclusive Package',
        app: {
          title: 'Your Mobile App & Website',
          tagline: 'Your own store',
          intro: "Don't depend only on delivery platforms or social media.",
          items: [
            'Complete Launch: We create, test and launch your Android & iOS app and ordering website.',
            'Worry-Free: We handle everything, from design to technical maintenance.',
            'Smart Delivery: Integration with delivery partners (no need to hire your own couriers).'
          ]
        },
        automation: {
          title: 'Automation & Loyalty',
          tagline: 'Sell more to existing customers',
          intro: 'Turn occasional visitors into loyal customers who return.',
          items: [
            'Database: We automatically collect customer data to send them offers.',
            'Direct Messages: Send automatic notifications and promotions via WhatsApp or SMS.',
            'Personalized Marketing: Right messages sent at the right time.'
          ]
        },
        social: {
          title: 'Social Media Management',
          tagline: 'Maximum Visibility',
          intro: 'Be present where your customers are, every day.',
          items: [
            'Viral Content: Posts and videos created especially for TikTok, Instagram and Facebook.',
            'Growth Strategy: We don\'t just post, we bring new people to interact with your brand.',
            'Monitoring: We analyze what works and constantly optimize for better results.'
          ]
        },
        whyChoose: 'Why choose this package?',
        benefits: [
          'Save time: We handle technology and posting, you focus on your business.',
          'Reduced costs: Get an entire team (Developers, Marketers, Social Media) for the price of one subscription.',
          'Total Control: Have your own sales channels, without huge commissions to third parties.'
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
        title: 'Gestión de Plataformas de Entrega',
        price: '399 €/mes',
        subtitle: 'Negociamos comisiones y presupuestos para ti en Glovo, Uber Eats & Just Eat',
        support: 'Disponible para Rumanía, España y USA',
        badge: 'Gestión Multi-Plataforma',
        negotiation: {
          title: 'Negociación y Presupuestos',
          tagline: 'Ahorra Dinero',
          intro: 'No dejes que tu beneficio desaparezca en comisiones enormes.',
          items: [
            'Comisiones más Bajas: Negociamos directamente con las plataformas (Glovo, Uber Eats, Just Eat) para obtener las mejores tarifas para ti.',
            'Presupuestos de Marketing Gratis: Obtenemos presupuestos de campaña apoyados directamente por las plataformas, para que consigas nuevos clientes con su dinero.',
            'Reacción Rápida: Activamos cualquier campaña promocional en un máximo de 6 horas desde la decisión.'
          ]
        },
        menu: {
          title: 'Menú Activo',
          tagline: 'Vende Más',
          intro: 'Un menú que se ve bien, vende más.',
          items: [
            'Menú del Día: Lo actualizamos diariamente para ti, para mantener a los clientes fieles y curiosos.',
            'Fotos y Detalles Profesionales: Presentamos los productos con imágenes correctas e información completa (alérgenos, ingredientes).',
            'Upselling: Estructuramos el menú para que los clientes siempre añadan una bebida, salsa o postre al carrito.'
          ]
        },
        support_card: {
          title: 'Soporte y Optimización',
          tagline: 'WhatsApp 24/7',
          intro: 'Somos tu "departamento de entregas" disponible en cualquier momento por WhatsApp.',
          items: [
            'Eficiencia de Entrega: Optimizamos el radio de entrega (para entrega propia) para llegar a los clientes rápido y barato.',
            'Análisis Mensual: Te mostramos exactamente cuánto has vendido y cómo podemos aumentar el pedido medio.',
            'Resolución de Problemas: Cualquier incidente con un pedido o plataforma se resuelve rápidamente a través de nuestro soporte dedicado.'
          ]
        },
        training: {
          title: 'Formación de Personal y Gestión',
          tagline: 'Equipo Formado',
          intro: 'Tu equipo aprende a usar las plataformas de entrega como un profesional.',
          items: [
            'Formación Completa: Enseñamos a tu personal a usar Glovo, Uber Eats y Just Eat eficientemente - pedidos, tablets, confirmaciones.',
            'Problemas de Pedidos: Aprenden a gestionar artículos faltantes, pedidos cancelados, solicitudes de reembolso - todo resuelto rápidamente.',
            'Mejores Prácticas: Consejos y trucos para reducir el tiempo de preparación, mejorar el embalaje y evitar malas reseñas.',
            'Soporte Continuo: El equipo tiene acceso directo a nosotros por WhatsApp para cualquier pregunta o problema.'
          ]
        },
        whyTitle: '¿Por qué necesitas esta gestión?',
        whyItems: [
          'Recupera la Inversión: Simplemente negociando comisiones, nuestro paquete puede pagarse solo desde el primer mes.',
          'Visibilidad Máxima: Te ponemos en primera línea de las plataformas de entrega, exactamente donde los clientes hambrientos buscan.',
          'Sin Dolores de Cabeza Técnicos: Ya no necesitas entrar en tablets o paneles de control complejos.'
        ]
      },
      aiAgents: {
        title: 'Asistente Virtual Inteligente',
        price: '€300/mes',
        originalPrice: '€400/mes',
        discount: '-25%',
        subtitle: 'Tu empleado ideal: Nunca duerme y responde al instante a cualquier cliente',
        badge: 'Agente IA Conversacional 24/7',
        phone: {
          title: 'Contesta el Teléfono',
          tagline: 'Voice AI',
          intro: 'Nunca pierdas un cliente porque estabas ocupado en la cocina o en una reunión.',
          items: [
            'Voz Natural: Habla con fluidez en español, como un humano.',
            'Experto en Tu Negocio: Conoce todo sobre tu menú, precios, ingredientes o servicios.',
            'Cero Llamadas Perdidas: Puede atender decenas de llamadas simultáneamente, 24/7.'
          ]
        },
        whatsapp: {
          title: 'Experto en WhatsApp',
          tagline: 'Chat AI',
          intro: 'Los clientes quieren respuestas AHORA. La IA se las da al instante.',
          items: [
            'Menú Digital: Envía fotos y detalles de productos directamente por WhatsApp.',
            'Venta Activa: Recomienda productos y presenta ofertas especiales de forma inteligente.',
            'Disponibilidad Total: Responde al instante, incluso en mitad de la noche.'
          ]
        },
        reservations: {
          title: 'Reservas Automáticas',
          tagline: 'Calendar Sync',
          intro: 'Olvida la agenda de papel y los errores humanos.',
          items: [
            'Programación Directa: Verifica disponibilidad y pone la reserva directamente en Google Calendar.',
            'Confirmaciones y Recordatorios: Envía automáticamente mensajes a los clientes para asegurar que asistan.',
            'Gestión Simple: Los clientes pueden cancelar o mover la reserva ellos mismos, por chat o teléfono.'
          ]
        },
        benefitsTitle: '¿Por qué necesitas un Agente IA?',
        benefitsList: [
          'Cero llamadas perdidas',
          'Disponibilidad 24/7',
          'Menos estrés para el equipo'
        ]
      },
      video: {
        title: 'Producción de Vídeo y Publicación Automática',
        price: '389 €/mes',
        originalPrice: '599 €/mes',
        discount: '35% DESCUENTO',
        subtitle: 'Nosotros creamos, nosotros publicamos. Tu negocio crece diariamente en 4 plataformas simultáneamente',
        badge: 'Contenido de Vídeo Viral',
        videosTitle: '🎬 16-20 Clips Premium / Mes',
        videoDesc: '16-20 Videoclips/Mes:',
        hook: 'Hook (8s)',
        hookDesc: 'capta la atención al instante',
        action: 'Acción (8s)',
        actionDesc: 'presenta el concepto',
        cta: 'CTA (8s)',
        ctaDesc: 'llamada a la acción potente',
        veo3: 'Calidad Cinematográfica',
        veo3Desc: 'Imagen y sonido con estándares de cine, con presentadores que dan vida a tu marca',
        format: 'Variedad Creativa',
        formatDesc: 'Retos, entrevistas y clips interactivos que hacen que la gente comparta',
        presenters: {
          title: 'NUESTROS PRESENTADORES',
          tagline: 'Cero esfuerzo de tu parte',
          intro: 'Lo hacemos todo. Nuestro equipo de creadores y presentadores profesionales dan vida a tu marca.',
          items: [
            'Equipo profesional de creadores',
            'Presentadores con experiencia',
            'Sin ningún esfuerzo de tu parte'
          ]
        },
        yourFace: {
          title: 'TÚ ERES LA CARA DE LA MARCA',
          tagline: 'Máxima autenticidad',
          intro: 'Usamos tu cara y voz. Tecnología AI de última generación (VEO3) para videos cinematográficos.',
          items: [
            'Conexión personal con la audiencia',
            'Tecnología VEO3 de última generación',
            'Ideal para propietarios auténticos'
          ]
        },
        quality: {
          title: 'Calidad y Creatividad',
          tagline: 'Para ambas opciones',
          intro: 'Calidad Cinematográfica: Imagen, sonido y edición premium.',
          items: [
            'Storyboards creativos y virales',
            'Retos, entrevistas, clips interactivos',
            'Ideas que captan la atención'
          ]
        },
        robot: {
          title: '🤖 Robot de Publicación Diaria (Con Tu Aprobación)',
          tagline: 'Configura y Olvida',
          intro: 'Entrega y Aprobación: Al final del mes, recibes todo el paquete de videos para revisión y aprobación final.',
          items: [
            '4 Plataformas Simultáneas: Publica diariamente en TikTok, Instagram Reels, Facebook Reels, YouTube Shorts.',
            'Consistencia Perfecta: A la misma hora óptima, cada día.',
            'Completamente Automatizado: Sin gestión manual, sin inicios de sesión, sin dolores de cabeza.'
          ]
        },
        visibility: {
          title: '🚀 Resultados Garantizados',
          tagline: 'Impacto Medible',
          intro: 'Hazte amigo del Algoritmo: Los algoritmos de redes sociales aman la consistencia.',
          items: [
            'Amistad con el Algoritmo: La consistencia diaria aumenta significativamente tu visibilidad orgánica.',
            'Impacto Medible: Ve aumentos en vistas, seguidores y engagement en los primeros 30 días.',
            'Branding Fuerte: La presencia constante te mantiene en la mente de los clientes.'
          ]
        },
        formatExamples: {
          label: 'Ejemplos de Formatos'
        },
        included: {
          title: 'Qué Está Incluido',
          items: [
            '20 videos premium/mes (con nuestros presentadores O con tu cara y voz*)',
            'Ideas creativas y gestión completa del contenido',
            'Publicación automática en 4 redes sociales, después de tu aprobación'
          ],
          note: '(*) La opción con la cara y voz del propietario se selecciona al inicio de la colaboración y está incluida en el precio.',
          cta: 'Completa tu presencia online. Nosotros hacemos los videos y publicaciones. Tú recibes los resultados.'
        },
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
        price: '€100',
        originalPrice: '€150',
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
        title: 'Negocio en Piloto Automático',
        price: '300 €/mes',
        originalPrice: '550 €/mes',
        discount: '-45%',
        discountNote: 'Ahorra 45% activando los paquetes de Digitalización y Marketing juntos',
        subtitle: 'Todo lo que necesitas para vender online, en una sola solución completa.',
        badge: 'Paquete Todo Incluido',
        app: {
          title: 'Tu App Móvil y Website',
          tagline: 'Tu propia tienda',
          intro: 'No dependas solo de plataformas de delivery o redes sociales.',
          items: [
            'Lanzamiento Completo: Creamos, probamos y lanzamos tu app de Android & iOS y website de pedidos.',
            'Sin Preocupaciones: Nos encargamos de todo, desde el diseño hasta el mantenimiento técnico.',
            'Entrega Inteligente: Integración con partners de entrega (no necesitas contratar repartidores).'
          ]
        },
        automation: {
          title: 'Automatización y Fidelización',
          tagline: 'Vende más a clientes actuales',
          intro: 'Transforma visitantes ocasionales en clientes fieles que vuelven.',
          items: [
            'Base de Datos: Recopilamos automáticamente datos de clientes para enviarles ofertas.',
            'Mensajes Directos: Envía notificaciones automáticas y promociones por WhatsApp o SMS.',
            'Marketing Personalizado: Mensajes correctos enviados en el momento correcto.'
          ]
        },
        social: {
          title: 'Gestión de Redes Sociales',
          tagline: 'Visibilidad Máxima',
          intro: 'Estar presente donde están tus clientes, cada día.',
          items: [
            'Contenido Viral: Posts y vídeos creados especialmente para TikTok, Instagram y Facebook.',
            'Estrategia de Crecimiento: No solo publicamos, traemos gente nueva para interactuar con tu marca.',
            'Monitorización: Analizamos qué funciona y optimizamos constantemente para mejores resultados.'
          ]
        },
        whyChoose: '¿Por qué elegir este paquete?',
        benefits: [
          'Ahorra tiempo: Nos encargamos de tecnología y publicaciones, tú te enfocas en tu negocio.',
          'Costes reducidos: Obtén un equipo completo (Desarrolladores, Marketers, Social Media) al precio de una suscripción.',
          'Control Total: Ten tus propios canales de venta, sin comisiones enormes a terceros.'
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
        whyTitle: 'De ce ai nevoie de acest management?',
        whyItems: [
          'Recuperezi investiția: Prin simpla negociere a comisioanelor, pachetul nostru se poate plăti singur încă din prima lună.',
          'Vizibilitate Maximă: Te punem în prima linie pe platformele de livrare, exact acolo unde clienții flămânzi caută.',
          'Fără bătăi de cap tehnice: Tu nu mai trebuie să intri în tablete sau panouri de control complexe.'
        ]
      },
      aiAgents: {
        title: 'Asistent Virtual Inteligent',
        price: '1.500 RON/lună',
        originalPrice: '2.000 RON/lună',
        discount: '-25%',
        subtitle: 'Angajatul tău ideal: Nu doarme niciodată și răspunde instant oricărui client',
        badge: 'Agent AI Conversațional 24/7',
        phone: {
          title: 'Răspunde la Telefon',
          tagline: 'Voice AI',
          intro: 'Nu mai pierde niciun client pentru că erai ocupat în bucătărie sau în ședință.',
          items: [
            'Voce Naturală: Vorbește fluid în limba română, exact ca un om.',
            'Expert în Afacerea Ta: Știe totul despre meniul tău, prețuri, ingrediente sau servicii.',
            'Fără Apeluri Pierdute: Poate prelua zeci de apeluri simultan, 24/7.'
          ]
        },
        whatsapp: {
          title: 'Expert pe WhatsApp',
          tagline: 'Chat AI',
          intro: 'Clienții vor răspunsuri ACUM. AI-ul i le oferă pe loc.',
          items: [
            'Meniu Digital: Trimite poze și detalii despre produse direct pe WhatsApp.',
            'Vânzare Activă: Recomandă produse și prezintă ofertele speciale în mod inteligent.',
            'Disponibilitate Totală: Răspunde instant, chiar și în mijlocul nopții.'
          ]
        },
        reservations: {
          title: 'Rezervări Automate',
          tagline: 'Calendar Sync',
          intro: 'Uită de agenda de hârtie și de erorile umane.',
          items: [
            'Programare Directă: Verifică disponibilitatea și pune rezervarea direct în Google Calendar.',
            'Confirmări și Reminder-uri: Trimite automat mesaje clienților ca să te asiguri că aceștia apar la programare.',
            'Gestiune Simplă: Clienții pot anula sau muta rezervarea singuri, prin chat sau telefon.'
          ]
        },
        benefitsTitle: 'De ce ai nevoie de un Agent AI?',
        benefitsList: [
          'Zero apeluri pierdute',
          'Disponibilitate 24/7',
          'Mai puțin stres pentru echipă'
        ]
      },
      video: {
        title: 'Producție Video & Postare Automată',
        price: '1.625 RON/lună',
        originalPrice: '2.500 RON/lună',
        discount: '35% OFF',
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
        title: 'Afacere pe Pilot Automat',
        price: '1.375 RON/lună',
        originalPrice: '2.500 RON/lună',
        discount: '-45%',
        discountNote: 'Economisești 45% activând pachetele de Digitalizare și Marketing împreună',
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

export const getWhatsAppUrl = () => {
  return 'https://wa.me/40768676141';
};

export const getPhoneUrl = () => {
  return 'tel:+40768676141';
};
