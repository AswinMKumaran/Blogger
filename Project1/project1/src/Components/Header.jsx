import React from "react";
import styles from "../../public/index.module.css"

function Header(){
  return (
    <div className={styles.h1Container}>
      <h1><span className={styles.headText}>Blog</span>ger</h1>
    </div>
  )
}

export default Header;