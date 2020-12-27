import Head from 'next/head'
import { Hr } from "modules/shared/components/Hr";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
export const Comments = ({ className }) => {
  return (
    <div className={className}>
      <Head>
        <script
          defer
          src="https://cdn.commento.io/js/commento.js"
          data-css-override="https://selfteach.me/css/commento.css"
          data-auto-init="true"
          type="text/javascript"
        ></script>
      </Head>
      <Hr />
      <h2 className="font-condensed text-brightPink uppercase text-6xl">Comments</h2>
      <div id="commento" />
    </div>
  );
};
