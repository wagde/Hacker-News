import { getDataStoriesId, GetStories } from '../Api'
import { GET_DATA_PENDING, GET_DATA_ERROR, GET_DATA_SUCCESS, GET_DATA_SUCCESS_STORY } from './types';

export const dispatchDataStorisId = (dataUrl) => {
  return function (dispatch) {
    dispatch({ type: GET_DATA_PENDING })
    getDataStoriesId(dataUrl, (res) => {
      dispatch({ type: GET_DATA_SUCCESS_STORY, Data:res.data.slice(0,22)
      })
      return res.data
    }, (res) => {
      dispatch({ type: GET_DATA_SUCCESS, Data: res })
    }, (error) => {
      dispatch({ type: GET_DATA_ERROR })
    })
  }
}

export const dispatchDataStoris = () => {
  return function (dispatch, getState) {
    const { dataId, Data } = getState();
    const from = Data.length;
    const to = (Data.length + 10 >= dataId.length) ? dataId.length : Data.length + 10;
    GetStories(dataId, (res) => {
      dispatch({ type: GET_DATA_SUCCESS, Data: [...Data, ...res] });
    }, (error) => {
      dispatch({ type: GET_DATA_ERROR })
    }, from, to)
  }

}
