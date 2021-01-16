import { useEffect } from "react";
import { Hr } from "modules/shared/components/Hr";

/** -------------------------------------------------
* HELPERS
---------------------------------------------------- */
// Helper to add scripts to our page
const insertScript = (src, id, parentElement) => {
  const script = window.document.createElement('script');
  script.async = true;
  script.src = src;
  script.id = id;
  // data-css-override="/css/commento.css"
  //       data-auto-init="true"
  //       data-no-fonts="true"
  parentElement.appendChild(script);
  return script;
};
// Helper to remove scripts from our page
const removeScript = (id, parentElement) => {
  const script = window.document.getElementById(id);
  if (script) {
    parentElement.removeChild(script);
  }
};


/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
export const Comments = ({ className, id }) => {

  useEffect(() => {
    // If there's no window there's nothing to do for us
    if (!window) {
      return;
    }
    const document = window.document;
    // In case our #commento container exists we can add our commento script
    if (document.getElementById('commento')) {
      insertScript(`https://cdn.commento.io/js/commento.js`, `commento-script`, document.body);
    }
    // Cleanup; remove the script from the page
    return () => removeScript(`commento-script`, document.body);
  }, [id]);

  return (
    <div className={className}>
      <Hr />
      <h2 className="font-condensed text-brightPink uppercase text-6xl">Comments</h2>
      <div id="commento" />
      {/* <script
        defer
        src="https://cdn.commento.io/js/commento.js"
        data-css-override="/css/commento.css"
        data-auto-init="true"
        data-no-fonts="true"
        type="text/javascript"
      ></script> */}
    </div>
  );
}