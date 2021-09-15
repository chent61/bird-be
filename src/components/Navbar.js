import React from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import CartList from './CartItem';

function Navibar (props) {
  console.log(props.cartList)
  return (
  <Navbar >
  <Container>
    <Navbar.Brand id="brand" >Bird&Be</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"><Nav>
      <Nav.Link >
        <Button onClick={props.toggle} variant="outline-light"> 
        My Cart 
        <Badge pill bg="info" >{props.cart}</Badge></Button>
        <div className={`sidebar ${props.isOpen === true ? 'active' : ''}`}>
        <div className="sd-header">
          <h4 className="mb-0">My Cart</h4>
          <Button variant="outline-primary" onClick={props.toggle}>Close</Button>
        </div>
        <hr/>
        <div className="sd-body">
          Total: ${props.total}
          {props.cartList.map(item => (
            <CartList key={item.id} item={item} removeFromCart={props.removeFromCart}/>
          ))}
          <Button id="remove" onClick={()=>{props.checkout(); props.toggle();}}>
            Checkout</Button>
        </div>
        </div>
        <div className={`sidebar-overlay ${props.isOpen === true ? 'active' : ''}`} onClick={props.toggle}></div>
      </Nav.Link>
    </Nav></Navbar.Collapse>
  </Container>
  </Navbar>
)}

export default Navibar;