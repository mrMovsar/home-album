const initialState = {
    albums: [],
    photos: [],
    selectAlbumId: null,
    loadingAlbums: false,
    loadingPhotos: false
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

        case 'photos/load/start':
            return {
                ...state,
                loadingPhotos: true
            }    

        case 'photos/load/success':
            return {
                ...state,
                photos: action.payload,
                loadingPhotos: false
            }

        case 'album/select':
            return {
                ...state,
                selectAlbumId: action.payload
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

        default:
            return state;
    }
}