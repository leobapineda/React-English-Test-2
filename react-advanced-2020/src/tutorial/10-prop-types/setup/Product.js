import React from "react";
import PropTypes from "prop-types"; // ES6

const Product = ({ name, price, image }) => {
  return (
    <article className="product">
      <img src={image?.url} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};

Product.defaultProps = {
  name: "Somehting went wrong, no Name",
  price: 0.0,
  image: {
    url: "https://cdn.dribbble.com/users/463734/screenshots/2016799/generic-error_shot.png?compress=1&resize=400x300&vertical=top",
  },
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
