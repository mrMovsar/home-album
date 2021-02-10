const { useDispatch, useSelector } = require("react-redux")
const { selectAlbum, deleteAlbum } = require("../redux/actions")

function Album(props) {
    const dispatch = useDispatch();

    const selectAlbumId = useSelector(state => state.albums.selectAlbumId);

    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.id))
      }
    const handleDeleteAlbum = () => {
        dispatch(deleteAlbum(props.album.id))
      } 
     
    const selectedAlbum = (selectAlbumId === props.album.id)? "selectOn" : "selectOff";
    return (
      <div className = {selectedAlbum} >
        <li onClick={handleSelectAlbum} >
          <div>
          <button 
            className ="btn"
            onClick={handleDeleteAlbum} 
            disabled={props.album.deleting}>delete
          </button>
             {props.album.title} 
          </div>
        </li>
      </div>
    )
}
export default Album