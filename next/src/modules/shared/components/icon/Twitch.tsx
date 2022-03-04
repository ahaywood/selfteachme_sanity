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
const Twitch = ({ className, height = '32', width = '32' }: Props): JSX.Element => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.2069 0H31.6864V19.3892L23.4368 27.6913H17.2365L12.9278 32H8.93432V27.6913H1V5.51724L3.2069 0ZM5.83415 2.83744H28.8489V18.3383L24.0673 23.0148H16.5534L12.2447 27.3235V23.0148H5.83415V2.83744Z"
    />
    <path d="M31.6864 0H32.1864V-0.5H31.6864V0ZM3.2069 0V-0.5H2.86838L2.74266 -0.185695L3.2069 0ZM31.6864 19.3892L32.041 19.7416L32.1864 19.5953V19.3892H31.6864ZM23.4368 27.6913V28.1913H23.6448L23.7915 28.0437L23.4368 27.6913ZM17.2365 27.6913V27.1913H17.0293L16.8829 27.3377L17.2365 27.6913ZM12.9278 32V32.5H13.1349L13.2813 32.3536L12.9278 32ZM8.93432 32H8.43432V32.5H8.93432V32ZM8.93432 27.6913H9.43432V27.1913H8.93432V27.6913ZM1 27.6913H0.5V28.1913H1V27.6913ZM1 5.51724L0.535762 5.33155L0.5 5.42095V5.51724H1ZM28.8489 2.83744H29.3489V2.33744H28.8489V2.83744ZM5.83415 2.83744V2.33744H5.33415V2.83744H5.83415ZM28.8489 18.3383L29.1985 18.6957L29.3489 18.5486V18.3383H28.8489ZM24.0673 23.0148V23.5148H24.2712L24.4169 23.3722L24.0673 23.0148ZM16.5534 23.0148V22.5148H16.3463L16.1998 22.6612L16.5534 23.0148ZM12.2447 27.3235H11.7447V28.5306L12.5982 27.677L12.2447 27.3235ZM12.2447 23.0148H12.7447V22.5148H12.2447V23.0148ZM5.83415 23.0148H5.33415V23.5148H5.83415V23.0148ZM31.6864 -0.5H3.2069V0.5H31.6864V-0.5ZM32.1864 19.3892V0H31.1864V19.3892H32.1864ZM23.7915 28.0437L32.041 19.7416L31.3317 19.0367L23.0821 27.3389L23.7915 28.0437ZM17.2365 28.1913H23.4368V27.1913H17.2365V28.1913ZM13.2813 32.3536L17.59 28.0449L16.8829 27.3377L12.5742 31.6464L13.2813 32.3536ZM8.93432 32.5H12.9278V31.5H8.93432V32.5ZM8.43432 27.6913V32H9.43432V27.6913H8.43432ZM1 28.1913H8.93432V27.1913H1V28.1913ZM0.5 5.51724V27.6913H1.5V5.51724H0.5ZM2.74266 -0.185695L0.535762 5.33155L1.46424 5.70294L3.67113 0.185695L2.74266 -0.185695ZM28.8489 2.33744H5.83415V3.33744H28.8489V2.33744ZM29.3489 18.3383V2.83744H28.3489V18.3383H29.3489ZM24.4169 23.3722L29.1985 18.6957L28.4993 17.9808L23.7177 22.6573L24.4169 23.3722ZM16.5534 23.5148H24.0673V22.5148H16.5534V23.5148ZM12.5982 27.677L16.9069 23.3683L16.1998 22.6612L11.8911 26.9699L12.5982 27.677ZM11.7447 23.0148V27.3235H12.7447V23.0148H11.7447ZM5.83415 23.5148H12.2447V22.5148H5.83415V23.5148ZM5.33415 2.83744V23.0148H6.33415V2.83744H5.33415Z" />
    <rect x="13.5583" y="8.24963" width="2.62726" height="8.19704" />
    <rect x="21.23" y="8.24963" width="2.62726" height="8.19704" />
  </svg>
);

export { Twitch };
