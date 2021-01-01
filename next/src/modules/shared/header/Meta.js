const Meta = ({ meta, slug }) => {
  return (
    <>
      <meta name="description" content="description" />

      <meta property="og:title" content="Your eye-catching title here" />
      <meta property="og:url" content={`https://selfteach.me/`} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Your entertaining and descriptive copy here, if your meta description is good, use it." />
      <meta property="og:image" content="http://www.yourdomain.com/image-name.jpg" />
      <meta property="og:site_name" content="SelfTeach.me" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="selfteachme" />
      <meta name="twitter:title" content="Your title here" />
      <meta name="twitter:description" content="Your 200-character description here" />
      <meta name="twitter:url" content="http://www.yourdomain.com" />
      <meta name="twitter:image" content="http://www.yourdomain.com /image-name.jpg" />
    </>
  )
}

export { Meta }
