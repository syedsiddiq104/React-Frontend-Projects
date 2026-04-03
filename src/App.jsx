import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieHub from "./pages/MovieHub";
import OtpValidation from "./pages/OtpValidation";
import { ToastContainer } from "react-toastify";
import Todo from "./pages/Todo";
import Index from "./pages/BikesHub";
import Collection from "./pages/BikesHub/Collection";
import BikeDetails from "./pages/BikesHub/BikeDetails";

const App = () => {

  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <ToastContainer autoClose={1500} />

      <div className="flex">

        <Navbar open={open} setOpen={setOpen} />

        <div
          className={`${
            open ? "ml-64" : "ml-20"
          } flex-1 transition-all duration-300 `}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<MovieHub />} />
            <Route path="/otpvalidation" element={<OtpValidation />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/index" element={<Index />} />
            <Route path="/bikes/collection" element={<Collection />} />
            <Route path="/bikes/:id" element={<BikeDetails />} />
          </Routes>
        </div>

      </div>

    </BrowserRouter>
  );
};

export default App;