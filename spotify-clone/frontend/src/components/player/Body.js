import React from "react"; 
import "./styles/Body.css";
// import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
// import Header from "./Header";
import SongRow from "./SongRow";
import Album from "./Album";
import Artist from "./Artist";
// import SearchResults from "./SearchResults";
import AlbumsLibrary from "./AlbumsLibrary";

function Body({spotify}) {
  const [{ 
    // discover_weekly, 
    // playlists, 
    // current_playlist, 
    albums, 
    album, 
    tracks, 
    // artists, 
    artist, 
    // searching 
  }] = useDataLayerValue();

  return (
    <div className="body">
      {/* <Header spotify={spotify} /> */}
      {/* {searching && 
      <div className="searchResults__body">
        {artists?.items?.length ? artists?.items?.map((item) => (
        <SearchResults artist={item} key={item.id} spotify={spotify}/>
      )): <h2>No such artist found. Try another artist...</h2>}
      </div>} */}
      <div className="body__info">
        <div className="body__artistInfo">
          {artist && <Artist artist={artist} albums={albums} spotify={spotify} />}
          {album ? <Album album={album} spotify={spotify} /> : albums && <Album album={albums[0]} spotify={spotify} />}
          {/* {albums ? <LatestAlbum spotify={spotify}/>
          : 
          (current_playlist ? 
          <img src = {playlists.items ? playlists.items[0].images[0].url : null} alt="" /> :
          <img src = {discover_weekly?.images[0]?.url} alt="" /> )} */}
        </div>
        <div className="body__infoText">
          {/* {albums ? null :
          
          (current_playlist ? 
          <>
            <strong>PLAYLIST</strong>
            <h2>{current_playlist.name}</h2> 
            <p>{current_playlist.description}</p>
          </> :
          <>
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </>
          )
          } */}
        </div>
      </div>
      {tracks && <hr />}
      <div className="body__songs">
        {/* <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div> */}
        {tracks && tracks.map((track) => (
          <SongRow track={track} key={track.id} />
        ))}
        {/* {tracks ? tracks.map((track) => (
          <SongRow track={track} key={track.id} />
        )): 
        (current_playlist ? 
          current_playlist.tracks.items.map((item) => (
            <SongRow track={item.track} key={item.track.id}/>
          )) : 
          discover_weekly?.tracks.items.map((item) => (
            <SongRow track={item.track} key={item.track.id} />
          )))} */}
      </div>
      {albums && 
      <div className="body__albums">
        <h1>Albums & Singles</h1>
        <div className="body__albumsDisplay">
           {albums?.map((album) => (
           <AlbumsLibrary album={album} key={album.id} spotify={spotify} />
          ))}
        </div>
      </div>
      }
    </div>
  );
}

export default Body;