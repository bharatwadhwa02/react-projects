import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef(null);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={submitHandle}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
