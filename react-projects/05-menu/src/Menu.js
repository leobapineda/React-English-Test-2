import React from 'react';

const Menu = ({id, title, category, price, img, desc}) => {
  return (
    <>
      <h4>{title}</h4>
      <img style={{ width: "100px" }} src={img} alt="" />
      <div>
        <span>{category}</span>
        <span>{` ------ ${price}`}</span>
      </div>
      <p>{desc}</p>
    </>
  );
};

export default Menu;
