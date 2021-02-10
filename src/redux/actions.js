export const loadAlbums = () => {
    return (dispatch) => {
        dispatch({type: 'albums/load/start'});

        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: 'albums/load/success',
                    payload: json
                })
            })
    }
}

export const deleteAlbum = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'album/delete/start',
            payload: id
        });

        fetch("https://jsonplaceholder.typicode.com/albums", {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => {
            dispatch ({
                type: 'album/delete/success',
                payload: id
            })
        })
    }
}

export const loadPhotos = () => {
    return (dispatch) => {
        dispatch({type: 'photos/load/start'});

        fetch("https://jsonplaceholder.typicode.com/photos?_limit=100")
        .then(response => response.json())
        .then((json) => {
            dispatch ({
                type: 'photos/load/success',
                payload: json
            })
        })
    }
}

export const selectAlbum = (id) => {
    return (dispatch) => {
        dispatch ({
            type: 'album/select',
            payload: id
        })
    }
}

