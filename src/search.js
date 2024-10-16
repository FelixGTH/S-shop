import React, { useState, useEffect } from 'react';

function Search(props) {

    const [search, setSearch] = useState([])

    useEffect(() => {
        const fetch_data = async () => {
            try {    
                                       
                const response = await fetch("https://my-json-server.typicode.com/FelixGTH/for-test/db2")
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки ${response.statusText}`)
                }
                const data = await response.json();

                setSearch(data)
                
            } 
            catch (error) {
                alert(error);
            }

        }
        
        fetch_data();
    }, [])

    return (
        <div style={{display:"flex"}}>
            {search.map((value, index) => <button key = {index}><p>{value}</p></button>)}
        </div>
    );
}

export default Search;