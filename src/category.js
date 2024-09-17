import Card from "./card";
import React, { useEffect } from 'react';

function Category(props) {

    const [jsonobj, setJsonobj] = React.useState(null)

    useEffect(() => {
        const fetch_data = async () => {
            try {                           
                const response = await fetch("https://my-json-server.typicode.com/FelixGTH/for-test/db")
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки ${response.statusText}`)
                }
                const data = await response.json();
                setJsonobj(data)
            } 
            catch (error) {
                alert(error);
            }
        }
        
        fetch_data();
    }, [])

    return (
        <>
            {jsonobj ? <div style = {{display:"flex", flexDirection:"column"}}>
                          {Object.keys(jsonobj.item).map((key, index) => <Card key = {index} item = {jsonobj.item[key]}></Card>)}
                        </div> 
            : <p>Загрузка</p>}
        </>
    );
}


export default Category;