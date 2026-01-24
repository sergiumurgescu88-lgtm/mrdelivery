import { Youtube, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@MrDeliveryAIAgency',
    icon: Youtube,
    color: '#FF0000',
    hoverBg: 'hover:bg-red-600',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61586838691780',
    icon: Facebook,
    color: '#1877F2',
    hoverBg: 'hover:bg-blue-600',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/misterdeliveryai/',
    icon: Instagram,
    color: '#E4405F',
    hoverBg: 'hover:bg-pink-600',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@misterdeliveryai',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    color: '#000000',
    hoverBg: 'hover:bg-gray-800',
  },
  {
    name: 'X',
    url: 'https://x.com/mrdeliveryai',
    icon: Twitter,
    color: '#000000',
    hoverBg: 'hover:bg-gray-800',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com',
    icon: Linkedin,
    color: '#0A66C2',
    hoverBg: 'hover:bg-blue-700',
  },
];

const FloatingSocialIcons = () => {
  return (
    <div className="fixed right-4 bottom-28 md:bottom-32 z-40 flex flex-col gap-2">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              w-10 h-10 md:w-11 md:h-11
              rounded-full
              bg-black/80 backdrop-blur-sm
              border border-amber-500/30
              flex items-center justify-center
              text-white
              shadow-lg shadow-black/40
              transition-all duration-300
              hover:scale-110 hover:border-amber-400/60
              ${social.hoverBg}
            `}
            title={social.name}
            style={{
              boxShadow: `0 0 15px rgba(0,0,0,0.5), 0 0 30px ${social.color}20`,
            }}
          >
            <IconComponent className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default FloatingSocialIcons;
