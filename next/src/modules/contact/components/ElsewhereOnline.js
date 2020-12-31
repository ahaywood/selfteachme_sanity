import { useState, useEffect } from "react";
import { Icon } from "modules/shared/components/icon";
import client from "utils/client";
import groq from "groq";

const ElsewhereOnline = () => {
  const [social, setSocial] = useState();

  // get the social media links
  useEffect(() => {
    const query = groq`*[_type == "socialMedia"][0]`;
    client.fetch(query).then((res) => setSocial(res));
  }, []);

  return (
    <div className="elsewhere-online flex justify-between flex-col lg:flex-row">
      <div className="flex-1">
        <h3>
          <span className="font-modern uppercase text-6xl sm:text-8xl lg:pl-24 text-serenade block">Elsewhere</span>
          <span className="font-handwriting text-8xl block relative -top-2 flex">
            <div className="flex-1 float-left h-0 w-full border-t-2 border-black" />
            <div>Online</div>
          </span>
        </h3>
      </div>
      <div className="flex-1 md:pr-24 pt-4">
        <ul className="flex flex-center md:justify-between flex-wrap md:flex-nowrap">
          {/* youtube */}
          {social?.youtube && (
            <li>
              <a href={social.youtube} target="_blank">
                <Icon name="youtube" />
                YouTube
              </a>
            </li>
          )}
          {/* twitter */}
          {social?.twitter && (
            <li>
              <a href={social.twitter} target="_blank">
                <Icon name="twitter" />
                Twitter
              </a>
            </li>
          )}
          {/* instsagram */}
          {social?.instagram && (
            <li>
              <a href={social.instagram} target="_blank">
                <Icon name="instagram" />
                Instagram
              </a>
            </li>
          )}
          {/* twitch */}
          {social?.twitch && (
            <li>
              <a href={social.twitch} target="_blank">
                <Icon name="twitch" />
                Twitch
              </a>
            </li>
          )}
          {/* codepen */}
          {social?.codepen && (
            <li>
              <a href={social.codepen} target="_blank">
                <Icon name="codepen" />
                CodePen
              </a>
            </li>
          )}
          {/* github */}
          {social?.github && (
            <li>
              <a href={social.github} target="_blank">
                <Icon name="github" />
                GitHub
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export { ElsewhereOnline };
