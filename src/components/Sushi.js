import React from "react";

function Sushi({image, id, name, price, createdDate}) {
  return (
    <div className="sushi">
      <div className="plate" onClick={(e) => console.log(id)}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
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
