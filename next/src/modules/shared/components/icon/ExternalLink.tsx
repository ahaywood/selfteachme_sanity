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
const ExternalLink = ({ className, height = '32', width = '32' }: Props): JSX.Element => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1931 3V6.375H23.2444L16 13.6211L18.3861 16.0056L25.6306 8.76113V14.8125H29.0056V3H17.1931Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 9.375V18V23.7188V26.4375C2 28.2988 3.51369 29.8125 5.375 29.8125H14.1875H18.0312H22.625C24.4863 29.8125 26 28.2988 26 26.4375V18H22.625V26.4375H18.0312H14.1875H5.375V23.7188V18V9.375H13.8125V6H5.375C3.51369 6 2 7.51538 2 9.375Z"
    />
  </svg>
);

export { ExternalLink };
