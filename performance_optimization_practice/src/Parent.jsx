import { useState } from "react";
import Child from "./Child";

function Parent() {
  
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Raj");

  console.log("Component :: Parent");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      <button onClick={() => setName((name) => `Raj@${count}`)}>{name}</button>
      <Child name={name}></Child>
    </div>
  );
}

export default Parent;
