import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { legalTranslations } from '@/i18n/legalTranslations';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowLeft, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsAndConditions = () => {
  const { language } = useLanguage();
  const t = legalTranslations[language]?.termsAndConditions || legalTranslations.en.termsAndConditions;

  const seoData = {
    ro: {
      title: 'Termeni și Condiții | MrDelivery',
      description: 'Termenii și condițiile de utilizare a platformei MrDelivery, operată de MURSE ADVERTISING SRL. Citiți regulile pentru plasarea comenzilor și utilizarea serviciului.',
    },
    en: {
      title: 'Terms and Conditions | MrDelivery',
      description: 'Terms and conditions for using the MrDelivery platform, operated by MURSE ADVERTISING SRL. Read the rules for placing orders and using the service.',
    },
    es: {
      title: 'Términos y Condiciones | MrDelivery',
      description: 'Términos y condiciones de uso de la plataforma MrDelivery, operada por MURSE ADVERTISING SRL. Lea las reglas para realizar pedidos y usar el servicio.',
    },
  };

  const currentSeo = seoData[language] || seoData.ro;

  const renderMarkdown = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={currentSeo.title} 
        description={currentSeo.description}
        url="https://mrdelivery.ro/termeni-si-conditii"
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
              <FileText className="w-8 h-8 text-primary-foreground" />
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
          {/* Preamble */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              {t.preamble.title}
            </h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.preamble.content) }}
            />
          </section>

          {/* Definitions */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.definitions.title}</h2>
            <dl className="space-y-3">
              {t.definitions.items.map((item, index) => (
                <div key={index} className="bg-muted/50 p-3 rounded-lg">
                  <dt className="font-semibold text-foreground">{item.term}</dt>
                  <dd className="text-muted-foreground text-sm mt-1">{item.definition}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Access and Use */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.accessAndUse.title}</h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.accessAndUse.content) }}
            />
          </section>

          {/* Platform Nature */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.platformNature.title}</h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.platformNature.content) }}
            />
          </section>

          {/* Order Process */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.orderProcess.title}</h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.orderProcess.content) }}
            />
          </section>

          {/* Delivery */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.delivery.title}</h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.delivery.content) }}
            />
          </section>

          {/* Intellectual Property */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.intellectualProperty.title}</h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.intellectualProperty.content) }}
            />
          </section>

          {/* Liability */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.liability.title}</h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.liability.content) }}
            />
          </section>

          {/* Data Processing */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.dataProcessing.title}</h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.dataProcessing.content) }}
            />
          </section>

          {/* Governing Law */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.governingLaw.title}</h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.governingLaw.content) }}
            />
          </section>

          {/* Modifications */}
          <section className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">{t.modifications.title}</h2>
            <div 
              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(t.modifications.content) }}
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
        <footer className="mt-12 pt-8 border-t border-border text-center">
          <Link to="/" className="text-primary hover:underline">
            ← {language === 'ro' ? 'Înapoi la pagina principală' : language === 'es' ? 'Volver a la página principal' : 'Back to home page'}
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;
