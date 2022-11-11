
import "./Message.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
export default function MessagePage() {
    
  return (
    <div id="pda-message-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">message
        <Time />
            <Header/>
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  )
} 
