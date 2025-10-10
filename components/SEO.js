import Head from 'next/head';

const SEO = ({ title, description, keywords, sitemapUrl, googleSiteVerification, ogImage, ogUrl, twitterSite }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {sitemapUrl && <link rel="sitemap" type="application/xml" href={sitemapUrl} />}
      {googleSiteVerification && <meta name="google-site-verification" content={googleSiteVerification} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
    </Head>
  );
};

export default SEO;
