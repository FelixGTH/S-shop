import React from "react";
import { useDispatch } from "react-redux";

function Error(props){
    const dispatch = useDispatch()

    return (
        <div>
            <font>4</font>
            <font>0</font>
            <font>4</font>
            <h3><font><font>Страница не найдена</font></font></h3>
            <font>Страница, которую вы ищете, не существует</font>
            <button onClick = {() => dispatch({type: "SCREEN", name: "home"})}></button>
            <font>Иди домой</font>
        </div>
    );
}

export default Error