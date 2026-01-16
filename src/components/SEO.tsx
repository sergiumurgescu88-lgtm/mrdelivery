import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  locale?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  image = 'https://storage.googleapis.com/gpt-engineer-file-uploads/9P5jSukkRDUKK1VKpcyTAlYQpyp1/social-images/social-1767717082436-ecdb7019-eb47-409e-94be-1d69099f1990.png',
  url = 'https://mrdelivery.lovable.app',
  type = 'website',
  locale = 'ro_RO'
}: SEOProps) => {
  const fullTitle = `${title} | MrDelivery AI Agency`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="MrDelivery AI Agency" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="MrDelivery AI Agency" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="theme-color" content="#FF6B00" />
      <meta name="apple-mobile-web-app-title" content="MrDelivery" />
    </Helmet>
  );
};

export default SEO;
