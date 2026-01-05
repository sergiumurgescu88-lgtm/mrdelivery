import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  LayoutDashboard, 
  Image, 
  Palette, 
  CreditCard as CreditCardIcon, 
  Type, 
  LogOut,
  Menu,
  X,
  Coins
} from 'lucide-react';
import { useState } from 'react';

interface StudioLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { path: '/creator-studio', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/creator-studio/banner', label: 'AI Banner', icon: Image },
  { path: '/creator-studio/logo', label: 'AI Logo', icon: Sparkles },
  { path: '/creator-studio/business-cards', label: 'Business Cards', icon: CreditCardIcon },
  { path: '/creator-studio/social-posts', label: 'Social Posts', icon: Type },
  { path: '/creator-studio/credits', label: 'Credits', icon: Coins },
];

export const StudioLayout: React.FC<StudioLayoutProps> = ({ children }) => {
  const { profile, signOut, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Banner */}
      <div className="bg-gradient-primary text-primary-foreground py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8 text-sm font-medium">
              🎉 January Deals Now On! 🔥
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/creator-studio" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-extrabold text-gradient-primary hidden sm:block">Bannerman</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActive ? 'default' : 'ghost'}
                      size="sm"
                      className={`gap-2 ${isActive ? 'bg-primary text-primary-foreground' : ''}`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Credits Badge */}
              <div className="hidden sm:flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                <Coins className="w-4 h-4 text-warning" />
                <span className="text-sm font-semibold">{profile?.credits ?? 0}</span>
              </div>

              {/* User Actions */}
              {user ? (
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSignOut}
                    className="hidden sm:flex gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Log Out
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link to="/auth">
                    <Button variant="outline" size="sm">Log In</Button>
                  </Link>
                  <Link to="/auth">
                    <Button size="sm" className="bg-gradient-primary text-primary-foreground">Sign Up</Button>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card pb-4">
            <div className="px-4 pt-2 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive ? 'default' : 'ghost'}
                      className={`w-full justify-start gap-3 ${isActive ? 'bg-primary text-primary-foreground' : ''}`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
              
              {/* Mobile Credits */}
              <div className="flex items-center gap-2 px-4 py-2 mt-2 bg-muted rounded-lg">
                <Coins className="w-5 h-5 text-warning" />
                <span className="font-semibold">{profile?.credits ?? 0} Credits</span>
              </div>
              
              {user && (
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 mt-2"
                  onClick={handleSignOut}
                >
                  <LogOut className="w-5 h-5" />
                  Log Out
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};
