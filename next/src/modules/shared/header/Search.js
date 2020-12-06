import { useForm } from "react-hook-form";
import { Icon } from "../components/icon";

const Search = ({ isSearchOpen, toggleSearch }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      className={`bg-gradient-to-b from-black via-brightPink w-screen h-screen fixed left-0 z-40 p-10 transition-inset duration-500 ${
        isSearchOpen ? "top-0" : "-top-screen"
      }`}
    >
      <div className="text-center w-full absolute top-8">
        <button onClick={toggleSearch} className="focus:outline-none">
          <img src="/img/x--thin.svg" alt="" />
        </button>
      </div>
      <form
        className="flex max-w-5xl mx-auto mt-24"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          className="font-condensed text-gold uppercase text-5xl block mr-4"
          htmlFor="search"
        >
          Search
        </label>
        <input
          className="bg-transparent border-b-2 border-gold w-full h-10 text-white mr-4 outline-none focus:outline-none"
          id="search"
          name="search"
          type="text"
          ref={register({ required: true })}
        />
        <button className="text-white hover:text-gold" role="submit">
          <Icon name="arrow" />
        </button>
      </form>
    </div>
  );
};

export { Search };
