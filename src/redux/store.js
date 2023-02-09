import { createStore ,applyMiddleware} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducers/productReducer";
import rootReducer from "./reducers/rooteReducer";

const store = createStore(rootReducer, applyMiddleware());

export default store;
