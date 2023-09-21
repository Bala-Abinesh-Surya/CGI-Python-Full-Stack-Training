import { useState } from "react";

// basics
import FunctionComponent from "./basics/1.function-component";
import ClassComponent from "./basics/2.class-component";
import OddEvenComponent from "./basics/3.odd-even";
import Ref from "./basics/4.ref-refs";

// exercises
import EchoBox from './exercises/1.echo-box'

// life cycle methods
import LifeCycleMethodsIntro from "./life-cylce-methods/1.intro";

// parent child components
import PassTheCount from "./parent-child-communication/1.pass-the-count";
import PassTheMessage from "./parent-child-communication/2.pass-a-message";
import EventBubbling from "./parent-child-communication/3.event-bubbling";

function App() {
  return (
    // To execute something else, look for something in the imports section
    <LifeCycleMethodsIntro />
  )
}

export default App;

