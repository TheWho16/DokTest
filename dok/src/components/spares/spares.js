import React, { Component } from "react";
import SpareItem from "./spareItem";

class  Spares extends Component {
constructor(props){
  super(props)
  this.state = {
    stateData: this.props.cars
  }
}



 
render(){
  let cars = this.state.stateData.cars.map(c => (
    <SpareItem
      id={c.id}
      name={c.name}
      details={c.details}
      text={c.text}
      key={c.id}
    />
  ));

  return <div className="carsWrapper">{cars}</div>;
}


};

export default Spares;
