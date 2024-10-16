import React from 'react';
import Category from "../home-comp/category";
import Producttape from "../producttape";
import Nav from "../Nav";


function Home(props) {
    return (
        <div>
            <Nav></Nav>
            <ul style = {{display:"flex", justifyContent:"space-around", color: "rgb(255, 255, 255)", marginTop: "25px"}}>
              <li>Гаджеты</li>
              <li>Компьютеры</li>
              <li>Фото</li>
              <li>TV</li>
              <li>Аудио</li>
              <li>Бытовая техника</li>
              <li>Климат</li>
              <li>Дом</li>
              <li>Детские товары</li>
              <li>Авто</li>
              <li>Инсструменты</li>
              <li>Туризм</li>
              <li>Спорт</li>
              <li>Часы и украшения</li>
            </ul>
            <Category style={{marginTop: "30px"}}></Category>
            <div style={{marginTop: "20px"}}>
              <Producttape></Producttape>
            </div>
      </div>
    );
}

export default Home;