import { Route, Routes } from "react-router-dom";
import Device from "./pages/Device/Device";
import IntroVideo from "./pages/Screen/IntroVideo/IntroVideo";
import { useState, useEffect } from "react";
import { EncryptStorage } from "encrypt-storage";
import Cookies from 'js-cookie';
import BaseBoot from "./pages/Screen/Base/BaseBoot";
import OutroVideo from "./pages/Screen/Outrovideo/Outrovideo";
function App() {
  const [newuser, setNewuser]           = useState(true);
  const [currentAsset, setCurrentAsset] = useState('');
  const encryptStorage                  = new EncryptStorage('y2knotokEncrypted');
  const [press, setpress] = useState(0);
  const [video, SetVideo] = useState("Episode1");
  const [episodeone, setEpisodeOne] = useState("notallowed");
  const cacheImages = async (assets) => {
     assets.map(asset => {
        const img = new Image();
        img.src = asset;
     }); 
  };

  //cookie area

// const Intro = Cookies.get('Flow');
// if (Intro == "Flow1.2done"){
//   setNewuser(false)
// }
// cookie area

useEffect(() => {
 
  const Intro = Cookies.get('Flow1.3'); 
  if (Intro == "Flow1.3done"){
    setNewuser(false)
  }

  
  });





  
  useEffect(()=>{
    let assets = [
      'https://images.stinkyfruit.com/device_without_button.png',
      'https://images.stinkyfruit.com/TheHeader.png',
      'https://images.stinkyfruit.com/PDA_Crack_Screen.svg',
      'https://images.stinkyfruit.com/scroll-bar-bg.png',
      'https://images.stinkyfruit.com/Message_Normal_state.png',
      'https://images.stinkyfruit.com/Record_Normal_state.png',
      'https://images.stinkyfruit.com/Phone_Normal_state.png',
      'https://images.stinkyfruit.com/Chat_Normal_state.png',
      'https://images.stinkyfruit.com/map_Normal_state.png',
      'https://images.stinkyfruit.com/1920x1080–-4.webp',
      'https://images.stinkyfruit.com/3890x2160-2.webp',
      'https://images.stinkyfruit.com/popup_container_right.svg',
      'https://images.stinkyfruit.com/welcome_to_y2knotok.svg',
      'https://images.stinkyfruit.com/3840x2160v5–2.png',
      'https://images.stinkyfruit.com/audio_bed_ambience_mp3_v2_mom_flow.mp3',
      'https://images.stinkyfruit.com/audio_bed_ambience_mp3_v2.mp3',
      'https://images.stinkyfruit.com/HR_Timothee-V-0103.mp4',
      'https://images.stinkyfruit.com/voice1_6.mp4',
      'https://images.stinkyfruit.com/New_Message-option2.mp3',
      'https://images.stinkyfruit.com/Mom1_8.mp4',
      'https://images.stinkyfruit.com/Glitch_with_keypad_v13.mp4',
      'https://images.stinkyfruit.com/1920x1080v7.png',
      'https://images.stinkyfruit.com/3840x2160v7.png',
      'https://images.stinkyfruit.com/1440x900v7.png',
      'https://images.stinkyfruit.com/1366x768v7.png',
      'https://images.stinkyfruit.com/1280x720v7.png'
    ];
    cacheImages(assets);
    
    //**Remove Existing LocalStorage */
    encryptStorage.removeItem(`chat-storage-krista`);
    encryptStorage.removeItem(`chat-storage-timothee`);
  },[]);
 
  return (
    <div className={`container-fluid app d-flex justify-content-center ${ !newuser ? 'fadeInOutApp' : ''} ${ video === "" ? 'outroFadeInOut' : '' }`} >
      <Routes>
        
       <Route
          path="/"
          element={video ==="Episode2"?<OutroVideo setNewuser={setNewuser} SetVideo={SetVideo}  episodeone={episodeone}
          setEpisodeOne={setEpisodeOne}/>:
         newuser?<BaseBoot newuser={newuser} setNewuser={setNewuser}  setpress={setpress} press={press} video={video}/>:<Device SetVideo={SetVideo} setNewuser={setNewuser}  episodeone={episodeone}
         setEpisodeOne={setEpisodeOne}/>
          }
        />
       
      </Routes>
    </div>
  );
}

export default App;
