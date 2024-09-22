






import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css";
import Todo from './components/Todo'

import Header from './components/Header'
// import Form from './components/Form'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Todo />
  {/* <Form/> */}
  </React.StrictMode>
)
