import React from "react";
import {Link} from "react-router-dom";
import styles from "../../public/index.module.css"

function Add(props){
  return (
    
      <button className={styles.button}>
        <Link to="/view/add">
          Add A Blog
        </Link>
      </button>
    
  )
}

export default Add;