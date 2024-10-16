import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

var mountNode = document.getElementById("app");
const root = createRoot(mountNode);
root.render(<Provider store={store}><App/></Provider>);