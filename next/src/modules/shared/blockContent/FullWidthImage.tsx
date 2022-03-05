/* eslint-disable @next/next/no-img-element */

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  node: {
    alignment: string;
    alt: string;
    imageUrl: {
      url: string;
    };
    fullWidth: boolean;
    retina: boolean;
    link: string;
    target: boolean;
  };
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const fullWidthImage = ({ node }: Props): JSX.Element => {
  const { alignment, alt, imageUrl, fullWidth, retina, link, target } = node;
  return (
    <div
      className={`mb-10 ${
        fullWidth ? 'col-span-12 md:col-span-8 md:col-start-3' : 'col-span-12 md:col-start-4 md:col-span-6'
      }`}
    >
      {link ? (
        <a href={link} target={target ? '_blank' : '_self'}>
          <img
            src={imageUrl?.url && imageUrl.url}
            className={`${retina && 'retina'} ${alignment === 'center' && 'mx-auto'}`}
            alt={alt && alt}
          />
        </a>
      ) : (
        <img
          src={imageUrl?.url && imageUrl.url}
          className={`${retina && 'retina'} ${alignment === 'center' && 'mx-auto'}`}
          alt={alt && alt}
        />
      )}
    </div>
  );
};
export { fullWidthImage };
