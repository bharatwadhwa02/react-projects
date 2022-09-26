import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";
const Home = () => {
  // const data = useContext(AppContext);
  const { showSidebar, showModal } = useGlobalContext();

  return (
    <main>
      <button onClick={showSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={showModal} className="btn">
        show modal
      </button>
    </main>
  );
};

export default Home;
