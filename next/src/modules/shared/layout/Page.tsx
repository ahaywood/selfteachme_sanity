import { Header } from '../header';
import { Footer } from '../footer';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: JSX.Element;
  social: SelfTeach.Social;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Page = ({ children, social }: Props): JSX.Element => (
  <>
    <Header />
    <div className="relative pt-12">{children}</div>
    <Footer social={social} />
  </>
);

export { Page };
