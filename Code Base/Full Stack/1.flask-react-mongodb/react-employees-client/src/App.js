import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import NavBar from './components/NavBar'

// routes
import HomePage from './routes/HomePage'
import AddEmployeePage from './routes/AddEmployeePage'
import EmployeeDetailsPage from './routes/EmployeeDetailsPage'
import UpdateEmployeePage from './routes/UpdateEmployeePage'

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/employees' element={<AddEmployeePage />} />
        <Route path='/employees/:employeeId' element={<EmployeeDetailsPage />} />
        <Route path='/employees/update/:employeeId' element={<UpdateEmployeePage />} />
      </Routes>
    </Router>
  )
}