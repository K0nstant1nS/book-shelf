import { TBook } from "../../utils/types";
import { AppDispatch, AppThunk } from "../store/types";
import Api from "../../API";

export const GET_BOOKS = 'GET_BOOKS';
export const SET_ONLOAD = 'SET_ONLOAD';
export const SET_SUCCESS = 'SET_SUCCESS';
export const SET_ERROR = 'SET_ERROR';
export const GET_MORE_BOOKS = 'GET_MORE_BOOKS';

export interface IAddBookAction {
  type: typeof GET_BOOKS | typeof GET_MORE_BOOKS,
  payload: {
    items: TBook[],
    loaded: number,
    totalItems: number,
    query: string
  }
}

export interface ISetBooksOnloadAction {
  type: typeof SET_ONLOAD
}

export interface ISetBooksLoadedAction {
  type: typeof SET_SUCCESS
}

export interface ISetBooksErrorAction {
  type: typeof SET_ERROR
}

export type TBooksActions = IAddBookAction|ISetBooksErrorAction|ISetBooksLoadedAction|ISetBooksOnloadAction

export const getBooks: AppThunk<void> = (query: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({type: SET_ONLOAD})
    Api.getBooksByQuery(query).then(data=> {
      dispatch({type: SET_SUCCESS})
      dispatch({type: GET_BOOKS, payload: {...data, loaded: data.items.length, query}})
    })
    .catch((e)=>{
      console.log(e)
      dispatch({type: SET_ERROR})
    })
  }
}

export const getMoreBooks: AppThunk<void> = (query: string, startIndex: number, amount = 30) => {
  return (dispatch: AppDispatch) => {
    Api.getBooksByQuery(query, amount, startIndex).then(data=>{
      dispatch({type: GET_MORE_BOOKS, payload: {...data, loaded: data.items.length}});
    }).catch(()=>{
      console.log('no more books')
    })
  }
}
