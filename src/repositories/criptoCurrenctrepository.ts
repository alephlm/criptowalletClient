import { HttpClient, json } from "aurelia-fetch-client";
import { inject } from "aurelia-framework";

@inject(HttpClient)
export class CriptoCurrencyRepository {
  http: any;
  private url = "https://lit-chamber-95565.herokuapp.com/";
  constructor(http) {
    this.http = http;
  }

  async getAllItems() {
    let response = await this.http.fetch(this.url + "all");
    return await response.json();
  }


  async save(item) {
    return await this.http.fetch(this.url + 'save', { method: 'post', body: json(item) });
  }

  async deleteItem(itemId: number) {
    return await this.http.delete(this.url + "delete?id=" + itemId);
  }
}
