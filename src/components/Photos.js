import { useSelector } from "react-redux";

function Photos() {
  const photos = useSelector(state => state.photos.photos);
  const selectAlbumId = useSelector(state => state.albums.selectAlbumId);
  
  const filterPhotos = photos.filter(photo => photo.id === selectAlbumId);

  if(selectAlbumId===null) {
    return (
      <div className="no-select-album" > Выберите альбом из списка </div>
    )
  }

  return (
    <div className="photos">
      {filterPhotos.map(photo => {
        return (
          <div key={photo.id} className="photo">
            <img src={photo.url} alt="" className="img"/>
          </div>
        )
      })}
    </div>
  );
}

export default Photos;
