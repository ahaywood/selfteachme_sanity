import { Header } from '../header';
import { Footer } from '../footer';

const Page = ({ children, social }): JSX.Element => (
  <>
    <Header />
    <div className="relative pt-12">{children}</div>
    <Footer social={social} />
  </>
);

export { Page };
