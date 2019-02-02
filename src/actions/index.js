import { FETCH_SEARCH_ITEMS, FETCH_VIDEO_CATEGORIES, FETCH_CHANNEL_VIDEOS } from './types';

export const fetchSearchItems = ({ searchText }) => dispatch => {
  window.gapi.client.youtube.search.list({
    q: searchText,
    part: 'snippet'
  })
  .execute(response => {
    dispatch({
      type: FETCH_SEARCH_ITEMS,
      payload: {
        items: response.result.items,
        searchText
      }
    })
  });
}

export const fetchVideoCategories = (() => dispatch => {
  window.gapi.client.youtube.videoCategories.list({
    chart: 'mostPopular',
    regionCode: 'US',
    part: 'snippet'
  })
  .execute((result) => {
    dispatch({
      type: FETCH_VIDEO_CATEGORIES,
      payload: {
        videoCategories: result.items.slice(0, 10)
      }
    });
  });
});

export const fetchChannelIdVideos = (( { id }) => dispatch => {
  window.gapi.client.youtube.videos.list({
    videoCategoryId: id,
    chart: 'mostPopular',
    regionCode: 'US',
    part: 'snippet',
    type: 'video'
  })
  .execute(response => {
    let items = [];
    if (response.result) {
      items = response.result.items;
    }
    dispatch({
      type: FETCH_CHANNEL_VIDEOS,
      payload: {
        items
      }
    });
  });
});
