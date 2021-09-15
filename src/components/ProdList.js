import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function ProdList (props) {
  var item = props.item
  return(
    <Col >
    <Card >
      <Card.Img variant="top" src={item.primary_image.url_standard} alt={item.primary_image.description}/>
      <Card.Body>
        <Card.Title id="card-title">{item.name}</Card.Title>
        <Card.Text id="card-body">
          {item.meta_description};
        </Card.Text>
        <Row>
        <Col><footer>$ {item.price}</footer></Col>
        <Col><Button variant="primary" 
          onClick={() => props.addToCart(item)}
          >
          Add to cart</Button></Col></Row>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default ProdList;
  