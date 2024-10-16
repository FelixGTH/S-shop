import Card from "./card";
import React, { useEffect } from 'react';



function Category(props) {

    const [jsonobj, setJsonobj] = React.useState(null)

    const [raws, setRaws] = React.useState([]);

    useEffect(() => {
        const fetch_data = async () => {
            try {    
                                       
                const response = await fetch("https://my-json-server.typicode.com/FelixGTH/for-test/db")
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки ${response.statusText}`)
                }
                const data = await response.json();
                setJsonobj(data)
                let cards = Object.keys(data.item)

                let _raws = []
                
                while (cards.length > 4) {
                    _raws.push(get4(cards));
                }
                _raws.push(cards);
                setRaws(_raws)
            } 
            catch (error) {
                alert(error);
            }

        }
        
        fetch_data();
    }, [])

    function get4(cards) {
        let imgs = []
        for (let _ = 0; _ < 4; _++) {
            imgs.push(cards.shift())
        }
        return imgs
    }

    


    return (
        <div style={props.style}>
            {
                raws.map(
                    (raw, i) => <div style = {{display: "flex",flexDirection:"row", width: "100%"}} key = {i}>{raw.map((item, index) => <Card key = {index} item = {jsonobj.item[item]} title = {item}></Card>)}</div>
                )
            }
        </div>

    );
}


export default Category;