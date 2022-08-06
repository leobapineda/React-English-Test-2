import React from "react";
import { FaBars } from "react-icons/fa";
import { useGetContext } from "./context";
const Home = () => {
  const { OpenModal, OpenSidebar } = useGetContext();
  console.log("Home");
  return (
    <main>
      <button onClick={OpenSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={OpenModal} className="btn">
        Show Modal
      </button>
    </main>
  );
};

export default Home;
