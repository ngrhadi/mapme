import type { AppProps } from 'next/app';
import Head from 'next/head';
// import '@vercel/examples-ui/globals.css';
import { AuthContextProvider } from 'src/auth/useAuth';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Head>
        <title>MapMe :)</title>
        <link rel="icon" href="/favicon.ico"></link>
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="114x114"
          href="/android-icon-114x114.png"
        ></link>
      </Head>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
