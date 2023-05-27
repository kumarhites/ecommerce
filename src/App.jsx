import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./pages/Home/Home";
import Test from "./pages/test/test";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import { PrivateRoute } from "./utils/ProtectedRoutes";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/test" element={<Test />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
