import { useState } from "react";

const Header = () => {
   // const tittle = "LET'S KEEP PUSHING"
    const [ blogs, setBlogs] = useState ([
        {title: "The gods must be crazy", body: "loren ipsum....", author: "mario puzu" , id: 1},
        {title: "Fools die", body: "loren ipsum....", author: "kweasi Alex" , id: 2},
        {title: "the return of life", body: "loren ipsum....", author: "Robeto donaldoni", id: 3}
    ])

    
    return ( 
        <div className="header">
            {blogs.map((blog) => (
                console.log('maker',blog.title),
                <div className="blogs display" key={blog.id}>
                    <h2>{blog.title}</h2> <h3>{blog.body}</h3>
                    <p>writen by {blog.author}</p>

                </div>

            ))}
           

            
        </div>
     );
}
 
export default Header;