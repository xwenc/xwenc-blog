import "../styles/index.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-KFKL58QK" />
      <Script id="google-analytics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GTM-KFKL58QK');
`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
