import { HttpClient, json } from "aurelia-fetch-client";
import { inject } from "aurelia-framework";

@inject(HttpClient)
export class CriptoCurrencyRepository {
  http: any;
  private url = "http://localhost:8081/";
  constructor(http) {
    this.http = http;
  }

  async getAllItems() {
    let response = await this.http.fetch(this.url + "all");
    return await response.json();
  }


  save(item) {
    this.http.fetch(this.url + 'save', { method: 'post', body: json(item) });
  }

  async deleteItem(itemId: number) {
    return await this.http.delete(this.url + "delete?id=" + itemId);
  }
}
