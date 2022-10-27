import React from "react";
import './style/cardPurchase.css'

const CardPurchase = ({ purchase }) => {
  return (
    <article className="card__purchase-container">
      <header className="card__purchase-header">{purchase.updatedAt}</header>
      <div className="card__purchase-content">
        {purchase.cart.products.map((product) => (
          <section key={product.id}>
            <div className="content-container">
              <h3 className="title-content">{product.title}</h3>
              <div className="quant-content">{product.productsInCart.quantity}</div>
              <div className="price-content">$ {product.price}</div>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default CardPurchase;
