import "./styles.css";

import { useState } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

export function SideBar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="videoSideBar">
      <div className="videoSideBar__options" onClick={handleLike} >
        {liked ? (
          <FavoriteIcon fontSize="large" className="videoSideBar__pointer"/>
        ) : (
          <FavoriteBorderIcon fontSize="large" className="videoSideBar__pointer"/>
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="videoSideBar__options">
        <ChatIcon fontSize="large" className="videoSideBar__pointer"/>
        <p>{messages}</p>
      </div>

      <div className="videoSideBar__options">
        <ShareIcon fontSize="large" className="videoSideBar__pointer"/>
        <p>{shares}</p>
      </div>
    </div>
  );
}
