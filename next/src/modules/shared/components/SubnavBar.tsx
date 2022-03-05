import Link from 'next/link';
import { useRouter } from 'next/router';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  subnavItems?: SelfTeach.Subnav[];
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SubnavBar = ({ subnavItems }: Props): JSX.Element => {
  const router = useRouter();

  return (
    <div className="subnav bg-sapphire w-full absolute top-52 md:top-64 z-20 overflow-x-scroll left-0">
      <ul className="flex md:justify-center">
        <li className="font-condensed uppercase mx-4 text-2xl tracking-wide mb-0 leading-stacked py-2 relative top-1">
          <Link href="/blog">
            <a className={router.pathname === '/blog' ? 'text-gold' : 'text-white'}>All</a>
          </Link>
        </li>
        {subnavItems &&
          subnavItems.map((item) => (
            <li
              className="font-condensed uppercase mx-4 text-2xl tracking-wide mb-0 leading-stacked py-2 whitespace-nowrap relative top-1"
              key={item._id}
            >
              <Link href={`/blog/c/${item.slug.current}`}>
                <a className={router.asPath.includes(item.slug.current) ? 'text-gold' : 'text-white'}>{item.name}</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { SubnavBar };
