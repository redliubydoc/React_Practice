/****************************************************
 * 1) useCallBack is used to memorize a 
 *    callback function based on the dependency array
 * 
 * 2) React.memo is used to memorize a 
 *    component based on the input props
 ****************************************************/

import { useCallback, useState } from "react";
import Child2 from "./Child2";

function Parent2() {

  console.log("Parent2");
  
  const [board, setBoard] = useState(Array(9).fill(null));

  const play = useCallback((indx, elem) => {
    console.debug(`play() :: (indx, elem) :: (${indx}, ${elem})`);
    if (elem === null) setBoard((board) => { board[indx] = "X"; return [...board]; });
  }, []);

  return (
    <div>
      {board.map((elem, indx) => <Child2 key={indx} indx={indx} elem={elem} onClick={play}></Child2>)}
    </div>
  );
}

export default Parent2;
