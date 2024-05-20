import React from "react";
import "./navbar.css";
import { CiFlag1 } from "react-icons/ci";

function SubHeader() {
  return (
    <div className="subheader">
      <div className="container">
        <div className="subheader-wrapper">
          <div className="subheader-item">
            <p>Shahar: Namangan</p>
          </div>

          <div className="subheader-item">
            <p>Topshirish punktlari</p>
          </div>

          <div className="subheader-item">
            <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
          </div>

          <div className="subheader-item">
            <p>Uzumda soting</p>
          </div>

          <div className="subheader-item">
            <p>Savol-javoblar</p>
          </div>

          <div className="subheader-item">
            <p>Buyurtmalarim</p>
          </div>

          <select className="subheader-item">
            <option value="O'zbekcha"> O'zbekcha</option>
            <option value="Ruscha">Ruscha</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
