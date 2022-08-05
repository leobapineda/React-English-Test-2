import React from "react";
import { useFetch } from "./2-useFetch";

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  // custom hook
  const { loading, products } = useFetch(url);
  console.log(1);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
      <div>
        {products.map((item) => {
          const {
            fields: { name },
          } = item;
          return <h5 key={name}>{name}</h5>;
        })}
      </div>
    </div>
  );
};

export default Example;
