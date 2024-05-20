import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import "./Product.css";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToWishies, removeFromWishies } from "../../redux/wishiesSlice";
import { incCart } from "../../redux/cartSlice";

function Product({ data }) {
  const dispatch = useDispatch();
  let wishes = useSelector((state) => state.wishes.value);

  return (
    <div className="product">
      <div className="container">
        <h2 className="product-heading">Tavsiyalar</h2>

        <div className="product-wrapper">
          {data.map((el, index) => {
            return (
              <div className="product-card">
                <div className="product-card-img-wrapper">
                  <a className="product-card-img-link" href="">
                    <img className="product-card-img" src={el.url[0]} alt="" />
                  </a>

                  {wishes?.some((item) => item.id === el.id) ? (
                    <div
                      onClick={() => dispatch(removeFromWishies(el))}
                      className="product-card-heart"
                    >
                      <FaHeart />
                    </div>
                  ) : (
                    <div
                      onClick={() => dispatch(addToWishies(el))}
                      className="product-card-heart"
                    >
                      <CiHeart />
                    </div>
                  )}
                </div>

                <div className="product-card-body">
                  <h2 className="product-card-title">{el.title}</h2>
                  <mark>{(el.price * 1.5) / 12} So'm / Oyiga </mark>

                  <div className="product-card-price-wrapper">
                    <div className="product-card-price-item">
                      <del>{el.price * 1.5}</del>
                      <p>{el.price}</p>
                    </div>

                    <div
                      onClick={() => dispatch(incCart(el))}
                      className="product-card-price-icon"
                    >
                      <TbShoppingBagPlus />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
