import React from 'react'
import Card from 'react-bootstrap/Card';
const Home = ({some}) => {
  return (
    <div className='container d-flex justify-content-around'>{some.map((item)=>(
      <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src={item.image}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         {item.descr}
        </Card.Text>
        <Card.Text>{item.price} $ </Card.Text>
      </Card.Body>
    </Card>
     ))}</div>
  )
}

export default Home