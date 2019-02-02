import {
  FETCH_SEARCH_ITEMS,
  FETCH_VIDEO_CATEGORIES,
  FETCH_CHANNEL_VIDEOS
} from './types';
import {
  getSearchItems,
  getVideoCategories,
  getChannelVideos
} from '../services/video';

export const fetchSearchItems = ({ searchText }) => async dispatch => {
  const result = await getSearchItems({
    q: searchText,
    part: 'snippet'
  });
  dispatch({
    type: FETCH_SEARCH_ITEMS,
    payload: {
      items: result.items,
      searchText
    }
  });
};

export const fetchVideoCategories = () => async dispatch => {
  const result = await getVideoCategories({
    chart: 'mostPopular',
    regionCode: 'US',
    part: 'snippet'
  });
  dispatch({
    type: FETCH_VIDEO_CATEGORIES,
    payload: {
      videoCategories: result.items.slice(0, 10)
    }
  });
};

export const fetchChannelIdVideos = ({ id }) => async dispatch => {
  let items = [];
  try {
    const result = await getChannelVideos({
      videoCategoryId: id,
      chart: 'mostPopular',
      regionCode: 'US',
      part: 'snippet,statistics',
      type: 'video',
      maxResults: 6
    });
    items = result.items;
  } catch (e) {
    console.log(e);
  } finally {
    dispatch({
      type: FETCH_CHANNEL_VIDEOS,
      payload: {
        items: items
      }
    });
  }
};
