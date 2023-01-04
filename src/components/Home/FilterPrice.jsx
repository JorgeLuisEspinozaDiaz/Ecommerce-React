import React from "react";

const FilterPrice = ({ setinputPrice }) => {
  //acceder al form sin libreris
  const hableSubmit = (e) => {
    e.preventDefault();
    const inputFrom = +e.target.from.value;
    const inputTo = +e.target.to.value;

    if (inputFrom && inputTo) {
      setinputPrice({
        from: inputFrom,
        to: inputTo,
      });
    } else if (!inputFrom && inputTo) {
      setinputPrice({
        from: 0,
        to: inputTo,
      });
    } else if (inputFrom && !inputTo) {
      setinputPrice({
        from: inputFrom,
        to: Infinity,
      });
    }
  };
  return (
    <section>
      <h2>Price</h2>
      <form onSubmit={hableSubmit}>
        <div>
          <label htmlFor="from">From</label>
          <input type="number" id="from" />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input type="number" id="to" />
        </div>
        <button>Apply</button>
      </form>
    </section>
  );
};

export default FilterPrice;
