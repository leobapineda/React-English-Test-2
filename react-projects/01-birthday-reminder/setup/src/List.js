import React from "react";

const List = ({ name, id, age, image, removePal }) => {
  return (
    <>
      <span>{name}</span>
      <span>{` --------------------- ${age}`}</span>
      <button onClick={() => removePal(id)}>Remove</button>
      <div>
        <img
          style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          src={image}
          alt="user profile"
        />
      </div>
    </>
  );
};

export default List;
