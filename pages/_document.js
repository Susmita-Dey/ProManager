import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name="application-name" content="ProManager" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ProManager" />
        <meta name="description" content="Best Productivity Tool in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/logo_white.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/logo_white.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo_white.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/logo_white.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/logo_white.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo_white.png" />
        <link rel="mask-icon" href="/logo_white.png" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://promanager.vercel.app" />
        <meta name="twitter:title" content="ProManager" />
        <meta name="twitter:description" content="Best Productivity Tool in the world" />
        <meta name="twitter:image" content="https://promanager.vercel.app/icons/android-chrome-192x192.png" />
        <meta name="twitter:creator" content="@its_SusmitaDey" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ProManager" />
        <meta property="og:description" content="Best Productivity Tool in the world" />
        <meta property="og:site_name" content="ProManager" />
        <meta property="og:url" content="https://promanager.vercel.app" />
        <meta property="og:image" content="https://promanager.vercel.app/icons/apple-touch-icon.png" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
