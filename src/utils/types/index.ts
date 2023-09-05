export type TBook = {
  volumeInfo:{
    title: string,
    authors: Array<string>,
    categories: Array<string>,
    description: string,
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    }
  }
}
