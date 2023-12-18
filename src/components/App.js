import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [eatenSushiCost, setEatenSushiCost] = useState(0);

  function handleEat(eatenSushi) {
    setEatenSushiCost(eatenSushi.price);
  }

  return (
    <div className="app">
      <SushiContainer onEat={handleEat}/>
      <Table sushiCost={eatenSushiCost}/>
    </div>
  );
}

export default App;
