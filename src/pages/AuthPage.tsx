import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Loader2 } from 'lucide-react';
import SEO from '@/components/SEO';

const authTranslations = {
  ro: {
    seo: {
      title: 'Autentificare - MrDelivery Franciză',
      description: 'Conectează-te pentru a accesa informațiile despre franciză MrDelivery'
    },
    title: 'Acces Franciză',
    subtitle: 'Conectează-te pentru a vedea oportunitatea de franciză',
    googleButton: 'Accesează cu Google - E instant',
    googleSubtext: 'Te conectezi cu un click și ai acces imediat.',
    divider: 'sau continuă cu email',
    emailLabel: 'Email',
    passwordLabel: 'Parolă',
    loginButton: 'Conectează-te',
    signupButton: 'Creează cont',
    switchToSignup: 'Nu ai cont? Creează unul',
    switchToLogin: 'Ai deja cont? Conectează-te',
    redirecting: 'Bun venit! Ești redirecționat...',
    error: 'A apărut o eroare. Încearcă din nou.',
    emailExists: 'Acest email este deja înregistrat. Încearcă să te conectezi.',
    invalidCredentials: 'Email sau parolă incorectă.',
    weakPassword: 'Parola trebuie să aibă cel puțin 6 caractere.'
  },
  en: {
    seo: {
      title: 'Authentication - MrDelivery Franchise',
      description: 'Sign in to access MrDelivery franchise information'
    },
    title: 'Franchise Access',
    subtitle: 'Sign in to view the franchise opportunity',
    googleButton: 'Continue with Google - Instant',
    googleSubtext: 'One click and you get immediate access.',
    divider: 'or continue with email',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    loginButton: 'Sign In',
    signupButton: 'Create Account',
    switchToSignup: "Don't have an account? Create one",
    switchToLogin: 'Already have an account? Sign in',
    redirecting: 'Welcome! Redirecting...',
    error: 'An error occurred. Please try again.',
    emailExists: 'This email is already registered. Try signing in.',
    invalidCredentials: 'Invalid email or password.',
    weakPassword: 'Password must be at least 6 characters.'
  },
  es: {
    seo: {
      title: 'Autenticación - Franquicia MrDelivery',
      description: 'Inicia sesión para acceder a la información de franquicia MrDelivery'
    },
    title: 'Acceso Franquicia',
    subtitle: 'Inicia sesión para ver la oportunidad de franquicia',
    googleButton: 'Accede con Google - Es instantáneo',
    googleSubtext: 'Te conectas con un clic y tienes acceso inmediato.',
    divider: 'o continúa con email',
    emailLabel: 'Email',
    passwordLabel: 'Contraseña',
    loginButton: 'Iniciar Sesión',
    signupButton: 'Crear Cuenta',
    switchToSignup: '¿No tienes cuenta? Crea una',
    switchToLogin: '¿Ya tienes cuenta? Inicia sesión',
    redirecting: '¡Bienvenido! Redirigiendo...',
    error: 'Ocurrió un error. Inténtalo de nuevo.',
    emailExists: 'Este email ya está registrado. Intenta iniciar sesión.',
    invalidCredentials: 'Email o contraseña incorrectos.',
    weakPassword: 'La contraseña debe tener al menos 6 caracteres.'
  }
};

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = authTranslations[language] || authTranslations.en;
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setRedirecting(true);
        setTimeout(() => {
          navigate('/franchise');
        }, 1000);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate('/franchise');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/franchise`
        }
      });
      
      if (error) throw error;
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || t.error
      });
      setGoogleLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.length < 6) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: t.weakPassword
      });
      return;
    }
    
    setLoading(true);
    
    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            throw new Error(t.invalidCredentials);
          }
          throw error;
        }
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/franchise`
          }
        });
        
        if (error) {
          if (error.message.includes('already registered')) {
            throw new Error(t.emailExists);
          }
          throw error;
        }
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || t.error
      });
    } finally {
      setLoading(false);
    }
  };

  if (redirecting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
          <p className="text-xl font-medium text-foreground">{t.redirecting}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={t.seo.title}
        description={t.seo.description}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          {/* Logo & Title */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              MrDelivery
            </h1>
            <h2 className="text-2xl font-semibold text-foreground">{t.title}</h2>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>

          {/* Auth Card */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-6">
            {/* Google Sign In - Primary */}
            <div className="space-y-3">
              <Button
                onClick={handleGoogleSignIn}
                disabled={googleLoading}
                className="w-full h-14 text-lg font-semibold bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-primary/50 transition-all duration-300 shadow-sm"
              >
                {googleLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                ) : (
                  <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                )}
                {t.googleButton}
              </Button>
              <p className="text-center text-sm text-muted-foreground">{t.googleSubtext}</p>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-4 text-muted-foreground">{t.divider}</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleEmailAuth} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">{t.emailLabel}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                  placeholder="you@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">{t.passwordLabel}</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12"
                  placeholder="••••••••"
                  minLength={6}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-base font-semibold"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  isLogin ? t.loginButton : t.signupButton
                )}
              </Button>
            </form>

            {/* Switch Mode */}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full text-center text-sm text-primary hover:text-primary/80 transition-colors"
            >
              {isLogin ? t.switchToSignup : t.switchToLogin}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
