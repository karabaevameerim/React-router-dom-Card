import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../AddForm/AddForm.css'
const AddForm = (props) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice]= useState("");
  const [ descr, setDescr] = useState("");

  const handleValues = ()=>{
    let newObj = {
      image: image,
      title: title,
      price: price,
      descr: descr,
    };
    props.handleSome(newObj)
  }
  return (
    <div style={{margin: "80px"}}>
      < input className='inp'   onChange={(e)=> setImage(e.target.value)} type="url" placeholder='image'/>
      < input className='inp'  onChange={(e)=> setTitle(e.target.value)}  type="text" placeholder='title' />
      < input className='inp'  onChange={(e)=> setPrice(e.target.value)}  type="text" placeholder='price' />
      < input className='inp'  onChange={(e)=> setDescr(e.target.value)}  type="text" placeholder='description' />
      <Link to="/"><button onClick={handleValues}>Add</button></Link>
    </div>
  )
}

export default AddForm