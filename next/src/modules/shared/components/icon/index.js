import React from 'react';
import PropTypes from 'prop-types';

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

const Icon = (props) => {
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

Icon.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  height: '25',
  width: '25',
};

export { Icon };
