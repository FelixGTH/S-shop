import React from 'react';

function ProductCard(props) {
    return (
        <div style = {{display: "flex", justifyContent: "center"}}>
            <img style = {{width:"50%"}} src = {props.img}></img>
            <h2>{props.info}</h2>
        </div>
    );
}

export default ProductCard;