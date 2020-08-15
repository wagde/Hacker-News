// import { GET_USER_STATUS } from "./types";
import {getDataApi} from '../Api'
import {GET_DATA_PENDING,GET_DATA_ERROR,GET_DATA_SUCCESS} from './types';

export const dispatchData=(dataUrl)=> {
  return function (dispatch) {
    dispatch({type: GET_DATA_PENDING})
    getDataApi(dataUrl ,(res)=>{
    
     res&& dispatch({type: GET_DATA_SUCCESS,Data:res})
    },(error)=>{
      dispatch({type: GET_DATA_ERROR})
    })
}}

export const dispatchStory=(dataUrl)=> {
  return function (dispatch) {
    dispatch({type: GET_DATA_PENDING})
    getDataApi(dataUrl ,(res)=>{
      dispatch({type: GET_DATA_SUCCESS,Data:res})
    },(error)=>{
      dispatch({type: GET_DATA_ERROR,error})
    })
}}

