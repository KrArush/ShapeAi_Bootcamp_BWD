import "/public/styles.css";
import React from "react";

const Header = (props) => {
  return (
    <>
      <header>
        <h1>{props.head}</h1>
      </header>
    </>
  );
};
export default Header;
