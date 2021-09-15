import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CartList (props) {
  return(
    <Card style={{ width: '220px' }}>
      <Card.Title id="cName">{props.item.name}: ${props.item.price}</Card.Title>
      <Card.Img id="cImg" variant="top" src={props.item.primary_image.url_standard} alt={props.item.primary_image.description}/>
      <Button
       onClick={() => props.removeFromCart(props.item)}
       >Remove</Button>
    </Card>
  )
}

export default CartList;