import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Card from "./routes/card/Card";
import Wishies from "./routes/wishies/Wishies";
import NavbarMain from "./components/navbar/NavbarMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="card" element={<Card />} />
        <Route path="like" element={<Wishies />} />
      </Routes>
    </div>
  );
}

export default App;
