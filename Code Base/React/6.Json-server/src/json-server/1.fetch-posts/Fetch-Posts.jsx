import axios from "axios";
import { useEffect, useState } from "react";

export default function JsonFetchPosts(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/posts')
            .then((response) => setPosts(response.data))
    },[])

    return (
        <div className="col-md-6 offset-md-3">
            <h3 className="text-center m-4">All Posts</h3>
            <ul>
                {posts.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}