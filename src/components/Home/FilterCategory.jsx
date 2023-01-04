import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../store/slices/products.slice";

const FilterCategory = () => {
  const [categories, setSategories] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const URL =
      "https://e-commerce-api.academlo.tech/api/v1/products/categories";
    axios
      .get(URL)
      .then((res) => setSategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id) => {
    dispatch(getProductsByCategory(id));
  };
  const handleallProduct = () => {
    dispatch(getAllProducts());
  };

  console.log(categories);

  return (
    <section>
      <h3>Categories</h3>
      <ul>
        <li onClick={handleallProduct}>All products</li>
        {categories?.map((category) => (
          <li onClick={() => handleClick(category.id)} key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterCategory;
