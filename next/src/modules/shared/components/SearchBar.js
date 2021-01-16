import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Icon } from "modules/shared/components/icon";
import { useRouter } from 'next/router'

const SearchBar = ({ className }) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const searchInput = useRef();

  // on form submit
  const onSubmit = (data) => {
    // redirect to the homepage, send the key words
    router.push({ pathname: '/search', query: data });
  }

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`search-bar flex flex-wrap justify-right sm:justify-center bg-serenade px-mobile md:px-16 pt-8 pb-8 sm:pb-2 ${className}`}>
      <Icon className="hidden sm:block w-8 h-8 relative top-10" name="search" />
      <div className="ml-4 flex-1">
        <label htmlFor="keywords">Search <span className="hidden md:inline">(using keywords and English)</span></label>
        <input type="text" name="keywords" ref={(e) => {
          register(e, { required: true });
          searchInput.current = e;
        }} />
      </div>
      <div className="ml-auto">
        <button className="bg-peach hover:bg-white relative rounded-lg block sm:top-7 w-72 sm:w-48 h-14 sm:ml-6" role="submit">
          <div className="flex w-full justify-center absolute top-0">
            <span className="text-5xl">🧐</span>
            <span className="font-handwriting text-7xl">Search</span>
          </div>
        </button>
      </div>
    </form>
  )
}

export { SearchBar }
