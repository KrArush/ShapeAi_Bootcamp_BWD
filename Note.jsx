import "/public/styles.css";
import React from "react";

const Info = (props) => {
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <p>
          {props.discription1}
          <span style={{ color: "skyblue" }}> FREE</span>
          {props.discription2}
          <span style={{ color: "skyblue" }}> BOOTCAMP</span>
        </p>
        <span style={{ color: "white" }}>{props.sdate}</span>
        <span style={{ color: "white", marginLeft: "15px" }}>{props.mode}</span>
        <span style={{ color: "white", marginLeft: "15px" }}>{props.time}</span>
        <hr style={{ color: "skyblue" }} />
        <br />
        <ul style={{ color: "white", marginLeft: "15px" }}>
          <li>Certificates</li>
          <li>Hands On Projects</li>
          <li>No Prerequisites</li>
        </ul>
        <button className="btn">
          <a href={props.link}>REGISTER</a>
        </button>
      </div>
    </>
  );
};
export default Info;
