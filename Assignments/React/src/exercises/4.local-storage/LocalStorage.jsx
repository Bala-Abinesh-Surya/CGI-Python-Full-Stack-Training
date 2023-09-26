import { useState } from "react"

export default function LocalStorage(){
    const [name, setName] = useState('')
    const [storageName, setStorageName] = useState(null)

    const saveName = (event) => {
        event.preventDefault()

        localStorage.setItem("name", name)
    }

    const getName = (event) => {
        event.preventDefault()

        setStorageName(localStorage.getItem('name'))
    }

    const inputChangeHandler = (event) => {
        event.preventDefault()

        setName(event.target.value)
        setStorageName(null)
    }

    return (
        <div className="col-md-6 offset-md-3">
            <h3 className="text-center m-4">Local Storage Example</h3>

            <input type='text' onChange={inputChangeHandler} name="name" placeholder="Enter a name" value={name} />
            <button type="button" class="btn btn-primary" onClick={saveName}>Save Name</button> <br/>
            
            <button type="button" class="btn btn-success m-3" onClick={getName}>Get Name</button>
            {storageName && <p>{name}</p>}
        </div>
    )
}