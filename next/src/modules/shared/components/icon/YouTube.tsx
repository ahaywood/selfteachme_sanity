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
const YouTube = ({ className, height = '32', width = '32' }: Props): JSX.Element => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.6 7.2C29.7 5.6 28.8 5.3 26.9 5.2C25 5.1 20.2 5 16 5C11.8 5 7 5.1 5.1 5.2C3.2 5.3 2.2 5.6 1.4 7.2C0.5 8.7 0 11.4 0 16.2C0 20.9 0.5 23.6 1.4 25.2C2.3 26.8 3.2 27.1 5.1 27.2C7 27.3 11.8 27.4 16 27.4C20.2 27.4 25 27.3 26.9 27.2C28.8 27.1 29.8 26.8 30.6 25.2C31.5 23.6 32 20.9 32 16.2C32 11.4 31.5 8.7 30.6 7.2ZM12.8 22V10.3L21.9 16.2L12.8 22Z"
    />
  </svg>
);

export { YouTube };
