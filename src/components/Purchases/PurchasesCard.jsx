import React from "react";

const PurchasesCard = ({ purchase }) => {
  const datePurchase = new Date(purchase.createdAt);
  console.log(purchase);
  return (
    <article style={{ padding: "20px", border: "1px solid red" }}>
      <h3>{datePurchase.toLocaleDateString()}</h3>
      <section>
        <ul>
          {purchase.cart.products.map((pro) => (
            <li key={pro.id}>
              <h4>{pro.title}</h4>
              <span>{pro.productsInCart.quantity}</span>
              <span>{pro.price}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PurchasesCard;
