import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  UtensilsCrossed, 
  LayoutDashboard, 
  Sparkles, 
  CreditCard, 
  Share2,
  Menu,
  X,
  Truck
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/ai-menu', label: 'AI Menu', icon: Sparkles },
  { href: '/delivery-cards', label: 'Delivery Cards', icon: CreditCard },
  { href: '/social-posts', label: 'Social Posts', icon: Share2 },
];

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Promo Banner */}
      <div className="bg-gradient-primary overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 text-primary-foreground text-sm font-medium">
          <span className="mx-8">🎉 January Deals Now On! 🔥</span>
          <span className="mx-8">🎉 January Deals Now On! 🔥</span>
          <span className="mx-8">🎉 January Deals Now On! 🔥</span>
          <span className="mx-8">🎉 January Deals Now On! 🔥</span>
          <span className="mx-8">🎉 January Deals Now On! 🔥</span>
          <span className="mx-8">🎉 January Deals Now On! 🔥</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-primary rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
              <Truck className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient-primary hidden sm:block">
              MrDelivery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <Link key={item.href} to={item.href}>
                  <Button
                    variant={isActive ? 'default' : 'ghost'}
                    className={`gap-2 ${
                      isActive 
                        ? 'bg-gradient-primary text-primary-foreground shadow-md' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Log In
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground shadow-md hover:shadow-lg transition-shadow">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-gradient-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            <div className="pt-4 border-t border-border space-y-2">
              <Button variant="outline" className="w-full">
                Log In
              </Button>
              <Button className="w-full bg-gradient-primary text-primary-foreground">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
