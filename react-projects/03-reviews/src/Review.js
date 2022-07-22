import React from "react";
import reviews from "./data";

import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowsAlt,
} from "react-icons/fa";
import { useState } from "react";
function Review() {
  const [index, setIndex] = useState(0);

  const { image, name, job, text } = reviews[index];

  function randomReview() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }

    setIndex(checkIndex(randomIndex));
  }

  function prevReview() {
    setIndex(checkIndex(index - 1));
  }

  function nextReview() {
    setIndex(checkIndex(index + 1));
  }

  function checkIndex(number) {
    if (number > reviews.length - 1) {
      return 0;
    }

    if (number < 0) {
      return reviews.length - 1;
    }

    return number;
  }

  return (
    <div>
      <div>
        <button onClick={randomReview}>
          <FaArrowsAlt style={{ color: "red", margin: "10px" }} />
        </button>
        <button onClick={prevReview}>
          <FaArrowAltCircleLeft style={{ color: "red", margin: "10px" }} />
        </button>
        <button onClick={nextReview}>
          <FaArrowAltCircleRight style={{ color: "red", margin: "10px" }} />
        </button>
      </div>
      <img style={{ width: "150px" }} src={image} alt="" />
      <div>
        <div>{name}</div>
        <div>{job}</div>
        <div style={{ width: "300px" }}>{text}</div>
      </div>
    </div>
  );
}

export default Review;
