import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./Book";
import Home from "./Home";
import Track from "./Track";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
