import { Youtube, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@MrDeliveryAIAgency',
    icon: Youtube,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61586838691780',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/misterdeliveryai/',
    icon: Instagram,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@misterdeliveryai',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
  },
  {
    name: 'X',
    url: 'https://x.com/mrdeliveryai',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mrdeliveryaiagency/',
    icon: Linkedin,
  },
];

const FloatingSocialIcons = () => {
  return (
    <div className="fixed right-4 bottom-28 md:bottom-32 z-40 flex flex-col gap-2.5">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 md:w-11 md:h-11"
            title={social.name}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Premium gold shimmer border */}
            <div 
              className="absolute inset-0 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(251,191,36,0.4) 0%, rgba(245,158,11,0.2) 50%, rgba(251,191,36,0.4) 100%)',
                animation: 'shimmer 3s ease-in-out infinite',
              }}
            />
            
            {/* Inner dark background */}
            <div className="absolute inset-[2px] rounded-full bg-black/95 backdrop-blur-sm" />
            
            {/* Gold border ring */}
            <div 
              className="absolute inset-0 rounded-full border border-amber-500/50 group-hover:border-amber-400/80 transition-all duration-300"
              style={{
                boxShadow: '0 0 12px rgba(251,191,36,0.2), inset 0 0 8px rgba(251,191,36,0.1)',
              }}
            />
            
            {/* Hover glow effect */}
            <div 
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: '0 0 20px rgba(251,191,36,0.4), 0 0 40px rgba(251,191,36,0.2)',
              }}
            />
            
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <IconComponent className="w-4 h-4 text-amber-100/90 group-hover:text-amber-300 transition-colors duration-300 group-hover:scale-110 transform" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default FloatingSocialIcons;
