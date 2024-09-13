import React from 'react';
import Card from "./card";
import Fourdiv from "./fourdiv";
import phone from "./image/phone.png"


const Category = (props) => {
    return <div style = {{display:"flex", flexDirection:"column"}}>
      <Fourdiv style = {{display: "flex"}}>
        <Card src = {phone} title = "Смартфоны"></Card>
        <Card src = "https://cdn-icons-png.flaticon.com/512/5541/5541471.png" title = "НАЗВАНИЕ"></Card>
        <Card src = "https://cdn-icons-png.flaticon.com/512/5541/5541471.png" title = "НАЗВАНИЕ"></Card>
        <Card src = "https://cdn-icons-png.flaticon.com/512/5541/5541471.png" title = "НАЗВАНИЕ"></Card>
      </Fourdiv>
      <Fourdiv>
        <Card src = "https://cdn-icons-png.flaticon.com/512/5541/5541471.png" title = "НАЗВАНИЕ"></Card>
        <Card src = "https://cdn-icons-png.flaticon.com/512/5541/5541471.png" title = "НАЗВАНИЕ"></Card>
        <Card src = "https://cdn-icons-png.flaticon.com/512/5541/5541471.png" title = "НАЗВАНИЕ"></Card>
        <Card src = "https://cdn-icons-png.flaticon.com/512/5541/5541471.png" title = "НАЗВАНИЕ"></Card>
      </Fourdiv>
    </div>
  }

export default Category;