import { useState, useEffect } from 'react';
import { StudioLayout } from '@/components/creator-studio/StudioLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  User, 
  Mail, 
  Coins,
  Image,
  Sparkles,
  Type,
  CreditCard,
  Loader2,
  Save,
  Calendar,
  Trash2,
  ExternalLink
} from 'lucide-react';

interface GeneratedBanner {
  id: string;
  prompt: string;
  image_url: string | null;
  width: number | null;
  height: number | null;
  created_at: string;
}

interface GeneratedLogo {
  id: string;
  company_name: string;
  prompt: string;
  image_url: string | null;
  style: string | null;
  created_at: string;
}

interface GeneratedSocialPost {
  id: string;
  text_content: string;
  platform: string | null;
  background_color: string | null;
  font_style: string | null;
  created_at: string;
}

interface BusinessCard {
  id: string;
  name: string;
  title: string | null;
  company: string | null;
  template: string | null;
  color_scheme: string | null;
  created_at: string;
}

const Profile = () => {
  const { user, profile, refreshProfile } = useAuth();
  const { t } = useLanguage();
  const [displayName, setDisplayName] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [banners, setBanners] = useState<GeneratedBanner[]>([]);
  const [logos, setLogos] = useState<GeneratedLogo[]>([]);
  const [socialPosts, setSocialPosts] = useState<GeneratedSocialPost[]>([]);
  const [businessCards, setBusinessCards] = useState<BusinessCard[]>([]);

  useEffect(() => {
    if (profile?.display_name) {
      setDisplayName(profile.display_name);
    }
  }, [profile]);

  useEffect(() => {
    if (user) {
      fetchGeneratedContent();
    }
  }, [user]);

  const fetchGeneratedContent = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const [bannersRes, logosRes, postsRes, cardsRes] = await Promise.all([
        supabase.from('generated_banners').select('*').eq('user_id', user.id).order('created_at', { ascending: false }),
        supabase.from('generated_logos').select('*').eq('user_id', user.id).order('created_at', { ascending: false }),
        supabase.from('generated_social_posts').select('*').eq('user_id', user.id).order('created_at', { ascending: false }),
        supabase.from('business_cards').select('*').eq('user_id', user.id).order('created_at', { ascending: false })
      ]);

      if (bannersRes.data) setBanners(bannersRes.data);
      if (logosRes.data) setLogos(logosRes.data);
      if (postsRes.data) setSocialPosts(postsRes.data);
      if (cardsRes.data) setBusinessCards(cardsRes.data);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async () => {
    if (!user) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ display_name: displayName })
        .eq('user_id', user.id);

      if (error) throw error;
      
      toast.success(t.creatorStudio.profile.profileUpdated);
      await refreshProfile();
    } catch (error) {
      console.error('Update error:', error);
      toast.error(t.creatorStudio.profile.updateFailed);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteBanner = async (id: string) => {
    try {
      const { error } = await supabase.from('generated_banners').delete().eq('id', id);
      if (error) throw error;
      setBanners(prev => prev.filter(b => b.id !== id));
      toast.success(t.creatorStudio.profile.itemDeleted);
    } catch (error) {
      toast.error(t.creatorStudio.profile.deleteFailed);
    }
  };

  const handleDeleteLogo = async (id: string) => {
    try {
      const { error } = await supabase.from('generated_logos').delete().eq('id', id);
      if (error) throw error;
      setLogos(prev => prev.filter(l => l.id !== id));
      toast.success(t.creatorStudio.profile.itemDeleted);
    } catch (error) {
      toast.error(t.creatorStudio.profile.deleteFailed);
    }
  };

  const handleDeleteSocialPost = async (id: string) => {
    try {
      const { error } = await supabase.from('generated_social_posts').delete().eq('id', id);
      if (error) throw error;
      setSocialPosts(prev => prev.filter(p => p.id !== id));
      toast.success(t.creatorStudio.profile.itemDeleted);
    } catch (error) {
      toast.error(t.creatorStudio.profile.deleteFailed);
    }
  };

  const handleDeleteBusinessCard = async (id: string) => {
    try {
      const { error } = await supabase.from('business_cards').delete().eq('id', id);
      if (error) throw error;
      setBusinessCards(prev => prev.filter(c => c.id !== id));
      toast.success(t.creatorStudio.profile.itemDeleted);
    } catch (error) {
      toast.error(t.creatorStudio.profile.deleteFailed);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (!user) {
    return (
      <StudioLayout>
        <div className="text-center py-12">
          <User className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">{t.creatorStudio.profile.loginRequired}</h2>
          <p className="text-muted-foreground">{t.creatorStudio.profile.loginRequiredDesc}</p>
        </div>
      </StudioLayout>
    );
  }

  return (
    <StudioLayout>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
            <User className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-foreground">{t.creatorStudio.profile.title}</h1>
            <p className="text-muted-foreground">{t.creatorStudio.profile.subtitle}</p>
          </div>
        </div>

        <Tabs defaultValue="settings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="settings" className="gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">{t.creatorStudio.profile.settings}</span>
            </TabsTrigger>
            <TabsTrigger value="banners" className="gap-2">
              <Image className="w-4 h-4" />
              <span className="hidden sm:inline">{t.creatorStudio.profile.banners}</span>
            </TabsTrigger>
            <TabsTrigger value="logos" className="gap-2">
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">{t.creatorStudio.profile.logos}</span>
            </TabsTrigger>
            <TabsTrigger value="posts" className="gap-2">
              <Type className="w-4 h-4" />
              <span className="hidden sm:inline">{t.creatorStudio.profile.posts}</span>
            </TabsTrigger>
            <TabsTrigger value="cards" className="gap-2">
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">{t.creatorStudio.profile.cards}</span>
            </TabsTrigger>
          </TabsList>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Account Info */}
              <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
                <h3 className="text-lg font-bold text-foreground">{t.creatorStudio.profile.accountInfo}</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    {t.creatorStudio.profile.email}
                  </Label>
                  <Input
                    id="email"
                    value={user.email || ''}
                    disabled
                    className="bg-muted"
                  />
                  <p className="text-xs text-muted-foreground">{t.creatorStudio.profile.emailCantChange}</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="displayName" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    {t.creatorStudio.profile.displayName}
                  </Label>
                  <Input
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder={t.creatorStudio.profile.displayNamePlaceholder}
                    className="bg-background"
                  />
                </div>

                <Button
                  onClick={handleUpdateProfile}
                  disabled={saving}
                  className="w-full bg-gradient-primary text-primary-foreground font-bold"
                >
                  {saving ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t.creatorStudio.profile.saving}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      {t.creatorStudio.profile.saveChanges}
                    </span>
                  )}
                </Button>
              </div>

              {/* Credits Summary */}
              <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
                <h3 className="text-lg font-bold text-foreground">{t.creatorStudio.profile.creditsSummary}</h3>
                
                <div className="bg-gradient-primary rounded-xl p-6 text-center">
                  <Coins className="w-12 h-12 text-primary-foreground mx-auto mb-2" />
                  <div className="text-4xl font-extrabold text-primary-foreground">{profile?.credits ?? 0}</div>
                  <p className="text-primary-foreground/80">{t.creatorStudio.credits.credits}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">{banners.length}</div>
                    <p className="text-sm text-muted-foreground">{t.creatorStudio.profile.banners}</p>
                  </div>
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-2xl font-bold text-secondary">{logos.length}</div>
                    <p className="text-sm text-muted-foreground">{t.creatorStudio.profile.logos}</p>
                  </div>
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-2xl font-bold text-accent">{socialPosts.length}</div>
                    <p className="text-sm text-muted-foreground">{t.creatorStudio.profile.posts}</p>
                  </div>
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-2xl font-bold text-warning">{businessCards.length}</div>
                    <p className="text-sm text-muted-foreground">{t.creatorStudio.profile.cards}</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Banners Tab */}
          <TabsContent value="banners">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">{t.creatorStudio.profile.generatedBanners}</h3>
              {loading ? (
                <div className="text-center py-8">
                  <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
                </div>
              ) : banners.length === 0 ? (
                <div className="text-center py-8">
                  <Image className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">{t.creatorStudio.profile.noBanners}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {banners.map((banner) => (
                    <div key={banner.id} className="bg-muted rounded-xl overflow-hidden group">
                      {banner.image_url ? (
                        <img src={banner.image_url} alt="Banner" className="w-full aspect-video object-cover" />
                      ) : (
                        <div className="w-full aspect-video bg-gradient-primary flex items-center justify-center">
                          <Image className="w-8 h-8 text-primary-foreground" />
                        </div>
                      )}
                      <div className="p-3">
                        <p className="text-sm text-foreground line-clamp-2 mb-2">{banner.prompt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(banner.created_at)}
                          </span>
                          <div className="flex gap-1">
                            {banner.image_url && (
                              <a href={banner.image_url} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                  <ExternalLink className="w-3 h-3" />
                                </Button>
                              </a>
                            )}
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                              onClick={() => handleDeleteBanner(banner.id)}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          {/* Logos Tab */}
          <TabsContent value="logos">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">{t.creatorStudio.profile.generatedLogos}</h3>
              {loading ? (
                <div className="text-center py-8">
                  <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
                </div>
              ) : logos.length === 0 ? (
                <div className="text-center py-8">
                  <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">{t.creatorStudio.profile.noLogos}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {logos.map((logo) => (
                    <div key={logo.id} className="bg-muted rounded-xl overflow-hidden">
                      {logo.image_url ? (
                        <img src={logo.image_url} alt="Logo" className="w-full aspect-square object-contain p-4" />
                      ) : (
                        <div className="w-full aspect-square bg-gradient-primary flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-primary-foreground" />
                        </div>
                      )}
                      <div className="p-3">
                        <p className="text-sm font-semibold text-foreground">{logo.company_name}</p>
                        <p className="text-xs text-muted-foreground">{logo.style}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(logo.created_at)}
                          </span>
                          <div className="flex gap-1">
                            {logo.image_url && (
                              <a href={logo.image_url} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                  <ExternalLink className="w-3 h-3" />
                                </Button>
                              </a>
                            )}
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                              onClick={() => handleDeleteLogo(logo.id)}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          {/* Social Posts Tab */}
          <TabsContent value="posts">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">{t.creatorStudio.profile.savedPosts}</h3>
              {loading ? (
                <div className="text-center py-8">
                  <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
                </div>
              ) : socialPosts.length === 0 ? (
                <div className="text-center py-8">
                  <Type className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">{t.creatorStudio.profile.noPosts}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {socialPosts.map((post) => (
                    <div key={post.id} className="bg-muted rounded-xl overflow-hidden">
                      <div 
                        className="aspect-square flex items-center justify-center p-4"
                        style={{ backgroundColor: post.background_color || '#667eea' }}
                      >
                        <p className="text-white text-center font-bold line-clamp-4">{post.text_content}</p>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full capitalize">
                            {post.platform}
                          </span>
                          <span className="text-xs text-muted-foreground">{post.font_style}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.created_at)}
                          </span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                            onClick={() => handleDeleteSocialPost(post.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          {/* Business Cards Tab */}
          <TabsContent value="cards">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">{t.creatorStudio.profile.savedCards}</h3>
              {loading ? (
                <div className="text-center py-8">
                  <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
                </div>
              ) : businessCards.length === 0 ? (
                <div className="text-center py-8">
                  <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">{t.creatorStudio.profile.noCards}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {businessCards.map((card) => (
                    <div key={card.id} className="bg-muted rounded-xl overflow-hidden">
                      <div 
                        className="aspect-[1.75/1] p-4 flex flex-col justify-between"
                        style={{ 
                          background: card.color_scheme === 'blue' ? 'linear-gradient(135deg, #3B82F6, #1E40AF)' :
                                      card.color_scheme === 'green' ? 'linear-gradient(135deg, #22C55E, #166534)' :
                                      card.color_scheme === 'purple' ? 'linear-gradient(135deg, #A855F7, #7C3AED)' :
                                      card.color_scheme === 'orange' ? 'linear-gradient(135deg, #F97316, #C2410C)' :
                                      'linear-gradient(135deg, #3B82F6, #1E40AF)'
                        }}
                      >
                        <div>
                          <p className="text-white font-bold">{card.name}</p>
                          <p className="text-white/80 text-xs">{card.title}</p>
                        </div>
                        <p className="text-white/80 text-xs">{card.company}</p>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full capitalize">
                            {card.template}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(card.created_at)}
                          </span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                            onClick={() => handleDeleteBusinessCard(card.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </StudioLayout>
  );
};

export default Profile;
