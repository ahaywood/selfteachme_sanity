import { useState, useEffect } from "react";
import Link from "next/link";
import client from "utils/client";
import groq from "groq";
import { useRouter } from "next/router";

const Subnav = () => {
  const [categories, setCategories] = useState();
  const router = useRouter();

  useEffect(() => {
    const query = groq`*[_type == "category"]{name, slug, _id}`;
    client.fetch(query).then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <div className="subnav bg-sapphire w-full absolute top-52 md:top-64 z-20 overflow-x-scroll left-0">
      <ul className="flex lg:justify-center">
        <li className="font-condensed uppercase mx-4 text-2xl tracking-wide mb-0 leading-stacked py-2">
          <Link href="/blog">
            <a
              className={
                router.pathname == "/blog" ? "text-gold" : "text-white"
              }
            >
              All
            </a>
          </Link>
        </li>
        {categories &&
          categories.map((item) => (
            <li
              className="font-condensed uppercase mx-4 text-2xl tracking-wide mb-0 leading-stacked py-2 whitespace-nowrap"
              key={item._id}
            >
              <Link href={`/blog/c/${item.slug.current}`}>
                <a
                  className={
                    router.pathname == item.slug.current
                      ? "text-gold"
                      : "text-white"
                  }
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Subnav };
