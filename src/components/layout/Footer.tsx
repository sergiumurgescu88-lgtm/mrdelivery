import { Link } from 'react-router-dom';
import { Truck, Sparkles, CreditCard, Share2, UtensilsCrossed } from 'lucide-react';

const tools = [
  {
    title: 'AI Menu Generator',
    description: 'Answer a few questions and let MrDelivery design professional menus for your restaurant',
    icon: Sparkles,
  },
  {
    title: 'Delivery Cards',
    description: 'Create beautiful delivery cards and promo materials for your delivery service',
    icon: CreditCard,
  },
  {
    title: 'Social Post Generator',
    description: 'Create eye-catching social media posts for your restaurant promotions',
    icon: Share2,
  },
  {
    title: 'Menu Banner Generator',
    description: 'Describe your vision and let MrDelivery generate complete menu banners with images',
    icon: UtensilsCrossed,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tools Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-primary rounded-xl">
              <Truck className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-gradient-primary">MrDelivery</h3>
          </div>
          <p className="text-muted-foreground mb-8">
            Create your Restaurant Brand using these Powerful Tools
          </p>
          <Link 
            to="/pricing" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-8"
          >
            View Plans →
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={index}
                  className="p-5 rounded-2xl bg-muted/50 hover:bg-muted transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-card rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground">{tool.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-6 sm:p-8 text-center">
          <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
            Need professional menus for your restaurant?
          </h4>
          <p className="text-muted-foreground mb-4">
            Create stunning AI-powered menus in seconds with our Menu Maker tool. 
            Perfect for restaurants, cafes, and delivery services.
          </p>
          <Link 
            to="/ai-menu"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Sparkles className="w-5 h-5" />
            Try Menu Maker Now
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 MrDelivery. All rights reserved.</p>
          <p className="mt-1">⭐ Rated 4.9/5 from over 10,000+ happy restaurants</p>
        </div>
      </div>
    </footer>
  );
};
