import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from '../components/Header/header';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Footer from '../components/Footer/Footer';
import CartModal from '../componentes/cart1/cart1';
import FilteredProducts from '../componentes/Productos/FilteredProducts';
import Productos from '../componentes/Productos/Productos';
import Contacto from './componentes/Contacto/Contacto';
import { ItemDetail } from './componentes/ItemDetail/ItemDetail';
import WhatsApp from '../components/WhatsApp/WhatsApp';
import Cart from '../components/Cart1/Cart1';
import { AuthContext } from "./Context/AuthContext";
import { CartContext } from "./Context/CartContext";
import LoginScreen from '/componentes/Auth/LoginScreen';
import RegisterScreen from '/componentes/Auth/RegisterScreen';
import Checkout from './componentes/Checkout/Checkout';

const AppRouter = () => {
  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const phoneNumber = '+5491124532712';

  return (
    <BrowserRouter>
      {user.logged ? (
        <>
          <NavBar handleOpenModal={handleModal} />
          <Routes>
            <Route path="/" element={<ItemListContainer nombre="Productos" />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:productoId" element={<FilteredProducts />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout cart={cart} totalCompra={totalCompra} vaciarCarrito={vaciarCarrito} />} />
            <Route path="/itemDetail" element={<ItemDetail />} />
          </Routes>
          <WhatsApp phoneNumber={phoneNumber} />
          <Footer />
          <CartModal
            showModal={showModal}
            handleCloseModal={handleModal}
          />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default AppRouter;