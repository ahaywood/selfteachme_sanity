import { useState, useEffect } from "react";
import { Icon } from "modules/shared/components/icon";
import client from "utils/client";
import groq from "groq";

const Social = ({ className, ...props }) => {
  const [social, setSocial] = useState();

  // get the social media links
  useEffect(() => {
    const query = groq`*[_type == "socialMedia"][0]`;
    client.fetch(query).then((res) => setSocial(res));
  }, []);

  return (
    <ul className={`text-white flex justify-center list-none ${className}`}>
      {/* youtube */}
      {social?.youtube && (
        <li className="px-3">
          <a href={social.youtube} target="_blank" className="hover:text-gold">
            <Icon name="youtube" />
          </a>
        </li>
      )}

      {/* pinterest */}
      {social?.pinterest && (
        <li className="px-3">
          <a
            href={social.pinterest}
            target="_blank"
            className="hover:text-gold"
          >
            <Icon name="pinterest" />
          </a>
        </li>
      )}

      {/* instagram */}
      {social?.instagram && (
        <li className="px-3">
          <a
            href={social.instagram}
            target="_blank"
            className="hover:text-gold"
          >
            <Icon name="instagram" />
          </a>
        </li>
      )}

      {/* facebook */}
      {social?.facebook && (
        <li className="px-3">
          <a href={social.facebook} target="_blank" className="hover:text-gold">
            <Icon name="facebook" />
          </a>
        </li>
      )}

      {/* dribbble */}
      {social?.dribbble && (
        <li className="px-3">
          <a href={social.dribbble} target="_blank" className="hover:text-gold">
            <Icon name="dribbble" />
          </a>
        </li>
      )}

      {/* github */}
      {social?.github && (
        <li className="px-3">
          <a href={social.github} target="_blank" className="hover:text-gold">
            <Icon name="github" />
          </a>
        </li>
      )}

      {/* linkedin */}
      {social?.linkedin && (
        <li className="px-3">
          <a href={social.linkedin} target="_blank" className="hover:text-gold">
            <Icon name="linkedin" />
          </a>
        </li>
      )}

      {/* vimeo */}
      {social?.vimeo && (
        <li className="px-3">
          <a href={social.vimeo} target="_blank" className="hover:text-gold">
            <Icon name="vimeo" />
          </a>
        </li>
      )}

      {/* soundcloud */}
      {social?.soundcloud && (
        <li className="px-3">
          <a
            href={social.soundcloud}
            target="_blank"
            className="hover:text-gold"
          >
            <Icon name="soundcloud" />
          </a>
        </li>
      )}

      {/* codepen */}
      {social?.codepen && (
        <li className="px-3">
          <a href={social.codepen} target="_blank" className="hover:text-gold">
            <Icon name="codepen" />
          </a>
        </li>
      )}

      {/* facebook */}
      {social?.facebook && (
        <li className="px-3">
          <a href={social.facebook} target="_blank" className="hover:text-gold">
            <Icon name="facebook" />
          </a>
        </li>
      )}

      {/* twitter */}
      {social?.twitter && (
        <li className="px-3">
          <a href={social.twitter} target="_blank" className="hover:text-gold">
            <Icon name="twitter" />
          </a>
        </li>
      )}

      {/* patreon */}
      {social?.patreon && (
        <li className="px-3">
          <a href={social.patreon} target="_blank" className="hover:text-gold">
            <Icon name="patreon" />
          </a>
        </li>
      )}

      {/*  medium */}
      {social?.medium && (
        <li className="px-3">
          <a href={social.medium} target="_blank" className="hover:text-gold">
            <Icon name="medium" />
          </a>
        </li>
      )}

      {/* hashnode */}
      {social?.hashnode && (
        <li className="px-3">
          <a href={social.hashnode} target="_blank" className="hover:text-gold">
            <Icon name="hashnode" />
          </a>
        </li>
      )}

      {/* dev.to */}
      {social?.devTo && (
        <li className="px-3">
          <a href={social.devTo} target="_blank" className="hover:text-gold">
            <Icon name="devTo" />
          </a>
        </li>
      )}
    </ul>
  );
};

export { Social };
