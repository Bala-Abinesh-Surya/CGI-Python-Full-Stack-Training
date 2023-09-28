import { createBrowserRouter, RouterProvider, createRoutesFromElements, BrowserRouter as Router, Routes, Route } from "react-router-dom"

// components
import NavBar from "./components/NavBar"

// routes
import HomePage from "./routes/HomePage"
import AddEmployeePage from "./routes/AddEmployeePage"

// creating a router
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="add-employee" element={<AddEmployeePage />} />
    </Route>
  ])
)

export default function App(){
  return (
    <RouterProvider router={router} />
  )
}