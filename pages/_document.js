import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"
Script

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=G-7PDQT8H6S9`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-7PDQT8H6S9');
              `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
