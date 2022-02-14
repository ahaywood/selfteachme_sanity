import type { AppProps /* , AppContext */ } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // Set up Fathom Analytics
  // Reference: https://usefathom.com/support/tracking
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('WOPIQSIX', {
      includedDomains: ['selfteach.me'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a page view when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
