import { TBooksState } from "../services/reducers/books";
import { RootState } from "../services/store/types";

export const getBooksData = (state:RootState) => (state.booksData);

export const replaceSpaces = (query:string) => {
  return query.replace(' ', '+');
}
