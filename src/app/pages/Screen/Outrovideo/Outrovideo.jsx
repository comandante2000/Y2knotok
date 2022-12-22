import "./Outrovideo.scss";
import { useState } from "react";
import { useRef } from "react";
export default function OutroVideo({ setNewuser }) {

  const DonePlaying = () => {
    setNewuser(false);
  };
  let audio1 = "https://images.stinkyfruit.com/Episode-1-Outro-v1.mp4";
  return (
    <div id="pda-outro-screen">
      <div className="introvideo ">
        <video
          className="video-size"
          // autoplay="true"
          id="intro"
          src={audio1}
          type="video/mp4"
          onEnded={DonePlaying}
          // autoPlay
          // muted
          controls
          // width="1920"
          // height="auto"
        ></video>
      </div>
    </div>
  );
}
