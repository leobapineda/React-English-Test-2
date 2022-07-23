import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article onClick={() => setShowInfo(!showInfo)} className="question">
      <h3>{title}</h3>
      <button>{showInfo ? <FaMinusSquare /> : <FaPlusSquare />}</button>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
