//import Count from "./Counter/Count";
import { Routes, Route } from "react-router-dom";
import Shop from "./CoffeeShop/Shop";
import Order from "./CoffeeShop/Order";

//import CheckList from "./Check_List/CheckList";
//import CardHome from "./use_card_App/CardHome";


function App() {
  

  return (
    <>
     {/* <Count /> */}
     {/* {<CardHome />} */}
     {/* <CheckList /> */}
       <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<Order />} />
    </Routes>
    </>
  )
}

export default App
