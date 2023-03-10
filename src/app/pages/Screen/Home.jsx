import "./Home.scss";
import { useState } from "react";
import Time from "./Components/Time/Time";
export default function Home({dtime}) {
  return (
    <div id="home">
      <Time time={dtime}/>
      <div className="d-flex justify-content-center align-items-center logo-container">
        <div className="the-image-logo"></div>
      </div>
    </div>
  );
}
