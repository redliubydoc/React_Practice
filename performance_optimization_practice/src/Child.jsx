import React from "react";


const Child = React.memo(function ({name}) {

  console.log("Component :: Child");

  return (
    <div>{name}</div>
  );
});


export default Child;