import { Hr } from "modules/shared/components/Hr";
import Head from "next/head";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
export const Comments = ({ className }) => {
  return (
    <div className={className}>
      <Hr />
      <h2 className="font-condensed text-brightPink uppercase text-6xl">Comments</h2>
      <div id="commento"></div>
      <Head>
        <script
          defer
          src="https://cdn.commento.io/js/commento.js"
          data-css-override="/css/commento.css"
          data-auto-init="true"
          data-no-fonts="true"
          type="text/javascript"
        ></script>
      </Head>
    </div>
  );
};
