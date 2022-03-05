import { serializers } from 'modules/shared/blockContent/Serializers';
import BlockContent from '@sanity/block-content-to-react';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  node: {
    content: [];
    emoji: string;
    heading: string;
  };
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Box = ({ node }: Props): JSX.Element => {
  const { content, emoji, heading } = node;
  return (
    <div className="col-start-4 mb-10 col-span-6 bg-almostWhite pt-10 pb-4 pl-20 pr-12 relative">
      {emoji && <div className="text-7xl absolute top-4 left-1">{emoji}</div>}
      <div>
        {heading && <h3 className="font-condensed uppercase text-baliHai text-5xl">{heading}</h3>}
        <BlockContent blocks={content} serializers={serializers} />
      </div>
    </div>
  );
};
export { Box };
