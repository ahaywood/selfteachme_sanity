/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  className?: string;
  height?: string;
  width?: string;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Patreon = ({ className, height = '32', width = '32' }: Props): JSX.Element => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect width="5.59036" height="31.0361" />
    <circle cx="20.4339" cy="11.5663" r="11.5663" />
  </svg>
);

export { Patreon };
