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
const Arrow = ({ className, height = '32', width = '32' }: Props): JSX.Element => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 17.5V13.5H21V5.5L31 15.5L21 25.5V17.5H2.5Z" />
  </svg>
);

export { Arrow };
