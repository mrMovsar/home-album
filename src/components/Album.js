const { useDispatch } = require("react-redux")
const { selectAlbum } = require("../redux/actions")

function Album(props) {
    const dispatch = useDispatch();
    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.id))
      }
    return (
        <li onClick={handleSelectAlbum}>
              {props.album.title}
            </li>
    )
}
export default Album