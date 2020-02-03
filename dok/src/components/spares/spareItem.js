import React, { useState } from "react";
import buttonImageBlack from "../img/combined-shape-copy-3@2x.png";
import buttonImageBlue from "../img/button-blue-arrow@3x.png";

const SpareItem = props => {
  const [checked, setCheck] = useState(false);

  const checkCars = () => {
    setCheck(!checked);
  };
  const { id, name, details, text } = props;
  return (
    <div
      className={checked ? "sparesConteinerCliced" : "sparesConteiner"}
      key={id}
    >
      <span className="sparesItem">Запчаcти на {name}</span>
      <span className="buttonImageWrapper">
        <img
          onClick={checkCars}
          src={checked ? buttonImageBlue : buttonImageBlack}
          className="buttonImage"
          alt="button"
        />
      </span>
      {checked ? (
        <>
          <div className="carDetails">более {details} </div>
          <div className="txet">{text}</div>
        </>
      ) : null}

      {checked ? null : <hr />}
    </div>
  );
};

export default SpareItem;
