import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import albums from './albums';
import photos from './photos';

const logger = createLogger({
    diff: true,
    collapsed: true
});

const rootReducer = combineReducers({
    albums: albums,
    photos: photos
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store