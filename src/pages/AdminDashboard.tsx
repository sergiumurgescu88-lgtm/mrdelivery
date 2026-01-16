import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useUserRole } from '@/hooks/useUserRole';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Shield, Users, FileText, Clock, CheckCircle, XCircle, Eye, Trash2, LogOut, Home } from 'lucide-react';

interface FranchiseApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  status: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

const translations = {
  ro: {
    title: 'Dashboard Admin',
    subtitle: 'Gestionează aplicațiile de franciză',
    applications: 'Aplicații',
    totalApplications: 'Total Aplicații',
    pending: 'În așteptare',
    approved: 'Aprobate',
    rejected: 'Respinse',
    name: 'Nume',
    email: 'Email',
    phone: 'Telefon',
    market: 'Piață',
    status: 'Status',
    date: 'Data',
    actions: 'Acțiuni',
    notes: 'Notițe',
    saveNotes: 'Salvează',
    delete: 'Șterge',
    noApplications: 'Nu există aplicații încă',
    loading: 'Se încarcă...',
    accessDenied: 'Acces Interzis',
    accessDeniedMessage: 'Nu ai permisiunea de a accesa această pagină.',
    goHome: 'Înapoi Acasă',
    logout: 'Deconectare',
    statusPending: 'În așteptare',
    statusApproved: 'Aprobat',
    statusRejected: 'Respins',
    statusContacted: 'Contactat',
    deleteConfirm: 'Ești sigur că vrei să ștergi această aplicație?',
    updated: 'Actualizat cu succes',
    deleted: 'Șters cu succes'
  },
  en: {
    title: 'Admin Dashboard',
    subtitle: 'Manage franchise applications',
    applications: 'Applications',
    totalApplications: 'Total Applications',
    pending: 'Pending',
    approved: 'Approved',
    rejected: 'Rejected',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    market: 'Market',
    status: 'Status',
    date: 'Date',
    actions: 'Actions',
    notes: 'Notes',
    saveNotes: 'Save',
    delete: 'Delete',
    noApplications: 'No applications yet',
    loading: 'Loading...',
    accessDenied: 'Access Denied',
    accessDeniedMessage: 'You do not have permission to access this page.',
    goHome: 'Go Home',
    logout: 'Logout',
    statusPending: 'Pending',
    statusApproved: 'Approved',
    statusRejected: 'Rejected',
    statusContacted: 'Contacted',
    deleteConfirm: 'Are you sure you want to delete this application?',
    updated: 'Updated successfully',
    deleted: 'Deleted successfully'
  },
  es: {
    title: 'Panel de Admin',
    subtitle: 'Gestiona las solicitudes de franquicia',
    applications: 'Solicitudes',
    totalApplications: 'Total Solicitudes',
    pending: 'Pendientes',
    approved: 'Aprobadas',
    rejected: 'Rechazadas',
    name: 'Nombre',
    email: 'Email',
    phone: 'Teléfono',
    market: 'Mercado',
    status: 'Estado',
    date: 'Fecha',
    actions: 'Acciones',
    notes: 'Notas',
    saveNotes: 'Guardar',
    delete: 'Eliminar',
    noApplications: 'No hay solicitudes todavía',
    loading: 'Cargando...',
    accessDenied: 'Acceso Denegado',
    accessDeniedMessage: 'No tienes permiso para acceder a esta página.',
    goHome: 'Ir al Inicio',
    logout: 'Cerrar sesión',
    statusPending: 'Pendiente',
    statusApproved: 'Aprobado',
    statusRejected: 'Rechazado',
    statusContacted: 'Contactado',
    deleteConfirm: '¿Estás seguro de que quieres eliminar esta solicitud?',
    updated: 'Actualizado con éxito',
    deleted: 'Eliminado con éxito'
  }
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { isAdmin, loading: roleLoading } = useUserRole();
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

  const [applications, setApplications] = useState<FranchiseApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingNotes, setEditingNotes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (!roleLoading && !isAdmin) {
      return;
    }
    if (isAdmin) {
      fetchApplications();
    }
  }, [isAdmin, roleLoading]);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('franchise_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
      toast.error('Error loading applications');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('franchise_applications')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      setApplications(apps => 
        apps.map(app => app.id === id ? { ...app, status } : app)
      );
      toast.success(t.updated);
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Error updating status');
    }
  };

  const saveNotes = async (id: string) => {
    try {
      const { error } = await supabase
        .from('franchise_applications')
        .update({ notes: editingNotes[id] })
        .eq('id', id);

      if (error) throw error;
      
      setApplications(apps => 
        apps.map(app => app.id === id ? { ...app, notes: editingNotes[id] } : app)
      );
      toast.success(t.updated);
    } catch (error) {
      console.error('Error saving notes:', error);
      toast.error('Error saving notes');
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm(t.deleteConfirm)) return;

    try {
      const { error } = await supabase
        .from('franchise_applications')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setApplications(apps => apps.filter(app => app.id !== id));
      toast.success(t.deleted);
    } catch (error) {
      console.error('Error deleting application:', error);
      toast.error('Error deleting application');
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
      pending: 'secondary',
      approved: 'default',
      rejected: 'destructive',
      contacted: 'outline'
    };
    
    const labels: { [key: string]: string } = {
      pending: t.statusPending,
      approved: t.statusApproved,
      rejected: t.statusRejected,
      contacted: t.statusContacted
    };

    return (
      <Badge variant={variants[status] || 'secondary'}>
        {labels[status] || status}
      </Badge>
    );
  };

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === 'pending').length,
    approved: applications.filter(a => a.status === 'approved').length,
    rejected: applications.filter(a => a.status === 'rejected').length
  };

  // Loading state
  if (roleLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">{t.loading}</p>
        </div>
      </div>
    );
  }

  // Access denied
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center">
            <Shield className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">{t.accessDenied}</h2>
            <p className="text-muted-foreground mb-6">{t.accessDeniedMessage}</p>
            <Button onClick={() => navigate('/')} className="gap-2">
              <Home className="w-4 h-4" />
              {t.goHome}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">{t.title}</h1>
              <p className="text-sm text-muted-foreground">{t.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
              <Home className="w-4 h-4" />
            </Button>
            <Button variant="outline" onClick={signOut} className="gap-2">
              <LogOut className="w-4 h-4" />
              {t.logout}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.totalApplications}</p>
                  <p className="text-2xl font-bold">{stats.total}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Clock className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.pending}</p>
                  <p className="text-2xl font-bold">{stats.pending}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.approved}</p>
                  <p className="text-2xl font-bold">{stats.approved}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.rejected}</p>
                  <p className="text-2xl font-bold">{stats.rejected}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              {t.applications}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
              </div>
            ) : applications.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>{t.noApplications}</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t.name}</TableHead>
                      <TableHead>{t.email}</TableHead>
                      <TableHead>{t.phone}</TableHead>
                      <TableHead>{t.market}</TableHead>
                      <TableHead>{t.status}</TableHead>
                      <TableHead>{t.date}</TableHead>
                      <TableHead>{t.notes}</TableHead>
                      <TableHead>{t.actions}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell className="font-medium">{app.name}</TableCell>
                        <TableCell>
                          <a href={`mailto:${app.email}`} className="text-primary hover:underline">
                            {app.email}
                          </a>
                        </TableCell>
                        <TableCell>
                          <a href={`tel:${app.phone}`} className="hover:underline">
                            {app.phone}
                          </a>
                        </TableCell>
                        <TableCell>{app.country}</TableCell>
                        <TableCell>
                          <Select
                            value={app.status}
                            onValueChange={(value) => updateStatus(app.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">{t.statusPending}</SelectItem>
                              <SelectItem value="contacted">{t.statusContacted}</SelectItem>
                              <SelectItem value="approved">{t.statusApproved}</SelectItem>
                              <SelectItem value="rejected">{t.statusRejected}</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(app.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Textarea
                              placeholder={t.notes}
                              value={editingNotes[app.id] ?? app.notes ?? ''}
                              onChange={(e) => setEditingNotes({ ...editingNotes, [app.id]: e.target.value })}
                              className="min-w-[150px] h-16 text-sm"
                            />
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => saveNotes(app.id)}
                            >
                              {t.saveNotes}
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteApplication(app.id)}
                            className="gap-1"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
