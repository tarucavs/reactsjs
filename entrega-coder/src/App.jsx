import React, { useState } from 'react';
import header from './componentes/Header/header';
import ItemListContainer from '/componentes/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '/componentes/Footer/Footer';
import Cart1 from '/componentes/Cart1/Cart1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FilteredProducts } from './componentes/Productos/FilteredProducts';
import Productos from '/componentes/Productos/Productos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App({ phoneNumber }) {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

   const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleConfirmPurchase = () => {
    setCartCount(0);
    setCartItems([]);
  };

  const handleRemoveItem = (itemId) => {
    const indexToRemove = cartItems.findIndex((item) => item.id === itemId);
    if (indexToRemove !== -1) {
      const updatedItems = [...cartItems];
      updatedItems.splice(indexToRemove, 1);
      setCartItems(updatedItems);
      setCartCount((prevCount) => prevCount - 1);
    }

    const phoneNumber = '+5491158337062'; 
  };

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} handleOpenModal={handleModal} />

      <Routes>
        <Route path="/" element={<ItemListContainer nombre="Productos" addToCart={addToCart} />} />
        <Route path="/productos" element={<Productos addToCart={addToCart} />} />
        <Route path="/productos/:productoId" element={<FilteredProducts addToCart={addToCart} />} />
        <Route path="/Contacto" element={<Contacto  />} />
        <Route path="/itemDetail" element={<ItemDetail addToCart={addToCart}/>} />
        
      </Routes>
      <WhatsApp phoneNumber={phoneNumber} />
      <Footer />
      <CartModal
        cartItems={cartItems}
        showModal={showModal}
        handleCloseModal={handleModal}
        handleConfirmPurchase={handleConfirmPurchase}
        handleRemoveItem={handleRemoveItem}
      />
    </BrowserRouter>
  );
}

export default App;

