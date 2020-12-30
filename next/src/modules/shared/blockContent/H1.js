import { slugify } from "utils/slugify";

const H1 = (props) => (
  <div className="h1 relative col-start-4 col-span-6">
    <div className="absolute -left-14 font-sans -top-1 text-7xl font-bold" id={`${slugify(props.children)}`}>
      <a className=" text-baliHai opacity-30 hover:text-brightPink hover:opacity-100" href={`${slugify(props.children)}`}>#</a>
    </div>
    <h1 className="font-condensed text-black text-7xl">{props.children}</h1>
  </div>
);
export { H1 };
