import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders


// useMemo para dejar de renderizar los demas componenetes

const Index = () => {
  const { products } = (useFetch(url));
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0)

  const addToCart = useCallback(() => {
    setCart(prev => prev + 1)
  }, [cart])

  return (
    <>
      <h1 style={{ fontSize: "25px" }}>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h2>Count: {cart}</h2>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  console.log("render BigList");
  return (
    <>
      <section className="products">
        {products.map((product) => {
          return (
            <SingleProduct
              addToCart={addToCart}
              key={product.id}
              {...product}
            ></SingleProduct>
          );
        })}
      </section>
    </>
  );
});

const SingleProduct = ({ fields,  addToCart}) => {

  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;
    console.count("render SingleProduct");

  return (
    <article className="product">
      <img style={{ width: "100px", height: "100px" }} src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button  onClick={addToCart}>add to cart</button>
    </article>
  );
};
export default Index;
