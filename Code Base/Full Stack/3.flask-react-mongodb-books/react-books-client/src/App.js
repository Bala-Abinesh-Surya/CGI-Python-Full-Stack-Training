import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// components
import NavBar from "./components/NavBar"

// routes
import HomePage from "./routes/HomePage"
import AddBookPage from "./routes/AddBookPage"
import UpdateBookPage from "./routes/UpdateBookPage"

export default function App(){
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/update-book/:bookId" element={<UpdateBookPage />} />
      </Routes>
    </Router>
  )
}