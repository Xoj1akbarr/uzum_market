import React from "react";
import Empty from "../../components/empty/Empty";
import wishiesImg from "../../assets/hearts.cf414be.png";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";

function Wishies() {
  let wishes = useSelector((state) => state.wishes.value);

  return (
    <div>
      {!wishes.length ? (
        <Empty
          img={wishiesImg}
          title="Sizga yoqqanini qoshing"
          description="Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
          link="/login"
        />
      ) : (
        <Product data={wishes} />
      )}
    </div>
  );
}

export default Wishies;
