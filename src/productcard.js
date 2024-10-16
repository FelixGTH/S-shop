import React from 'react';

function ProductCard(props) {
    return (
        <div style = {{display: "flex", justifyContent: "center"}}>
            <img style = {{width:"50%"}} src = {props.img}></img>
            <div>
                <h2></h2>
                <p>{props.info}</p>
            </div>
        </div>
    );
}

export default ProductCard;