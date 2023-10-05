import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// Components
import NavBar from "./components/NavBar"

// Routes
import HomePage from "./routes/HomePage"
import AddProductPage from "./routes/AddProductPage"
import UpdateProductPage from "./routes/UpdateProductPage"

export default function App(){
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/add-product' element={<AddProductPage />} />
        <Route path="/update-product/:productId" element={<UpdateProductPage />} />
      </Routes>
    </Router>
  )
}