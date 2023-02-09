import { createStore ,applyMiddleware} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducers/productReducer";
import rootReducer from "./reducers/rooteReducer";
import logger from "redux-logger";


// composeWithDevTools()

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));

export default store;
