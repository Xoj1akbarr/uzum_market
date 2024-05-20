import React from "react";
import Empty from "../../components/empty/Empty";
import shopCard from "../../assets/shopocat.490a4a1.png";
import { useSelector } from "react-redux";
import CartProduct from "../../components/cart-product/CardProduct";

function Card() {
  const carts = useSelector((state) => state.carts.value);

  return (
    <div>
      {carts.length ? (
        <CartProduct data={carts} />
      ) : (
        <Empty
          img={shopCard}
          title="Savatda hozircha mahsulot yoʻq"
          description="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
          link="/"
        />
      )}
    </div>
  );
}

export default Card;
