import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          //the first step is manually which means we have to add buttons manually when we have to add any food of other category in dataset
          //     <button className="filter-btn" onClick={() => filterItems("all")}>
          //   all
          // </button>
          // <button onClick={() => filterItems("breakfast")} className="filter-btn">
          //   breakfast
          // </button>
          // <button onClick={() => filterItems("lunch")} className="filter-btn">
          //   Lunch
          // </button>
          // <button onClick={() => filterItems("shakes")} className="filter-btn">
          //   shakes
          // </button>

          //this is second aproach which is dynamic approach
          <button
            type="button"
            key={index}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
