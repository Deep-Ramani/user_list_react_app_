import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers/reducer";
const store = createStore(reducer,composeWithDevTools( applyMiddleware(thunk)))

export default store;