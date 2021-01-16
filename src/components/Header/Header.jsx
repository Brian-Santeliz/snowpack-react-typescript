import React from "react";
import "./header.css";
import style from "./Header.module.css";
// interface IProp {
//   title?: string;
// }
const Header = ({ title = "Brian" }) => {
  return (
    <header className={style.example}>
      <div className="header-container">
        <h1 className="header-text">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
