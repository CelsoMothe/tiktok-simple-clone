import "./styles.css";

import { useRef, useState } from "react";
import { VideoFooter } from "../VideoFooter";
import { SideBar } from "../SideBar";

export const Video = ({ likes, messages, shares, name, description, music, url}) => {
  const [play, setPlay] = useState(false);

  const videoRef = useRef(null);

  const handleStart = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src={url}
      ></video>
      <SideBar  
        likes={likes}
        messages={messages}
        shares={shares}/>
      <VideoFooter 
      name={name}
      description={description}
      music={music}
      />
    </div>
  );
};
