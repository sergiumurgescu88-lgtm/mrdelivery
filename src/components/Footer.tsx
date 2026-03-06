import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, Building2, FileText, Shield, Cookie, ExternalLink } from 'lucide-react';
import PoweredBySSociety from './PoweredBySSociety';

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
    },
  };

  const t = labels[language] || labels.ro;

  return (
    <footer className="relative z-10 border-t border-border/50 bg-card/30 backdrop-blur-sm mt-12">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Company Details */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" />
              {t.companyDetails}
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium text-foreground/90">MURSE ADVERTISING S.R.L.</p>
              <p>{t.cui}: <span className="text-foreground/80">44923890</span></p>
              <p>{t.regCom}: <span className="text-foreground/80">J40/16148/2021</span></p>
              <p>{t.euid}: <span className="text-foreground/80">ROONRC.J40/16148/2021</span></p>
              <p>{t.founded}: <span className="text-foreground/80">17.09.2021</span></p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              {t.contact}
            </h3>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:sergiusociety@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                sergiusociety@gmail.com
              </a>
              <a 
                href="tel:+40768676141" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +40 768 676 141
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              {t.legal}
            </h3>
            <div className="space-y-3 text-sm">
              <Link 
                to="/termeni-si-conditii" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText className="w-4 h-4" />
                {t.terms}
              </Link>
              <Link 
                to="/politica-cookies" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Cookie className="w-4 h-4" />
                {t.cookies}
              </Link>
              <Link 
                to="/termeni-si-conditii" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Shield className="w-4 h-4" />
                {t.privacy}
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} MURSE ADVERTISING S.R.L. {t.rights}
            </p>
            <PoweredBySSociety />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
