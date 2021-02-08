import Albums from "./Albums";
import Photos from "./Photos";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadAlbums, loadPhotos } from '../redux/actions'


function App() {
  const dispatch = useDispatch();
  const loadingAlbums = useSelector(state => state.loadingAlbums);
  const loadingPhotos = useSelector(state => state.loadingPhotos);

  useEffect(() => {
    dispatch(loadAlbums());
    dispatch(loadPhotos())
  }, []);

  if(loadingAlbums || loadingPhotos) {
    return (
      <h1>Please wait...</h1>
    )
  }
  
  return (
    <div className="container">
      <Albums />
      <Photos />
    </div>
  );
}

export default App;
