import { makeAutoObservable } from "mobx";

export class RenderingStore {
  rendering = false;
  category = null;
  price = 100000000;
  gerion = null;
  constructor() {
    makeAutoObservable(this);
  }
  //rendering
  getRendering() {
    return this.rendering;
  }
  setRendering() {
    this.rendering = !this.rendering;
  }

  // category
  getCategory() {
    return this.category;
  }
  setCategory(data: any) {
    this.category = data;
  }

  // price
  getPrice() {
    return this.price;
  }
  setPrice(data: any) {
    this.price = data;
  }

  // gerion
  getGerion() {
    return this.gerion;
  }
  setGerion(data: any) {
    this.gerion = data;
  }
}
export const renderingStore = new RenderingStore();
