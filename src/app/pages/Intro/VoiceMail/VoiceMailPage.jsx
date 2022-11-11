import "./VoiceMail.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
export default function VoiceMailPage() {
  //voicemail
  return (
    <div id="pda-voicemail-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time />
          <Header />

          <div className=" d-flex justify-content-evenly mx-2 border border-dark py-0 g-5">
            <div className="red-icon "></div>
            <div className="voice-icon "></div>
            <div className="d-flex align-items-start flex-column bd-highlight justify-content-evenly">
              <div className="d-flex justify-content-center">
                <div className="email-name">Timothee</div>
                <div className="ms-5">12/30</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="play-icon" type="button"></div>
                <div className="sound-icon mt-1"></div>
              </div>
            </div>
          </div>

          <div className=" d-flex justify-content-evenly mx-2 border border-dark py-0 g-5">
            <div className="red-icon "></div>
            <div className="voice-icon "></div>
            <div className="d-flex align-items-start flex-column bd-highlight justify-content-evenly">
              <div className="d-flex justify-content-center">
                <div className="email-name">Timothee</div>
                <div className="ms-5">12/30</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="play-icon" type="button"></div>
                <div className="sound-icon mt-1"></div>
              </div>
            </div>
          </div>


          <div className=" d-flex justify-content-evenly mx-2 border border-dark py-0 g-5">
            <div className="unred-icon "></div>
            <div className="voice-icon "></div>
            <div className="d-flex align-items-start flex-column bd-highlight justify-content-evenly">
              <div className="d-flex justify-content-center">
                <div className="email-name">Timothee</div>
                <div className="ms-5">12/30</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="play-icon" type="button"></div>
                <div className="sound-icon mt-1"></div>
              </div>
            </div>
          </div>


          <div className=" d-flex justify-content-evenly mx-2 border border-dark py-0 g-5">
            <div className="unred-icon "></div>
            <div className="voice-icon "></div>
            <div className="d-flex align-items-start flex-column bd-highlight justify-content-evenly">
              <div className="d-flex justify-content-center">
                <div className="email-name">Timothee</div>
                <div className="ms-5">12/30</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="play-icon" type="button"></div>
                <div className="sound-icon mt-1"></div>
              </div>
            </div>
          </div>


          <div className=" d-flex justify-content-evenly mx-2 border border-dark py-0 g-5">
            <div className="unred-icon "></div>
            <div className="voice-icon "></div>
            <div className="d-flex align-items-start flex-column bd-highlight justify-content-evenly">
              <div className="d-flex justify-content-center">
                <div className="email-name">Timothee</div>
                <div className="ms-5">12/30</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="play-icon" type="button"></div>
                <div className="sound-icon mt-1"></div>
              </div>
            </div>
          </div>


          <div className=" d-flex justify-content-evenly mx-2 border border-dark py-0 g-5">
            <div className="unred-icon "></div>
            <div className="voice-icon "></div>
            <div className="d-flex align-items-start flex-column bd-highlight justify-content-evenly">
              <div className="d-flex justify-content-center">
                <div className="email-name">Timothee</div>
                <div className="ms-5">12/30</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="play-icon" type="button"></div>
                <div className="sound-icon mt-1"></div>
              </div>
            </div>
          </div>


         
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
