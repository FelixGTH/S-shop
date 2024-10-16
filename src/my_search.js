import React, { useState, useEffect } from 'react';
import Search from './search';

function My_search(props) {

    const [click, setClick] = useState(false)

    return (
        <div>
            <input style = {{border: "none", width: "25%", margin: "10px", borderRadius: "20px", outline: "none", textIndent: "10px"}} type = "text" placeholder='Search' onClick={() => setClick(true)}></input>
            {click ? <Search></Search> : null}
        </div>
    );
}

export default My_search;