import axios from "axios"
import { useState } from "react"

export default function AddTasks(props){
    const [task, setTask] = useState('')

    const formSubmit = (event) => {
        event.preventDefault()

        axios.post('http://127.0.0.1:5000/tasks', {id: 10, title: task})
            .then((response) => {
                console.log(response)
                props.reload()
            })

        // resetting the input field
        setTask('')
    }

    const formOnChange = (event) => {
        setTask(event.target.value)
    }

    return (
        <form className="text-center mt-4" onChange={formOnChange} onSubmit={formSubmit}>
            <input type="text" placeholder="Task title" value={task} required name="add-task" />
            <button type="submit">Add Task</button>
        </form>
    )
}