import { TBooksState } from "../services/reducers/books";
import { RootState } from "../services/store/types";

export const getBooksData = (state:RootState) => (state.booksData);

export const replaceSpaces = (query:string) => {
  return query.replace(' ', '+');
}

export const getQueryString = (searchValue: string, category: string, sorting = 'revelance') => {
  const subject = category === 'all' ? '' : `+subject:${category}`
  const query = `q=${replaceSpaces(searchValue)}${subject}&orderBy=${sorting}`
  return query
}
