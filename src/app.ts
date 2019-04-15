import { inject } from "aurelia-framework";
import { CriptoCurrencyRepository } from './repositories/criptoCurrenctrepository'
import { PortfolioItem } from "models/portfolio-item";
import * as moment from 'moment'

@inject(CriptoCurrencyRepository)
export class App {
  repo: CriptoCurrencyRepository;
  currencies: [];
  portfolioItem: PortfolioItem;
  constructor(repo: CriptoCurrencyRepository) {
    this.repo = repo;
  }

  attached() {
    this.setInicialState();
  }

  setInicialState() {
    this.getAllItems();
    this.portfolioItem = this.initItem();
  }

  async save() {
    this.portfolioItem.dateOfPurchase = new Date(this.portfolioItem.dateOfPurchase).toISOString();
    await this.repo.save(this.portfolioItem);
    this.setInicialState();
  }

  async getAllItems() {
    this.currencies = await this.repo.getAllItems();
  }

  async deleteItem(itemId: number) {
    var r = confirm("Are you sure?");
    if (r == true) {
      await this.repo.deleteItem(itemId);
      this.getAllItems();
    }
  }

  private initItem(): PortfolioItem {
    return <PortfolioItem>{
      type: "bitcoin",
      amount: 0,
      dateOfPurchase: moment().format("YYYY-MM-DD"),
      walletLocation: "",
      currentMarketValue: 0
    };
  }
}
