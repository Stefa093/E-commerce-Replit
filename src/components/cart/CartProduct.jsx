import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getAllProdCart } from "../../store/slices/cart.slice";
import getConfig from "../../utils/getConfig";
import "./styles/cartProduct.css";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`;
    axios
      .delete(URL, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getAllProdCart());
      })
      .catch((err) => console.log(err));
  };

  return (
    <article className="cart__p">
      <h2 className="cart__p-title">{product.title}</h2>
      <ul>
        <li>
          <span>Price: </span>
          $ {product.price}
        </li>
        <li>
          <span>Quantity: </span>
          {product.productsInCart.quantity}
        </li>
      </ul>
      <button onClick={handleDelete} className="cart__p-btn">
        <i className="cart__p-icon bx bxs-trash"></i>
      </button>
    </article>
  );
};

export default CartProduct;
