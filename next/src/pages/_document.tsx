/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* favicon */}
          <link rel="icon" href="/favicon.png" />
          <meta name="author" content="Amy Dutton" />

          {/* custom fonts */}
          <link rel="stylesheet" href="https://use.typekit.net/tle2trn.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet" />

          {/* google adsense */}
          <script
            data-ad-client="ca-pub-8562034122116462"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />

          {/* right message */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
          (function(p, a, n, d, o, b, c) {
            o = n.createElement('script'); o.type = 'text/javascript'; o.async = true; o.src = 'https://tb.rightmessage.com/'+p+'.js';
            b = n.getElementsByTagName('script')[0]; d = function(h, u, i) { var c = n.createElement('style'); c.id = 'rmcloak'+i;
                c.type = 'text/css'; c.appendChild(n.createTextNode('.rmcloak'+h+'{visibility:hidden}.rmcloak'+u+'{display:none}'));
                b.parentNode.insertBefore(c, b); return c; }; c = d('', '-hidden', ''); d('-stay-invisible', '-stay-hidden', '-stay');
            setTimeout(o.onerror = function() {c.parentNode && c.parentNode.removeChild(c); }, a); b.parentNode.insertBefore(o, b);
          })('264426316', 20000, document);`,
            }}
          />
        </Head>
        <body className="font-serif">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
