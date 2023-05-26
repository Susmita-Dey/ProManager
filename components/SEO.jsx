import Head from "next/head";
import SiteConfig from "site.config.js";

export default function SEO({ title, description = "" }) {
  const siteMetadata = SiteConfig.siteMetadata;
  const metaDescription = description || siteMetadata.description;

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <link rel="icon" type="image/png" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/favicon.ico" />
    </Head>
  );
}