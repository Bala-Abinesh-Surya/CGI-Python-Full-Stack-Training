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
    <>
    <FetchTasks tasks={tasks} />
    <AddTasks reload={changeReload}/>
    </>
  );
}

export default App;
