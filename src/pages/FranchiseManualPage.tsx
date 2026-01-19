import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Bot, Box, ChartLine, Flag, Gift, Send, Check, User, Mail, Phone, Globe, Loader2, Sparkles } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { franchiseManualTranslations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';

const formTranslations = {
  en: {
    title: 'Apply for Franchise',
    subtitle: 'Fill the form and we contact you within 24h',
    name: 'Full name',
    email: 'Email',
    phone: 'Phone / WhatsApp',
    country: 'Market of interest',
    countryPlaceholder: 'Select market',
    countries: ['🇺🇸 USA', '🇬🇧 UK', '🇪🇸 Spain'],
    submit: 'Submit Application',
    submitting: 'Submitting...',
    success: 'Application sent! We will contact you soon.',
    error: 'An error occurred. Please try again.',
    ctaTitle: 'Ready to start your journey to',
    ctaHighlight: '€15,000/month?',
    ctaSubtitle: 'Fill out the form and our team will contact you within 24 hours to discuss the franchise opportunity.',
    ctaPromise: '✓ Guaranteed response in 24h · ✓ No obligations · ✓ Free consultation',
    finalStep: 'Final step',
    guaranteedMarket: 'Guaranteed exclusive market',
    trainingIncluded: 'Complete training included',
    support247: '24/7 continuous support'
  },
  es: {
    title: 'Solicitar Franquicia',
    subtitle: 'Completa el formulario y te contactamos en 24h',
    name: 'Nombre completo',
    email: 'Email',
    phone: 'Teléfono / WhatsApp',
    country: 'Mercado de interés',
    countryPlaceholder: 'Seleccionar mercado',
    countries: ['🇺🇸 USA', '🇬🇧 UK', '🇪🇸 España'],
    submit: 'Enviar Solicitud',
    submitting: 'Enviando...',
    success: '¡Solicitud enviada! Te contactaremos pronto.',
    error: 'Ocurrió un error. Inténtalo de nuevo.',
    ctaTitle: '¿Listo para comenzar tu viaje hacia',
    ctaHighlight: '€15.000/mes?',
    ctaSubtitle: 'Completa el formulario y nuestro equipo te contactará en un máximo de 24 horas para discutir la oportunidad de franquicia.',
    ctaPromise: '✓ Respuesta garantizada en 24h · ✓ Sin obligaciones · ✓ Consulta gratuita',
    finalStep: 'Último paso',
    guaranteedMarket: 'Mercado exclusivo garantizado',
    trainingIncluded: 'Formación completa incluida',
    support247: 'Soporte continuo 24/7'
  },
  ro: {
    title: 'Aplică pentru Franciză',
    subtitle: 'Completează formularul și te contactăm în 24h',
    name: 'Nume complet',
    email: 'Email',
    phone: 'Telefon / WhatsApp',
    country: 'Piața de interes',
    countryPlaceholder: 'Selectează piața',
    countries: ['🇺🇸 USA', '🇬🇧 UK', '🇪🇸 Spania'],
    submit: 'Trimite Aplicația',
    submitting: 'Se trimite...',
    success: 'Aplicația a fost trimisă! Te contactăm în curând.',
    error: 'A apărut o eroare. Încearcă din nou.',
    ctaTitle: 'Pregătit să începi călătoria către',
    ctaHighlight: '15.000 €/lună?',
    ctaSubtitle: 'Completează formularul și echipa noastră te va contacta în maxim 24 de ore pentru a discuta despre oportunitatea de franciză.',
    ctaPromise: '✓ Răspuns garantat în 24h · ✓ Fără obligații · ✓ Consultanță gratuită',
    finalStep: 'Ultimul pas',
    guaranteedMarket: 'Piață exclusivă garantată',
    trainingIncluded: 'Training complet inclus',
    support247: 'Suport continuu 24/7'
  }
};

const FranchiseManualPage: React.FC = () => {
  const { language } = useLanguage();
  const t = franchiseManualTranslations[language];
  const formT = formTranslations[language];
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('franchise_applications')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country
        }]);

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: formT.success,
        variant: "default"
      });
    } catch (error) {
      toast({
        title: formT.error,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = 'https://wa.me/40768676141';

  return (
    <div className="min-h-screen bg-black text-white antialiased pb-24">
      <SEO 
        title={`${t.heroTitle} - MrDelivery`}
        description={t.heroDescription}
        keywords="franchise, MrDelivery, AI, automation, digital business"
        url="https://mrdelivery.lovable.app/franchise_manual"
      />

      {/* Header / Logo Area */}
      <header className="pt-8 pb-4 px-4 text-center sticky top-0 bg-black/95 backdrop-blur-md z-50 border-b border-white/10">
        <div className="flex items-center justify-between max-w-md mx-auto mb-2">
          <Link to="/franchise" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-400 rounded flex items-center justify-center text-black font-black text-lg">M</div>
            <span className="text-xl font-extrabold text-white tracking-tight">Mr<span className="text-amber-400">Delivery</span></span>
          </div>
          <LanguageSwitcher />
        </div>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">{t.version}</p>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8 text-center max-w-md mx-auto">
        <h1 className="text-3xl font-black text-white leading-tight mb-4">
          {t.heroTitle.split(' ').map((word, i) => 
            word === 'AI' || word === 'IA' ? <span key={i} className="text-amber-400">{word} </span> : word + ' '
          )}
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          {t.heroDescription}
        </p>
        
        <div className="inline-block px-4 py-2 bg-zinc-900 border border-amber-400/30 rounded-lg mb-6">
          <span className="text-amber-400 font-bold text-sm flex items-center gap-1">
            <Check className="w-4 h-4" /> {t.roiGuarantee}
          </span>
        </div>

        <a 
          href="#apply-form" 
          className="block w-full bg-amber-400 text-black font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(250,204,21,0.4)] animate-pulse hover:scale-105 transition transform text-lg uppercase"
        >
          {t.applyCta}
        </a>
      </section>

      {/* Main Content Stack (Acordeoane) */}
      <main className="px-4 max-w-md mx-auto space-y-3">

        {/* 1. Viziunea */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all [&[open]]:bg-amber-400 [&[open]]:text-black">
            <span className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-amber-400 group-open:text-black" />
              {t.sections.vision.title}
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm text-gray-300 border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <p className="mb-4"><strong className="text-white">{t.sections.vision.problem}</strong> {t.sections.vision.problemDesc}</p>
            <ul className="space-y-2 mb-4 list-disc pl-4 text-gray-400">
              {t.sections.vision.problemItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p><strong className="text-amber-400">{t.sections.vision.solution}</strong> {t.sections.vision.solutionDesc}</p>
          </div>
        </details>

        {/* 2. Robotul (The Engine) */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-amber-400 group-open:text-black" />
              {t.sections.robot.title}
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm text-gray-300 border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <p className="mb-4">{t.sections.robot.intro}</p>
            <div className="space-y-3">
              {t.sections.robot.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-amber-400/20 text-amber-400 w-6 h-6 flex items-center justify-center rounded font-bold text-xs">{i + 1}</div>
                  <p><span className="text-white font-bold">{step.title}</span> {step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </details>

        {/* 3. Cele 5 Pachete */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <Box className="w-5 h-5 text-amber-400 group-open:text-black" />
              {t.sections.income.title}
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm border-t border-white/10 bg-black/50 space-y-6 animate-[slideDown_0.3s_ease-out]">
            {t.sections.income.packages.map((pkg, i) => (
              <div key={i} className={i > 0 ? 'border-t border-white/10 pt-4 relative' : 'relative'}>
                {pkg.bestseller && (
                  <span className="absolute top-4 right-0 bg-amber-400 text-black text-[10px] px-2 rounded font-bold">BESTSELLER</span>
                )}
                <h4 className="text-amber-400 font-bold">{pkg.name}</h4>
                {pkg.target && <p className="text-xs text-gray-400">{pkg.target}</p>}
                <div className="flex justify-between mt-1">
                  <span className="text-white font-bold">{pkg.price}</span>
                  <span className="text-green-400 font-bold">{pkg.net}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </details>

        {/* 4. Financiar */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <ChartLine className="w-5 h-5 text-amber-400 group-open:text-black" />
              {t.sections.financial.title}
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <p className="mb-4 text-gray-400 text-center">{t.sections.financial.intro}</p>
            
            {t.sections.financial.phases.map((phase, i) => (
              <div key={i} className="bg-black rounded border border-white/10 p-3 mb-3">
                <div className="text-amber-400 font-bold mb-1">{phase.name}</div>
                <div className="flex justify-between text-gray-300">
                  <span>{t.sections.financial.clientsLabel}</span> <span>{phase.clients}</span>
                </div>
                <div className="flex justify-between text-white font-bold mt-1">
                  <span>{t.sections.financial.profitLabel}</span> <span>{phase.profit}</span>
                </div>
              </div>
            ))}
          </div>
        </details>

        {/* 5. Onboarding */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <Flag className="w-5 h-5 text-amber-400 group-open:text-black" />
              {t.sections.launch.title}
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <ol className="relative border-l border-amber-400 ml-2 space-y-6">
              {t.sections.launch.timeline.map((item, i) => (
                <li key={i} className="pl-6 relative">
                  <span className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full ${i === 2 ? 'bg-green-500' : 'bg-amber-400'}`}></span>
                  <h5 className="font-bold text-white">{item.title}</h5>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </details>

        {/* 6. Ce Primești */}
        <details className="group bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
          <summary className="flex justify-between items-center p-4 md:p-5 font-bold text-white hover:bg-white/5 select-none cursor-pointer transition-all">
            <span className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-amber-400 group-open:text-black" />
              {t.sections.license.title}
            </span>
            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 group-open:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 text-sm border-t border-white/10 bg-black/50 animate-[slideDown_0.3s_ease-out]">
            <ul className="space-y-2 text-gray-300">
              {t.sections.license.items.map((item, i) => (
                <li key={i} className="flex items-center"><Check className="w-4 h-4 text-amber-400 mr-2" /> {item}</li>
              ))}
            </ul>
            <div className="mt-4 text-center border-t border-white/10 pt-4">
              <div className="text-gray-400 text-xs uppercase">{t.sections.license.costLabel}</div>
              <div className="text-3xl font-black text-white">{t.sections.license.cost}</div>
            </div>
          </div>
        </details>

      </main>

      {/* Application Form Section */}
      <section id="apply-form" className="py-16 px-4 mt-8 border-t border-white/10 bg-gradient-to-b from-black to-amber-950/20">
        <div className="max-w-lg mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">
                {formT.finalStep}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {formT.ctaTitle} <span className="text-amber-400">{formT.ctaHighlight}</span>
            </h2>
            
            <p className="text-white/60 text-sm max-w-md mx-auto mb-2">
              {formT.ctaSubtitle}
            </p>
            
            <p className="text-emerald-400/80 text-xs">
              {formT.ctaPromise}
            </p>
          </div>

          {/* Form Card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/30 via-emerald-400/30 to-amber-400/30 rounded-2xl blur-xl opacity-40"></div>
            
            <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
                    <Check className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{formT.success}</h3>
                  <p className="text-white/60 text-lg">🚀</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Benefits */}
                  <div className="space-y-3 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-amber-400" />
                      </div>
                      <span>{formT.guaranteedMarket}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-amber-400" />
                      </div>
                      <span>{formT.trainingIncluded}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-amber-400" />
                      </div>
                      <span>{formT.support247}</span>
                    </div>
                  </div>
                  
                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/80 text-sm">{formT.name}</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12 pl-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus:border-amber-400/50 focus:ring-amber-400/20"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/80 text-sm">{formT.email}</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-12 pl-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus:border-amber-400/50 focus:ring-amber-400/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white/80 text-sm">{formT.phone}</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="h-12 pl-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus:border-amber-400/50 focus:ring-amber-400/20"
                          placeholder="+1 234 567 890"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-white/80 text-sm">{formT.country}</Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <select
                          id="country"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          required
                          className="w-full h-12 pl-11 pr-4 bg-white/5 border border-white/10 text-white rounded-xl focus:border-amber-400/50 focus:ring-amber-400/20 focus:outline-none appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-gray-900">{formT.countryPlaceholder}</option>
                          {formT.countries.map((country, index) => (
                            <option key={index} value={country} className="bg-gray-900">{country}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-14 mt-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:shadow-xl"
                    >
                      {loading ? (
                        <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      ) : (
                        <Send className="h-5 w-5 mr-2" />
                      )}
                      {loading ? formT.submitting : formT.submit}
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sticky CTA for Mobile - WhatsApp */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-black/80 backdrop-blur border-t border-white/10 z-40">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-white text-black font-extrabold py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          <Send className="w-5 h-5 mr-2" />
          {t.contactTeam}
        </a>
      </div>
    </div>
  );
};

export default FranchiseManualPage;