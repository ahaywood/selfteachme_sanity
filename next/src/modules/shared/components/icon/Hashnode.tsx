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
const Hashnode = ({ className, height = '32', width = '32' }: Props): JSX.Element => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.2069 2.16996C18.3136 -0.723319 13.6227 -0.723319 10.7294 2.16996L2.16996 10.7294C-0.723318 13.6227 -0.723319 18.3136 2.16996 21.2069L10.7489 29.7859C13.6422 32.6791 18.3331 32.6791 21.2264 29.7859L29.7859 21.2264C32.6791 18.3331 32.6791 13.6422 29.7859 10.7489L21.2069 2.16996ZM16.0286 21.2775C18.9624 21.2775 21.3408 18.8992 21.3408 15.9653C21.3408 13.0315 18.9624 10.6531 16.0286 10.6531C13.0947 10.6531 10.7164 13.0315 10.7164 15.9653C10.7164 18.8992 13.0947 21.2775 16.0286 21.2775Z"
    />
  </svg>
);

export { Hashnode };
