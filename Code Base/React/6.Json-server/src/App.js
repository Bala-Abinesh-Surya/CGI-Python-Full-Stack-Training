import React from "react";

// fetch posts
import JsonFetchPosts from "./json-server/1.fetch-posts/Fetch-Posts";

// add post
import JsonAddPosts from "./json-server/2.add-new-post/Add-Posts";

// employee data
import FetchEmployeeData from "./json-server/3.employee-data-mock/fetch-employee-data";

function App() {
  return ( 
    // run the json-server first before starting the app
    // command for starting: json-server --watch <db.json> --port 3001
    // <db.json> => posts.json for adding and fetching posts
    // <db.json> => employee.json for fetching the employees
    <FetchEmployeeData />
  );
}

export default App;

