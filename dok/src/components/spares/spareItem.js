import React, { useState } from "react";
import buttonImageBlack from "../img/combined-shape-copy-3@2x.png";
import buttonImageBlue from "../img/button-blue-arrow@3x.png";

const SpareItem = props => {
  const [checked, setCheck] = useState(false);

  const checkCars = () => {
    setCheck(!checked);
    console.log("переход на страницу выбора автозапчатей");
  };
  const { id, name, details, text } = props;
  return (
    <div
      className="sparesConteiner"
      key={id}
    >
      <span className="sparesItem">Запчаcти на {name}</span>
      <span className="buttonImageWrapper">
        <img
          onClick={checkCars}
          src={buttonImageBlack}
          className="buttonImage"
          alt="button"
        />
      </span>
      <span className="buttonImageWrapperBlue">
        <img
          onClick={checkCars}
          src={buttonImageBlue}
          className="buttonImage"
          alt="button"
        />
      </span>

      <div className="carDetails">более {details} </div>
      <div className="txet">{text}</div>

      <hr />
    </div>
  );
};

export default SpareItem;
