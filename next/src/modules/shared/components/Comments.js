import { Hr } from "modules/shared/components/Hr";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
export const Comments = ({ className }) => {
  return (
    <div className={className}>
      <Hr />
      <h2 className="font-condensed text-brightPink uppercase text-6xl">Comments</h2>
      <div id="commento"></div>
    </div>
  );
};
