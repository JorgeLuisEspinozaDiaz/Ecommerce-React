import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./assets/pages/Cart";
import CreateUser from "./assets/pages/CreateUser";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import ProductInfo from "./assets/pages/ProductInfo";
import Header from "./components/Header/Header";
import { getUserCart } from "./store/slices/cart.slice";
import { getAllProducts } from "./store/slices/products.slice";

function App() {
  //para ejecutar las actions y el thunk
  const dispach = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispach(getAllProducts());
    dispach(getUserCart());
  }, []);

  //este es el codigo para crear un nuevo usuario
  // useEffect(() => {
  //   const URL = 'https://e-commerce-api.academlo.tech/api/v1/users'
  //   const data = {
  //     firstName: "Jorge",
  //     lastName: "Espinoza",
  //     email: "espinozadiazjorgeluis@gmail.com",
  //     password: "JorgeD123",
  //     phone: "1910552498",
  //     role: "admin"
  //   }
  //   axios.post(URL, data)
  //     .then(res => res.data)
  //     .catch(err => console.log(err))
  // }
  //   , [])

  //aqui termina
  return (
    <div className="App">
      <Header />
      <Routes>
        //ruta '/' y en el elemnte retorna solo jsx
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductInfo />} />
      </Routes>
    </div>
  );
}

export default App;
