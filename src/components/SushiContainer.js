import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer(props) {
  const [sushis, setSushis] = useState([]);
  const [endIndex, setEndIndex] = useState(4);
  const [startIndex, setStartIndex] = useState(0);

  const selectedSushis = [...sushis].slice(startIndex, endIndex);

  console.log(selectedSushis);

  // fetch sushis to display on inital render
  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((r) => r.json())
      .then(sushis => setSushis(sushis));
  },[]);

  // change indexes when More Sushi button is clicked
  function handleMoreSushi() {
    setStartIndex(startIndex + 4);
    setEndIndex(endIndex + 4);
  }

  return (
    <div className="belt">
      {selectedSushis.map((sushi) => {
          return ( <Sushi 
                    image={sushi.img_url}
                    key={sushi.id}
                    name={sushi.name}
                    price={sushi.price}
                    id={sushi.id}/>
          );
        })
      }
      <MoreButton onMoreClick={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
