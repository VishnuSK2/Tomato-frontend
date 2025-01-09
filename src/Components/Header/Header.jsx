import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p className="p">
          Explore a diverse menu brimming with delectable dishes, each crafted
          with the finest ingredients and exceptional culinary skill. Our
          passion is to delight your palate and elevate your dining experience,
          one exquisite meal at a time.
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
