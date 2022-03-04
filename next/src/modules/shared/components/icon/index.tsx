/* eslint-disable react/jsx-props-no-spreading */
import { Arrow } from './Arrow';
import { CodePen } from './CodePen';
import { DevTo } from './DevTo';
import { Dribbble } from './Dribbble';
import { ExternalLink } from './ExternalLink';
import { Facebook } from './Facebook';
import { GitHub } from './GitHub';
import { Hashnode } from './Hashnode';
import { Instagram } from './Instagram';
import { LinkedIn } from './LinkedIn';
import { Map } from './Map';
import { Medium } from './Medium';
import { Patreon } from './Patreon';
import { Pinterest } from './Pinterest';
import { Post } from './Post';
import { Search } from './Search';
import { SoundCloud } from './SoundCloud';
import { Twitch } from './Twitch';
import { Twitter } from './Twitter';
import { Video } from './Video';
import { Vimeo } from './Vimeo';
import { YouTube } from './YouTube';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  className?: string;
  height?: string;
  name: string;
  width?: string;
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Icon = (props: Props): JSX.Element => {
  switch (props.name.toLowerCase()) {
    case 'arrow':
      return <Arrow {...props} />;
    case 'codepen':
      return <CodePen {...props} />;
    case 'devto':
      return <DevTo {...props} />;
    case 'dribbble':
      return <Dribbble {...props} />;
    case 'externallink':
      return <ExternalLink {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'github':
      return <GitHub {...props} />;
    case 'hashnode':
      return <Hashnode {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'linkedin':
      return <LinkedIn {...props} />;
    case 'map':
      return <Map {...props} />;
    case 'medium':
      return <Medium {...props} />;
    case 'patreon':
      return <Patreon {...props} />;
    case 'pinterest':
      return <Pinterest {...props} />;
    case 'post':
      return <Post {...props} />;
    case 'search':
      return <Search {...props} />;
    case 'soundcloud':
      return <SoundCloud {...props} />;
    case 'twitch':
      return <Twitch {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'vimeo':
      return <Vimeo {...props} />;
    case 'video':
      return <Video {...props} />;
    case 'youtube':
      return <YouTube {...props} />;
    default:
      return <div />;
  }
};

export { Icon };
