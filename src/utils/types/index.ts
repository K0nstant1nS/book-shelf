export type TBook = {
  id: string,
  volumeInfo:{
    title: string,
    authors: Array<string>,
    categories: Array<string>,
    description: string,
    imageLinks: {
      smallThumbnail?: string,
      thumbnail?: string,
      small?: string,
      medium?: string,
      large?: string,
      extraLarge?: string
    }
  }
}
