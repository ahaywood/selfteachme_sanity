const BlockContent = require("@sanity/block-content-to-react");
import { serializers } from "modules/shared/blockContent/Serializers";

const Box = (props) => (
  <div className="col-start-4 mb-10 col-span-6 bg-almostWhite py-10 px-20">
    <BlockContent blocks={props.node.content} serializers={serializers} />
  </div>
);
export { Box };
