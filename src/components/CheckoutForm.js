import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';

function CheckoutFrom (props){
  return(
  <Form  className="App-body">
    {props.cartList.map(item => (
      <Items key={item.id} item={item}/>
    ))}
    
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label >Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Row>
  
    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Subsrciption" />
      <Button variant="primary" type="Shipping Address">
    Submit
  </Button>
    </Form.Group>
  </Form>)
}

function Items (props) {
  return(<Alert variant="primary" id="alert">
    {props.item.name} - Price {props.item.price}
  </Alert>)
}

export default CheckoutFrom;