export default class Api{
  private static key = 'AIzaSyBnx8p_lA2Hwj12oHMnTWm-ypO9jvYdluM'
  private static baseUrl = 'https://www.googleapis.com/books/v1/volumes'


  private static checkResponse(res:Response):Promise<any> {
    return res.ok
      ? res.json()
      : Promise.reject(new Error("Ошибка при попытке получить данные"));
  }

  public static async getBooksByQuery(query: string, maxResults: number = 30, startIndex:number = 0){
    const res = await fetch(`${this.baseUrl}?${query}&startIndex=${startIndex}&maxResults=${maxResults}&key=${this.key}`);
    return await this.checkResponse(res)
  }

  public static async getBookById(id: string){
    const res = await fetch(`${this.baseUrl}/${id}?key=${this.key}`);
    return await this.checkResponse(res)
  }
}
