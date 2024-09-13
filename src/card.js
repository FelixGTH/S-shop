import React, { useEffect } from 'react';

const get_random_color = () => {

    let color = {
        r : Math.floor(Math.random() * 255),
        g : Math.floor(Math.random() * 255),
        b : Math.floor(Math.random() * 255),
    };
    return color;
}

function Card(props) {

    const [hover, setHover] = React.useState(false)
    const accent_color = get_random_color()
    return (
        <div style={{display:"flex", position:"relative", overflow: "hidden", background:`rgb(${accent_color.r}, ${accent_color.g}, ${accent_color.b})`, height: "100%"}} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src = {props.src} style={{width:"40%", borderRadius:"20px"}}></img>
            <div style = {{position:"absolute", bottom:0, left: 0, right: 0, opacity: hover ? 1 : 0, transition:"1s", color: "rgb(255, 255, 255)"}}>
                <h2 style = {{textAlign:"center"}}>{props.title}</h2>
                <p style = {{textAlign:"center"}}>{props.info}</p>
            </div>
        </div>
    );
}



export default Card;