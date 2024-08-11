import React from "react";
import styles from "../../public/index.module.css"
import {Link} from "react-router-dom"

function Blog(props){
  
  return (
   
      <div className={styles.blog} id={props.id}>
         <Link to="/view/edit" state={{id: props.id, title: props.title, content: props.content}}>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </Link>
      </div>
    
  )
}

export default Blog;