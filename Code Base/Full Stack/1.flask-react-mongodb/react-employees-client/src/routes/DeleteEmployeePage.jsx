import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteEmployeePage() {
  const { employeeId } = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.delete(`http://127.0.0.1:5000/employees/delete/${employeeId}`)
      .then((response) => navigate('/'))
  }, [])
}
