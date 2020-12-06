const BlockContent = require("@sanity/block-content-to-react");
import { serializers } from "modules/shared/blockContent/Serializers";

const Box = (props) => (
  <div className="bg-green-500">
    I am a Box
    <BlockContent blocks={props.node.content} serializers={serializers} />
  </div>
);
export { Box };
