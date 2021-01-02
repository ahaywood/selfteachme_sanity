import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('YOUR_FATHOM_TRACKING_CODE', {
      includedDomains: ['YOUR_SITE_URL'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return <Component {...pageProps} />;
}

export default MyApp;
