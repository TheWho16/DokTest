import React from "react";

import Header from "../header";
import Spares from "../spares";
import carBase from "../carBase";

 const App =()=>{

const cars = new carBase()

    return (
      <div className="main"> 
        <Header />
        <Spares cars={cars}/>
        <div className='newCarsButton'><p>Запчасти для других марок</p></div>
      </div>
    );
  }
  export default App
