import { slugify } from "utils/slugify";

const H2 = (props) => {
  return (
    <div className="h2 relative col-start-4 col-span-6 mt-8">
      <div className="absolute -left-10 font-sans -top-1 text-5xl font-bold" id={`${slugify(props.children)}`}>
        <a className=" text-baliHai opacity-30 hover:text-brightPink hover:opacity-100" href={`${slugify(props.children)}`}>#</a>
      </div>
      <h2 className="font-condensed text-baliHai text-5xl">{props.children}</h2>
    </div>
  )
};
export { H2 };
