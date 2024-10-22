import React from 'react';
import History_button from './history_button';

function Search(props) {
    alert(props)
    return (
        <div style={{display:"flex", flexDirection:"column", position:"absolute", zIndex: "100", marginTop: "55px", width:"25%", background: "red"}}>
            {props.search.map((value, index) => <History_button key = {index} value = {value}></History_button>)}
        </div>
    );
}

export default Search;