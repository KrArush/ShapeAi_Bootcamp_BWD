import "/public/styles.css";
import React from "react";
import Header from "./Header";
import Info from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header head="ShapeAI BOOTCAMPS" />
      <Footer year={new Date().getFullYear()} />
      <Info
        title="Javascript and Backend with NodeJS"
        discription1="7 DAYS LONG"
        discription2="JAVASCRIPT AND BACKEND WITH NODE JS"
        sdate="JUNE 27th"
        mode="Online"
        time="8:00 pm"
        link="https://docs.google.com/forms/d/e/1FAIpQLSe9ftKdEEWS4VSZ9vjceFh2XwYULYtLq4M_fAsG6CZwd9bIqQ/alreadyresponded"
      />
      <Info
        title="Python and Natural Language Processing"
        discription1="7 DAYS LONG"
        discription2="Python and Natural Language Processing"
        sdate="JUNE 27th"
        mode="Online"
        time="8:00 pm"
        link="https://docs.google.com/forms/d/e/1FAIpQLSeOTEeVE880u6Dws0YtgiUh2pyfnRc_DRTSzlfeUlT--a4Mhw/viewform"
      />
      <Info
        title="Python & Network Security - Free 7 Days Long Bootcamp"
        discription1="7 DAYS LONG"
        discription2="Python & Network Security - Free 7 Days Bootcamp"
        sdate="JUNE 27th"
        mode="Online"
        time="8:00 pm"
        link="https://docs.google.com/forms/d/e/1FAIpQLSfz-evQeNWAxx4bKpkEz7fwa3TqTIvwk5gzxhLdjdSDs8bvaQ/viewform"
      />
      <Info
        title="Tableau Fundamentals - Free 7 Days Long Bootcamp"
        discription1="7 DAYS LONG"
        discription2="Tableau Fundamentals - Free 7 Days Bootcamp"
        sdate="JUNE 27th"
        mode="Online"
        time="8:00 pm"
        link="https://docs.google.com/forms/d/e/1FAIpQLSd3sN4OV7-Be7m5GR49f1k3JCZgNWIKaFGGNx8HiT0SqKYvCA/viewform"
      />
      <Info
        title="Python and Data Visualization "
        discription1="7 DAYS LONG"
        discription2="Python and Data Visualization "
        sdate="JUNE 27th"
        mode="Online"
        time="8:00 pm"
        link="https://docs.google.com/forms/d/e/1FAIpQLSeLkQzSpaif03v4GVbBNRKPY-KToKv0UJP2a7Yj69jdxPC3jQ/viewform"
      />
    </>
  );
}
export default App;
