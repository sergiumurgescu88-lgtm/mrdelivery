import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, Building2, FileText, Shield, Cookie, MapPin, Globe, MessageSquare } from 'lucide-react';
import PoweredBySSociety from './PoweredBySSociety';
import { useEffect, useRef } from 'react';

const FooterStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const stars: { x: number; y: number; r: number; a: number; speed: number }[] = [];
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random(),
        speed: Math.random() * 0.005 + 0.002,
      });
    }

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      stars.forEach((s) => {
        s.a += s.speed;
        const opacity = 0.3 + Math.sin(s.a * Math.PI * 2) * 0.4;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0.1, opacity)})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const Footer = () => {
  const { language } = useLanguage();

  const labels = {
    ro: {
      companyDetails: 'Date Firmă',
      cui: 'CUI',
      regCom: 'Nr. Înmatriculare',
      euid: 'EUID',
      founded: 'Data înființării',
      contact: 'Contact',
      legal: 'Legal',
      terms: 'Termeni și Condiții',
      cookies: 'Politica Cookies',
      privacy: 'Politica de Confidențialitate',
      rights: 'Toate drepturile rezervate.',
      address: 'București, România',
    },
    en: {
      companyDetails: 'Company Details',
      cui: 'Tax ID',
      regCom: 'Registration No.',
      euid: 'EUID',
      founded: 'Founded',
      contact: 'Contact',
      legal: 'Legal',
      terms: 'Terms and Conditions',
      cookies: 'Cookie Policy',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved.',
      address: 'Bucharest, Romania',
    },
    es: {
      companyDetails: 'Datos de la Empresa',
      cui: 'CIF',
      regCom: 'Nº Registro',
      euid: 'EUID',
      founded: 'Fecha de fundación',
      contact: 'Contacto',
      legal: 'Legal',
      terms: 'Términos y Condiciones',
      cookies: 'Política de Cookies',
      privacy: 'Política de Privacidad',
      rights: 'Todos los derechos reservados.',
      address: 'Bucarest, Rumanía',
    },
  };

  const t = labels[language] || labels.ro;

  return (
    <footer className="relative z-10 mt-12 overflow-hidden" style={{ background: '#030712' }}>
      {/* Starfield */}
      <FooterStars />

      {/* Top gold accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* Logo & tagline */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            MrDelivery
          </h2>
          <p className="text-sm text-white/50">
            {language === 'ro' ? 'Agenție AI pentru Restaurante & HoReCa' : language === 'es' ? 'Agencia IA para Restaurantes y HoReCa' : 'AI Agency for Restaurants & HoReCa'}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-12">
          
          {/* Company Details */}
          <div>
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              {t.companyDetails}
            </h3>
            <div className="space-y-2.5 text-sm">
              <p className="font-semibold text-white">MURSE ADVERTISING S.R.L.</p>
              <p className="text-white/70">{t.cui}: <span className="text-white/90 font-medium">44923890</span></p>
              <p className="text-white/70">{t.regCom}: <span className="text-white/90 font-medium">J40/16148/2021</span></p>
              <p className="text-white/70">{t.euid}: <span className="text-white/90 font-medium">ROONRC.J40/16148/2021</span></p>
              <p className="text-white/70">{t.founded}: <span className="text-white/90 font-medium">17.09.2021</span></p>
              <p className="text-white/70 flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400/70" />
                {t.address}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {t.contact}
            </h3>
            <div className="space-y-3.5 text-sm">
              <a 
                href="mailto:sergiusociety@gmail.com" 
                className="flex items-center gap-2.5 text-white/70 hover:text-amber-300 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-amber-400/60" />
                sergiusociety@gmail.com
              </a>
              <a 
                href="tel:+40768676141" 
                className="flex items-center gap-2.5 text-white/70 hover:text-amber-300 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-amber-400/60" />
                +40 768 676 141
              </a>
              <a 
                href="https://wa.me/40768676141" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/70 hover:text-green-300 transition-colors duration-300"
              >
                <MessageSquare className="w-4 h-4 text-green-400/60" />
                WhatsApp
              </a>
              <a 
                href="https://mrdelivery.lovable.app" 
                className="flex items-center gap-2.5 text-white/70 hover:text-amber-300 transition-colors duration-300"
              >
                <Globe className="w-4 h-4 text-amber-400/60" />
                mrdelivery.lovable.app
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              {t.legal}
            </h3>
            <div className="space-y-3.5 text-sm">
              <Link 
                to="/termeni-si-conditii" 
                className="flex items-center gap-2.5 text-white/70 hover:text-amber-300 transition-colors duration-300"
              >
                <FileText className="w-4 h-4 text-amber-400/60" />
                {t.terms}
              </Link>
              <Link 
                to="/politica-cookies" 
                className="flex items-center gap-2.5 text-white/70 hover:text-amber-300 transition-colors duration-300"
              >
                <Cookie className="w-4 h-4 text-amber-400/60" />
                {t.cookies}
              </Link>
              <Link 
                to="/termeni-si-conditii" 
                className="flex items-center gap-2.5 text-white/70 hover:text-amber-300 transition-colors duration-300"
              >
                <Shield className="w-4 h-4 text-amber-400/60" />
                {t.privacy}
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs text-white/40 text-center">
            © {new Date().getFullYear()} MURSE ADVERTISING S.R.L. {t.rights}
          </p>
          <PoweredBySSociety />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
