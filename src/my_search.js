import React, { useState, useEffect } from 'react';
import Search from './search';

function My_search(props) {

    const [click, setClick] = useState(false)
    const [search, setSearch] = useState([])

    document.addEventListener("click", (event) => {
        const search_history = document.getElementById("search_history")
        const rect = search_history.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
            // setClick(false)
            
        }
    })

    useEffect(() => {
        const fetch_data = async () => {
            try {    
                                       
                const response = await fetch("https://my-json-server.typicode.com/FelixGTH/for-test/db")
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки ${response.statusText}`)
                }
                const data = await response.json();

                setSearch(data.history)
            } 
            catch (error) {
                alert(error);
            }

        }
        
        fetch_data();
    }, [])

    return (
        <div id = "search_history" style={{display: "flex", width: "25%"}}>
            <input style = {{border: "none", margin: "10px", borderRadius: "20px", outline: "none", textIndent: "10px", width: "100%"}} type = "text" placeholder='Search' onClick={() => setClick(true)}></input>
            {/* {click ? <Search search = {search}></Search> : null} */}
            <Search search = {search}></Search>
        </div>
    );
}

export default My_search;