import BlockContent from "@sanity/block-content-to-react";

import { Highlight as highlight } from "./Highlight";
import { Box as box } from "./Box";
import { Keyboard as keyboard } from "./Keyboard";
import { CodeInline } from "./CodeInline";
import { List as list } from "./List";
import { ListItem as listItem } from "./ListItem";
import { CodeBlock } from "./CodeBlock";
import { fullWidthImage } from "./FullWidthImage";
import { H1 } from "./H1";
import { H2 } from "./H2";
import { H3 } from "./H3";
import { H4 } from "./H4";
import { Blockquote } from "./Blockquote";
import { P } from "./P";
import { InternalLink as internalLink } from "./InternalLink";
import { ExternalLink as link } from "./ExternalLink";

const serializers = {
  types: {
    block: (props) => {
      const { style = "normal" } = props.node;

      if (style === "normal") {
        return <P {...props} />;
      }

      if (style === "h1") {
        return <H1 {...props} />;
      }

      if (style === "h2") {
        return <H2 {...props} />;
      }

      if (style === "h3") {
        return <H3 {...props} />;
      }

      if (style === "h4") {
        return <H4 {...props} />;
      }

      if (style === "blockquote") {
        return <Blockquote {...props} />;
      }

      return BlockContent.defaultSerializers.types.block(props);
    },
    box,
    code: CodeBlock,
    fullWidthImage,
  },
  list,
  listItem,
  marks: {
    code: CodeInline,
    highlight,
    keyboard,
    externalLink: ({ mark, children }) => {
      const { slug = {} } = mark;
      const href = slug.current;
      return (
        <a href={href} className="text-7xl">
          {children}
        </a>
      );
    },
    link,
    internalLink,
  },
};
export { serializers };
