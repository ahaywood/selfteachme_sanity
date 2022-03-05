/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  logos: {
    logo: {
      url: 'string';
    };
    name: string;
  }[];
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const LogoGrid = ({ logos }: Props): JSX.Element => (
  <div className="grid grid-cols-4 md:grid-cols-5 gap-5 sm:gap-16 items-center justify-items-center align-content-center px-4 lg:px-0">
    {logos &&
      logos.map((item, index) => (
        <div key={index}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.logo.url} alt={item.name} className="max-w-1 max-h-11" />
        </div>
      ))}
  </div>
);

export { LogoGrid };
