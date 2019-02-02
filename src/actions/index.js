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

export const fetchSearchItems = ({ searchText }) => dispatch => {
  getSearchItems({
    q: searchText,
    part: 'snippet'
  }).then(result => {
    dispatch({
      type: FETCH_SEARCH_ITEMS,
      payload: {
        items: result.items,
        searchText
      }
    });
  });
};

export const fetchVideoCategories = () => dispatch => {
  getVideoCategories({
    chart: 'mostPopular',
    regionCode: 'US',
    part: 'snippet'
  }).then(({ items }) => {
    dispatch({
      type: FETCH_VIDEO_CATEGORIES,
      payload: {
        videoCategories: items.slice(0, 10)
      }
    });
  });
};

export const fetchChannelIdVideos = ({ id }) => dispatch => {
  getChannelVideos({
    videoCategoryId: id,
    chart: 'mostPopular',
    regionCode: 'US',
    part: 'snippet,statistics',
    type: 'video',
    maxResults: 6
  })
    .then(({ items }) => {
      dispatch({
        type: FETCH_CHANNEL_VIDEOS,
        payload: {
          items: items
        }
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_CHANNEL_VIDEOS,
        payload: {
          items: []
        }
      });
    });
};
