import { Html, Head, Main, NextScript } from 'next/document'
// import 'antd/dist/antd.css'; // for Ant Design v4
// import '../styles/globals.css'; // your Tailwind or custom styles

// import { GA_TRACKING_ID } from '../lib/gtag' 

export default function Document() {
  return (
    <Html>
      <Head>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/images/rekitdesktoplogo.png"
      />

      </Head>
      <body>
        <Main />
        <NextScript>
        </NextScript>
        <div id='portal' />
      </body>
    </Html>
  )
}