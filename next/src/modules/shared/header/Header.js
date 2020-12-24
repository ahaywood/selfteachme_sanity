import { useState } from "react";
import { Nav } from "./Nav";
import { Search } from "./Search";
import { ProgressBar } from "./ProgressBar";
import { Icon } from "modules/shared/components/icon";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-black flex justify-between items-center p-3 fixed left-0 w-full z-50">
      <ProgressBar />
      <button
        className="flex flex-1 hover:text-brightPink text-white focus:outline-none items-center"
        onClick={toggleNav}
      >
        <div className="flex flex-col mr-2">
          <div className="h-0.5 bg-white inline-block w-8"></div>
          <div className="h-0.5 bg-white inline-block w-8 my-2"></div>
          <div className="h-0.5 bg-white inline-block w-8"></div>
        </div>
        <div className="uppercase font-sans font-bold">Menu</div>
      </button>
      <Nav isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <div className="flex-1 text-right">
        <button
          className="text-white hover:text-brightPink focus:outline-none"
          onClick={toggleSearch}
        >
          <Icon name="search" className="ml-auto" />
        </button>
      </div>
      <Search isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} />
    </header>
  );
};

export { Header };
