import { legacy_createStore as createStore } from "redux";
import movieReducer from "../reducers/movieReducer";

export const myStore = createStore(movieReducer);
