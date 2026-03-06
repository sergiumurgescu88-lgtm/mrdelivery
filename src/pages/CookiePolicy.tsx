import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { legalTranslations } from '@/i18n/legalTranslations';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowLeft, Cookie, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PoweredBySSociety from '@/components/PoweredBySSociety';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  const { language } = useLanguage();
  const t = legalTranslations[language]?.cookiePolicy || legalTranslations.en.cookiePolicy;

  const seoData = {
    ro: {
      title: 'Politica de Cookie-uri | MrDelivery',
      description: 'Aflați cum folosim cookie-urile pe platforma MrDelivery. Informații despre tipurile de cookie-uri, gestionarea consimțământului și protecția datelor.',
    },
    en: {
      title: 'Cookie Policy | MrDelivery',
      description: 'Learn how we use cookies on the MrDelivery platform. Information about cookie types, consent management, and data protection.',
    },
    es: {
      title: 'Política de Cookies | MrDelivery',
      description: 'Descubra cómo usamos las cookies en la plataforma MrDelivery. Información sobre tipos de cookies, gestión del consentimiento y protección de datos.',
    },
  };

  const currentSeo = seoData[language] || seoData.ro;

  const renderMarkdown = (text: string) => {
    // Convert markdown links to HTML
    let processed = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');
    // Convert bold
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Convert newlines
    processed = processed.replace(/\n/g, '<br />');
    return processed;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={currentSeo.title} 
        description={currentSeo.description}
        url="https://mrdelivery.ro/politica-cookies"
        locale={language === 'ro' ? 'ro_RO' : language === 'es' ? 'es_ES' : 'en_US'}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {language === 'ro' ? 'Înapoi' : language === 'es' ? 'Volver' : 'Back'}
              </Button>
            </Link>
            <LanguageSwitcher />
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-lg">
              <Cookie className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              {t.title}
            </h1>
            <p className="text-muted-foreground">
              {t.lastUpdated}: 17 Ianuarie 2026
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="space-y-8">
          {/* Introduction */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Cookie className="w-5 h-5 text-primary" />
              {t.introduction.title}
            </h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.introduction.content) }}
            />
          </section>

          {/* Cookie Types */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-6">{t.types.title}</h2>
            <div className="space-y-6">
              {t.types.categories.map((category, index) => (
                <div 
                  key={index} 
                  className={`p-5 rounded-xl border-2 ${
                    !category.canDisable 
                      ? 'bg-primary/5 border-primary/20' 
                      : 'bg-muted/30 border-border'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                      !category.canDisable 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {!category.canDisable ? (
                        <>
                          <Check className="w-3 h-3" />
                          {language === 'ro' ? 'Mereu activ' : language === 'es' ? 'Siempre activas' : 'Always active'}
                        </>
                      ) : (
                        <>
                          <X className="w-3 h-3" />
                          {language === 'ro' ? 'Opțional' : language === 'es' ? 'Opcional' : 'Optional'}
                        </>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.examples.map((example, exIndex) => (
                      <li key={exIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Management */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.management.title}</h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.management.content) }}
            />
          </section>

          {/* Consent */}
          <section className="bg-gradient-to-br from-success/5 to-success/10 rounded-2xl p-6 shadow-sm border border-success/20">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.consent.title}</h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.consent.content) }}
            />
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 shadow-sm border border-primary/20">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.contact.title}</h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.contact.content) }}
            />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default CookiePolicy;
