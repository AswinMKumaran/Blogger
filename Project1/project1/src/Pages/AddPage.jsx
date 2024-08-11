import React, {useState} from "react";
import {useNavigate, useParams, useLocation} from "react-router-dom";
import styles from "../../public/add.module.css"

export default function AddPage(props){
  let {state} = useLocation();
  let params = useParams();
  let navigateTo = useNavigate();
  let context = params.context;

  const [title, setTitle] = useState(context === "edit" ? state.title : "");
  const [content, setContent] = useState(context === "edit" ? state.content : "");

  function changeTitle(event){
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function changeContent(event){
    const newContent = event.target.value;
    setContent(newContent);
  }
  
  function addButtonClicked(){
    props.onAdd(title, content);
    navigateTo("/");
  }

  function editButtonClicked(){
    props.onEdit(title, content, state.id);
    navigateTo("/");
  }

  function deleteButtonClicked(){
    props.onDelete(state.id);
    navigateTo("/");
  }

  return (
    <div className={styles.addPContainer}>
      <h1><span>{context === "add" ? "Add" : "Edit"}</span> A Post</h1>
      <div className={styles.inputContainer}>
        <input type="text" placeHolder="Title" className={styles.titleInput} onChange={changeTitle} value={title}></input>
        <textarea rows="20" cols="50" placeholder="Content" className={styles.contentInput} onChange={changeContent} value={content}></textarea>
        
      </div>
      <div className={styles.btnContainer}>
        {context === "add" ? <button onClick={addButtonClicked}>Add</button> : <button onClick={editButtonClicked}>Edit</button>}
        {context === "edit" && (<button onClick={deleteButtonClicked}>Delete</button>)}
      </div>
    </div>
  )
}