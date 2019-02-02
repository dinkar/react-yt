import { FETCH_SEARCH_ITEMS, FETCH_VIDEO_CATEGORIES, FETCH_CHANNEL_VIDEOS } from '../actions/types';

export default function videosReducer(state = {items: [], searchText: '', videoCategories: []}, action) {
  switch(action.type) {
    case FETCH_SEARCH_ITEMS:
      return {...state, items:action.payload.items, searchText: action.payload.searchText};
    case FETCH_VIDEO_CATEGORIES:
      return {...state, videoCategories: action.payload.videoCategories};
    case FETCH_CHANNEL_VIDEOS:
      return {...state, items: action.payload.items, searchText: ''}
    default:
      return state
  }
}
