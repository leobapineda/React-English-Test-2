import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className="single-tour">
      <div>
        <img style={{ width: "300px", height: "150px" }} src={image} alt="" />
      </div>
      <h4 className="tour-info">
        <span>{name}</span>
        <span className="tour-price">{` ------------- ${price}`}</span>
      </h4>
      <span>{readMore ? info : `${info.substring(0, 200)}...`}</span>
      <button onClick={() => setReadMore((prevState) => !prevState)}>
        {readMore ? "read less" : "read more"}
      </button>
      <button className="delete-btn" onClick={() => removeTour(id)}>
        remove tour
      </button>
    </article>
  );
};

export default Tour;
