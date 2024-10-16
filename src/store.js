import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
    page_title: "home"
};

const store = createStore(reducer, initialState);

export default store