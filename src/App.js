import React, { useState, useEffect } from 'react';
import './App.css';
import Navibar from './components/Navbar';
import ProdList from './components/ProdList';
import CheckoutFrom from './components/CheckoutForm';
import Row from 'react-bootstrap/Row';
import data from './data/product.json';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

 
  useEffect(() => {
    setProducts(() => data.products)
  //   axios.get('https://web-lai64u320-bird-and-be.vercel.app/api/interview')
  //       .then(response => {
  //         setProduct(response.data)
  //         console.log(response.data)
  //       });
  //       ###Error###
  //       Access to XMLHttpRequest at 'https://web-lai64u320-bird-and-be.vercel.app/api/interview' 
  //       from origin 'http://localhost:3000' has been blocked by CORS policy: 
  //       No 'Access-Control-Allow-Origin' header is present on the requested resource.
  }, []);

  function handleAdd(item) {
    const itemExist = cart.filter(i => i.id ===item.id)
    if (itemExist <= 0 ){
      setCart (()=>[...cart, item])
      setTotal(total+item.price)
    }
    console.log("added", cart)
  }

  function handleDelete(item){
    setTotal(total-item.price)
    setCart (() => cart.filter(i => i.id !==item.id))
  }

  return (
    <div className="App">
      <Navibar 
        isOpen={isOpen} 
        toggle={()=>setIsOpen(!isOpen)} 
        cart={cart.length} 
        cartList={cart}
        total={total}
        removeFromCart={handleDelete}
        show={show}
        checkout={()=>setShow(!show)}/>
      <div className="App-body">
      <h1 className="display-1">Personalized Supplements</h1>
      <Row id="product">
      {products.map(item => (
        <ProdList key={item.id} item={item} addToCart={handleAdd}/>
      ))}
      </Row>
      </div>
      {show && (<CheckoutFrom cart={cart.length}  cartList={cart}/>)}
    </div>
  );
}

export default App;
