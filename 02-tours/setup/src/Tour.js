import React, { useState } from "react";

const Tour = (tour) => {
  const { id, image, info, price, name, removeTour } = tour;
  const [readMore, setReadMore] = useState(false);

  const showMore = () => {
    return setReadMore(!readMore);
  };

  return (
    <section className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price"> ${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 209)}...`}{" "}
          <button id="show" onClick={showMore}>
            {readMore ? "Read Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </section>
  );
};

export default Tour;
