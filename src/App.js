import React from "react";
import ProductCard from "./productcard";
import Category from "./category";

class App extends React.Component {
  render() {
    const { name, surname } = this.props;

    return (
      <>
      <header>
        <h1 style = {{display:"block",background: "radial-gradient(circle, rgba(122,54,217,1) 0%, rgba(242,98,46,1) 50%, rgba(141,65,191,1) 100%)"}}>
              ЗАПОЛНЕНИЕ ЗАПОЛНЕНИЕ ЗАПОЛНЕНИЕ ЗАПОЛНЕНИЕ
        </h1>
      </header>
      <nav>
        <ul style = {{display:"flex", justifyContent:"space-around"}}>
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
      </nav>
      <main>
        <div>
          <Category></Category>
        </div>
      </main>

      <Producttape></Producttape>
      </>
    );
  }
}

let a = ["ph", "cm", "dfga", "afgag", "afa"]

// const MPopcategory = (props) => {
//   const [count, setCount] = React.useState(0)
//   return <div style = {{display:"flex", justifyContent:"center"}}>
//     <button onClick={() => setCount((count > 0 ? count : a.length)-1)}>Назад</button>
//     <h1>{a[count]}</h1>
//     <button onClick={() => setCount((count +1) % a.length)}>Вперед</button>
//   </div>
// }

const Producttape = (props) => {
  return <div style = {{display: "flex"}}>
    <div></div>
    <ProductCard img = "https://cdn-icons-png.flaticon.com/512/194/194279.png"></ProductCard>
    <ProductCard img = "https://cdn-icons-png.flaticon.com/512/194/194279.png"></ProductCard>
    <ProductCard img = "https://cdn-icons-png.flaticon.com/512/194/194279.png"></ProductCard>
    <ProductCard img = "https://cdn-icons-png.flaticon.com/512/194/194279.png"></ProductCard>
    <div></div>
  </div>
}
export default App;
