import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import { ProductsProvider, ProductsContext } from "./contexts/ProductsContext";
import { makeServer } from "./server";
import { CartProvider, CartContext } from "./contexts/CartContext";

// Call make Server
makeServer();

export { AuthContext };
export { ProductsContext };
export { CartContext } 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
