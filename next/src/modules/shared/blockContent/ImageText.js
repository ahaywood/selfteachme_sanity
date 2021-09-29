import BlockContent from '@sanity/block-content-to-react';
import { serializers } from 'modules/shared/blockContent/Serializers';

const ImageText = ({ node: { alt, caption, content, imageUrl, placement } }) => (
  <div
    className={`relative col-span-12 md:col-start-4 md:col-span-6 px-8 md:px-0 flex mb-8 gap-12 ${
      placement === 'imageRight' && 'flex-row-reverse'
    }`}
  >
    {/* image */}
    <div className="flex-1 text-center">
      <img src={imageUrl.url} alt={alt} className="max-w-full mb-2 mx-auto" />
      {caption && <div className="text-sm italic text-gray-500">{caption}</div>}
    </div>
    {/* content */}
    <div className="flex-1">
      <BlockContent serializers={serializers} blocks={content} />
    </div>
  </div>
);

export { ImageText };
