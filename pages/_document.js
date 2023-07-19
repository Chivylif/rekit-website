import { Html, Head, Main, NextScript } from 'next/document'
// import { GA_TRACKING_ID } from '../lib/gtag' 

export default function Document() {
  return (
    <Html>
      <Head>
      <script async src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
        <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet" />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../assets/images/rekitdesktoplogo.png"
        />
        {/* <script
        strategy="afterInteractive"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
      </Head>
      <body>
        <Main />
        <NextScript>
        <script defer src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
        <script defer src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
        </NextScript>
        <div id='portal' />
      </body>
    </Html>
  )
}