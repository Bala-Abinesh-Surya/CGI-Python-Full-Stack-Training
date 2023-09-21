import React from "react";

// apis
import GetPersonsList from "./apis/1.GetRequest";
import PostRequest from "./apis/2.PostRequest";
import PostRequestErrorHandling from "./apis/3.PostRequestErrorHandling";
import AsyncAwait from "./apis/4.post-async-await";

function App() {
  return ( 
    // To execute something else, look for the imports above
    <GetPersonsList />
  );
}

export default App;

