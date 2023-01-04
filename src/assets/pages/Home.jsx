import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import CardProduct from "../../components/Home/CardProduct";
import FilterCategory from "../../components/Home/FilterCategory";
import FilterPrice from "../../components/Home/FilterPrice";
import "./style/home.css";

const Home = () => {
  const products = useSelector((state) => state.products);

  //creacion de estado
  const [productFilter, setproductFilter] = useState();
  const [inputPrice, setinputPrice] = useState({
    from: 0,
    to: Infinity,
  });

  //fitrado de productos
  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    const filter = products?.filter((pro) =>
      pro.title.toLowerCase().includes(inputValue)
    );
    setproductFilter(filter);
  };

  useEffect(() => {
    if (products) {
      setproductFilter(products);
    }
  }, [products]);

  console.log(productFilter);

  const filterCallback = (pro) =>
    +pro.price >= inputPrice.from && +pro.price <= inputPrice.to;
  //+ adelante es para convertir a numero un string
  return (
    <>
      <Header handleChange={handleChange} />
      {/* <input onChange={handleChange} type="text" /> */}
      <FilterPrice setinputPrice={setinputPrice} />
      <FilterCategory />
      <div className="Home">
        {/* <aside>
          <div className="fixed">
            <details>
              <summary>Price</summary>
              <input />
              <input />
              <button>Filter precio</button>
            </details>

            <details>
              <summary>Category</summary>
              <ul>
                <li>Kitchen</li>
                <li>Smart TV</li>
                <li>Smartphones</li>
                <li>Computers</li>
              </ul>
            </details>
          </div>
        </aside> */}
        <div className="container">
          {productFilter?.filter(filterCallback).map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
