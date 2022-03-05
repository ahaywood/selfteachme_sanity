/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  meta: {
    seoDescription: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
    twitterImageAlt: string;
  };
  slug: SelfTeach.Slug;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Meta = ({ meta, slug }: Props): JSX.Element => {
  const {
    seoDescription,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterImageAlt,
  } = meta || {};

  return (
    <>
      {seoDescription && <meta name="description" content={seoDescription} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {slug && <meta property="og:url" content={`https://selfteach.me/${slug}`} />}
      <meta property="og:type" content="website" />
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="SelfTeach.me" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="selfteachme" />
      {/* Twitter Username  */}
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterDescription && <meta name="twitter:description" content={twitterDescription} />}
      {slug && <meta name="twitter:url" content={`https://selfteach.me/${slug}`} />}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {twitterImageAlt && <meta name="twitter:image:alt" content={twitterImageAlt} />}
    </>
  );
};

export { Meta };
