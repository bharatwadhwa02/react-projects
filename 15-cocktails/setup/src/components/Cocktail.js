import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, category, info, glass, instruction, image }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link className="btn-primary btn btn-details" to={`/cocktail/${id}`}>
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
