import { Hero } from 'modules/shared/components/Hero';
import { serializers } from 'modules/shared/blockContent/Serializers';
import { formatISO } from 'utils/date';

const BlockContent = require('@sanity/block-content-to-react');

const LegalPage = (props) => (
  <div className="content-grid move-content-up">
    <Hero title={props.name} src="/img/bg__terms.jpg" />
    <div className="main">
      <div className="px-12 pt-12">
        <BlockContent blocks={props.content} serializers={serializers} />
        <p>
          <em>Last updated {formatISO(props._updatedAt)}</em>
        </p>
      </div>
    </div>
  </div>
);

export { LegalPage };
