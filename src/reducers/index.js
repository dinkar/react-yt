import { FETCH_SEARCH_ITEMS } from '../actions/types';

export default function videosReducer(state = {items: [], searchText: ''}, action) {
    switch(action.type) {
        case FETCH_SEARCH_ITEMS:
            return action.payload;
        default:
            return state
    }
}