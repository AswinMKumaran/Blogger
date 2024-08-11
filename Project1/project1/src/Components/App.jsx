import React, {useState} from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import AddPage from '../Pages/AddPage'

function App() {
  const [blogs, setBlogs] = useState([
    {id: 1, title: "Title 1", content: "Content 1"},
    {id: 2, title: "Title 2", content: "Content 2"},
    {id: 3, title: "Title 3", content: "Content 3"},
  ])

  function handleAdd(title, content){
    setBlogs((prevList) => {
      return [...prevList, {title: title, content: content}]
    })
    console.log("Event triggered");
  }

  function handleEdit(title, content, id){
    for (let i = 0; i < blogs.length; i++){
      if(blogs[i].id === id){
        blogs[i].title = title;
        blogs[i].content = content;
      }
    }
    setBlogs(blogs);
  }

  function handleDelete(id){
    let idToRemove = blogs.findIndex((blog) => blog.id === id)
    console.log(idToRemove, id);
    blogs.splice(idToRemove, 1);
    setBlogs(blogs);
  }

  return (
    <div className='container'>
      <Routes>
        <Route index element={<Home blogs={blogs}/>} />
        <Route path='/view/:context' element={<AddPage onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete}/>} />
      </Routes>
    </div>
  )
}

export default App
