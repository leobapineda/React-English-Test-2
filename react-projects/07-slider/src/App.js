import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(true);

  function setReview(id, actualIndex) {
    const correctIndex = actualIndex + 1;

    if (correctIndex === id) return "activeSlide";
    // if (correctIndex + 1 === id) return "nextSlide";
    if (correctIndex + 1 === id || (correctIndex === people.length && id === 1))
      return "nextSlide";

    return "lastSlide";
  }

  function checkIndex(index) {
    if (index > people.length - 1) {
      return 0;
    } else if (index < 0) {
      return people.length - 1;
    }
    return index;
  }

  // ------------>>>>>>>>> start automatic movement slide with setTimeout
  // function startTimer() {
  //   setTimeout(() => {
  //     setTimer((prev) => !prev);
  //     setIndex((prevIndex) => checkIndex(prevIndex + 1));
  //   }, 1000);
  // }

  // useEffect(startTimer, [timer]);

  // ------------>>>>>>>>> start automatic movement slide with setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => checkIndex(prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [index])

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className="section-center">
          {people.map((person) => {
            const { id, image, name, title, quote } = person;
            return (
              <article className={`${setReview(id, index)}`} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight />
              </article>
            );
          })}
          <button
            className="prev"
            onClick={() => setIndex(checkIndex(index - 1))}
          >
            <FiChevronLeft />
          </button>
          <button
            className="next"
            onClick={() => setIndex(checkIndex(index + 1))}
          >
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
