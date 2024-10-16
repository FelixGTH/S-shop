import React from 'react';
import { useDispatch } from "react-redux";
import My_search from './my_search';

function Nav(props) {
    const dispatch = useDispatch()
    return (
        <div style = {{display:"flex", justifyContent: "space-between",background: "radial-gradient(circle, rgba(122,54,217,1) 0%, rgba(242,98,46,1) 50%, rgba(141,65,191,1) 100%)"}}>
            <button style = {{backgroundColor: "transparent", border: "None", padding: "4px 6px"}} onClick = {() => dispatch({type: "SCREEN", name: "home"})}><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg></button>
            <My_search></My_search>
            <div style={{width: "60px"}}></div>
        </div>
    );
}

export default Nav;