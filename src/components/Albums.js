import { useDispatch, useSelector } from "react-redux";
import Album from "./Album";


function Albums() {
  const dispatch = useDispatch();
  const loadingAlbums = useSelector(state => state.loadingAlbums);
  const loadingPhotos = useSelector(state => state.loadingPhotos);

  const albums = useSelector(state => state.albums);
  
  if(loadingAlbums || loadingPhotos) {
    return (
      <h1>Please wait...</h1>
    )
  }

  return (
    <div className="albums">
      <ul>
        {albums.map(album => {
          return (
            <Album album={album} key={album.id}/>
          )
        })}
      </ul>
    </div>
  );
}

export default Albums;
