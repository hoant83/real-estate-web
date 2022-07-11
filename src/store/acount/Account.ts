import { makeAutoObservable } from "mobx";

export class AcountsStore {
  account = null;
  constructor() {
    makeAutoObservable(this);
  }
  getAccount() {
    return this.account;
  }
  setAccount(data: any) {
    this.account = data;
  }
  setAccountNull() {
    this.account = null;
  }
}
export const acountsStore = new AcountsStore();
