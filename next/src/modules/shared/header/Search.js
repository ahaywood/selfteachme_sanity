import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Icon } from '../components/icon';

const Search = ({ isSearchOpen, toggleSearch }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const router = useRouter();
  const searchInput = useRef();

  // once the search has been opened, focus on the input
  useEffect(() => {
    if (isSearchOpen) {
      searchInput.current.focus();
    }
  }, [isSearchOpen]);

  const onSubmit = (data) => {
    // redirect to the homepage, send the key words
    router.push({ pathname: '/search', query: data });
  };

  return (
    <div
      className={`bg-gradient-to-b from-black via-brightPink w-screen h-screen fixed left-0 z-40 p-10 transition-inset duration-500 ${
        isSearchOpen ? 'top-0' : '-top-screen'
      }`}
    >
      <div className="text-center w-full absolute left-0 top-8">
        <button onClick={toggleSearch} className="focus:outline-none">
          <Image src="/img/x--thin.svg" alt="Close Search" width="37" height="36" />
        </button>
      </div>
      <form
        className="flex flex-col md:flex-row max-w-5xl mx-auto mt-24 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          className="font-condensed text-gold uppercase text-5xl block mr-4 font-normal leading-14 mb-4 md:mb-0 h-12"
          htmlFor="search"
        >
          Search
        </label>
        <div className="flex justify-center w-full">
          <input
            className="search-input"
            id="search"
            name="keywords"
            type="text"
            ref={(e) => {
              searchInput.current = e;
              register(e, { required: true });
            }}
          />
          <button className="text-white hover:text-gold" role="submit">
            <Icon name="arrow" />
          </button>
        </div>
      </form>
    </div>
  );
};

export { Search };
