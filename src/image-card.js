import React, { useEffect } from 'react';

function ImageCard(props) {

    const [jsonobj, setJsonobj] = React.useState(null)

    useEffect(() => {
        const fetch_data = async () => {
            try {                           
                const response = await fetch("https://my-json-server.typicode.com/FelixGTH/test-serv/db")
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
            {jsonobj ? <img src = {jsonobj["item"]["phone"]["image"]}/> : <p>Загрузка</p>}
        </>
    );
}

export default ImageCard;