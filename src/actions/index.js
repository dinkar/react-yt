import { FETCH_SEARCH_ITEMS } from './types';


export const fetchSearchItems = ({ searchText }) => dispatch => {
    const request = window.gapi.client.youtube.search.list({
        q: searchText,
        part: 'snippet'
    });

    request.execute(response => {
        console.log(response.result.items);
        dispatch({
            type: FETCH_SEARCH_ITEMS,
            payload: {
                items: response.result.items,
                searchText
            }
        })
    });

}