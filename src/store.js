import { createStore } from "redux";
import rootReducer from "./reducers";

const localStorageKey = "theme";
const persistedTheme = localStorage.getItem(localStorageKey);

let initialState = {
  preferences: persistedTheme ? JSON.parse(persistedTheme) : {},
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const preferences = store.getState().preferences;
  if (!preferences) return;

  localStorage.setItem(localStorageKey, JSON.stringify(preferences));
});

export default store;