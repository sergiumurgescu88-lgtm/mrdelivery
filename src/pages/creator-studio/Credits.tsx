import { useState } from 'react';
import { StudioLayout } from '@/components/creator-studio/StudioLayout';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { 
  Coins, 
  Check, 
  Sparkles, 
  Zap,
  Star,
  Crown,
  ArrowRight
} from 'lucide-react';

const Credits = () => {
  const { profile, refreshProfile } = useAuth();
  const { t } = useLanguage();
  const [loading, setLoading] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: t.creatorStudio.credits.plans.starter.name,
      price: 9,
      credits: 50,
      popular: false,
      features: t.creatorStudio.credits.plans.starter.features
    },
    {
      id: 'pro',
      name: t.creatorStudio.credits.plans.pro.name,
      price: 29,
      credits: 200,
      popular: true,
      features: t.creatorStudio.credits.plans.pro.features
    },
    {
      id: 'enterprise',
      name: t.creatorStudio.credits.plans.enterprise.name,
      price: 99,
      credits: 1000,
      popular: false,
      features: t.creatorStudio.credits.plans.enterprise.features
    }
  ];

  const handlePurchase = async (planId: string, credits: number) => {
    setLoading(planId);
    
    // Simulate purchase - in production this would integrate with Stripe
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success(`Thank you! ${credits} credits added to your account.`);
      await refreshProfile();
    } catch (error) {
      toast.error('Purchase failed. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <StudioLayout>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Coins className="w-4 h-4" />
            {t.creatorStudio.credits.title}
          </div>
          <h1 className="text-4xl font-extrabold text-foreground mb-4">
            {t.creatorStudio.credits.chooseYourPlan}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.creatorStudio.credits.description}
          </p>
          
          {/* Current Credits */}
          <div className="mt-6 inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4">
            <div className="w-12 h-12 bg-gradient-to-br from-warning to-amber-500 rounded-xl flex items-center justify-center">
              <Coins className="w-6 h-6 text-warning-foreground" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">{t.creatorStudio.credits.yourBalance}</p>
              <p className="text-2xl font-extrabold text-foreground">{profile?.credits ?? 0} {t.creatorStudio.credits.credits}</p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-card rounded-2xl border-2 p-6 transition-all hover:shadow-lg ${
                plan.popular ? 'border-primary shadow-glow' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  {t.creatorStudio.credits.mostPopular}
                </div>
              )}
              
              <div className="text-center mb-6 pt-2">
                <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                  plan.id === 'starter' ? 'bg-gradient-to-br from-primary/20 to-secondary/20' :
                  plan.id === 'pro' ? 'bg-gradient-primary' :
                  'bg-gradient-to-br from-amber-500 to-orange-500'
                }`}>
                  {plan.id === 'starter' && <Sparkles className="w-7 h-7 text-primary" />}
                  {plan.id === 'pro' && <Zap className="w-7 h-7 text-primary-foreground" />}
                  {plan.id === 'enterprise' && <Crown className="w-7 h-7 text-primary-foreground" />}
                </div>
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">{t.creatorStudio.credits.perMonth}</span>
                </div>
                <p className="text-sm text-primary font-semibold mt-2">
                  {plan.credits} {t.creatorStudio.credits.creditsIncluded}
                </p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={() => handlePurchase(plan.id, plan.credits)}
                disabled={loading === plan.id}
                className={`w-full font-bold ${
                  plan.popular 
                    ? 'bg-gradient-primary text-primary-foreground' 
                    : 'bg-card border-2 border-primary text-primary hover:bg-primary/10'
                }`}
              >
                {loading === plan.id ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                    {t.creatorStudio.credits.processing}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {t.creatorStudio.credits.getStarted}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Credit Usage Info */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">{t.creatorStudio.credits.creditUsage}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-muted rounded-xl p-4">
              <div className="text-2xl font-bold text-primary">1 {t.creatorStudio.credits.credits.substring(0, t.creatorStudio.credits.credits.length > 6 ? 4 : 6)}</div>
              <p className="text-sm text-muted-foreground">{t.creatorStudio.credits.bannerGeneration}</p>
            </div>
            <div className="bg-muted rounded-xl p-4">
              <div className="text-2xl font-bold text-secondary">2 {t.creatorStudio.credits.credits.substring(0, t.creatorStudio.credits.credits.length > 6 ? 4 : 6)}</div>
              <p className="text-sm text-muted-foreground">{t.creatorStudio.credits.logoGeneration}</p>
            </div>
            <div className="bg-muted rounded-xl p-4">
              <div className="text-2xl font-bold text-accent">1 {t.creatorStudio.credits.credits.substring(0, t.creatorStudio.credits.credits.length > 6 ? 4 : 6)}</div>
              <p className="text-sm text-muted-foreground">{t.creatorStudio.credits.aiTextGeneration}</p>
            </div>
            <div className="bg-muted rounded-xl p-4">
              <div className="text-2xl font-bold text-success">{t.creatorStudio.credits.free}</div>
              <p className="text-sm text-muted-foreground">{t.creatorStudio.credits.businessCards}</p>
            </div>
          </div>
        </div>
      </div>
    </StudioLayout>
  );
};

export default Credits;
