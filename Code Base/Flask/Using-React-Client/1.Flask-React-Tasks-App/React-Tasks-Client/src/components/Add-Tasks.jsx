import axios from "axios"
import { useState } from "react"

export default function AddTasks(props){
    const [task, setTask] = useState('')

    const formSubmit = (event) => {
        event.preventDefault()

        axios.post('http://127.0.0.1:5000/tasks', {title: task})
            .then((response) => {
                props.reload()
                alert(response.data.message)
            })

        // resetting the input field
        setTask('')
    }

    const formOnChange = (event) => {
        setTask(event.target.value)
    }

    return (
        <>
        <h3 className="text-center">Add a Task</h3>
        <form className="form text-center mt-4" onChange={formOnChange} onSubmit={formSubmit}>
            <input type="text" placeholder="Task title" value={task} required name="add-task" />
            <button type="submit">Add Task</button>
        </form>
        </>
    )
}