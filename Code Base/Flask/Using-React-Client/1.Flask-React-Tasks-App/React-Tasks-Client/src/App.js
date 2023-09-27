import { useState, useEffect } from "react";
import axios from "axios";

import FetchTasks from "./components/Fetch-Tasks";
import AddTasks from "./components/Add-Tasks";

function App() {
  const [tasks, setTasks] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(()=>{
      axios.get('http://127.0.0.1:5000/tasks')
          .then((response) => setTasks(response.data))
  }, [reload])

  const changeReload = () => {
    setReload(! reload)
  }

  return (
    <div className="col-md-6 offset-md-3 mt-3 mb-3">
      <AddTasks reload={changeReload}/>
      <FetchTasks tasks={tasks} />
    </div>
  );
}

export default App;
