import React, {useState} from "react";

function Sushi({image, id, name, price, createdDate, onEaten}) {
  const [isAvailable, setisAvailable] = useState(true);

  // pass up the id of sushi that was eaten
  function handleEat() {
    setisAvailable(false);
    onEaten(id);
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEat}>
        {/* Tell me if this sushi has been eaten! */}
        {isAvailable === false ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
