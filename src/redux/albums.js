const initialState = {
    albums: [],
    selectAlbumId: null,
    loadingAlbums: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        
        case 'albums/load/start':
            return {
                ...state,
                loadingAlbums: true
            }    
        
        case 'albums/load/success':
            return {
                ...state,
                albums: action.payload,
                loadingAlbums: false
            }
            
        case 'album/delete/success':
            return {
                ...state,
                albums: state.albums.filter(album => album.id !== action.payload)
            }  
            
        case 'album/delete/start':
            return {
                ...state,
                albums: state.albums.map((album) => {
                    if(album.id === action.payload) {
                        return {
                            ...album,
                            deleting: true
                        }
                    }
                    return album
                })
            }
            
        case 'album/select':
            return {
                ...state,
                selectAlbumId: action.payload
            }     

        default:
            return state;
    }
}