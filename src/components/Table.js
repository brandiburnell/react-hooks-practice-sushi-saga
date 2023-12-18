import React, {useEffect, useState} from "react";

function Table({ plates = [], sushiCost }) {
  const [money, setMoney] = useState(100);
  const [eatenPlates, setEatenPlates] = useState(0);
  const [newPlates, setNewPlates] = useState([]);
   
  // only reset the money when sushiCost changes
  useEffect(() => {
    if (money - sushiCost < 0) {
      return;
    }
    else {
      if (eatenPlates === 0) {
        setMoney(() => money - sushiCost);
        setEatenPlates(() => eatenPlates + 1);
      }
      else {
        setEatenPlates(() => eatenPlates + 1);
        console.log(eatenPlates);
        setNewPlates(() => [...newPlates, eatenPlates]);
        setMoney(() => money - sushiCost)
      }
    }
  }, [sushiCost]);


  // renders an empty plate for every element in the array
  const emptyPlates = newPlates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${money /* Give me how much money I have left */} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
