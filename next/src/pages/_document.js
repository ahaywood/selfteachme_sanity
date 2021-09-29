import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
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
            data-ad-client="ca-pub-6967067372431081"
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

          {/* CIRCLE SO */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function (w,d,s,o,f,js,fjs) {
              w['circleWidget'] = o;w[o] = w[o] || function () {(w[o].q = w[o].q || []).push(arguments)};
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
              }(window, document, 'script', 'mw', 'https://selfteachme.circle.so/external/widget.js'));

            mw('init', {
              community_public_uid: '8e5e0dd4',
            brand_color: '#F40082'
              });

              // Optional: pass in a default space slug and/or post slug
              // mw('setDefaults', {
              //   space_slug: '',
              //   post_slug: ''
              // });`,
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
