import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section onMouseOver={closeSubmenu} className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae
            vel, et mollitia fugiat incidunt labore consequatur amet voluptas
            perferendis repellendus explicabo eaque, modi eum voluptatem illum
            laboriosam porro a.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone logo" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
