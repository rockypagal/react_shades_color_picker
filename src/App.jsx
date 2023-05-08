import Navbar from  './container/Navbar/Navbar';
import { useState } from 'react';
import Form from  './container/Form/Form';
import Color from  './container/Colors/Color';
import Values from 'values.js';
import { ToastContainer,toast } from 'react-toastify';
import './normalize.css';
import './App.css'


const local_storage = ()=>{
  let value = localStorage.getItem('color');
  if (value){
    return JSON.parse(value);
  }else{return '#6a32d2'}    
}





function App() {

  const [colors,setColors] = useState(new Values(local_storage()).all(5));
  return (
    <main>
      <Navbar/>
      <Form setColors={setColors} local_storage={local_storage} toast={toast}/>
      <Color color={colors} toast={toast} />
      <ToastContainer position="top-right" autoClose={2500} />
    </main>
  )
}

export default App
