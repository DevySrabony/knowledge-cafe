import { useEffect } from "react";

const Blogs = () => {
    const[blogs ,setBlogs] =([])
    useEffect(()=>{
            fetch('blogs.json')
            .then(res=>res.json())
            .then(data=>setBlogs(data))
    } , [])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;