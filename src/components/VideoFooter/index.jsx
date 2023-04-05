import "./styles.css";
import disco from "../../assets/disco.png";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export function VideoFooter({ name, description, music }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="imagem de um disco girando"
        src={disco}
      />
    </div>
  );
}
