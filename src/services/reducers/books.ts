import { Reducer } from "redux"
import { GET_BOOKS, GET_MORE_BOOKS, SET_ERROR, SET_ONLOAD, SET_SUCCESS, TBooksActions } from "../actions/books"
import { TBook } from "../../utils/types"

export type TBooksState = {
  searchQuery: string,
  books: TBook[],
  totalItems: number,
  inStore: number,
  status: 'error'|'success'|'loading'|null
}

const initialState: TBooksState = {
  searchQuery: '',
  books: [],
  totalItems: 0,
  inStore: 0,
  status: null
}

export const booksReducer: Reducer<TBooksState, TBooksActions> = (state = initialState, action) => {
  switch (action.type){
    case GET_BOOKS: {
      return {
        ...state,
        searchQuery: action.payload.query,
        books: action.payload.items,
        inStore: action.payload.loaded,
        totalItems: action.payload.totalItems,
      }
    }
    case GET_MORE_BOOKS: {
      return {
        ...state,
        books: [...state.books, ...action.payload.items],
        inStore: state.inStore + action.payload.loaded
      }
    }
    case SET_ERROR: {
      return {
          ...state,
          status: 'error'
      }
    }
    case SET_ONLOAD: {
      return {
          ...state,
          status: 'loading'
      }
    }
    case SET_SUCCESS: {
      return {
          ...state,
          status: 'success'
      }
    }
    default: {
      return state
    }
  }
}

