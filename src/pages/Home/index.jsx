import "./styles.css";
import { useEffect, useState } from "react";
import { Video } from "../../components/Videos";
import { database } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default function Home() {

  let maxHeigth;
  if(window.innerHeight < 800) {
    maxHeigth = window.innerHeight;
  }

  const [video, setVideo] = useState([]);

  const getVideos = async () => {
    const videosCollection = collection(database, "videos");
    const videosSnapShot = await getDocs(videosCollection);
    const videosList = videosSnapShot.docs.map((doc) => doc.data());

    setVideo(videosList);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeigth + "px"}}>
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              key={item.url}
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}
