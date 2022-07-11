import { createContext, useContext } from "react";
import { acountsStore } from "./acount/Account";
import { renderingStore } from "./render/RenderingData";
export const stores = {
  acountsStore,
  renderingStore,
};
const StoreContext = createContext(stores);
export const useStores = () => useContext(StoreContext);
