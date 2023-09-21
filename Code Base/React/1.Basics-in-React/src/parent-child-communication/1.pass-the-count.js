import { useState } from "react";

// child components
import Button from "./button";
import Display from "./display";

function PassTheCount() {
  const [counter, setCounter] = useState(0); // array destructuring

  function handleClick(increment){
    setCounter((counter) => counter + increment)
  }

  return ( 
    // There are four different ways to wrap up multiple components into a single component
    // 1. using div
    // 2. using Fragment (React.Fragment)
    // 3. using <> and </>
    // 4. using arrays [] (adding the child components within an array)

    // in these 4 methods, only in the div
    // div is added as a seperate element in the DOM along with its children
    // in other methods, only the children are added in the DOM
   [
    <Button increase={handleClick} increment={1}/>,
    <Button increase={handleClick} increment={5}/>,
    <Button increase={handleClick} increment={10}/>,
    <Button increase={handleClick} increment={100}/>,
      <Display message={counter} />
   ]
  );
}

export default PassTheCount;

