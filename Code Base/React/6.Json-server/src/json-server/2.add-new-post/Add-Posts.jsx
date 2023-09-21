import { useState, useEffect } from "react"
import axios from "axios"

import JsonFetchPosts from "../1.fetch-posts/Fetch-Posts"

export default function JsonAddPosts(){
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [uploaded, setUploaded] = useState(false)

    
    // runs only once when the component gets mounted 
    // and also, if the items in the array changes
    useEffect(()=>{
        axios.get('http://localhost:3001/posts')
            .then((response) => setPosts(response.data))
    },[uploaded])

    
    const handleChange = (event) => {
        setTitle(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title})
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            // clearing the input field
            setTitle('')
        })

        // setting to let the useEffect run again
        // so that, the posts are fetched again
        setUploaded(! uploaded)


        // axios.post('http://localhost:3001/posts', {title: title})
        //     .then((response) => {
        //         console.log(response.data)

        //         // clearing the input field
        //         setTitle('')
        //     })
    }

    return (
        <div className="col-md-6 offset-md-3">
            <h3 className="text-center m-4">Add a new post</h3>
            <form className="form text-center" onSubmit={handleSubmit}>
                <input type='text' placeholder="Add a title" value={title} onChange={handleChange} required />
                <button>Submit</button>
            </form>

            <h3 className="text-center m-4">All Posts</h3>
            <ul>
                {posts.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}