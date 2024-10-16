import React from "react";
import Home from "./pages/home";
import Error from "./pages/error";
import { useSelector } from "react-redux";

function App(props) {
  const page_title = useSelector((state) => state.page_title)
  
  switch (page_title) {
    case "error":

      return <Error/>
    default: 

      return <Home></Home>
  }
}



export default App;
