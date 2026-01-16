import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import SEO from '@/components/SEO';
import { 
  ArrowLeft,
  Check,
  X,
  Bot,
  Search,
  Mail,
  Calendar,
  MapPin,
  Users,
  Monitor,
  Clock,
  Zap,
  Target,
  TrendingUp,
  Shield
} from 'lucide-react';

const franchiseTranslations = {
  ro: {
    seo: {
      title: 'Franciză MrDelivery - Job Remote pentru Nativi din USA, UK sau Spania',
      description: 'Lucrează de acasă, în propriul oraș, cu un sistem complet automatizat de transformare digitală pentru restaurante. Scalabilitate garantată până la 15.000+ € profit lunar.',
      keywords: 'franciză, MrDelivery, job remote, USA, UK, Spania, restaurante, marketing digital'
    },
    nav: { backToHome: 'Înapoi la Pagina Principală' },
    hero: {
      title: 'FRANCIZA',
      brand: 'MrDelivery',
      subtitle: 'Job Remote pentru Nativii din',
      countries: 'USA, UK sau Spania',
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
        { flag: '🇺🇸', question: 'Ești american?', action: 'Alege orice stat din USA', description: 'Piața cea mai mare și mai profitabilă. Restaurante dispuse să plătească premium pentru servicii digitale de calitate.' },
        { flag: '🇬🇧', question: 'Ești britanic?', action: 'Alege orice oraș din UK', description: 'Piață matură cu restaurante care caută soluții digitale complete și profesioniste.' },
        { flag: '🇪🇸', question: 'Ești spaniol?', action: 'Alege orice oraș din Spania', description: 'Piață în plină expansiune digitală. Restaurante tradiționale care au nevoie urgentă de modernizare.' }
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
      title: 'Scalabilitate Pas cu Pas:',
      titleHighlight: 'De la Solo la CEO',
      subtitle: 'Evoluția afacerii tale în 12 luni (100% remote)',
      phases: [
        { phase: 'FAZA 1', period: '6 luni', title: 'Solo Remote', hours: '8-10h/zi', structure: 'Lucrezi singur de acasă', clients: '10-12 clienți din zona ta', revenue: '8.000 €', profit: '~5.780 €' },
        { phase: 'FAZA 2', period: 'x2', title: 'Prima Echipă Remote', hours: '4-6h/zi', structure: 'Tu + 1 colaborator remote', clients: '20 clienți din zona ta', revenue: '16.000 €', profit: '~10.160 €' },
        { phase: 'FAZA 3', period: 'x3+', title: 'Echipa Completă', hours: '2-4h/zi', structure: 'Manager + 2 colaboratori', clients: '30+ clienți din zona ta', revenue: '24.000 €', profit: '14.040 - 15.000+ €' }
      ],
      guarantee: '*Garanție: Recuperezi investiția de 5.000€ în prima lună de la primul client, sau prelungim suportul gratuit.'
    },
    secret: {
      title: 'Secretul',
      titleHighlight: 'Succesului',
      subtitle: 'BOT-ul automat de recrutare care lucrează pentru tine 24/7, la fiecare 2 minute.',
      howItWorks: 'Cum funcționează sistemul tău automat:',
      steps: [
        { icon: 'search', title: 'Caută Restaurante', description: 'Scanează Google Maps și platforme pentru locații noi' },
        { icon: 'mail', title: 'Extrage Contacte', description: 'Obține automat email, telefon, WhatsApp' },
        { icon: 'send', title: 'Trimite Mesaje', description: 'Mesaje personalizate în 12 limbi' },
        { icon: 'calendar', title: 'Programează Demo', description: 'Îți completează calendarul cu prezentări' }
      ],
      results: 'Rezultate așteptate:',
      leads: '50-100', leadsLabel: 'lead-uri/lună',
      demos: '5-10', demosLabel: 'demo-uri/săptămână'
    },
    ideal: {
      title: 'Ești Francizorul Ideal?',
      subtitle: 'Pentru nativii din USA, UK și Spania care vor să lucreze de acasă',
      workFromHome: { title: 'Lucrează de Acasă, în Propriul Oraș', description: 'Stai acasă, lucrezi la orele tale și servești restaurante din zona ta. Un job 100% remote, cu flexibilitate totală și venituri scalabile.' },
      needTitle: 'Ai nevoie de:',
      needItems: ['Să fii rezident în USA, UK sau Spania', 'Mentalitate de antreprenor și dorința de a câștiga peste 10.000 €/lună', 'Disciplină și consistență pentru a lucra de acasă', '5.000 € pentru investiția inițială și 2 calculatoare', '3-4 ore pe zi (flexibil) pentru a gestiona afacerea în primele luni'],
      notNeedTitle: 'Nu ai nevoie de:',
      notNeedItems: ['Echipă de vânzări', 'Birou fizic', 'Cunoștințe tehnice avansate', 'Contacte în HORECA', 'Experiență în restaurante']
    }
  },
  en: {
    seo: {
      title: 'MrDelivery Franchise - Remote Job for Natives from USA, UK or Spain',
      description: 'Work from home, in your own city, with a fully automated digital transformation system for restaurants. Guaranteed scalability up to €15,000+ monthly profit.',
      keywords: 'franchise, MrDelivery, remote job, USA, UK, Spain, restaurants, digital marketing'
    },
    nav: { backToHome: 'Back to Home' },
    hero: {
      title: 'FRANCHISE',
      brand: 'MrDelivery',
      subtitle: 'Remote Job for Natives from',
      countries: 'USA, UK or Spain',
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
        { flag: '🇺🇸', question: 'Are you American?', action: 'Choose any state in USA', description: 'The largest and most profitable market. Restaurants willing to pay premium for quality digital services.' },
        { flag: '🇬🇧', question: 'Are you British?', action: 'Choose any city in UK', description: 'Mature market with restaurants seeking complete and professional digital solutions.' },
        { flag: '🇪🇸', question: 'Are you Spanish?', action: 'Choose any city in Spain', description: 'Market in full digital expansion. Traditional restaurants urgently needing modernization.' }
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
      title: 'Step by Step Scalability:',
      titleHighlight: 'From Solo to CEO',
      subtitle: 'Your business evolution in 12 months (100% remote)',
      phases: [
        { phase: 'PHASE 1', period: '6 months', title: 'Solo Remote', hours: '8-10h/day', structure: 'Work alone from home', clients: '10-12 clients in your area', revenue: '€8,000', profit: '~€5,780' },
        { phase: 'PHASE 2', period: 'x2', title: 'First Remote Team', hours: '4-6h/day', structure: 'You + 1 remote collaborator', clients: '20 clients in your area', revenue: '€16,000', profit: '~€10,160' },
        { phase: 'PHASE 3', period: 'x3+', title: 'Complete Team', hours: '2-4h/day', structure: 'Manager + 2 collaborators', clients: '30+ clients in your area', revenue: '€24,000', profit: '€14,040 - 15,000+' }
      ],
      guarantee: '*Guarantee: Recover your €5,000 investment in the first month from your first client, or we extend free support.'
    },
    secret: {
      title: 'The Secret to',
      titleHighlight: 'Success',
      subtitle: 'The automatic recruitment BOT that works for you 24/7, every 2 minutes.',
      howItWorks: 'How your automatic system works:',
      steps: [
        { icon: 'search', title: 'Search Restaurants', description: 'Scans Google Maps and platforms for new locations' },
        { icon: 'mail', title: 'Extract Contacts', description: 'Automatically gets email, phone, WhatsApp' },
        { icon: 'send', title: 'Send Messages', description: 'Personalized messages in 12 languages' },
        { icon: 'calendar', title: 'Schedule Demo', description: 'Fills your calendar with presentations' }
      ],
      results: 'Expected results:',
      leads: '50-100', leadsLabel: 'leads/month',
      demos: '5-10', demosLabel: 'demos/week'
    },
    ideal: {
      title: 'Are You the Ideal Franchisee?',
      subtitle: 'For natives from USA, UK and Spain who want to work from home',
      workFromHome: { title: 'Work From Home, in Your Own City', description: 'Stay home, work your own hours and serve restaurants in your area. A 100% remote job, with total flexibility and scalable income.' },
      needTitle: 'You need:',
      needItems: ['To be a resident in USA, UK or Spain', 'Entrepreneurial mindset and desire to earn over €10,000/month', 'Discipline and consistency to work from home', '€5,000 for initial investment and 2 computers', '3-4 hours per day (flexible) to manage the business in the first months'],
      notNeedTitle: 'You don\'t need:',
      notNeedItems: ['Sales team', 'Physical office', 'Advanced technical knowledge', 'Contacts in HORECA', 'Restaurant experience']
    }
  },
  es: {
    seo: {
      title: 'Franquicia MrDelivery - Trabajo Remoto para Nativos de USA, UK o España',
      description: 'Trabaja desde casa, en tu propia ciudad, con un sistema de transformación digital totalmente automatizado para restaurantes. Escalabilidad garantizada hasta €15.000+ de ganancia mensual.',
      keywords: 'franquicia, MrDelivery, trabajo remoto, USA, UK, España, restaurantes, marketing digital'
    },
    nav: { backToHome: 'Volver a la Página Principal' },
    hero: {
      title: 'FRANQUICIA',
      brand: 'MrDelivery',
      subtitle: 'Trabajo Remoto para Nativos de',
      countries: 'USA, UK o España',
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
        { flag: '🇺🇸', question: '¿Eres americano?', action: 'Elige cualquier estado de USA', description: 'El mercado más grande y rentable. Restaurantes dispuestos a pagar premium por servicios digitales de calidad.' },
        { flag: '🇬🇧', question: '¿Eres británico?', action: 'Elige cualquier ciudad del UK', description: 'Mercado maduro con restaurantes que buscan soluciones digitales completas y profesionales.' },
        { flag: '🇪🇸', question: '¿Eres español?', action: 'Elige cualquier ciudad de España', description: 'Mercado en plena expansión digital. Restaurantes tradicionales que necesitan urgentemente modernización.' }
      ]
    },
    workFromHome: {
      title: 'Trabaja Desde Casa',
      titleHighlight: 'en Tu Propia Ciudad',
      description: 'MrDelivery es la primera plataforma de transformación digital totalmente automatizada para restaurantes. Trabajas 100% remoto, desde la comodidad de tu hogar, para restaurantes de tu zona.',
      features: [
        { title: '100% Remoto', description: 'Trabajas desde casa, sin oficina, sin desplazamientos' },
        { title: 'Sistema IA Completo', description: 'Chatbots, agentes vocales, marketing automático' },
        { title: 'Producción de Video', description: 'Contenido viral y publicación automática' }
      ],
      machineTitle: 'La Máquina Trabaja para TI',
      machineDescription: 'Recibes un sistema automático de reclutamiento de clientes (BOT) que trabaja sin parar y un modelo de negocio verificado que escala de solo a equipo, con ganancias predecibles.',
      botTitle: 'Tu BOT trabaja 24/7',
      botDescription: 'Cada 2 minutos, encuentra nuevos restaurantes en tu zona, extrae contactos y envía mensajes personalizados. Es todo tu departamento de ventas.'
    },
    financial: {
      title: 'Modelo Financiero: Claro y Con Riesgo Mínimo',
      subtitle: 'Trabaja desde casa, en tu propia ciudad, con ingresos escalables',
      items: [
        { value: '5.000 €', label: 'Licencia franquicia', description: 'Tu mercado exclusivo' },
        { value: 'REMOTO', label: '100% desde casa', description: 'Sin oficina, sin desplazamientos' },
        { value: '2 PC', label: 'Equipo necesario', description: 'Que ya posees' },
        { value: '30 DÍAS', label: 'Garantía ROI', description: '*O extendemos el soporte' }
      ]
    },
    scalability: {
      title: 'Escalabilidad Paso a Paso:',
      titleHighlight: 'De Solo a CEO',
      subtitle: 'Evolución de tu negocio en 12 meses (100% remoto)',
      phases: [
        { phase: 'FASE 1', period: '6 meses', title: 'Solo Remoto', hours: '8-10h/día', structure: 'Trabajas solo desde casa', clients: '10-12 clientes en tu zona', revenue: '8.000 €', profit: '~5.780 €' },
        { phase: 'FASE 2', period: 'x2', title: 'Primer Equipo Remoto', hours: '4-6h/día', structure: 'Tú + 1 colaborador remoto', clients: '20 clientes en tu zona', revenue: '16.000 €', profit: '~10.160 €' },
        { phase: 'FASE 3', period: 'x3+', title: 'Equipo Completo', hours: '2-4h/día', structure: 'Manager + 2 colaboradores', clients: '30+ clientes en tu zona', revenue: '24.000 €', profit: '14.040 - 15.000+ €' }
      ],
      guarantee: '*Garantía: Recuperas tu inversión de 5.000€ en el primer mes desde tu primer cliente, o extendemos el soporte gratis.'
    },
    secret: {
      title: 'El Secreto del',
      titleHighlight: 'Éxito',
      subtitle: 'El BOT automático de reclutamiento que trabaja para ti 24/7, cada 2 minutos.',
      howItWorks: 'Cómo funciona tu sistema automático:',
      steps: [
        { icon: 'search', title: 'Buscar Restaurantes', description: 'Escanea Google Maps y plataformas para nuevas ubicaciones' },
        { icon: 'mail', title: 'Extraer Contactos', description: 'Obtiene automáticamente email, teléfono, WhatsApp' },
        { icon: 'send', title: 'Enviar Mensajes', description: 'Mensajes personalizados en 12 idiomas' },
        { icon: 'calendar', title: 'Programar Demo', description: 'Llena tu calendario con presentaciones' }
      ],
      results: 'Resultados esperados:',
      leads: '50-100', leadsLabel: 'leads/mes',
      demos: '5-10', demosLabel: 'demos/semana'
    },
    ideal: {
      title: '¿Eres el Franquiciado Ideal?',
      subtitle: 'Para nativos de USA, UK y España que quieren trabajar desde casa',
      workFromHome: { title: 'Trabaja Desde Casa, en Tu Propia Ciudad', description: 'Quédate en casa, trabaja a tus horarios y sirve restaurantes de tu zona. Un trabajo 100% remoto, con flexibilidad total e ingresos escalables.' },
      needTitle: 'Necesitas:',
      needItems: ['Ser residente en USA, UK o España', 'Mentalidad emprendedora y deseo de ganar más de 10.000 €/mes', 'Disciplina y consistencia para trabajar desde casa', '5.000 € para la inversión inicial y 2 computadoras', '3-4 horas al día (flexible) para gestionar el negocio en los primeros meses'],
      notNeedTitle: 'No necesitas:',
      notNeedItems: ['Equipo de ventas', 'Oficina física', 'Conocimientos técnicos avanzados', 'Contactos en HORECA', 'Experiencia en restaurantes']
    }
  }
};

const FranchisePage: React.FC = () => {
  const { language } = useLanguage();
  const t = franchiseTranslations[language as keyof typeof franchiseTranslations] || franchiseTranslations.ro;

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title={t.seo.title}
        description={t.seo.description}
        keywords={t.seo.keywords}
        url="https://mrdelivery.lovable.app/franchise"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{t.nav.backToHome}</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-2">
            <span className="text-amber-400">
              {language === 'ro' ? 'FRANCIZA' : language === 'en' ? 'FRANCHISE' : 'FRANQUICIA'}
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.hero.brand}
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            {t.hero.subtitle} <span className="text-amber-400 font-semibold">{t.hero.countries}</span>
          </p>
          
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto mb-4">
            {t.hero.description} <span className="text-amber-400 font-semibold">{t.hero.profit}</span>
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {t.hero.badges.map((badge, index) => (
              <span key={index} className="px-4 py-2 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-full text-sm font-medium">
                ✓ {badge}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-400 hover:bg-amber-500 text-black font-bold px-8 py-6 text-lg">
              {t.hero.cta}
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
              {t.hero.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.opportunity.title} <span className="text-amber-400">{t.opportunity.titleHighlight}</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.opportunity.countries.map((country, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-400/50 transition-colors">
                <div className="text-4xl mb-4">{country.flag}</div>
                <h3 className="text-xl font-bold text-amber-400 mb-2">{country.question}</h3>
                <p className="text-white/90 font-medium mb-3">{country.action}</p>
                <p className="text-white/60 text-sm">{country.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work From Home Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.workFromHome.title} <span className="text-amber-400">{t.workFromHome.titleHighlight}</span>
              </h2>
              <p className="text-white/70 mb-8">{t.workFromHome.description}</p>
              
              <div className="space-y-4">
                {t.workFromHome.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-white/60 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column */}
            <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">{t.workFromHome.machineTitle}</h3>
              <p className="text-white/80 mb-6">{t.workFromHome.machineDescription}</p>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-amber-400" />
                  {t.workFromHome.botTitle}
                </h4>
                <p className="text-white/60 text-sm">{t.workFromHome.botDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Model Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.financial.title}</h2>
          <p className="text-white/60 text-center mb-12">{t.financial.subtitle}</p>
          
          <div className="grid md:grid-cols-4 gap-4">
            {t.financial.items.map((item, index) => (
              <div key={index} className="bg-amber-400/10 border border-amber-400/40 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-black text-amber-400 mb-2">{item.value}</div>
                <div className="font-semibold text-white mb-1">{item.label}</div>
                <div className="text-white/50 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            {t.scalability.title} <span className="text-amber-400">{t.scalability.titleHighlight}</span>
          </h2>
          <p className="text-white/60 text-center mb-12">{t.scalability.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.scalability.phases.map((phase, index) => (
              <div key={index} className={`rounded-xl p-6 ${index === 1 ? 'bg-amber-400 text-black' : 'bg-white/5 border border-white/10'}`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-sm font-bold ${index === 1 ? 'text-black/70' : 'text-amber-400'}`}>{phase.phase}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${index === 1 ? 'bg-black/20 text-black' : 'bg-white/10 text-white/70'}`}>{phase.period}</span>
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${index === 1 ? 'text-black' : 'text-white'}`}>{phase.title}</h3>
                
                <div className="space-y-2 text-sm mb-6">
                  <p className={index === 1 ? 'text-black/70' : 'text-white/60'}>⏰ {phase.hours}</p>
                  <p className={index === 1 ? 'text-black/70' : 'text-white/60'}>👤 {phase.structure}</p>
                  <p className={index === 1 ? 'text-black/70' : 'text-white/60'}>🏢 {phase.clients}</p>
                </div>
                
                <div className={`pt-4 border-t ${index === 1 ? 'border-black/20' : 'border-white/10'}`}>
                  <div className={`text-2xl font-black ${index === 1 ? 'text-black' : 'text-white'}`}>{phase.revenue}</div>
                  <div className={`text-sm ${index === 1 ? 'text-black/70' : 'text-white/50'}`}>{phase.profit}</div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-white/50 text-sm mt-8 max-w-2xl mx-auto">{t.scalability.guarantee}</p>
        </div>
      </section>

      {/* Secret to Success Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="bg-amber-400/5 border border-amber-400/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              {t.secret.title} <span className="text-amber-400">{t.secret.titleHighlight}</span>
            </h2>
            <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">{t.secret.subtitle}</p>
            
            <h3 className="text-xl font-semibold text-center mb-8">{t.secret.howItWorks}</h3>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {t.secret.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-amber-400/20 border border-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon === 'search' && <Search className="w-6 h-6 text-amber-400" />}
                    {step.icon === 'mail' && <Mail className="w-6 h-6 text-amber-400" />}
                    {step.icon === 'send' && <Zap className="w-6 h-6 text-amber-400" />}
                    {step.icon === 'calendar' && <Calendar className="w-6 h-6 text-amber-400" />}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-black/30 rounded-xl p-6">
              <h4 className="text-center font-semibold mb-6">{t.secret.results}</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-amber-400">{t.secret.leads}</div>
                  <div className="text-white/60">{t.secret.leadsLabel}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-amber-400">{t.secret.demos}</div>
                  <div className="text-white/60">{t.secret.demosLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Franchisee Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.ideal.title}</h2>
          <p className="text-white/60 text-center mb-12">{t.ideal.subtitle}</p>
          
          {/* Work From Home Banner */}
          <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-6 mb-12 text-center">
            <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-amber-400 mb-2">{t.ideal.workFromHome.title}</h3>
            <p className="text-white/70 max-w-2xl mx-auto">{t.ideal.workFromHome.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Need */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <Check className="w-6 h-6" />
                {t.ideal.needTitle}
              </h3>
              <ul className="space-y-3">
                {t.ideal.needItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Not Need */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                <X className="w-6 h-6" />
                {t.ideal.notNeedTitle}
              </h3>
              <ul className="space-y-3">
                {t.ideal.notNeedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {language === 'ro' ? 'Pregătit să începi călătoria către 15.000 €/lună?' : 
             language === 'en' ? 'Ready to start your journey to €15,000/month?' : 
             '¿Listo para comenzar tu viaje hacia €15.000/mes?'}
          </h2>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-6 text-lg">
            {language === 'ro' ? 'TRIMITE MESAJ PE WHATSAPP' : 
             language === 'en' ? 'SEND MESSAGE ON WHATSAPP' : 
             'ENVIAR MENSAJE EN WHATSAPP'}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;
