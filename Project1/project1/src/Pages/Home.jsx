import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Add from '../Components/Add'
import Blog from '../Components/Blog'
import Header from '../Components/Header'
import styles from "../../public/index.module.css"


export default function Home(props){
  return (
    <>
      <div className={styles.headContainer}>
        <Header/>
        <Add/>
      </div>
      
      <div className={styles.blogContainer}>
        {props.blogs?.map((blog, blogIndex) => {
          return (<Blog title={blog.title} content={blog.content} key={blogIndex} id={blog.id}/>)
        })}
      </div>
    </>
  )
}