import React from "react";
import "./CardProduct.css";
import {
  incCart,
  decCart,
  removeCart,
  removeAllCart,
} from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import CardForm from "./CardForm";

function CartProduct({ data }) {
  let dispatch = useDispatch();

  return (
    <div className="container">
      <div className="cart__wrapper">
        <div className="cart__products">
          {data?.map((el) => (
            <div key={el.title} className="cart__item">
              <Link to={`/product/${el.id}`} className="cart__item-left">
                <img src={el.url} alt={el.title} />
                <div>
                  <h4>{el.title}</h4>
                  <p>Kategoriya: {el.category}</p>
                </div>
              </Link>
              <div className="cart__item-right">
                <div className="cart__item-btns">
                  <button
                    disabled={el.quantity <= 1}
                    onClick={() => dispatch(decCart(el))}
                  >
                    -
                  </button>
                  <button>{el.quantity}</button>
                  <button onClick={() => dispatch(incCart(el))}>+</button>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(removeCart(el))}
                    className="cart__trash-btn"
                  >
                    <FaRegTrashAlt />
                  </button>
                  <h3>{el.price} so'm</h3>
                  <p> {el.price * el.quantity} so'm</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart__register">
          <CardForm data={data} />
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
