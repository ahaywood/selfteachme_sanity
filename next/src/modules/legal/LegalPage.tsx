import { Hero } from 'modules/shared/components/Hero';
import { serializers } from 'modules/shared/blockContent/Serializers';
import { formatISO } from 'utils/date';
import BlockContent from '@sanity/block-content-to-react';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  name: string;
  content: [];
  _updatedAt: string;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const LegalPage = ({ name, content, _updatedAt }: Props): JSX.Element => (
  <div className="content-grid move-content-up">
    <Hero title={name} src="/img/bg__terms.jpg" />
    <div className="main">
      <div className="px-12 pt-12">
        <BlockContent blocks={content} serializers={serializers} />
        <p>
          <em>Last updated {formatISO(_updatedAt)}</em>
        </p>
      </div>
    </div>
  </div>
);

export { LegalPage };
