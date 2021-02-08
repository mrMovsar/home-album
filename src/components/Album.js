const { useDispatch } = require("react-redux")
const { selectAlbum, deleteAlbum } = require("../redux/actions")

function Album(props) {
    const dispatch = useDispatch();
    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.id))
      }
    const handleDeleteAlbum = () => {
        dispatch(deleteAlbum(props.album.id))
      }  
    return (
        <div className="album">
        <button 
            className ="btn"
            onClick={handleDeleteAlbum} 
            disabled={props.album.deleting}>delete</button>
        <li onClick={handleSelectAlbum}>
             {props.album.title} 
        </li>
        </div>
    )
}
export default Album