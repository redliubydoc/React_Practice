import React from "react";

const Child2 = React.memo(function ({ indx, elem, onClick }) {

  console.log(`Child2 :: (indx, elem) :: (${indx}, ${elem})`);
  return (<button onClick={() => onClick(indx, elem)}>{elem === null ? "O" : elem}</button>);
});

export default Child2;
