import { Header } from "../header";
import { Footer } from "../footer";
import { ProgressBar } from "../footer";

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <div className="relative pt-12">{children}</div>
      <Footer />
    </>
  );
};

export { Page };
