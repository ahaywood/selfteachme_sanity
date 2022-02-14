import { slugify } from 'utils/slugify';

const H3 = (props) => (
  <div className="h3 col-span-12 md:col-start-4 md:col-span-6 px-mobile md:px-0 relative" id={slugify(props.children)}>
    <div className="absolute left-2 md:-left-8 font-sans text-3xl font-bold">
      <a
        className="text-sapphire opacity-30 hover:opacity-100 hover:text-brightPink"
        href={`#${slugify(props.children)}`}
      >
        #
      </a>
    </div>
    <h3 className="mb-2 font-sans text-sapphire text-2xl font-bold">{props.children}</h3>
  </div>
);
export { H3 };
