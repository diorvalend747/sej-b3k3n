import "./App.css";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Bookmark from "./pages/Bookmark";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
