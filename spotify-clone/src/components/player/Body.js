import React from "react"; 
import "./styles/Body.css";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import Header from "./Header";

function Body({spotify}) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} /> 
      <div className="body__info">
        <img src = {discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {/* {discover_weekly?.tracks.items.map((item) => (
          // <SongRow track={item.track} />
        ))} */}
      </div>
    </div>
  );
}

export default Body;