import React, { useEffect } from 'react';


function Card(props) {

    const is_style = (src) => {
        const img = new Image()
        img.src = src;
        return img.width > img.height;
    };

    const [hover, setHover] = React.useState(false)

    const [style, setStyle] = React.useState({})
    

    useEffect(() => {
        setStyle({
            width: is_style(props.item.image) ? 'auto' : "100%",
            height: !is_style(props.item.image) ? 'auto' : "100%"
        })
    }, [props.item.image])

    return (
        <div style={{ aspectRatio: 1, flex: 1, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", position: "relative"}} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src = {props.item.image} 
            style={style}/>
            <div style = {{position:"absolute", bottom:0, left: 0, right: 0, opacity: hover ? 1 : 0, transition:"1s", color: "rgb(255, 255, 255)"}}>
                <h2 style = {{textAlign:"center"}}>{props.title}</h2>
                <p style = {{textAlign:"center"}}>{props.item.info}</p>
            </div>
        </div>
    );
}



export default Card;