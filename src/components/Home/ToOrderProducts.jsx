import React from "react";
import { useDispatch } from "react-redux";
import {
  ascendingOrder,
  desendingOrder,
} from "../../store/slices/products.slice";

const ToOrderProducts = () => {
  const dispatch = useDispatch();

  const handleAscending = () => {
    dispatch(ascendingOrder());
  };
  const handleDesending = () => {
    dispatch(desendingOrder());
  };

  return (
    <div>
      <button onClick={handleAscending}>Ascending Order</button>
      <button onClick={handleDesending}>Descending Order</button>
    </div>
  );
};

export default ToOrderProducts;
