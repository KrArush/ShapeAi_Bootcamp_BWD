import "/public/styles.css";
import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer>
        <p>Copyright By ShapeAI @ {props.year}</p>
      </footer>
    </>
  );
};
export default Footer;
