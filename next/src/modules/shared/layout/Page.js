import { Header } from '../header';
import { Footer, ProgressBar } from '../footer';

const Page = ({ children, social }) => (
  <>
    <Header />
    <div className="relative pt-12">{children}</div>
    <Footer social={social} />
  </>
);

export { Page };
