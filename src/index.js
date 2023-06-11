import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import { ProductsProvider, ProductsContext } from "./contexts/ProductsContext";
import { makeServer } from "./server";
import { CartProvider, CartContext } from "./contexts/CartContext";
import { FilterProvider, FilterContext } from "./contexts/FilterContext";
import { AddressProvider, AddressContext } from "./contexts/AddressContext";

// Call make Server
makeServer();

export { AuthContext };
export { ProductsContext };
export { CartContext };
export { FilterContext };
export { AddressContext };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <FilterProvider>
          <AuthProvider>
            <AddressProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </AddressProvider>
          </AuthProvider>
        </FilterProvider>
      </ProductsProvider>
    </Router>
  </React.StrictMode>
);
