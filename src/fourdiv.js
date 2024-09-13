import React from 'react';

function Fourdiv(props) {
    return (
        <div style = {{display:"flex"}}>
            <div>{props.children[0]}</div>
            <div>{props.children[1]}</div>
            <div>{props.children[2]}</div>
            <div>{props.children[3]}</div>
        </div>
    );
}

export default Fourdiv;