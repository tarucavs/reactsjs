import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "/../Context/CartContext";
import "./Cart.css";
import { CartProduct } from "../CartProduct/CartProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext);

  return (
    <div>
      <div className={`resumen-compra ${cart.length === 0 ? "empty" : ""}`}>
        <h2 className="detalle-compra">Resumen de compra</h2>
      </div>
      <hr />

      {cart.length > 0 ? (
        <div
          className="container-bottom"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div className="principal-container">
            {cart.map((prod) => (
              <CartProduct prod={prod} key={prod.id} />
            ))}
          </div>

          <div className="container-compra">
            <div className="container-resumen-pedido">
              <div className="title-pedido">
                <h4>RESUMEN DE PEDIDO</h4>
              </div>
              <hr style={{ color: "white" }} />
              <div className="total-compra">
                <div>
                  <h5>TOTAL:</h5>
                </div>
                <div>
                  <p style={{color: 'white', fontSize: '23px', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}}>${totalCompra()}</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="btn-compra">
              <div className="btn-pagar">
                <Link to='/checkout'> 
                <button
                  style={{ backgroundColor: "#4a90e2" }}
                  className="btn"
                >
                  CONTINUAR
                </button>
                </Link>
              </div>
              <div className="btn-vaciar">
                <button
                  onClick={vaciarCarrito}
                  className="btn btn-danger"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="mr-2"
                    style={{ fontSize: "22px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="carrito-vacio">
          <div className="texto-vacio">
            <p>El carrito está vacío.</p>
          </div>
          <Link to="/productos">
            <button style={{ backgroundColor: "#40a640" }} className="btn">
              Ir a productos
            </button>
          </Link>
          <div className="prueba"> </div>
        </div>
      )}
    </div>
  );
};

export default Cart;