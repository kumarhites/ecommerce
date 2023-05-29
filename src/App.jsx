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
import Footer from "./Components/Footer";
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Body />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/test" element={<Test />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
