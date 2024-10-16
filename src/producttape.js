import React, { useEffect } from 'react';
import ProductCard from "./productcard";



let img = ["https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955182.jpg?t=st=1727791674~exp=1727795274~hmac=746f3ebbd45b26510074e0c91dfef68aa0d1d37dc34cc92fe45abbff0aa7918e&w=740",
           "https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955182.jpg?t=st=1727791674~exp=1727795274~hmac=746f3ebbd45b26510074e0c91dfef68aa0d1d37dc34cc92fe45abbff0aa7918e&w=740",
           "https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955182.jpg?t=st=1727791674~exp=1727795274~hmac=746f3ebbd45b26510074e0c91dfef68aa0d1d37dc34cc92fe45abbff0aa7918e&w=740",
           "https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955182.jpg?t=st=1727791674~exp=1727795274~hmac=746f3ebbd45b26510074e0c91dfef68aa0d1d37dc34cc92fe45abbff0aa7918e&w=740",
            "https://img.freepik.com/free-photo/kitty-with-monochrome-wall-her_23-2148955134.jpg?t=st=1727791934~exp=1727795534~hmac=52a1b939e048ff5ffd4d1a228a26110e7ff609eafb480b4bc25202b5528dc4d6&w=740",
            "https://img.freepik.com/free-photo/kitty-with-monochrome-wall-her_23-2148955134.jpg?t=st=1727791934~exp=1727795534~hmac=52a1b939e048ff5ffd4d1a228a26110e7ff609eafb480b4bc25202b5528dc4d6&w=740",
            "https://img.freepik.com/free-photo/kitty-with-monochrome-wall-her_23-2148955134.jpg?t=st=1727791934~exp=1727795534~hmac=52a1b939e048ff5ffd4d1a228a26110e7ff609eafb480b4bc25202b5528dc4d6&w=740",
            "https://img.freepik.com/free-photo/kitty-with-monochrome-wall-her_23-2148955134.jpg?t=st=1727791934~exp=1727795534~hmac=52a1b939e048ff5ffd4d1a228a26110e7ff609eafb480b4bc25202b5528dc4d6&w=740",
            "https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955182.jpg?t=st=1727791674~exp=1727795274~hmac=746f3ebbd45b26510074e0c91dfef68aa0d1d37dc34cc92fe45abbff0aa7918e&w=740",
           "https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955182.jpg?t=st=1727791674~exp=1727795274~hmac=746f3ebbd45b26510074e0c91dfef68aa0d1d37dc34cc92fe45abbff0aa7918e&w=740",
           "https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955182.jpg?t=st=1727791674~exp=1727795274~hmac=746f3ebbd45b26510074e0c91dfef68aa0d1d37dc34cc92fe45abbff0aa7918e&w=740",
           "https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955182.jpg?t=st=1727791674~exp=1727795274~hmac=746f3ebbd45b26510074e0c91dfef68aa0d1d37dc34cc92fe45abbff0aa7918e&w=740",
            "https://img.freepik.com/free-photo/kitty-with-monochrome-wall-her_23-2148955134.jpg?t=st=1727791934~exp=1727795534~hmac=52a1b939e048ff5ffd4d1a228a26110e7ff609eafb480b4bc25202b5528dc4d6&w=740",
            "https://img.freepik.com/free-photo/kitty-with-monochrome-wall-her_23-2148955134.jpg?t=st=1727791934~exp=1727795534~hmac=52a1b939e048ff5ffd4d1a228a26110e7ff609eafb480b4bc25202b5528dc4d6&w=740",
            "https://img.freepik.com/free-photo/kitty-with-monochrome-wall-her_23-2148955134.jpg?t=st=1727791934~exp=1727795534~hmac=52a1b939e048ff5ffd4d1a228a26110e7ff609eafb480b4bc25202b5528dc4d6&w=740",
            "https://img.freepik.com/free-photo/kitty-with-monochrome-wall-her_23-2148955134.jpg?t=st=1727791934~exp=1727795534~hmac=52a1b939e048ff5ffd4d1a228a26110e7ff609eafb480b4bc25202b5528dc4d6&w=740",
        ]           

const Producttape = (props) => {

    const [i, setI] = React.useState(0);

    function left() {
        if (i - 4 < 0) {
            setI(img.length - 4)
        } else {
            setI(i - 4)
        }
    }

    function right() {
        if (i >= img.length - 4) {
            setI(0)
        } else {
            setI(i + 4)
        }
    }

    function get4() {
        return img.slice(i, i + 4)

    }

    return <div style = {{display: "flex"}}>
        <button style = {{backgroundColor: "transparent", border: "none",transform: "scaleX(-1)", width: "100px"}} onClick={left}><img src = "https://cdn-icons-png.flaticon.com/512/3599/3599430.png" style={{width: "100%", }}></img></button>
        <>
            {get4().map(
                (img, index) => <ProductCard key = {index} img = {img}></ProductCard>
            )}
        </>
        <button style = {{backgroundColor: "transparent", border: "none",width: "100px"}} onClick={right}><img src = "https://cdn-icons-png.flaticon.com/512/3599/3599430.png" style={{width: "100%", }}></img></button>
    </div>
}

export default Producttape;