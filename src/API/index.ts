import { replaceSpaces } from "../utils";

export default class Api{
  private static key = 'AIzaSyBnx8p_lA2Hwj12oHMnTWm-ypO9jvYdluM'
  private static baseUrl = 'https://www.googleapis.com/books/v1/volumes'


  private static checkResponse(res:Response):Promise<any> {
    return res.ok
      ? res.json()
      : Promise.reject(new Error("Ошибка при попытке получить данные"));
  }

  public static async getBooksByQuery(query: string, maxResults: number = 20, startIndex:number = 0){
    const res = await fetch(`${this.baseUrl}?q=${replaceSpaces(query)}&maxResults=${maxResults}&startIndex=${startIndex}&key=${this.key}`);
    return await this.checkResponse(res)
  }
}
