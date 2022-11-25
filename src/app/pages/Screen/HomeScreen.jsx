import "./screen.scss";
import Time from "./Components/Time/Time";
import Boot from "./Boot/Boot";
export default function HomeScreen() {
  return (
    <div id="pda-home-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time/>
          <div className="the-image-logo"></div>
        </div>
        <div className="inner-row-right"></div>
        <div className="logo"></div>
        <div className=""></div>
      </div>
    </div>
  );
}
