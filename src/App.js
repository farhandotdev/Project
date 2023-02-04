import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./Book";
import Contact from "./Contact";
import Home from "./Home";
import Track from "./Track";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/track" element={<Track />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
